import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define your public and protected paths
const isPublicRoute = createRouteMatcher([
  "/login",
  "/register",
  "/forgot-password",
]);
const isProtectedRoute = createRouteMatcher(["/cart", "/checkout", "/profile"]);

export default clerkMiddleware(async (auth, request) => {
  if (isProtectedRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/",
    "/(api|trpc)(.*)",
  ],
};
