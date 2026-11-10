import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "@/components/layout/Header";

// Mock next/navigation
vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("Header Layout Component", () => {
  it("renders the primary brand identity (Visa Direct Immigration)", () => {
    render(<Header />);
    expect(screen.getByAltText("Visa Direct Immigration")).toBeInTheDocument();
    expect(screen.getByLabelText("Visa Direct Immigration - Home")).toBeInTheDocument();
  });

  it("renders desktop navigation links", () => {
    render(<Header />);
    // Home appears multiple times (desktop + mobile), check at least one exists
    const homeLinks = screen.getAllByText("Home");
    expect(homeLinks.length).toBeGreaterThan(0);

    const aboutLinks = screen.getAllByText(/^About/i);
    expect(aboutLinks.length).toBeGreaterThan(0);

    const contactLinks = screen.getAllByText("Contact Us");
    expect(contactLinks.length).toBeGreaterThan(0);

    const blogLinks = screen.getAllByText(/^Blog/i);
    expect(blogLinks.length).toBeGreaterThan(0);
  });

  it("renders the telephone contact number in the header", () => {
    render(<Header />);
    // Phone number appears multiple times in header (top bar + mobile menu)
    const phoneLinks = screen.getAllByText("0333 0040117");
    expect(phoneLinks.length).toBeGreaterThan(0);
  });

  it("renders Book Appointment CTA button visible to desktop users", () => {
    render(<Header />);
    // "Book Appointment" is in desktop nav, "Book Now" is mobile version
    const bookLinks = screen.getAllByRole("link", { name: /Book/i });
    expect(bookLinks.length).toBeGreaterThan(0);
  });

  it("shows the requested services in the Business dropdown", () => {
    render(<Header />);
    fireEvent.mouseEnter(screen.getByRole("button", { name: /Business/i }));

    [
      "Business Visitor Visa",
      "Sole Representative Visa",
      "Long-Term Work Visa",
      "Skilled Worker Visa",
      "Scale-Up Visa",
      "UK Expansion Worker Visa",
      "Startup Visa",
      "Secondment Worker Visa",
      "Hiring Foreign Workers",
      "Youth Mobility Visa",
      "Charity Worker Visa",
      "Creative Worker Visa",
      "International Agreement Visa",
      "Seasonal Worker Visa",
      "Entrepreneur Visa (Tier 1)",
      "Graduate Trainee Visa",
      "Minister of Religion Visa",
      "Service Supplier Visa",
      "Investor Visa (Tier 1)",
      "Graduate Visa",
      "Global Business Mobility",
      "Global Talent Visa",
      "Sports Person Visa",
      "Innovator Visa",
      "Investor Visa",
      "Business Development Visa",
      "Talent Visa",
    ].forEach((service) => {
      expect(screen.getByText(service)).toBeInTheDocument();
    });

    ["Spouse Visa", "British Citizenship", "Student Visa", "UK Graduate Visa"].forEach(
      (service) => {
        expect(screen.queryByText(service)).not.toBeInTheDocument();
      },
    );
  });

  it("toggles mobile menu open and closed when hamburger button is clicked", () => {
    render(<Header />);
    const toggleBtn = screen.getByRole("button", {
      name: /Toggle navigation menu/i,
    });
    expect(toggleBtn).toBeInTheDocument();

    // Mobile menu is closed initially; mobile-only "About Us" link not shown
    expect(screen.queryByText("About Us")).not.toBeInTheDocument();

    // Open mobile menu
    fireEvent.click(toggleBtn);
    // "About Us" should appear in mobile drawer
    expect(screen.getByText("About Us")).toBeInTheDocument();

    // Close mobile menu
    fireEvent.click(toggleBtn);
    expect(screen.queryByText("About Us")).not.toBeInTheDocument();
  });
});
