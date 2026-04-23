import { NextResponse } from 'next/server'

import { GHL_COMPLIANCE_WEBHOOK, GHL_WEBHOOKS } from '@/constants/ghl'
import { normalizePhoneForSubmit } from '@/lib/phone'

const WEBHOOK_URLS = [GHL_WEBHOOKS.contact, GHL_COMPLIANCE_WEBHOOK]

const yesNo = (value) => (value ? 'Yes' : 'No')

export async function POST(request) {
  try {
    const body = await request.json()

    const firstName = (body.firstName || '').trim()
    const lastName = (body.lastName || '').trim()
    const email = (body.email || '').trim()
    const message = (body.message || '').trim()

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const payload = {
      type: 'Contact_Form',
      firstName,
      lastName,
      email,
      phone: normalizePhoneForSubmit(body.phone),
      message,
      sms_updates: yesNo(body.smsUpdates),
      sms_promo: yesNo(body.smsPromo),
      source: 'src_contact',
      submitted_at: new Date().toISOString(),
    }

    const results = await Promise.all(
      WEBHOOK_URLS.map((url) =>
        fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }).catch((error) => {
          console.error('[api/contact] webhook fetch failed:', error)
          return { ok: false }
        })
      )
    )

    if (!results.some((r) => r.ok)) {
      console.error(
        '[api/contact]: every webhook failed',
        results.map((r) => r.status)
      )
      return NextResponse.json({ error: 'Upstream webhook failed' }, { status: 502 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('[api/contact]:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
