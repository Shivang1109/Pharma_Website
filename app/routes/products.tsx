import { useMemo, useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Container } from "~/components/common/Container";
import { SectionHeading } from "~/components/common/SectionHeading";
import { Button } from "~/components/common/Button";
import { CategoryFilter } from "~/components/sections/products/CategoryFilter";
import { ProductGrid } from "~/components/sections/products/ProductGrid";
import { ProductQuickViewModal } from "~/components/sections/products/ProductQuickViewModal";
import { getProducts, PRODUCT_CATEGORIES } from "~/data/products";
import type { Product, ProductCategory } from "~/types/product";
import { ShieldCheck, FileText, ArrowRight, Search, X, Sparkles, Building2 } from "lucide-react";
import { generateRouteMeta } from "~/utils/seo";

export function meta() {
  return generateRouteMeta({
    title: "Pharmaceutical Product Catalogue",
    description:
      "Explore ZILTON LIFE CARE's portfolio in Critical Care Injections, IV Antibiotics, Nutrition IV solutions, and therapeutic Nutrition Sachets.",
    canonicalPath: "/products",
  });
}

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | ProductCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const location = useLocation();

  // Sync with URL hash or query params if coming from navigation links
  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace("#", "") as ProductCategory;
      if (PRODUCT_CATEGORIES.some((c) => c.id === hash)) {
        setSelectedCategory(hash);
      }
    } else if (location.search) {
      const params = new URLSearchParams(location.search);
      const cat = params.get("category") as ProductCategory;
      if (cat && PRODUCT_CATEGORIES.some((c) => c.id === cat)) {
        setSelectedCategory(cat);
      }
    }
  }, [location.hash, location.search]);

  // Multi-field search across product name, composition, subCategory, and category
  const displayedProducts = useMemo(() => {
    let list = getProducts(selectedCategory);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.composition.toLowerCase().includes(q) ||
          (p.subCategory && p.subCategory.toLowerCase().includes(q)) ||
          p.category.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
      );
    }
    return list;
  }, [selectedCategory, searchQuery]);

  // Dynamic product counts derived from verified dataset
  const productCounts = useMemo(() => {
    const all = getProducts().length;
    const counts: Record<string, number> = { all };
    PRODUCT_CATEGORIES.forEach((cat) => {
      counts[cat.id] = getProducts(cat.id).length;
    });
    return counts;
  }, []);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
  };

  return (
    <div className="py-12 sm:py-20 bg-[#FAFCFA]">
      <Container>
        {/* Products Hero Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-10 luxury-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#DFF1E9] border border-[#07845E]/20 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#123D32] mb-5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#07845E]" />
            <span>Prescription Pharmaceutical Portfolio</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#123D32] tracking-tight leading-[1.12]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Clinical Formulations &amp; Hospital Supply
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#53635C] leading-relaxed font-normal">
            Quality-assured pharmaceutical portfolio distributed strictly to registered healthcare institutions, hospital intensive care units, and licensed channel distribution partners across India.
          </p>

          {/* Key Portfolio Indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-[#123D32]">
            <span className="px-3.5 py-1.5 rounded-xl bg-white border border-[#E4EBE6] shadow-2xs flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#07845E]" />
              12 Formulations
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-white border border-[#E4EBE6] shadow-2xs flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#07845E]" />
              3 Clinical Divisions
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-white border border-[#E4EBE6] shadow-2xs flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#07845E]" />
              Audited cGMP Sourcing
            </span>
          </div>
        </div>

        {/* Regulatory & Institutional Notice Banner */}
        <div className="my-8 p-4 sm:p-5 rounded-2xl bg-[#DFF1E9]/50 border border-[#07845E]/20 flex items-center gap-3.5 text-xs sm:text-sm text-[#123D32] max-w-4xl mx-auto shadow-2xs">
          <ShieldCheck className="w-5 h-5 text-[#07845E] shrink-0" />
          <p className="leading-relaxed">
            <strong>Institutional Supply Notice:</strong> The formulations detailed below are intended strictly for licensed hospital procurement boards, registered clinicians, and authorized channel distribution partners. ZILTON LIFE CARE does not engage in direct-to-consumer retail sales.
          </p>
        </div>

        {/* Live Search & Filter Bar */}
        <div className="mb-10 space-y-5 max-w-4xl mx-auto">
          {/* Live Search Input */}
          <div className="max-w-lg mx-auto relative">
            <Search className="w-4 h-4 text-[#53635C] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by brand name or composition (e.g. Meropenem, Zinc, HMB)..."
              className="w-full pl-11 pr-10 py-3 text-sm bg-white border border-[#E4EBE6] rounded-2xl shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#07845E] focus:border-transparent transition-all placeholder:text-[#53635C]/60 text-[#123D32]"
              aria-label="Search pharmaceutical formulations"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="p-1 rounded-full text-[#53635C] hover:text-[#123D32] absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                aria-label="Clear search query"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Navigation */}
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            productCounts={productCounts}
          />

          {/* Active Search & Count Indicator */}
          <div className="flex items-center justify-between text-xs text-[#53635C] px-2 pt-1">
            <span>
              Displaying <strong>{displayedProducts.length}</strong> of{" "}
              <strong>{getProducts().length}</strong> verified formulations
            </span>
            {(searchQuery || selectedCategory !== "all") && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-[#07845E] font-bold hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid
          products={displayedProducts}
          selectedCategory={selectedCategory}
          onQuickView={(p) => setQuickViewProduct(p)}
          onResetFilters={handleResetFilters}
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
              Require batch availability or institutional pricing?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#DFF1E9]/85 font-light leading-relaxed">
              Reach out to our commercial liaison desk in Mumbai for availability schedules, hospital supply agreements, and comprehensive COA documentation.
            </p>
          </div>
          <div className="shrink-0">
            <Button
              to="/contact?type=product-related"
              variant="secondary"
              size="lg"
              className="font-semibold shadow-md flex items-center gap-2"
            >
              Initiate Commercial Enquiry
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
