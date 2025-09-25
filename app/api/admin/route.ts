import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { kv } from '@vercel/kv';

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple admin endpoint to send updates to waitlist
export async function POST(request: NextRequest) {
  try {
    const { subject, message, adminKey } = await request.json();

    // Simple admin key check (you can set this in Vercel environment variables)
    if (adminKey !== process.env.ADMIN_KEY) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get all emails from KV storage
    const waitlistEmails = await kv.get('waitlist_emails') || [];
    const subscriberEmails = (waitlistEmails as any[]).map(entry => entry.email);
    
    // If no subscribers yet, send to admin for testing
    const emailsToSend = subscriberEmails.length > 0 ? subscriberEmails : ['contactmemoridev@gmail.com'];

    try {
      await resend.emails.send({
        from: 'Memori Updates <noreply@resend.dev>',
        to: emailsToSend,
        subject: subject || 'Memori Update',
        html: `
          <div style="font-family: 'Courier New', monospace; background: #0D0D0D; color: #E2E8F0; padding: 20px;">
            <h1 style="color: #9AE6B4;">>> Memori Update</h1>
            <div style="border: 1px solid #9AE6B4; padding: 15px; margin: 20px 0;">
              ${message}
            </div>
            <p style="color: #94A3B8; font-size: 12px;">
              You're receiving this because you signed up for the Memori waitlist.<br>
              Reply to this email to contact us directly.
            </p>
          </div>
        `,
      });

      return NextResponse.json({
        success: true,
        message: 'Update sent successfully',
        sentTo: emailsToSend.length,
        emails: subscriberEmails.length > 0 ? subscriberEmails : ['Testing mode - sent to admin']
      });
    } catch (emailError) {
      console.error('Failed to send update:', emailError);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Admin API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}