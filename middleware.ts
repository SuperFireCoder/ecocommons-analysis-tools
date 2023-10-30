import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import getConfig from "next/config";

export function middleware(request: NextRequest) {

  // const config = getConfig()?.publicRuntimeConfig;

  if (request.nextUrl.pathname.startsWith('/home')) {
    return NextResponse.redirect(new URL(process.env.NEXT_PUBLIC_UI_LIBRARY_HEADER_ECOCOMMONS_ROOT ?? '/', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/workspace')) {
    return NextResponse.redirect(new URL(process.env.NEXT_PUBLIC_UI_LIBRARY_HEADER_ECOCOMMONS_WORKSPACE ?? '/', request.url))
  }

  if (request.nextUrl.pathname.startsWith('/datasets')) {
    return NextResponse.redirect(new URL(process.env.NEXT_PUBLIC_UI_LIBRARY_HEADER_ECOCOMMONS_DATASETS ?? '/', request.url))
  }

  if (request.nextUrl.pathname.startsWith('/analysis-hub')) {
    return NextResponse.redirect(new URL(process.env.NEXT_PUBLIC_UI_LIBRARY_HEADER_ECOCOMMONS_ANALYSIS_HUB ?? '/', request.url))
  }

  if (request.nextUrl.pathname.startsWith('/projects')) {
    return NextResponse.redirect(new URL(process.env.NEXT_PUBLIC_WORKFLOW_URL ?? '/', request.url))
  }

}

export const config = {
  matcher: [
    '/home', 
    '/datasets',
    '/projects',
    '/analysis-hub',
    '/workspace',
    ],
}