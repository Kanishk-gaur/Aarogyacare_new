import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, address, telephone, email, complaint } = await req.json();

    // ========== EMAIL SENDING ==========
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kgaur9412545040@gmail.com',
        pass: 'emel rchg ecor jcmf',  // 💡 Consider moving to environment variables for security!
      },
    });

    const mailOptions = {       
      from: 'kgaur9412545040@gmail.com',
      to: 'kanishkg7017@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Address: ${address}
        Telephone: ${telephone}
        Email: ${email}
        Complaint: ${complaint}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false });
  }
}
