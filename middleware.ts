import { NextRequest, NextResponse } from "next/server";

import { getCurrentUser } from "./src/services-api/authServices";
import { TUser } from "./src/types/user";

// Define allowed routes
const authRoutes = ["/login", "/register", "/dashboard", "/auth/shop/registerShop", "/auth/shop/loginShop"];
const publicRoutes = ["/", "/about-us", "/contact-us"];

const roleBasedPrivateRoutes: Record<TUser["role"], RegExp[]> = {
  USER: [/^\/user/],
  SELLER: [/^\/seller/],
  ADMIN: [/^\/admin/, /^\/admin(?:\/.*)?$/],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log("Middleware executing - Path:", pathname);

  // Fetch user information
  const userInfo = await getCurrentUser();
  console.log({userInfo})

  // ✅ 1️⃣ Allow public routes without authentication
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // ✅ 2️⃣ Handle Unauthenticated Users
  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next(); // Allow login & register pages
    } else {
      // Redirect unauthorized users to login with a redirect path
      console.log(request.url);
      return NextResponse.redirect(
        new URL(
          `/auth/shop/loginShop?redirectPath=${encodeURIComponent(pathname)}`,
          request.url,
        ),
      );
    }
  }

  // ✅ 3️⃣ Role-Based Access Control (RBAC)
  if (userInfo.role && roleBasedPrivateRoutes[userInfo.role]) {
    const allowedRoutes = roleBasedPrivateRoutes[userInfo.role];
    const isAuthorized = allowedRoutes.some((route) => route.test(pathname));

    if (isAuthorized) {
      return NextResponse.next(); // Allow access if authorized
    } else {
      return NextResponse.redirect(new URL("/", request.url)); // Redirect unauthorized access
    }
  }

  // ✅ 4️⃣ Default: Redirect unauthorized users
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/auth/shop/registerShop",
    "/auth/shop/loginShop",
    "/dashboard/:path*",
    "/user/:path*",
    "/seller/:path*",
    "/admin/:path*",
  ],
};
