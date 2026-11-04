# ZILTON LIFE CARE — FINAL ASSET INVENTORY
## Image Registry Audit & Asset Status

**Report Date:** November 2026  
**Registry File:** `app/data/images.ts`  
**Status:** Client packshots pending; all slots have functional fallbacks.

---

## 1. Asset Categories

### 1.1 Branding Assets

| File Path | Description | Status |
|---|---|---|
| `public/images/branding/logo-512.png` | Primary logo (512×512px PNG) | ✅ Present |
| `public/images/branding/logo.png` | Secondary logo (smaller variant) | ✅ Present |

**Note:** Both logo files are present and used throughout the site (Navbar, Apple touch icon, OG image). These are the official Zilton Life Care branding assets supplied or approved by the client.

---

### 1.2 Product Images (12 SVG Illustrations)

All 12 product images are locally hosted SVG illustrations located in `public/images/products/`. These are purpose-built pharmaceutical packaging illustrations created for this project.

**These are NOT stock photography** — they are custom SVG artwork representing the product category, form factor, and brand colour scheme. They serve as production-quality visual placeholders until the client supplies official packshot photography.

| Registry Key | File Path | Product | Status |
|---|---|---|---|
| `products["merozil-1gm"]` | `/images/products/merozil-1gm.svg` | MEROZIL 1gm (Meropenem 1gm) | ✅ SVG illustration present |
| `products["merozil-500mg"]` | `/images/products/merozil-500mg.svg` | MEROZIL 500mg (Meropenem 500mg) | ✅ SVG illustration present |
| `products["ziltaz-4-5gm"]` | `/images/products/ziltaz-4-5gm.svg` | Ziltaz 4.5gm (Pip + Taz) | ✅ SVG illustration present |
| `products["polyzil-5lac"]` | `/images/products/polyzil-5lac.svg` | Polyzil 5 lac IU (Polymyxin B) | ✅ SVG illustration present |
| `products["polyzil-7-5lac"]` | `/images/products/polyzil-7-5lac.svg` | Polyzil 7.5 lac IU (Polymyxin B) | ✅ SVG illustration present |
| `products["fosfozil-4gm"]` | `/images/products/fosfozil-4gm.svg` | Fosfozil 4gm (Fosfomycin IV) | ✅ SVG illustration present |
| `products["tigezil-50mg"]` | `/images/products/tigezil-50mg.svg` | Tigezil 50mg (Tigecycline) | ✅ SVG illustration present |
| `products["zilfcm-500mg"]` | `/images/products/zilfcm-500mg.svg` | ZilFCM 500mg (Ferric Carboxymaltose) | ✅ SVG illustration present |
| `products["micasure-50mg"]` | `/images/products/micasure-50mg.svg` | Micasure 50mg (Micafungin) | ✅ SVG illustration present |
| `products["zinctrace-iv"]` | `/images/products/zinctrace-iv.svg` | Zinctrace IV (Zinc Chloride IV) | ✅ SVG illustration present |
| `products["hmb-zil-3gm"]` | `/images/products/hmb-zil-3gm.svg` | HMB ZIL 3gm Sachet (HMB) | ✅ SVG illustration present |
| `products["glutashape-sachet"]` | `/images/products/glutashape-sachet.svg` | Glutashape Sachet (L-Glutamine) | ✅ SVG illustration present |

**Missing product image mappings:** None. All 12 SKUs in `app/data/products.ts` have a corresponding image entry.

**Unmapped image files in `public/images/products/`:** None. All SVG files are referenced.

---

### 1.3 Category Division Panel Images (3 Placeholder SVGs)

Used on the Home page division panels. These are generic category illustrations, not product-specific.

| Registry Key | File Path | Category | Status |
|---|---|---|---|
| `division.critical-care-injection` | `/images/products/placeholder-injection.svg` | Critical Care Injection | ✅ Placeholder SVG |
| `division.nutrition-iv` | `/images/products/placeholder-iv.svg` | Nutrition IV | ✅ Placeholder SVG |
| `division.nutrition-sachet` | `/images/products/placeholder-sachet.svg` | Nutrition Sachet | ✅ Placeholder SVG |

**Client action:** Optional — client may supply category imagery for the home page division panels. Current SVG placeholders are functional and visually consistent.

---

