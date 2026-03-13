import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaStar, FaWhatsapp } from "react-icons/fa";
import { getTranslations } from "next-intl/server";
import { products } from "@/data/products";
import { whatsappUrl } from "@/lib/siteData";

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
    <section className="bg-gray-50 py-20 md:py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[2fr,1fr]">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-md sm:p-8">
          <Link
            href={`/${locale}/products`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-800"
          >
            <FaArrowLeft />
            Back to Products
          </Link>
          <div className="mt-4 overflow-hidden rounded-lg bg-slate-100">
            <img src={product.image} alt={product.name} className="h-72 w-full object-cover sm:h-96" />
          </div>
          <h1 className="mt-6 text-3xl font-extrabold text-slate-900 sm:text-4xl">{product.name}</h1>
          <div className="mt-3 flex items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1 rounded-md bg-green-500 px-2 py-0.5 font-semibold text-white">
              {product.rating.toFixed(1)} <FaStar className="text-xs" />
            </span>
            <span className="text-slate-500">{product.reviews} ratings</span>
          </div>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">{product.description}</p>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-slate-900">{t("features")}</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 sm:text-base">
              {product.features.map((feature) => (
                <li key={feature} className="rounded-lg border border-slate-200 bg-gray-50 px-4 py-3">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="rounded-xl border border-slate-200 bg-white p-6 shadow-md sm:p-8">
          <h2 className="text-lg font-semibold text-slate-900">{t("price")}</h2>
          <p className="mt-3 text-3xl font-bold text-blue-700">{product.price}</p>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-sm text-slate-400 line-through">{product.originalPrice}</span>
            <span className="text-sm font-semibold text-green-600">{product.discount}</span>
          </div>
          <p className="mt-4 text-sm text-slate-600">{t("helperText")}</p>
          <Link
            href={whatsappUrl(`I want to buy ${product.name}`)}
            target="_blank"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
          >
            <FaWhatsapp />
            {t("orderWhatsapp")}
          </Link>
        </aside>
      </div>
    </section>
  );
}
