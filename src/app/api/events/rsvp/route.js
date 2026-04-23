import { NextResponse } from 'next/server'

import { GHL_WEBHOOKS } from '@/constants/ghl'

export async function POST(request) {
  try {
    const body = await request.json()

    const firstName = (body.firstName || '').trim()
    const lastName = (body.lastName || '').trim()
    const email = (body.email || '').trim()

    if (!firstName || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const payload = {
      type: 'Event_RSVP',
      firstName,
      lastName,
      email,
      phone: (body.phone || '').trim(),
      eventName: (body.eventName || '').trim(),
      eventDate: (body.eventDate || '').trim(),
      eventTime: (body.eventTime || '').trim(),
      eventCategory: (body.eventCategory || '').trim(),
      source: 'src_event',
      submitted_at: new Date().toISOString(),
    }

    const response = await fetch(GHL_WEBHOOKS.eventRsvp, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      console.error('[api/events/rsvp]: GHL webhook returned', response.status)
      return NextResponse.json({ error: 'Upstream webhook failed' }, { status: 502 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('[api/events/rsvp]:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
