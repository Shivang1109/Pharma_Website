import React, { useMemo, useState, useEffect, useRef } from "react";
import { useLocation } from "react-router";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { Search, X } from "lucide-react";
import { CategoryFilter } from "~/components/sections/products/CategoryFilter";
import { ProductGrid } from "~/components/sections/products/ProductGrid";
import { ProductDrawer } from "~/components/sections/products/ProductDrawer";
import { getProducts, PRODUCT_CATEGORIES } from "~/data/products";
import { IMAGES } from "~/data/images";
import type { Product, ProductCategory } from "~/types/product";
import { generateRouteMeta } from "~/utils/seo";

gsap.registerPlugin(Flip);

export function meta() {
  return generateRouteMeta({
    title: "Pharmaceutical Products | Zilton Life Care",
    description:
      "Explore Zilton Life Care's portfolio in Critical Care Injections, IV Antibiotics, Nutrition IV solutions, and therapeutic Nutrition Sachets.",
    canonicalPath: "/products",
  });
}

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | ProductCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDrawerProduct, setActiveDrawerProduct] = useState<Product | null>(null);
  const location = useLocation();
  const gridContainerRef = useRef<HTMLDivElement>(null);

  // Sync with URL hash or search params
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

  // Filtered dataset
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

  // Product counts
  const productCounts = useMemo(() => {
    const all = getProducts().length;
    const counts: Record<string, number> = { all };
    PRODUCT_CATEGORIES.forEach((cat) => {
      counts[cat.id] = getProducts(cat.id).length;
    });
    return counts;
  }, []);

  const handleCategoryChange = (category: "all" | ProductCategory) => {
    if (gridContainerRef.current) {
      const state = Flip.getState(gridContainerRef.current.querySelectorAll("article"));
      setSelectedCategory(category);
      requestAnimationFrame(() => {
        if (gridContainerRef.current) {
          Flip.from(state, {
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.04,
          });
        }
      });
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <div className="w-full">
      {/* ─── FULL-WIDTH INNER-PAGE HERO BANNER (~42vh) ─────────── */}
      <section className="relative w-full overflow-hidden min-h-[36vh] max-h-[44vh] flex flex-col justify-end md:justify-center">
        {IMAGES.quality01 && (
          <img
            src={IMAGES.quality01}
            alt="Pharmaceutical laboratory analysis and formulation testing"
            className="absolute inset-0 w-full h-full object-cover object-right md:object-center select-none"
            loading="eager"
            decoding="sync"
          />
        )}

        {/* Directional Green Scrim */}
        <div
          className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#123D32]/95 via-[#165442]/85 to-transparent/30"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-2xl text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[#DCEEE4] text-xs font-medium mb-3 border border-white/10 shadow-xs">
              Formulations Catalogue
            </span>
            <h1 className="text-3xl sm:text-5xl font-editorial font-bold text-white tracking-tight leading-none">
              Parenteral &amp; Clinical Portfolios
            </h1>
            <p className="mt-3 text-sm sm:text-base text-white/90 leading-relaxed max-w-xl font-light">
              12 specialized pharmaceutical preparations spanning intensive critical care injectables, trace element infusions, and therapeutic oral nutrition sachets.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CATALOGUE BODY CONTAINER ─────────────────────────── */}
      <div className="py-10 sm:py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Institutional Prescription Notice */}
          <div className="mb-8 p-4 rounded-xl bg-[#FFFFFF] border border-[#1B634E]/15 flex items-center justify-between gap-4 text-xs text-[#1B634E] shadow-xs">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0D9E71]" />
              <span>
                <strong>Institutional Notice:</strong> Exclusively for hospital procurement committees, registered stockists, and licensed pharmacies. Prescription only.
              </span>
            </div>
            <span className="hidden sm:inline text-[#3E6958] text-[11px] font-medium">
              Schedule Drugs
            </span>
          </div>

        {/* Search & Category Filter Bar */}
        <div className="mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-[#1B634E]/10">
          {/* Category Filter */}
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryChange}
            productCounts={productCounts}
          />

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1B634E]/50 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search active molecule..."
              className="w-full pl-10 pr-9 py-2 rounded-full bg-[#FFFFFF] border border-[#1B634E]/15 text-xs text-[#1B634E] placeholder:text-[#3E6958]/60 focus:outline-none focus:ring-2 focus:ring-[#0D9E71]/30 shadow-2xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3E6958] hover:text-[#1B634E] cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Catalog Grid */}
        <div ref={gridContainerRef}>
          <ProductGrid
            products={displayedProducts}
            onSelectProduct={(p) => setActiveDrawerProduct(p)}
          />
        </div>

        {/* Technical Specs Drawer */}
        <ProductDrawer
          product={activeDrawerProduct}
          onClose={() => setActiveDrawerProduct(null)}
        />
      </div>
    </div>
  </div>
);
}
