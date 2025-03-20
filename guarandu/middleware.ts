import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/"]);

export default clerkMiddleware((auth, req) => {
  if (isPublicRoute(req)) {
    return;
  }
  auth.protect();
});

export const config = {
  matcher: [
    // This pattern ensures middleware runs only for routes, excluding Next.js internals
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
