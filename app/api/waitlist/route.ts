import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend(process.env.RESEND_API_KEY);

// Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_ANON_KEY || ''
);

// Helper functions for Supabase storage
async function getWaitlistData() {
  const { data: emails, error } = await supabase
    .from('waitlist')
    .select('*')
    .order('created_at', { ascending: true });
  
  if (error) {
    console.error('Error fetching waitlist:', error);
    return { emails: [], count: 42 };
  }
  
  return { emails: emails || [], count: 42 + (emails?.length || 0) };
}

async function addToWaitlist(email: string, ip: string) {
  const { error } = await supabase
    .from('waitlist')
    .insert([
      {
        email,
        ip_address: ip,
        created_at: new Date().toISOString(),
      }
    ]);

  if (error) {
    throw error;
  }

  const waitlistData = await getWaitlistData();
  const newEntry = {
    email,
    timestamp: new Date().toISOString(),
    ip
  };
  
  return { 
    newEntry, 
    newCount: waitlistData.count, 
    totalEmails: waitlistData.emails.length 
  };
}

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
    const { data: existingEmails } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', email);
    
    if (existingEmails && existingEmails.length > 0) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }

    // Add new email to Supabase
    const result = await addToWaitlist(email, request.headers.get('x-forwarded-for') || 'unknown');

    // Log for demo purposes (you can see this in Vercel function logs)
    console.log(`New waitlist signup: ${email} (Total: ${result.newCount})`);

    // Send welcome email to new subscriber
    try {
      await resend.emails.send({
        from: 'Memori <onboarding@resend.dev>',
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
              
              <p>You're now supporter <strong style="color: #9AE6B4;">#${result.newCount}</strong> on our waitlist. Thank you for believing in local-first, privacy-focused journaling!</p>
              
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
        from: 'Memori Waitlist <onboarding@resend.dev>',
        to: [process.env.FROM_EMAIL || 'contactmemoridev@gmail.com'],
        subject: `New Memori Waitlist Signup #${result.newCount}`,
        html: `
          <h2>New Waitlist Signup!</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Supporter Number:</strong> ${result.newCount}</p>
          <p><strong>Timestamp:</strong> ${result.newEntry.timestamp}</p>
          <p><strong>IP:</strong> ${result.newEntry.ip}</p>
          <hr>
          <p>Total waitlist count: ${result.newCount}</p>
        `,
      });
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError);
      // Don't fail the signup if email fails
    }

    return NextResponse.json({
      success: true,
      supporterNumber: result.newCount,
      totalCount: result.newCount
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
    const data = await getWaitlistData();
    return NextResponse.json({
      count: data.count,
      totalEmails: Array.isArray(data.emails) ? data.emails.length : 0
    });
  } catch {
    return NextResponse.json(
      { error: 'Unable to fetch data' },
      { status: 500 }
    );
  }
}