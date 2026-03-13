"use client";

import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import { business, whatsappUrl } from "@/lib/siteData";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const navItems = [
  { id: "home", anchor: "home" },
  { id: "services", anchor: "services" },
  { id: "products", path: "products" },
  { id: "about", anchor: "about" },
  { id: "contact", anchor: "contact" }
];

export default function Navbar() {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("navbar");
  const whatsapp = useTranslations("whatsapp");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="section-shell flex h-16 items-center justify-between">
        <a href="#home" className="text-sm font-bold text-brand-700 sm:text-base">
          {business.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.path ? `/${locale}/${item.path}` : `/${locale}#${item.anchor}`}
              className="text-sm font-medium text-slate-600 transition hover:text-brand-600"
            >
              {t(item.id)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher />
          <Link
            href={whatsappUrl(whatsapp("general"))}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-green-600"
          >
            <FaWhatsapp />
            {t("whatsappNow")}
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={t("menu")}
        >
          {t("menu")}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="section-shell flex flex-col gap-3 py-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.path ? `/${locale}/${item.path}` : `/${locale}#${item.anchor}`}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-slate-700"
              >
                {t(item.id)}
              </Link>
            ))}
            <LanguageSwitcher onNavigate={() => setIsOpen(false)} />
            <Link
              href={whatsappUrl(whatsapp("general"))}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white"
            >
              <FaWhatsapp />
              {t("whatsappNow")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
