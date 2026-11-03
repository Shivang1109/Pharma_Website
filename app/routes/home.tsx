import type { Route } from "./+types/home";
import { Link } from "react-router";
import {
  ArrowRight,
  ShieldCheck,
  Handshake,
  Leaf,
  CheckCircle2,
  Sparkles,
  Building2,
  Award,
  FlaskConical,
} from "lucide-react";
import { Button } from "~/components/common/Button";
import { Container } from "~/components/common/Container";
import { SectionHeading } from "~/components/common/SectionHeading";
import { StatisticCard } from "~/components/common/StatisticCard";
import { COMPANY } from "~/data/company";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Zilton Life Care — Minimal Luxury Healthcare & Clinical Formulations" },
    {
      name: "description",
      content:
        "Zilton Life Care Private Limited is a premier pharmaceutical marketing company delivering sterile critical care injectables and clinical nutrition solutions across India.",
    },
  ];
}

/* ─── Section: Hero ──────────────────────────────────────────── */
function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#DFF1E9]/40 via-[#FAFCFA] to-[#FAFCFA] pt-16 pb-20 sm:pt-24 sm:pb-28"
      aria-label="Hero"
    >
      {/* Ambient background blur elements */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-[#07845E]/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-[#DFF1E9]/60 blur-2xl"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 luxury-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#DFF1E9] border border-[#07845E]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#123D32] mb-6">
              <span className="h-2 w-2 rounded-full bg-[#07845E] animate-pulse" />
              Corporate Pharmaceutical Marketing
            </div>

            <h1
              className="text-4xl font-extrabold text-[#123D32] sm:text-5xl lg:text-6xl leading-[1.12] tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Better Healthcare.{" "}
              <span className="text-[#07845E]">Healthier Lives.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#53635C] leading-relaxed max-w-xl font-normal">
              A healthcare organisation committed to clinical precision, high-integrity sourcing, and verified pharmaceutical formulations across Critical Care, Clinical Nutrition IV, and Therapeutic Sachets.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to="/products" size="lg" className="shadow-sm">
                Explore Product Portfolio <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button to="/about" size="lg" variant="outline">
                Corporate Profile
              </Button>
            </div>

            {/* Trust Metrics Strip */}
            <div className="mt-12 pt-8 border-t border-[#E4EBE6] grid grid-cols-3 gap-6">
              <StatisticCard
                value="3"
                label="Core Clinical Portfolios"
                sublabel="Specialised Formulations"
              />
              <StatisticCard
                value="100%"
                label="Audited cGMP Partners"
                sublabel="Verified Quality"
              />
              <StatisticCard
                value="GDP"
                label="Compliant Logistics"
                sublabel="Controlled Chain"
              />
            </div>
          </div>

          {/* Right Column: High-Fidelity Medical Graphic */}
          <div className="lg:col-span-5 flex justify-center luxury-fade-in">
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#07845E]/15 to-[#DFF1E9]/40 blur-xl opacity-60" />
              <div className="relative rounded-3xl border border-[#E4EBE6] bg-white p-3 shadow-lg">
                <img
                  src="/images/hero/hero-medical-graphic.svg"
                  alt="Zilton Life Care pharmaceutical manufacturing and distribution excellence"
                  className="w-full h-auto rounded-2xl select-none"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─── Section: About teaser ─────────────────────────────────── */
function AboutTeaser() {
  return (
    <section className="py-20 sm:py-28 bg-white border-y border-[#E4EBE6]" aria-labelledby="about-teaser-heading">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="rounded-3xl border border-[#E4EBE6] bg-[#F2F7F4] p-3 shadow-sm">
                <img
                  src="/images/company/company-graphic.svg"
                  alt="Zilton Life Care corporate partnership and clinical quality assurance"
                  className="w-full h-auto rounded-2xl select-none"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#DFF1E9] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#123D32] mb-4">
              <Building2 className="w-3.5 h-3.5 text-[#07845E]" />
              Corporate Identity
            </span>
            <h2
              id="about-teaser-heading"
              className="mb-5 text-3xl font-extrabold text-[#123D32] sm:text-4xl tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              A Heritage Built on Quality, Sourcing &amp; Compliance
            </h2>
            <p className="mb-5 text-base text-[#53635C] leading-relaxed">
              Zilton Life Care Private Limited is a dedicated pharmaceutical marketing organisation based in Mumbai. We specialize in bringing audited, premium-grade hospital and clinical formulations to healthcare providers across India.
            </p>
            <p className="mb-8 text-base text-[#53635C] leading-relaxed">
              Guided by our foundational principle — <em className="font-semibold text-[#123D32]">"{COMPANY.mission}"</em> — we ensure every batch adheres to strict Good Distribution Practices (GDP) and certified cGMP manufacturing protocols.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button to="/about" variant="outline">
                Our Corporate Profile <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button to="/quality" variant="outline">
                Quality Assurance Framework
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─── Section: Product categories ───────────────────────────── */
function ProductCategories() {
  const categories = [
    {
      id: "critical-care-injection",
      label: "Critical Care Injections",
      badge: "Sterile Injectables",
      icon: <ShieldCheck size={28} className="text-[#07845E]" />,
      description:
        "High-potency, sterile lyophilized and liquid injectable formulations engineered for hospital intensive care units, emergency settings, and acute surgical therapy.",
      highlights: ["Sterile ICU formulations", "Batch-tested purity", "Complete COA documentation"],
    },
    {
      id: "nutrition-iv",
      label: "Clinical Nutrition IV",
      badge: "Infusion Solutions",
      icon: <Leaf size={28} className="text-[#07845E]" />,
      description:
        "Balanced parenteral nutrition and amino acid infusions formulated to sustain critically ill, post-operative, and catabolic patients requiring targeted vascular feeding.",
      highlights: ["Balanced amino-acid profiles", "Targeted osmolarity", "Strict particulate control"],
    },
    {
      id: "nutrition-sachet",
      label: "Nutritional Sachets",
      badge: "Oral Therapeutics",
      icon: <Handshake size={28} className="text-[#07845E]" />,
      description:
        "High-bioavailability dietary and nutritional supplements packed in hermetically sealed sachets for enhanced shelf stability and precise therapeutic administration.",
      highlights: ["Hermetically sealed packaging", "Patient-compliant dosing", "Targeted micronutrition"],
    },
  ];

  return (
    <section
      className="py-20 sm:py-28 bg-[#FAFCFA]"
      aria-labelledby="products-section-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Core Portfolios"
          title="Clinical Formulations"
          description="Three focused therapeutic divisions delivering certified formulations to hospitals, distributors, and healthcare institutions."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="luxury-card flex flex-col justify-between p-8 rounded-2xl bg-white border border-[#E4EBE6] hover:border-[#07845E]/40"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DFF1E9] text-[#07845E]">
                    {cat.icon}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#123D32] bg-[#F2F7F4] border border-[#E4EBE6] px-3 py-1 rounded-full">
                    {cat.badge}
                  </span>
                </div>

                <h3
                  className="text-xl font-bold text-[#123D32] mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {cat.label}
                </h3>
                <p className="text-sm text-[#53635C] leading-relaxed mb-6">
                  {cat.description}
                </p>

                <div className="space-y-2 mb-8 pt-4 border-t border-[#E4EBE6]/60">
                  {cat.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#123D32]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#07845E] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to={`/products#${cat.id}`}
                className="inline-flex items-center justify-between w-full pt-4 border-t border-[#E4EBE6] text-sm font-semibold text-[#07845E] hover:text-[#123D32] transition-colors group"
              >
                <span>View Formulations</span>
                <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button to="/products" size="lg" className="shadow-xs">
            Browse Complete Catalogue
          </Button>
        </div>
      </Container>
    </section>
  );
}

/* ─── Section: Quality teaser banner ────────────────────────── */
function QualityTeaser() {
  return (
    <section
      className="py-16 sm:py-24 bg-white"
      aria-labelledby="quality-teaser-heading"
    >
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-[#123D32] px-8 py-16 text-center text-white sm:px-16 lg:py-20 shadow-xl">
          {/* Subtle gradient background glow */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#07845E]/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-[#DFF1E9]/10 blur-2xl"
            aria-hidden="true"
          />

          <div className="relative max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#DFF1E9] mb-5">
              <Award className="w-4 h-4 text-[#DFF1E9]" />
              cGMP Sourced &amp; Quality Controlled
            </span>

            <h2
              id="quality-teaser-heading"
              className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Unyielding Commitment to Clinical Standards
            </h2>

            <p className="mb-10 text-base sm:text-lg text-[#DFF1E9]/85 leading-relaxed font-light">
              We mandate thorough Certificate of Analysis (COA) verification, cold-chain integrity, and audited batch traceability across every formulation delivered into the healthcare ecosystem.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button to="/quality" size="lg" variant="secondary">
                Explore Quality Assurance <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button to="/contact" size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white">
                Request COA Documents
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─── Section: Vision, Mission, Values ──────────────────────── */
function VisionMissionValues() {
  return (
    <section
      className="py-20 sm:py-28 bg-[#F2F7F4] border-y border-[#E4EBE6]"
      aria-labelledby="vmv-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Corporate Purpose"
          title="Vision, Mission &amp; Values"
          description="The principles that govern our operations, ethical distribution standards, and healthcare industry partnerships."
          align="center"
          className="mb-14"
        />

        {/* Vision & Mission Split Cards */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="luxury-card rounded-2xl border border-[#E4EBE6] bg-white p-8 sm:p-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#07845E] bg-[#DFF1E9] px-3 py-1 rounded-full">
                Vision
              </span>
              <Sparkles className="w-5 h-5 text-[#07845E]" />
            </div>
            <p
              className="text-2xl font-extrabold text-[#123D32] leading-snug"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              "{COMPANY.vision}"
            </p>
            <p className="mt-4 text-sm text-[#53635C] leading-relaxed">
              Striving toward an ecosystem where every hospital, patient, and clinician has reliable access to tested therapeutic treatments without compromise.
            </p>
          </div>

          <div className="luxury-card rounded-2xl border border-[#E4EBE6] bg-white p-8 sm:p-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#07845E] bg-[#DFF1E9] px-3 py-1 rounded-full">
                Mission
              </span>
              <FlaskConical className="w-5 h-5 text-[#07845E]" />
            </div>
            <p
              className="text-2xl font-extrabold text-[#123D32] leading-snug"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              "{COMPANY.mission}"
            </p>
            <p className="mt-4 text-sm text-[#53635C] leading-relaxed">
              Bridging premier cGMP pharmaceutical manufacturing with institutional demand through rigorous compliance and dependable distribution.
            </p>
          </div>
        </div>

        {/* Core Values 6-Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COMPANY.values.map((value, idx) => (
            <div
              key={value.label}
              className="luxury-card flex flex-col p-6 rounded-2xl border border-[#E4EBE6] bg-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#DFF1E9] text-[#123D32] text-xs font-bold">
                  0{idx + 1}
                </span>
                <h3
                  className="font-bold text-[#123D32] text-base"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {value.label}
                </h3>
              </div>
              <p className="text-sm text-[#53635C] leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ─── Section: Institutional Supply CTA ─────────────────────── */
function InstitutionalCTA() {
  return (
    <section className="py-20 sm:py-28 bg-white" aria-labelledby="institutional-heading">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            eyebrow="Commercial Enquiries"
            title="Institutional Distribution &amp; Supply"
            description="We welcome collaboration with authorized pharmaceutical stockists, healthcare hospital networks, and state healthcare institutions across India."
            align="center"
            className="mb-8"
          />
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button to="/contact" size="lg">
              Initiate Commercial Enquiry
            </Button>
            <Button to="/products" size="lg" variant="outline">
              Review Product Specs
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─── Section: Contact Bar ──────────────────────────────────── */
function ContactBar() {
  return (
    <section className="py-12 bg-[#DFF1E9] border-t border-[#E4EBE6]" aria-labelledby="contact-bar-heading">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3
              id="contact-bar-heading"
              className="text-lg font-bold text-[#123D32]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Direct Corporate Liaison
            </h3>
            <p className="text-sm text-[#53635C] mt-0.5">
              Connect directly with our regulatory and commercial team in Mumbai.
            </p>
          </div>
          <Button to="/contact" size="md">
            Contact Support Desk <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

/* ─── Page export ────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <ProductCategories />
      <QualityTeaser />
      <VisionMissionValues />
      <InstitutionalCTA />
      <ContactBar />
    </>
  );
}
