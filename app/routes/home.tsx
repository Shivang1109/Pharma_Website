import React, { useState, useMemo } from "react";
import { Link } from "react-router";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Syringe, Droplets, Package, ExternalLink, Microscope, Thermometer, FileText } from "lucide-react";
import { PRODUCT_CATEGORIES, PRODUCTS } from "~/data/products";
import type { Product } from "~/types/product";
import { Magnetic } from "~/components/motion/Magnetic";
import { SplitLines } from "~/components/motion/SplitLines";
import { Marquee } from "~/components/motion/Marquee";
import { ImageSlot } from "~/components/ui/ImageSlot";
import { IMAGES } from "~/data/images";
import { generateRouteMeta } from "~/utils/seo";
import { ProductCard } from "~/components/sections/products/ProductCard";
import { ProductDrawer } from "~/components/sections/products/ProductDrawer";

// Watermelon UI Components
import { CardSplitAccordion, VERIFIED_QUALITY_PROCESS_STEPS } from "~/components/watermelon/card-split-accordian";
import { FluidTabs, PHARMA_DEFAULT_TABS } from "~/components/watermelon/fluid-tabs";
import { Cta3 } from "~/components/watermelon/cta-3";

export function meta() {
  return generateRouteMeta({
    title: "Zilton Life Care | Critical Care & Clinical Nutrition Formulations",
    description:
      "Zilton Life Care Private Limited has more than 20+ years experience in Critical Care, Parenteral and Clinical Nutrition formulation across India, supported by audited cGMP, WHO, US FDA approved partner manufacturing and disciplined distribution.",
    canonicalPath: "/",
  });
}

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeDrawerProduct, setActiveDrawerProduct] = useState<Product | null>(null);

  // Filtered formulation showcase for homepage
  const displayedProducts = useMemo(() => {
    if (selectedCategory === "all") {
      return PRODUCTS.slice(0, 6);
    }
    return PRODUCTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="w-full">
      {/* ─── 1. HERO SECTION (LUMINOUS CLINICAL LABORATORY AMBIENCE) ─── */}
      <section className="relative w-full overflow-hidden min-h-[78vh] max-h-[92vh] flex flex-col justify-end md:justify-center">
        {/* Background High-End Clinical Image with Enhanced Clarity */}
        {IMAGES.heroMain && (
          <img
            src={IMAGES.heroMain}
            alt="Pharmaceutical laboratory research environment"
            className="absolute inset-0 w-full h-full object-cover object-right md:object-center select-none scale-102 transition-transform duration-1000 ease-out brightness-105"
            loading="eager"
            decoding="sync"
          />
        )}

        {/* Directional Scrim: Solid readable base behind left typography, translucent on the right so laboratory daylight shines through */}
        <div
          className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0A192F]/96 via-[#0A192F]/82 md:to-[#0A192F]/35"
          aria-hidden="true"
        />

        {/* Subtle Bottom Fade to smoothly blend into Marquee */}
        <div
          className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A192F]/90 via-[#0A192F]/40 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Subtle Scientific Molecular Mesh Texture */}
        <div
          className="absolute inset-0 bg-science-mesh-dark opacity-35 mix-blend-screen pointer-events-none"
          aria-hidden="true"
        />

        {/* Luminous Ambient Gradient Glow Accents */}
        <div
          className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-[#0D9E71]/20 blur-3xl pointer-events-none animate-pulse-glow"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#06B6D4]/20 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-36">
          <div className="max-w-3xl text-left">
            {/* Sophisticated Eyebrow Label with Live Pulse */}
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#A7F3D0] text-xs font-semibold mb-6 border border-emerald-400/30 shadow-[0_2px_12px_rgba(6,182,212,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              <span>CRITICAL CARE &amp; CLINICAL NUTRITION · MUMBAI</span>
            </span>

            {/* Main Headline */}
            <h1 className="text-fluid-hero font-editorial font-extrabold text-white tracking-tight leading-[1.08] drop-shadow-sm">
              Better Healthcare.
              <span className="block text-[#A7F3D0]">Healthier Lives.</span>
            </h1>

            {/* Subtitle with Exact Client Requirement */}
            <p className="mt-6 text-base sm:text-lg text-slate-100/95 leading-relaxed max-w-2xl font-normal drop-shadow-xs">
              We have more than 20+ years experience in Critical Care, Parenteral and Clinical Nutrition formulation across India, supported by audited cGMP, WHO, US FDA approved partner manufacturing and disciplined distribution.
            </p>

            {/* Hero CTAs: "Explore Products" (no numbers) + Clean Translucent Frosted Glass */}
            <div className="mt-9 flex flex-wrap items-center gap-4 sm:gap-5">
              <Magnetic strength={0.25}>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#0D9E71] via-[#10B981] to-[#059669] hover:from-[#10B981] hover:to-[#047857] text-white text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-[0_8px_25px_rgba(13,158,113,0.45)] hover:shadow-[0_12px_32px_rgba(13,158,113,0.6)] hover:-translate-y-0.5"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Magnetic>

              <Magnetic strength={0.2}>
                <Link
                  to="/quality"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/12 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 text-xs uppercase tracking-wider font-bold transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                >
                  <span>Quality Framework</span>
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. MARQUEE STRIP ──────────────────────────────────── */}
      <div className="border-y border-slate-200/80 bg-white py-3 shadow-2xs">
        <Marquee
          items={[
            "Critical care injections",
            "Clinical nutrition IV",
            "Nutritional sachets",
            "Good distribution practice",
            "Institutional hospital supply",
            "cGMP, WHO & US FDA approved partner manufacturing",
          ]}
        />
      </div>

      {/* ─── 3. TARGETED THERAPEUTIC DIVISIONS (PREMIUM ASYMMETRIC BENTO GRID) ─── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-5 border-b border-slate-200 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D9E71] block mb-2">
              Portfolio Architecture
            </span>
            <h2 className="text-fluid-h2 font-editorial font-bold text-[#0A192F]">
              Targeted Therapeutic Divisions
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-sm font-normal">
            Formulations specifically engineered for intensive hospital protocols, emergency admissions, and clinical patient recovery.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Card 1: Featured Flagship Division (Critical Care Injections - Spans 7 cols on desktop) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#0A192F] via-[#0D2A22] to-[#0A192F] text-white border border-emerald-500/30 rounded-3xl p-7 sm:p-10 shadow-2xl relative overflow-hidden group flex flex-col justify-between">
            {/* Subtle Radiant Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0D9E71]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/20 text-[#A7F3D0] text-xs font-bold border border-emerald-400/30 shadow-xs">
                  <Syringe className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Flagship Hospital Portfolio</span>
                </span>
                <span className="text-xs font-semibold text-slate-300 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                  Parenteral Infusions &amp; Sterile Vials
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-editorial font-extrabold text-white group-hover:text-[#A7F3D0] transition-colors leading-tight mb-4">
                Critical Care Injections
              </h3>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light max-w-xl mb-6">
                Specialized intensive-care parenteral formulations covering broad-spectrum IV Carbapenems, Polypeptides, Echinocandin Antifungals, and High-Dose Elemental Haematinics formulated for ICU, emergency, and surgical admissions.
              </p>

              {/* Sub-therapeutic badges with clinical tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="text-xs font-medium text-slate-200 bg-white/10 px-3 py-1.5 rounded-xl border border-white/15">
                  Meropenem 1gm &amp; 500mg
                </span>
                <span className="text-xs font-medium text-slate-200 bg-white/10 px-3 py-1.5 rounded-xl border border-white/15">
                  Polymyxin B (5 &amp; 7.5 lac IU)
                </span>
                <span className="text-xs font-medium text-slate-200 bg-white/10 px-3 py-1.5 rounded-xl border border-white/15">
                  Piperacillin + Tazobactam 4.5gm
                </span>
                <span className="text-xs font-medium text-slate-200 bg-white/10 px-3 py-1.5 rounded-xl border border-white/15">
                  Ferric Carboxymaltose 500mg
                </span>
              </div>
            </div>

            {/* Elevated 3D Packshot Presentation Stage */}
            <div className="relative z-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <Link
                to="/products#critical-care-injection"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#10B981] group-hover:text-[#34D399] transition-colors"
              >
                <span>Explore Critical Care Formulations</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <span className="text-[11px] text-slate-400 font-medium">
                Schedule M / cGMP Verified
              </span>
            </div>

            {/* Large Elevated Background Packshot with Spotlight Effect */}
            <div className="absolute right-4 bottom-8 w-44 sm:w-56 opacity-25 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none drop-shadow-[0_20px_40px_rgba(13,158,113,0.4)]">
              <img
                src="/images/products/placeholder-injection.svg"
                alt="Critical Care Injections Packshot"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Column Bento Stack: Nutrition IV & Nutrition Sachets (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            {/* Card 2: Clinical Nutrition IV */}
            <div className="bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/20 border border-emerald-200/90 rounded-3xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_36px_-4px_rgba(13,158,113,0.16)] hover:-translate-y-1 transition-all duration-300 flex-1 flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold border border-teal-200/80">
                    <Droplets className="w-3.5 h-3.5 text-[#0D9488]" />
                    <span>Intravenous Infusion Therapy</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-editorial font-bold text-[#0A192F] group-hover:text-[#0D9E71] transition-colors leading-tight mb-2">
                  Nutrition IV Solutions
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                  Sterile parenteral nutrition preparations and essential trace element infusions designed for clinical parenteral therapy and patient replenishment.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="text-[11px] font-semibold text-teal-900 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-200/60">
                    Total Parenteral Nutrition (TPN) Additive
                  </span>
                  <span className="text-[11px] font-semibold text-teal-900 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-200/60">
                    Zinc Chloride 10mg / 10ml IV
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to="/products#nutrition-iv"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-[#0D9E71] group-hover:text-[#059669] transition-colors"
                >
                  <span>View Nutrition IV Range</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 3: Nutrition Sachets */}
            <div className="bg-gradient-to-br from-white via-cyan-50/25 to-slate-50 border border-cyan-200/80 rounded-3xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_36px_-4px_rgba(6,182,212,0.16)] hover:-translate-y-1 transition-all duration-300 flex-1 flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 text-xs font-bold border border-cyan-200/80">
                    <Package className="w-3.5 h-3.5 text-[#06B6D4]" />
                    <span>Dietary &amp; Metabolic Care</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-editorial font-bold text-[#0A192F] group-hover:text-[#0D9E71] transition-colors leading-tight mb-2">
                  Therapeutic Nutrition Sachets
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                  Advanced therapeutic nutrition sachets containing pharmaceutical-grade amino acids and metabolic nutrients for clinical and general dietary management.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="text-[11px] font-semibold text-cyan-900 bg-cyan-50 px-2.5 py-1 rounded-lg border border-cyan-200/60">
                    HMB ZIL 3gm (Muscle Synthesis)
                  </span>
                  <span className="text-[11px] font-semibold text-cyan-900 bg-cyan-50 px-2.5 py-1 rounded-lg border border-cyan-200/60">
                    Glutashape (L-Glutamine Formula)
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to="/products#nutrition-sachet"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-[#0D9E71] group-hover:text-[#059669] transition-colors"
                >
                  <span>View Sachet Formulations</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. INTERACTIVE FORMULATION SHOWCASE (WATERMELON FLUID-TABS) ─── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto border-t border-slate-200/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D9E71] block mb-2">
              Featured Formulations
            </span>
            <h2 className="text-fluid-h2 font-editorial font-bold text-[#0A192F]">
              Hospital Formulation Portfolio
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mt-2 font-normal leading-relaxed">
              Explore active molecules across intensive critical care and clinical nutrition. Select any card to review technical specifications or initiate supply inquiries.
            </p>
          </div>

          {/* Watermelon FluidTabs Component with Luminous Emerald Active Pill */}
          <div className="shrink-0">
            <FluidTabs
              tabs={PHARMA_DEFAULT_TABS}
              activeId={selectedCategory}
              onChange={setSelectedCategory}
            />
          </div>
        </div>

        {/* Product Grid with Elevated Architectural Packshots */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={setActiveDrawerProduct}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200/80 text-[#0A192F] text-xs uppercase tracking-wider font-bold transition-all"
          >
            <span>Explore Complete Product Catalogue</span>
            <ArrowRight className="w-4 h-4 text-[#0D9E71]" />
          </Link>
        </div>
      </section>

      {/* ─── 5. QUALITY ASSURANCE WITH WATERMELON CARD-SPLIT-ACCORDION & COMPANION DOSSIER ─── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto border-t border-slate-200/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Interactive Card-Split-Accordion */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D9E71] block mb-2">
              Operational Rigor &amp; Traceability
            </span>
            <h2 className="text-fluid-h2 font-editorial font-bold text-[#0A192F] leading-tight mb-3">
              Comprehensive Quality Verification Framework
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-8">
              Every parenteral injectable and clinical nutrition pack undergoes documented release testing from audited partner plants to hospital receiving docks.
            </p>

            {/* Watermelon CardSplitAccordion Component */}
            <CardSplitAccordion
              items={VERIFIED_QUALITY_PROCESS_STEPS}
              defaultOpenId={1}
            />
          </div>

          {/* Right Column: Certified Analytical Dossier Panel */}
          <div className="lg:col-span-5 space-y-5">
            {/* Cleanroom Terminal Packaging Image with Glassmorphism Certification Badge */}
            <div className="relative overflow-hidden rounded-3xl shadow-xl border border-slate-200/90 group">
              <ImageSlot
                slotKey="aboutPlant"
                ratio="4/3"
                caption="Cleanroom terminal packaging and batch inspection."
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
              />

              {/* Glassmorphic Verified Credential Badge Overlay */}
              <div className="absolute bottom-3 inset-x-3 p-3.5 rounded-2xl bg-[#0A192F]/85 backdrop-blur-md border border-white/15 text-white flex items-center justify-between gap-3 shadow-lg">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#0D9E71] text-white flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#A7F3D0] block">
                      Audited Partner Site
                    </span>
                    <span className="text-xs font-bold text-white block">
                      cGMP · WHO · US FDA Approved
                    </span>
                  </div>
                </div>

                <Link
                  to="/quality"
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-[#A7F3D0] hover:text-white transition-colors"
                  title="View Quality Charter"
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Verified Analytical Standards Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-2 text-[#0D9E71] mb-1">
                  <Microscope className="w-4 h-4" />
                  <span className="text-xs font-bold text-[#0A192F]">Active Assay</span>
                </div>
                <span className="text-base font-editorial font-bold text-[#0A192F] block">≥99.0% Purity</span>
                <span className="text-[11px] text-slate-500 font-medium">HPLC Analytical Standard</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-2 text-[#0D9E71] mb-1">
                  <Thermometer className="w-4 h-4" />
                  <span className="text-xs font-bold text-[#0A192F]">Cold Chain</span>
                </div>
                <span className="text-base font-editorial font-bold text-[#0A192F] block">2°C – 8°C Transit</span>
                <span className="text-[11px] text-slate-500 font-medium">Temperature Logged</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-2 text-[#0D9E71] mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-xs font-bold text-[#0A192F]">Sterility</span>
                </div>
                <span className="text-base font-editorial font-bold text-[#0A192F] block">ISO 5 Cleanroom</span>
                <span className="text-[11px] text-slate-500 font-medium">Aseptic Compounding</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-2 text-[#0D9E71] mb-1">
                  <FileText className="w-4 h-4" />
                  <span className="text-xs font-bold text-[#0A192F]">Traceability</span>
                </div>
                <span className="text-base font-editorial font-bold text-[#0A192F] block">100% CoA Archival</span>
                <span className="text-[11px] text-slate-500 font-medium">Batch Release Records</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. QUALITY ASSURANCE FULL-BLEED CREDENTIAL BAND ─── */}
      <section className="relative bg-gradient-to-r from-[#0A192F] via-[#0F382C] to-[#0A192F] text-white py-20 sm:py-28 my-8 sm:my-14 overflow-hidden select-none shadow-xl">
        <div className="absolute inset-0 bg-science-mesh-dark opacity-30 mix-blend-screen pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#A7F3D0] text-xs font-semibold mb-4 border border-emerald-400/20">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Rigorous Pharmaceutical Governance</span>
            </span>
            <h2 className="text-fluid-h2 font-editorial font-bold text-white tracking-tight leading-tight">
              Formulated for clinical requirements. Documented batch release protocols.
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-white/15">
            <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10">
              <span className="text-2xl sm:text-3xl font-extrabold font-editorial text-white block">
                cGMP · WHO · US FDA
              </span>
              <span className="text-xs text-[#10B981] font-bold block mt-1 uppercase tracking-wider">
                Partner Approved
              </span>
              <p className="text-xs text-slate-200 mt-2 leading-relaxed font-light">
                Audited partner manufacturing facilities.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10">
              <span className="text-3xl sm:text-4xl font-extrabold font-editorial text-white block">
                Documented
              </span>
              <span className="text-xs text-[#10B981] font-bold block mt-1 uppercase tracking-wider">
                CoA Availability
              </span>
              <p className="text-xs text-slate-200 mt-2 leading-relaxed font-light">
                Certificates of Analysis provided upon institutional request.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10">
              <span className="text-3xl sm:text-4xl font-extrabold font-editorial text-white block">
                2°–8°C
              </span>
              <span className="text-xs text-[#10B981] font-bold block mt-1 uppercase tracking-wider">
                Cold-Chain Controlled
              </span>
              <p className="text-xs text-slate-200 mt-2 leading-relaxed font-light">
                Temperature-monitored storage for sensitive injectable solutions.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10">
              <span className="text-3xl sm:text-4xl font-extrabold font-editorial text-white block">
                Traceable
              </span>
              <span className="text-xs text-[#10B981] font-bold block mt-1 uppercase tracking-wider">
                Batch Records
              </span>
              <p className="text-xs text-slate-200 mt-2 leading-relaxed font-light">
                Clear documentation from production to hospital pharmacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. INSTITUTIONAL SUPPLY CTA (WATERMELON CTA-3 INTEGRATION) ─── */}
      <Cta3
        badgeText="Institutional Supply &amp; Hospital Procurement"
        headline="Partner with Zilton Life Care for Hospital &amp; Institutional Supply."
        subtitle="Direct your commercial hospital inquiries, batch allocation schedules, or authorized distribution partnership proposals to our corporate supply desk in Mumbai."
        primaryCta={{ label: "Start an Institutional Enquiry", href: "/contact" }}
        whatsappMessage="Hello Zilton Life Care Team,\n\nI would like to inquire about institutional hospital supply schedules, product allocations, and pricing terms.\n\nThank you."
      />

      {/* ─── MODAL SPECIFICATIONS DRAWER ─── */}
      <ProductDrawer
        product={activeDrawerProduct}
        onClose={() => setActiveDrawerProduct(null)}
      />
    </div>
  );
}
