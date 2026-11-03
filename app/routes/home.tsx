import type { Route } from "./+types/home";
import { Link } from "react-router";
import { ArrowRight, ShieldCheck, Handshake, Leaf } from "lucide-react";
import { Button } from "~/components/common/Button";
import { Container } from "~/components/common/Container";
import { SectionHeading } from "~/components/common/SectionHeading";
import { COMPANY } from "~/data/company";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Zilton Life Care — Better Healthcare. Healthier Lives." },
    {
      name: "description",
      content:
        "Zilton Life Care Private Limited is a pharmaceutical marketing company committed to delivering quality healthcare solutions across Critical Care, Nutrition IV and Nutrition Sachet categories.",
    },
  ];
}

/* ─── Section: Hero ──────────────────────────────────────────── */
function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#E8F4EE] via-white to-white py-16 sm:py-24"
      aria-label="Hero"
    >
      {/* Decorative ambient background accents */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#087B59]/5 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-[#087B59]/5 blur-xl"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E8F4EE] border border-[#DCE8E0] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#087B59] mb-5">
              <span className="h-2 w-2 rounded-full bg-[#087B59] animate-pulse" />
              Pharmaceutical Marketing
            </div>

            <h1
              className="text-4xl font-extrabold text-[#173B30] sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Better Healthcare.{" "}
              <span className="text-[#087B59]">Healthier Lives.</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[#46534C] leading-relaxed max-w-xl">
              Quality-driven pharmaceutical solutions and trusted healthcare
              partnerships — delivering sterile critical care injectables and clinical nutrition to hospitals and healthcare providers.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to="/products" size="lg" className="shadow-sm hover:shadow-md">
                Explore Products
              </Button>
              <Button to="/about" size="lg" variant="outline">
                About Us
              </Button>
            </div>

            {/* Trust Metrics Strip */}
            <div className="mt-10 pt-8 border-t border-[#DCE8E0] grid grid-cols-3 gap-4">
              <div>
                <p className="font-heading text-2xl font-extrabold text-[#173B30] sm:text-3xl">
                  3
                </p>
                <p className="text-xs text-[#46534C] font-medium mt-0.5">
                  Core Clinical Categories
                </p>
              </div>
              <div>
                <p className="font-heading text-2xl font-extrabold text-[#087B59] sm:text-3xl">
                  100%
                </p>
                <p className="text-xs text-[#46534C] font-medium mt-0.5">
                  Audited cGMP Sourcing
                </p>
              </div>
              <div>
                <p className="font-heading text-2xl font-extrabold text-[#173B30] sm:text-3xl">
                  GDP
                </p>
                <p className="text-xs text-[#46534C] font-medium mt-0.5">
                  Cold-Chain Logistics
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Medical Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              <img
                src="/images/hero/hero-medical-graphic.svg"
                alt="Zilton Life Care quality pharmaceutical operations"
                className="w-full h-auto drop-shadow-xl select-none"
                loading="eager"
              />
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
    <section className="py-16 sm:py-24 bg-white" aria-labelledby="about-teaser-heading">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#087B59]">
              Who We Are
            </span>
            <h2
              id="about-teaser-heading"
              className="mb-5 text-3xl font-bold text-[#173B30] sm:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              A Company Built on Trust &amp; Quality
            </h2>
            <p className="mb-6 text-base text-[#46534C] leading-relaxed">
              Zilton Life Care Private Limited is a pharmaceutical marketing
              company focused on bridging the gap between quality healthcare
              products and the professionals who rely on them.
            </p>
            <p className="mb-8 text-base text-[#46534C] leading-relaxed">
              Our mission — <em className="font-medium text-[#173B30]">"{COMPANY.mission}"</em> — guides every
              partnership and every product category we represent.
            </p>
            <Button to="/about" variant="outline">
              Learn More About Us <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
          {/* Company Graphic */}
          <div className="flex items-center justify-center">
            <img
              src="/images/company/company-graphic.svg"
              alt="Zilton Life Care pharmaceutical partnership and supply network"
              className="w-full max-w-lg h-auto rounded-2xl shadow-sm border border-[#DCE8E0]"
              loading="lazy"
            />
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
      label: "Critical Care Injection",
      icon: <ShieldCheck size={28} className="text-[#087B59]" />,
      description:
        "Precision-formulated injectable solutions for critical care settings, supporting patient recovery.",
    },
    {
      id: "nutrition-iv",
      label: "Nutrition IV",
      icon: <Leaf size={28} className="text-[#087B59]" />,
      description:
        "Intravenous nutrition solutions designed to meet the clinical demands of patients requiring parenteral support.",
    },
    {
      id: "nutrition-sachet",
      label: "Nutrition Sachet",
      icon: <Handshake size={28} className="text-[#087B59]" />,
      description:
        "Convenient sachet-based nutritional supplements formulated for ease of administration and patient compliance.",
    },
  ];

  return (
    <section
      className="py-16 sm:py-20 bg-[#E8F4EE]/40"
      aria-labelledby="products-section-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Our Product Categories"
          title="What We Market"
          description="Three focused categories — each representing our commitment to quality pharmaceutical solutions."
          align="center"
          className="mb-12"
        />
        <ul
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link
                to={`/products#${cat.id}`}
                className="group flex flex-col gap-4 rounded-2xl border border-[#DCE8E0] bg-white p-8 transition-all duration-200 hover:border-[#087B59] hover:shadow-[0_4px_24px_0_rgb(8_123_89/0.12)] h-full"
                aria-label={`View ${cat.label} products`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F4EE]">
                  {cat.icon}
                </div>
                <h3
                  className="text-lg font-bold text-[#173B30] group-hover:text-[#087B59] transition-colors"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {cat.label}
                </h3>
                <p className="text-sm text-[#46534C] leading-relaxed flex-1">
                  {cat.description}
                </p>
                <span className="flex items-center gap-1 text-sm font-semibold text-[#087B59]">
                  View Products <ArrowRight size={14} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Button to="/products" variant="outline">
            See Full Product Catalogue
          </Button>
        </div>
      </Container>
    </section>
  );
}

