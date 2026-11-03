import React from "react";
import { Link } from "react-router";
import { ArrowUp, Phone, Mail, MapPin } from "lucide-react";
import { NAV_ITEMS, FOOTER_LEGAL_LINKS } from "~/data/navigation";
import { COMPANY } from "~/data/company";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1B634E] text-[#F6F4EE] pt-16 sm:pt-24 pb-12 overflow-hidden border-t border-[#1B634E]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Clinical Statement */}
        <div className="pb-12 border-b border-white/15 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#DCEEE4] font-semibold block mb-2">
              Pharmaceutical Marketing Enterprise
            </span>
            <p className="font-editorial text-2xl sm:text-3xl text-white tracking-tight leading-snug">
              Specialized parenteral critical care and clinical nutrition solutions across India.
            </p>
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 font-mono text-xs text-[#DCEEE4] hover:text-white transition-colors cursor-pointer group"
            aria-label="Scroll back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* 4-Column Grid */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/15">
          {/* Col 1: Registered Entity & EXACT Logo */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white p-1 shadow-sm flex items-center justify-center shrink-0">
                <img
                  src="/images/branding/logo-512.png"
                  alt="Zilton Life Care Logo"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-editorial text-lg font-bold text-white">
                  Zilton Life Care
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#DCEEE4]">
                  Private Limited
                </span>
              </div>
            </div>

            <p className="text-xs text-white/80 leading-relaxed font-light">
              Dedicated to acute care hospital supplies, advanced IV antibiotics, and specialized nutrition therapy.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#DCEEE4] font-semibold mb-4">
              Index
            </h4>
            <ul className="space-y-2.5 font-mono text-xs text-white/90">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DCEEE4]" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Communications */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#DCEEE4] font-semibold mb-4">
              Communications
            </h4>
            <div className="space-y-3 text-xs text-white/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DCEEE4] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  LAXMI HOUSING &amp; FINANCE, 67 B, GOPAL MANSION, GURUNANAK ROAD, BANDRA WEST, MUMBAI – 400050
                </address>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DCEEE4] shrink-0" />
                <a href="tel:+919819667211" className="hover:text-white font-mono">
                  +91 9819667211
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#DCEEE4] shrink-0" />
                <span className="font-mono text-white/80">
                  info@ziltonlifecare.com
                </span>
              </div>
            </div>
          </div>

          {/* Col 4: Institutional Mandate */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#DCEEE4] font-semibold mb-4">
              Institutional Notice
            </h4>
            <div className="p-4 rounded-xl bg-white/10 border border-white/15 text-xs text-white/85 leading-relaxed font-light">
              This site is designed strictly for licensed medical professionals, hospital procurement bodies, and authorized stockists. Formulations are scheduled prescription drugs.
            </div>
          </div>
        </div>

        {/* Oversized Wordmark Banner */}
        <div className="pt-10 select-none overflow-hidden text-center">
          <span className="font-editorial text-[14vw] sm:text-[13vw] font-extrabold tracking-tighter text-white/10 block leading-none">
            ZILTON
          </span>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/70">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
