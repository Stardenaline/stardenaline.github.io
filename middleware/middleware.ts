import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Protect direct access to /assets directory
  if (pathname.startsWith('/assets/')) {
    // Check if it's an internal request (coming from our site)
    const referer = request.headers.get('referer')
    const isInternal = referer?.includes(request.nextUrl.origin) || false
    
    // Check for Next.js internal requests
    const isNextInternal = 
      request.headers.get('x-middleware-prefetch') === '1' ||
      request.headers.get('x-nextjs-data') === '1' ||
      request.headers.get('user-agent')?.includes('Next.js')
    
    // Allow internal requests, block external direct access
    if (!isInternal && !isNextInternal) {
      // Return 403 Forbidden for external direct access
      return new NextResponse(
        JSON.stringify({
          error: 'Forbidden',
          message: 'Assets are only accessible internally'
        }),
        {
          status: 403,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      )
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /static (inside /public)
     * 4. /favicon.ico, /robots.txt
     * 5. /sitemap.xml
     */
    '/((?!api|_next|static|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}
