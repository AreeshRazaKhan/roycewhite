import { NextResponse } from 'next/server'

import { GHL_WEBHOOKS } from '@/constants/ghl'

const splitName = (raw) => {
  const parts = raw.trim().split(/\s+/)
  const firstName = parts[0] || ''
  const lastName = parts.slice(1).join(' ') || ''
  return { firstName, lastName }
}

export async function POST(request) {
  try {
    const body = await request.json()

    const name = (body.name || '').trim()
    const email = (body.email || '').trim()
    const subject = (body.subject || '').trim()
    const description = (body.description || '').trim()

    if (!name || !email || !subject || !description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { firstName, lastName } = splitName(name)

    const payload = {
      type: 'Issue_Report',
      firstName,
      lastName,
      email,
      issue_category: (body.category || '').trim(),
      issue_location: (body.location || '').trim(),
      issue_subject: subject,
      issue_description: description,
      issue_image: '',
      source: 'src_issue',
      submitted_at: new Date().toISOString(),
    }

    const response = await fetch(GHL_WEBHOOKS.issue, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      console.error('[api/issues]: GHL webhook returned', response.status)
      return NextResponse.json({ error: 'Upstream webhook failed' }, { status: 502 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('[api/issues]:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
