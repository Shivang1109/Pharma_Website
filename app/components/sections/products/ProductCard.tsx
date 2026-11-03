import React, { useState } from "react";
import { Link } from "react-router";
import type { Product } from "~/types/product";
import { PRODUCT_CATEGORIES } from "~/data/products";
import { Package, ShieldAlert, Pill, Eye, Send } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
}) => {
  const [imageError, setImageError] = useState(false);
  const categoryInfo = PRODUCT_CATEGORIES.find((c) => c.id === product.category);

  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-[#DCE8E0] shadow-sm hover:shadow-lg hover:border-[#087B59]/60 transition-all duration-300 overflow-hidden">
      {/* Visual / Image Container */}
      <div className="relative w-full h-52 bg-gradient-to-br from-[#E8F4EE]/60 to-gray-50 flex items-center justify-center p-6 border-b border-gray-100 overflow-hidden">
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
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 select-none"
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

        {/* Hover Quick View Overlay Button */}
        {onQuickView && (
          <div className="absolute inset-0 bg-[#173B30]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
            <button
              type="button"
              onClick={() => onQuickView(product)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-[#087B59] text-xs font-bold shadow-md hover:bg-[#E8F4EE] transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              Quick View
            </button>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Product Name */}
          <h3
            className="text-lg font-bold text-gray-900 group-hover:text-[#087B59] transition-colors leading-snug cursor-pointer"
            onClick={() => onQuickView && onQuickView(product)}
            style={{ fontFamily: "var(--font-heading)" }}
          >
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
          <p className="mt-3 text-xs sm:text-sm text-[#46534C] leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        {/* Card Actions Footer */}
        <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => onQuickView && onQuickView(product)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#087B59] hover:underline underline-offset-4"
          >
            <Eye className="w-3.5 h-3.5" />
            Details
          </button>

          <Link
            to={`/contact?product=${encodeURIComponent(product.name)}&type=product-related`}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#E8F4EE] hover:bg-[#087B59] text-[#087B59] hover:text-white text-xs font-semibold transition-colors duration-150"
            aria-label={`Enquire about ${product.name}`}
          >
            <Send className="w-3 h-3" />
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
};
