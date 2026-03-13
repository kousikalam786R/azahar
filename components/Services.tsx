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
import { useLocale, useTranslations } from "next-intl";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

const serviceIcons = {
  "fino-banking": FaPiggyBank,
  "pan-card": FaIdCard,
  "driving-licence": FaCar,
  "aadhaar-services": FaFingerprint,
  "online-form": FaFileAlt,
  "money-transfer": FaUniversity,
  insurance: FaShieldAlt,
  "electricity-bill": FaBolt
} as const;

export default function Services() {
  const locale = useLocale();
  const t = useTranslations("services");

  return (
    <section id="services" className="py-16 md:py-20">
      <div className="section-shell">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          {t("title")}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600 sm:text-base">
          {t("subtitle")}
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = serviceIcons[service.slug] ?? FaFileAlt;
            return (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.description}
                href={`/${locale}/services/${service.slug}`}
                actionLabel={t("viewDetails")}
                Icon={Icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
