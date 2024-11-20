import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import Cookies from 'js-cookie'
import { redirect } from 'next/navigation'
import { parse } from 'cookie';
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

  // console.log('Kamu berhasil melewati render')
  const nextpath = request.nextUrl
  const token = request.cookies.get('token')
  // const headercookie = request.headers.get('cookie') || ''
  // const token = parse(headercookie).token

  if (token && nextpath.pathname === '/login') {
    return NextResponse.redirect(new URL('/dashboard/calendar', request.url))
  }

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/reservation/:path*'],
}