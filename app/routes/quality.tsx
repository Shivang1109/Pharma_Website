import { Container } from "~/components/common/Container";
import { SectionHeading } from "~/components/common/SectionHeading";
import { QualityHero } from "~/components/sections/quality/QualityHero";
import { QualityPillars } from "~/components/sections/quality/QualityPillars";
import { PartnerStandards } from "~/components/sections/quality/PartnerStandards";
import { Button } from "~/components/common/Button";
import { ShieldCheck, ArrowRight } from "lucide-react";

export function meta() {
  return [
    { title: "Quality Assurance & Standards | ZILTON LIFE CARE PRIVATE LIMITED" },
    {
      name: "description",
      content:
        "Learn about ZILTON LIFE CARE's commitment to quality assurance, GMP-audited partner manufacturing, and disciplined pharmaceutical distribution.",
    },
  ];
}

export default function QualityPage() {
  return (
    <div className="py-12 sm:py-16 bg-[#FAFCFB]">
      <Container>
        <SectionHeading
          eyebrow="Quality Assurance Framework"
          title="Engineered for Safety and Clinical Confidence"
          description="A comprehensive quality lifecycle ensuring that every formulation distributed by ZILTON LIFE CARE fulfills pharmaceutical standards."
          align="center"
        />

        {/* Split Hero */}
        <QualityHero />

        {/* 3 Pillars */}
        <QualityPillars />

        {/* Manufacturing & Regulatory Notice */}
        <PartnerStandards />

        {/* Quality Audit Enquiries CTA */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#173B30] to-[#087B59] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="max-w-xl text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#E8F4EE] bg-white/10 px-3 py-1 rounded-full mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              Institutional Due Diligence
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Require batch certificates or quality documentation?
            </h3>
            <p className="mt-2 text-sm text-[#E8F4EE]/90">
              Our regulatory and quality desk is available to answer technical enquiries, supply COAs, and coordinate facility inspection records.
            </p>
          </div>
          <div className="shrink-0">
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
              className="font-semibold shadow-md flex items-center gap-2"
            >
              Contact Quality Desk
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
