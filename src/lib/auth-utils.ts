export type UserRole = "USER" | "MODERATOR" | "ADMIN" | "SUPER_ADMIN";

// Route config type
export type RouteConfig = {
  exact: string[];
  patterns: RegExp[];
};

// Public auth routes
export const authRoutes = ["/login", "/register", "/forgot-password"];

// Common protected routes (all authenticated users)
export const commonProtectedRoutes: RouteConfig = {
  exact: ["/my-profile", "/settings", "/change-password", "/reset-password"],
  patterns: [],
};

// User routes
export const userProtectedRoutes: RouteConfig = {
  exact: [],
  patterns: [/^\/dashboard/, /^\/travel/, /^\/groups/],
};

// Moderator routes
export const moderatorProtectedRoutes: RouteConfig = {
  exact: [],
  patterns: [/^\/moderator/],
};

// Admin routes
export const adminProtectedRoutes: RouteConfig = {
  exact: [],
  patterns: [/^\/admin/],
};

// Super Admin routes
export const superAdminProtectedRoutes: RouteConfig = {
  exact: [],
  patterns: [/^\/super-admin/],
};

// ---------- Helpers ----------

export const isAuthRoute = (pathname: string): boolean =>
  authRoutes.includes(pathname);

export const isRouteMatches = (
  pathname: string,
  routes: RouteConfig
): boolean => {
  if (routes.exact.includes(pathname)) return true;
  return routes.patterns.some((pattern) => pattern.test(pathname));
};

// Identify route owner by role
export const getRouteOwner = (pathname: string): UserRole | "COMMON" | null => {
  if (isRouteMatches(pathname, superAdminProtectedRoutes)) return "SUPER_ADMIN";
  if (isRouteMatches(pathname, adminProtectedRoutes)) return "ADMIN";
  if (isRouteMatches(pathname, moderatorProtectedRoutes)) return "MODERATOR";
  if (isRouteMatches(pathname, userProtectedRoutes)) return "USER";
  if (isRouteMatches(pathname, commonProtectedRoutes)) return "COMMON";
  return null;
};

// Default dashboard per role
export const getDefaultDashboardRoute = (role: UserRole): string => {
  switch (role) {
    case "SUPER_ADMIN":
      return "/admin/dashboard";
    case "ADMIN":
      return "/admin/dashboard";
    case "MODERATOR":
      return "/moderator/dashboard";
    case "USER":
      return "/dashboard";
    default:
      return "/";
  }
};

// Validate redirect path based on role
export const isValidRedirectForRole = (
  redirectPath: string,
  role: UserRole
): boolean => {
  const routeOwner = getRouteOwner(redirectPath);

  if (routeOwner === null || routeOwner === "COMMON") return true;
  return routeOwner === role;
};
