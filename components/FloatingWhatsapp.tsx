import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { whatsappUrl } from "@/lib/siteData";

export default function FloatingWhatsapp() {
  const t = useTranslations("floatingWhatsapp");
  const whatsapp = useTranslations("whatsapp");

  return (
    <Link
      href={whatsappUrl(whatsapp("floating"))}
      target="_blank"
      aria-label={t("ariaLabel")}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white shadow-lg transition hover:scale-105 hover:bg-green-600"
    >
      <FaWhatsapp />
    </Link>
  );
}
