import { NextResponse } from "next/server";

const PUBLIC_PATHS = ["/login", "/register", "/forgot-password"];
const PROTECTED_PATHS = ["/cart", "/checkout", "/profile"];

export function middleware(request) {
  const authToken = request.cookies.get("token");
  const { pathname } = request.nextUrl;

  // Check for public routes
  const isPublicRoute = PUBLIC_PATHS.some((path) => pathname.startsWith(path));

  // Redirect to home if accessing public route with auth
  if (isPublicRoute && authToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Check for protected routes (including profile sub-paths)
  const isProtectedRoute = PROTECTED_PATHS.some(
    (path) =>
      pathname.startsWith(path) ||
      (path === "/profile" && pathname.match(/^\/profile\/.*$/)),
  );

  // Redirect to login if accessing protected route without auth
  if (isProtectedRoute && !authToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/forgot-password",
    "/cart",
    "/checkout",
    "/profile/:path*",
  ],
};
