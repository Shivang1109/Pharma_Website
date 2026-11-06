/**
 * ZILTON LIFE CARE — PROFESSIONAL HOMEPAGE
 * 
 * Design Philosophy: Restrained, confident, editorial
 * Six intentional sections communicating pharmaceutical credibility
 */

import React, { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Syringe, Droplets, Package } from "lucide-react";
import { PRODUCTS } from "~/data/products";
import type { Product } from "~/types/product";
import { Reveal } from "~/components/motion/Reveal";
import { ImageSlot } from "~/components/ui/ImageSlot";
import { IMAGES } from "~/data/images";
import { COMPANY } from "~/data/company";
import { generateRouteMeta } from "~/utils/seo";
import { ProductDrawer } from "~/components/sections/products/ProductDrawer";

export function meta() {
  return generateRouteMeta({
    title: "Zilton Life Care | Critical Care & Clinical Nutrition Formulations",
    description:
      "Zilton Life Care Private Limited has more than 20+ years experience in Critical Care, Parenteral and Clinical Nutrition formulation across India, supported by audited cGMP, WHO, US FDA approved partner manufacturing and disciplined distribution.",
    canonicalPath: "/",
  });
}

export default function HomePage() {
  const [activeDrawerProduct, setActiveDrawerProduct] = useState<Product | null>(null);

  return (
    <div className="w-full bg-[#F8FAFC]">
      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 1: HERO — CLEAN, CONFIDENT, PROFESSIONAL */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-[#0A192F]">
        {/* Pharmaceutical Laboratory Background */}
        {IMAGES.heroMain && (
          <div className="absolute inset-0">
            <img
              src={IMAGES.heroMain}
              alt="Pharmaceutical research and manufacturing"
              className="w-full h-full object-cover object-center opacity-40"
              loading="eager"
              decoding="sync"
            />
          </div>
        )}

        {/* Refined gradient for text legibility without excessive darkness */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/90 via-[#0A192F]/60 to-transparent"
          aria-hidden="true"
        />

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Main Message */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="max-w-2xl">
                  <div className="text-sm uppercase tracking-widest text-[#A7F3D0] font-semibold mb-6">
                    Critical Care & Clinical Nutrition
                  </div>

                  <h1 className="font-editorial font-bold text-white mb-6">
                    <span className="block text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-2">
                      Better Healthcare.
                    </span>
                    <span className="block text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-[#10B981]">
                      Healthier Lives.
                    </span>
                  </h1>

                  <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-10 max-w-2xl">
                    We have more than 20+ years experience in Critical Care, Parenteral and Clinical
                    Nutrition formulation across India, supported by audited cGMP, WHO, US FDA approved
                    partner manufacturing.
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0D9E71] hover:bg-[#059669] text-white text-sm font-semibold transition-colors shadow-lg"
                    >
                      <span>Explore Products</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      to="/about"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-sm font-semibold transition-colors border border-white/20"
                    >
                      <span>About Zilton</span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Layered Credential Card */}
            <div className="lg:col-span-5 hidden lg:block">
              <Reveal delay={0.3}>
                <div className="relative">
                  {/* Background accent */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#0D9E71]/20 to-[#059669]/10 rounded-3xl blur-2xl" />
                  
                  {/* Card */}
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                    <div className="space-y-6">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-[#0D9E71] font-bold mb-2">
                          Pharmaceutical Excellence
                        </div>
                        <h3 className="font-editorial text-2xl font-bold text-[#0A192F] leading-tight">
                          Trusted Hospital Supply Partner
                        </h3>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#0D9E71] mt-2 shrink-0" />
                          <div>
                            <div className="font-semibold text-[#0A192F] text-sm">20+ Years Experience</div>
                            <div className="text-xs text-slate-600 mt-0.5">Critical care and clinical nutrition formulations</div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#0D9E71] mt-2 shrink-0" />
                          <div>
                            <div className="font-semibold text-[#0A192F] text-sm">Partner Manufacturing Standards</div>
                            <div className="text-xs text-slate-600 mt-0.5">Audited cGMP, WHO, US FDA approved facilities</div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#0D9E71] mt-2 shrink-0" />
                          <div>
                            <div className="font-semibold text-[#0A192F] text-sm">Pan-India Distribution</div>
                            <div className="text-xs text-slate-600 mt-0.5">Serving hospitals and institutions nationwide</div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-200">
                        <Link
                          to="/quality"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D9E71] hover:text-[#059669] transition-colors"
                        >
                          <span>View Quality Framework</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 2: ABOUT ZILTON — EDITORIAL TWO-COLUMN */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Column: Editorial Text */}
            <div>
              <Reveal>
                <div className="text-xs uppercase tracking-widest text-[#0D9E71] font-bold mb-4">
                  Who We Are
                </div>
                <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-[#0A192F] mb-6 leading-tight">
                  Pharmaceutical excellence through scientific rigor and transparent quality
                  assurance.
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                  <p>
                    Founded in Mumbai, Zilton Life Care operates as a dedicated pharmaceutical
                    healthcare company bridging certified cGMP, WHO and US FDA approved
                    manufacturing with clinical care facilities across India.
                  </p>
                  <p>
                    Modern hospital pharmacotherapy demands uncompromising quality control,
                    verified batch release documentation, and disciplined cold-chain management.
                    Our operational model pairs audited partner facilities with rigorous technical
                    due-diligence.
                  </p>
                  <p>
                    We focus on critical hospital therapeutics: advanced parenteral antibiotics for
                    intensive care, intravenous nutrition for compromised patients, and oral
                    metabolic sachets for surgical recovery.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-[#0D9E71] hover:text-[#059669] transition-colors"
                >
                  <span>Learn More About Zilton</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Reveal>
            </div>

            {/* Right Column: Image */}
            <Reveal delay={0.2}>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <ImageSlot
                  slotKey="aboutPlant"
                  ratio="4/5"
                  caption="cGMP certified pharmaceutical manufacturing facility"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 3: THERAPEUTIC FOCUS — THREE CLEAN CARDS */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <div className="text-xs uppercase tracking-widest text-[#0D9E71] font-bold mb-4">
                Our Therapeutic Focus
              </div>
              <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-[#0A192F] mb-4 leading-tight">
                Specialized Hospital Formulations
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Formulations engineered for intensive hospital protocols, emergency admissions, and
                clinical patient recovery.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Critical Care Injections */}
            <Reveal delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-[#0D9E71]/10 flex items-center justify-center mb-6">
                  <Syringe className="w-7 h-7 text-[#0D9E71]" />
                </div>

                <h3 className="font-editorial text-2xl font-bold text-[#0A192F] mb-3">
                  Critical Care Injections
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Intensive-care parenteral formulations including IV Carbapenems, Polypeptides,
                  Echinocandin Antifungals, and Haematinics for ICU and surgical admissions.
                </p>

                <Link
                  to="/products#critical-care-injection"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D9E71] hover:text-[#059669] transition-colors"
                >
                  <span>View Formulations</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <p className="text-xs text-slate-400 mb-2 italic">Category illustration</p>
                  <img
                    src="/images/products/placeholder-injection.svg"
                    alt="Critical Care Injection category"
                    className="w-32 h-32 object-contain opacity-40"
                  />
                </div>
              </div>
            </Reveal>

            {/* Card 2: Nutrition IV */}
            <Reveal delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-[#0D9E71]/10 flex items-center justify-center mb-6">
                  <Droplets className="w-7 h-7 text-[#0D9E71]" />
                </div>

                <h3 className="font-editorial text-2xl font-bold text-[#0A192F] mb-3">
                  Nutrition IV Solutions
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Sterile parenteral nutrition preparations and essential trace element infusions
                  designed for clinical parenteral therapy and patient replenishment.
                </p>

                <Link
                  to="/products#nutrition-iv"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D9E71] hover:text-[#059669] transition-colors"
                >
                  <span>View Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <p className="text-xs text-slate-400 mb-2 italic">Category illustration</p>
                  <img
                    src="/images/products/placeholder-iv.svg"
                    alt="Nutrition IV category"
                    className="w-32 h-32 object-contain opacity-40"
                  />
                </div>
              </div>
            </Reveal>

            {/* Card 3: Nutrition Sachets */}
            <Reveal delay={0.3}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-[#0D9E71]/10 flex items-center justify-center mb-6">
                  <Package className="w-7 h-7 text-[#0D9E71]" />
                </div>

                <h3 className="font-editorial text-2xl font-bold text-[#0A192F] mb-3">
                  Therapeutic Nutrition Sachets
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Advanced therapeutic nutrition sachets containing pharmaceutical-grade amino
                  acids and metabolic nutrients for clinical and dietary management.
                </p>

                <Link
                  to="/products#nutrition-sachet"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D9E71] hover:text-[#059669] transition-colors"
                >
                  <span>View Sachets</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <p className="text-xs text-slate-400 mb-2 italic">Category illustration</p>
                  <img
                    src="/images/products/placeholder-sachet.svg"
                    alt="Nutrition Sachet category"
                    className="w-32 h-32 object-contain opacity-40"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 4: QUALITY COMMITMENT — EDITORIAL LAYOUT */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Column: Image */}
            <Reveal>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <ImageSlot
                  slotKey="quality01"
                  ratio="4/3"
                  caption="Quality control and analytical testing"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>

            {/* Right Column: Content */}
            <div>
              <Reveal delay={0.1}>
                <div className="text-xs uppercase tracking-widest text-[#0D9E71] font-bold mb-4">
                  Quality Assurance
                </div>
                <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-[#0A192F] mb-6 leading-tight">
                  Documented quality verification from manufacturing to hospital delivery.
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="space-y-4 text-base text-slate-600 leading-relaxed mb-8">
                  <p>
                    Every parenteral injectable and clinical nutrition formulation undergoes
                    documented release testing from audited cGMP, WHO, and US FDA approved partner
                    manufacturing facilities.
                  </p>
                  <p>
                    Our quality framework ensures batch traceability, analytical verification, and
                    temperature-controlled distribution for sensitive formulations. Certificates of
                    Analysis are available to institutional procurement bodies upon request.
                  </p>
                  <p>
                    Clear documentation accompanies each consignment from production to hospital
                    pharmacy receiving departments, maintaining complete batch integrity and
                    regulatory compliance.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <Link
                  to="/quality"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D9E71] hover:text-[#059669] transition-colors"
                >
                  <span>View Quality Framework</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 5: INSTITUTIONAL PARTNERSHIPS — CENTERED EDITORIAL */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-[#0A192F] text-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <div className="text-xs uppercase tracking-widest text-[#A7F3D0] font-semibold mb-6">
                Institutional Supply
              </div>
              <h2 className="font-editorial text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                Partner with Zilton Life Care for hospital and institutional pharmaceutical supply.
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-10">
                We work directly with hospital procurement committees, authorized distributors, and
                institutional healthcare providers across India. Direct your commercial inquiries,
                batch allocation schedules, and partnership proposals to our Mumbai corporate desk.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0D9E71] hover:bg-[#059669] text-white text-sm font-semibold transition-colors shadow-lg"
              >
                <span>Start an Institutional Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 6: FINAL CTA — CLEAN CLOSING */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <Reveal>
              <h3 className="font-editorial text-3xl font-bold text-[#0A192F] mb-4">
                Have questions about our formulations or quality processes?
              </h3>
              <p className="text-base text-slate-600 mb-8">
                Our team is available to discuss institutional procurement requirements,
                documentation requests, and partnership opportunities.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0D9E71] hover:bg-[#059669] text-white text-sm font-semibold transition-colors"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0A192F] text-sm font-semibold transition-colors"
                >
                  <span>Browse Products</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Product Drawer (preserved functionality) */}
      <ProductDrawer product={activeDrawerProduct} onClose={() => setActiveDrawerProduct(null)} />
    </div>
  );
}
