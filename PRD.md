# ZILTON LIFE CARE PRIVATE LIMITED

## Product Requirements Document (PRD)

**Version:** 1.0 --- Working baseline\
**Status:** Draft for team/client validation\
**Project type:** Static corporate pharmaceutical marketing website\
**Primary source of truth:** This document, together with
`ENGINEERING_ARCHITECTURE.md` and `DEVELOPER_RESPONSIBILITIES.md`

------------------------------------------------------------------------

## 1. Product overview

Build a modern, trustworthy, premium corporate website for **ZILTON LIFE
CARE PRIVATE LIMITED**, a pharmaceutical marketing company. The website
will introduce the company, present its product categories, communicate
its quality approach accurately, and provide a way for
healthcare/business visitors to make enquiries.

The website is an informational and business-enquiry platform. It is
**not** an e-commerce pharmacy, online medicine store, patient portal,
or clinical advice service.

### 1.1 Business details currently supplied

  -----------------------------------------------------------------------
  Field                   Supplied information    Status
  ----------------------- ----------------------- -----------------------
  Company name            ZILTON LIFE CARE        Supplied; legal
                          PRIVATE LIMITED         verification pending

  Establishment date      3 August 2026           Confirm whether
                                                  incorporation date or
                                                  another milestone

  Business type           Pharmaceutical          Supplied
                          marketing               

  Address                 LAXMI HOUSING &         Confirm exact official
                          FINANCE, 67 B, GOPAL    display and address
                          MANSION, GURUNANAK      type
                          ROAD, BANDRA WEST,      
                          MUMBAI 400050           

  Phone                   9819667211              Confirm +91 format and
                                                  WhatsApp Business
                                                  status

  Official email          Not yet                 Pending
                          created/provided        

  Social accounts         None currently          Not applicable for
                                                  initial launch

  Product categories      Critical Care           Supplied
                          Injection; Nutrition    
                          IV; Nutrition Sachet    

  Vision                  Better Healthcare,      Supplied
                          Healthier Lives         

  Mission                 Delivering Quality,     Supplied
                          Building Trust,         
                          Improving Lives         

  Manufacturing statement "From Renowned Source   Unverified; must not be
                          FDA approved, WHO       published as a factual
                          certificyed plant."     claim until
                                                  substantiated
  -----------------------------------------------------------------------

Do not infer or invent CIN, GSTIN, licences, manufacturer names,
certifications, product compositions, clinical claims, market presence,
management names, or company history.

### 1.2 Business context and positioning

-   Company operates in pharmaceutical marketing.
-   Product categories are known, but final product names, photographs
    and descriptions are pending.
-   The website should communicate reliability, quality focus,
    transparency and professional healthcare partnerships.
-   Do not imply that ZILTON owns or operates a manufacturing facility
    unless the client verifies that this is true.
-   Where products are manufactured by third parties, describe the
    relationship accurately as a manufacturing/marketing partnership,
    subject to client approval.

------------------------------------------------------------------------

## 2. Goals and success criteria

### 2.1 Primary goals

1.  Establish a credible digital presence for ZILTON LIFE CARE.
2.  Explain who the company is and what it stands for.
3.  Present the three product categories in a clear catalogue format.
4.  Explain the company's quality philosophy without unsupported
    certification claims.
5.  Enable general, product and business/distributor enquiries.
6.  Provide a responsive, accessible and search-engine-friendly
    experience.

### 2.2 Success criteria

-   Visitors can understand the company's business and product
    categories quickly.
-   All primary navigation links and calls to action work.
-   Product information is maintainable through structured data rather
    than duplicated page markup.
-   Contact form validation, submission, success and error states work.
-   The website is usable on mobile, tablet and desktop.
-   No unverified regulatory, manufacturing, therapeutic or product
    claims are published.
-   No critical accessibility, security, broken-link or responsive
    defects remain at release.
-   Client approves the content, visual design and final website.

------------------------------------------------------------------------

## 3. Target audience

Initial audience hypotheses; client confirmation is required:

