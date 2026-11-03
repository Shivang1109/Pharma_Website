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
    <div className="py-12 sm:py-16 bg-[#FAFCFB]">
      <Container>
        {/* Page Header */}
        <SectionHeading
          eyebrow="Pharmaceutical Portfolio"
          title="Focused Healthcare Formulations"
          description="ZILTON LIFE CARE PRIVATE LIMITED provides quality-assured formulations across Critical Care Injections, IV Antibiotics, Parenteral Nutrition, and Oral Nutrition Sachets."
          align="center"
        />

        {/* Regulatory & Institutional Notice Banner */}
        <div className="my-8 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/70 flex items-center gap-3 text-xs sm:text-sm text-amber-900">
          <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0" />
          <p>
            <strong>Institutional Notice:</strong> The information provided below is intended solely for registered medical practitioners, hospitals, and authorised channel distribution partners. ZILTON LIFE CARE does not sell directly to retail consumers online.
          </p>
        </div>

        {/* Live Search & Filter Bar */}
        <div className="mb-8 space-y-4">
          {/* Live Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by brand name or composition (e.g. Meropenem, Amino Acids)..."
              className="w-full pl-11 pr-10 py-3 text-sm bg-white border border-[#DCE8E0] rounded-2xl shadow-xs focus:outline-none focus:ring-2 focus:ring-[#087B59] focus:border-transparent transition-all placeholder:text-gray-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="p-1 rounded-full text-gray-400 hover:text-gray-600 absolute right-3 top-1/2 -translate-y-1/2"
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
          <div className="flex items-center justify-between text-xs text-gray-500 px-1 pt-1">
            <span>
              Showing <strong>{displayedProducts.length}</strong> of{" "}
              <strong>{getProducts().length}</strong> pharmaceutical formulations
            </span>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-[#087B59] font-medium hover:underline"
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
        <div className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#173B30] to-[#087B59] text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#E8F4EE] bg-white/10 px-3 py-1 rounded-full mb-3">
              <FileText className="w-3.5 h-3.5" />
              Institutional Supply &amp; Distribution
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Require batch details or distribution terms?
            </h3>
            <p className="mt-2 text-sm text-[#E8F4EE]/90">
              Reach out to our business development team for commercial availability, distributor terms, and product documentation.
            </p>
          </div>
          <div className="shrink-0">
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
              className="font-semibold shadow-md flex items-center gap-2"
            >
              Enquire About Products
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
