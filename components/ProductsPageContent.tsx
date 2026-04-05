"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { ShieldCheck, Truck, RotateCcw, BadgePercent, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import { whatsappUrl } from "@/lib/siteData";
import ProductCard from "@/components/ProductCard";
import ShopByCategories from "@/components/ShopByCategories";

const trustBadges = [
  { icon: ShieldCheck, label: "Quality Assured", sub: "Genuine Products" },
  { icon: Truck, label: "Fast Delivery", sub: "Same-day dispatch" },
  { icon: RotateCcw, label: "Easy Returns", sub: "7-day replacement" },
  { icon: BadgePercent, label: "Best Prices", sub: "Affordable rates" }
];

export default function ProductsPageContent() {
  const locale = useLocale();
  const t = useTranslations("products");
  const whatsapp = useTranslations("whatsapp");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Breadcrumb ── */}
      <div className="border-b border-gray-100 bg-white">
        <div className="section-shell flex items-center gap-1.5 py-3 text-xs text-gray-400">
          <Link href={`/${locale}`} className="hover:text-brand-600">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="font-semibold text-gray-700">Products</span>
          {activeCategory && (
            <>
              <ChevronRight className="h-3 w-3" />
              <span className="font-semibold text-brand-600">{activeCategory}</span>
            </>
          )}
        </div>
      </div>

      {/* ── Trust badges bar ── */}
      <div className="border-b border-gray-100 bg-white">
        <div className="section-shell grid grid-cols-2 gap-3 py-4 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-gray-200">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center justify-center gap-2.5 px-3 py-1.5">
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

      {/* ── Promo banner ── */}
      <div className="bg-gradient-to-r from-brand-600 to-brand-700">
        <div className="section-shell flex flex-col items-center justify-between gap-3 py-4 sm:flex-row">
          <div>
            <h2 className="text-lg font-extrabold text-white sm:text-xl">
              Electronics Accessories Sale
            </h2>
            <p className="text-xs text-brand-200">Best quality accessories at affordable prices</p>
          </div>
          <Link
            href={whatsappUrl(whatsapp("general"))}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-brand-700 transition-all hover:shadow-md active:scale-[0.97]"
          >
            <FaWhatsapp className="text-green-600" />
            Order on WhatsApp
          </Link>
        </div>
      </div>

      {/* ── Page title + count ── */}
      <div className="section-shell pt-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-end justify-between"
        >
          <div>
            <h1 className="text-lg font-extrabold text-gray-900 sm:text-xl">
              {activeCategory ? (
                <>Showing <span className="text-brand-600">{activeCategory}</span></>
              ) : (
                <>Explore <span className="text-brand-600">Bestsellers</span></>
              )}
            </h1>
            <p className="mt-1 text-xs text-gray-500">
              Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""} — {t("subtitle")}
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── Product grid ── */}
      <div className="section-shell pb-16 pt-6">
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

        {filtered.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg font-bold text-gray-400">No products in this category</p>
            <button
              onClick={() => setActiveCategory(null)}
              className="mt-3 text-sm font-bold text-brand-600 hover:text-brand-700"
            >
              Show all products →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
