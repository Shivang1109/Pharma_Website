import React from "react";
import { Award, CheckCircle } from "lucide-react";

export const QualityHero: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
      {/* Text Story */}
      <div className="lg:col-span-7">
        <span className="inline-block text-xs uppercase tracking-wider font-semibold text-[#087B59] bg-[#E8F4EE] px-3.5 py-1.5 rounded-full mb-4">
          Uncompromised Standards
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
          Delivering Quality, <br className="hidden sm:inline" />
          Building Enduring Trust.
        </h1>
        <p className="mt-5 text-base sm:text-lg text-[#46534C] leading-relaxed">
          At <strong>ZILTON LIFE CARE PRIVATE LIMITED</strong>, quality is not a slogan—it is the foundational prerequisite of every formulation we introduce to the market. We operate with a clear understanding that patient outcomes depend upon precision, purity, and uncompromising manufacturing ethics.
        </p>
        <p className="mt-4 text-sm sm:text-base text-[#46534C] leading-relaxed">
          Through strategic marketing collaborations with audited third-party manufacturing partners, we ensure that every batch of injectable, infusion, and nutritional product adheres to documented regulatory frameworks and strict laboratory testing protocols.
        </p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-gray-200 pt-6">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#087B59] shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-gray-800">
              cGMP Manufacturing
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#087B59] shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-gray-800">
              Batch Testing & COA
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#087B59] shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-gray-800">
              Preserved Cold Chain
            </span>
          </div>
        </div>
      </div>

      {/* Visual / Abstract Quality Graphic */}
      <div className="lg:col-span-5">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#173B30] to-[#087B59] p-8 sm:p-10 text-white shadow-xl overflow-hidden">
          {/* Subtle background circle decoration */}
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-[#E8F4EE] mb-6">
              <Award className="w-8 h-8 stroke-[1.5]" />
            </div>

            <h3 className="text-xl font-bold">
              Quality Assurance Philosophy
            </h3>

            <blockquote className="mt-4 text-sm text-[#E8F4EE]/90 italic leading-relaxed border-l-2 border-[#E8F4EE]/40 pl-4">
              &ldquo;Better Healthcare, Healthier Lives through accountable pharmaceutical governance, validated formulation safety, and disciplined supply chains.&rdquo;
            </blockquote>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-[#E8F4EE]/70 space-y-2">
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

