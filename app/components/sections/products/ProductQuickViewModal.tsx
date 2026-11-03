import React, { useEffect } from "react";
import type { Product } from "~/types/product";
import { PRODUCT_CATEGORIES } from "~/data/products";
import { Button } from "~/components/common/Button";
import {
  X,
  Pill,
  ShieldCheck,
  Package,
  Thermometer,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
}) => {
  // Close on Escape key press
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

  if (!product) return null;

  const categoryInfo = PRODUCT_CATEGORIES.find((c) => c.id === product.category);

  // Suggested pack presentation based on category
  const presentationText =
    product.category === "critical-care-injection"
      ? "Sterile Dry Powder / Liquid Injection with Sterile Water for Injection (WFI)"
      : product.category === "nutrition-iv"
      ? "Sterile Non-PVC / Glass IV Infusion Bottle (500 mL / 100 mL)"
      : "Multi-layer Barrier Foil Sachet Pack (Box of 10 / 20 Sachets)";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs transition-opacity duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-view-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#DCE8E0] overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-gray-100 bg-[#E8F4EE]/30">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#087B59] bg-white px-3 py-1 rounded-full border border-[#DCE8E0]">
              {categoryInfo?.name || product.category}
            </span>
            {product.subCategory && (
              <span className="text-xs font-medium text-gray-700 bg-white/80 px-2.5 py-1 rounded-full border border-gray-200">
                {product.subCategory}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors focus-visible:outline-[#087B59]"
            aria-label="Close product quick view"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Product Title & Visual */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-32 h-32 shrink-0 bg-gradient-to-br from-[#E8F4EE] to-gray-50 rounded-2xl border border-[#DCE8E0] flex items-center justify-center p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3
                id="quick-view-title"
                className="text-2xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {product.name}
              </h3>
              <p className="mt-2 text-sm text-[#087B59] font-semibold">
                {product.composition}
              </p>
              <p className="mt-3 text-sm text-[#46534C] leading-relaxed">
                {product.shortDescription}
              </p>
            </div>
          </div>

          {/* Clinical Specification Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {/* Active Composition Card */}
            <div className="p-4 rounded-2xl bg-[#E8F4EE]/40 border border-[#DCE8E0] flex items-start gap-3">
              <Pill className="w-5 h-5 text-[#087B59] shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 block">
                  Active Formulation
                </span>
                <span className="text-sm font-semibold text-gray-900 block mt-0.5">
                  {product.composition}
                </span>
              </div>
            </div>

            {/* Packaging Presentation */}
            <div className="p-4 rounded-2xl bg-[#E8F4EE]/40 border border-[#DCE8E0] flex items-start gap-3">
              <Package className="w-5 h-5 text-[#087B59] shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 block">
                  Packaging Form
                </span>
                <span className="text-sm font-medium text-gray-900 block mt-0.5">
                  {presentationText}
                </span>
              </div>
            </div>

            {/* Storage Guidelines */}
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 flex items-start gap-3">
              <Thermometer className="w-5 h-5 text-[#087B59] shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 block">
                  Storage Conditions
                </span>
                <span className="text-xs text-gray-700 block mt-0.5 leading-relaxed">
                  Store below 25°C. Protect from moisture &amp; direct light. Do not freeze.
                </span>
              </div>
            </div>

            {/* Quality Standard */}
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#087B59] shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 block">
                  Regulatory Grade
                </span>
                <span className="text-xs text-gray-700 block mt-0.5 leading-relaxed">
                  Manufactured at audited cGMP facility with Certificate of Analysis (CoA).
                </span>
              </div>
            </div>
          </div>

          {/* Legal / Institutional Prescription Disclaimer */}
          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p>
              <strong>Healthcare Professional Notice:</strong> For sale and use by licensed hospitals, healthcare institutions, and authorized pharmaceutical distributors only. Rx Only.
            </p>
          </div>
        </div>

        {/* Modal Footer / Direct Enquiry Link */}
        <div className="p-5 sm:p-6 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-gray-500 text-center sm:text-left">
            Need commercial pricing, CoA, or batch availability?
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className="flex-1 sm:flex-none justify-center"
            >
              Close
            </Button>
            <Button
              to={`/contact?product=${encodeURIComponent(product.name)}&type=product-related`}
              size="sm"
              className="flex-1 sm:flex-none justify-center flex items-center gap-1.5"
            >
              Enquire About {product.name}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
