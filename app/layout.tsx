import type { Metadata } from "next";
import "./globals.css";
import { business } from "@/lib/siteData";

export const metadata: Metadata = {
  title: `${business.name} | Digital & Financial Services`,
  description:
    "Local digital service center for PAN Card, Driving Licence, Aadhaar, banking, online forms, money transfer, insurance, and bill payments.",
  keywords: [
    "Digital Service Center",
    "PAN Card Service",
    "Driving Licence Service",
    "Aadhaar Service",
    "Fino Payment Bank BC",
    "Online Form Fillup"
  ],
  openGraph: {
    title: `${business.name} | Digital & Financial Services`,
    description:
      "All online and financial services in one place. Contact us on WhatsApp for fast assistance.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
