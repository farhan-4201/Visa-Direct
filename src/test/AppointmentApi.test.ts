import { describe, it, expect, vi, beforeEach } from "vitest";
import { POST } from "@/app/api/appointment/route";
import { NextRequest } from "next/server";

const mockSend = vi.fn().mockResolvedValue({ id: "email_123" });

vi.mock("resend", () => {
  return {
    Resend: class {
      emails = {
        send: mockSend,
      };
    },
  };
});

describe("POST /api/appointment", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
    mockSend.mockClear();
  });

  it("returns status 500 if RESEND_API_KEY is missing", async () => {
    delete process.env.RESEND_API_KEY;

    const req = new NextRequest("http://localhost:3000/api/appointment", {
      method: "POST",
      body: JSON.stringify({
        name: "Test User",
        email: "test@example.com",
        phone: "0123456789",
        consultationType: "Video Consultation",
      }),
    });

    const res = await POST(req);
    expect(res.status).toBe(500);
    const data = await res.json();
    expect(data.success).toBe(false);
    expect(data.error).toContain("RESEND_API_KEY");
  });

  it("returns status 422 if required contact fields are missing", async () => {
    process.env.RESEND_API_KEY = "re_test_key";

    const req = new NextRequest("http://localhost:3000/api/appointment", {
      method: "POST",
      body: JSON.stringify({
        name: "",
        email: "test@example.com",
        phone: "",
        consultationType: "Video Consultation",
      }),
    });

    const res = await POST(req);
    expect(res.status).toBe(422);
    const data = await res.json();
    expect(data.success).toBe(false);
    expect(data.error).toContain("required");
  });

  it("returns status 400 for invalid JSON body", async () => {
    process.env.RESEND_API_KEY = "re_test_key";

    const req = new NextRequest("http://localhost:3000/api/appointment", {
      method: "POST",
      body: "invalid-json",
    });

    const res = await POST(req);
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.success).toBe(false);
  });

  it("sends confirmation emails and returns 200 on valid payload", async () => {
    process.env.RESEND_API_KEY = "re_test_key";

    const req = new NextRequest("http://localhost:3000/api/appointment", {
      method: "POST",
      body: JSON.stringify({
        name: "Jane Doe",
        email: "jane@example.com",
        phone: "+44 7123 456789",
        consultationType: "Video Consultation",
        selectedDate: "2026-10-28",
        selectedTime: "11:00 AM",
      }),
    });

    const res = await POST(req);
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.success).toBe(true);
    // Verified 2 emails sent: one to applicant, one to office
    expect(mockSend).toHaveBeenCalledTimes(2);
  });
});