-   Healthcare professionals and doctors.
-   Hospitals, clinics and healthcare institutions.
-   Pharmaceutical distributors, stockists and channel partners.
-   Business development and procurement contacts.
-   Other organizations seeking pharmaceutical marketing partnerships.

Do not write content that implies direct-to-patient sales unless the
client confirms this is part of the business model and approves the
compliance implications.

------------------------------------------------------------------------

## 4. Scope

### 4.1 In scope --- Version 1

-   Corporate homepage.
-   About Us page.
-   Products landing page with category-based listings.
-   Quality Assurance page.
-   Contact Us page with enquiry form.
-   Privacy Policy.
-   Disclaimer.
-   Terms of Use.
-   Responsive layouts.
-   Reusable design system and shared components.
-   Basic technical SEO and metadata.
-   Contact form integration through an approved managed service or
    secure serverless approach.
-   WhatsApp contact link only if the supplied number is confirmed as
    WhatsApp Business/appropriate for business enquiries.
-   Map embed or map link after the official location is confirmed.
-   Analytics only if approved by the client and privacy requirements
    are addressed.

### 4.2 Out of scope --- Version 1

-   Online medicine ordering or e-commerce.
-   Shopping cart, checkout or payment.
-   Patient accounts or login.
-   Doctor appointment booking.
-   Distributor login/portal.
-   Inventory, order or CRM management.
-   Admin dashboard.
-   Custom database or bespoke backend.
-   CMS, unless separately approved.
-   Medical diagnosis, treatment recommendations or patient-specific
    advice.
-   Downloadable product claims or clinical literature unless supplied
    and approved.

These items require separate discovery, scope, compliance review and
estimates if requested later.

------------------------------------------------------------------------

## 5. Sitemap and navigation

  -----------------------------------------------------------------------
  Route                   Page                    Purpose
  ----------------------- ----------------------- -----------------------
  `/`                     Home                    Company introduction
                                                  and key pathways

  `/about`                About Us                Company profile,
                                                  vision, mission and
                                                  values

  `/products`             Products                Product category
                                                  overview and listings

  `/quality`              Quality Assurance       Quality philosophy and
                                                  verified partner
                                                  information

  `/contact`              Contact Us              Contact information and
                                                  enquiry form

  `/privacy-policy`       Privacy Policy          Explain data collection
                                                  and handling

  `/disclaimer`           Disclaimer              Clarify website
                                                  information limitations

  `/terms`                Terms of Use            Website use terms
  -----------------------------------------------------------------------

Navigation labels may use "About Us", "Products", "Quality", and
"Contact". Legal links belong in the footer.

------------------------------------------------------------------------

## 6. Page-level requirements

### 6.1 Home page

**Purpose:** Establish trust and guide visitors to company, product,
quality and contact information.

**Section order:**

1.  Sticky white navigation bar.
2.  Split-screen, human-centric healthcare hero.
3.  About ZILTON introduction.
4.  Three product category cards.
5.  Quality Assurance story.
6.  Vision, Mission and Core Values.
7.  Business partnership call to action.
8.  Contact section or contact teaser.
9.  Dark forest-green footer.

**Hero content direction:** - Headline: "Better Healthcare. Healthier
Lives." - Supporting copy: quality-driven pharmaceutical solutions and
trusted healthcare partnerships. Final copy requires client approval. -
Primary CTA: "Explore Products" → `/products`. - Secondary CTA: "About
Us" → `/about`. - Use appropriately licensed healthcare imagery. Do not
use imagery that falsely implies a named doctor, hospital, certification
or company facility.

**Functional requirements:** - All CTAs navigate to the correct route or
section. - Product cards navigate to `/products` or a relevant category
anchor. - Header navigation works on mobile and desktop. - No dead links
or placeholder buttons in release build.

### 6.2 About Us

Required sections: - Company introduction. - Vision: "Better Healthcare,
Healthier Lives." - Mission: "Delivering Quality, Building Trust,
Improving Lives." - Core values: Quality, Integrity, Trust, Innovation,
Commitment, Excellence.

Do not create a company timeline or claim years of experience without
verified milestones. Company introduction must be based on
client-approved facts.

### 6.3 Products

