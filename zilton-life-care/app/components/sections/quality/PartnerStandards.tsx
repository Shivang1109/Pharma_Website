import React from "react";
import { Building2, FileCheck2, HelpCircle } from "lucide-react";

export const PartnerStandards: React.FC = () => {
  return (
    <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gray-50 border border-gray-200">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gray-200">
        <div>
          <span className="inline-block text-xs uppercase tracking-wider font-semibold text-[#087B59] mb-2">
            Governance & Transparency
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
            Manufacturing Partnerships & Regulatory Statement
          </h3>
        </div>
        <div className="shrink-0">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
            <FileCheck2 className="w-4 h-4 text-emerald-700" />
            Verified Compliance Standard
          </span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-[#46534C] leading-relaxed">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#087B59]" />
            Corporate Operating Model
          </h4>
          <p>
            <strong>ZILTON LIFE CARE PRIVATE LIMITED</strong> operates as a specialized pharmaceutical marketing organisation. We collaborate with licensed, state-of-the-art third-party contract manufacturers equipped with validated formulation technology, cleanroom standards, and automated packaging systems.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#087B59]" />
            Verification & Regulatory Substantiation
          </h4>
          <p>
            In accordance with Indian pharmaceutical regulations and corporate ethics, site-specific licences, facility accreditations, and batch analytical records are maintained in our technical archives and made available to institutional procurement partners upon request.
          </p>
        </div>
      </div>
    </div>
  );
};

