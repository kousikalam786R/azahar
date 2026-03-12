"use client";

import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { business, whatsappUrl } from "@/lib/siteData";

const navItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="section-shell flex h-16 items-center justify-between">
        <a href="#home" className="text-sm font-bold text-brand-700 sm:text-base">
          {business.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-slate-600 transition hover:text-brand-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href={whatsappUrl("Hello, I need details about your services.")}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.02]"
          >
            <FaWhatsapp />
            WhatsApp Now
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="section-shell flex flex-col gap-3 py-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-slate-700"
              >
                {item.label}
              </a>
            ))}
            <Link
              href={whatsappUrl("Hello, I need details about your services.")}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white"
            >
              <FaWhatsapp />
              WhatsApp Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
