"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, Truck, RotateCcw, BadgePercent } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ShopByCategories from "@/components/ShopByCategories";

const trustBadges = [
  { icon: ShieldCheck, label: "Quality Assured", sub: "Genuine Products" },
  { icon: Truck, label: "Fast Delivery", sub: "Same-day dispatch" },
  { icon: RotateCcw, label: "Easy Returns", sub: "7-day replacement" },
  { icon: BadgePercent, label: "Best Prices", sub: "Affordable rates" }
];

export default function ProductsSection() {
  const locale = useLocale();
  const t = useTranslations("products");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  return (
    <section className="bg-white" id="products">
      {/* ── Trust badges bar ── */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="section-shell grid grid-cols-2 gap-4 py-4 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-gray-200">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center justify-center gap-2.5 px-4 py-2">
              <badge.icon className="h-5 w-5 shrink-0 text-brand-600" />
              <div>
                <p className="text-xs font-bold text-gray-800">{badge.label}</p>
                <p className="text-[10px] text-gray-400">{badge.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Shop by Categories (filter) ── */}
      <ShopByCategories active={activeCategory} onSelect={setActiveCategory} />

      {/* ── Section header ── */}
      <div className="section-shell pb-2 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-end justify-between"
        >
          <div>
            <h2 className="text-lg font-extrabold text-gray-900 sm:text-xl">
              {activeCategory ? (
                <>Showing <span className="text-brand-600">{activeCategory}</span></>
              ) : (
                <>Explore <span className="text-brand-600">Bestsellers</span></>
              )}
            </h2>
            <p className="mt-0.5 text-xs text-gray-400">
              {filtered.length} product{filtered.length !== 1 ? "s" : ""}
            </p>
          </div>
          <Link
            href={`/${locale}/products`}
            className="text-xs font-bold text-brand-600 hover:text-brand-700 sm:text-sm"
          >
            View All →
          </Link>
        </motion.div>
      </div>

      {/* ── Product grid ── */}
      <div className="section-shell pb-12 pt-4">
        <motion.div
          layout
          className="grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((product, index) => (
              <ProductCard
                key={product.slug}
                name={product.name}
                description={product.description}
                image={product.image}
                price={product.price}
                originalPrice={product.originalPrice}
                discount={product.discount}
                rating={product.rating}
                reviews={product.reviews}
                features={product.features}
                href={`/${locale}/products/${product.slug}`}
                actionLabel={t("viewDetails")}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mobile "View All" */}
        <div className="mt-6 text-center sm:hidden">
          <Link
            href={`/${locale}/products`}
            className="inline-flex items-center justify-center rounded-lg border border-brand-200 bg-brand-50 px-6 py-2.5 text-sm font-bold text-brand-600 hover:bg-brand-100"
          >
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
}
