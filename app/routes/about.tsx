import React, { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, ChevronDown, ShieldCheck, MapPin, Building2 } from "lucide-react";
import { ImageSlot } from "~/components/ui/ImageSlot";
import { ScrollText } from "~/components/motion/ScrollText";
import { SplitLines } from "~/components/motion/SplitLines";
import { COMPANY } from "~/data/company";
import { generateRouteMeta } from "~/utils/seo";

export function meta() {
  return generateRouteMeta({
    title: "About Us — Corporate Governance, Vision & Ethics",
    description:
      "Discover Zilton Life Care Private Limited — our corporate vision, healthcare mission, core values, and uncompromising dedication to pharmaceutical quality standards.",
    canonicalPath: "/about",
  });
}

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState<number | null>(0);

  const values = [
    {
      num: "01",
      title: "Quality",
      tagline: "Uncompromising standards in every marketed batch.",
      desc: "We enforce strict adherence to pharmacopeial assay parameters, sterility checks, and Schedule M cGMP requirements across all partner manufacturing lines.",
    },
    {
      num: "02",
      title: "Integrity",
      tagline: "Transparent and honest in all institutional relationships.",
      desc: "Truth in labeling, transparent batch documentation, and open commercial communications guide our interactions with healthcare professionals.",
    },
    {
      num: "03",
      title: "Trust",
      tagline: "Enduring partnerships with hospitals and medical specialists.",
      desc: "Clinical trust is earned through zero-deviation product availability, rapid documentation fulfillment, and reliable supply chains.",
    },
    {
      num: "04",
      title: "Innovation",
      tagline: "Modern scientific approaches to clinical marketing.",
      desc: "Focusing on advanced antibiotic delivery systems, colloidal iron replenishment, and targeted metabolic amino acid therapy.",
    },
    {
      num: "05",
      title: "Commitment",
      tagline: "Dedicated to improving acute patient outcomes.",
      desc: "Ensuring intensive care units and hospital departments receive critical therapeutics without delay or thermal excursion.",
    },
    {
      num: "06",
      title: "Excellence",
      tagline: "Striving for the highest operational benchmark.",
      desc: "Continuous refinement of our distribution controls, partner audits, and regulatory compliance infrastructure.",
    },
  ];

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── 1. HERO & SCROLL-SCRUBBED OPENING STATEMENT ──────── */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="font-mono text-xs uppercase tracking-widest text-[#0B996F] font-semibold block mb-3">
            01 / Corporate Overview
          </span>
          <h1 className="text-fluid-hero font-editorial font-bold text-[#1F3D33] tracking-tight">
            Institutional Purpose &amp; Governance
          </h1>
        </div>

        {/* Scroll-Scrubbed Statement */}
        <div className="py-12 sm:py-16 border-y border-[#1F3D33]/15">
          <ScrollText as="h2">
            Founded in Mumbai, Zilton Life Care operates as a dedicated pharmaceutical marketing company bridging certified cGMP manufacturing with acute clinical care facilities across India.
          </ScrollText>
        </div>

        {/* ─── 2. TWO-COLUMN STORY WITH STICKY LEFT HEADING ───── */}
        <section className="py-20 sm:py-28 border-b border-[#1F3D33]/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Sticky Left Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <span className="font-mono text-xs uppercase tracking-widest text-[#0B996F] font-semibold block mb-2">
                02 / Commercial Architecture
              </span>
              <h2 className="text-fluid-h2 font-editorial font-bold text-[#1F3D33] leading-tight">
                Precision marketing for acute medical environments.
              </h2>
              <div className="mt-6 flex flex-col gap-2 font-mono text-xs text-[#4A6056]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#0B996F]" />
                  <span>Headquartered in Bandra West, Mumbai</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#0B996F]" />
                  <span>Dedicated Institutional Distribution Desk</span>
                </div>
              </div>
            </div>

            {/* Right Column Content & ImageSlot */}
            <div className="lg:col-span-7 space-y-8 font-light text-[#4A6056] text-base sm:text-lg leading-relaxed">
              <p>
                Modern hospital pharmacotherapy demands uncompromising quality control, rapid batch release verification, and continuous cold-chain integrity.
              </p>
              <p>
                At ZILTON LIFE CARE, we focus exclusively on three critical therapeutic pillars: advanced parenteral antibiotics for multidrug-resistant infections, intravenous clinical nutrition, and targeted oral metabolic sachets.
              </p>

              <div className="py-4">
                <ImageSlot
                  slotKey="aboutPlant"
                  ratio="16/9"
                  caption="Cleanroom terminal packaging and batch inspection."
                  className="rounded-2xl shadow-sm"
                />
              </div>

              <p>
                Our operational model pairs audited contract manufacturing plants with rigorous commercial and technical due-diligence in Mumbai, ensuring healthcare institutions receive formulations that meet exact pharmacopeial specifications.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 3. VISION & MISSION STATEMENTS ───────────────────── */}
        <section className="py-20 sm:py-28 border-b border-[#1F3D33]/15">
          <span className="font-mono text-xs uppercase tracking-widest text-[#0B996F] font-semibold block mb-8">
            03 / Vision &amp; Mission
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#FCFAF5] border border-[#1F3D33]/15">
              <span className="font-mono text-xs uppercase tracking-wider text-[#0B996F] font-bold block mb-3">
                OUR CORPORATE VISION
              </span>
              <p className="font-editorial text-3xl sm:text-4xl font-bold text-[#1F3D33] leading-snug">
                &ldquo;{COMPANY.vision}&rdquo;
              </p>
              <p className="mt-4 text-sm text-[#4A6056] font-light leading-relaxed">
                Aiming to establish an enduring benchmark in hospital-grade formulations through clinical discipline and consistent availability.
              </p>
            </div>

            <div className="p-8 sm:p-12 rounded-3xl bg-[#1F3D33] text-[#F6F4EE] border border-[#1F3D33]">
              <span className="font-mono text-xs uppercase tracking-wider text-[#0B996F] font-bold block mb-3">
                OUR OPERATIONAL MISSION
              </span>
              <p className="font-editorial text-3xl sm:text-4xl font-bold text-white leading-snug">
                &ldquo;{COMPANY.mission}&rdquo;
              </p>
              <p className="mt-4 text-sm text-white/80 font-light leading-relaxed">
                Building confidence with clinicians, hospital boards, and stockists through transparent documentation and batch-level integrity.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 4. 6 CORE VALUES AS AN EXPANDABLE NUMBERED LIST ─── */}
        <section className="py-20 sm:py-28 border-b border-[#1F3D33]/15">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0B996F] font-semibold block mb-2">
              04 / Institutional Ethics
            </span>
            <h2 className="text-fluid-h2 font-editorial font-bold text-[#1F3D33]">
              The Six Guiding Principles
            </h2>
            <p className="text-sm text-[#4A6056] font-light mt-2">
              Our cultural charter guiding every manufacturing partner review and customer dialogue.
            </p>
          </div>

          {/* Numbered List that Expands on Hover (No 6 Cards) */}
          <div className="divide-y divide-[#1F3D33]/15 border-y border-[#1F3D33]/15">
            {values.map((val, idx) => {
              const isExpanded = activeValue === idx;
              return (
                <div
                  key={val.num}
                  onMouseEnter={() => setActiveValue(idx)}
                  className="py-6 sm:py-8 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 sm:gap-10">
                      <span className="font-mono text-sm sm:text-base font-bold text-[#0B996F]">
                        {val.num}
                      </span>
                      <div>
                        <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#1F3D33] group-hover:text-[#0B996F] transition-colors">
                          {val.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#4A6056] font-mono mt-0.5">
                          {val.tagline}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#1F3D33]/40 group-hover:text-[#0B996F] transition-transform duration-300 ${
                        isExpanded ? "rotate-180 text-[#0B996F]" : ""
                      }`}
                    />
                  </div>

                  {isExpanded && (
                    <div className="mt-4 pl-12 sm:pl-16 pr-4 animate-in fade-in duration-200">
                      <p className="text-sm text-[#4A6056] font-light leading-relaxed max-w-2xl">
                        {val.desc}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── 5. PLAIN EDITORIAL COMPLIANCE COMMITMENT ─────────── */}
        <section className="py-20 sm:py-24">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0B996F] font-semibold block mb-2">
              05 / Statutory Commitment
            </span>
            <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-[#1F3D33] mb-4">
              Ethical Governance &amp; Statutory Standards
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#4A6056] font-light leading-relaxed">
              <p>
                Zilton Life Care Private Limited strictly abides by Indian drug regulatory frameworks, including the Drugs and Cosmetics Act, Schedule M good manufacturing practices, and standard pharmacopeial monographs.
              </p>
              <p>
                We do not engage in direct-to-consumer sales or promotional patient consultations. All promotional literature and clinical information are addressed exclusively to licensed medical professionals, healthcare institutions, and authorized pharmaceutical distributors.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1F3D33]/15 flex items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold text-[#1F3D33] hover:text-[#0B996F] transition-colors"
              >
                <span>Direct Inquiries to Mumbai Desk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
