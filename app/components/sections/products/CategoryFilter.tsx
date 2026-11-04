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
    { id: "all" as const, label: "All Formulations", count: productCounts["all"] ?? 12 },
    ...PRODUCT_CATEGORIES.map((cat) => ({
      id: cat.id,
      label: cat.name,
      count: productCounts[cat.id] ?? 0,
    })),
  ];

  return (
    <div className="w-full flex items-center justify-start sm:justify-center overflow-x-auto py-2 no-scrollbar">
      <div
        role="tablist"
        aria-label="Filter formulations by category"
        className="inline-flex p-1.5 rounded-full bg-[#FFFFFF] border border-[#1B634E]/15 gap-1.5 shadow-2xs"
      >
        {options.map((option) => {
          const isActive = selectedCategory === option.id;
          return (
            <button
              key={option.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectCategory(option.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                isActive
                  ? "bg-[#1B634E] text-[#FAFCFA] shadow-xs"
                  : "text-[#3E6958] hover:text-[#1B634E] hover:bg-[#1B634E]/5"
              }`}
            >
              <span>{option.label}</span>
              <span
                className={`text-[11px] px-1.5 py-0.5 rounded-full font-bold ${
                  isActive ? "bg-[#0D9E71] text-white" : "bg-[#1B634E]/10 text-[#1B634E]"
                }`}
              >
                {option.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
