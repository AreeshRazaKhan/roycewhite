import { NextResponse } from 'next/server'

import { GHL_WEBHOOKS } from '@/constants/ghl'

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
      phone: (body.phone || '').trim(),
      message,
      sms_updates: yesNo(body.smsUpdates),
      sms_promo: yesNo(body.smsPromo),
      source: 'src_contact',
      submitted_at: new Date().toISOString(),
    }

    const response = await fetch(GHL_WEBHOOKS.contact, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      console.error('[api/contact]: GHL webhook returned', response.status)
      return NextResponse.json({ error: 'Upstream webhook failed' }, { status: 502 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('[api/contact]:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
