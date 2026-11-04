import React from "react";
import { Link } from "react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SplitLines } from "~/components/motion/SplitLines";
import { Magnetic } from "~/components/motion/Magnetic";
import { Marquee } from "~/components/motion/Marquee";
import { ScrollText } from "~/components/motion/ScrollText";
import { CountUp } from "~/components/motion/CountUp";
import { ImageSlot } from "~/components/ui/ImageSlot";
import { generateRouteMeta } from "~/utils/seo";
import { PRODUCT_CATEGORIES } from "~/data/products";
import { getWhatsAppLink } from "~/utils/whatsapp";

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
            {/* Single Tag */}
            <div className="mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0D9E71] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#1B634E] font-semibold">
                Institutional Pharma Marketing · Mumbai
              </span>
            </div>

            {/* Main Headline: Line-by-line mask reveal with italic word */}
            <div className="text-fluid-hero font-editorial font-bold text-[#1B634E] tracking-tighter">
              <SplitLines italicWord="Lives.">
                {"Better Healthcare.\nHealthier Lives."}
              </SplitLines>
            </div>

            <p className="mt-6 text-base sm:text-lg text-[#3E6958] leading-relaxed max-w-xl font-light">
              We market hospital-grade critical care parenterals and specialized clinical nutrition formulations, built upon rigorous cGMP partner audits and disciplined distribution.
            </p>

            {/* Hero CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Magnetic strength={0.25}>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1B634E] hover:bg-[#0D9E71] text-[#F6F4EE] font-mono text-xs uppercase tracking-wider font-semibold transition-colors duration-200 shadow-md"
                >
                  <span>Explore 12 Formulations</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Magnetic>

              <Magnetic strength={0.2}>
                <Link
                  to="/quality"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-transparent hover:bg-[#1B634E]/5 text-[#1B634E] border border-[#1B634E]/25 font-mono text-xs uppercase tracking-wider font-semibold transition-colors duration-200"
                >
                  <span>Quality Framework</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </Magnetic>

              {/* WhatsApp Quick Enquiry CTA */}
              <a
                href={getWhatsAppLink(
                  `Hello Zilton Life Care Team,\n\nI am interested in your pharmaceutical products and would like to know more about your product range and business opportunities.\n\nPlease share further details.\n\nThank you.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-colors duration-200 shadow-md"
                aria-label="Quick Enquiry on WhatsApp"
              >
                {/* WhatsApp icon */}
                <svg viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16 2C8.268 2 2 8.268 2 16c0 2.44.655 4.726 1.797 6.69L2 30l7.52-1.773A13.934 13.934 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm6.3 18.909c-.345-.173-2.045-1.009-2.362-1.124-.317-.115-.547-.173-.778.173-.23.345-.893 1.124-1.095 1.354-.202.23-.403.258-.748.086-.345-.173-1.456-.537-2.773-1.71-1.025-.914-1.717-2.044-1.918-2.389-.202-.345-.022-.531.151-.703.155-.155.345-.404.518-.605.172-.202.23-.345.345-.576.115-.23.057-.432-.029-.605-.086-.173-.778-1.874-1.066-2.566-.28-.673-.565-.582-.778-.593l-.663-.012c-.23 0-.605.086-.922.432s-1.209 1.181-1.209 2.882c0 1.7 1.238 3.344 1.411 3.574.173.23 2.437 3.72 5.902 5.216.825.356 1.468.569 1.97.728.828.263 1.582.226 2.178.137.664-.1 2.045-.836 2.333-1.643.288-.807.288-1.499.202-1.643-.086-.144-.317-.23-.662-.403z" />
                </svg>
                <span>Quick Enquiry on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Abstract SVG Composition with EXACT logo */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-[#FCFAF5] border border-[#1B634E]/15 p-6 shadow-sm overflow-hidden flex flex-col justify-between">
              {/* Abstract Technical Grid & Orbit Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                <defs>
                  <pattern id="hero-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1B634E" strokeWidth="0.5" strokeOpacity="0.15" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hero-grid)" />
                {/* Orbital concentric rings */}
                <circle cx="50%" cy="50%" r="35%" fill="none" stroke="#0D9E71" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_40s_linear_infinite]" />
                <circle cx="50%" cy="50%" r="22%" fill="none" stroke="#1B634E" strokeWidth="1" opacity="0.3" />
                {/* Temperature Line Indicator */}
                <path d="M 30 220 Q 120 180 200 240 T 380 200" fill="none" stroke="#0D9E71" strokeWidth="2" strokeDasharray="6 3" />
              </svg>

              {/* Top Technical Metadata */}
              <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-[#1B634E]/60 tracking-wider">
                <span>SYSTEM ID / ZLC-2026</span>
                <span className="flex items-center gap-1 text-[#0D9E71]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D9E71]" />
                  BATCH COMPLIANT
                </span>
              </div>

              {/* Center EXACT Logo in White Card */}
              <div className="relative z-10 my-auto text-center flex flex-col items-center">
                <div className="w-18 h-18 rounded-2xl bg-white p-2.5 shadow-md border border-[#1B634E]/15 flex items-center justify-center mb-3">
                  <img
                    src="/images/branding/logo-512.png"
                    alt="Zilton Life Care Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-editorial text-lg font-bold text-[#1B634E]">
                  Cold-Chain Precision
                </h3>
                <span className="font-mono text-xs text-[#0D9E71] font-semibold mt-0.5">
                  2°C – 8°C Monitored Line
                </span>
              </div>

              {/* Bottom Architectural Info */}
              <div className="relative z-10 pt-3 border-t border-[#1B634E]/10 flex items-center justify-between font-mono text-[9px] text-[#3E6958]">
                <span>DIVISIONS: CRITICAL CARE / NUTRITION</span>
                <span>MUMBAI DESK</span>
              </div>
            </div>
          </div>
        </div>

        {/* Thin Live Ticker Row */}
        <div className="mt-12 pt-6 border-t border-[#1B634E]/15 grid grid-cols-3 gap-4 font-mono text-center sm:text-left">
          <div>
            <span className="text-2xl sm:text-3xl font-bold font-editorial text-[#1B634E]">
              <CountUp end={3} duration={1} />
            </span>
            <span className="block text-[11px] uppercase tracking-wider text-[#3E6958] mt-0.5">
              Clinical Divisions
            </span>
          </div>

          <div>
            <span className="text-2xl sm:text-3xl font-bold font-editorial text-[#1B634E]">
              <CountUp end={12} duration={1.2} />
            </span>
            <span className="block text-[11px] uppercase tracking-wider text-[#3E6958] mt-0.5">
              Formulations Marketed
            </span>
          </div>

          <div>
            <span className="text-2xl sm:text-3xl font-bold font-editorial text-[#0D9E71]">
              GDP
            </span>
            <span className="block text-[11px] uppercase tracking-wider text-[#3E6958] mt-0.5">
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
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto border-b border-[#1B634E]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: ScrollText Statement & 3-Step Flow */}
          <div className="lg:col-span-7">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D9E71] font-semibold block mb-4">
              01 / Enterprise Identity
            </span>

            <ScrollText as="h2">
              Zilton Life Care is an institutional pharmaceutical marketing enterprise dedicated to therapeutic precision, verified quality parameters, and disciplined supply to intensive healthcare facilities.
            </ScrollText>

            {/* 3-Step Pathway */}
            <div id="pathway-flow" className="mt-16 space-y-8 relative pl-6 border-l-2 border-[#1B634E]/15">
              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#1B634E] text-[#F6F4EE] flex items-center justify-center font-mono text-[9px] font-bold">
                  1
                </span>
                <h4 className="font-editorial text-lg font-bold text-[#1B634E]">
                  Audited cGMP Manufacturing
                </h4>
                <p className="text-sm text-[#3E6958] mt-1 leading-relaxed font-light">
                  All formulations are compounded in certified partner facilities operating in compliance with statutory Schedule M cleanroom standards.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#0D9E71] text-white flex items-center justify-center font-mono text-[9px] font-bold">
                  2
                </span>
                <h4 className="font-editorial text-lg font-bold text-[#1B634E]">
                  Mumbai Quality Review
                </h4>
                <p className="text-sm text-[#3E6958] mt-1 leading-relaxed font-light">
                  Batch testing archives and analytical Certificates of Analysis (CoAs) are examined prior to market release.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#1B634E] text-[#F6F4EE] flex items-center justify-center font-mono text-[9px] font-bold">
                  3
                </span>
                <h4 className="font-editorial text-lg font-bold text-[#1B634E]">
                  Hospitals, ICUs &amp; Stockists
                </h4>
                <p className="text-sm text-[#3E6958] mt-1 leading-relaxed font-light">
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

      {/* ─── 4. PORTFOLIO DIVISIONS ───────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#1B634E]/15 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D9E71] font-semibold block mb-2">
              02 / Clinical Focus
            </span>
            <h2 className="text-fluid-h2 font-editorial font-bold text-[#1B634E]">
              Three Targeted Portfolios
            </h2>
          </div>
          <p className="text-sm text-[#3E6958] max-w-sm font-light">
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
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-3xl bg-[#FCFAF5] border border-[#1B634E]/15 hover:border-[#0D9E71]/40 transition-colors duration-300"
              >
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs font-bold text-[#0D9E71] bg-[#DCEEE4] px-3 py-1 rounded-full">
                      {num} / DIVISION
                    </span>
                    <span className="font-mono text-xs text-[#3E6958]">
                      Rx Institutional
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-[#1B634E] mb-3">
                    {cat.name}
                  </h3>

                  <p className="text-sm sm:text-base text-[#3E6958] leading-relaxed mb-6 font-light">
                    {cat.description}
                  </p>

                  <div className="pt-4 border-t border-[#1B634E]/10 flex flex-wrap items-center gap-3">
                    <Link
                      to={`/products#${cat.id}`}
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold text-[#1B634E] hover:text-[#0D9E71] transition-colors"
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

      {/* ─── 5. QUALITY: LIGHTENED VIBRANT GREEN FULL-BLEED BAND ─── */}
      <section className="bg-[#1B634E] text-[#F6F4EE] py-20 sm:py-28 my-16 select-none">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#DCEEE4] font-semibold block mb-3">
              03 / Rigorous Governance
            </span>
            <h2 className="text-fluid-h2 font-editorial font-bold text-white tracking-tight leading-tight">
              Engineered for therapeutic efficacy. Every batch verified before clinical dispatch.
            </h2>
          </div>

          {/* 4 Animated Metric Columns */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-white/15 font-mono">
            <div>
              <span className="text-3xl sm:text-4xl font-bold font-editorial text-white block">
                cGMP
              </span>
              <span className="text-xs text-[#DCEEE4] font-semibold uppercase tracking-wider block mt-1">
                Partner Audited
              </span>
              <p className="text-[11px] text-white/75 mt-1 leading-relaxed font-light">
                Schedule M certified contract production facilities.
              </p>
            </div>

            <div>
              <span className="text-3xl sm:text-4xl font-bold font-editorial text-white block">
                100%
              </span>
              <span className="text-xs text-[#DCEEE4] font-semibold uppercase tracking-wider block mt-1">
                CoA Archive
              </span>
              <p className="text-[11px] text-white/75 mt-1 leading-relaxed font-light">
                Certificates of Analysis provided upon institutional request.
              </p>
            </div>

            <div>
              <span className="text-3xl sm:text-4xl font-bold font-editorial text-white block">
                2°–8°C
              </span>
              <span className="text-xs text-[#DCEEE4] font-semibold uppercase tracking-wider block mt-1">
                Cold-Chain Monitored
              </span>
              <p className="text-[11px] text-white/75 mt-1 leading-relaxed font-light">
                Thermal validation for sensitive injectable solutions.
              </p>
            </div>

            <div>
              <span className="text-3xl sm:text-4xl font-bold font-editorial text-white block">
                LOT ID
              </span>
              <span className="text-xs text-[#DCEEE4] font-semibold uppercase tracking-wider block mt-1">
                Batch Traceability
              </span>
              <p className="text-[11px] text-white/75 mt-1 leading-relaxed font-light">
                Linear documentation from production to hospital pharmacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. CLOSING CTA ────────────────────────────────────── */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-[#0D9E71] font-semibold block mb-4">
          Institutional Dialogue
        </span>

        <h2 className="font-editorial text-[10vw] sm:text-[8vw] font-bold text-[#1B634E] tracking-tighter leading-none mb-8">
          Let&apos;s talk.
        </h2>

        <p className="text-base sm:text-lg text-[#3E6958] max-w-lg mx-auto font-light leading-relaxed mb-10">
          Connect directly with our Mumbai corporate desk for hospital quotations, batch allocations, or distribution partnerships.
        </p>

        <div className="flex justify-center">
          <Magnetic strength={0.3}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1B634E] hover:bg-[#0D9E71] text-[#F6F4EE] font-mono text-sm uppercase tracking-wider font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
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
