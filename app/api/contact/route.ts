import { NextResponse } from 'next/server'

type ContactPayload = {
  name?: string
  email?: string
  company?: string
  message?: string
}

export async function POST(request: Request) {
  let payload: ContactPayload

  try {
    payload = (await request.json()) as ContactPayload
  } catch (error) {
    console.error('Invalid contact payload', error)
    return NextResponse.json({ error: 'Invalid request payload.' }, { status: 400 })
  }

  const name = payload.name?.trim()
  const email = payload.email?.trim()
  const company = payload.company?.trim()
  const message = payload.message?.trim()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL

  if (!webhookUrl) {
    console.warn('CONTACT_WEBHOOK_URL is not configured')
    return NextResponse.json(
      {
        error: 'Contact form is not configured yet.',
        missingConfig: true,
      },
      { status: 500 }
    )
  }

  const formatted = {
    text: `📬 *New contact form submission*
• *Name:* ${name}
• *Email:* ${email}
${company ? `• *Company:* ${company}
` : ''}• *Message:* ${message}`,
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formatted),
    })

    if (!response.ok) {
      console.error('Failed to deliver contact submission', await response.text())
      return NextResponse.json({ error: 'We could not deliver your message. Please try again.' }, { status: 502 })
    }
  } catch (error) {
    console.error('Contact webhook error', error)
    return NextResponse.json({ error: 'We could not deliver your message. Please try again.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
