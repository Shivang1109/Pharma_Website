import React, { useMemo, useState, useEffect, useRef } from "react";
import { useLocation } from "react-router";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { Search, X, ShieldAlert, ArrowUpRight } from "lucide-react";
import { Container } from "~/components/common/Container";
import { CategoryFilter } from "~/components/sections/products/CategoryFilter";
import { ProductGrid } from "~/components/sections/products/ProductGrid";
import { ProductDrawer } from "~/components/sections/products/ProductDrawer";
import { getProducts, PRODUCT_CATEGORIES } from "~/data/products";
import type { Product, ProductCategory } from "~/types/product";
import { generateRouteMeta } from "~/utils/seo";

gsap.registerPlugin(Flip);

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
    <div className="py-12 sm:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Products Header */}
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#0B996F] font-semibold block mb-3">
            01 / Formulations Catalogue
          </span>
          <h1 className="text-fluid-hero font-editorial font-bold text-[#1F3D33] tracking-tight">
            Parenteral &amp; Clinical Portfolios
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#4A6056] font-light leading-relaxed">
            12 specialized pharmaceutical preparations spanning intensive critical care injectables, trace element infusions, and therapeutic oral nutrition sachets.
          </p>
        </div>

        {/* Refined Institutional Prescription Notice (Not a yellow alert box) */}
        <div className="mb-10 p-4 rounded-2xl bg-[#FCFAF5] border border-[#1F3D33]/15 flex items-center justify-between gap-4 text-xs font-mono text-[#1F3D33]">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#0B996F]" />
            <span>
              <strong>INSTITUTIONAL NOTICE:</strong> Strictly for hospital procurement committees, registered healthcare stockists, and licensed pharmacies. Rx Only.
            </span>
          </div>
          <span className="hidden sm:inline text-[#4A6056] text-[11px]">
            SCHEDULE PRESCRIPTION DRUGS
          </span>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mb-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 pb-6 border-b border-[#1F3D33]/10">
          {/* Category Filter */}
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryChange}
            productCounts={productCounts}
          />

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1F3D33]/50 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search active molecule..."
              className="w-full pl-10 pr-9 py-2.5 rounded-full bg-[#FCFAF5] border border-[#1F3D33]/15 text-xs font-mono text-[#1F3D33] placeholder:text-[#4A6056]/60 focus:outline-none focus:ring-1 focus:ring-[#0B996F]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4A6056] hover:text-[#1F3D33]"
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
  );
}
