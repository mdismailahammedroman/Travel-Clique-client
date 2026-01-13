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

const roleBaseRouter = {
  SUPER_ADMIN: ["/"], // access everything
  ADMIN: ["/admin", "/dashboard/*"],
  MODERATOR: ["/moderator", "/dashboard/*"],
  USER: ["/dashboard", "/profile/*"],
};

const authRoutes = [
  "/login",
  "/refresh-token",

  "/forgot-password",
  "/reset-password",
  "/logout",
];

export default async function proxy(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;
  const { pathname } = request.nextUrl;
  let user: UserInterface | null = null;

  // If the route is public, skip checks
  if (authRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // If no tokens, redirect to login
  if (!accessToken && !refreshToken) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${encodeURIComponent(pathname)}`, request.url)
    );
  }

  // Try to decode access token
  if (accessToken) {
    try {
      user = jwtDecode(accessToken);
    } catch (error) {
      console.log("error decoding access token", error);
    }
  }

  // If access token invalid but refresh token exists
  if (!user && refreshToken) {
    try {
      const refersRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refreshToken }),
        }
      );

      if (refersRes.ok) {
        const data = await refersRes.json();
        user = jwtDecode(data.accessToken);
      } else {
        const response = NextResponse.redirect(
          new URL(`/login?redirect=${pathname}`, request.url)
        );
        response.cookies.delete("accessToken");
        response.cookies.delete("refreshToken");
        return response;
      }
    } catch (err) {
      console.log("error refreshing token:", err);
      const response = NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url)
      );
      response.cookies.delete("accessToken");
      response.cookies.delete("refreshToken");
      return response;
    }
  }

  if (user) {
    const allowedRouters = user ? roleBaseRouter[user.role] : [];

    if (allowedRouters && allowedRouters.some((r) => pathname.startsWith(r))) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }
  if (authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  // All good, continue
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.well-known).*)",
  ],
};
