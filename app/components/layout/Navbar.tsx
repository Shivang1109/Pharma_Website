import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS } from "~/data/navigation";
import { COMPANY } from "~/data/company";
import { Magnetic } from "~/components/motion/Magnetic";

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);

      // Hide on scroll down, show on scroll up
      if (currentY > lastScrollY.current && currentY > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "bg-[#F6F4EE]/90 backdrop-blur-md border-b border-[#1F3D33]/10 py-3.5 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Logo & Clinical Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-[#0B996F]"
            aria-label={`${COMPANY.name} — Homepage`}
          >
            <div className="w-10 h-10 rounded-lg bg-[#1F3D33] p-1.5 flex items-center justify-center text-[#F6F4EE] shadow-xs group-hover:scale-105 transition-transform">
              <img
                src="/images/branding/logo-512.png"
                alt="Zilton Logo"
                className="w-full h-full object-contain filter invert contrast-200"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-editorial text-lg tracking-tight font-bold text-[#1F3D33]">
                Zilton
              </span>
              <span className="font-mono text-[9px] tracking-widest uppercase text-[#0B996F] font-semibold mt-0.5">
                Life Care
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items with Sliding Underline Indicator */}
          <ul className="hidden md:flex items-center gap-8 relative" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.to} className="relative">
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `text-xs font-mono uppercase tracking-wider font-semibold transition-colors py-2 ${
                      isActive ? "text-[#1F3D33]" : "text-[#4A6056] hover:text-[#0B996F]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0B996F] rounded-full animate-in fade-in duration-300" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Magnetic Enquiry Action */}
          <div className="hidden md:block">
            <Magnetic strength={0.3}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1F3D33] hover:bg-[#0B996F] text-[#F6F4EE] text-xs font-mono uppercase tracking-wider font-semibold shadow-xs transition-colors duration-200"
              >
                <span>Institutional Desk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </Magnetic>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[#1F3D33] hover:bg-[#1F3D33]/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B996F]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-6 border-t border-[#1F3D33]/10 bg-[#F6F4EE] animate-in fade-in slide-in-from-top-2 duration-200">
            <ul className="space-y-3 px-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-lg text-sm font-mono tracking-wider uppercase font-semibold ${
                        isActive
                          ? "bg-[#1F3D33] text-[#F6F4EE]"
                          : "text-[#4A6056] hover:bg-[#1F3D33]/5 text-[#1F3D33]"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t border-[#1F3D33]/10 px-2">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1F3D33] text-[#F6F4EE] text-xs font-mono uppercase tracking-wider font-semibold"
              >
                <span>Institutional Enquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
