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
        className="inline-flex p-1.5 bg-[#F2F7F4] rounded-2xl border border-[#E4EBE6] space-x-1"
      >
        {options.map((option) => {
          const isActive = selectedCategory === option.id;
          return (
            <button
              key={option.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectCategory(option.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-150 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#07845E] focus:ring-offset-1 ${
                isActive
                  ? "bg-[#123D32] text-white shadow-xs font-semibold"
                  : "text-[#53635C] hover:text-[#123D32] hover:bg-white"
              }`}
            >
              {option.label}
              {typeof option.count === "number" && (
                <span
                  className={`ml-2 px-1.5 py-0.5 text-[11px] rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-[#DFF1E9] text-[#123D32]"
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
