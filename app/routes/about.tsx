import type { Route } from "./+types/about";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Target,
  HeartHandshake,
  Award,
  Sparkles,
  Building2,
  MapPin,
  Clock,
  Phone,
  FileCheck2,
} from "lucide-react";
import { Container } from "~/components/common/Container";
import { SectionHeading } from "~/components/common/SectionHeading";
import { Button } from "~/components/common/Button";
import { StatisticCard } from "~/components/common/StatisticCard";
import { CorporateGovernanceGraphic } from "~/components/sections/about/CorporateGovernanceGraphic";
import { COMPANY } from "~/data/company";
import { generateRouteMeta } from "~/utils/seo";

export function meta() {
  return generateRouteMeta({
    title: "About Us — Corporate Governance, Vision & Ethics",
    description:
      "Discover Zilton Life Care Private Limited — our corporate vision, healthcare mission, core values, and uncompromising dedication to pharmaceutical quality standards.",
    canonicalPath: "/about",
  });
}

/* ─── Section 1: Page Hero ───────────────────────────────────── */
function PageHero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#DFF1E9]/35 via-[#FAFCFA] to-[#FAFCFA] py-16 sm:py-24"
      aria-label="About page hero"
    >
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#07845E]/5 blur-3xl"
        aria-hidden="true"
      />
      <Container>
        <div className="max-w-3xl luxury-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-[#E4EBE6] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#123D32] mb-6 shadow-2xs">
            <span className="h-2 w-2 rounded-full bg-[#07845E] animate-pulse" />
            <span>Corporate Identity &amp; Governance</span>
          </div>

          <h1
            className="mb-6 text-4xl font-extrabold text-[#123D32] sm:text-5xl lg:text-6xl tracking-tight leading-[1.12]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Committed to Integrity in Pharmaceutical Healthcare
          </h1>

          <p className="text-base sm:text-lg text-[#53635C] leading-relaxed max-w-2xl font-normal">
            Zilton Life Care Private Limited is a specialized pharmaceutical marketing organisation based in Mumbai. We bridge certified cGMP drug manufacturing with hospital intensive care units and healthcare providers across India.
          </p>

          {/* Quick Pillar Badges */}
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold text-[#123D32]">
            <span className="px-3 py-1.5 rounded-xl bg-white border border-[#E4EBE6] shadow-2xs flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#07845E]" />
              Bandra West, Mumbai
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white border border-[#E4EBE6] shadow-2xs flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#07845E]" />
              Schedule M &amp; cGMP Mandate
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white border border-[#E4EBE6] shadow-2xs flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#07845E]" />
              Hospital ICU Therapeutics
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─── Section 2: Company Introduction ────────────────────────── */
function CompanyIntro() {
  return (
    <section className="py-20 sm:py-28 bg-white border-y border-[#E4EBE6]" aria-labelledby="company-intro-heading">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Dedicated Corporate Governance Graphic */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <CorporateGovernanceGraphic />
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#DFF1E9] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#123D32] mb-4">
              Our Foundations
            </span>

            <h2
              id="company-intro-heading"
              className="mb-6 text-3xl font-extrabold text-[#123D32] sm:text-4xl tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Pharmaceutical Marketing Guided by Clinical Precision
            </h2>

            <div className="space-y-4 text-base text-[#53635C] leading-relaxed">
              <p>
                Headquartered in Mumbai, Maharashtra, Zilton Life Care Private Limited was founded on the conviction that healthcare distribution must be synonymous with uncompromised therapeutic efficacy and ethical transparency.
              </p>
              <p>
                Our operational portfolio focuses strategically on three critical hospital therapeutic segments: <strong>Critical Care Injections</strong> (carbapenems and broad-spectrum antibiotics), <strong>Clinical Nutrition IV</strong> infusions, and <strong>Nutritional Therapeutic Sachets</strong>.
              </p>
              <p>
                Every formulation we market is sourced strictly from audited contract manufacturing facilities compliant with current Good Manufacturing Practices (cGMP) and distributed under strict Good Distribution Practices (GDP) to protect cold-chain and molecular integrity.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E4EBE6] grid grid-cols-2 gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#53635C] font-semibold block">Headquarters</span>
                <p className="text-sm font-bold text-[#123D32] mt-0.5">Mumbai, Maharashtra, India</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#53635C] font-semibold block">Operating Model</span>
                <p className="text-sm font-bold text-[#07845E] mt-0.5">Audited cGMP Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─── Section 3: Vision & Mission ────────────────────────────── */
function VisionMission() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFCFA]" aria-labelledby="vm-heading">
      <Container>
        <SectionHeading
          eyebrow="Our Guiding Light"
          title="Vision &amp; Mission Statements"
          description="The institutional commitments that guide our partnership decisions, product portfolio additions, and client relations."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Vision Card */}
          <div className="luxury-card rounded-3xl border border-[#E4EBE6] bg-white p-8 sm:p-12 hover-lift">
            <div className="flex items-center justify-between mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#07845E] bg-[#DFF1E9] px-3.5 py-1 rounded-full">
                <Target className="w-3.5 h-3.5 text-[#07845E]" />
                Corporate Vision
              </span>
            </div>
            <p
              className="text-2xl sm:text-3xl font-extrabold text-[#123D32] leading-snug tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              "{COMPANY.vision}"
            </p>
            <p className="mt-5 text-sm sm:text-base text-[#53635C] leading-relaxed">
              We envision an accessible, high-standard healthcare system where clinicians and intensive care specialists have immediate access to high-purity pharmaceutical solutions without supply vulnerabilities.
            </p>
          </div>

          {/* Mission Card */}
          <div className="luxury-card rounded-3xl border border-[#E4EBE6] bg-white p-8 sm:p-12 hover-lift">
            <div className="flex items-center justify-between mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#07845E] bg-[#DFF1E9] px-3.5 py-1 rounded-full">
                <HeartHandshake className="w-3.5 h-3.5 text-[#07845E]" />
                Corporate Mission
              </span>
            </div>
            <p
              className="text-2xl sm:text-3xl font-extrabold text-[#123D32] leading-snug tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              "{COMPANY.mission}"
            </p>
            <p className="mt-5 text-sm sm:text-base text-[#53635C] leading-relaxed">
              Every partnership we forge, batch we approve, and distribution channel we support is governed by an absolute dedication to clinical quality and patient outcomes.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─── Section 4: Core Values (With Individual Icons) ─────────── */
const VALUE_ICONS = [
  ShieldCheck,    // Quality
  CheckCircle2,   // Integrity
  HeartHandshake, // Trust
  Sparkles,       // Innovation
  Target,         // Commitment
  Award,          // Excellence
];

function CoreValues() {
  return (
    <section className="py-20 sm:py-28 bg-[#F2F7F4] border-y border-[#E4EBE6]" aria-labelledby="values-heading">
      <Container>
        <SectionHeading
          eyebrow="Ethical Governance"
          title="Our Six Pillars of Operation"
          description="These foundational principles guide our team, govern commercial partnerships, and ensure compliance at every touchpoint."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-container">
          {COMPANY.values.map((value, i) => {
            const Icon = VALUE_ICONS[i] || ShieldCheck;
            return (
              <div
                key={value.label}
                className="luxury-card flex flex-col justify-between rounded-3xl border border-[#E4EBE6] bg-white p-8 hover-lift"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DFF1E9] text-[#07845E] shadow-2xs">
                      <Icon className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span
                      className="text-2xl font-black text-[#DFF1E9] font-mono"
                      aria-hidden="true"
                    >
                      0{i + 1}
                    </span>
                  </div>

                  <h3
                    className="mb-2 text-xl font-bold text-[#123D32]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {value.label}
                  </h3>
                  <p className="text-sm text-[#53635C] leading-relaxed font-normal">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ─── Section 5: Compliance & Quality Highlights ─────────────── */
function ComplianceHighlights() {
  return (
    <section className="py-20 sm:py-28 bg-white" aria-labelledby="compliance-heading">
      <Container>
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Compliance &amp; Governance"
            title="Institutional Trust &amp; Verification"
            description="Our distribution standards are designed to provide complete regulatory confidence to hospital boards and procurement agencies."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <StatisticCard
              value="cGMP"
              label="Manufacturing Mandate"
              sublabel="Certified Facilities Only"
            />
            <StatisticCard
              value="COA"
              label="Standard Documentation"
              sublabel="Batch Purity Certified"
            />
            <StatisticCard
              value="GDP"
              label="Distribution Rigor"
              sublabel="Controlled Transportation"
            />
          </div>

          <div className="rounded-3xl border border-[#E4EBE6] bg-[#FAFCFA] p-8 sm:p-10 shadow-xs">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#DFF1E9] text-[#07845E] flex items-center justify-center shrink-0 mt-0.5">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h4
                  className="text-base sm:text-lg font-bold text-[#123D32]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Regulatory Compliance Commitment
                </h4>
                <p className="text-sm text-[#53635C] leading-relaxed">
                  Zilton Life Care adheres strictly to the regulatory guidelines promulgated by national and state drug control authorities. We maintain full audit trails, licensed storage conditions, and strict adherence to Schedule M manufacturing partner requirements.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#07845E]">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Complete Batch Documentation
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Licensed Wholesale Logistics
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─── Section 6: Commercial Collaboration CTA ────────────────── */
function AboutCTA() {
  return (
    <section className="py-20 sm:py-24 bg-[#123D32] text-white" aria-labelledby="about-cta-heading">
      <Container>
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#DFF1E9] bg-white/10 px-4 py-1.5 rounded-full">
            Commercial Collaboration
          </span>

          <h2
            id="about-cta-heading"
            className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Partner With Zilton Life Care
          </h2>

          <p className="text-base sm:text-lg text-[#DFF1E9]/85 leading-relaxed font-light">
            We actively seek long-term relationships with regional pharmaceutical distributors, institutional stockists, and healthcare hospital chains who share our ethos of clinical excellence.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <Button to="/contact" size="lg" variant="secondary">
              Contact Commercial Team <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button
              to="/products"
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white"
            >
              Review Product Formulations
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─── Page Export ────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      <PageHero />
      <CompanyIntro />
      <VisionMission />
      <CoreValues />
      <ComplianceHighlights />
      <AboutCTA />
    </>
  );
}
