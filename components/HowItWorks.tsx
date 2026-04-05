"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MousePointerClick, Phone, FileCheck } from "lucide-react";

const stepIcons = [MousePointerClick, Phone, FileCheck];

export default function HowItWorks() {
  const t = useTranslations("howItWorks");
  const steps = t.raw("steps") as Array<{ title: string; description: string }>;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t("title")}
          </h2>
        </motion.div>

        {/* horizontal stepper */}
        <div className="relative mt-16">
          {/* connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-brand-100 md:block" />

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = stepIcons[index] ?? MousePointerClick;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative text-center"
                >
                  {/* step number circle */}
                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-brand-600 text-white shadow-soft">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="mt-3 inline-block rounded-full bg-brand-50 px-3 py-0.5 text-xs font-bold text-brand-600">
                    Step {index + 1}
                  </span>
                  <h3 className="mt-3 text-base font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
