import React from "react";
import { Link } from "react-router";
import { ArrowUpRight, FileSpreadsheet } from "lucide-react";
import type { Product } from "~/types/product";
import { ImageSlot } from "~/components/ui/ImageSlot";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  return (
    <article
      data-cursor="view"
      onClick={() => onSelect(product)}
      className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#FCFAF5] border border-[#1B634E]/15 hover:border-[#0D9E71]/50 transition-all duration-300 shadow-2xs hover:shadow-lg cursor-pointer select-none"
    >
      <div>
        {/* Top Meta Line: Division & Ref */}
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider mb-4">
          <span className="text-[#0D9E71] font-semibold bg-[#DCEEE4] px-2.5 py-0.5 rounded-full">
            {product.category.replace(/-/g, " ")}
          </span>
          <span className="text-[#1B634E]/50">
            {product.subCategory || "Rx Only"}
          </span>
        </div>

        {/* 4:5 ImageSlot with studio shimmer wireframe */}
        <div className="mb-5 overflow-hidden rounded-xl">
          <ImageSlot
            slotKey={`product.${product.id}`}
            ratio="4/5"
            className="w-full transition-transform duration-500 group-hover:scale-102"
          />
        </div>

        {/* Product Brand Name in Editorial Serif */}
        <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#1B634E] group-hover:text-[#0D9E71] transition-colors leading-tight">
          {product.name}
        </h3>

        {/* Composition in small mono text */}
        <p className="font-mono text-xs text-[#0D9E71] font-semibold mt-1">
          {product.composition}
        </p>

        {/* Brief Description */}
        <p className="text-xs sm:text-sm text-[#3E6958] font-light mt-3 line-clamp-2 leading-relaxed">
          {product.shortDescription}
        </p>
      </div>

      {/* Card Footer Actions */}
      <div className="mt-6 pt-4 border-t border-[#1B634E]/10 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(product);
          }}
          className="font-mono text-xs font-semibold text-[#1B634E] group-hover:text-[#0D9E71] transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <FileSpreadsheet className="w-3.5 h-3.5" />
          <span>Technical Specs</span>
        </button>

        <Link
          to={`/contact?product=${encodeURIComponent(product.name)}&type=product-related`}
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1 p-2 rounded-lg bg-[#DCEEE4] text-[#1B634E] hover:bg-[#1B634E] hover:text-[#F6F4EE] transition-colors font-mono text-[11px] font-bold"
          title="Direct Institutional Enquiry"
          aria-label={`Enquire regarding ${product.name}`}
        >
          <span>Enquire</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
};
