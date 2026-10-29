import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * POST /api/appointment
 *
 * Sends a booking confirmation email via Resend to:
 *   1. The client (confirmation receipt)
 *   2. The office inbox (internal notification)
 *
 * Required env vars:
 *   RESEND_API_KEY   — obtain from https://resend.com/api-keys
 *   OFFICE_EMAIL     — recipient for internal notifications (default: info@visadirectimmigration.com)
 *   FROM_EMAIL       — verified sender address in Resend (default: onboarding@resend.dev for dev)
 */

interface AppointmentPayload {
  name: string;
  email: string;
  phone: string;
  nationality?: string;
  consultationType: string;
  selectedDate?: string;
  selectedTime?: string;
  visaType?: string;
  notes?: string;
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY ?? "";
  const officeEmail = process.env.OFFICE_EMAIL ?? "farhantariq4636@gmail.com"; // Resend free plan: onboarding@resend.dev can only send to Resend account owner's email
  const fromEmail = process.env.FROM_EMAIL ?? "Visa Direct Immigration <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json(
      {
        success: false,
        error: "Server configuration error: RESEND_API_KEY is not set.",
      },
      { status: 500 }
    );
  }

  let payload: AppointmentPayload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { name, email, phone, nationality, consultationType, selectedDate, selectedTime, visaType, notes } = payload;

  if (!name || !email || !phone) {
    return NextResponse.json(
      { success: false, error: "Name, email, and phone are required." },
      { status: 422 }
    );
  }

  const resend = new Resend(apiKey);

  const clientConfirmationHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f4f8fa; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(12,76,109,0.10); }
    .header { background: linear-gradient(135deg, #072333 0%, #0c4c6d 100%); padding: 40px 40px 32px; text-align: center; }
    .header img { height: 40px; margin-bottom: 16px; }
    .header h1 { color: #fff; font-size: 22px; font-weight: 800; margin: 0; }
    .header p { color: #c8dce8; font-size: 13px; margin: 8px 0 0; }
    .body { padding: 36px 40px; }
    .greeting { font-size: 16px; color: #0f172a; font-weight: 700; margin-bottom: 12px; }
    .intro { font-size: 14px; color: #475569; line-height: 1.7; margin-bottom: 28px; }
    .detail-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px 24px; margin-bottom: 24px; }
    .detail-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-size: 13px; }
    .detail-row:last-child { border-bottom: none; }
    .detail-label { color: #64748b; font-weight: 600; }
    .detail-value { color: #0f172a; font-weight: 700; text-align: right; }
    .cta { text-align: center; margin: 28px 0; }
    .cta a { background: #c68a4c; color: #fff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 800; font-size: 14px; display: inline-block; }
    .footer { background: #072333; padding: 24px 40px; text-align: center; color: #94a3b8; font-size: 11px; }
    .footer a { color: #c68a4c; text-decoration: none; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <img src="https://visadirectimmigration.com/wp-content/uploads/2023/04/Visa-Direct-Logo-5.png" alt="Visa Direct Immigration" />
      <h1>Consultation Confirmed ✓</h1>
      <p>Your appointment request has been received</p>
    </div>
    <div class="body">
      <p class="greeting">Dear ${name},</p>
      <p class="intro">
        Thank you for booking a consultation with <strong>Visa Direct Immigration</strong>.
        Our team will review your request and confirm the exact appointment time within
        <strong>24 business hours</strong>. You will receive a follow-up call or email shortly.
      </p>

      <div class="detail-box">
        <div class="detail-row">
          <span class="detail-label">Consultation Type</span>
          <span class="detail-value">${consultationType}</span>
        </div>
        ${selectedDate ? `<div class="detail-row"><span class="detail-label">Requested Date</span><span class="detail-value">${selectedDate}</span></div>` : ""}
        ${selectedTime ? `<div class="detail-row"><span class="detail-label">Preferred Time</span><span class="detail-value">${selectedTime}</span></div>` : ""}
        ${visaType ? `<div class="detail-row"><span class="detail-label">Visa Category</span><span class="detail-value">${visaType}</span></div>` : ""}
        <div class="detail-row">
          <span class="detail-label">Reference Phone</span>
          <span class="detail-value">${phone}</span>
        </div>
      </div>

      <div class="cta">
        <a href="https://visadirectimmigration.com/appointment">Manage My Appointment</a>
      </div>

      <p style="font-size:13px;color:#64748b;line-height:1.7;">
        If you need to reschedule or have urgent questions, please call us directly on
        <strong style="color:#0c4c6d;">0333 0040117</strong> (Mon–Fri, 9am–6pm).
      </p>
    </div>
    <div class="footer">
      <p>Visa Direct Immigration · Bristol &amp; Birmingham · IAA Regulated · Reg No: F202536890</p>
      <p><a href="mailto:info@visadirectimmigration.com">info@visadirectimmigration.com</a> · <a href="tel:03330040117">0333 0040117</a></p>
    </div>
  </div>
</body>
</html>`;

  const officeNotificationHtml = `
<html><body style="font-family:sans-serif;font-size:14px;color:#0f172a;">
<h2 style="color:#0c4c6d;">New Appointment Request</h2>
<table style="border-collapse:collapse;width:100%;">
  <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc;">Name</td><td style="padding:8px;border:1px solid #e2e8f0;">${name}</td></tr>
  <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc;">Email</td><td style="padding:8px;border:1px solid #e2e8f0;">${email}</td></tr>
  <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc;">Phone</td><td style="padding:8px;border:1px solid #e2e8f0;">${phone}</td></tr>
  ${nationality ? `<tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc;">Nationality</td><td style="padding:8px;border:1px solid #e2e8f0;">${nationality}</td></tr>` : ""}
  <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc;">Consultation Type</td><td style="padding:8px;border:1px solid #e2e8f0;">${consultationType}</td></tr>
  ${selectedDate ? `<tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc;">Date</td><td style="padding:8px;border:1px solid #e2e8f0;">${selectedDate}</td></tr>` : ""}
  ${selectedTime ? `<tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc;">Time</td><td style="padding:8px;border:1px solid #e2e8f0;">${selectedTime}</td></tr>` : ""}
  ${visaType ? `<tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc;">Visa Type</td><td style="padding:8px;border:1px solid #e2e8f0;">${visaType}</td></tr>` : ""}
  ${notes ? `<tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc;">Notes</td><td style="padding:8px;border:1px solid #e2e8f0;">${notes}</td></tr>` : ""}
</table>
</body></html>`;

  try {
    // Send client confirmation
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "Your Consultation is Confirmed — Visa Direct Immigration",
      html: clientConfirmationHtml,
    });

    // Send office notification
    await resend.emails.send({
      from: fromEmail,
      to: officeEmail,
      subject: `New Appointment Request: ${name} — ${consultationType}`,
      html: officeNotificationHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[appointment/route] Resend error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send confirmation emails." },
      { status: 500 }
    );
  }
}
