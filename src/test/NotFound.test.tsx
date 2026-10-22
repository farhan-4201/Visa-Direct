import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import NotFound from "@/app/not-found";

describe("Custom 404 Not Found Page", () => {
  it("renders the 404 large numeral and Page Not Found heading", () => {
    render(<NotFound />);
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Page Not Found/i })
    ).toBeInTheDocument();
  });

  it("renders the explanatory message", () => {
    render(<NotFound />);
    expect(
      screen.getByText(
        /The page you are looking for may have been moved, renamed, or is currently unavailable/i
      )
    ).toBeInTheDocument();
  });

  it("provides a link to return to homepage", () => {
    render(<NotFound />);
    const homeLink = screen.getByRole("link", { name: /Return to Homepage/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("provides a Browse Visa Services link", () => {
    render(<NotFound />);
    const servicesLink = screen.getByRole("link", { name: /Browse Visa Services/i });
    expect(servicesLink).toBeInTheDocument();
    expect(servicesLink).toHaveAttribute("href", "/services");
  });

  it("renders emergency telephone contact link for immediate assistance", () => {
    render(<NotFound />);
    const phoneLink = screen.getByRole("link", { name: /0333 0040117/i });
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink).toHaveAttribute("href", "tel:03330040117");
  });
});
