import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingContactWidget } from "~/components/common/FloatingContactWidget";

type SiteLayoutProps = {
  children: React.ReactNode;
};

/**
 * Wraps every page with the shared Navbar, Footer, and Floating Contact Widget.
 * Used in root.tsx so all routes inherit the layout automatically.
 */
export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col relative bg-[#FAFCFA] selection:bg-[#DFF1E9] selection:text-[#123D32]">
      <Navbar />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <FloatingContactWidget />
    </div>
  );
}

