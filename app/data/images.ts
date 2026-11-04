/**
 * Centralized Image Slot Registry for ZILTON LIFE CARE
 *
 * Instructions:
 * - All images across the application route through this registry.
 * - Adding an asset path here is the ONLY step needed to display photography.
 * - Stock images below are professional pharmaceutical/clinical illustrations
 *   sourced from Unsplash. They are used for illustrative purposes only and
 *   do NOT represent actual Zilton Life Care infrastructure or products.
 */

export interface ImageRegistry {
  heroMain: string | null;
  aboutPlant: string | null;
  aboutLeadership: string | null;
  quality01: string | null;
  quality02: string | null;
  quality03: string | null;
  quality04: string | null;
  contactOffice: string | null;
  // Home page division panels
  "division.critical-care-injection": string | null;
  "division.nutrition-iv": string | null;
  "division.nutrition-sachet": string | null;
  products: Record<string, string | null>;
}

export const IMAGES: ImageRegistry = {
  // ── HOME HERO ──────────────────────────────────────────────
  // Minimalist high-end pharmaceutical research environment with natural clinical daylight
  heroMain:
    "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1600&q=85&auto=format&fit=crop",

  // ── ABOUT ──────────────────────────────────────────────────
  // Audited cGMP pharmaceutical cleanroom manufacturing & automated packaging line
  aboutPlant:
    "https://images.unsplash.com/photo-1563213126-a4273aed2016?w=1200&q=85&auto=format&fit=crop",
  // Executive corporate healthcare governance meeting
  aboutLeadership:
    "https://images.unsplash.com/photo-1516841273335-e39b37888115?w=1600&q=85&auto=format&fit=crop",

  // ── QUALITY ────────────────────────────────────────────────
  // Step 01: Audited cleanroom facility & cGMP sterile compounding suite
  quality01:
    "https://images.unsplash.com/photo-1563213126-a4273aed2016?w=1200&q=85&auto=format&fit=crop",
  // Step 02: Analytical HPLC testing & spectrophotometry assay (Replaced cake photo)
  quality02:
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&q=85&auto=format&fit=crop",
  // Step 03: Temperature-monitored refrigerated cold chain transit container (2°C – 8°C)
  quality03:
    "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1200&q=85&auto=format&fit=crop",
  // Step 04: Hospital clinical department receiving dock and lot verification
  quality04:
    "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&q=85&auto=format&fit=crop",

  // ── CONTACT ────────────────────────────────────────────────
  // Professional pharmaceutical corporate office suite & reception
  contactOffice:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85&auto=format&fit=crop",

  // ── HOME DIVISION PANELS ───────────────────────────────────
  // Division 1: Sterile parenteral glass injection vial & monocarton
  "division.critical-care-injection":
    "/images/products/placeholder-injection.svg",
  // Division 2: Clinical intravenous infusion solution bottle
  "division.nutrition-iv":
    "/images/products/placeholder-iv.svg",
  // Division 3: Clinical metabolic dietary nutrition sachet pack
  "division.nutrition-sachet":
    "/images/products/placeholder-sachet.svg",

  // ── PRODUCTS (ALL 12 INDIVIDUAL FORMULATIONS) ──────────────
  // Authentic clinical packaging packshots matching exact title, salt & strength
  products: {
    // 1. Meropenem 1gm — Sterile carbapenem injection vial with carton & WFI ampoule
    "merozil-1gm": "/images/products/merozil-1gm.svg",

    // 2. Meropenem 500mg — Pharmaceutical carbapenem injection vial with carton & WFI ampoule
    "merozil-500mg": "/images/products/merozil-500mg.svg",

    // 3. Piperacillin + Tazobactam — Clear sterile antipseudomonal infusion vial & carton
    "ziltaz-4-5gm": "/images/products/ziltaz-4-5gm.svg",

    // 4. Polymyxin B 5,00,000 IU — Lyophilized sterile glass vial with amber seal & carton
    "polyzil-5lac": "/images/products/polyzil-5lac.svg",

    // 5. Polymyxin B 7,50,000 IU — High-potency intensive care antibiotic vial & carton
    "polyzil-7-5lac": "/images/products/polyzil-7-5lac.svg",

    // 6. Fosfomycin 4gm — Sterile bactericidal infusion glass bottle with volumetric scale & carton
    "fosfozil-4gm": "/images/products/fosfozil-4gm.svg",

    // 7. Tigecycline 50mg — Light-protective amber pharmaceutical glass vial with orange cap & carton
    "tigezil-50mg": "/images/products/tigezil-50mg.svg",

    // 8. Ferric Carboxymaltose 500mg — Dark colloidal iron complex in sterile vial & carton
    "zilfcm-500mg": "/images/products/zilfcm-500mg.svg",

    // 9. Micafungin 50mg — Lyophilized echinocandin antifungal vial with violet cap & carton
    "micasure-50mg": "/images/products/micasure-50mg.svg",

    // 10. Zinc Chloride IV — Intravenous infusion bottle for TPN replenishment & carton
    "zinctrace-iv": "/images/products/zinctrace-iv.svg",

    // 11. HMB 3gm — Oral metabolic nutrition recovery sachet & dispenser carton
    "hmb-zil-3gm": "/images/products/hmb-zil-3gm.svg",

    // 12. Glutashape — Pharmaceutical-grade L-Glutamine immunonutrient sachet & carton
    "glutashape-sachet": "/images/products/glutashape-sachet.svg",
  },
};

/**
 * Retrieve image source by slot key with safe fallback
 */
export function getImageSrc(key: string): string | null {
  if (key.startsWith("product.")) {
    const slug = key.replace("product.", "");
    return IMAGES.products[slug] || null;
  }
  // Support any top-level key (including those with dots like "division.xxx")
  return (IMAGES as Record<string, any>)[key] ?? null;
}
