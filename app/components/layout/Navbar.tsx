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
      "text-sm font-semibold transition-colors duration-150",
      isActive
        ? "text-[#087B59]"
        : "text-[#46534C] hover:text-[#087B59]",
    ].join(" ");

  return (
    <header
      className={[
        "sticky top-0 z-50 bg-white transition-shadow duration-200",
        scrolled ? "shadow-[0_1px_8px_0_rgb(23_59_48/0.10)]" : "",
      ].join(" ")}
      role="banner"
    >
      <Container>
        <nav
          className="flex h-16 items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo / Brand */}
          <Link
            to="/"
            className="flex flex-col leading-none focus-visible:outline-[#087B59]"
            aria-label={`${COMPANY.shortName} — home`}
          >
            <span
              className="text-lg font-extrabold tracking-tight text-[#087B59]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ZILTON
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#46534C]">
              Life Care
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-7" role="list">
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
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-[#46534C] hover:bg-[#E8F4EE] transition-colors"
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
          className="md:hidden border-t border-[#DCE8E0] bg-white"
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
                        "block rounded-lg px-4 py-3 text-sm font-semibold transition-colors",
                        isActive
                          ? "bg-[#E8F4EE] text-[#087B59]"
                          : "text-[#46534C] hover:bg-[#E8F4EE] hover:text-[#087B59]",
                      ].join(" ")
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="mt-3 pt-3 border-t border-[#DCE8E0]">
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

