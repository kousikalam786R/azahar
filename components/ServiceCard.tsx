"use client";

import Link from "next/link";
import type { IconType } from "react-icons";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  actionLabel: string;
  Icon: IconType;
  index: number;
};

export default function ServiceCard({
  title,
  description,
  href,
  actionLabel,
  Icon,
  index
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group flex gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-brand-200 hover:shadow-card-hover"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-xl text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
        <Icon />
      </div>
      <div className="min-w-0">
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{description}</p>
        <Link
          href={href}
          className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
        >
          {actionLabel}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}
