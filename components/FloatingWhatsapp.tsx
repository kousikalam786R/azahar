import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappUrl } from "@/lib/siteData";

export default function FloatingWhatsapp() {
  return (
    <Link
      href={whatsappUrl("Hello, I want to know more about your services.")}
      target="_blank"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-2xl text-white shadow-lg transition hover:scale-105"
    >
      <FaWhatsapp />
    </Link>
  );
}