/* ─── Section: Quality teaser ───────────────────────────────── */
function QualityTeaser() {
  return (
    <section
      className="py-16 sm:py-20 bg-white"
      aria-labelledby="quality-teaser-heading"
    >
      <Container>
        <div className="rounded-2xl bg-[#173B30] px-8 py-14 text-center text-white sm:px-14">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#87bfac]">
            Our Quality Commitment
          </span>
          <h2
            id="quality-teaser-heading"
            className="mb-5 text-3xl font-bold text-white sm:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Quality at the Core of Everything
          </h2>
          <p className="mb-8 mx-auto max-w-xl text-[#a8cfc0] leading-relaxed">
            Every product we market goes through rigorous selection and
            quality evaluation. We believe that trust is built through
            transparency and consistent standards.
          </p>
          <Button to="/quality" variant="secondary">
            Our Quality Story <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

/* ─── Section: Vision, Mission, Values ──────────────────────── */
function VisionMissionValues() {
  return (
    <section
      className="py-16 sm:py-20 bg-[#E8F4EE]/40"
      aria-labelledby="vmv-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Our Foundation"
          title="Vision, Mission &amp; Values"
          align="center"
          className="mb-12"
        />

        {/* Vision & Mission */}
        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#DCE8E0] bg-white p-8">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-[#087B59]">
              Vision
            </span>
            <p
              className="text-xl font-bold text-[#173B30]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              "{COMPANY.vision}"
            </p>
          </div>
          <div className="rounded-2xl border border-[#DCE8E0] bg-white p-8">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-[#087B59]">
              Mission
            </span>
            <p
              className="text-xl font-bold text-[#173B30]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              "{COMPANY.mission}"
            </p>
          </div>
        </div>

        {/* Values grid */}
        <ul
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {COMPANY.values.map((value) => (
            <li
              key={value.label}
              className="flex items-start gap-4 rounded-xl border border-[#DCE8E0] bg-white p-6"
            >
              <div className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#087B59]" aria-hidden="true" />
              <div>
                <h3
                  className="mb-1 font-bold text-[#173B30]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {value.label}
                </h3>
                <p className="text-sm text-[#46534C] leading-relaxed">
                  {value.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ─── Section: Partnership CTA ──────────────────────────────── */
function PartnershipCTA() {
  return (
    <section
      className="py-16 sm:py-20 bg-white"
      aria-labelledby="partnership-heading"
    >
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <SectionHeading
            eyebrow="Partner With Us"
            title="Grow Together in Healthcare"
            description="We welcome partnerships with distributors, stockists and healthcare institutions who share our commitment to quality and patient well-being."
            align="center"
            className="mb-8"
          />
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button to="/contact" size="lg">
              Start a Conversation
            </Button>
            <Button to="/products" size="lg" variant="outline">
              View Our Products
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─── Section: Contact teaser ───────────────────────────────── */
function ContactTeaser() {
  return (
    <section className="py-14 bg-[#E8F4EE]" aria-labelledby="contact-teaser-heading">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2
              id="contact-teaser-heading"
              className="text-xl font-bold text-[#173B30]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Have a question or enquiry?
            </h2>
            <p className="mt-1 text-sm text-[#46534C]">
              Reach out — we respond to all business enquiries.
            </p>
          </div>
          <Button to="/contact" size="md">
            Contact Us <ArrowRight size={16} className="ml-2" />
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
      <PartnershipCTA />
      <ContactTeaser />
    </>
  );
}
