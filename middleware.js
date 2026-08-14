import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();
  
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://*.arcgisonline.com; connect-src 'self' https://*.arcgisonline.com *;"
  );
  
  return response;
}

export const config = {
  matcher: '/:path*',
};
