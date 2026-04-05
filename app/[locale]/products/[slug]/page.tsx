import Link from "next/link";
import { notFound } from "next/navigation";
import { FaStar, FaWhatsapp, FaShieldAlt, FaTruck, FaUndoAlt } from "react-icons/fa";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { products } from "@/data/products";
import { whatsappUrl, business } from "@/lib/siteData";

type ProductPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function ProductDetailsPage({ params }: ProductPageProps) {
  const { locale, slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const t = await getTranslations("productDetails");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Breadcrumb ── */}
      <div className="border-b border-gray-100 bg-white">
        <div className="section-shell flex items-center gap-1.5 py-3 text-xs text-gray-400">
          <Link href={`/${locale}`} className="hover:text-brand-600">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href={`/${locale}/products`} className="hover:text-brand-600">Products</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="font-semibold text-gray-700 line-clamp-1">{product.name}</span>
        </div>
      </div>

      {/* ── Product layout ── */}
      <div className="section-shell py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Image */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6">
            <div className="relative overflow-hidden rounded-xl bg-gray-50">
              <img
                src={product.image}
                alt={product.name}
                className="mx-auto h-72 w-full object-contain sm:h-96"
              />
              <span className="absolute left-0 top-4 rounded-r-full bg-red-500 px-4 py-1.5 text-xs font-bold text-white">
                {product.discount}
              </span>
            </div>
          </div>

          {/* Right: Product info */}
          <div>
            {/* Name */}
            <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-3 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-green-500 px-2.5 py-1 text-sm font-bold text-white">
                {product.rating.toFixed(1)} <FaStar className="text-xs" />
              </span>
              <span className="text-sm text-gray-500">{product.reviews} Ratings & Reviews</span>
            </div>

            {/* Price section */}
            <div className="mt-6 rounded-xl border border-gray-100 bg-white p-5">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-extrabold text-gray-900">{product.price}</span>
                <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                <span className="rounded-md bg-green-50 px-2.5 py-1 text-sm font-bold text-green-600">
                  {product.discount}
                </span>
              </div>
              <p className="mt-1.5 text-xs text-gray-400">Inclusive of all taxes</p>
            </div>

            {/* Description */}
            <p className="mt-5 text-sm leading-relaxed text-gray-500">
              {product.description}
            </p>

            {/* Features */}
            <div className="mt-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">
                {t("features")}
              </h3>
              <div className="mt-3 space-y-2.5">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600" />
                    <span className="text-sm font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-gray-100 bg-white px-3 py-3 text-center">
                <FaShieldAlt className="mx-auto text-lg text-brand-600" />
                <p className="mt-1.5 text-[10px] font-bold text-gray-700">Quality Assured</p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-white px-3 py-3 text-center">
                <FaTruck className="mx-auto text-lg text-brand-600" />
                <p className="mt-1.5 text-[10px] font-bold text-gray-700">Fast Delivery</p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-white px-3 py-3 text-center">
                <FaUndoAlt className="mx-auto text-lg text-brand-600" />
                <p className="mt-1.5 text-[10px] font-bold text-gray-700">Easy Returns</p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={whatsappUrl(`I want to buy ${product.name}`)}
                target="_blank"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-green-600 active:scale-[0.97]"
              >
                <FaWhatsapp className="text-base" />
                {t("orderWhatsapp")}
              </Link>
              <Link
                href={`tel:${business.phoneRaw}`}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-bold text-gray-700 transition-all hover:border-brand-300 hover:shadow-md active:scale-[0.97]"
              >
                Call to Order
              </Link>
            </div>

            {/* Helper text */}
            <p className="mt-4 text-center text-xs text-gray-400">
              {t("helperText")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
