import { UserSession } from "context/AuthContext";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";

const publicRoutes = [
  {
    path: "/sign-in",
    whenAuthenticated: "redirect",
  },
  {
    path: "/register",
    whenAuthenticated: "redirect",
  },
] as const;

const adminRoutes = [
  {
    path: "/admin",
    whenAuthenticated: "redirect",
  },
] as const;

const REDIRECT_NOT_AUTHENTICATED_ROUTE = "/sign-in";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const publicRoute = publicRoutes.find((route) => route.path === path);
  const adminRoute = adminRoutes.find((route) => route.path === path);
  const authToken = request.cookies.get("access_token");
  let decodedUser;
  if (authToken) decodedUser = jwt.decode(authToken.value) as UserSession;

  if (!authToken && publicRoute) {
    return NextResponse.next();
  }

  if (!authToken && !publicRoute) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_NOT_AUTHENTICATED_ROUTE;

    return NextResponse.redirect(redirectUrl);
  }

  if (
    authToken &&
    publicRoute &&
    publicRoute.whenAuthenticated === "redirect"
  ) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/";

    return NextResponse.redirect(redirectUrl);
  }

  if (authToken && adminRoute && decodedUser.role !== "admin") {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/";

    return NextResponse.redirect(redirectUrl);
  }

  if (authToken && !publicRoute) {
    const currentTime = Math.floor(Date.now() / 1000);
    if (decodedUser.exp < currentTime) {
      (await cookies()).delete("access_token");
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = REDIRECT_NOT_AUTHENTICATED_ROUTE;

      return NextResponse.redirect(redirectUrl);
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config: MiddlewareConfig = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
