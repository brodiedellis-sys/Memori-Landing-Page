import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Simple file-based storage (you can replace this with a database later)
const dataFile = path.join(process.cwd(), 'data', 'waitlist.json');

// Ensure data directory exists
const dataDir = path.dirname(dataFile);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize file if it doesn't exist
if (!fs.existsSync(dataFile)) {
  fs.writeFileSync(dataFile, JSON.stringify({ emails: [], count: 42 }));
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

    // Read current data
    const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

    // Check if email already exists
    const emailExists = data.emails.some((entry: any) => entry.email === email);
    if (emailExists) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }

    // Add new email
    const newEntry = {
      email,
      timestamp: new Date().toISOString(),
      supporterNumber: data.count + 1,
      ip: request.headers.get('x-forwarded-for') || 'unknown'
    };

    data.emails.push(newEntry);
    data.count += 1;

    // Save to file
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));

    return NextResponse.json({
      success: true,
      supporterNumber: newEntry.supporterNumber,
      totalCount: data.count
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
    const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    
    // Return only count for public access
    return NextResponse.json({
      count: data.count,
      totalEmails: data.emails.length
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Unable to fetch data' },
      { status: 500 }
    );
  }
}