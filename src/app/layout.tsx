import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UK Immigration Consultant Bristol & Birmingham | Visa Direct Immigration",
  description:
    "Trusted UK immigration consultants in Bristol & Birmingham offering expert legal guidance for work, spouse, family, student, and business immigration visas.",
  keywords: [
    "UK immigration consultant",
    "Immigration lawyer Bristol",
    "Visa consultant Birmingham",
    "Skilled worker visa",
    "Spouse visa UK",
    "Sponsor license UK",
    "British citizenship",
  ],
  icons: {
    icon: [
      {
        url: "https://visadirectimmigration.com/wp-content/uploads/2024/02/cropped-cropped-Visa-Direct-Immigration-2-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://visadirectimmigration.com/wp-content/uploads/2024/02/cropped-cropped-Visa-Direct-Immigration-2-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple:
      "https://visadirectimmigration.com/wp-content/uploads/2024/02/cropped-cropped-Visa-Direct-Immigration-2-180x180.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full antialiased scroll-smooth ${plusJakartaSans.variable}`}>
      <body className="min-h-full flex flex-col bg-white text-slate-800 font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
