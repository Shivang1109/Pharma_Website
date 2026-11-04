import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { X, ArrowRight, ShieldCheck, Pill, Package, Thermometer, FileText, MessageSquare } from "lucide-react";
import type { Product } from "~/types/product";
import { PRODUCT_CATEGORIES } from "~/data/products";
import { ImageSlot } from "~/components/ui/ImageSlot";
import { getWhatsAppLink } from "~/utils/whatsapp";

interface ProductDrawerProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDrawer: React.FC<ProductDrawerProps> = ({ product, onClose }) => {
  // Lock body scroll and handle Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (product) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      if (typeof window !== "undefined" && (window as any).__lenis) {
        (window as any).__lenis.stop();
      }
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
      if (typeof window !== "undefined" && (window as any).__lenis) {
        (window as any).__lenis.start();
      }
    };
  }, [product, onClose]);

  const categoryInfo = product ? PRODUCT_CATEGORIES.find((c) => c.id === product.category) : null;

  return (
    <AnimatePresence>
      {product && (
        <div
          data-lenis-prevent="true"
          className="fixed inset-0 z-50 flex justify-end"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            onWheel={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            data-lenis-prevent="true"
            className="fixed inset-0 bg-[#1B634E]/40 backdrop-blur-xs cursor-pointer"
          />

          {/* Sliding Right-Side Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-lg h-full bg-[#FFFFFF] border-l border-[#1B634E]/15 shadow-2xl flex flex-col justify-between overflow-hidden overscroll-contain"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-[#1B634E]/10 flex items-center justify-between bg-[#F3F6F4] shrink-0">
              <div>
                <span className="text-xs font-semibold text-[#0D9E71] block">
                  {categoryInfo?.name || "Therapeutic Division"}
                </span>
                <span className="text-xs text-[#3E6958]">
                  Product Code: {product.id.toUpperCase()}
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full text-[#3E6958] hover:text-[#1B634E] hover:bg-[#1B634E]/5 transition-colors cursor-pointer"
                aria-label="Close product drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Technical Content */}
            <div
              data-lenis-prevent="true"
              onWheel={(e) => e.stopPropagation()}
              className="p-6 sm:p-8 overflow-y-auto overscroll-contain space-y-6 flex-1 touch-pan-y"
            >
              {/* Product Packshot Image Slot */}
              <div className="w-full">
                <ImageSlot
                  src={product.image || undefined}
                  slotKey={`product.${product.id}`}
                  ratio="16/9"
                  caption="Calibrated clinical packaging presentation."
                />
              </div>

              {/* Title & Core Formulation */}
              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1B634E] leading-tight">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#0D9E71] mt-1.5">
                  {product.composition}
                </p>
                {product.subCategory && (
                  <span className="inline-block mt-2 text-xs font-medium text-[#3E6958] bg-[#DCEEE4] px-2.5 py-0.5 rounded-md">
                    {product.subCategory}
                  </span>
                )}
              </div>

              {/* Description / Therapeutic Intended Use */}
              <div className="pt-2">
                <h4 className="text-xs uppercase tracking-wider text-[#1B634E] font-bold mb-1.5">
                  Therapeutic Scope
                </h4>
                <p className="text-sm text-[#3E6958] leading-relaxed font-light">
                  {product.shortDescription}
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#FAFCFA] border border-[#1B634E]/10">
                  <div className="flex items-center gap-2 text-[#0D9E71] mb-1">
                    <Pill className="w-4 h-4" />
                    <span className="text-xs font-semibold text-[#1B634E]">
                      Active Assay
                    </span>
                  </div>
                  <span className="text-xs text-[#3E6958] block">
                    {product.composition}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAFCFA] border border-[#1B634E]/10">
                  <div className="flex items-center gap-2 text-[#0D9E71] mb-1">
                    <Package className="w-4 h-4" />
                    <span className="text-xs font-semibold text-[#1B634E]">
                      Presentation
                    </span>
                  </div>
                  <span className="text-xs text-[#3E6958] block">
                    Sterile Hospital Pack
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAFCFA] border border-[#1B634E]/10">
                  <div className="flex items-center gap-2 text-[#0D9E71] mb-1">
                    <Thermometer className="w-4 h-4" />
                    <span className="text-xs font-semibold text-[#1B634E]">
                      Thermal Control
                    </span>
                  </div>
                  <span className="text-xs text-[#3E6958] block">
                    Per package insert
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAFCFA] border border-[#1B634E]/10">
                  <div className="flex items-center gap-2 text-[#0D9E71] mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-xs font-semibold text-[#1B634E]">
                      Assurance
                    </span>
                  </div>
                  <span className="text-xs text-[#3E6958] block">
                    CoA batch verified
                  </span>
                </div>
              </div>

              {/* Institutional Notice */}
              <div className="p-4 rounded-xl bg-[#DCEEE4]/60 border border-[#0D9E71]/20 text-xs text-[#1B634E]">
                <strong>Rx Institutional Drug:</strong> Formulations are supplied exclusively to licensed hospital pharmacies, healthcare institutions, and authorized pharmaceutical distribution networks.
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-6 border-t border-[#1B634E]/10 bg-[#F3F6F4] flex flex-wrap items-center justify-between gap-3 shrink-0">
              <a
                href={getWhatsAppLink(`Hello Zilton Life Care Team,\n\nI am interested in your formulation: ${product.name} (${product.composition}).\n\nPlease share its institutional availability and commercial pricing terms.\n\nThank you.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white text-xs uppercase tracking-wider font-semibold transition-colors duration-200 shadow-sm"
                title="Enquire on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <Link
                to={`/contact?product=${encodeURIComponent(product.name)}&type=product-related`}
                onClick={onClose}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1B634E] hover:bg-[#0D9E71] text-[#FAFCFA] text-xs uppercase tracking-wider font-semibold transition-colors duration-200 shadow-md"
              >
                <span>Institutional Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

