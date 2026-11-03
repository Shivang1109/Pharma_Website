import React from "react";
import { Container } from "~/components/common/Container";
import { FileWarning, Calendar } from "lucide-react";

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({
  title,
  subtitle,
  lastUpdated,
  children,
}) => {
  return (
    <div className="py-12 sm:py-16 bg-[#FAFCFB]">
      <Container>
        {/* Draft Notice Banner */}
        <div className="mb-8 p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start sm:items-center gap-3 text-xs sm:text-sm text-amber-900">
          <FileWarning className="w-5 h-5 text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong>Draft Notice:</strong> This document is a preliminary baseline prepared for ZILTON LIFE CARE PRIVATE LIMITED and remains subject to formal legal review and client approval prior to production release.
          </p>
        </div>

        {/* Header */}
        <div className="max-w-3xl pb-8 border-b border-gray-200">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#087B59] bg-[#E8F4EE] px-3 py-1 rounded-full">
            Corporate Governance & Legal
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {title}
          </h1>
          <p className="mt-3 text-base text-[#46534C] leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span>Effective Date / Last Revised: {lastUpdated}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="mt-10 max-w-3xl space-y-6">
          {children}
        </div>
      </Container>
    </div>
  );
};
