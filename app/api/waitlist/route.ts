import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory storage for demo (replace with database for production)
// Note: This resets on each deployment - use a proper database for production
let emailStore: { email: string; timestamp: string; ip?: string }[] = [];
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