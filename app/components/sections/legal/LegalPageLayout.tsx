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
    <div className="py-12 sm:py-20 bg-[#FAFCFA]">
      <Container>
        {/* Draft Notice Banner */}
        <div className="mb-8 p-4 rounded-2xl bg-[#DFF1E9]/50 border border-[#07845E]/20 flex items-start sm:items-center gap-3 text-xs sm:text-sm text-[#123D32]">
          <FileWarning className="w-5 h-5 text-[#07845E] shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong>Draft Notice:</strong> This document is a preliminary baseline prepared for ZILTON LIFE CARE PRIVATE LIMITED and remains subject to formal legal review and client approval prior to production release.
          </p>
        </div>

        {/* Header */}
        <div className="max-w-3xl pb-8 border-b border-[#E4EBE6]">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#123D32] bg-[#DFF1E9] px-3.5 py-1 rounded-full">
            Corporate Governance &amp; Legal
          </span>
          <h1
            className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#123D32] tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </h1>
          <p className="mt-3 text-base text-[#53635C] leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-[#53635C]">
            <Calendar className="w-4 h-4 text-[#07845E]" />
            <span>Effective Date / Last Revised: {lastUpdated}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="mt-10 max-w-3xl space-y-6 text-[#53635C]">
          {children}
        </div>
      </Container>
    </div>
  );
};
