import React from "react";
import { Award, CheckCircle } from "lucide-react";

export const QualityHero: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
      {/* Text Story */}
      <div className="lg:col-span-7">
        <span className="inline-block text-xs uppercase tracking-wider font-semibold text-[#123D32] bg-[#DFF1E9] px-3.5 py-1.5 rounded-full mb-4">
          Uncompromised Standards
        </span>
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123D32] tracking-tight leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Delivering Quality, <br className="hidden sm:inline" />
          Building Enduring Trust.
        </h1>
        <p className="mt-5 text-base sm:text-lg text-[#53635C] leading-relaxed">
          At <strong>ZILTON LIFE CARE PRIVATE LIMITED</strong>, quality is not a slogan—it is the foundational prerequisite of every formulation we introduce to the market. We operate with a clear understanding that patient outcomes depend upon precision, purity, and uncompromising manufacturing ethics.
        </p>
        <p className="mt-4 text-sm sm:text-base text-[#53635C] leading-relaxed">
          Through strategic marketing collaborations with audited third-party manufacturing partners, we ensure that every batch of injectable, infusion, and nutritional product adheres to documented regulatory frameworks and strict laboratory testing protocols.
        </p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-[#E4EBE6] pt-6">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#07845E] shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-[#123D32]">
              cGMP Manufacturing
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#07845E] shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-[#123D32]">
              Batch Testing &amp; COA
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#07845E] shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-[#123D32]">
              Preserved Cold Chain
            </span>
          </div>
        </div>
      </div>

      {/* Visual / Abstract Quality Graphic */}
      <div className="lg:col-span-5">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#123D32] to-[#07845E] p-8 sm:p-10 text-white shadow-xl overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-[#DFF1E9] mb-6">
              <Award className="w-8 h-8 stroke-[1.5]" />
            </div>

            <h3 className="text-xl font-bold">
              Quality Assurance Philosophy
            </h3>

            <blockquote className="mt-4 text-sm text-[#DFF1E9]/90 italic leading-relaxed border-l-2 border-[#DFF1E9]/40 pl-4">
              &ldquo;Better Healthcare, Healthier Lives through accountable pharmaceutical governance, validated formulation safety, and disciplined supply chains.&rdquo;
            </blockquote>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-[#DFF1E9]/70 space-y-2">
              <div className="flex items-center justify-between">
                <span>Compliance Benchmark</span>
                <span className="text-white font-medium">Schedule M / cGMP Audited</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Batch Release Protocol</span>
                <span className="text-white font-medium">100% Certificate of Analysis</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Distribution Model</span>
                <span className="text-white font-medium">GDP Compliant Logistics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
