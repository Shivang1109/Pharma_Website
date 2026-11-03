import React, { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, FileCheck, CheckCircle2, ShieldCheck, Thermometer, ChevronRight, Download } from "lucide-react";
import { ImageSlot } from "~/components/ui/ImageSlot";
import { DrawPath } from "~/components/motion/DrawPath";
import { generateRouteMeta } from "~/utils/seo";

export function meta() {
  return generateRouteMeta({
    title: "Quality Assurance & Standards",
    description:
      "Learn about ZILTON LIFE CARE's commitment to quality assurance, GMP-audited partner manufacturing, documented governance, and disciplined pharmaceutical distribution.",
    canonicalPath: "/quality",
  });
}

export default function QualityPage() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Product Master & Specification",
      subtitle: "Formulation Specification",
      desc: "Standardized formulation master data, regulatory labeling compliance, and unique SKU identification established prior to manufacturing authorization.",
      detail: "Cleanroom compounding protocols, approved pharmacopeial references, and primary packaging integrity standards.",
      slotKey: "quality01",
    },
    {
      num: "02",
      title: "Batch & Lot Assignment",
      subtitle: "Partner Production Execution",
      desc: "Qualified manufacturing partners assign distinct batch and lot numbers upon production, physically stamped with manufacturing and expiry dates.",
      detail: "Cleanroom environment monitoring, terminal sterilization records, and in-process quality control parameters.",
      slotKey: "quality02",
    },
    {
      num: "03",
      title: "Release Testing & CoA Records",
      subtitle: "Analytical Verification",
      desc: "Batch Manufacturing Records (BMR) and Certificate of Analysis (CoA) verified against analytical standards before commercial dispatch approval.",
      detail: "Assay quantification, sterility confirmation for parenteral lines, and particulate matter limits.",
      slotKey: "quality03",
    },
    {
      num: "04",
      title: "Institutional Dispatch & Handover",
      subtitle: "Traceable Distribution",
      desc: "Invoiced consignment documentation matches batch records down to regional distributors and hospital pharmacy receiving departments.",
      detail: "Controlled thermal logging, temperature excursion monitoring, and verified institutional delivery receipts.",
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
      desc: "Detailed compounding logs, autoclave sterilization cycles, and air filtration records maintained by partner plants.",
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
    <div className="py-12 sm:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── 1. SINGLE EDITORIAL HERO (No Duplicate Headings) ─── */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="font-mono text-xs uppercase tracking-widest text-[#0B996F] font-semibold block mb-3">
            01 / Quality Charter
          </span>
          <h1 className="text-fluid-hero font-editorial font-bold text-[#1F3D33] tracking-tight">
            Safety, Standards &amp; Verification
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#4A6056] font-light leading-relaxed">
            Our quality assurance framework guarantees that every parenteral and oral therapeutic distributed by ZILTON LIFE CARE satisfies statutory Indian pharmacopeial and cGMP standards.
          </p>
        </div>

        {/* ─── 2. PINNED BATCH GOVERNANCE STEPPER ───────────────── */}
        <section className="py-16 sm:py-20 border-t border-[#1F3D33]/15">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#0B996F] font-semibold block mb-2">
                02 / Linear Governance
              </span>
              <h2 className="text-fluid-h2 font-editorial font-bold text-[#1F3D33]">
                Four-Stage Batch Lifecycle
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#4A6056] font-mono max-w-xs">
              Physical batch documentation from synthesis partner to hospital delivery.
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
                        ? "bg-[#1F3D33] text-[#F6F4EE] border-[#1F3D33] shadow-lg"
                        : "bg-[#FCFAF5] text-[#1F3D33] border-[#1F3D33]/15 hover:border-[#0B996F]/40"
                    }`}
                  >
                    <span
                      className={`font-mono text-sm font-bold px-2.5 py-1 rounded-md ${
                        isActive ? "bg-[#0B996F] text-white" : "bg-[#1F3D33]/10 text-[#1F3D33]"
                      }`}
                    >
                      {step.num}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-editorial text-lg font-bold">
                          {step.title}
                        </h3>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform ${
                            isActive ? "rotate-90 text-[#0B996F]" : "text-[#4A6056]"
                          }`}
                        />
                      </div>
                      <p
                        className={`text-xs mt-1 font-mono uppercase tracking-wider ${
                          isActive ? "text-[#0B996F]" : "text-[#4A6056]"
                        }`}
                      >
                        {step.subtitle}
                      </p>
                      {isActive && (
                        <p className="text-xs sm:text-sm text-[#F6F4EE]/80 mt-3 font-light leading-relaxed animate-in fade-in duration-200">
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
              <div className="p-6 sm:p-8 rounded-3xl bg-[#FCFAF5] border border-[#1F3D33]/15 shadow-sm space-y-6">
                <ImageSlot
                  slotKey={steps[activeStep].slotKey}
                  ratio="16/9"
                  caption={`Audit checkpoint: ${steps[activeStep].title}`}
                />

                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#0B996F] font-bold block mb-1">
                    VERIFICATION PROTOCOL
                  </span>
                  <h4 className="font-editorial text-xl font-bold text-[#1F3D33]">
                    {steps[activeStep].title}
                  </h4>
                  <p className="text-sm text-[#4A6056] font-light leading-relaxed mt-2">
                    {steps[activeStep].detail}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1F3D33]/10 flex items-center justify-between font-mono text-xs text-[#4A6056]">
                  <span>GOVERNANCE STATUS</span>
                  <span className="text-[#0B996F] font-bold">STATUTORY AUDIT ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. COLD-CHAIN INTEGRITY & THERMAL CONTROL ──────── */}
        <section className="py-16 sm:py-24 border-t border-[#1F3D33]/15">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0B996F] font-semibold block mb-2">
              03 / Thermal Integrity
            </span>
            <h2 className="text-fluid-h2 font-editorial font-bold text-[#1F3D33]">
              Cold-Chain Precision (2°C – 8°C)
            </h2>
            <p className="text-sm text-[#4A6056] font-light leading-relaxed mt-3">
              Storage and transport conditions are strictly formulation-specific. Temperature-sensitive parenterals are monitored end-to-end to preserve therapeutic stability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FCFAF5] rounded-3xl border border-[#1F3D33]/15 p-8 sm:p-12">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-[#0B996F] font-mono text-xs uppercase tracking-wider font-bold">
                <Thermometer className="w-4 h-4" />
                <span>Calibrated Temperature Monitoring</span>
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#1F3D33]">
                Zero-Excursion Distribution Protocol
              </h3>
              <p className="text-sm text-[#4A6056] font-light leading-relaxed">
                Refrigerated transit containers equipped with temperature loggers are deployed for sensitive carbapenems and antifungal injections. Handover receipts are validated before institutional hospital intake.
              </p>

              {/* Animated SVG Thermal Line */}
              <div className="pt-4">
                <span className="font-mono text-[11px] text-[#1F3D33]/60 block mb-2">
                  STABILITY CURVE · STEADY 4.2°C MEAN
                </span>
                <svg className="w-full h-16 bg-white rounded-xl border border-[#1F3D33]/10 p-2">
                  <path
                    d="M 10 30 Q 80 25 150 32 T 300 28 T 450 31 T 600 29"
                    fill="none"
                    stroke="#0B996F"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <line x1="10" y1="15" x2="600" y2="15" stroke="#1F3D33" strokeOpacity="0.1" strokeDasharray="4 4" />
                  <line x1="10" y1="45" x2="600" y2="45" stroke="#1F3D33" strokeOpacity="0.1" strokeDasharray="4 4" />
                </svg>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ImageSlot
                slotKey="quality03"
                ratio="4/3"
                caption="Refrigerated logistics staging and thermal validation."
              />
            </div>
          </div>
        </section>

        {/* ─── 4. COMPLIANCE DOCUMENTS AS AN EDITORIAL LIST (No Cards) ─── */}
        <section className="py-16 sm:py-24 border-t border-[#1F3D33]/15">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0B996F] font-semibold block mb-2">
              04 / Technical Dossiers
            </span>
            <h2 className="text-fluid-h2 font-editorial font-bold text-[#1F3D33]">
              Regulatory &amp; Analytical Documentation
            </h2>
            <p className="text-sm text-[#4A6056] font-light leading-relaxed mt-2">
              Documentation is furnished to hospital procurement officers and institutional committees upon formal due-diligence request.
            </p>
          </div>

          {/* Large Row Editorial List */}
          <div className="divide-y divide-[#1F3D33]/15 border-y border-[#1F3D33]/15">
            {complianceDocs.map((doc) => (
              <div
                key={doc.code}
                className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-[#FCFAF5] transition-colors px-2 sm:px-4 rounded-xl"
              >
                {/* Code & Scope */}
                <div className="md:col-span-3 flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#0B996F] bg-[#DFEAE2] px-2.5 py-1 rounded">
                    {doc.code}
                  </span>
                  <span className="font-mono text-xs text-[#4A6056] uppercase">
                    {doc.scope}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="md:col-span-6">
                  <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#1F3D33] group-hover:text-[#0B996F] transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A6056] font-light mt-1 leading-relaxed">
                    {doc.desc}
                  </p>
                </div>

                {/* Formal Request Action */}
                <div className="md:col-span-3 flex justify-start md:justify-end">
                  <Link
                    to="/contact?type=quality-docs"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-semibold text-[#1F3D33] group-hover:text-[#0B996F] transition-colors"
                  >
                    <span>Request File</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 5. INSTITUTIONAL CTA ─────────────────────────────── */}
        <div className="my-16 p-8 sm:p-12 rounded-3xl bg-[#1F3D33] text-[#F6F4EE] flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-xl text-center md:text-left">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#0B996F] font-bold block mb-2">
              Technical Inquiries
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white leading-tight">
              Require batch certificates or regulatory dossiers?
            </h3>
            <p className="text-sm text-white/80 font-light mt-2 leading-relaxed">
              Our regulatory desk coordinates official CoA dispatches and facility qualification credentials.
            </p>
          </div>

          <Link
            to="/contact?type=quality-docs"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0B996F] hover:bg-white text-white hover:text-[#1F3D33] font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200 shadow-md shrink-0"
          >
            <span>Contact Quality Desk</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
