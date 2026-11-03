import { Container } from "~/components/common/Container";
import { SectionHeading } from "~/components/common/SectionHeading";
import { QualityHero } from "~/components/sections/quality/QualityHero";
import { QualityPillars } from "~/components/sections/quality/QualityPillars";
import { QualityLifecycleFlow } from "~/components/sections/quality/QualityLifecycleFlow";
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
    <div className="py-12 sm:py-20 bg-[#FAFCFA]">
      <Container>
        <SectionHeading
          eyebrow="Quality Assurance Framework"
          title="Engineered for Safety and Clinical Confidence"
          description="A comprehensive quality lifecycle ensuring that every formulation distributed by ZILTON LIFE CARE fulfills pharmaceutical standards."
          align="center"
          className="mb-12"
        />

        {/* Split Hero */}
        <QualityHero />

        {/* 3 Pillars */}
        <QualityPillars />

        {/* 4-Stage Lifecycle Flow */}
        <QualityLifecycleFlow />

        {/* Manufacturing & Regulatory Notice */}
        <PartnerStandards />

        {/* Quality Audit Enquiries CTA */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#123D32] to-[#07845E] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-xl text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#DFF1E9] bg-white/10 px-3.5 py-1 rounded-full mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              Institutional Due Diligence
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Require batch certificates or quality documentation?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#DFF1E9]/85 font-light leading-relaxed">
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
