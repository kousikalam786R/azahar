"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { whatsappUrl } from "@/lib/siteData";

export default function FloatingWhatsapp() {
  const t = useTranslations("floatingWhatsapp");
  const whatsapp = useTranslations("whatsapp");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.4, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href={whatsappUrl(whatsapp("floating"))}
        target="_blank"
        aria-label={t("ariaLabel")}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
      >
        <FaWhatsapp />
        {/* pulse ring */}
        <span className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-30" />
      </Link>
    </motion.div>
  );
}
