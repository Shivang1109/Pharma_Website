import { useMemo, useState } from "react";
import { Container } from "~/components/common/Container";
import { SectionHeading } from "~/components/common/SectionHeading";
import { Button } from "~/components/common/Button";
import { CategoryFilter } from "~/components/sections/products/CategoryFilter";
import { ProductGrid } from "~/components/sections/products/ProductGrid";
import { ProductQuickViewModal } from "~/components/sections/products/ProductQuickViewModal";
import { getProducts, PRODUCT_CATEGORIES } from "~/data/products";
import type { Product, ProductCategory } from "~/types/product";
import { ShieldCheck, FileText, ArrowRight, Search, X } from "lucide-react";

export function meta() {
  return [
    { title: "Product Catalogue | ZILTON LIFE CARE PRIVATE LIMITED" },
    {
      name: "description",
      content:
        "Explore ZILTON LIFE CARE's portfolio in Critical Care Injections, IV Antibiotics, Nutrition IV solutions, and therapeutic Nutrition Sachets.",
    },
  ];
}

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | ProductCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Filter products by category and active search query
  const displayedProducts = useMemo(() => {
    let list = getProducts(selectedCategory);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.composition.toLowerCase().includes(q) ||
          (p.subCategory && p.subCategory.toLowerCase().includes(q)) ||
          p.shortDescription.toLowerCase().includes(q)
      );
    }
    return list;
  }, [selectedCategory, searchQuery]);

  const productCounts = useMemo(() => {
    const all = getProducts().length;
    const counts: Record<string, number> = { all };
    PRODUCT_CATEGORIES.forEach((cat) => {
      counts[cat.id] = getProducts(cat.id).length;
    });
    return counts;
  }, []);

  return (
    <div className="py-12 sm:py-20 bg-[#FAFCFA]">
      <Container>
        {/* Page Header */}
        <SectionHeading
          eyebrow="Pharmaceutical Portfolio"
          title="Focused Healthcare Formulations"
          description="ZILTON LIFE CARE PRIVATE LIMITED provides quality-assured formulations across Critical Care Injections, IV Antibiotics, Parenteral Nutrition, and Oral Nutrition Sachets."
          align="center"
          className="mb-8"
        />

        {/* Regulatory & Institutional Notice Banner */}
        <div className="my-8 p-4 sm:p-5 rounded-2xl bg-[#DFF1E9]/50 border border-[#07845E]/20 flex items-center gap-3 text-xs sm:text-sm text-[#123D32]">
          <ShieldCheck className="w-5 h-5 text-[#07845E] shrink-0" />
          <p>
            <strong>Institutional Notice:</strong> The information provided below is intended solely for registered medical practitioners, hospitals, and authorised channel distribution partners. ZILTON LIFE CARE does not sell directly to retail consumers online.
          </p>
        </div>

        {/* Live Search & Filter Bar */}
        <div className="mb-10 space-y-5">
          {/* Live Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#53635C] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by brand name or composition (e.g. Meropenem, Amino Acids)..."
              className="w-full pl-11 pr-10 py-3 text-sm bg-white border border-[#E4EBE6] rounded-2xl shadow-xs focus:outline-none focus:ring-2 focus:ring-[#07845E] focus:border-transparent transition-all placeholder:text-[#53635C]/60 text-[#123D32]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="p-1 rounded-full text-[#53635C] hover:text-[#123D32] absolute right-3 top-1/2 -translate-y-1/2"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            productCounts={productCounts}
          />

          {/* Active Search & Count Indicator */}
          <div className="flex items-center justify-between text-xs text-[#53635C] px-1 pt-1">
            <span>
              Showing <strong>{displayedProducts.length}</strong> of{" "}
              <strong>{getProducts().length}</strong> pharmaceutical formulations
            </span>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-[#07845E] font-medium hover:underline"
              >
                Reset search
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid
          products={displayedProducts}
          selectedCategory={selectedCategory}
          onQuickView={(p) => setQuickViewProduct(p)}
        />

        {/* Quick View Modal */}
        <ProductQuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />

        {/* Partnership / Product Enquiry CTA */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#123D32] to-[#07845E] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#DFF1E9] bg-white/10 px-3.5 py-1 rounded-full mb-3">
              <FileText className="w-3.5 h-3.5" />
              Institutional Supply &amp; Distribution
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Require batch details or distribution terms?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#DFF1E9]/85 font-light leading-relaxed">
              Reach out to our commercial liaison desk in Mumbai for availability schedules, hospital supply agreements, and comprehensive COA documentation.
            </p>
          </div>
          <div className="shrink-0">
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
              className="font-semibold shadow-md flex items-center gap-2"
            >
              Enquire About Formulations
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
