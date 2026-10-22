import React from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { AppointmentScheduler } from "@/components/appointment/AppointmentScheduler";

describe("AppointmentScheduler Multi-Step Flow", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ success: true }),
      })
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });
  it("renders step 1 with four consultation type cards", () => {
    render(<AppointmentScheduler />);
    // Step indicator
    expect(screen.getByText("Step 1 of 4")).toBeInTheDocument();
    expect(screen.getByText("Select Consultation Format")).toBeInTheDocument();

    // The four consultation type cards
    expect(screen.getByText("Online Video Consultation")).toBeInTheDocument();
    expect(screen.getByText("Birmingham Office (In-Person)")).toBeInTheDocument();
    expect(screen.getByText("Bristol Office (In-Person)")).toBeInTheDocument();
    expect(screen.getByText("Direct Telephone Assessment")).toBeInTheDocument();
  });

  it("step 1 has a CTA to advance to step 2", () => {
    render(<AppointmentScheduler />);
    const nextBtn = screen.getByRole("button", { name: /Continue to Date & Time/i });
    expect(nextBtn).toBeInTheDocument();
  });

  it("advances from step 1 to step 2 when next button is clicked", () => {
    render(<AppointmentScheduler />);
    fireEvent.click(screen.getByRole("button", { name: /Continue to Date & Time/i }));

    expect(screen.getByText("Step 2 of 4")).toBeInTheDocument();
    expect(screen.getByText("Choose Date & Time Slot")).toBeInTheDocument();
    expect(screen.getByText("Available Consultation Dates")).toBeInTheDocument();
  });

  it("advances from step 2 to step 3 with contact details form", () => {
    render(<AppointmentScheduler />);
    // Step 1 → 2
    fireEvent.click(screen.getByRole("button", { name: /Continue to Date & Time/i }));
    // Step 2 → 3
    fireEvent.click(screen.getByRole("button", { name: /Continue to Your Details/i }));

    expect(screen.getByText("Step 3 of 4")).toBeInTheDocument();
    expect(screen.getByText("Your Contact Information")).toBeInTheDocument();

    // Labels exist for form inputs
    expect(screen.getByText(/Full Legal Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact Phone Number/i)).toBeInTheDocument();
  });

  it("completes full booking flow and shows confirmation with client details", async () => {
    render(<AppointmentScheduler />);

    // Step 1 → 2
    fireEvent.click(screen.getByRole("button", { name: /Continue to Date & Time/i }));
    // Step 2 → 3
    fireEvent.click(screen.getByRole("button", { name: /Continue to Your Details/i }));

    // Fill in client details (inputs are unlabelled, use placeholder to query)
    fireEvent.change(screen.getByPlaceholderText(/e\.g\. John Doe/i), {
      target: { value: "Alex Taylor" },
    });
    fireEvent.change(screen.getByPlaceholderText("name@example.com"), {
      target: { value: "alex.taylor@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/07123 456789/i), {
      target: { value: "+44 7911 123456" },
    });

    // Step 3 → 4
    fireEvent.click(screen.getByRole("button", { name: /Confirm Appointment/i }));

    // Step 4: Confirmation
    await waitFor(() => {
      expect(screen.getByText("Step 4 of 4")).toBeInTheDocument();
    });
    expect(screen.getByText("Your Consultation is Scheduled!")).toBeInTheDocument();
    expect(screen.getByText("Alex Taylor")).toBeInTheDocument();
    expect(screen.getAllByText("alex.taylor@example.com").length).toBeGreaterThan(0);
  });
});
