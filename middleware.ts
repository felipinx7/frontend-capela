import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token && (request.nextUrl.pathname.startsWith("/dashboard-capela") || request.nextUrl.pathname.startsWith("/dashboard-usuario"))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard-capela/:path*", "/dashboard-usuario/:path*"],
};
