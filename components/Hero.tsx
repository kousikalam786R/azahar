"use client";

import Link from "next/link";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { ArrowRight, CheckCircle2, Users, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { business, whatsappUrl } from "@/lib/siteData";

const fade = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const, delay }
  }
});

const stats = [
  { icon: Users, value: "1000+", label: "Happy Customers" },
  { icon: ShieldCheck, value: "8+", label: "Verified Services" },
  { icon: Clock, value: "Same Day", label: "Fast Processing" }
];

export default function Hero() {
  const t = useTranslations("hero");
  const whatsapp = useTranslations("whatsapp");

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-blue-50">
      {/* decorative circles */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-brand-100/40 blur-3xl" />

      <div className="section-shell relative grid items-center gap-12 pb-16 pt-16 md:grid-cols-2 md:pb-24 md:pt-20">
        {/* Left: text content */}
        <div>
          <motion.div variants={fade(0)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold text-brand-700">
              <CheckCircle2 className="h-3.5 w-3.5" />
              {t("badge")}
            </span>
          </motion.div>

          <motion.h1
            variants={fade(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            {t("title", { name: "" })}
            <span className="text-brand-600">{business.name}</span>
          </motion.h1>

          <motion.p
            variants={fade(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-2 text-lg font-semibold text-brand-600 sm:text-xl"
          >
            {t("subtitle")}
          </motion.p>

          <motion.p
            variants={fade(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 max-w-lg text-base leading-relaxed text-gray-500"
          >
            {t("description")}
          </motion.p>

          <motion.div
            variants={fade(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href={whatsappUrl(whatsapp("hero"))}
              target="_blank"
              className="group inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-brand-700 hover:shadow-md active:scale-[0.97]"
            >
              <FaWhatsapp className="text-base" />
              {t("whatsapp")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href={`tel:${business.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:border-brand-300 hover:shadow-md active:scale-[0.97]"
            >
              <FaPhoneAlt className="text-xs text-brand-600" />
              {t("callNow")}
            </Link>
          </motion.div>
        </div>

        {/* Right: visual card */}
        <motion.div
          variants={fade(0.25)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mx-auto w-full max-w-md md:max-w-none"
        >
          <div className="rounded-2xl border border-gray-100 bg-white p-3 shadow-card">
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1200&q=80"
                alt="Digital service and financial support"
                className="h-72 w-full object-cover sm:h-80 md:h-96"
                loading="eager"
              />
            </div>
          </div>

          {/* floating stat pill */}
          <div className="absolute -bottom-4 -left-4 flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-card sm:-left-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">500+</p>
              <p className="text-xs text-gray-500">Services Completed</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats row */}
      <div className="border-t border-gray-100 bg-white">
        <div className="section-shell grid grid-cols-1 divide-y divide-gray-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="flex items-center gap-4 px-6 py-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
