"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { business, whatsappUrl } from "@/lib/siteData";

export default function CTABanner() {
  const t = useTranslations("hero");
  const whatsapp = useTranslations("whatsapp");

  return (
    <section className="bg-brand-600 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-shell text-center"
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Need help with any service?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-brand-100">
          Get in touch with us today. We&apos;re here to help with all your digital,
          financial, and document services.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={whatsappUrl(whatsapp("hero"))}
            target="_blank"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-brand-700 shadow-md transition-all hover:shadow-lg active:scale-[0.97]"
          >
            <FaWhatsapp className="text-base text-green-600" />
            {t("whatsapp")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href={`tel:${business.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-6 py-3.5 text-sm font-bold text-white transition-all hover:border-white/60 hover:bg-white/10 active:scale-[0.97]"
          >
            {t("callNow")} — {business.phoneDisplay}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
