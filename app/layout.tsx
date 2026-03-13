import type { Metadata } from "next";
import "./globals.css";
import { business } from "@/lib/siteData";

export const metadata: Metadata = {
  title: `${business.name} | Digital Services & Electronics`,
  description:
    "Local digital service center for PAN Card, Driving Licence, Aadhaar, banking, online forms, money transfer, insurance, bill payments, and electronics accessories.",
  keywords: [
    "Digital Service Center",
    "PAN Card Service",
    "Driving Licence Service",
    "Aadhaar Service",
    "Fino Payment Bank BC",
    "Online Form Fillup",
    "Electronics Accessories",
    "Mobile Charger",
    "Headphones"
  ],
  openGraph: {
    title: `${business.name} | Digital Services & Electronics`,
    description:
      "All online and financial services in one place. Contact us on WhatsApp for fast assistance.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
