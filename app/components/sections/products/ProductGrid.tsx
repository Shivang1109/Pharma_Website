import React from "react";
import type { Product, ProductCategory } from "~/types/product";
import { PRODUCT_CATEGORIES } from "~/data/products";
import { ProductCard } from "~/components/sections/products/ProductCard";
import { Info, PackageSearch, RotateCcw } from "lucide-react";

interface ProductGridProps {
  products: Product[];
  selectedCategory: "all" | ProductCategory;
  onQuickView?: (product: Product) => void;
  onResetFilters?: () => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  selectedCategory,
  onQuickView,
  onResetFilters,
}) => {
  const currentCategoryInfo =
    selectedCategory !== "all"
      ? PRODUCT_CATEGORIES.find((c) => c.id === selectedCategory)
      : null;

  return (
    <div className="w-full">
      {/* Category Summary Header when filtered */}
      {currentCategoryInfo && (
        <div className="mb-8 p-6 rounded-3xl bg-[#DFF1E9]/50 border border-[#07845E]/20 flex items-start gap-4">
          <div className="p-3 bg-white rounded-2xl text-[#07845E] shadow-2xs shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h3
              className="font-bold text-[#123D32] text-base sm:text-lg"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {currentCategoryInfo.name} Division
            </h3>
            <p className="text-sm text-[#53635C] mt-1 leading-relaxed">
              {currentCategoryInfo.description}
            </p>
          </div>
        </div>
      )}

      {/* Product Cards Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 stagger-container">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      ) : (
        /* Refined Empty State */
        <div className="text-center py-20 px-6 bg-white rounded-3xl border border-dashed border-[#E4EBE6] shadow-xs max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-3xl bg-[#F2F7F4] border border-[#E4EBE6] flex items-center justify-center mx-auto mb-4 text-[#07845E]">
            <PackageSearch className="w-8 h-8 stroke-[1.5]" />
          </div>
          <h4
            className="text-lg font-bold text-[#123D32]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            No Formulations Found
          </h4>
          <p className="text-sm text-[#53635C] mt-2 max-w-md mx-auto leading-relaxed">
            No pharmaceutical formulations match your selected search criteria or category filter. Try clearing your search keyword or switching categories.
          </p>
          {onResetFilters && (
            <div className="mt-6">
              <button
                type="button"
                onClick={onResetFilters}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#123D32] hover:bg-[#07845E] text-white text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset Search &amp; View All Formulations
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
