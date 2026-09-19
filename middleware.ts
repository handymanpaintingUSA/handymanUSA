import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Basic Security Headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Protect internal provisioning paths safely with fallback checking
  if (request.nextUrl.pathname.startsWith('/api/provision')) {
    const authHeader = request.headers.get('authorization');
    const secret = process.env.INTERNAL_PROVISION_SECRET;

    if (!secret || !authHeader || authHeader !== `Bearer ${secret}`) {
      return new NextResponse(JSON.stringify({ error: 'Unauthorized infrastructure access.' }), {
        status: 401,
        headers: { 'content-type': 'application/json' },
      });
    }
  }

  return response;
}

export const config = {
  // Exclude static assets, public files, and root static HTML files from middleware invocation
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.html$).*)'],
};
