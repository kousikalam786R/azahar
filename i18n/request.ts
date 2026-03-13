import { getRequestConfig } from "next-intl/server";
import { defaultLocale, locales, type Locale } from "@/i18n/config";

export { defaultLocale, locales };
export type { Locale };

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  const resolvedLocale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : defaultLocale;
  const messagesModule = await import(`../messages/${resolvedLocale}.json`);

  return {
    locale: resolvedLocale,
    messages: (messagesModule as { default?: Record<string, unknown> }).default ?? messagesModule
  };
});
