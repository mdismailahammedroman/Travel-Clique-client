import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";

interface UserInterface {
  id: string;
  email: string;
  role: "ADMIN" | "USER" | "MODERATOR" | "SUPER_ADMIN";
  exp: number;
  iat: number;
}

// Routes allowed per role
const roleBaseRouter: Record<UserInterface["role"], string[]> = {
  SUPER_ADMIN: ["/"], // access everything
  ADMIN: ["/admin", "/dashboard/*"],
  MODERATOR: ["/moderator", "/dashboard/*"],
  USER: ["/dashboard", "/profile/*", "/my-travel-plan", "/travel-plan"],
};

// Public routes (no auth required)
const authRoutes = [
  "/",
  "/login",
  "/refresh-token",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/logout",
];

export default async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  // Skip static files and assets
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/sitemap.xml") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/.well-known/") ||
    pathname.match(/\.(png|jpg|jpeg|gif|svg|css|js)$/)
  ) {
    return NextResponse.next();
  }

  let user: UserInterface | null = null;

  // Public routes (no auth required)
  if (authRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // No tokens → redirect to login
  if (!accessToken && !refreshToken) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${encodeURIComponent(pathname)}`, request.url)
    );
  }

  // Decode access token
  if (accessToken) {
    try {
      user = jwtDecode<UserInterface>(accessToken);
      console.log("Decoded User:", user); // Debugging log
    } catch (err) {
      console.log("Error decoding access token:", err);
    }
  }

  // Refresh token if access token is invalid
  if (!user && refreshToken) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refreshToken }),
        }
      );

      if (res.ok) {
        const data = await res.json();
        user = jwtDecode<UserInterface>(data.accessToken);
        const response = NextResponse.next();
        response.cookies.set("accessToken", data.accessToken, {
          httpOnly: true,
          path: "/",
        });
        return response;
      } else {
        const response = NextResponse.redirect(
          new URL(`/login?redirect=${pathname}`, request.url)
        );
        response.cookies.delete("accessToken");
        response.cookies.delete("refreshToken");
        return response;
      }
    } catch (err) {
      console.log("Error refreshing token:", err);
      const response = NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url)
      );
      response.cookies.delete("accessToken");
      response.cookies.delete("refreshToken");
      return response;
    }
  }

  // Role-based route check
  if (user) {
    const allowedRoutes = roleBaseRouter[user.role] || [];
    console.log("Allowed Routes for Role:", allowedRoutes); // Debug log
    const isAllowed = allowedRoutes.some((route) => {
      if (route.endsWith("/*")) {
        return pathname.startsWith(route.replace("/*", ""));
      }
      return pathname === route;
    });

    if (isAllowed) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }

  // Fallback → redirect to login
  return NextResponse.redirect(
    new URL(`/login?redirect=${encodeURIComponent(pathname)}`, request.url)
  );
}

// ✅ Middleware matcher — no capturing groups
export const config = {
  matcher: [
    /*
     * Match all routes except:
     * - API routes
     * - Next.js internal static files
     * - Images, CSS, JS, favicon, sitemap, robots.txt, .well-known
     */
    "/:path*", // Match everything, exclusions handled in middleware
  ],
};
