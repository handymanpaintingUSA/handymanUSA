import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Strict Security Headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;"
  );

  // Protect internal provisioning paths
  if (request.nextUrl.pathname.startsWith('/api/provision')) {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || authHeader !== 'Bearer ' + process.env.INTERNAL_PROVISION_SECRET) {
      return new NextResponse(JSON.stringify({ error: 'Unauthorized infrastructure access.' }), {
        status: 401,
        headers: { 'content-type': 'application/json' },
      });
    }
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
