import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { from_name, from_email, message } = await request.json()

    // Validate required fields
    if (!from_name || !from_email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(from_email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Verify connection
    await transporter.verify()

    // Email content
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // Send to yourself
      replyTo: from_email,
      subject: `New message from portfolio - ${from_name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Portfolio Message</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="margin-bottom: 20px; padding: 15px; background-color: #f1f5f9; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <h2 style="color: #1e293b; margin: 0 0 10px 0; font-size: 18px;">Contact Information</h2>
              <p style="margin: 5px 0; color: #475569;"><strong>Name:</strong> ${from_name}</p>
              <p style="margin: 5px 0; color: #475569;"><strong>Email:</strong> ${from_email}</p>
              <p style="margin: 5px 0; color: #475569;"><strong>Date:</strong> ${new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 16px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Message</h3>
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; line-height: 1.6; color: #374151;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #f1f5f9, #e2e8f0); border-radius: 8px;">
              <p style="color: #64748b; margin: 0; font-size: 14px;">
                This message was sent through your portfolio contact form.
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px;">
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">
              Portfólio • Derik Sehn • ${new Date().getFullYear()}
            </p>
          </div>
        </div>
      `,
      text: `
New Portfolio Message

Name: ${from_name}
Email: ${from_email}
Date: ${new Date().toLocaleString('en-US')}

Message:
${message}

---
This message was sent through your portfolio contact form.
      `
    }

    // Send auto-reply to the sender
    const autoReplyOptions = {
      from: `"Derik Sehn" <${process.env.SMTP_USER}>`,
      to: from_email,
      subject: 'Thank you for contacting me! - Derik Sehn',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #10b981, #3b82f6); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thank you for contacting me!</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Hello <strong>${from_name}</strong>,
            </p>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Thank you for reaching out to me through my portfolio! I've received your message and I'll get back to you soon.
            </p>
            
            <div style="background: linear-gradient(135deg, #eff6ff, #f0f9ff); padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; margin: 20px 0;">
              <p style="color: #1e40af; margin: 0; font-weight: 500;">
                ⚡ Usual response time: within 24 hours
              </p>
            </div>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              In the meantime, feel free to explore my projects and connect with me on social media:
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://github.com/DerikSehn" style="display: inline-block; margin: 0 10px; padding: 12px 20px; background-color: #374151; color: white; text-decoration: none; border-radius: 8px; font-weight: 500;">GitHub</a>
              <a href="https://www.linkedin.com/in/derik-sehn/" style="display: inline-block; margin: 0 10px; padding: 12px 20px; background-color: #0077b5; color: white; text-decoration: none; border-radius: 8px; font-weight: 500;">LinkedIn</a>
            </div>
            
            <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 30px;">
              <p style="color: #64748b; font-size: 14px; margin: 0; text-align: center;">
                Best regards,<br>
                <strong>Derik Sehn</strong><br>
                Full Stack Developer
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px;">
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </div>
      `,
      text: `
Hello ${from_name},

Thank you for reaching out to me through my portfolio! I've received your message and I'll get back to you soon.

⚡ Usual response time: within 24 hours

In the meantime, feel free to explore my projects and connect with me:
- GitHub: https://github.com/DerikSehn
- LinkedIn: https://www.linkedin.com/in/derik-sehn/

Best regards,
Derik Sehn
Full Stack Developer

---
This is an automated response. Please do not reply to this email.
      `
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(autoReplyOptions)
    ])

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    )
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