### 1.4 Stock Photography (Unsplash)

The following slots use external Unsplash URLs. These are professional clinical/pharmaceutical images used as **illustrative placeholders** and **do not represent actual Zilton Life Care premises, products, or personnel.** Images load from Unsplash CDN.

| Registry Key | Unsplash URL (truncated) | Usage | Requires Replacement |
|---|---|---|---|
| `heroMain` | `photo-1584308666744-24d5c474f2ae` | Homepage hero banner | Optional — replace with official facility photo |
| `aboutPlant` | `photo-1563213126-a4273aed2016` | About page — manufacturing/plant | Optional — replace with official partner plant photo |
| `aboutLeadership` | `photo-1516841273335-e39b37888115` | About page — leadership | Optional — replace with official team photo |
| `quality01` | `photo-1563213126-a4273aed2016` | Quality page — Step 1 (cleanroom) | ⚠️ Same photo as `aboutPlant` — see note below |
| `quality02` | `photo-1579154204601-01588f351e67` | Quality page — Step 2 (lab testing) | Optional |
| `quality03` | `photo-1584820927498-cfe5211fd8bf` | Quality page — Step 3 (cold chain) | Optional |
| `quality04` | `photo-1538108149393-fbbd81895907` | Quality page — Step 4 (hospital delivery) | Optional |
| `contactOffice` | `photo-1497366216548-37526070297c` | Contact page — office photo | Optional — replace with official office photo |

**⚠️ Repeated image:** `aboutPlant` and `quality01` share the same Unsplash photo URL (`photo-1563213126-a4273aed2016`). This is intentional — both depict a pharmaceutical cleanroom/manufacturing environment. Replacing one with a distinct image is recommended when client photography is available.

**No other image slots share the same URL.**

---

### 1.5 Other Public Assets

| File Path | Description | Status |
|---|---|---|
| `public/favicon.ico` | Site favicon | ✅ Present |
| `public/robots.txt` | Search engine crawl directives (allow all) | ✅ Present |
| `public/sitemap.xml` | XML sitemap (8 routes, dated Nov 2026) | ✅ Present |
| `public/images/company/company-graphic.svg` | Company SVG graphic | ✅ Present |
| `public/images/hero/hero-medical-graphic.svg` | Hero medical SVG illustration | ✅ Present |

---

## 2. Assets Requiring Client-Supplied Photography

The following slots currently use Unsplash stock photos. Client should supply official photography for commercial launch.

| Priority | Slot | Current State | Ideal Replacement |
|---|---|---|---|
| HIGH | `heroMain` | Unsplash stock | Official Zilton Life Care office, lab, or clinical setting |
| MEDIUM | `aboutPlant` | Unsplash stock | Authorized photo of contract manufacturing partner facility |
| MEDIUM | `aboutLeadership` | Unsplash stock | Official team or leadership photo |
| MEDIUM | `contactOffice` | Unsplash stock | Official Bandra West office reception or exterior |
| LOW | `quality01`–`quality04` | Unsplash stock | Photos representing actual quality control process stages |
| HIGH | All 12 product `products[*]` slots | Custom SVG illustration | Official packshot photography or 3D renders of commercial carton/vial packaging |

---

## 3. How to Replace an Image

All image changes require only a single edit in `app/data/images.ts`:

```typescript
// Example: replace the hero image with an official photo
heroMain: "/images/hero/official-facility-photo.jpg",

// Example: replace a product image with an official packshot
products: {
  "merozil-1gm": "/images/products/official/merozil-1gm-packshot.png",
  // ... rest of products
}
```

Place the new image file in the appropriate `public/images/` subdirectory. The `ImageSlot` component handles all rendering.

---

## 4. Summary

| Category | Total Slots | Populated | Requires Client Photography |
|---|---|---|---|
| Branding | 2 | 2 (official) | 0 |
| Product images | 12 | 12 (SVG illustrations) | 12 (official packshots pending) |
| Category panels | 3 | 3 (placeholder SVGs) | 3 (optional) |
| Stock photography slots | 8 | 8 (Unsplash — illustrative) | 8 (recommended) |
| Other public assets | 5 | 5 | 0 |
| **Total** | **30** | **30** | **23 (optional/pending)** |

No image slots are broken or missing. All 30 slots resolve to a valid file or URL.
