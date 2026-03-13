import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ProductsSection() {
  const locale = useLocale();
  const t = useTranslations("products");

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="section-shell">
        <h1 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">{t("title")}</h1>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600 sm:text-base">{t("subtitle")}</p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
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
              href={`/${locale}/products/${product.slug}`}
              actionLabel={t("viewDetails")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
