"use client";

import { FaStar } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const avatarColors = [
  "bg-brand-100 text-brand-700",
  "bg-green-100 text-green-700",
  "bg-violet-100 text-violet-700"
];

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const reviews = t.raw("reviews") as Array<{ name: string; text: string }>;

  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t("title")}
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-card-hover"
            >
              {/* stars */}
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="text-sm" />
                ))}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* reviewer */}
              <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                    avatarColors[index % avatarColors.length]
                  }`}
                >
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-400">Verified Customer</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
