import { FaHandshake, FaHourglassHalf, FaRupeeSign, FaUserCheck, FaUsers } from "react-icons/fa";
import { useTranslations } from "next-intl";

const featureIcons = [FaHourglassHalf, FaHandshake, FaRupeeSign, FaUserCheck, FaUsers];

export default function WhyChooseUs() {
  const t = useTranslations("whyChooseUs");
  const features = t.raw("features") as string[];

  return (
    <section className="py-20 md:py-24">
      <div className="section-shell">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          {t("title")}
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <article key={feature} className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-md">
                {Icon ? <Icon className="mx-auto text-2xl text-brand-600" /> : null}
                <h3 className="mt-3 text-sm font-semibold text-slate-900">{feature}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
