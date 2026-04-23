import { NextResponse } from 'next/server'

import { GHL_WEBHOOKS } from '@/constants/ghl'

const yesNo = (value) => (value ? 'Yes' : 'No')

export async function POST(request) {
  try {
    const body = await request.json()

    const firstName = (body.firstName || '').trim()
    const lastName = (body.lastName || '').trim()
    const email = (body.email || '').trim()

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const helpOptions = Array.isArray(body.helpOptions)
      ? body.helpOptions.join(', ')
      : (body.helpOptions || '').toString()

    const payload = {
      type: 'Volunteer_Form',
      firstName,
      lastName,
      email,
      phone: (body.phone || '').trim(),
      zipCode: (body.zipCode || '').trim(),
      county: (body.county || '').trim(),
      region: (body.region || '').trim(),
      registeredVoter: (body.registeredVoter || '').trim(),
      campaignExperience: (body.campaignExperience || '').trim(),
      helpOptions,
      availability: (body.availability || '').trim(),
      issues: (body.issues || '').trim(),
      anythingElse: (body.anythingElse || '').trim(),
      sms_updates: yesNo(body.smsUpdates),
      sms_promo: yesNo(body.smsPromo),
      source: 'src_volunteer',
      submitted_at: new Date().toISOString(),
    }

    const results = await Promise.all(
      GHL_WEBHOOKS.volunteer.map((url) =>
        fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }).catch((error) => {
          console.error('[api/volunteer] webhook fetch failed:', error)
          return { ok: false }
        })
      )
    )

    const anySuccess = results.some((r) => r.ok)
    if (!anySuccess) {
      console.error(
        '[api/volunteer]: all GHL webhooks failed',
        results.map((r) => r.status)
      )
      return NextResponse.json({ error: 'Upstream webhook failed' }, { status: 502 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('[api/volunteer]:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
