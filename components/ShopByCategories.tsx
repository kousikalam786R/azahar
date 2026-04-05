"use client";

import { categories } from "@/data/products";

type Props = {
  active: string | null;
  onSelect: (category: string | null) => void;
};

export default function ShopByCategories({ active, onSelect }: Props) {
  return (
    <div className="border-b border-gray-100 bg-white">
      <div className="section-shell py-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-extrabold text-gray-900 sm:text-xl">
            Shop by <span className="text-brand-600">Categories</span>
          </h2>
          {active && (
            <button
              onClick={() => onSelect(null)}
              className="text-xs font-bold text-brand-600 hover:text-brand-700 sm:text-sm"
            >
              Clear Filter ✕
            </button>
          )}
        </div>

        {/* Horizontal scroll row */}
        <div className="mt-6 -mx-5 px-5 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide sm:gap-7 sm:justify-center">
            {/* "All" pill */}
            <button
              onClick={() => onSelect(null)}
              className="group flex shrink-0 flex-col items-center gap-3"
            >
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-full border-2 transition-all duration-300 sm:h-24 sm:w-24 ${
                  active === null
                    ? "border-brand-500 bg-brand-50 shadow-soft"
                    : "border-gray-100 bg-gray-50 group-hover:border-brand-300 group-hover:shadow-soft"
                }`}
              >
                <span className="text-2xl">🛒</span>
              </div>
              <span
                className={`text-center text-xs font-bold leading-tight transition-colors sm:text-sm ${
                  active === null ? "text-brand-600" : "text-gray-700 group-hover:text-brand-600"
                }`}
              >
                All
              </span>
            </button>

            {categories.map((cat) => {
              const isActive = active === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => onSelect(cat.name)}
                  className="group flex shrink-0 flex-col items-center gap-3"
                >
                  <div
                    className={`flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 p-2 transition-all duration-300 sm:h-24 sm:w-24 ${
                      isActive
                        ? "border-brand-500 bg-brand-50 shadow-soft ring-2 ring-brand-200"
                        : "border-gray-100 bg-gray-50 group-hover:border-brand-300 group-hover:shadow-soft"
                    }`}
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="h-full w-full rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <span
                    className={`max-w-[80px] text-center text-xs font-bold leading-tight transition-colors sm:max-w-[96px] sm:text-sm ${
                      isActive ? "text-brand-600" : "text-gray-700 group-hover:text-brand-600"
                    }`}
                  >
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
