"use client";

import { business } from "@/lib/siteData";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Award, MapPin } from "lucide-react";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="section-shell grid items-center gap-12 md:grid-cols-2">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
            About Us
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-500">
            {t("paragraph1", { name: business.name })}
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-500">
            {t("paragraph2")}
          </p>

          {/* mini info cards */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
              <Award className="h-6 w-6 text-brand-600" />
              <p className="mt-2 text-sm font-bold text-gray-900">Trusted Center</p>
              <p className="mt-0.5 text-xs text-gray-500">Verified local service provider</p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
              <MapPin className="h-6 w-6 text-brand-600" />
              <p className="mt-2 text-sm font-bold text-gray-900">Easy Access</p>
              <p className="mt-0.5 text-xs text-gray-500">Located in Raiganj center</p>
            </div>
          </div>
        </motion.div>

        {/* Right: images */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-card">
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80"
              alt="Digital service center shop"
              className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-72"
              loading="lazy"
            />
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-100 shadow-card">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
              alt="Owner of digital service center"
              className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-72"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
