import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Block direct access to /Assets folder
  if (pathname.startsWith('/Assets/')) {
    return new NextResponse('Access Forbidden', {
      status: 403,
      headers: {
        'Content-Type': 'text/plain',
      },
    })
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/Assets/:path*',
}
