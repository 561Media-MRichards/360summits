import { NextResponse } from "next/server";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, interest, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeInterest = escapeHtml(interest || "Not specified");
    const safeMessage = escapeHtml(message);

    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "360Summits <proposals@561media.com>",
      to: ["info@360summits.com"],
      replyTo: email,
      subject: `New Contact: ${safeName} — ${safeInterest}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #330362; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #ffffff; font-size: 20px; margin: 0;">New Contact Form Submission</h1>
          </div>
          <div style="background: #ffffff; padding: 32px; border: 1px solid #e8e8e8; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f3f3; color: #888; font-size: 13px; width: 120px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f3f3; color: #1a1a1a; font-size: 14px; font-weight: 500;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f3f3; color: #888; font-size: 13px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f3f3; color: #1a1a1a; font-size: 14px;"><a href="mailto:${safeEmail}" style="color: #5B1A9E;">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f3f3; color: #888; font-size: 13px;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f3f3; color: #1a1a1a; font-size: 14px;">${safePhone}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f3f3; color: #888; font-size: 13px;">Interest</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f3f3; color: #1a1a1a; font-size: 14px;">${safeInterest}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #888; font-size: 13px; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; color: #1a1a1a; font-size: 14px; line-height: 1.6;">${safeMessage.replace(/\n/g, "<br>")}</td>
              </tr>
            </table>
          </div>
          <p style="color: #aaa; font-size: 11px; text-align: center; margin-top: 16px;">Sent from 360summits.com contact form</p>
        </div>
      `,
      text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nInterest: ${interest || "Not specified"}\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
