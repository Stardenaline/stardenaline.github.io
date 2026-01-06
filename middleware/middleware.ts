import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Protect direct access to /assets
  if (pathname.startsWith('/assets')) {
    // Check if request is coming from Next.js internal routing
    const referer = request.headers.get('referer')
    const isInternalRequest = referer?.includes(request.nextUrl.origin) || 
                             request.headers.get('x-middleware-prefetch')
    
    if (!isInternalRequest && process.env.NODE_ENV === 'production') {
      return new NextResponse('Access Forbidden', { status: 403 })
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/assets/:path*'
}