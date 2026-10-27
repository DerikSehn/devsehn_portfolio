import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

const MAX_NAME_LENGTH = 120
const MAX_EMAIL_LENGTH = 254
const MAX_MESSAGE_LENGTH = 5000

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function POST(request: NextRequest) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  if (!isRecord(body)) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const name = typeof body.from_name === "string" ? body.from_name.trim() : ""
  const email = typeof body.from_email === "string" ? body.from_email.trim() : ""
  const message = typeof body.message === "string" ? body.message.trim() : ""

  if (
    !name ||
    !email ||
    !message ||
    name.length > MAX_NAME_LENGTH ||
    email.length > MAX_EMAIL_LENGTH ||
    message.length > MAX_MESSAGE_LENGTH ||
    /[\r\n]/.test(name) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return NextResponse.json(
      { error: "Check the name, email, and message fields." },
      { status: 400 },
    )
  }

  const host = process.env.SMTP_HOST?.trim()
  const user = process.env.SMTP_USER?.trim()
  const pass = process.env.SMTP_PASS
  const port = Number(process.env.SMTP_PORT ?? "587")

  if (!host || !user || !pass || !Number.isInteger(port) || port < 1 || port > 65535) {
    console.error("Contact email service is not configured.")
    return NextResponse.json(
      { error: "Contact email service is unavailable." },
      { status: 503 },
    )
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })

  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br>")

  try {
    await transporter.sendMail({
      from: `"DevSehn Portfolio" <${user}>`,
      to: user,
      replyTo: email,
      subject: "Portfolio contact request",
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 28px; color: #19343d;">
          <h1 style="font-size: 22px; margin: 0 0 22px;">Portfolio contact request</h1>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <div style="margin-top: 24px; padding: 18px; background: #f1f5f3; border-radius: 6px; line-height: 1.6;">
            ${safeMessage}
          </div>
        </div>
      `,
    })
  } catch (error) {
    console.error("Portfolio contact email could not be sent.", error)
    return NextResponse.json(
      { error: "Contact email service is unavailable." },
      { status: 503 },
    )
  }

  return NextResponse.json({ success: true }, { status: 200 })
}
