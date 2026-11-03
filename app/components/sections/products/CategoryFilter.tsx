import React, { useRef } from "react";
import type { ProductCategory } from "~/types/product";
import { PRODUCT_CATEGORIES } from "~/data/products";
import { ShieldCheck, Leaf, Package, Layers } from "lucide-react";

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categoryIcons: Record<string, React.ElementType> = {
    all: Layers,
    "critical-care-injection": ShieldCheck,
    "nutrition-iv": Leaf,
    "nutrition-sachet": Package,
  };

  const options = [
    { id: "all" as const, label: "All Formulations", count: productCounts["all"] },
    ...PRODUCT_CATEGORIES.map((cat) => ({
      id: cat.id,
      label: cat.name,
      count: productCounts[cat.id],
    })),
  ];

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % options.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + options.length) % options.length;
    } else {
      return;
    }
    e.preventDefault();
    onSelectCategory(options[nextIndex].id);
    const buttons = scrollContainerRef.current?.querySelectorAll<HTMLButtonElement>("button");
    buttons?.[nextIndex]?.focus();
  };

  return (
    <div className="w-full flex items-center justify-start sm:justify-center overflow-x-auto py-2 no-scrollbar">
      <div
        ref={scrollContainerRef}
        role="tablist"
        aria-label="Filter formulations by therapeutic category"
        className="inline-flex p-1.5 bg-[#F2F7F4] rounded-2xl border border-[#E4EBE6] gap-1.5 shadow-2xs"
      >
        {options.map((option, idx) => {
          const isActive = selectedCategory === option.id;
          const Icon = categoryIcons[option.id] || Layers;

          return (
            <button
              key={option.id}
              role="tab"
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onSelectCategory(option.id)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#07845E] focus:ring-offset-1 cursor-pointer ${
                isActive
                  ? "bg-[#123D32] text-white shadow-xs"
                  : "text-[#53635C] hover:text-[#123D32] hover:bg-white/80"
              }`}
            >
              <Icon
                className={`w-3.5 h-3.5 shrink-0 ${
                  isActive ? "text-[#DFF1E9]" : "text-[#07845E]"
                }`}
              />
              <span>{option.label}</span>
              {typeof option.count === "number" && (
                <span
                  className={`ml-1 px-2 py-0.5 text-[10px] font-bold rounded-full transition-colors ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-[#DFF1E9] text-[#123D32]"
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