**Chosen approach:** Category-based catalogue.

Categories: 1. Critical Care Injection. 2. Nutrition IV. 3. Nutrition
Sachet.

Each product card displays: - Product name. - Product photograph. -
Short, client-approved description.

No individual product detail pages are required for V1. The data model
must allow additional products and categories later without rewriting
page components.

**Pending client content:** exact product names, product images,
descriptions and any approved label/product information.

**Restrictions:** - Do not invent products, ingredients, compositions,
strengths, dosage, indications, contraindications, efficacy or safety
claims. - Do not recommend use or provide medical advice. - Do not add
"Buy Now", cart or order functionality.

### 6.4 Quality Assurance

Structure: - Split layout with suitable manufacturing/quality imagery. -
Quality story. - Three quality pillars, with final labels and copy
approved by the client.

Content must accurately distinguish the company's role from that of
manufacturing partners.

The client's initial phrase "From Renowned Source FDA approved, WHO
certificyed plant" is not approved website copy. Before any related
claim is published, obtain: - Legal name and location of the
manufacturer/facility. - Relevant licence/certificate name and issuing
authority. - Certificate number, scope and validity dates. - Evidence
that the certificate applies to the facility and relevant products. -
Client/legal approval of exact wording.

Do not display FDA/WHO logos, seals or badges without explicit legal
permission and substantiation. Do not use "FDA approved" or "WHO
certified" as a broad company claim based only on an informal statement.

### 6.5 Contact Us

One unified enquiry form.

Fields: - Full name --- required. - Organization --- optional. - Email
--- required and validated. - Phone --- required and validated. -
Enquiry type --- required: General, Distributor/Business Partnership,
Product-related. - Message --- required. - Privacy
acknowledgement/consent --- where applicable and approved.

Page content: - Confirmed business phone. - Official business email
(pending). - Confirmed office address. - Map or map link only after
location verification. - WhatsApp link only after number confirmation.

Functional requirements: - Client-approved recipient mailbox. - Secure
form submission through managed form service or serverless endpoint. -
Client-side validation and server/provider-side validation where
available. - Spam protection/rate limiting. - Loading, success and error
states. - Accessible labels and error messages. - Do not request patient
records, medical histories, prescriptions or other sensitive health
information. - Explain what data is collected and why in the approved
privacy notice. - Do not expose private API keys, SMTP credentials or
secrets in frontend code.

### 6.6 Legal pages

Create initial drafts for: - Privacy Policy. - Disclaimer. - Terms of
Use.

These are not legal advice and must be reviewed and approved by the
client/legal advisor before production. Privacy wording must match the
actual form provider, analytics, data retention and processing
practices. Do not claim that no data is stored if a third-party provider
retains submissions.

------------------------------------------------------------------------

## 7. Design and brand direction

### 7.1 Agreed visual direction

-   Overall personality: modern, trustworthy, premium.
-   Primary reference: Dr. Reddy's modern storytelling approach.
-   Secondary reference: Sun Pharma.
-   Hero direction: human-centric healthcare imagery (selected
    direction).
-   Logo direction: original abstract healthcare/life-science symbol,
    ZILTON wordmark and LIFE CARE descriptor. Client logo is still
    pending; this is a direction, not an approved logo.

### 7.2 Initial colour tokens

  Token             Value
  ----------------- -----------
  Primary Emerald   `#087B59`
  Primary Hover     `#066447`
  White             `#FFFFFF`
  Soft Mint         `#E8F4EE`
  Deep Forest       `#173B30`
  Body Text         `#46534C`
  Border            `#DCE8E0`

Treat these as initial design tokens; verify contrast and refine during
implementation.

### 7.3 Typography

-   Headings: Manrope.
-   Body: Inter.

### 7.4 UI principles

-   Clean hierarchy and generous whitespace.
-   Clear, restrained use of emerald green.
-   Consistent spacing, radii, shadows and button styles.
-   Strong readable contrast.
-   Responsive layouts, not merely scaled desktop layouts.
-   Motion should be subtle, purposeful and respect reduced-motion
    preferences.
