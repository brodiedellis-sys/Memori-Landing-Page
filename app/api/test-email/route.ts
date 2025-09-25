import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    console.log('Testing email to:', email);
    console.log('Resend API Key exists:', !!process.env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from: 'Test <noreply@resend.dev>',
      to: [email],
      subject: 'Simple Test Email',
      text: 'This is a simple test email to debug delivery issues.',
      html: '<p>This is a simple test email to debug delivery issues.</p>',
    });

    console.log('Resend result:', result);

    return NextResponse.json({
      success: true,
      result: result,
      message: 'Test email sent'
    });
  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json(
      { error: String(error), details: error },
      { status: 500 }
    );
  }
}