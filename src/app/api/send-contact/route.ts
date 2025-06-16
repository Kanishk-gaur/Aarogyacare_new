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

    // ========== WHATSAPP SENDING ==========
    const accessToken = 'EAAJ37oP45hgBOZBdoN1QeVkTitGD8t27PaRZByZBKjbdGQSMrPwCUsDxjv4OFSRCrpgZCXTLFEO6K4k4J2KX10AkjzaZC0PzjGHDZA9mGs9ZAJ73cvbciq5aJnKARToJWRfVMQIOBVhEJ0e0S8A5rAaDWPm4KjyjZCEyU5DwEeUAE2kG6LMdQcGlJE5QHmZAFZCjwcdrQaR554ZAwjeGD2Gz43nTeI0QbpTdCHh0pMZD';
    const phoneNumberId = '655110921025591';
    const to = '917017327309';


    const messageBody = 
      `New Feedback:\n` +
      `Name: ${name}\n` +
      `Address: ${address}\n` +
      `Phone: ${telephone}\n` +
      `Email: ${email}\n` +
      `Complaint: ${complaint}`;

    const waRes = await fetch(`https://graph.facebook.com/v19.0/${phoneNumberId}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: to,
        type: 'text',
        text: { body: messageBody }
      }),
    });

    const waData = await waRes.json();

    if (!waRes.ok) {
      console.error('WhatsApp API error:', waData);
      return NextResponse.json({ success: false, error: 'WhatsApp sending failed', details: waData }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error('Error sending feedback:', err);
    return NextResponse.json({ success: false, error: 'Failed to process feedback' }, { status: 500 });
  }
}
