import React, { useMemo, useState, useEffect, useRef } from "react";
import { useLocation } from "react-router";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { Search, X, ShieldAlert } from "lucide-react";
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
      <section className="relative w-full overflow-hidden min-h-[38vh] max-h-[46vh] flex flex-col justify-end md:justify-center">
        {IMAGES.productsHero && (
          <img
            src={IMAGES.productsHero}
            alt="Pharmaceutical quality control and analytical testing laboratory"
            className="absolute inset-0 w-full h-full object-cover object-right md:object-center select-none"
            loading="eager"
            decoding="sync"
          />
        )}

        {/* Directional Corporate Authority Scrim: Deep Navy & Emerald with vibrant Cyan highlights */}
        <div
          className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0A192F]/98 via-[#0F382C]/92 to-[#0A192F]/55"
          aria-hidden="true"
        />

        {/* Subtle Scientific Molecular Mesh Texture */}
        <div
          className="absolute inset-0 bg-science-mesh-dark opacity-35 mix-blend-screen pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <div className="max-w-2xl text-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#A7F3D0] text-xs font-semibold mb-3.5 border border-emerald-400/25 shadow-xs">
              Formulations Catalogue
            </span>
            <h1 className="text-3xl sm:text-5xl font-editorial font-extrabold text-white tracking-tight leading-none drop-shadow-sm">
              Parenteral &amp; Clinical Portfolios
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-100/90 leading-relaxed max-w-xl font-normal">
              Specialized pharmaceutical preparations spanning intensive critical care injectables, trace element infusions, and therapeutic oral nutrition sachets.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CATALOGUE BODY CONTAINER ─────────────────────────── */}
      <div className="py-12 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Institutional Prescription Notice */}
          <div className="mb-8 p-4.5 rounded-2xl bg-white border border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#0A192F] shadow-[0_2px_12px_rgba(15,23,42,0.03)]">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0D9E71] shrink-0" />
              <span className="text-slate-700">
                <strong className="text-[#0A192F]">Institutional Notice:</strong> Exclusively for hospital procurement committees, registered stockists, and licensed pharmacies. Prescription only.
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-slate-500 text-[11px] font-bold uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full shrink-0">
              <ShieldAlert className="w-3.5 h-3.5 text-[#0D9E71]" />
              Schedule Drugs
            </span>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 pb-6 border-b border-slate-200/80">
            {/* Category Filter */}
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategoryChange}
              productCounts={productCounts}
            />

            {/* Search Input */}
            <div className="relative w-full md:w-80 shrink-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search active molecule..."
                className="w-full pl-11 pr-10 py-2.5 rounded-full bg-white border border-slate-200/90 text-xs text-[#0A192F] placeholder:text-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#0D9E71] focus:border-transparent shadow-[0_2px_10px_rgba(15,23,42,0.03)] transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer p-0.5"
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
