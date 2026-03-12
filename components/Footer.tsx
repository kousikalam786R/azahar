import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { business, whatsappUrl } from "@/lib/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 py-10 text-slate-300">
      <div className="section-shell grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold text-white">{business.name}</h3>
          <p className="mt-3 text-sm text-slate-400">
            Your trusted local partner for digital and financial services.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Quick Links</h3>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <a href="#home" className="hover:text-white">
              Home
            </a>
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Social</h3>
          <div className="mt-3 flex gap-3">
            <Link
              href={whatsappUrl("Hello, I need details about your services.")}
              target="_blank"
              className="rounded-full bg-whatsapp p-2 text-white"
            >
              <FaWhatsapp />
            </Link>
            <Link href={business.facebookUrl} target="_blank" className="rounded-full bg-white/10 p-2 text-white">
              <FaFacebookF />
            </Link>
            <Link href={business.instagramUrl} target="_blank" className="rounded-full bg-white/10 p-2 text-white">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-slate-400">
        © 2026 {business.name}. All rights reserved.
      </p>
    </footer>
  );
}
