import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const token = request.cookies.get("jwtToken")?.value || "";
  
  const publicPath = request.nextUrl.pathname === "/join" ||  request.nextUrl.pathname === "/login"
  const protectedPath = request.nextUrl.pathname === "/chat"

  if (publicPath && token) {
    return Response.redirect(new URL("/chat", request.nextUrl));
  }
  if (protectedPath && !token) {
    return Response.redirect(new URL("/login", request.nextUrl));
  }
  
}

// return NextResponse.redirect(new URL("/home", request.url));

export const config = {
  matcher: ["/join", "/login", "/chat"],
};