-   Use original/client-provided assets when available; temporary stock
    images must be appropriately licensed and clearly replaceable.

------------------------------------------------------------------------

## 8. Non-functional requirements

### Responsiveness

Support mobile, tablet, laptop and large desktop viewports. Test common
widths and avoid horizontal overflow.

### Accessibility

Target WCAG 2.2 AA: - Semantic landmarks and heading order. -
Keyboard-operable navigation and forms. - Visible focus states. - Form
labels and understandable errors. - Appropriate image alt text. -
Sufficient colour contrast. - Reduced-motion support.

### Performance

Initial targets, not guarantees: - Lighthouse Performance: 90+. -
Accessibility: 95+. - Best Practices: 95+. - SEO: 95+.

Use optimized images, responsive image sizes, lazy-load below-the-fold
imagery, avoid unnecessary dependencies and prevent layout shift.

### SEO

-   Unique title and description per route.
-   Canonical URLs once domain is finalized.
-   Open Graph metadata.
-   Sitemap and robots directives.
-   Semantic HTML and descriptive links.
-   Factual organization structured data only after company details are
    verified.
-   Search Console setup after domain/hosting phase.
-   Ensure public routes are statically pre-rendered and indexable.

### Security and privacy

-   HTTPS in production.
-   No secrets in client bundles or Git.
-   Validate form inputs.
-   Spam protection.
-   Minimize collected personal data.
-   Do not collect sensitive medical information.
-   Review third-party service privacy and retention terms.

### Browser support

Support current stable versions of Chrome, Safari, Firefox and Edge,
including mobile browsers.

------------------------------------------------------------------------

## 9. Content and asset dependencies

### Required from client

**Blocking or high priority** - Official logo in SVG/PNG and any brand
guidelines. - Confirmed legal company name and CIN. - Confirmed
registered office and display address. - Clarify whether 3 August 2026
is incorporation date or another establishment milestone. - Approved
company introduction. - Official email address and enquiry recipient. -
Exact product names and approved descriptions. - Product photographs. -
Manufacturing partner identity and verifiable certificates/licences. -
Target audience and geographic markets. - Confirmation whether phone
number is +91 9819667211 and whether it is WhatsApp Business.

**Helpful** - Company brochure/profile. - Product catalogue or approved
product literature. - Licensed facility photographs. - Team/management
details and photographs (optional). - Social media URLs if accounts are
created. - Confirmed map location. - Any complaint/adverse-event
reporting contact and process, if applicable.

Track all requests in `CLIENT_REQUIREMENTS.md` in the repository with
statuses: Pending, Received, Under Review, Approved, Not Applicable.

------------------------------------------------------------------------

## 10. Acceptance criteria

The V1 website is ready for client acceptance when:

1.  All agreed routes load directly and navigation works.
2.  All pages follow the approved visual system.
3.  Layouts work at mobile, tablet and desktop sizes.
4.  Product listings are data-driven and show only approved content.
5.  No unverified claims or fabricated company/product facts appear.
6.  Contact form validates, submits to the approved recipient and
    displays success/error feedback.
7.  Privacy notice accurately describes form/analytics data handling.
8.  Keyboard navigation, focus states, labels and image alternatives are
    tested.
9.  Page metadata, sitemap and robots configuration are implemented and
    checked.
10. No critical console errors, broken routes or broken assets remain.
11. Build and automated checks pass.
12. Client reviews and approves the content and design.

------------------------------------------------------------------------

## 11. Assumptions and open decisions

-   English-only V1 unless the client requests more languages.
-   No CMS or admin panel in V1.
-   No custom backend/database in V1.
-   Product detail pages are not required.
-   Product data will live in typed local data files.
-   Contact form provider is not selected yet.
-   Domain, hosting and production deployment are deliberately deferred
    until after the coding and testing phase.
-   Final content and compliance claims require client approval.

------------------------------------------------------------------------

## 12. Change control

Any request that changes scope (new page, portal, database, e-commerce,
multilingual support, CMS, advanced integrations or new user roles) must
be recorded as a change request. Assess its impact on architecture,
effort, timeline, security and compliance before implementation.
