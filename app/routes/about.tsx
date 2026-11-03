import type { Route } from "./+types/about";
import { ArrowRight, CheckCircle2, ShieldCheck, Target, HeartHandshake, Award } from "lucide-react";
import { Container } from "~/components/common/Container";
import { SectionHeading } from "~/components/common/SectionHeading";
import { Button } from "~/components/common/Button";
import { StatisticCard } from "~/components/common/StatisticCard";
import { COMPANY } from "~/data/company";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Zilton Life Care — Corporate Governance, Vision & Ethics" },
    {
      name: "description",
      content:
        "Discover Zilton Life Care Private Limited — our corporate vision, healthcare mission, core values, and uncompromising dedication to pharmaceutical quality standards.",
    },
  ];
}

/* ─── Section: Page hero ─────────────────────────────────────── */
function PageHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#DFF1E9]/40 via-[#FAFCFA] to-[#FAFCFA] py-16 sm:py-24" aria-label="About page hero">
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#07845E]/5 blur-3xl"
        aria-hidden="true"
      />
      <Container>
        <div className="max-w-3xl luxury-fade-up">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#DFF1E9] border border-[#07845E]/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#123D32] mb-5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#07845E]" />
            Corporate Identity
          </span>
          <h1
            className="mb-6 text-4xl font-extrabold text-[#123D32] sm:text-5xl lg:text-6xl tracking-tight leading-[1.12]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Committed to Integrity in Pharmaceutical Healthcare
          </h1>
          <p className="text-lg text-[#53635C] leading-relaxed">
            Zilton Life Care Private Limited is a dedicated pharmaceutical marketing organisation based in Mumbai. We bridge certified cGMP drug manufacturing with hospital intensive care units and healthcare providers across India.
          </p>
        </div>
      </Container>
    </section>
  );
}

/* ─── Section: Company introduction ─────────────────────────── */
function CompanyIntro() {
  return (
    <section className="py-20 sm:py-28 bg-white border-y border-[#E4EBE6]" aria-labelledby="company-intro-heading">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Company Graphic */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="rounded-3xl border border-[#E4EBE6] bg-[#F2F7F4] p-3 shadow-md">
                <img
                  src="/images/company/company-graphic.svg"
                  alt="Zilton Life Care institutional supply network and quality evaluation"
                  className="w-full h-auto rounded-2xl select-none"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

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
                Headquartered in Mumbai, Maharashtra, Zilton Life Care Private Limited was founded on the belief that healthcare distribution must be synonymous with uncompromised therapeutic efficacy and ethical transparency.
              </p>
              <p>
                Our operational portfolio focuses strategically on three critical hospital therapeutic segments: <strong>Critical Care Injections</strong>, <strong>Clinical Nutrition IV</strong> infusions, and <strong>Nutritional Therapeutic Sachets</strong>.
              </p>
              <p>
                Every formulation we market is sourced strictly from audited manufacturing facilities compliant with current Good Manufacturing Practices (cGMP) and distributed under strict Good Distribution Practices (GDP) to protect cold-chain and molecular integrity.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E4EBE6] grid grid-cols-2 gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#53635C] font-semibold block">Headquarters</span>
                <p className="text-sm font-bold text-[#123D32] mt-0.5">Mumbai, Maharashtra, India</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#53635C] font-semibold block">Operating Status</span>
                <p className="text-sm font-bold text-[#07845E] mt-0.5">Active &amp; Compliant Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─── Section: Vision & Mission ─────────────────────────────── */
function VisionMission() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFCFA]" aria-labelledby="vm-heading">
      <Container>
        <SectionHeading
          eyebrow="Our Guiding Light"
          title="Vision &amp; Mission Statements"
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="luxury-card rounded-3xl border border-[#E4EBE6] bg-white p-8 sm:p-12">
            <div className="flex items-center justify-between mb-6">
              <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#07845E] bg-[#DFF1E9] px-3.5 py-1 rounded-full">
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

          <div className="luxury-card rounded-3xl border border-[#E4EBE6] bg-white p-8 sm:p-12">
            <div className="flex items-center justify-between mb-6">
              <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#07845E] bg-[#DFF1E9] px-3.5 py-1 rounded-full">
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

/* ─── Section: Core Values ───────────────────────────────────── */
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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COMPANY.values.map((value, i) => (
            <div
              key={value.label}
              className="luxury-card flex flex-col justify-between rounded-2xl border border-[#E4EBE6] bg-white p-8"
            >
              <div>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#DFF1E9]">
                  <span
                    className="text-sm font-extrabold text-[#123D32]"
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
                <p className="text-sm text-[#53635C] leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ─── Section: Compliance & Quality Pillars ───────────────────── */
function ComplianceHighlights() {
  return (
    <section className="py-20 sm:py-28 bg-white" aria-labelledby="compliance-heading">
      <Container>
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Compliance &amp; Governance"
            title="Institutional Trust &amp; Verification"
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

          <div className="rounded-2xl border border-[#E4EBE6] bg-[#FAFCFA] p-8 space-y-4">
            <h4 className="text-base font-bold text-[#123D32] flex items-center gap-2">
              <Award className="w-5 h-5 text-[#07845E]" />
              Regulatory Compliance Commitment
            </h4>
            <p className="text-sm text-[#53635C] leading-relaxed">
              Zilton Life Care adheres strictly to the regulatory guidelines promulgated by national and state drug control authorities. We maintain full audit trails, licensed storage conditions, and strict adherence to Schedule M manufacturing partner requirements.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─── Section: CTA ───────────────────────────────────────────── */
function AboutCTA() {
  return (
    <section className="py-20 bg-[#123D32] text-white" aria-labelledby="about-cta-heading">
      <Container>
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#DFF1E9] bg-white/10 px-4 py-1.5 rounded-full">
            Commercial Collaboration
          </span>
          <h2
            id="about-cta-heading"
            className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Partner With Zilton Life Care
          </h2>
          <p className="text-base text-[#DFF1E9]/80 leading-relaxed font-light">
            We actively seek long-term relationships with regional pharmaceutical distributors, institutional stockists, and healthcare hospital chains who share our ethos of clinical excellence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <Button to="/contact" size="lg">
              Contact Commercial Team <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button to="/products" size="lg" variant="secondary">
              Review Product Formulations
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─── Page export ────────────────────────────────────────────── */
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
