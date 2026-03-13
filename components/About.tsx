import { business } from "@/lib/siteData";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="bg-white py-20 md:py-24">
      <div className="section-shell grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{t("title")}</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            {t("paragraph1", { name: business.name })}
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            {t("paragraph2")}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80"
            alt="Digital service center shop"
            className="h-56 w-full rounded-xl object-cover shadow-md sm:h-72"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
            alt="Owner of digital service center"
            className="h-56 w-full rounded-xl object-cover shadow-md sm:h-72"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
