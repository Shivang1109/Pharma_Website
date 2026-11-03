import type { Route } from "./+types/about";
import { Container } from "~/components/common/Container";
import { SectionHeading } from "~/components/common/SectionHeading";
import { Button } from "~/components/common/Button";
import { COMPANY } from "~/data/company";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us — Zilton Life Care Private Limited" },
    {
      name: "description",
      content:
        "Learn about Zilton Life Care Private Limited — our vision, mission, values and our commitment to quality pharmaceutical marketing.",
    },
  ];
}

/* ─── Section: Page hero ─────────────────────────────────────── */
function PageHero() {
  return (
    <section className="bg-gradient-to-br from-[#E8F4EE] via-white to-white py-16 sm:py-24" aria-label="About page hero">
      <Container>
        <div className="max-w-2xl">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#087B59]">
            About Us
          </span>
          <h1
            className="mb-5 text-4xl font-extrabold text-[#173B30] sm:text-5xl leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Who We Are
          </h1>
          <p className="text-lg text-[#46534C] leading-relaxed">
            Zilton Life Care Private Limited is a pharmaceutical marketing company
            committed to connecting quality healthcare products with the
            professionals and institutions that rely on them.
          </p>
        </div>
      </Container>
    </section>
  );
}

/* ─── Section: Company introduction ─────────────────────────── */
function CompanyIntro() {
  return (
    <section className="py-16 sm:py-20 bg-white" aria-labelledby="company-intro-heading">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Company Graphic */}
          <div className="flex items-center justify-center order-2 lg:order-1">
            <img
              src="/images/company/company-graphic.svg"
              alt="Zilton Life Care manufacturing partner and institutional supply network"
              className="w-full max-w-lg h-auto rounded-2xl shadow-sm border border-[#DCE8E0]"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#087B59]">
              Our Company
            </span>
            <h2
              id="company-intro-heading"
              className="mb-5 text-3xl font-bold text-[#173B30] sm:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Pharmaceutical Marketing with Purpose
            </h2>
            <p className="mb-4 text-base text-[#46534C] leading-relaxed">
              Zilton Life Care Private Limited is a pharmaceutical marketing
              company based in Mumbai, focused on making quality healthcare
              products accessible to medical professionals and institutions across
              India.
            </p>
            <p className="mb-4 text-base text-[#46534C] leading-relaxed">
              We market products across three key categories — Critical Care
              Injection, Nutrition IV, and Nutrition Sachet — each selected with
              a focus on clinical relevance, quality standards, and genuine
              healthcare value.
            </p>
            <p className="text-base text-[#46534C] leading-relaxed">
              Our approach is rooted in transparency: we represent our
              manufacturing partners accurately, communicate product information
              honestly, and build relationships that prioritise trust over
              short-term gain.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─── Section: Vision & Mission ─────────────────────────────── */
function VisionMission() {
  return (
    <section className="py-16 sm:py-20 bg-[#E8F4EE]/40" aria-labelledby="vm-heading">
      <Container>
        <SectionHeading
          eyebrow="Our Direction"
          title="Vision &amp; Mission"
          align="center"
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border-l-4 border-[#087B59] bg-white p-8 shadow-sm">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-[#087B59]">
              Our Vision
            </span>
            <p
              className="text-2xl font-bold text-[#173B30] leading-snug"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              "{COMPANY.vision}"
            </p>
            <p className="mt-4 text-sm text-[#46534C] leading-relaxed">
              We envision a healthcare landscape where access to quality
              pharmaceutical products is a given — not a privilege.
            </p>
          </div>
          <div className="rounded-2xl border-l-4 border-[#087B59] bg-white p-8 shadow-sm">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-[#087B59]">
              Our Mission
            </span>
            <p
              className="text-2xl font-bold text-[#173B30] leading-snug"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              "{COMPANY.mission}"
            </p>
            <p className="mt-4 text-sm text-[#46534C] leading-relaxed">
              Every partnership we form and every product we represent is guided
              by this commitment to quality, integrity and meaningful impact.
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
    <section className="py-16 sm:py-20 bg-white" aria-labelledby="values-heading">
      <Container>
        <SectionHeading
          eyebrow="What We Stand For"
          title="Our Core Values"
          description="These values shape how we work, the partnerships we build, and the standards we hold ourselves to every day."
          align="center"
          className="mb-12"
        />
        <ul
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {COMPANY.values.map((value, i) => (
            <li
              key={value.label}
              className="group rounded-2xl border border-[#DCE8E0] bg-white p-7 transition-all hover:border-[#087B59] hover:shadow-[0_4px_24px_0_rgb(8_123_89/0.10)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#E8F4EE]">
                <span
                  className="text-sm font-bold text-[#087B59]"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3
                className="mb-2 text-lg font-bold text-[#173B30] group-hover:text-[#087B59] transition-colors"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {value.label}
              </h3>
              <p className="text-sm text-[#46534C] leading-relaxed">
                {value.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ─── Section: CTA ───────────────────────────────────────────── */
function AboutCTA() {
  return (
    <section className="py-14 bg-[#173B30]" aria-labelledby="about-cta-heading">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          <h2
            id="about-cta-heading"
            className="text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Interested in working with us?
          </h2>
          <p className="max-w-xl text-[#a8cfc0] leading-relaxed">
            We are open to partnerships with distributors, stockists and
            healthcare institutions that share our values.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button to="/contact" size="lg">
              Get in Touch
            </Button>
            <Button to="/products" size="lg" variant="secondary">
              View Our Products
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
      <AboutCTA />
    </>
  );
}

