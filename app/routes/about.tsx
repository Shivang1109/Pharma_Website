import React, { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, ChevronDown, MapPin, Building2, ShieldCheck } from "lucide-react";
import { ImageSlot } from "~/components/ui/ImageSlot";
import { ScrollText } from "~/components/motion/ScrollText";
import { COMPANY } from "~/data/company";
import { IMAGES } from "~/data/images";
import { generateRouteMeta } from "~/utils/seo";

export function meta() {
  return generateRouteMeta({
    title: "About Zilton Life Care | Our Company & Mission",
    description:
      "Discover Zilton Life Care Private Limited — corporate vision, clinical mission, operating principles, and commitment to hospital-grade pharmaceutical quality.",
    canonicalPath: "/about",
  });
}

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState<number | null>(0);

  const values = [
    {
      num: "1",
      title: "Quality",
      tagline: "Uncompromising standards in every marketed batch.",
      desc: "We enforce strict adherence to pharmacopeial assay parameters, sterility checks, and Schedule M cGMP requirements across all partner manufacturing lines.",
    },
    {
      num: "2",
      title: "Integrity",
      tagline: "Transparent and honest in all institutional relationships.",
      desc: "Truth in labeling, transparent batch documentation, and open commercial communications guide our interactions with healthcare professionals.",
    },
    {
      num: "3",
      title: "Trust",
      tagline: "Enduring partnerships with hospitals and medical specialists.",
      desc: "Clinical trust is earned through zero-deviation product availability, rapid documentation fulfillment, and reliable supply chains.",
    },
    {
      num: "4",
      title: "Innovation",
      tagline: "Modern scientific approaches to clinical marketing.",
      desc: "Focusing on advanced antibiotic delivery systems, colloidal iron replenishment, and targeted metabolic amino acid therapy.",
    },
    {
      num: "5",
      title: "Commitment",
      tagline: "Dedicated to improving acute patient outcomes.",
      desc: "Ensuring intensive care units and hospital departments receive critical therapeutics without delay or thermal excursion.",
    },
    {
      num: "6",
      title: "Excellence",
      tagline: "Striving for the highest operational benchmark.",
      desc: "Continuous refinement of our distribution controls, partner audits, and regulatory compliance infrastructure.",
    },
  ];

  return (
    <div className="w-full">
      {/* ─── FULL-WIDTH INNER-PAGE HERO BANNER (~42vh) ─────────── */}
      <section className="relative w-full overflow-hidden min-h-[36vh] max-h-[44vh] flex flex-col justify-end md:justify-center">
        {IMAGES.aboutLeadership && (
          <img
            src={IMAGES.aboutLeadership}
            alt="Pharmaceutical corporate governance and clinical team"
            className="absolute inset-0 w-full h-full object-cover object-right md:object-center select-none"
            loading="eager"
            decoding="sync"
          />
        )}

        {/* Directional Green Scrim — Deep dark on text side, consistent botanical tint with no near-white fade */}
        <div
          className="absolute inset-0 bg-[#123D32]/40"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#123D32]/98 via-[#165442]/92 to-[#123D32]/65"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-2xl text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[#DCEEE4] text-xs font-medium mb-3 border border-white/10 shadow-xs">
              Corporate Overview
            </span>
            <h1 className="text-3xl sm:text-5xl font-editorial font-bold text-white tracking-tight leading-none">
              Institutional Purpose &amp; Governance
            </h1>
            <p className="mt-3 text-sm sm:text-base text-white/90 leading-relaxed max-w-xl font-light">
              Bridging certified cGMP manufacturing with acute clinical care facilities across India through uncompromised quality assurance and ethical governance.
            </p>
          </div>
        </div>
      </section>

      {/* ─── ABOUT CONTENT BODY ─────────────────────────────────── */}
      <div className="py-12 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* ─── 1. OUR STORY & FOUNDING CHARTER ─────────────────── */}
          <section className="mb-16 sm:mb-24">
            <div className="py-8 sm:py-12 border-b border-[#1B634E]/15 mb-12">
              <ScrollText as="h2">
                Founded in Mumbai, Zilton Life Care operates as a dedicated pharmaceutical marketing company bridging certified cGMP manufacturing with acute clinical care facilities across India.
              </ScrollText>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#3E6958] font-light leading-relaxed">
                <p>
                  Modern hospital pharmacotherapy demands uncompromising quality control, verified batch release documentation, and disciplined cold-chain management.
                </p>
                <p>
                  Zilton Life Care focuses exclusively on acute hospital therapeutics: advanced parenteral antibiotics for intensive clinical care, intravenous nutrition for compromised patients, and oral metabolic sachets for surgical recovery.
                </p>
                <p>
                  Our operational model pairs audited Schedule M contract manufacturing facilities with rigorous technical due-diligence in Mumbai, ensuring institutional healthcare providers receive formulations that meet exact pharmacopeial monographs.
                </p>

                <div className="pt-3 flex flex-wrap gap-4 text-xs font-medium text-[#1B634E]">
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FFFFFF] border border-[#1B634E]/15">
                    <MapPin className="w-4 h-4 text-[#0D9E71]" />
                    <span>Headquartered in Bandra West, Mumbai</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FFFFFF] border border-[#1B634E]/15">
                    <Building2 className="w-4 h-4 text-[#0D9E71]" />
                    <span>Dedicated Institutional Supply Desk</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <ImageSlot
                  slotKey="aboutPlant"
                  ratio="4/3"
                  caption="Cleanroom terminal packaging and batch inspection."
                  className="rounded-2xl shadow-sm"
                />
              </div>
            </div>
          </section>

          {/* ─── 2. VISION & MISSION STATEMENTS ───────────────────── */}
          <section className="py-14 sm:py-20 border-t border-[#1B634E]/15">
            <div className="mb-8">
              <h2 className="text-fluid-h2 font-editorial font-bold text-[#1B634E]">
                Guiding our healthcare commitment
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              <div className="p-8 sm:p-10 rounded-2xl bg-[#FFFFFF] border border-[#1B634E]/15 shadow-xs">
                <span className="text-xs font-semibold text-[#0D9E71] uppercase tracking-wider block mb-2">
                  Corporate Vision
                </span>
                <p className="font-editorial text-2xl sm:text-3xl font-bold text-[#1B634E] leading-snug">
                  &ldquo;{COMPANY.vision}&rdquo;
                </p>
                <p className="mt-4 text-sm text-[#3E6958] font-light leading-relaxed">
                  Establishing a dependable benchmark in acute hospital formulations through clinical discipline, transparent documentation, and continuous product availability.
                </p>
              </div>

              <div className="p-8 sm:p-10 rounded-2xl bg-[#1B634E] text-[#FAFCFA] border border-[#1B634E] shadow-md">
                <span className="text-xs font-semibold text-[#DCEEE4] uppercase tracking-wider block mb-2">
                  Operational Mission
                </span>
                <p className="font-editorial text-2xl sm:text-3xl font-bold text-white leading-snug">
                  &ldquo;{COMPANY.mission}&rdquo;
                </p>
                <p className="mt-4 text-sm text-white/85 font-light leading-relaxed">
                  Building lasting confidence with healthcare specialists, hospital drug committees, and distributors through batch-level traceability and strict Schedule M compliance.
                </p>
              </div>
            </div>
          </section>

          {/* ─── 3. CORE PRINCIPLES & STATUTORY GOVERNANCE ────────── */}
          <section className="py-14 sm:py-20 border-t border-[#1B634E]/15">
            <div className="max-w-2xl mb-10">
              <h2 className="text-fluid-h2 font-editorial font-bold text-[#1B634E]">
                The six guiding values
              </h2>
              <p className="text-sm text-[#3E6958] font-light mt-2">
                Our cultural charter guiding every manufacturing partner evaluation, release protocol, and client dialogue.
              </p>
            </div>

            {/* Values List with Expandable Interaction */}
            <div className="divide-y divide-[#1B634E]/15 border-y border-[#1B634E]/15 mb-12">
              {values.map((val, idx) => {
                const isExpanded = activeValue === idx;
                return (
                  <div
                    key={val.num}
                    onClick={() => setActiveValue(isExpanded ? null : idx)}
                    onMouseEnter={() => setActiveValue(idx)}
                    className="py-6 sm:py-7 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-5 sm:gap-8">
                        <span className="text-sm font-bold text-[#0D9E71] w-6">
                          {val.num}
                        </span>
                        <div>
                          <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#1B634E] group-hover:text-[#0D9E71] transition-colors">
                            {val.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#3E6958] mt-0.5">
                            {val.tagline}
                          </p>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-[#1B634E]/40 group-hover:text-[#0D9E71] transition-transform duration-300 ${
                          isExpanded ? "rotate-180 text-[#0D9E71]" : ""
                        }`}
                      />
                    </div>

                    {isExpanded && (
                      <div className="mt-3 pl-11 sm:pl-14 pr-4 animate-in fade-in duration-200">
                        <p className="text-sm text-[#3E6958] font-light leading-relaxed max-w-2xl">
                          {val.desc}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Statutory Governance Note Merged In */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#1B634E]/15 shadow-xs">
              <div className="flex items-center gap-2.5 text-[#0D9E71] font-semibold text-xs mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Statutory Regulatory Compliance</span>
              </div>
              <p className="text-xs sm:text-sm text-[#3E6958] font-light leading-relaxed">
                Zilton Life Care Private Limited strictly adheres to the Drugs and Cosmetics Act, Schedule M manufacturing requirements, and Indian Pharmacopoeia standards. We do not engage in direct-to-consumer dispensing. All clinical information is addressed exclusively to licensed practitioners and authorized hospital channels.
              </p>
              <div className="mt-4 pt-3 border-t border-[#1B634E]/10">
                <Link
                  to="/contact"
                  className="inline-flex items-center text-xs uppercase tracking-wider font-semibold text-[#1B634E] hover:text-[#0D9E71] transition-colors"
                >
                  <span>Direct inquiries to Mumbai corporate desk</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
