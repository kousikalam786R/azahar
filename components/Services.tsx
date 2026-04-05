"use client";

import {
  FaBolt,
  FaFileAlt,
  FaFingerprint,
  FaIdCard,
  FaCar,
  FaUniversity,
  FaPiggyBank,
  FaShieldAlt
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

const serviceIcons: Record<string, IconType> = {
  "fino-banking": FaPiggyBank,
  "pan-card": FaIdCard,
  "driving-licence": FaCar,
  "aadhaar-services": FaFingerprint,
  "online-form": FaFileAlt,
  "money-transfer": FaUniversity,
  insurance: FaShieldAlt,
  "electricity-bill": FaBolt
};

export default function Services() {
  const locale = useLocale();
  const t = useTranslations("services");

  return (
    <section id="services" className="bg-gray-50 py-20 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
            Services
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-base text-gray-500">{t("subtitle")}</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-2">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.slug] ?? FaFileAlt;
            return (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.description}
                href={`/${locale}/services/${service.slug}`}
                actionLabel={t("viewDetails")}
                Icon={Icon}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
