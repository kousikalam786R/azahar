import Link from "next/link";
import type { IconType } from "react-icons";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  actionLabel: string;
  Icon: IconType;
};

export default function ServiceCard({ title, description, href, actionLabel, Icon }: ServiceCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-100">
      <div className="inline-flex rounded-xl bg-brand-50 p-3 text-xl text-brand-600">
        <Icon />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-brand-700 transition hover:border-brand-500"
      >
        {actionLabel}
      </Link>
    </article>
  );
}
