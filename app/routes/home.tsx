import React from "react";
import { Link } from "react-router";
import { ArrowUpRight, ArrowRight, ShieldCheck, Thermometer, FileCheck, Layers } from "lucide-react";
import { SplitLines } from "~/components/motion/SplitLines";
import { Reveal } from "~/components/motion/Reveal";
import { Magnetic } from "~/components/motion/Magnetic";
import { Marquee } from "~/components/motion/Marquee";
import { ScrollText } from "~/components/motion/ScrollText";
import { CountUp } from "~/components/motion/CountUp";
import { DrawPath } from "~/components/motion/DrawPath";
import { ImageSlot } from "~/components/ui/ImageSlot";
import { generateRouteMeta } from "~/utils/seo";
import { PRODUCT_CATEGORIES } from "~/data/products";

export function meta() {
  return generateRouteMeta({
    title: "Minimal Luxury Healthcare & Clinical Formulations",
    description:
      "Zilton Life Care Private Limited is a pharmaceutical marketing enterprise delivering critical care injectables, IV infusions, and therapeutic nutrition solutions across India.",
    canonicalPath: "/",
  });
}

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* ─── 1. HERO SECTION ───────────────────────────────────── */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center flex-1">
          {/* Left Column: Headlines & Positioning */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Single Elegant Tag */}
            <div className="mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0B996F] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#1F3D33] font-semibold">
                Institutional Pharma Marketing · Mumbai
              </span>
            </div>

            {/* Main Headline: Line-by-line mask reveal with italic word */}
            <div className="text-fluid-hero font-editorial font-bold text-[#1F3D33] tracking-tighter">
              <SplitLines italicWord="Lives.">
                {"Better Healthcare.\nHealthier Lives."}
              </SplitLines>
            </div>

            <p className="mt-6 text-base sm:text-lg text-[#4A6056] leading-relaxed max-w-xl font-light">
              We market hospital-grade critical care parenterals and specialized clinical nutrition formulations, built upon rigorous cGMP partner audits and disciplined distribution.
            </p>

            {/* Hero CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Magnetic strength={0.25}>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1F3D33] hover:bg-[#0B996F] text-[#F6F4EE] font-mono text-xs uppercase tracking-wider font-semibold transition-colors duration-200 shadow-md"
                >
                  <span>Explore 12 Formulations</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Magnetic>

              <Magnetic strength={0.2}>
                <Link
                  to="/quality"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-transparent hover:bg-[#1F3D33]/5 text-[#1F3D33] border border-[#1F3D33]/25 font-mono text-xs uppercase tracking-wider font-semibold transition-colors duration-200"
                >
                  <span>Quality Framework</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </Magnetic>
            </div>
          </div>

          {/* Right Column: Abstract SVG Composition + Layered Slot */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-[#FCFAF5] border border-[#1F3D33]/15 p-6 shadow-sm overflow-hidden flex flex-col justify-between">
              {/* Abstract Technical Grid & Orbit Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                <defs>
                  <pattern id="hero-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1F3D33" strokeWidth="0.5" strokeOpacity="0.15" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hero-grid)" />
                {/* Orbital concentric rings */}
                <circle cx="50%" cy="50%" r="35%" fill="none" stroke="#0B996F" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_40s_linear_infinite]" />
                <circle cx="50%" cy="50%" r="22%" fill="none" stroke="#1F3D33" strokeWidth="1" opacity="0.3" />
                {/* Temperature Line Indicator */}
                <path d="M 30 220 Q 120 180 200 240 T 380 200" fill="none" stroke="#0B996F" strokeWidth="2" strokeDasharray="6 3" />
              </svg>

              {/* Top Technical Metadata */}
              <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-[#1F3D33]/60 tracking-wider">
                <span>SYSTEM ID / ZLC-2026</span>
                <span className="flex items-center gap-1 text-[#0B996F]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0B996F]" />
                  BATCH COMPLIANT
                </span>
              </div>

              {/* Center Abstract Emblem & Cold Chain Metric */}
              <div className="relative z-10 my-auto text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-[#1F3D33] text-[#F6F4EE] flex items-center justify-center p-3 shadow-lg mb-3">
                  <img
                    src="/images/branding/logo-512.png"
                    alt="Zilton Emblem"
                    className="w-full h-full object-contain filter invert"
                  />
                </div>
                <h3 className="font-editorial text-lg font-bold text-[#1F3D33]">
                  Cold-Chain Precision
                </h3>
                <span className="font-mono text-xs text-[#0B996F] font-semibold mt-0.5">
                  2°C – 8°C Monitored Line
                </span>
              </div>

              {/* Bottom Architectural Image Slot (Optional Layer) */}
              <div className="relative z-10 pt-3 border-t border-[#1F3D33]/10 flex items-center justify-between font-mono text-[9px] text-[#4A6056]">
                <span>DIVISIONS: CRITICAL CARE / NUTRITION</span>
                <span>MUMBAI DESK</span>
              </div>
            </div>
          </div>
        </div>

        {/* Thin Live Ticker Row (Replaces the old 3 stat boxes) */}
        <div className="mt-12 pt-6 border-t border-[#1F3D33]/15 grid grid-cols-3 gap-4 font-mono text-center sm:text-left">
          <div>
            <span className="text-2xl sm:text-3xl font-bold font-editorial text-[#1F3D33]">
              <CountUp end={3} duration={1} />
            </span>
            <span className="block text-[11px] uppercase tracking-wider text-[#4A6056] mt-0.5">
              Clinical Divisions
            </span>
          </div>

          <div>
            <span className="text-2xl sm:text-3xl font-bold font-editorial text-[#1F3D33]">
              <CountUp end={12} duration={1.2} />
            </span>
            <span className="block text-[11px] uppercase tracking-wider text-[#4A6056] mt-0.5">
              Formulations Marketed
            </span>
          </div>

          <div>
            <span className="text-2xl sm:text-3xl font-bold font-editorial text-[#0B996F]">
              GDP
            </span>
            <span className="block text-[11px] uppercase tracking-wider text-[#4A6056] mt-0.5">
              Cold-Chain Compliance
            </span>
          </div>
        </div>
      </section>

      {/* ─── 2. MARQUEE STRIP ──────────────────────────────────── */}
      <Marquee
        items={[
          "Critical Care Injections",
          "Clinical Nutrition IV",
          "Nutritional Sachets",
          "GDP Compliant Logistics",
          "Institutional Supply Only",
          "Schedule M Certified Partners",
        ]}
      />

      {/* ─── 3. WHO WE ARE & 3-STEP FLOW ───────────────────────── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto border-b border-[#1F3D33]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: ScrollText Statement & 3-Step Flow */}
          <div className="lg:col-span-7">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0B996F] font-semibold block mb-4">
              01 / Enterprise Identity
            </span>

            <ScrollText as="h2">
              Zilton Life Care is an institutional pharmaceutical marketing enterprise dedicated to therapeutic precision, verified quality parameters, and disciplined supply to intensive healthcare facilities.
            </ScrollText>

            {/* 3-Step Pathway with DrawPath SVG */}
            <div id="pathway-flow" className="mt-16 space-y-8 relative pl-6 border-l-2 border-[#1F3D33]/15">
              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#1F3D33] text-[#F6F4EE] flex items-center justify-center font-mono text-[9px] font-bold">
                  1
                </span>
                <h4 className="font-editorial text-lg font-bold text-[#1F3D33]">
                  Audited cGMP Manufacturing
                </h4>
                <p className="text-sm text-[#4A6056] mt-1 leading-relaxed font-light">
                  All formulations are compounded in certified partner facilities operating in compliance with statutory Schedule M cleanroom standards.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#0B996F] text-white flex items-center justify-center font-mono text-[9px] font-bold">
                  2
                </span>
                <h4 className="font-editorial text-lg font-bold text-[#1F3D33]">
                  Mumbai Quality Review
                </h4>
                <p className="text-sm text-[#4A6056] mt-1 leading-relaxed font-light">
                  Batch testing archives and analytical Certificates of Analysis (CoAs) are examined prior to market release.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#1F3D33] text-[#F6F4EE] flex items-center justify-center font-mono text-[9px] font-bold">
                  3
                </span>
                <h4 className="font-editorial text-lg font-bold text-[#1F3D33]">
                  Hospitals, ICUs &amp; Stockists
                </h4>
                <p className="text-sm text-[#4A6056] mt-1 leading-relaxed font-light">
                  Dispatched under temperature-governed protocols directly to institutional pharmacies and licensed distributors.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Architectural ImageSlot */}
          <div className="lg:col-span-5">
            <ImageSlot
              slotKey="aboutPlant"
              ratio="4/5"
              caption="Cleanroom terminal packaging and batch inspection."
              className="shadow-md"
            />
          </div>
        </div>
      </section>

      {/* ─── 4. PORTFOLIO DIVISIONS (Pinned Scene Style) ──────── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#1F3D33]/15 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#0B996F] font-semibold block mb-2">
              02 / Clinical Focus
            </span>
            <h2 className="text-fluid-h2 font-editorial font-bold text-[#1F3D33]">
              Three Targeted Portfolios
            </h2>
          </div>
          <p className="text-sm text-[#4A6056] max-w-sm font-light">
            Therapeutic lines specifically formulated for intensive hospital settings and clinical recovery.
          </p>
        </div>

        {/* 3 Full-Height Division Panels */}
        <div className="space-y-12">
          {PRODUCT_CATEGORIES.map((cat, idx) => {
            const num = `0${idx + 1}`;
            return (
              <div
                key={cat.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-3xl bg-[#FCFAF5] border border-[#1F3D33]/15 hover:border-[#0B996F]/40 transition-colors duration-300"
              >
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs font-bold text-[#0B996F] bg-[#DFEAE2] px-3 py-1 rounded-full">
                      {num} / DIVISION
                    </span>
                    <span className="font-mono text-xs text-[#4A6056]">
                      Rx Institutional
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-[#1F3D33] mb-3">
                    {cat.name}
                  </h3>

                  <p className="text-sm sm:text-base text-[#4A6056] leading-relaxed mb-6 font-light">
                    {cat.description}
                  </p>

                  <div className="pt-4 border-t border-[#1F3D33]/10 flex flex-wrap items-center gap-3">
                    <Link
                      to={`/products#${cat.id}`}
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold text-[#1F3D33] hover:text-[#0B996F] transition-colors"
                    >
                      <span>View Division Range</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <ImageSlot
                    slotKey={`division.${cat.id}`}
                    ratio="16/9"
                    caption={`${cat.name} clinical formulation profile.`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── 5. QUALITY: SINGLE DARK FULL-BLEED BAND ─────────── */}
      <section className="bg-[#1F3D33] text-[#F6F4EE] py-20 sm:py-28 my-16 select-none">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0B996F] font-semibold block mb-3">
              03 / Rigorous Governance
            </span>
            <h2 className="text-fluid-h2 font-editorial font-bold text-white tracking-tight leading-tight">
              Engineered for therapeutic efficacy. Every batch verified before clinical dispatch.
            </h2>
          </div>

          {/* 4 Animated Metric Columns — Clean Typography, No Boxed Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-white/10 font-mono">
            <div>
              <span className="text-3xl sm:text-4xl font-bold font-editorial text-white block">
                cGMP
              </span>
              <span className="text-xs text-[#0B996F] font-semibold uppercase tracking-wider block mt-1">
                Partner Audited
              </span>
              <p className="text-[11px] text-white/60 mt-1 leading-relaxed font-light">
                Schedule M certified contract production facilities.
              </p>
            </div>

            <div>
              <span className="text-3xl sm:text-4xl font-bold font-editorial text-white block">
                100%
              </span>
              <span className="text-xs text-[#0B996F] font-semibold uppercase tracking-wider block mt-1">
                CoA Archive
              </span>
              <p className="text-[11px] text-white/60 mt-1 leading-relaxed font-light">
                Certificates of Analysis provided upon institutional request.
              </p>
            </div>

            <div>
              <span className="text-3xl sm:text-4xl font-bold font-editorial text-white block">
                2°–8°C
              </span>
              <span className="text-xs text-[#0B996F] font-semibold uppercase tracking-wider block mt-1">
                Cold-Chain Monitored
              </span>
              <p className="text-[11px] text-white/60 mt-1 leading-relaxed font-light">
                Thermal validation for sensitive injectable solutions.
              </p>
            </div>

            <div>
              <span className="text-3xl sm:text-4xl font-bold font-editorial text-white block">
                LOT ID
              </span>
              <span className="text-xs text-[#0B996F] font-semibold uppercase tracking-wider block mt-1">
                Batch Traceability
              </span>
              <p className="text-[11px] text-white/60 mt-1 leading-relaxed font-light">
                Linear documentation from production to hospital pharmacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. CLOSING CTA: OVERSIZED "LET'S TALK." ─────────── */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-[#0B996F] font-semibold block mb-4">
          Institutional Dialogue
        </span>

        <h2 className="font-editorial text-[10vw] sm:text-[8vw] font-bold text-[#1F3D33] tracking-tighter leading-none mb-8">
          Let&apos;s talk.
        </h2>

        <p className="text-base sm:text-lg text-[#4A6056] max-w-lg mx-auto font-light leading-relaxed mb-10">
          Connect directly with our Mumbai corporate desk for hospital quotations, batch allocations, or distribution partnerships.
        </p>

        <div className="flex justify-center">
          <Magnetic strength={0.3}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1F3D33] hover:bg-[#0B996F] text-[#F6F4EE] font-mono text-sm uppercase tracking-wider font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <span>Start a conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Magnetic>
        </div>
      </section>
    </div>
  );
}
