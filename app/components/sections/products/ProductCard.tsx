import React, { useState } from "react";
import { Link } from "react-router";
import type { Product } from "~/types/product";
import { PRODUCT_CATEGORIES } from "~/data/products";
import { Pill, Eye, Send, ShieldCheck, Leaf, Package } from "lucide-react";

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

  // Category specific indicator icon
  const CategoryIcon =
    product.category === "critical-care-injection"
      ? ShieldCheck
      : product.category === "nutrition-iv"
      ? Leaf
      : Package;

  return (
    <div className="luxury-card hover-lift group flex flex-col bg-white rounded-3xl border border-[#E4EBE6] hover:border-[#07845E]/50 transition-all duration-300 overflow-hidden h-full">
      {/* Visual / Image Container */}
      <div className="relative w-full h-48 bg-gradient-to-b from-[#F2F7F4] to-[#FAFCFA] flex flex-col items-center justify-center p-6 border-b border-[#E4EBE6] overflow-hidden">
        {imageError || !product.image ? (
          <div className="flex flex-col items-center justify-center text-center p-4">
            <div className="w-14 h-14 rounded-2xl bg-white border border-[#E4EBE6] shadow-2xs flex items-center justify-center mb-3 group-hover:scale-105 group-hover:border-[#07845E]/30 transition-all duration-300">
              <img
                src="/images/branding/logo-512.png"
                alt="Zilton Life Care Mark"
                className="w-10 h-10 object-contain opacity-85"
                loading="lazy"
              />
            </div>
            <span className="text-[11px] font-bold text-[#123D32] tracking-wide uppercase">
              Official Packshot Pending
            </span>
            <span className="text-[10px] text-[#53635C] mt-0.5">
              Verified Formulation Specifications
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
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-[#123D32] bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#E4EBE6] shadow-2xs">
            <CategoryIcon className="w-3 h-3 text-[#07845E]" />
            {categoryInfo?.name || product.category}
          </span>
        </div>

        {/* Sub-Category Badge */}
        {product.subCategory && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center text-[10px] font-semibold tracking-wide text-[#53635C] bg-[#F2F7F4]/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-[#E4EBE6]">
              {product.subCategory}
            </span>
          </div>
        )}

        {/* Hover Quick View Overlay Button */}
        {onQuickView && (
          <div className="absolute inset-0 bg-[#123D32]/35 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
            <button
              type="button"
              onClick={() => onQuickView(product)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-[#123D32] text-xs font-bold shadow-md hover:bg-[#DFF1E9] transition-colors cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-[#07845E]" />
              Quick View
            </button>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Product Name */}
          <h3
            className="text-lg sm:text-xl font-bold text-[#123D32] group-hover:text-[#07845E] transition-colors leading-snug cursor-pointer"
            onClick={() => onQuickView && onQuickView(product)}
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {product.name}
          </h3>

          {/* Composition Box */}
          <div className="mt-3 p-3 rounded-2xl bg-[#F2F7F4] border border-[#E4EBE6] flex items-start gap-2.5">
            <Pill className="w-4 h-4 text-[#07845E] shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-semibold text-[#53635C] block text-[10px] uppercase tracking-wider">
                Active Formulation
              </span>
              <span className="text-[#123D32] font-semibold leading-tight block mt-0.5">
                {product.composition}
              </span>
            </div>
          </div>

          {/* Short Description */}
          <p className="mt-3 text-xs sm:text-sm text-[#53635C] leading-relaxed line-clamp-2 font-normal">
            {product.shortDescription}
          </p>
        </div>

        {/* Card Actions Footer */}
        <div className="mt-6 pt-4 border-t border-[#E4EBE6] flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => onQuickView && onQuickView(product)}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#07845E] hover:text-[#123D32] transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            Technical Specs
          </button>

          <Link
            to={`/contact?product=${encodeURIComponent(product.name)}&type=product-related`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#DFF1E9] hover:bg-[#07845E] text-[#123D32] hover:text-white text-xs font-bold transition-colors duration-150 shadow-2xs"
            aria-label={`Enquire regarding ${product.name}`}
          >
            <Send className="w-3 h-3" />
            Institutional Enquiry
          </Link>
        </div>
      </div>
    </div>
  );
};
