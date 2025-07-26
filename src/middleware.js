import { NextResponse } from 'next/server';

export function middleware(request) {
  // Safely get the cookie (preventing TypeError)
  const currentCookie = request.cookies.get("nextjs-token");

  // Optional chaining to avoid crash if cookie is missing
  console.log(currentCookie?.value);

  // Dummy user for testing
  const dummyUserData = {
    role: "user",
    email: "test@admin.com",
  };

  // Check if user is visiting /services route
  const isServicePage = request.nextUrl.pathname.startsWith("/services");

  // Correct comparison (===) instead of assignment (=)
  const isAdmin = dummyUserData.role === "admin";

  // Redirect non-admin users from /services to /login
  if (isServicePage && !isAdmin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow request if no restriction matched
  return NextResponse.next();
}
