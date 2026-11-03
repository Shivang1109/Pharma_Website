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
    <footer className="bg-[#1F3D33] text-[#F6F4EE] pt-16 sm:pt-24 pb-12 overflow-hidden border-t border-[#1F3D33]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Clinical Statement */}
        <div className="pb-12 border-b border-white/10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#0B996F] font-semibold block mb-2">
              Pharmaceutical Marketing Enterprise
            </span>
            <p className="font-editorial text-2xl sm:text-3xl text-white tracking-tight leading-snug">
              Specialized parenteral critical care and clinical nutrition solutions across India.
            </p>
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 font-mono text-xs text-[#0B996F] hover:text-white transition-colors cursor-pointer group"
            aria-label="Scroll back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* 4-Column Grid */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10">
          {/* Col 1: Registered Entity */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#0B996F] font-semibold mb-4">
              Entity Master
            </h4>
            <p className="text-sm font-semibold text-white leading-relaxed">
              {COMPANY.name}
            </p>
            <p className="text-xs text-white/70 mt-1 font-mono">
              CIN: Statutory Corporate Master Registered in Mumbai
            </p>
            <p className="text-xs text-white/80 mt-4 leading-relaxed font-light">
              Focusing on hospital-grade injectable therapeutics, advanced IV antibiotics, and targeted clinical nutrition sachets.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#0B996F] font-semibold mb-4">
              Index
            </h4>
            <ul className="space-y-2.5 font-mono text-xs text-white/80">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="hover:text-[#0B996F] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B996F]" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Communications */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#0B996F] font-semibold mb-4">
              Communications
            </h4>
            <div className="space-y-3 text-xs text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0B996F] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  LAXMI HOUSING &amp; FINANCE, 67 B, GOPAL MANSION, GURUNANAK ROAD, BANDRA WEST, MUMBAI – 400050
                </address>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0B996F] shrink-0" />
                <a href="tel:+919819667211" className="hover:text-white font-mono">
                  +91 9819667211
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0B996F] shrink-0" />
                <span className="font-mono text-white/60">
                  info@ziltonlifecare.com
                </span>
              </div>
            </div>
          </div>

          {/* Col 4: Institutional Mandate */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#0B996F] font-semibold mb-4">
              Institutional Notice
            </h4>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-white/75 leading-relaxed font-light">
              This site is designed strictly for licensed medical professionals, hospital procurement bodies, and authorized stockists. Formulations are scheduled prescription drugs.
            </div>
          </div>
        </div>

        {/* Oversized Wordmark Banner */}
        <div className="pt-10 select-none overflow-hidden text-center">
          <span className="font-editorial text-[14vw] sm:text-[13vw] font-extrabold tracking-tighter text-white/5 block leading-none">
            ZILTON
          </span>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/60">
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
