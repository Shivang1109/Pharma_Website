import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type SiteLayoutProps = {
  children: React.ReactNode;
};

/**
 * Wraps every page with the shared Navbar and Footer.
 * Used in root.tsx so all routes inherit the layout automatically.
 */
export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

