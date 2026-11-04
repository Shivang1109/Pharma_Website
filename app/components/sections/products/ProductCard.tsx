import React from "react";
import { Link } from "react-router";
import { ArrowUpRight, FileSpreadsheet } from "lucide-react";
import type { Product } from "~/types/product";
import { ImageSlot } from "~/components/ui/ImageSlot";
import { getWhatsAppLink } from "~/utils/whatsapp";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const waMessage = `Hello Zilton Life Care Team,\n\nI am interested in your product: ${product.name}.\n\nPlease share its details, pricing information, availability, and ordering process.\n\nThank you.`;

  return (
    <article
      data-cursor="view"
      onClick={() => onSelect(product)}
      className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#FFFFFF] border border-[#1B634E]/15 hover:border-[#0D9E71]/50 transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer select-none"
    >
      <div>
        {/* Top Meta Line: Division & Ref */}
        <div className="flex items-center justify-between text-xs mb-3">
          <span className="text-[#0D9E71] font-semibold bg-[#DCEEE4] px-2.5 py-0.5 rounded-full capitalize">
            {product.category.replace(/-/g, " ")}
          </span>
          <span className="text-[#3E6958] text-[11px] font-medium">
            {product.subCategory || "Rx Only"}
          </span>
        </div>

        {/* 4:3 ImageSlot */}
        <div className="mb-4 overflow-hidden rounded-xl">
          <ImageSlot
            src={product.image || undefined}
            slotKey={`product.${product.id}`}
            ratio="4/3"
            className="w-full transition-transform duration-500 group-hover:scale-102"
          />
        </div>

        {/* Product Brand Name in Editorial Serif */}
        <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#1B634E] group-hover:text-[#0D9E71] transition-colors leading-tight">
          {product.name}
        </h3>

        {/* Composition in clean sans text */}
        <p className="text-xs text-[#0D9E71] font-semibold mt-1">
          {product.composition}
        </p>

        {/* Brief Description */}
        <p className="text-xs sm:text-sm text-[#3E6958] font-light mt-2.5 line-clamp-2 leading-relaxed">
          {product.shortDescription}
        </p>
      </div>

      {/* Card Footer Actions */}
      <div className="mt-5 pt-4 border-t border-[#1B634E]/10 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(product);
          }}
          className="text-xs font-semibold text-[#1B634E] group-hover:text-[#0D9E71] transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <FileSpreadsheet className="w-3.5 h-3.5" />
          <span>Technical specs</span>
        </button>

        {/* WhatsApp product enquiry button */}
        <a
          href={getWhatsAppLink(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#DCEEE4] text-[#1B634E] hover:bg-[#25D366] hover:text-white transition-colors text-xs font-semibold"
          title="Enquire on WhatsApp"
          aria-label={`Enquire on WhatsApp about ${product.name}`}
        >
          <svg viewBox="0 0 32 32" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M16 2C8.268 2 2 8.268 2 16c0 2.44.655 4.726 1.797 6.69L2 30l7.52-1.773A13.934 13.934 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm6.3 18.909c-.345-.173-2.045-1.009-2.362-1.124-.317-.115-.547-.173-.778.173-.23.345-.893 1.124-1.095 1.354-.202.23-.403.258-.748.086-.345-.173-1.456-.537-2.773-1.71-1.025-.914-1.717-2.044-1.918-2.389-.202-.345-.022-.531.151-.703.155-.155.345-.404.518-.605.172-.202.23-.345.345-.576.115-.23.057-.432-.029-.605-.086-.173-.778-1.874-1.066-2.566-.28-.673-.565-.582-.778-.593l-.663-.012c-.23 0-.605.086-.922.432s-1.209 1.181-1.209 2.882c0 1.7 1.238 3.344 1.411 3.574.173.23 2.437 3.72 5.902 5.216.825.356 1.468.569 1.97.728.828.263 1.582.226 2.178.137.664-.1 2.045-.836 2.333-1.643.288-.807.288-1.499.202-1.643-.086-.144-.317-.23-.662-.403z" />
          </svg>
          <span>WhatsApp</span>
        </a>
      </div>
    </article>
  );
};
