import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import mongoose from 'mongoose';

export function middleware(request: NextRequest) {
    

    // Continue the request with modified headers
    return NextResponse.next()
}

// Specify which routes this middleware should run on
export const config = {
    matcher: '/api/:path*'
}