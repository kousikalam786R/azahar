import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import { business, whatsappUrl } from "@/lib/siteData";

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");
  const navbar = useTranslations("navbar");
  const whatsapp = useTranslations("whatsapp");
  const year = new Date().getFullYear();

  const links = [
    { key: "home", href: `/${locale}#home` },
    { key: "services", href: `/${locale}#services` },
    { key: "products", href: `/${locale}/products` },
    { key: "about", href: `/${locale}#about` },
    { key: "contact", href: `/${locale}#contact` }
  ];

  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="section-shell py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-sm font-black text-white">
                DA
              </div>
              <span className="text-base font-bold text-gray-900">{business.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">{t("blurb")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
              {t("quickLinks")}
            </h3>
            <div className="mt-4 flex flex-col gap-2.5 text-sm">
              {links.map(({ key, href }) => (
                <Link
                  key={key}
                  href={href}
                  className="text-gray-500 transition-colors hover:text-brand-600"
                >
                  {navbar(key)}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
              {t("social")}
            </h3>
            <div className="mt-4 flex gap-2">
              <Link
                href={whatsappUrl(whatsapp("general"))}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600 transition-colors hover:bg-green-100"
              >
                <FaWhatsapp />
              </Link>
              <Link
                href={business.facebookUrl}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors hover:bg-brand-100"
              >
                <FaFacebookF />
              </Link>
              <Link
                href={business.instagramUrl}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-50 text-pink-600 transition-colors hover:bg-pink-100"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-xs text-gray-400">
          {t("rights", { year, name: business.name })}
        </div>
      </div>
    </footer>
  );
}
