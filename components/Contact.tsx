import Link from "next/link";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { business, whatsappUrl } from "@/lib/siteData";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-16 md:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Contact Us</h2>
          <div className="mt-6 space-y-4 text-sm text-slate-700 sm:text-base">
            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-brand-600" />
              <span>{business.address}</span>
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-brand-600" />
              <Link href={`tel:${business.phoneRaw}`} className="hover:text-brand-600">
                {business.phoneDisplay}
              </Link>
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={whatsappUrl("Hello, I need details about your services.")}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white"
            >
              <FaWhatsapp />
              WhatsApp
            </Link>
            <Link
              href={business.facebookUrl}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
            >
              <FaFacebookF />
              Facebook
            </Link>
            <Link
              href={business.instagramUrl}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
            >
              <FaInstagram />
              Instagram
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-soft">
          <iframe
            src={business.mapEmbedUrl}
            width="100%"
            height="350"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"
          />
        </div>
      </div>
    </section>
  );
}
