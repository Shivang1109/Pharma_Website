import React from "react";
import type { ProductCategory } from "~/types/product";
import { PRODUCT_CATEGORIES } from "~/data/products";

interface CategoryFilterProps {
  selectedCategory: "all" | ProductCategory;
  onSelectCategory: (category: "all" | ProductCategory) => void;
  productCounts?: Record<string, number>;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  productCounts = {},
}) => {
  const options = [
    { id: "all" as const, label: "All Categories", count: productCounts["all"] },
    ...PRODUCT_CATEGORIES.map((cat) => ({
      id: cat.id,
      label: cat.name,
      count: productCounts[cat.id],
    })),
  ];

  return (
    <div className="w-full flex items-center justify-start sm:justify-center overflow-x-auto py-2 no-scrollbar">
      <div
        role="tablist"
        aria-label="Filter products by therapeutic category"
        className="inline-flex p-1.5 bg-gray-100/80 rounded-xl border border-gray-200/80 space-x-1"
      >
        {options.map((option) => {
          const isActive = selectedCategory === option.id;
          return (
            <button
              key={option.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectCategory(option.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-150 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#087B59] focus:ring-offset-1 ${
                isActive
                  ? "bg-[#087B59] text-white shadow-sm font-semibold"
                  : "text-gray-600 hover:text-gray-900 hover:bg-white/60"
              }`}
            >
              {option.label}
              {typeof option.count === "number" && (
                <span
                  className={`ml-2 px-1.5 py-0.5 text-[11px] rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {option.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
