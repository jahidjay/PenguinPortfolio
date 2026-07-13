import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, serviceType } = await request.json()

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // For now, just log the submission
    // You can later integrate with Resend, SendGrid, Nodemailer, etc.
    console.log('[Contact Form Submission]', {
      name,
      email,
      subject,
      message,
      serviceType,
      timestamp: new Date().toISOString(),
    })

    // Mock success response
    // TODO: Connect to real email service (Resend, SendGrid, etc.)
    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received! I will get back to you soon.',
        data: {
          name,
          email,
          subject,
          serviceType,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[Contact Form Error]', error)
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    )
  }
}
