"use client";

import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

type ProductCardProps = {
  name: string;
  description: string;
  image: string;
  price: string;
  originalPrice: string;
  discount: string;
  rating: number;
  reviews: number;
  features: string[];
  href: string;
  actionLabel: string;
  index?: number;
};

export default function ProductCard({
  name,
  image,
  price,
  originalPrice,
  discount,
  rating,
  reviews,
  features,
  href,
  actionLabel,
  index = 0
}: ProductCardProps) {
  const primaryFeature = features[0] ?? "";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative flex flex-col overflow-hidden rounded-xl bg-white transition-shadow duration-300 hover:shadow-card-hover"
    >
      {/* Feature tag */}
      {primaryFeature && (
        <div className="absolute left-0 top-3 z-10 rounded-r-full bg-brand-600 px-3 py-1 text-[10px] font-bold text-white">
          {primaryFeature}
        </div>
      )}

      {/* Image area */}
      <Link href={href} className="relative block bg-gray-50 px-4 pb-2 pt-10">
        <img
          src={image}
          alt={name}
          className="mx-auto h-36 w-full object-contain transition-transform duration-500 group-hover:scale-105 sm:h-44"
          loading="lazy"
        />
      </Link>

      {/* Card body */}
      <div className="flex flex-1 flex-col border-t border-gray-50 px-3.5 pb-3.5 pt-3">
        {/* Rating row */}
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center gap-0.5 text-xs font-bold text-gray-800">
            <FaStar className="text-[10px] text-amber-400" />
            {rating.toFixed(1)}
          </span>
          <span className="text-[11px] text-gray-400">{reviews} verified reviews</span>
        </div>

        {/* Product name */}
        <Link href={href}>
          <h3 className="mt-2 text-[13px] font-bold leading-snug text-gray-900 line-clamp-2 group-hover:text-brand-600 transition-colors">
            {name}
          </h3>
        </Link>

        {/* Price row */}
        <div className="mt-2.5 flex flex-wrap items-baseline gap-1.5">
          <span className="text-base font-extrabold text-gray-900">{price}</span>
          <span className="text-xs text-gray-400 line-through">{originalPrice}</span>
        </div>
        <span className="mt-1 inline-block w-fit rounded-sm bg-red-50 px-1.5 py-0.5 text-[11px] font-bold text-red-600">
          {discount}
        </span>

        {/* Feature pills */}
        {features.length > 1 && (
          <div className="mt-2.5 flex flex-wrap gap-1">
            {features.slice(1, 3).map((feat) => (
              <span
                key={feat}
                className="rounded-full border border-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-500"
              >
                {feat}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <Link
          href={href}
          className="mt-auto pt-3 inline-flex w-full items-center justify-center rounded-lg bg-brand-600 py-2 text-xs font-bold text-white transition-all hover:bg-brand-700 active:scale-[0.97]"
        >
          {actionLabel}
        </Link>
      </div>
    </motion.article>
  );
}
