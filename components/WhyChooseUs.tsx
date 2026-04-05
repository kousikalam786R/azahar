"use client";

import {
  FaHandshake,
  FaHourglassHalf,
  FaRupeeSign,
  FaUserCheck,
  FaUsers
} from "react-icons/fa";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const featureIcons = [FaHourglassHalf, FaHandshake, FaRupeeSign, FaUserCheck, FaUsers];

export default function WhyChooseUs() {
  const t = useTranslations("whyChooseUs");
  const features = t.raw("features") as string[];

  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="section-shell grid items-center gap-12 md:grid-cols-2">
        {/* Left: image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-2xl border border-gray-100 bg-white p-3 shadow-card">
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80"
                alt="Trusted digital service team"
                className="h-72 w-full object-cover sm:h-80"
                loading="lazy"
              />
            </div>
          </div>
          {/* accent blob */}
          <div className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-brand-100 blur-3xl" />
        </motion.div>

        {/* Right: features list */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
            Why Us
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t("title")}
          </h2>

          <div className="mt-8 space-y-5">
            {features.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <div key={feature} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    {Icon ? <Icon className="text-lg" /> : <CheckCircle2 className="h-5 w-5" />}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">{feature}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
