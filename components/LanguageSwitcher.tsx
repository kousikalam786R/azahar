"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { defaultLocale, locales, type Locale } from "@/i18n/config";

type LanguageSwitcherProps = {
  onNavigate?: () => void;
};

export default function LanguageSwitcher({ onNavigate }: LanguageSwitcherProps) {
  const t = useTranslations("navbar");
  const label = useTranslations("languageSwitcher");
  const pathname = usePathname() || "/";
  const segments = pathname.split("/").filter(Boolean);
  const currentLocale = (segments[0] as Locale) || defaultLocale;
  const restPath = segments.slice(1).join("/");
  const basePath = restPath ? `/${restPath}` : "";

  return (
    <div className="flex items-center gap-2 text-xs sm:text-sm" aria-label={t("language")}>
      {locales.map((locale) => {
        const isActive = locale === currentLocale;
        const href = `/${locale}${basePath}`;
        return (
          <Link
            key={locale}
            href={href}
            onClick={onNavigate}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-full px-2.5 py-1 font-semibold transition ${
              isActive
                ? "bg-brand-600 text-white"
                : "text-slate-600 hover:bg-slate-100 hover:text-brand-600"
            }`}
          >
            {label(locale)}
          </Link>
        );
      })}
    </div>
  );
}
