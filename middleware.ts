import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const token = req.auth?.token;
  const { pathname } = req.nextUrl;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (pathname.startsWith("/dashboard/admin") && token.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/dashboard/user", req.url));
  }

  if (pathname.startsWith("/dashboard/user") && token.role !== "USER") {
    return NextResponse.redirect(new URL("/dashboard/admin", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/dashboard/:path*"],
};
