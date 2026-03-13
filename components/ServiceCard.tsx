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
    <article className="group rounded-xl border border-slate-200 bg-white p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      <div className="inline-flex rounded-lg bg-brand-50 p-3 text-xl text-brand-600">
        <Icon />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        {actionLabel}
      </Link>
    </article>
  );
}
