import { Container } from "~/components/common/Container";
import { SectionHeading } from "~/components/common/SectionHeading";
import { QualityHero } from "~/components/sections/quality/QualityHero";
import { QualityPhilosophy } from "~/components/sections/quality/QualityPhilosophy";
import { QualityLifecycleFlow } from "~/components/sections/quality/QualityLifecycleFlow";
import { QualityDocumentation } from "~/components/sections/quality/QualityDocumentation";
import { ColdChainVisual } from "~/components/sections/quality/ColdChainVisual";
import { TraceabilityVisual } from "~/components/sections/quality/TraceabilityVisual";
import { PartnerStandards } from "~/components/sections/quality/PartnerStandards";
import { Button } from "~/components/common/Button";
import { ShieldCheck, ArrowRight } from "lucide-react";
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
  return (
    <div className="py-12 sm:py-20 bg-[#FAFCFA]">
      <Container>
        <SectionHeading
          eyebrow="Quality Assurance Framework"
          title="Engineered for Safety and Clinical Confidence"
          description="A comprehensive quality lifecycle ensuring that every formulation distributed by ZILTON LIFE CARE fulfills strict pharmaceutical standards and institutional trust."
          align="center"
          className="mb-12"
        />

        {/* 1. Split Hero with Orbital Precision Graphic */}
        <QualityHero />

        {/* 2. Forest Green Quality Philosophy & Charter */}
        <QualityPhilosophy />

        {/* 3. 4-Stage Actor-Separated Lifecycle Flow */}
        <QualityLifecycleFlow />

        {/* 4. 4-Quadrant Documented Governance */}
        <QualityDocumentation />

        {/* 5. Thermal Integrity & Formulation-Specific Storage (Cold-Chain vs CRT) */}
        <ColdChainVisual />

        {/* 6. End-to-End Batch Traceability Visual */}
        <TraceabilityVisual />

        {/* 7. Manufacturing & Regulatory Partnership Notice */}
        <div className="mt-16 sm:mt-24">
          <PartnerStandards />
        </div>

        {/* 8. Institutional Quality Audit Enquiries CTA */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#123D32] to-[#07845E] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-xl text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#DFF1E9] bg-white/10 px-3.5 py-1 rounded-full mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#07845E]" />
              Institutional Due Diligence
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Require batch certificates or technical documentation?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#DFF1E9]/85 font-light leading-relaxed">
              Our regulatory and quality desk is available to answer institutional technical enquiries, supply batch Certificates of Analysis, and verify packaging security specifications.
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
