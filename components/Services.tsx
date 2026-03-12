import Link from "next/link";
import {
  FaBolt,
  FaCarSide,
  FaFileAlt,
  FaIdCard,
  FaMoneyBillWave,
  FaPiggyBank,
  FaRegAddressCard,
  FaShieldAlt,
  FaWhatsapp
} from "react-icons/fa";
import { serviceList, whatsappUrl } from "@/lib/siteData";

const serviceIcons = [
  FaPiggyBank,
  FaIdCard,
  FaCarSide,
  FaRegAddressCard,
  FaFileAlt,
  FaMoneyBillWave,
  FaShieldAlt,
  FaBolt
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20">
      <div className="section-shell">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">Our Services</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600 sm:text-base">
          Quick, reliable, and affordable digital solutions for your daily government and
          financial needs.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {serviceList.map((service, idx) => {
            const Icon = serviceIcons[idx];
            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-100"
              >
                <div className="inline-flex rounded-xl bg-brand-50 p-3 text-xl text-brand-600">
                  <Icon />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
                <Link
                  href={whatsappUrl(service.whatsappMessage)}
                  target="_blank"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white transition hover:brightness-95"
                >
                  <FaWhatsapp />
                  Ask on WhatsApp
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
