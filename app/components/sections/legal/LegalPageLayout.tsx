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
        {/* Draft Notice Banner for Client & Legal Review */}
        <div className="mb-8 p-4.5 rounded-xl bg-[#DCEEE4]/80 border border-[#0D9E71]/30 flex items-start sm:items-center gap-3 text-xs sm:text-sm text-[#1B634E] shadow-2xs">
          <FileWarning className="w-5 h-5 text-[#0D9E71] shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong>Draft Legal Baseline for Counsel Review:</strong> This document represents a preliminary corporate template prepared for Zilton Life Care Private Limited and remains subject to formal verification by company management and qualified legal counsel prior to final publication.
          </p>
        </div>

        {/* Header */}
        <div className="max-w-3xl pb-8 border-b border-[#1B634E]/15">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#1B634E] bg-[#DCEEE4] px-3.5 py-1 rounded-full">
            Corporate Governance &amp; Legal
          </span>
          <h1
            className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#1B634E] tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </h1>
          <p className="mt-3 text-base text-[#3E6958] leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-[#3E6958]">
            <Calendar className="w-4 h-4 text-[#0D9E71]" />
            <span>Effective Date / Last Revised: {lastUpdated}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="mt-10 max-w-3xl space-y-6 text-[#3E6958]">
          {children}
        </div>
      </Container>
    </div>
  );
};
