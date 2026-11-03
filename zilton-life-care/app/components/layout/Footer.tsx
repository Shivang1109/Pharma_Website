import { Link } from "react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { Container } from "~/components/common/Container";
import { NAV_ITEMS, FOOTER_LEGAL_LINKS } from "~/data/navigation";
import { COMPANY } from "~/data/company";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#173B30] text-white"
      role="contentinfo"
      aria-label="Site footer"
    >
      <Container>
        {/* Main footer grid */}
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand column */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <div className="flex flex-col leading-none">
              <span
                className="text-xl font-extrabold tracking-tight text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                ZILTON
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#87bfac]">
                Life Care
              </span>
            </div>
            <p className="text-sm text-[#a8cfc0] leading-relaxed max-w-xs">
              {COMPANY.mission}
            </p>
            <p className="text-xs text-[#6fa38e]">
              {COMPANY.type}
            </p>
          </div>

          {/* Navigation column */}
          <nav aria-label="Footer navigation">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#87bfac]">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-[#a8cfc0] transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact column */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#87bfac]">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4" role="list">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#087B59]" aria-hidden="true" />
                <address className="not-italic text-sm text-[#a8cfc0] leading-relaxed">
                  {COMPANY.address.line1},<br />
                  {COMPANY.address.line2},<br />
                  {COMPANY.address.city} – {COMPANY.address.pincode}
                </address>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-[#087B59]" aria-hidden="true" />
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="text-sm text-[#a8cfc0] hover:text-white transition-colors"
                  aria-label={`Call us at ${COMPANY.phone}`}
                >
                  {COMPANY.phone}
                </a>
              </li>
              {COMPANY.email && (
                <li className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#087B59]" aria-hidden="true" />
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-sm text-[#a8cfc0] hover:text-white transition-colors"
                  >
                    {COMPANY.email}
                  </a>
                </li>
              )}
              {!COMPANY.email && (
                <li className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#6fa38e]" aria-hidden="true" />
                  <span className="text-sm text-[#6fa38e] italic">
                    Email — coming soon
                  </span>
                </li>
              )}
            </ul>
          </div>

          {/* Products column */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#87bfac]">
              Our Products
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {COMPANY.productCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products#${cat.id}`}
                    className="text-sm text-[#a8cfc0] hover:text-white transition-colors"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-4 border-t border-[#1f4e3f] py-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-[#6fa38e]">
            © {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <nav aria-label="Legal links">
            <ul className="flex flex-wrap gap-4 justify-center sm:justify-end" role="list">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-xs text-[#6fa38e] hover:text-[#a8cfc0] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}

