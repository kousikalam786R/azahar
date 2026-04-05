"use client";

import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-lg shadow-nav">
      <div className="section-shell flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-sm font-black text-white">
            DA
          </div>
          <span className="text-base font-bold text-gray-900">{business.name}</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.path ? `/${locale}/${item.path}` : `/${locale}#${item.anchor}`}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              {t(item.id)}
            </Link>
          ))}
        </nav>

        {/* Desktop right */}
        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <Link
            href={whatsappUrl(whatsapp("general"))}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-brand-700 hover:shadow-md active:scale-[0.97]"
          >
            <FaWhatsapp className="text-base" />
            {t("whatsappNow")}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 md:hidden"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={t("menu")}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-gray-100 bg-white md:hidden"
          >
            <div className="section-shell flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.path ? `/${locale}/${item.path}` : `/${locale}#${item.anchor}`}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
                >
                  {t(item.id)}
                </Link>
              ))}
              <div className="mt-3 flex items-center gap-3 border-t border-gray-100 pt-3">
                <LanguageSwitcher onNavigate={() => setIsOpen(false)} />
              </div>
              <Link
                href={whatsappUrl(whatsapp("general"))}
                target="_blank"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white"
              >
                <FaWhatsapp />
                {t("whatsappNow")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
