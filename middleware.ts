import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("jwt")?.value;
  console.log(token);
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else {
    return NextResponse.redirect(new URL("/order", request.url));
  }
}

export const config = {
  matcher: "/order",
};
