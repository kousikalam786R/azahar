"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp
} from "react-icons/fa";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { business, whatsappUrl } from "@/lib/siteData";

export default function Contact() {
  const t = useTranslations("contact");
  const whatsapp = useTranslations("whatsapp");

  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
            Contact
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t("title")}
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Contact info cards */}
          <div className="space-y-4 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-5"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Address</p>
                  <p className="mt-1 text-sm text-gray-500">{business.address}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-5"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Phone</p>
                  <Link
                    href={`tel:${business.phoneRaw}`}
                    className="mt-0.5 text-sm text-brand-600 hover:underline"
                  >
                    {business.phoneDisplay}
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.16 }}
              className="flex gap-3"
            >
              <Link
                href={whatsappUrl(whatsapp("general"))}
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600 transition-colors hover:bg-green-100"
              >
                <FaWhatsapp className="text-lg" />
              </Link>
              <Link
                href={business.facebookUrl}
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors hover:bg-brand-100"
              >
                <FaFacebookF />
              </Link>
              <Link
                href={business.instagramUrl}
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50 text-pink-600 transition-colors hover:bg-pink-100"
              >
                <FaInstagram />
              </Link>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="overflow-hidden rounded-2xl border border-gray-100 shadow-card lg:col-span-3"
          >
            <iframe
              src={business.mapEmbedUrl}
              width="100%"
              height="360"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title={t("mapTitle")}
              className="block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
