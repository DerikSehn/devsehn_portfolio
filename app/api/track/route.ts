import { recordVisit } from '@/lib/analytics'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}))
    const page: string = typeof body?.page === 'string' ? body.page : '/'

    // Vercel injects geo headers automatically in production
    const countryCode = request.headers.get('x-vercel-ip-country') ?? ''
    const region = request.headers.get('x-vercel-ip-country-region') ?? ''
    const city = request.headers.get('x-vercel-ip-city') ?? ''
    const rawIp =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      request.headers.get('x-real-ip') ??
      'unknown'

    recordVisit({
      timestamp: Date.now(),
      countryCode,
      region,
      city,
      page,
      rawIp,
    })

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}

// Allow pre-flight requests (CORS)
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
