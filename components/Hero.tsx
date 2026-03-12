import Link from "next/link";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { business, whatsappUrl } from "@/lib/siteData";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-slate-100">
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-100 blur-3xl" />
      <div className="section-shell grid gap-10 py-16 md:grid-cols-2 md:py-24">
        <div className="animate-fade-up">
          <p className="mb-3 inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 shadow-soft">
            Trusted Local Digital Services
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            Welcome to {business.name}
          </h1>
          <h2 className="mt-4 text-xl font-semibold text-brand-700">
            All Digital & Financial Services in One Place
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            We provide PAN Card services, Driving Licence assistance, Fino Payment Bank
            services, and many other digital services.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={whatsappUrl("Hello, I want to know about your services.")}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
            >
              <FaWhatsapp />
              Contact on WhatsApp
            </Link>
            <Link
              href={`tel:${business.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-5 py-3 text-sm font-semibold text-brand-700 transition hover:border-brand-500"
            >
              <FaPhoneAlt />
              Call Now
            </Link>
          </div>
        </div>

        <div className="animate-fade-up rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
          <img
            src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1200&q=80"
            alt="Digital service and financial support illustration"
            className="h-full min-h-64 w-full rounded-2xl object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
