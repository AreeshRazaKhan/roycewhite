import { NextResponse } from 'next/server'

import { GHL_COMPLIANCE_WEBHOOK, GHL_WEBHOOKS } from '@/constants/ghl'
import { normalizePhoneForSubmit } from '@/lib/phone'

const WEBHOOK_URLS = [GHL_WEBHOOKS.eventRsvp, GHL_COMPLIANCE_WEBHOOK]

const yesNo = (value) => (value ? 'Yes' : 'No')

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
      phone: normalizePhoneForSubmit(body.phone),
      eventName: (body.eventName || '').trim(),
      eventDate: (body.eventDate || '').trim(),
      eventTime: (body.eventTime || '').trim(),
      eventCategory: (body.eventCategory || '').trim(),
      sms_updates: yesNo(body.smsUpdates),
      sms_promo: yesNo(body.smsPromo),
      source: 'src_event',
      submitted_at: new Date().toISOString(),
    }

    const results = await Promise.all(
      WEBHOOK_URLS.map((url) =>
        fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }).catch((error) => {
          console.error('[api/events/rsvp] webhook fetch failed:', error)
          return { ok: false }
        })
      )
    )

    if (!results.some((r) => r.ok)) {
      console.error(
        '[api/events/rsvp]: every webhook failed',
        results.map((r) => r.status)
      )
      return NextResponse.json({ error: 'Upstream webhook failed' }, { status: 502 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('[api/events/rsvp]:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
