import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/auth" && request.cookies.has("login")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!request.cookies.has("login")) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }
  console.log("middle");
  return NextResponse.next({ request });
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/cart", "/dashboard"],
};
