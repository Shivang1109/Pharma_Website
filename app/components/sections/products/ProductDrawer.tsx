import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { X, ArrowRight, ShieldCheck, Pill, Package, Thermometer, FileText } from "lucide-react";
import type { Product } from "~/types/product";
import { PRODUCT_CATEGORIES } from "~/data/products";
import { ImageSlot } from "~/components/ui/ImageSlot";

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
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [product, onClose]);

  const categoryInfo = product ? PRODUCT_CATEGORIES.find((c) => c.id === product.category) : null;

  return (
    <AnimatePresence>
      {product && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1F3D33]/50 backdrop-blur-xs cursor-pointer"
          />

          {/* Sliding Right-Side Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg h-full bg-[#FCFAF5] border-l border-[#1F3D33]/15 shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-[#1F3D33]/10 flex items-center justify-between bg-[#F6F4EE]">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#0B996F] font-bold block">
                  {categoryInfo?.name || "Therapeutic Division"}
                </span>
                <span className="font-mono text-xs text-[#1F3D33]/60">
                  REF / {product.id.toUpperCase()}
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full text-[#4A6056] hover:text-[#1F3D33] hover:bg-[#1F3D33]/5 transition-colors cursor-pointer"
                aria-label="Close product drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Technical Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
              {/* Product Packshot Image Slot */}
              <div className="w-full">
                <ImageSlot
                  slotKey={`product.${product.id}`}
                  ratio="16/9"
                  caption="Calibrated clinical packaging presentation."
                />
              </div>

              {/* Title & Core Formulation */}
              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1F3D33] leading-tight">
                  {product.name}
                </h3>
                <p className="font-mono text-xs sm:text-sm font-semibold text-[#0B996F] mt-1.5">
                  {product.composition}
                </p>
                {product.subCategory && (
                  <span className="inline-block mt-2 font-mono text-[10px] uppercase tracking-wider text-[#4A6056] bg-[#DFEAE2] px-2.5 py-0.5 rounded-md">
                    {product.subCategory}
                  </span>
                )}
              </div>

              {/* Description / Therapeutic Intended Use */}
              <div className="pt-2">
                <h4 className="font-mono text-[11px] uppercase tracking-wider text-[#1F3D33] font-bold mb-1.5">
                  Therapeutic Scope
                </h4>
                <p className="text-sm text-[#4A6056] leading-relaxed font-light">
                  {product.shortDescription}
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-[#1F3D33]/10">
                  <div className="flex items-center gap-2 text-[#0B996F] mb-1">
                    <Pill className="w-4 h-4" />
                    <span className="font-mono text-[10px] uppercase font-bold text-[#1F3D33]">
                      Active Assay
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#4A6056] block">
                    {product.composition}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#1F3D33]/10">
                  <div className="flex items-center gap-2 text-[#0B996F] mb-1">
                    <Package className="w-4 h-4" />
                    <span className="font-mono text-[10px] uppercase font-bold text-[#1F3D33]">
                      Presentation
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#4A6056] block">
                    Sterile Hospital Pack
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#1F3D33]/10">
                  <div className="flex items-center gap-2 text-[#0B996F] mb-1">
                    <Thermometer className="w-4 h-4" />
                    <span className="font-mono text-[10px] uppercase font-bold text-[#1F3D33]">
                      Thermal Control
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#4A6056] block">
                    Per package insert
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#1F3D33]/10">
                  <div className="flex items-center gap-2 text-[#0B996F] mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="font-mono text-[10px] uppercase font-bold text-[#1F3D33]">
                      Assurance
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#4A6056] block">
                    CoA batch verified
                  </span>
                </div>
              </div>

              {/* Institutional Notice */}
              <div className="p-4 rounded-xl bg-[#DFEAE2]/60 border border-[#0B996F]/20 text-xs text-[#1F3D33]">
                <strong>Rx Institutional Drug:</strong> Formulations are supplied exclusively to licensed hospital pharmacies, healthcare institutions, and authorized pharmaceutical distribution networks.
              </div>
            </div>

            {/* Drawer Footer CTA */}
            <div className="p-6 border-t border-[#1F3D33]/10 bg-[#F6F4EE] flex items-center justify-between gap-4">
              <span className="font-mono text-[11px] text-[#4A6056]">
                Batch availability on request
              </span>
              <Link
                to={`/contact?product=${encodeURIComponent(product.name)}&type=product-related`}
                onClick={onClose}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1F3D33] hover:bg-[#0B996F] text-[#F6F4EE] font-mono text-xs uppercase tracking-wider font-semibold transition-colors duration-200 shadow-md"
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
