import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "~/data/navigation";
import { COMPANY } from "~/data/company";
import { Button } from "~/components/common/Button";
import { Container } from "~/components/common/Container";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "text-sm font-semibold transition-all duration-200 relative py-1",
      isActive
        ? "text-[#07845E] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#07845E] after:rounded-full"
        : "text-[#53635C] hover:text-[#07845E]",
    ].join(" ");

  return (
    <header
      className={[
        "sticky top-0 z-50 bg-[#FAFCFA]/90 backdrop-blur-md transition-all duration-300 border-b",
        scrolled
          ? "border-[#E4EBE6] shadow-[0_4px_20px_rgba(18,61,50,0.06)]"
          : "border-transparent",
      ].join(" ")}
      role="banner"
    >
      <Container>
        <nav
          className="flex h-18 items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo / Brand */}
          <Link
            to="/"
            className="flex flex-col leading-none focus-visible:outline-[#07845E] group"
            aria-label={`${COMPANY.shortName} — home`}
          >
            <span
              className="text-xl font-extrabold tracking-tight text-[#123D32] group-hover:text-[#07845E] transition-colors"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ZILTON
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#07845E] mt-0.5">
              Life Care
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={activeLinkClass} end={item.to === "/"}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button to="/contact" size="sm">
              Get in Touch
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2.5 text-[#53635C] hover:bg-[#DFF1E9] transition-colors focus-visible:outline-[#07845E]"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-[#E4EBE6] bg-[#FAFCFA] shadow-lg animate-fade-in"
          role="dialog"
          aria-label="Navigation menu"
        >
          <Container>
            <ul className="flex flex-col gap-1 py-4" role="list">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      [
                        "block rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                        isActive
                          ? "bg-[#DFF1E9] text-[#07845E]"
                          : "text-[#53635C] hover:bg-[#F2F7F4] hover:text-[#07845E]",
                      ].join(" ")
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="mt-3 pt-3 border-t border-[#E4EBE6]">
                <Button to="/contact" size="sm" className="w-full justify-center">
                  Get in Touch
                </Button>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}

