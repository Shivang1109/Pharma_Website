# ZILTON LIFE CARE PRIVATE LIMITED — Corporate Web Platform

Modern, trustworthy corporate pharmaceutical marketing web platform for **ZILTON LIFE CARE PRIVATE LIMITED**.

---

## 🏗️ Architecture & Team Division

The codebase is strictly modularized to support parallel development between **Developer 1** (UI & Shared Experience Lead) and **Developer 2** (Catalogue & Business Functionality Lead).

### Developer 2 (Catalogue & Business Functionality Lead) — Completed Modules:
- **Module 1: Product Catalogue**
  - Data contracts: `app/types/product.ts`
  - Structured dataset: `app/data/products.ts` (12 official formulations across Critical Care Injections, IV Antibiotics, Nutrition IV, Nutrition Sachets)
  - Modular UI: `app/components/sections/products/CategoryFilter.tsx`, `ProductCard.tsx`, `ProductGrid.tsx`
  - Route view: `app/routes/products.tsx`
  - Visual fallbacks: `public/images/products/*.svg`
- **Module 2: Contact Form System**
  - Validation schema: `app/schemas/contact.schema.ts` (Zod validation for name, email, phone, enquiry type, message, consent)
  - Submission contract: `app/services/contact.service.ts`
  - Modular UI: `app/components/sections/contact/ContactInfo.tsx`, `ContactForm.tsx`
  - Route view: `app/routes/contact.tsx`
- **Module 3: Quality Assurance**
  - Split narrative header: `app/components/sections/quality/QualityHero.tsx`
  - 3 Core pillars: `app/components/sections/quality/QualityPillars.tsx`
  - Manufacturing partnership statement: `app/components/sections/quality/PartnerStandards.tsx`
  - Route view: `app/routes/quality.tsx`
- **Module 4: Legal Pages & SEO**
  - Reusable legal template with draft disclaimer: `app/components/sections/legal/LegalPageLayout.tsx`
  - Routes: `app/routes/privacy-policy.tsx`, `app/routes/disclaimer.tsx`, `app/routes/terms.tsx`
  - SEO utilities & JSON-LD Organization Schema: `app/utils/seo.ts`
- **Dependency & Client Tracking**
  - `CLIENT_REQUIREMENTS.md`

### Developer 1 (UI & Shared Experience Lead) — Completed:
- Design tokens & typography: `app/app.css` (Manrope + Inter)
- Global layout: `Navbar.tsx`, `Footer.tsx`, `SiteLayout.tsx` (`app/components/layout/`)
- Homepage (`app/routes/home.tsx` & `app/components/sections/home/`)
- About Us page (`app/routes/about.tsx` & `app/components/sections/about/`)
- Shared primitives: `app/components/common/Button.tsx`, `Container.tsx`, `SectionHeading.tsx`

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run TypeScript checks
npm run typecheck

# Build for production
npm run build
```
