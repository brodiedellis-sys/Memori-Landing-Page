import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory storage for demo (will also email you each signup)
const emailStore: { email: string; timestamp: string; ip?: string }[] = [];
let currentCount = 42;

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const emailExists = emailStore.some((entry) => entry.email === email);
    if (emailExists) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }

    // Add new email to in-memory store
    const newEntry = {
      email,
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || 'unknown'
    };

    emailStore.push(newEntry);
    currentCount += 1;

    // Log for demo purposes (you can see this in Vercel function logs)
    console.log(`New waitlist signup: ${email} (Total: ${currentCount})`);

    // Send notification email to you about new signup
    try {
      await resend.emails.send({
        from: 'Memori Waitlist <noreply@resend.dev>',
        to: [process.env.FROM_EMAIL || 'contactmemoridev@gmail.com'],
        subject: `New Memori Waitlist Signup #${currentCount}`,
        html: `
          <h2>New Waitlist Signup!</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Supporter Number:</strong> ${currentCount}</p>
          <p><strong>Timestamp:</strong> ${newEntry.timestamp}</p>
          <p><strong>IP:</strong> ${newEntry.ip}</p>
          <hr>
          <p>Total waitlist count: ${currentCount}</p>
        `,
      });
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError);
      // Don't fail the signup if email fails
    }

    return NextResponse.json({
      success: true,
      supporterNumber: currentCount,
      totalCount: currentCount
    });

  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Return current count for public access
    return NextResponse.json({
      count: currentCount,
      totalEmails: emailStore.length
    });
  } catch {
    return NextResponse.json(
      { error: 'Unable to fetch data' },
      { status: 500 }
    );
  }
}