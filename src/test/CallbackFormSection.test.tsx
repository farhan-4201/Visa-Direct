import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { CallbackFormSection } from "@/components/home/CallbackFormSection";

describe("CallbackFormSection Component", () => {
  it("renders the callback form heading and all labelled fields", () => {
    render(<CallbackFormSection />);
    expect(
      screen.getByText("Request a Call Back from Our Immigration Experts")
    ).toBeInTheDocument();
    // Check all labelled inputs exist
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Type of Visa/i)).toBeInTheDocument();
  });

  it("shows validation errors when submitted with all empty fields", async () => {
    render(<CallbackFormSection />);
    const submitBtn = screen.getByRole("button", {
      name: /Submit Callback Request/i,
    });
    fireEvent.click(submitBtn);

    // Individual field errors should appear
    expect(await screen.findByText("Full name is required")).toBeInTheDocument();
    expect(screen.getByText("Email is required")).toBeInTheDocument();
    expect(screen.getByText("Phone number is required")).toBeInTheDocument();
  });

  it("submits successfully and shows confirmation with client name when all fields are filled", async () => {
    render(<CallbackFormSection />);

    fireEvent.change(screen.getByLabelText(/Full Name/i), {
      target: { value: "Sarah Jenkins" },
    });
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: "sarah.j@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), {
      target: { value: "07123456789" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Submit Callback Request/i }));

    await waitFor(() => {
      expect(screen.getByText("Callback Request Submitted!")).toBeInTheDocument();
      expect(screen.getByText(/Sarah Jenkins/i)).toBeInTheDocument();
    });
  });
});
