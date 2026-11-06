/**
 * ZILTON LIFE CARE — PREMIUM HOMEPAGE REDESIGN
 * 
 * DESIGN DIRECTION: Hybrid Editorial + Layered Pharmaceutical Imagery
 * PHILOSOPHY: Scientific precision, pharmaceutical credibility, editorial sophistication
 * 
 * SECTIONS:
 * 1. Cinematic Editorial Hero with Layered Imagery
 * 2. Company Introduction & Trust Indicators
 * 3. Therapeutic Divisions (Asymmetric Bento Grid)
 * 4. Featured Products with Interactive Gallery
 * 5. Quality Assurance Storytelling
 * 6. Manufacturing & Distribution Capabilities
 * 7. Institutional Partnership CTA
 */

import React, { useState, useMemo } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Syringe,
  Droplets,
  Package,
  ExternalLink,
  Microscope,
  Thermometer,
  FileText,
  Award,
  Building2,
  TrendingUp,
  Users,
  Globe2,
  Zap,
} from "lucide-react";
import { PRODUCT_CATEGORIES, PRODUCTS } from "~/data/products";
import type { Product } from "~/types/product";
import { Magnetic } from "~/components/motion/Magnetic";
import { SplitLines } from "~/components/motion/SplitLines";
import { Marquee } from "~/components/motion/Marquee";
import { Reveal } from "~/components/motion/Reveal";
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

  const displayedProducts = useMemo(() => {
    if (selectedCategory === "all") {
      return PRODUCTS.slice(0, 6);
    }
    return PRODUCTS.filter((p) => p.category === selectedCategory).slice(0, 6);
  }, [selectedCategory]);

  return (
    <div className="w-full bg-[#F8FAFC]">
      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* 1. CINEMATIC EDITORIAL HERO — LAYERED PHARMACEUTICAL IMAGERY */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0A192F] via-[#0D2D27] to-[#0A192F]">
        {/* Premium Pharmaceutical Laboratory Background */}
        {IMAGES.heroMain && (
          <div className="absolute inset-0">
            <img
              src={IMAGES.heroMain}
              alt="Pharmaceutical research laboratory"
              className="w-full h-full object-cover object-center opacity-30 scale-105 mix-blend-luminosity"
              loading="eager"
              decoding="sync"
            />
          </div>
        )}

        {/* Sophisticated gradient overlays for text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0A192F]/95 via-[#0F382C]/85 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(13,158,113,0.2),transparent_60%)]"
          aria-hidden="true"
        />

        {/* Scientific mesh pattern */}
        <div
          className="absolute inset-0 bg-science-mesh-dark opacity-20 mix-blend-screen"
          aria-hidden="true"
        />

        {/* Hero Content Container */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Editorial Typography & CTAs */}
            <div className="lg:col-span-7">
              {/* Premium eyebrow badge */}
              <Reveal delay={0.1}>
                <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-[#A7F3D0] text-xs font-bold mb-6 border border-emerald-400/30 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                  <span className="uppercase tracking-wider">Critical Care & Clinical Nutrition · Mumbai</span>
                </span>
              </Reveal>

              {/* Cinematic Headline */}
              <Reveal delay={0.2}>
                <h1 className="font-editorial font-bold text-white leading-[1.08] tracking-tight mb-6">
                  <span className="block text-[clamp(2.75rem,6vw,5.5rem)] drop-shadow-[0_2px_24px_rgba(0,0,0,0.6)]">
                    Better Healthcare.
                  </span>
                  <span className="block text-[clamp(2.75rem,6vw,5.5rem)] text-transparent bg-clip-text bg-gradient-to-r from-[#A7F3D0] via-[#34D399] to-[#10B981] drop-shadow-[0_2px_24px_rgba(16,185,129,0.4)]">
                    Healthier Lives.
                  </span>
                </h1>
              </Reveal>

              {/* Refined subtitle */}
              <Reveal delay={0.4}>
                <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed max-w-2xl font-light mb-10">
                  We have more than{" "}
                  <strong className="font-semibold text-white">20+ years experience</strong> in
                  Critical Care, Parenteral and Clinical Nutrition formulation across India,
                  supported by audited cGMP, WHO, US FDA approved partner manufacturing and
                  disciplined distribution.
                </p>
              </Reveal>

              {/* Premium CTA group */}
              <Reveal delay={0.6}>
                <div className="flex flex-wrap items-center gap-4">
                  <Magnetic strength={0.3}>
                    <Link
                      to="/products"
                      className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#0D9E71] via-[#10B981] to-[#059669] hover:from-[#10B981] hover:to-[#047857] text-white text-sm uppercase tracking-wider font-bold transition-all duration-300 shadow-[0_12px_32px_rgba(13,158,113,0.5)] hover:shadow-[0_16px_40px_rgba(13,158,113,0.6)] hover:-translate-y-1"
                    >
                      <span>Explore Our Formulations</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Magnetic>

                  <Magnetic strength={0.2}>
                    <Link
                      to="/quality"
                      className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 text-sm uppercase tracking-wider font-bold transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <ShieldCheck className="w-4 h-4 text-[#A7F3D0]" />
                      <span>Quality Charter</span>
                    </Link>
                  </Magnetic>
                </div>
              </Reveal>

              {/* Trust indicators row */}
              <Reveal delay={0.8}>
                <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-2xl sm:text-3xl font-editorial font-bold text-white">
                      20+ Years
                    </div>
                    <div className="text-xs text-[#A7F3D0] font-semibold uppercase tracking-wider mt-1">
                      Experience
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-editorial font-bold text-white">
                      Documented
                    </div>
                    <div className="text-xs text-[#A7F3D0] font-semibold uppercase tracking-wider mt-1">
                      CoA Availability
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-editorial font-bold text-white">
                      Traceable
                    </div>
                    <div className="text-xs text-[#A7F3D0] font-semibold uppercase tracking-wider mt-1">
                      Batch Records
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Layered Image Composition */}
            <div className="lg:col-span-5 relative">
              <Reveal delay={0.5}>
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-white/20 shadow-[0_24px_64px_rgba(0,0,0,0.4)]">
                  <ImageSlot
                    slotKey="aboutPlant"
                    ratio="4/5"
                    caption="cGMP certified pharmaceutical manufacturing"
                    className="w-full h-full object-cover"
                  />

                  {/* Floating credential badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0A192F]/90 backdrop-blur-md border border-white/20 text-white flex items-center gap-3 shadow-2xl">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0D9E71] to-[#059669] flex items-center justify-center shrink-0 shadow-lg">
                      <ShieldCheck className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[11px] font-bold text-[#A7F3D0] uppercase tracking-wider">
                        Audited Partner Facilities
                      </div>
                      <div className="text-sm font-bold text-white mt-0.5">
                        cGMP · WHO · US FDA Approved
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:block">
          <div className="flex flex-col items-center gap-2 text-white/60 animate-bounce">
            <div className="text-xs uppercase tracking-widest font-bold">Scroll</div>
            <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* 2. TRUST MARQUEE STRIP */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className="border-y border-slate-200/80 bg-white py-4 shadow-sm">
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

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* 3. COMPANY INTRODUCTION — EDITORIAL STORYTELLING */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left: Large editorial quote */}
          <div className="lg:col-span-6">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0D9E71] bg-emerald-50 border border-emerald-200/80 px-4 py-1.5 rounded-full mb-6">
              Corporate Philosophy
            </span>

            <blockquote className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A192F] leading-tight tracking-tight mb-8">
              "Delivering pharmaceutical excellence through scientific rigor, transparent batch
              documentation, and uncompromising quality assurance."
            </blockquote>

            <div className="flex items-start gap-4 text-sm text-slate-600">
              <div className="w-1 h-16 bg-gradient-to-b from-[#0D9E71] to-transparent rounded-full" />
              <p className="leading-relaxed max-w-xl">
                Founded in Mumbai, Zilton Life Care operates as a dedicated pharmaceutical
                healthcare company bridging certified cGMP, WHO and US FDA approved manufacturing
                with clinical care facilities across India.
              </p>
            </div>
          </div>

          {/* Right: Stats grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30 border border-emerald-200/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0D9E71] to-[#059669] flex items-center justify-center mb-4 shadow-lg">
                <Microscope className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-editorial font-bold text-[#0A192F] mb-2">
                Hospital Grade
              </div>
              <div className="text-sm text-slate-600">
                Intensive care therapeutics meeting exact pharmacopeial monographs
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-50 via-white to-cyan-50/30 border border-cyan-200/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#06B6D4] to-[#0D9488] flex items-center justify-center mb-4 shadow-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-editorial font-bold text-[#0A192F] mb-2">
                Pan-India
              </div>
              <div className="text-sm text-slate-600">
                Institutional procurement and hospital pharmacy distribution
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-slate-50/30 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0A192F] to-[#1E3A5A] flex items-center justify-center mb-4 shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-editorial font-bold text-[#0A192F] mb-2">
                Documented
              </div>
              <div className="text-sm text-slate-600">
                100% CoA availability for institutional verification requests
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-teal-50/30 border border-emerald-200/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#10B981] to-[#0D9488] flex items-center justify-center mb-4 shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-editorial font-bold text-[#0A192F] mb-2">
                20+ Years
              </div>
              <div className="text-sm text-slate-600">
                Proven experience in critical care formulation expertise
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* 4. THERAPEUTIC DIVISIONS — PREMIUM ASYMMETRIC BENTO */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-slate-200">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0D9E71] bg-emerald-50 border border-emerald-200/80 px-4 py-1.5 rounded-full mb-4">
            Pharmaceutical Portfolio
          </span>
          <h2 className="text-fluid-h2 font-editorial font-bold text-[#0A192F] mb-4">
            Targeted Therapeutic Divisions
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Formulations specifically engineered for intensive hospital protocols, emergency
            admissions, and clinical patient recovery.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Card 1: Featured — Critical Care (spans 7 cols) */}
          <div className="lg:col-span-7 min-h-[500px] bg-gradient-to-br from-[#0A192F] via-[#0D2A22] to-[#0A192F] text-white border-2 border-emerald-500/30 rounded-3xl p-10 shadow-2xl relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D9E71]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-[#A7F3D0] text-xs font-bold border border-emerald-400/30">
                  <Syringe className="w-4 h-4 text-[#10B981]" />
                  <span>Flagship Hospital Portfolio</span>
                </span>
              </div>

              <h3 className="text-4xl sm:text-5xl font-editorial font-extrabold text-white group-hover:text-[#A7F3D0] transition-colors leading-tight mb-4">
                Critical Care Injections
              </h3>

              <p className="text-base text-slate-200 leading-relaxed mb-8 max-w-xl">
                Specialized intensive-care parenteral formulations covering broad-spectrum IV
                Carbapenems, Polypeptides, Echinocandin Antifungals, and High-Dose Elemental
                Haematinics formulated for ICU, emergency, and surgical admissions.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["Meropenem 1gm", "Polymyxin B 7.5 lac IU", "Piperacillin + Tazobactam 4.5gm", "Ferric Carboxymaltose"].map((drug) => (
                  <span
                    key={drug}
                    className="text-xs font-medium text-slate-200 bg-white/10 px-3 py-2 rounded-xl border border-white/15"
                  >
                    {drug}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/15 flex items-center justify-between">
              <Link
                to="/products#critical-care-injection"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-wider font-bold text-[#10B981] hover:text-[#34D399] transition-colors"
              >
                <span>Explore Formulations</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <span className="text-xs text-slate-400 font-medium">cGMP · WHO · US FDA</span>
            </div>

            {/* Background packshot */}
            <div className="absolute right-8 bottom-8 w-56 opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none">
              <img
                src="/images/products/placeholder-injection.svg"
                alt="Critical Care Injections"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Column Stack */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            {/* Card 2: Nutrition IV */}
            <div className="flex-1 min-h-[240px] bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/20 border border-emerald-200/90 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 text-teal-800 text-xs font-bold border border-teal-200/80">
                  <Droplets className="w-4 h-4 text-[#0D9488]" />
                  <span>IV Infusion Therapy</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-[#0A192F] group-hover:text-[#0D9E71] transition-colors leading-tight mb-3">
                Nutrition IV Solutions
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Sterile parenteral nutrition preparations and essential trace element infusions
                designed for clinical parenteral therapy.
              </p>

              <Link
                to="/products#nutrition-iv"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#0D9E71] hover:text-[#059669] transition-colors"
              >
                <span>View Range</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 3: Nutrition Sachets */}
            <div className="flex-1 min-h-[240px] bg-gradient-to-br from-white via-cyan-50/25 to-slate-50 border border-cyan-200/80 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 text-cyan-800 text-xs font-bold border border-cyan-200/80">
                  <Package className="w-4 h-4 text-[#06B6D4]" />
                  <span>Metabolic Nutrition</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-[#0A192F] group-hover:text-[#0D9E71] transition-colors leading-tight mb-3">
                Therapeutic Nutrition Sachets
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Advanced therapeutic nutrition sachets containing pharmaceutical-grade amino acids
                for clinical and dietary management.
              </p>

              <Link
                to="/products#nutrition-sachet"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#0D9E71] hover:text-[#059669] transition-colors"
              >
                <span>View Sachets</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* 5. INTERACTIVE PRODUCT SHOWCASE with WATERMELON FLUID TABS */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-slate-200">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0D9E71] bg-emerald-50 border border-emerald-200/80 px-4 py-1.5 rounded-full mb-4">
              Featured Formulations
            </span>
            <h2 className="text-fluid-h2 font-editorial font-bold text-[#0A192F] mb-3">
              Hospital Formulation Portfolio
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Explore active molecules across intensive critical care and clinical nutrition. Select
              any card to review technical specifications.
            </p>
          </div>

          <div className="shrink-0">
            <FluidTabs
              tabs={PHARMA_DEFAULT_TABS}
              activeId={selectedCategory}
              onChange={setSelectedCategory}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={setActiveDrawerProduct}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0A192F] text-sm uppercase tracking-wider font-bold transition-all hover:-translate-y-0.5 shadow-sm"
          >
            <span>Explore Complete Catalogue</span>
            <ArrowRight className="w-4 h-4 text-[#0D9E71]" />
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* 6. QUALITY STORYTELLING with WATERMELON CARD-SPLIT-ACCORDION */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto border-t border-slate-200 bg-gradient-to-br from-slate-50/50 via-white to-emerald-50/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-7">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0D9E71] bg-emerald-50 border border-emerald-200/80 px-4 py-1.5 rounded-full mb-4">
              Operational Rigor
            </span>
            <h2 className="text-fluid-h2 font-editorial font-bold text-[#0A192F] mb-4">
              Comprehensive Quality Verification Framework
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-10">
              Every parenteral injectable and clinical nutrition pack undergoes documented release
              testing from audited partner plants to hospital receiving docks.
            </p>

            <CardSplitAccordion
              items={VERIFIED_QUALITY_PROCESS_STEPS}
              defaultOpenId={1}
            />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-slate-200">
              <ImageSlot
                slotKey="aboutPlant"
                ratio="4/3"
                caption="Cleanroom terminal packaging"
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-[#0A192F]/90 backdrop-blur-md border border-white/15 text-white flex items-center gap-3 shadow-2xl">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0D9E71] to-[#059669] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-bold text-[#A7F3D0] uppercase tracking-wider">
                    Audited Partner Site
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    cGMP · WHO · US FDA Approved
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <Microscope className="w-5 h-5 text-[#0D9E71] mb-2" />
                <div className="text-lg font-editorial font-bold text-[#0A192F]">≥99.0%</div>
                <div className="text-xs text-slate-500 font-medium">HPLC Assay Purity</div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <Thermometer className="w-5 h-5 text-[#0D9E71] mb-2" />
                <div className="text-lg font-editorial font-bold text-[#0A192F]">2°–8°C</div>
                <div className="text-xs text-slate-500 font-medium">Cold Chain Transit</div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#0D9E71] mb-2" />
                <div className="text-lg font-editorial font-bold text-[#0A192F]">ISO 5</div>
                <div className="text-xs text-slate-500 font-medium">Cleanroom Grade</div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <FileText className="w-5 h-5 text-[#0D9E71] mb-2" />
                <div className="text-lg font-editorial font-bold text-[#0A192F]">100%</div>
                <div className="text-xs text-slate-500 font-medium">CoA Archival</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* 7. FULL-BLEED CREDENTIAL BANNER */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-r from-[#0A192F] via-[#0F382C] to-[#0A192F] text-white py-20 sm:py-32 my-16 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-science-mesh-dark opacity-25 mix-blend-screen" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-[#A7F3D0] text-xs font-semibold mb-6 border border-emerald-400/20">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span className="uppercase tracking-wider">Pharmaceutical Governance</span>
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold text-white leading-tight mb-6">
              Formulated for clinical requirements. Documented batch release protocols.
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
              <div className="text-3xl sm:text-4xl font-extrabold font-editorial text-white mb-2">
                cGMP · WHO
              </div>
              <div className="text-xs text-[#10B981] font-bold uppercase tracking-wider mb-2">
                US FDA Partner
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                Audited partner manufacturing facilities
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
              <div className="text-3xl sm:text-4xl font-extrabold font-editorial text-white mb-2">
                Documented
              </div>
              <div className="text-xs text-[#10B981] font-bold uppercase tracking-wider mb-2">
                CoA Available
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                Certificates upon institutional request
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
              <div className="text-3xl sm:text-4xl font-extrabold font-editorial text-white mb-2">
                2°–8°C
              </div>
              <div className="text-xs text-[#10B981] font-bold uppercase tracking-wider mb-2">
                Cold Chain
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                Temperature-monitored sensitive formulations
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
              <div className="text-3xl sm:text-4xl font-extrabold font-editorial text-white mb-2">
                Traceable
              </div>
              <div className="text-xs text-[#10B981] font-bold uppercase tracking-wider mb-2">
                Batch Records
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                Production to hospital pharmacy documentation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* 8. INSTITUTIONAL CTA with WATERMELON CTA-3 */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <Cta3
        badgeText="Institutional Supply & Hospital Procurement"
        headline="Partner with Zilton Life Care for Hospital & Institutional Supply."
        subtitle="Direct your commercial hospital inquiries, batch allocation schedules, or authorized distribution partnership proposals to our corporate supply desk in Mumbai."
        primaryCta={{ label: "Start an Institutional Enquiry", href: "/contact" }}
        whatsappMessage="Hello Zilton Life Care Team,\n\nI would like to inquire about institutional hospital supply schedules, product allocations, and pricing terms.\n\nThank you."
      />

      {/* Product Drawer */}
      <ProductDrawer
        product={activeDrawerProduct}
        onClose={() => setActiveDrawerProduct(null)}
      />
    </div>
  );
}
