/**
 * Centralized Image Slot Registry for ZILTON LIFE CARE
 * 
 * Instructions:
 * - All images across the application route through this registry.
 * - By default, keys are set to `null` to render deliberate, studio-grade wireframe placeholders.
 * - Adding an asset path here is the ONLY step needed to display photography across the website.
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
  products: Record<string, string | null>;
}

export const IMAGES: ImageRegistry = {
  heroMain: null,
  aboutPlant: null,
  aboutLeadership: null,
  quality01: null,
  quality02: null,
  quality03: null,
  quality04: null,
  contactOffice: null,
  products: {
    "merozil-1gm": null,
    "merozil-500mg": null,
    "ziltaz-4-5gm": null,
    "polyzil-5lac": null,
    "polyzil-7-5lac": null,
    "fosfozil-4gm": null,
    "tigezil-50mg": null,
    "zilfcm-500mg": null,
    "micasure-50mg": null,
    "zinctrace-iv": null,
    "hmb-zil-3gm": null,
    "glutashape-sachet": null,
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
  return (IMAGES as any)[key] || null;
}

