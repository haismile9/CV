import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    // Log để kiểm tra (thay bằng gửi email thật)
    console.log('📧 Received contact form:', { name, email, message });

    // TODO: Tích hợp với email service
    // Ví dụ: Resend, SendGrid, hoặc Nodemailer
    
    // Giả lập gửi thành công
    return NextResponse.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    );
  }
}
