import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes: string[] = [
  "/dashboard",
  "/product",
  "/statistic",
  "/banner",
  "/category",
];

export default async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.JWT_SECRET_KEY,
  });

  if (
    protectedRoutes.includes(request.nextUrl.pathname) ||
    request.nextUrl.pathname.startsWith("/order")
  ) {
    if (!token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  if (request.nextUrl.pathname == "/") {
    if (token) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();
  }
}
