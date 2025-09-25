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

    // Send welcome email to new subscriber
    try {
      await resend.emails.send({
        from: 'Memori <noreply@resend.dev>',
        to: [email],
        subject: '🎉 Welcome to the Memori Waitlist!',
        html: `
          <div style="font-family: 'Courier New', monospace; background: #0D0D0D; color: #E2E8F0; padding: 30px; max-width: 600px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #9AE6B4; font-size: 32px; margin: 0;">>> MEMORI</h1>
              <div style="border: 1px solid #9AE6B4; width: 100px; height: 2px; margin: 15px auto; background: #9AE6B4;"></div>
            </div>
            
            <div style="border: 2px solid #9AE6B4; padding: 20px; margin: 20px 0; border-radius: 0;">
              <h2 style="color: #9AE6B4; margin-top: 0;">Welcome to the Journey! 🚀</h2>
              
              <p>Hey there, future Memori user!</p>
              
              <p>You're now supporter <strong style="color: #9AE6B4;">#${currentCount}</strong> on our waitlist. Thank you for believing in local-first, privacy-focused journaling!</p>
              
              <p><strong>What's Next?</strong></p>
              <ul style="color: #94A3B8;">
                <li>We'll keep you updated on our progress</li>
                <li>Early access when we're ready to launch</li>
                <li>Behind-the-scenes development updates</li>
              </ul>
              
              <p>Got questions? Just reply to this email - we read every message.</p>
              
              <p style="margin-bottom: 0;">
                - The Memori Team<br>
                <span style="color: #90CDF4;">Building the future of private journaling</span>
              </p>
            </div>
            
            <div style="text-align: center; color: #64748B; font-size: 12px; margin-top: 30px;">
              <p>Join our community: <a href="https://discord.gg/zPGGFPXfty" style="color: #9AE6B4;">Discord</a></p>
              <p>You're receiving this because you signed up for the Memori waitlist.</p>
            </div>
          </div>
        `,
      });
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError);
      // Don't fail the signup if email fails
    }

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