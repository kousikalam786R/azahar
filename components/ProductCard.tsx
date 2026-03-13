import { FaStar } from "react-icons/fa";
import Link from "next/link";

type ProductCardProps = {
  name: string;
  description: string;
  image: string;
  price: string;
  originalPrice: string;
  discount: string;
  rating: number;
  reviews: number;
  href: string;
  actionLabel: string;
};

export default function ProductCard({
  name,
  description,
  image,
  price,
  originalPrice,
  discount,
  rating,
  reviews,
  href,
  actionLabel
}: ProductCardProps) {
  return (
    <article className="group rounded-xl border border-slate-200 bg-white p-4 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="overflow-hidden rounded-lg bg-slate-100">
        <img
          src={image}
          alt={name}
          className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="mt-4 text-base font-semibold text-slate-900">{name}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      <div className="mt-3 flex items-center gap-2 text-sm">
        <span className="inline-flex items-center gap-1 rounded-md bg-green-500 px-2 py-0.5 font-semibold text-white">
          {rating.toFixed(1)} <FaStar className="text-xs" />
        </span>
        <span className="text-slate-500">({reviews})</span>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <span className="text-lg font-bold text-slate-900">{price}</span>
        <span className="text-sm text-slate-400 line-through">{originalPrice}</span>
        <span className="text-sm font-semibold text-green-600">{discount}</span>
      </div>
      <Link
        href={href}
        className="mt-5 inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        {actionLabel}
      </Link>
    </article>
  );
}
