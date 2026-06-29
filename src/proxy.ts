import { NextRequest, NextResponse } from "next/server";

const CITY_REDIRECTS: Record<string, string> = {
  "/jeddah":  "/locations/jeddah",
  "/makkah":  "/locations/makkah",
  "/madinah": "/locations/madinah",
  "/taif":    "/locations/taif",
  "/badr":    "/locations/badr",
};

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get("host") ?? "";

  // www → non-www redirect
  if (hostname.startsWith("www.")) {
    const url = request.nextUrl.clone();
    url.host = hostname.slice(4);
    return NextResponse.redirect(url, { status: 301 });
  }

  // Flat city path → /locations/[city]
  const newPath = CITY_REDIRECTS[pathname];
  if (newPath) {
    const url = request.nextUrl.clone();
    url.pathname = newPath;
    return NextResponse.redirect(url, { status: 301 });
  }

  // Security headers on all responses
  const response = NextResponse.next();
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  response.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      "connect-src 'self'",
      "frame-ancestors 'self'",
    ].join("; ")
  );
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images/|icons/).*)",
  ],
};
