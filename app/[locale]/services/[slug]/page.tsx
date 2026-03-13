import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { services } from "@/data/services";
import { whatsappUrl } from "@/lib/siteData";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetailsPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const t = await getTranslations("serviceDetails");

  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[2fr,1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">{service.title}</h1>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">{service.description}</p>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-slate-900">{t("documents")}</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {service.documents.map((doc) => (
                <div
                  key={doc}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {doc}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-brand-200 bg-brand-50 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                {t("charges")}
              </p>
              <p className="mt-2 text-xl font-bold text-brand-700">{service.price}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                {t("time")}
              </p>
              <p className="mt-2 text-xl font-bold text-slate-900">{service.time}</p>
            </div>
          </div>
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
          <h2 className="text-lg font-semibold text-slate-900">{t("helperTitle")}</h2>
          <p className="mt-2 text-sm text-slate-600">{t("helperText")}</p>
          <Link
            href={whatsappUrl(t("whatsappMessage", { service: service.title }))}
            target="_blank"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-white transition hover:brightness-95"
          >
            <FaWhatsapp />
            {t("whatsapp")}
          </Link>
        </aside>
      </div>
    </section>
  );
}
