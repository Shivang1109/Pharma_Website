import React from "react";
import { Link } from "react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { PRODUCT_CATEGORIES } from "~/data/products";
import { Magnetic } from "~/components/motion/Magnetic";
import { SplitLines } from "~/components/motion/SplitLines";
import { ScrollText } from "~/components/motion/ScrollText";
import { Marquee } from "~/components/motion/Marquee";
import { CountUp } from "~/components/motion/CountUp";
import { ImageSlot } from "~/components/ui/ImageSlot";
import { IMAGES } from "~/data/images";
import { generateRouteMeta } from "~/utils/seo";

export function meta() {
  return generateRouteMeta({
    title: "Zilton Life Care | Pharmaceutical Marketing & Hospital Supply",
    description:
      "Zilton Life Care Private Limited is a premier pharmaceutical marketing company based in Mumbai, specializing in hospital-grade critical care parenterals and specialized clinical nutrition.",
    canonicalPath: "/",
  });
}

export default function HomePage() {
  return (
    <div className="w-full">
      {/* ─── 1. HERO SECTION (FULL-WIDTH EXISTING IMAGE OVERLAY) ─── */}
      <section className="relative w-full overflow-hidden min-h-[72vh] max-h-[86vh] flex flex-col justify-end md:justify-center">
        {/* Background Existing Photo */}
        {IMAGES.heroMain && (
          <img
            src={IMAGES.heroMain}
            alt="Pharmaceutical laboratory research environment"
            className="absolute inset-0 w-full h-full object-cover object-right md:object-center select-none"
            loading="eager"
            decoding="sync"
          />
        )}

        {/* Directional Green Scrim: 90% opaque on text side, fading to clear on right. Bottom to top on mobile. */}
        <div
          className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#123D32]/95 via-[#165442]/85 to-transparent/30"
          aria-hidden="true"
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-2xl text-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-[#DCEEE4] text-xs font-medium mb-5 border border-white/10 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0D9E71]" />
              <span>Pharmaceutical Marketing · Mumbai</span>
            </span>

            <div className="text-fluid-hero font-editorial font-bold text-white tracking-tight leading-none">
              <SplitLines>
                {"Better Healthcare.\nHealthier Lives."}
              </SplitLines>
            </div>

            <p className="mt-6 text-base sm:text-lg text-white/90 leading-relaxed max-w-xl font-light">
              We market hospital-grade critical care parenterals and clinical nutrition formulations across India, supported by audited cGMP partner manufacturing and disciplined distribution.
            </p>

            {/* Hero CTAs: Single Dignified Pair */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Magnetic strength={0.25}>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#1B634E] hover:bg-[#DCEEE4] text-xs uppercase tracking-wider font-semibold transition-colors duration-200 shadow-lg"
                >
                  <span>Explore 12 Formulations</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Magnetic>

              <Magnetic strength={0.2}>
                <Link
                  to="/quality"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-transparent hover:bg-white/10 text-white border border-white/30 text-xs uppercase tracking-wider font-semibold transition-colors duration-200"
                >
                  <span>Quality Framework</span>
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Live Metrics Row Anchored to Bottom of Hero */}
        <div className="relative z-10 border-t border-white/15 bg-black/25 backdrop-blur-md">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-3 gap-4 text-center sm:text-left text-white">
            <div>
              <span className="text-2xl sm:text-3xl font-bold font-editorial text-white">
                <CountUp end={3} duration={1} />
              </span>
              <span className="block text-xs text-[#DCEEE4] mt-0.5 font-light">
                Therapeutic divisions
              </span>
            </div>

            <div>
              <span className="text-2xl sm:text-3xl font-bold font-editorial text-white">
                <CountUp end={12} duration={1.2} />
              </span>
              <span className="block text-xs text-[#DCEEE4] mt-0.5 font-light">
                Marketed formulations
              </span>
            </div>

            <div>
              <span className="text-xl sm:text-2xl font-bold font-editorial text-[#0D9E71]">
                Good Distribution Practice
              </span>
              <span className="block text-xs text-[#DCEEE4] mt-0.5 font-light">
                Distribution compliance
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. MARQUEE STRIP ──────────────────────────────────── */}
      <Marquee
        items={[
          "Critical care injections",
          "Clinical nutrition IV",
          "Nutritional sachets",
          "Good distribution practice",
          "Institutional supply",
          "cGMP partner manufacturing",
        ]}
      />

      {/* ─── 3. PORTFOLIO DIVISIONS ───────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-5 border-b border-[#1B634E]/15 gap-4">
          <div>
            <h2 className="text-fluid-h2 font-editorial font-bold text-[#1B634E]">
              Three Targeted Divisions
            </h2>
          </div>
          <p className="text-sm text-[#3E6958] max-w-sm font-light">
            Formulations specifically engineered for intensive hospital protocols and clinical patient recovery.
          </p>
        </div>

        {/* 3-Column Portfolio Division Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCT_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-[#1B634E]/15 hover:border-[#0D9E71]/40 transition-all duration-300 shadow-2xs hover:shadow-md"
            >
              <div>
                <div className="mb-4 overflow-hidden rounded-xl">
                  <ImageSlot
                    slotKey={`division.${cat.id}`}
                    ratio="16/9"
                    caption={`${cat.name} formulation profile.`}
                    className="w-full"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-editorial font-bold text-[#1B634E] mb-2 leading-tight">
                  {cat.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#3E6958] leading-relaxed font-light mb-6">
                  {cat.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1B634E]/10">
                <Link
                  to={`/products#${cat.id}`}
                  className="inline-flex items-center text-xs uppercase tracking-wider font-semibold text-[#1B634E] hover:text-[#0D9E71] transition-colors"
                >
                  <span>View division range</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 4. HOW SUPPLY WORKS (DISTRIBUTION PATHWAY) ────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto border-t border-[#1B634E]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Headline & 3-Step Supply Sequence */}
          <div className="lg:col-span-7">
            <h2 className="text-fluid-h2 font-editorial font-bold text-[#1B634E] leading-tight">
              Connecting audited manufacturing with hospital networks across India.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#3E6958] font-light leading-relaxed">
              Disciplined cold-chain and inventory management from partner production through licensed distributor supply.
            </p>

            {/* 3-Step Pathway */}
            <div id="pathway-flow" className="mt-10 space-y-7 relative pl-6 border-l-2 border-[#1B634E]/15">
              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#1B634E] text-[#FAFCFA] flex items-center justify-center text-[10px] font-bold">
                  1
                </span>
                <h4 className="font-editorial text-lg font-bold text-[#1B634E]">
                  cGMP Partner Manufacturing
                </h4>
                <p className="text-sm text-[#3E6958] mt-1 leading-relaxed font-light">
                  Formulations are compounded in partner facilities complying with statutory Schedule M cleanroom standards.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#0D9E71] text-white flex items-center justify-center text-[10px] font-bold">
                  2
                </span>
                <h4 className="font-editorial text-lg font-bold text-[#1B634E]">
                  Analytical Quality Review
                </h4>
                <p className="text-sm text-[#3E6958] mt-1 leading-relaxed font-light">
                  Batch documentation and analytical Certificates of Analysis (CoAs) are reviewed prior to commercial release.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#1B634E] text-[#FAFCFA] flex items-center justify-center text-[10px] font-bold">
                  3
                </span>
                <h4 className="font-editorial text-lg font-bold text-[#1B634E]">
                  Hospital &amp; Distributor Supply
                </h4>
                <p className="text-sm text-[#3E6958] mt-1 leading-relaxed font-light">
                  Products are dispatched under temperature-governed protocols directly to institutional pharmacies and licensed stockists.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Architectural ImageSlot capped at max-h-[380px] */}
          <div className="lg:col-span-5 max-h-[380px] overflow-hidden rounded-2xl">
            <ImageSlot
              slotKey="aboutPlant"
              ratio="4/3"
              caption="Cleanroom terminal packaging and batch inspection."
              className="shadow-sm w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ─── 5. QUALITY ASSURANCE FULL-BLEED BAND ──────────────── */}
      <section className="bg-[#1B634E] text-white py-16 sm:py-24 my-8 sm:my-14 select-none">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-fluid-h2 font-editorial font-bold text-white tracking-tight leading-tight">
              Formulated for clinical requirements. Documented batch release protocols.
            </h2>
          </div>

          {/* 4 Metric Columns */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-white/15">
            <div>
              <span className="text-3xl sm:text-4xl font-bold font-editorial text-white block">
                cGMP
              </span>
              <span className="text-xs text-[#DCEEE4] font-semibold block mt-1">
                Partner Audited
              </span>
              <p className="text-xs text-white/80 mt-1 leading-relaxed font-light">
                Schedule M compliant partner facilities.
              </p>
            </div>

            <div>
              <span className="text-3xl sm:text-4xl font-bold font-editorial text-white block">
                Documented
              </span>
              <span className="text-xs text-[#DCEEE4] font-semibold block mt-1">
                CoA Availability
              </span>
              <p className="text-xs text-white/80 mt-1 leading-relaxed font-light">
                Certificates of Analysis provided upon institutional request.
              </p>
            </div>

            <div>
              <span className="text-3xl sm:text-4xl font-bold font-editorial text-white block">
                2°–8°C
              </span>
              <span className="text-xs text-[#DCEEE4] font-semibold block mt-1">
                Cold-Chain Controlled
              </span>
              <p className="text-xs text-white/80 mt-1 leading-relaxed font-light">
                Temperature-monitored storage for sensitive injectable solutions.
              </p>
            </div>

            <div>
              <span className="text-3xl sm:text-4xl font-bold font-editorial text-white block">
                Traceable
              </span>
              <span className="text-xs text-[#DCEEE4] font-semibold block mt-1">
                Batch Records
              </span>
              <p className="text-xs text-white/80 mt-1 leading-relaxed font-light">
                Clear documentation from production to hospital pharmacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. CLOSING CTA ────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto text-center">
        <h2 className="font-editorial text-4xl sm:text-6xl font-bold text-[#1B634E] tracking-tight leading-none mb-6">
          Let&apos;s talk.
        </h2>

        <p className="text-base sm:text-lg text-[#3E6958] max-w-lg mx-auto font-light leading-relaxed mb-8">
          Connect directly with our Mumbai corporate desk for hospital quotations, batch allocations, or distribution partnerships.
        </p>

        <div className="flex justify-center">
          <Magnetic strength={0.3}>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-full bg-[#1B634E] hover:bg-[#0D9E71] text-[#FAFCFA] text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Start a conversation</span>
            </Link>
          </Magnetic>
        </div>
      </section>
    </div>
  );
}
