import React, { useState } from "react";
import type { Product } from "~/types/product";
import { PRODUCT_CATEGORIES } from "~/data/products";
import { Package, ShieldAlert, Pill } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [imageError, setImageError] = useState(false);
  const categoryInfo = PRODUCT_CATEGORIES.find((c) => c.id === product.category);

  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-[#DCE8E0] shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
      {/* Visual / Image Container */}
      <div className="relative w-full h-48 bg-gradient-to-br from-[#E8F4EE]/60 to-gray-50 flex items-center justify-center p-6 border-b border-gray-100 overflow-hidden">
        {imageError || !product.image ? (
          <div className="flex flex-col items-center justify-center text-center p-4 text-[#087B59]">
            <Package className="w-14 h-14 stroke-[1.25] text-[#087B59]/70 group-hover:scale-105 transition-transform duration-300" />
            <span className="text-xs text-gray-500 mt-2 font-medium">
              Packshot Pending Client Release
            </span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImageError(true)}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        )}

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center text-[11px] font-semibold tracking-wide text-[#087B59] bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#DCE8E0] shadow-xs">
            {categoryInfo?.name || product.category}
          </span>
        </div>

        {/* Sub-Category Badge */}
        {product.subCategory && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center text-[10px] font-semibold tracking-wide text-gray-700 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full border border-gray-200">
              {product.subCategory}
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Product Name */}
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#087B59] transition-colors leading-snug">
            {product.name}
          </h3>

          {/* Composition Box */}
          <div className="mt-2.5 p-2.5 rounded-xl bg-[#E8F4EE]/50 border border-[#DCE8E0]/80 flex items-start gap-2">
            <Pill className="w-4 h-4 text-[#087B59] shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-semibold text-gray-700 block text-[10px] uppercase tracking-wider">
                Composition
              </span>
              <span className="text-[#173B30] font-medium leading-tight">
                {product.composition}
              </span>
            </div>
          </div>

          {/* Short Description */}
          <p className="mt-3 text-xs sm:text-sm text-[#46534C] leading-relaxed line-clamp-3">
            {product.shortDescription}
          </p>
        </div>

        {/* Footer info: Institutional/Trade notice */}
        <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span className="inline-flex items-center gap-1 text-gray-400 text-[11px]">
            <ShieldAlert className="w-3.5 h-3.5" />
            Hospital & Institutional Supply
          </span>
        </div>
      </div>
    </div>
  );
};
