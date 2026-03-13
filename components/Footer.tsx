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

  return (
    <footer className="border-t border-slate-200 bg-slate-900 py-10 text-slate-300">
      <div className="section-shell grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold text-white">{business.name}</h3>
          <p className="mt-3 text-sm text-slate-400">{t("blurb")}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            {t("quickLinks")}
          </h3>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link href={`/${locale}#home`} className="hover:text-white">
              {navbar("home")}
            </Link>
            <Link href={`/${locale}#services`} className="hover:text-white">
              {navbar("services")}
            </Link>
            <Link href={`/${locale}/products`} className="hover:text-white">
              {navbar("products")}
            </Link>
            <Link href={`/${locale}#about`} className="hover:text-white">
              {navbar("about")}
            </Link>
            <Link href={`/${locale}#contact`} className="hover:text-white">
              {navbar("contact")}
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            {t("social")}
          </h3>
          <div className="mt-3 flex gap-3">
            <Link
              href={whatsappUrl(whatsapp("general"))}
              target="_blank"
              className="rounded-full bg-green-500 p-2 text-white transition hover:bg-green-600"
            >
              <FaWhatsapp />
            </Link>
            <Link href={business.facebookUrl} target="_blank" className="rounded-full bg-white/10 p-2 text-white">
              <FaFacebookF />
            </Link>
            <Link href={business.instagramUrl} target="_blank" className="rounded-full bg-white/10 p-2 text-white">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-slate-400">
        {t("rights", { year, name: business.name })}
      </p>
    </footer>
  );
}
