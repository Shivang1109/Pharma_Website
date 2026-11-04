import React, { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Thermometer, ChevronRight } from "lucide-react";
import { ImageSlot } from "~/components/ui/ImageSlot";
import { IMAGES } from "~/data/images";
import { generateRouteMeta } from "~/utils/seo";

export function meta() {
  return generateRouteMeta({
    title: "Quality Assurance | Zilton Life Care",
    description:
      "Learn about Zilton Life Care's quality assurance framework, Schedule M partner audits, batch documentation, and cold-chain distribution standards.",
    canonicalPath: "/quality",
  });
}

export default function QualityPage() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Product Master & Specification",
      subtitle: "Formulation Parameters",
      desc: "Standardized formulation master data, regulatory labeling compliance, and verified pharmacopeial parameters established prior to manufacturing authorization.",
      detail: "Cleanroom compounding protocols, approved pharmacopeial references, and primary packaging integrity specifications.",
      slotKey: "quality01",
    },
    {
      num: "02",
      title: "Batch & Lot Assignment",
      subtitle: "Production Execution",
      desc: "Contract manufacturing partners assign distinct batch and lot numbers upon production, physically printed with manufacturing and expiry dates.",
      detail: "Cleanroom environment validation, sterilization records, and in-process quality control checkpoints.",
      slotKey: "quality02",
    },
    {
      num: "03",
      title: "Release Testing & CoA Records",
      subtitle: "Analytical Verification",
      desc: "Batch Manufacturing Records (BMR) and Certificate of Analysis (CoA) verified against analytical standards before commercial dispatch approval.",
      detail: "Active assay quantification, sterility confirmation for parenteral lines, and particulate matter evaluations.",
      slotKey: "quality03",
    },
    {
      num: "04",
      title: "Institutional Dispatch & Handover",
      subtitle: "Traceable Distribution",
      desc: "Invoiced consignment documentation matches batch records down to regional distributors and hospital pharmacy receiving departments.",
      detail: "Controlled thermal logging, insulated shipping for temperature-sensitive vials, and signed hospital delivery receipts.",
      slotKey: "quality04",
    },
  ];

  const complianceDocs = [
    {
      code: "DOC-COA",
      title: "Certificate of Analysis (CoA)",
      scope: "Batch Purity & Active Assay",
      desc: "Quantitative HPLC assay reports, physicochemical limits, endotoxin levels, and sterility validation for released lots.",
    },
    {
      code: "DOC-BMR",
      title: "Batch Manufacturing Records (BMR)",
      scope: "Production Line Traceability",
      desc: "Detailed compounding logs, autoclave sterilization cycles, and air filtration records maintained by manufacturing partners.",
    },
    {
      code: "DOC-GMP",
      title: "Partner Site Accreditations",
      scope: "Statutory Manufacturing Licenses",
      desc: "Schedule M credentials, state drug regulatory licenses, and cleanroom air handling certifications.",
    },
    {
      code: "DOC-REG",
      title: "Product Regulatory Dossiers",
      scope: "Prescribing & Packaging Literature",
      desc: "Approved package insert specifications, stability study summaries, and barcode verification master data.",
    },
  ];

  return (
    <div className="w-full">
      {/* ─── 1. FULL-WIDTH INNER-PAGE HERO BANNER (~42vh) ─────────── */}
      <section className="relative w-full overflow-hidden min-h-[36vh] max-h-[44vh] flex flex-col justify-end md:justify-center">
        {IMAGES.quality01 && (
          <img
            src={IMAGES.quality01}
            alt="Pharmaceutical analytical laboratory and quality testing"
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
              Quality Assurance Charter
            </span>
            <h1 className="text-3xl sm:text-5xl font-editorial font-bold text-white tracking-tight leading-none">
              Safety, Standards &amp; Verification
            </h1>
            <p className="mt-3 text-sm sm:text-base text-white/90 leading-relaxed max-w-xl font-light">
              Our quality assurance framework guarantees that every parenteral and oral therapeutic distributed by Zilton Life Care satisfies statutory Indian pharmacopeial and Schedule M standards.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. 4-STAGE BATCH LIFECYCLE STEPPER ───────────────── */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <section className="mb-16 sm:mb-20">
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-fluid-h2 font-editorial font-bold text-[#1B634E]">
                Four-Stage Batch Lifecycle
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#3E6958] max-w-xs font-light">
              Physical batch documentation tracking from partner plant to hospital delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Step Selection Buttons */}
            <div className="lg:col-span-6 space-y-3">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.num}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-4 ${
                      isActive
                        ? "bg-[#1B634E] text-[#FAFCFA] border-[#1B634E] shadow-lg"
                        : "bg-[#FFFFFF] text-[#1B634E] border-[#1B634E]/15 hover:border-[#0D9E71]/40"
                    }`}
                  >
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                        isActive ? "bg-[#0D9E71] text-white" : "bg-[#1B634E]/10 text-[#1B634E]"
                      }`}
                    >
                      {step.num}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`font-editorial text-lg font-bold leading-tight ${
                            isActive ? "text-white" : "text-[#1B634E]"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform ${
                            isActive ? "rotate-90 text-[#0D9E71]" : "text-[#3E6958]"
                          }`}
                        />
                      </div>
                      <p
                        className={`text-xs mt-1.5 font-medium ${
                          isActive ? "text-[#DCEEE4]" : "text-[#3E6958]"
                        }`}
                      >
                        {step.subtitle}
                      </p>
                      {isActive && (
                        <p className="text-xs sm:text-sm text-[#FAFCFA]/90 mt-3 font-light leading-relaxed animate-in fade-in duration-200">
                          {step.desc}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Step Visual & Detail Card */}
            <div className="lg:col-span-6 sticky top-28">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#1B634E]/15 shadow-sm space-y-5">
                <ImageSlot
                  slotKey={steps[activeStep].slotKey}
                  ratio="16/9"
                  caption={`Process step: ${steps[activeStep].title}`}
                />

                <div>
                  <span className="text-xs text-[#0D9E71] font-semibold block mb-1">
                    Verification Standard
                  </span>
                  <h4 className="font-editorial text-xl font-bold text-[#1B634E]">
                    {steps[activeStep].title}
                  </h4>
                  <p className="text-sm text-[#3E6958] font-light leading-relaxed mt-2">
                    {steps[activeStep].detail}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1B634E]/10 flex items-center justify-between text-xs text-[#3E6958]">
                  <span>Partner Compliance</span>
                  <span className="text-[#0D9E71] font-semibold">Partner Manufacturing Standards</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ─── 3. MID-PAGE QUALITY BAND: FULL-WIDTH EXISTING IMAGE OVERLAY ─── */}
      <section className="relative w-full overflow-hidden min-h-[40vh] my-10 flex flex-col justify-center">
        {IMAGES.quality03 && (
          <img
            src={IMAGES.quality03}
            alt="Cold-chain temperature-controlled pharmaceutical distribution"
            className="absolute inset-0 w-full h-full object-cover object-center select-none"
            loading="lazy"
            decoding="async"
          />
        )}

        {/* Directional Green Scrim */}
        <div
          className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#123D32]/95 via-[#165442]/85 to-transparent/30"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-white">
          <div className="max-w-2xl text-left space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[#DCEEE4] text-xs font-semibold border border-white/10">
              <Thermometer className="w-3.5 h-3.5 text-[#0D9E71]" />
              <span>Thermal Preservation</span>
            </span>

            <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-white tracking-tight">
              Cold-Chain Precision (2°C – 8°C)
            </h2>

            <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed">
              Storage and transport conditions are formulation-specific. Temperature-sensitive parenterals are monitored end-to-end to protect therapeutic stability from audited partner plants to hospital receiving bays.
            </p>

            {/* Thermal Line Indicator */}
            <div className="pt-3 max-w-lg">
              <span className="text-xs text-[#DCEEE4] block mb-2 font-medium">
                Validated 2°C – 8°C Storage Standard
              </span>
              <svg className="w-full h-14 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-2" aria-hidden="true">
                <path
                  d="M 10 26 Q 80 20 150 28 T 300 24 T 450 27 T 600 25"
                  fill="none"
                  stroke="#0D9E71"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <line x1="10" y1="12" x2="600" y2="12" stroke="white" strokeOpacity="0.2" strokeDasharray="4 4" />
                <line x1="10" y1="40" x2="600" y2="40" stroke="white" strokeOpacity="0.2" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. COMPLIANCE & REGULATORY DOCUMENTATION ─────────── */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <section className="mb-14 sm:mb-18">
          <div className="max-w-2xl mb-10">
            <h2 className="text-fluid-h2 font-editorial font-bold text-[#1B634E]">
              Verification Documentation
            </h2>
            <p className="text-sm text-[#3E6958] font-light leading-relaxed mt-2">
              Institutional purchasers and hospital drug committees can request official batch documentation and manufacturing dossiers for all commercial lines.
            </p>
          </div>

          {/* Editorial Document List */}
          <div className="divide-y divide-[#1B634E]/10 border-y border-[#1B634E]/10">
            {complianceDocs.map((doc) => (
              <div
                key={doc.code}
                className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-[#F3F6F4]/50 px-4 rounded-xl transition-colors duration-200"
              >
                {/* Code & Scope */}
                <div className="md:col-span-3">
                  <span className="text-xs font-bold text-[#0D9E71] bg-[#DCEEE4] px-2.5 py-1 rounded">
                    {doc.code}
                  </span>
                  <span className="block text-xs text-[#3E6958] mt-2 font-medium">
                    {doc.scope}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="md:col-span-6">
                  <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#1B634E] group-hover:text-[#0D9E71] transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3E6958] font-light mt-1 leading-relaxed">
                    {doc.desc}
                  </p>
                </div>

                {/* Formal Request Action */}
                <div className="md:col-span-3 flex justify-start md:justify-end">
                  <Link
                    to="/contact?type=quality-docs"
                    className="inline-flex items-center text-xs uppercase tracking-wider font-semibold text-[#1B634E] group-hover:text-[#0D9E71] transition-colors"
                  >
                    <span>Request file</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 5. INSTITUTIONAL CTA PANEL ───────────────────────── */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#1B634E] text-[#FAFCFA] flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white leading-tight">
              Require batch certificates or regulatory dossiers?
            </h3>
            <p className="text-sm text-white/85 font-light mt-2 leading-relaxed">
              Our regulatory desk coordinates official CoA dispatches and facility qualification credentials for hospital pharmacy committees.
            </p>
          </div>

          <Link
            to="/contact?type=quality-docs"
            className="inline-flex items-center px-7 py-3.5 rounded-full bg-white text-[#1B634E] hover:bg-[#DCEEE4] text-xs uppercase tracking-wider font-bold transition-all duration-200 shadow-md shrink-0"
          >
            <span>Contact quality desk</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
