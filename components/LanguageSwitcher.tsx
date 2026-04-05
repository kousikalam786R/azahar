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
    <div className="flex items-center gap-1 text-xs sm:text-sm" aria-label={t("language")}>
      {locales.map((locale) => {
        const isActive = locale === currentLocale;
        const href = `/${locale}${basePath}`;
        return (
          <Link
            key={locale}
            href={href}
            onClick={onNavigate}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-md px-2.5 py-1 font-semibold transition-colors ${
              isActive
                ? "bg-brand-600 text-white"
                : "text-gray-500 hover:bg-brand-50 hover:text-brand-700"
            }`}
          >
            {label(locale)}
          </Link>
        );
      })}
    </div>
  );
}
