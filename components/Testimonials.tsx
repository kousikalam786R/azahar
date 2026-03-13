import { FaStar } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const reviews = t.raw("reviews") as Array<{ name: string; text: string }>;

  return (
    <section className="py-16 md:py-20">
      <div className="section-shell">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          {t("title")}
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="flex gap-1 text-amber-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="mt-4 text-sm text-slate-600">{review.text}</p>
              <p className="mt-4 text-sm font-semibold text-slate-900">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
