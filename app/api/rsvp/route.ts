import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, attendance, guests, message } = body;

    // Validate required fields
    if (!name || !email || !attendance) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log the RSVP data
    const rsvpData = {
      name,
      email,
      phone: phone || 'Không cung cấp',
      attendance: attendance === 'yes' ? 'Có tham dự' : 'Không tham dự',
      guests: guests || '1',
      message: message || 'Không có lời nhắn',
      timestamp: new Date().toISOString(),
    };

    console.log('RSVP Received:', rsvpData);

    // Email will be sent from client-side using EmailJS

    return NextResponse.json(
      { 
        success: true,
        message: 'RSVP submitted successfully' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing RSVP:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
