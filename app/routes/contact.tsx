import { Container } from "~/components/common/Container";
import { ContactHero } from "~/components/sections/contact/ContactHero";
import { ContactInfo } from "~/components/sections/contact/ContactInfo";
import { ContactForm } from "~/components/sections/contact/ContactForm";
import { ShieldCheck, FileCheck, Truck, HelpCircle } from "lucide-react";
import { generateRouteMeta } from "~/utils/seo";

export function meta() {
  return generateRouteMeta({
    title: "Contact Corporate & Procurement Desk",
    description:
      "Connect with ZILTON LIFE CARE PRIVATE LIMITED for institutional supply, commercial hospital procurement, batch documentation, and distribution partnerships.",
    canonicalPath: "/contact",
  });
}

export default function ContactPage() {
  const institutionalNotes = [
    {
      icon: ShieldCheck,
      title: "Regulatory Compliance",
      text: "All institutional quotations require valid state drug sales license details and hospital/consortium documentation.",
    },
    {
      icon: FileCheck,
      title: "Batch Certificates (CoAs)",
      text: "Certificates of Analysis and batch release records are provided upon formal request for verified institutional orders.",
    },
    {
      icon: Truck,
      title: "Validated Distribution",
      text: "Formulations are dispatched under controlled storage conditions strictly aligned with product-specific stability requirements.",
    },
  ];

  return (
    <div className="py-12 sm:py-20 bg-[#FAFCFA]">
      <Container>
        {/* Editorial Hero */}
        <ContactHero />

        {/* 2-Column Corporate Grid: Contact Details & Interactive Form */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <ContactInfo />
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Institutional Procurement Guidance Section */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-[#E4EBE6]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#07845E] uppercase bg-[#DFF1E9]/60 px-3 py-1 rounded-full border border-[#07845E]/20 mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              Procurement Guidance
            </span>
            <h2
              className="text-xl sm:text-2xl font-extrabold text-[#123D32]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Institutional Dialogue &amp; Due Diligence Standards
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#53635C] leading-relaxed">
              To expedite institutional commercial agreements and technical audits, please review our engagement protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {institutionalNotes.map((note, idx) => {
              const Icon = note.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-[#E4EBE6] shadow-2xs hover:border-[#07845E]/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#DFF1E9] text-[#07845E] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#123D32] mb-1.5">
                    {note.title}
                  </h3>
                  <p className="text-xs text-[#53635C] leading-relaxed font-light">
                    {note.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
