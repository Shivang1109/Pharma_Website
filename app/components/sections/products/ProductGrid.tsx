import React from "react";
import type { Product, ProductCategory } from "~/types/product";
import { PRODUCT_CATEGORIES } from "~/data/products";
import { ProductCard } from "~/components/sections/products/ProductCard";
import { Info, PackageX } from "lucide-react";

interface ProductGridProps {
  products: Product[];
  selectedCategory: "all" | ProductCategory;
  onQuickView?: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  selectedCategory,
  onQuickView,
}) => {
  const currentCategoryInfo =
    selectedCategory !== "all"
      ? PRODUCT_CATEGORIES.find((c) => c.id === selectedCategory)
      : null;

  return (
    <div className="w-full">
      {/* Category Summary Header when filtered */}
      {currentCategoryInfo && (
        <div className="mb-8 p-5 rounded-2xl bg-[#E8F4EE]/60 border border-[#DCE8E0] flex items-start gap-4">
          <div className="p-2.5 bg-white rounded-xl text-[#087B59] shadow-xs shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-base">
              {currentCategoryInfo.name} Portfolio
            </h3>
            <p className="text-sm text-[#46534C] mt-1 leading-relaxed">
              {currentCategoryInfo.description}
            </p>
          </div>
        </div>
      )}

      {/* Product Cards Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
          <PackageX className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <h4 className="text-base font-semibold text-gray-800">
            No products available in this category currently
          </h4>
          <p className="text-sm text-gray-500 mt-1 max-w-md mx-auto">
            Formulation schedules and technical specifications are currently under
            regulatory review.
          </p>
        </div>
      )}
    </div>
  );
};
