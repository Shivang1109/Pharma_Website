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
  // Professional pharmaceutical lab / research environment
  heroMain:
    "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=900&q=80&auto=format&fit=crop",

  // ── ABOUT ──────────────────────────────────────────────────
  // Pharmaceutical manufacturing / cleanroom facility
  aboutPlant:
    "https://images.unsplash.com/photo-1563213126-a4273aed2016?w=900&q=80&auto=format&fit=crop",
  // Corporate / professional team meeting
  aboutLeadership:
    "https://images.unsplash.com/photo-1516841273335-e39b37888115?w=900&q=80&auto=format&fit=crop",

  // ── QUALITY ────────────────────────────────────────────────
  // Lab testing / quality assurance
  quality01:
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900&q=80&auto=format&fit=crop",
  // Sterile injectable vials / IV preparations
  quality02:
    "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=900&q=80&auto=format&fit=crop",
  // Cold chain / temperature-controlled logistics
  quality03:
    "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=900&q=80&auto=format&fit=crop",
  // Microscope / analytical lab work
  quality04:
    "https://images.unsplash.com/photo-1532094349884-543559ac716a?w=900&q=80&auto=format&fit=crop",

  // ── CONTACT ────────────────────────────────────────────────
  // Professional corporate office / desk
  contactOffice:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&auto=format&fit=crop",

  // ── HOME DIVISION PANELS ───────────────────────────────────
  "division.critical-care-injection":
    "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?w=900&q=80&auto=format&fit=crop",
  "division.nutrition-iv":
    "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=900&q=80&auto=format&fit=crop",
  "division.nutrition-sachet":
    "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=900&q=80&auto=format&fit=crop",

  // ── PRODUCTS ───────────────────────────────────────────────
  // Individual product cards — injection vials / IV bags / sachets
  // These are generic pharmaceutical illustrations, not actual ZLC packaging.
  products: {
    // Critical Care Injections (vials)
    "merozil-1gm":
      "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?w=600&q=80&auto=format&fit=crop",
    "merozil-500mg":
      "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?w=600&q=80&auto=format&fit=crop",
    "ziltaz-4-5gm":
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80&auto=format&fit=crop",
    "polyzil-5lac":
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80&auto=format&fit=crop",
    "polyzil-7-5lac":
      "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?w=600&q=80&auto=format&fit=crop",
    "fosfozil-4gm":
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80&auto=format&fit=crop",
    "tigezil-50mg":
      "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?w=600&q=80&auto=format&fit=crop",
    // Haematinics injection
    "zilfcm-500mg":
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80&auto=format&fit=crop",
    // Antifungal injection
    "micasure-50mg":
      "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?w=600&q=80&auto=format&fit=crop",
    // Nutrition IV
    "zinctrace-iv":
      "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=600&q=80&auto=format&fit=crop",
    // Nutrition Sachets
    "hmb-zil-3gm":
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=600&q=80&auto=format&fit=crop",
    "glutashape-sachet":
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=600&q=80&auto=format&fit=crop",
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
