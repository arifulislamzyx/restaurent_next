import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const protectedPatch = [
  "/api/deleteCartItem",
  "/api/fetchCartItems",
  "/dashboard",
];

export async function middleware(req) {
  const path = req.nextUrl.pathname;

  if (
    !protectedPatch.some((protectedPatch) => path.startsWith(protectedPatch))
  ) {
    return NextResponse.next();
  }

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/deleteCartItem", "/api/fetchCartItems", "/dashboard/:path*"], //
};