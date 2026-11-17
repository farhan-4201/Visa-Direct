import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { isAvailableAppointmentDate } from "@/lib/appointmentDates";

/**
 * POST /api/appointment
 *
 * Sends:
 *   1. A confirmation email to the applicant
 *   2. An inquiry notification to the office inbox
 *
 * Required env vars:
 *   RESEND_API_KEY   — obtain from https://resend.com/api-keys
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
  const officeEmail = "info@visadirectimmigration.com";
  const fromEmail = "Visa Direct Immigration <info@visadirectimmigration.com>";

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

  if (selectedDate && !isAvailableAppointmentDate(selectedDate)) {
    return NextResponse.json(
      {
        success: false,
        error: "Please select a working day from the next available appointment date.",
      },
      { status: 422 }
    );
  }

  const resend = new Resend(apiKey);

  const clientConfirmationHtml = `
<html><body style="font-family:sans-serif;font-size:14px;color:#0f172a;">
<h2 style="color:#0c4c6d;">Consultation Request Received</h2>
<p>Dear ${name},</p>
<p>Thank you for contacting Visa Direct Immigration. We have received your consultation request and will confirm the appointment within 24 business hours.</p>
<table style="border-collapse:collapse;width:100%;">
  <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:600;">Consultation Type</td><td style="padding:8px;border:1px solid #e2e8f0;">${consultationType}</td></tr>
  ${selectedDate ? `<tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:600;">Date</td><td style="padding:8px;border:1px solid #e2e8f0;">${selectedDate}</td></tr>` : ""}
  ${selectedTime ? `<tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:600;">Time</td><td style="padding:8px;border:1px solid #e2e8f0;">${selectedTime}</td></tr>` : ""}
</table>
<p>If you need assistance, contact us at info@visadirectimmigration.com or 0333 0040117.</p>
</body></html>`;

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
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "Your Consultation Request — Visa Direct Immigration",
      html: clientConfirmationHtml,
    });

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
