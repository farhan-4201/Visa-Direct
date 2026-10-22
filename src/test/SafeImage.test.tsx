import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

// SafeImage uses next/image internally; mock it so tests don't crash on missing width
vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    onError,
    ...rest
  }: {
    src: string;
    alt: string;
    onError?: () => void;
    [key: string]: unknown;
  }) => (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img src={src} alt={alt} onError={onError} {...rest} />
  ),
}));

// Import AFTER mocking
const { SafeImage } = await import("@/components/ui/SafeImage");

describe("SafeImage Component", () => {
  it("renders an img element with the given src and alt text", () => {
    const { container } = render(
      <SafeImage
        src="/placeholder/sample.jpg"
        alt="Consultation Room"
        width={400}
        height={300}
        className="w-full h-48"
      />
    );

    const img = container.querySelector("img");
    expect(img).toBeTruthy();
    expect(img?.getAttribute("alt")).toBe("Consultation Room");
    expect(img?.getAttribute("src")).toBe("/placeholder/sample.jpg");
  });

  it("shows the alt text as fallback label before any error is triggered", () => {
    render(
      <SafeImage
        src="/valid-image.jpg"
        alt="Office Photo"
        width={400}
        height={300}
      />
    );
    // The img element has alt="Office Photo" at minimum
    const img = screen.getByRole("img", { name: "Office Photo" });
    expect(img).toBeInTheDocument();
  });

  it("renders fallback placeholder div when src is empty", () => {
    render(
      <SafeImage
        src=""
        alt="Missing Image"
        fallbackText="Image Not Available"
        width={400}
        height={300}
      />
    );
    // Fallback renders a div with role="img", not an <img> element
    const placeholder = screen.getByRole("img", { name: "Missing Image" });
    expect(placeholder).toBeInTheDocument();
    expect(screen.getByText("Image Not Available")).toBeInTheDocument();
    expect(screen.getByText(/Visa Direct Asset/i)).toBeInTheDocument();
  });
});
