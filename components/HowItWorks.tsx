import { FaFileUpload, FaPhoneAlt, FaTasks } from "react-icons/fa";
import { useTranslations } from "next-intl";

const stepIcons = [FaTasks, FaPhoneAlt, FaFileUpload];

export default function HowItWorks() {
  const t = useTranslations("howItWorks");
  const steps = t.raw("steps") as Array<{ title: string; description: string }>;

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="section-shell">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          {t("title")}
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
            <article
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-soft"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                {index + 1}
              </div>
              {Icon ? <Icon className="mt-4 text-2xl text-brand-600" /> : null}
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </article>
          );
          })}
        </div>
      </div>
    </section>
  );
}
