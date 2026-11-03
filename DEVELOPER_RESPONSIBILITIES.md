# ZILTON LIFE CARE PRIVATE LIMITED

## Developer Responsibilities & AI Collaboration Guide

**Version:** 1.0 --- Working baseline\
**Status:** Draft for team agreement\
**Purpose:** Make ownership unambiguous so either developer and their AI
assistant can start work using the same project context.

------------------------------------------------------------------------

## 1. Team model

Both developers are treated as peers with equal responsibility.
Ownership is divided by feature area, not seniority.

-   **Developer 1 --- UI & Shared Experience Lead:** design system,
    shared layout, homepage and About Us.
-   **Developer 2 --- Catalogue & Business Functionality Lead:**
    products, quality, contact, legal pages and SEO.
-   **Both developers:** architecture agreement, integration, testing,
    reviews, issue tracking and release readiness.

"Lead" means primary implementation owner. It does not mean the other
developer cannot review, suggest improvements or help after
coordination.

## 2. Mandatory shared context for both AIs

Before starting a task, each developer must provide their AI assistant
with:

1.  `PRD.md`
2.  `ENGINEERING_ARCHITECTURE.md`
3.  `DEVELOPER_RESPONSIBILITIES.md`
4.  Current repository source code and relevant issue/PR details.

The documents are the shared project source of truth. If code conflicts
with an approved document, do not silently rewrite either; raise the
discrepancy and agree a correction.

## 3. Responsibility matrix

  Work area                               Developer 1   Developer 2
  --------------------------------------- ------------- -------------
  Requirements clarification              Shared        Shared
  Design tokens and global styling        **Lead**      Review
  Typography and responsive foundations   **Lead**      Review
  Navbar and mobile navigation            **Lead**      Review
  Footer and shared layout                **Lead**      Review
  Button, Container, SectionHeading       **Lead**      Review
  Homepage                                **Lead**      Review
  About Us                                **Lead**      Review
  Product data model and catalogue        Review        **Lead**
  Products page and category listings     Review        **Lead**
  Quality Assurance page                  Review        **Lead**
  Contact page and form UI                Review        **Lead**
  Contact schema and validation           Review        **Lead**
  Contact submission integration          Support       **Lead**
  Privacy, Disclaimer, Terms pages        Review        **Lead**
  SEO metadata and sitemap                Support       **Lead**
  Integration and regression testing      Shared        Shared
  Accessibility and responsive QA         Shared        Shared
  Pull request reviews                    Shared        Shared
  Client feedback and approved changes    Shared        Shared

## 4. Developer 1 --- detailed work package

### 4.1 Primary ownership

**A. Design system** - Implement the agreed emerald/white palette as
shared tokens. - Configure Manrope headings and Inter body typography. -
Establish consistent spacing, container widths, radii, shadows and focus
styles. - Check contrast and accessibility; adjust tokens if needed and
document changes. - Build responsive primitives and avoid page-specific
duplication.

**B. Shared layout** - Navbar with desktop navigation and accessible
mobile menu. - Footer with navigation, contact details placeholders and
legal links. - Site-wide layout wrapper. - Shared Button, Container and
SectionHeading components. - Coordinate component props and route link
conventions with Developer 2 before finalizing interfaces.

**C. Homepage** Build the agreed sections in order: 1. Hero with
human-centric healthcare image, headline and two CTAs. 2. About teaser.
3. Three product category cards. 4. Quality story teaser. 5. Vision,
Mission and Values. 6. Partnership CTA. 7. Contact teaser. 8. Footer
through shared layout.

**D. About Us** - Company introduction based only on approved facts. -
Vision, mission and values. - No invented history, milestones,
leadership, scale or experience claims.

### 4.2 Suggested ownership paths

Adapt paths to the actual React Router scaffold.

``` text
app/styles/*
app/components/common/*
app/components/layout/*
app/components/sections/home/*
app/components/sections/about/*
app/routes/home.tsx
app/routes/about.tsx
public/images/hero/*
public/images/company/*
```

Do not edit Developer 2's route/page implementation without
coordination. Shared component changes must be communicated and
reviewed.

### 4.3 Developer 1 completion criteria

-   Design tokens are documented and used consistently.
-   Navbar works with keyboard and on mobile.
-   Shared components have agreed typed interfaces.
-   Homepage sections and CTAs match the PRD.
-   About page contains only approved content.
-   Responsive checks completed.
-   No console errors or broken links.
-   PR includes screenshots and test notes.

## 5. Developer 2 --- detailed work package

### 5.1 Primary ownership

**A. Product data and catalogue** - Define typed product and category
models. - Store product content in structured data files. - Build
category-based product listing UI. - Display product name, approved
image and approved short description only. - Handle empty/pending
content without inventing product facts. - Keep the structure ready for
future product additions.

**B. Quality Assurance** - Build the split-screen quality page. - Add
the quality story and three quality pillars only after copy is
approved. - Accurately describe third-party manufacturing partners. - Do
not publish FDA/WHO or other certification claims until verified and
approved.

**C. Contact Us** - Build the unified enquiry form. - Implement React
Hook Form and Zod if confirmed in the architecture. - Add accessible
labels, field errors, loading, success and error states. - Build the
enquiry type selector. - Integrate the approved submission provider only
after selection. - Ensure no private credentials are shipped to the
browser. - Do not collect patient or sensitive medical information.

**D. Legal pages** - Build Privacy Policy, Disclaimer and Terms
routes. - Use clearly marked draft text until client/legal approval. -
Ensure privacy wording matches the actual form and analytics services.

**E. SEO** - Add unique route metadata. - Support Open Graph tags. -
Implement sitemap and robots configuration. - Add canonical URLs once
the final domain exists. - Add factual structured data only after
company details are verified. - Verify static pre-rendered output and
indexability.

### 5.2 Suggested ownership paths

Adapt paths to the actual React Router scaffold.

``` text
app/data/products.ts
app/types/product.ts
app/components/sections/products/*
app/components/sections/quality/*
app/components/sections/contact/*
app/schemas/contact.schema.ts
app/services/contact.service.ts
app/routes/products.tsx
app/routes/quality.tsx
app/routes/contact.tsx
app/routes/legal/*
public/images/products/*
public/images/quality/*
```

### 5.3 Developer 2 completion criteria

-   Product listings are driven by typed data.
-   No fake product names, packaging, composition or therapeutic claims.
-   Quality content is factually accurate and approved.
-   Form validation and all UI states work.
-   Real form submission path is selected, secure and tested before
    completion.
-   Legal pages are clearly marked draft until approved.
-   Metadata and SEO files are checked.
-   Responsive and accessibility checks completed.
-   PR includes screenshots, tests and integration notes.

## 6. Shared components: agreement before parallel page work

Before either developer builds full pages, agree and merge the following
foundation:

  Component/contract   Primary owner   Required agreement
  -------------------- --------------- ----------------------------------
  Design tokens        Developer 1     Names and usage
  Button               Developer 1     Props and link behaviour
  Container            Developer 1     Width and padding
  SectionHeading       Developer 1     Props and alignment
  Navbar               Developer 1     Route data and mobile behaviour
  Footer               Developer 1     Link and contact data source
  Product type         Developer 2     Category IDs and fields
  Product data         Developer 2     Image and content conventions
  Contact schema       Developer 2     Field names and validation
  Contact service      Developer 2     Submission contract and provider

Do not independently create duplicate Button, Container, Navbar, Footer
or product types in separate branches.

## 7. Recommended implementation sequence

### Phase A --- team foundation

1.  Both review and agree the three documents.
2.  Create the GitHub repository.
3.  Initialize React Router v7 Framework Mode, Vite, TypeScript and
    Tailwind.
4.  Confirm route conventions, linting, formatting and build commands.
5.  Create `CLIENT_REQUIREMENTS.md`.
6.  Agree component contracts and product/contact data types.

### Phase B --- shared foundation

1.  Developer 1 implements tokens and shared components.
2.  Developer 2 reviews contracts and prepares product data model, form
    schema draft and route scaffolding.
3.  Merge shared foundation into `main`.
4.  Both pull the updated `main`.

### Phase C --- parallel feature development

-   Developer 1: homepage and About Us.
-   Developer 2: Products and Quality Assurance.
-   Both use shared components and avoid editing the same files.
-   Merge through separate PRs.

### Phase D --- functionality and integration

-   Developer 2 completes Contact form and legal pages.
-   Developer 1 supports shared UI refinements.
-   Both integrate, test routes, navigation and responsive layouts.

### Phase E --- release readiness

-   Both conduct cross-review and regression testing.
-   Resolve client content and compliance approvals.
-   Verify static rendering, accessibility, SEO and performance.
-   Deployment remains a later phase after coding and testing are ready.

## 8. GitHub workflow and file conflict rules

### Branch naming

Examples: - `feature/design-system` - `feature/navbar-footer` -
`feature/homepage` - `feature/about` - `feature/products` -
`feature/quality` - `feature/contact-form` - `feature/legal-seo`

### Rules

1.  Never push directly to `main`.
2.  Start each task from the latest `main`.
3.  Keep PRs focused on one feature or logical change.
4.  Do not commit generated build folders, secrets or local environment
    files.
5.  If a task needs a shared component change, tell the other developer
    before changing its API.
6.  If both developers must edit the same file, agree one owner for that
    change or create a coordinated PR.
7.  Do not resolve a merge conflict by blindly accepting one side;
    inspect the intent of both changes.
8.  Pull latest `main` after merges before beginning dependent work.
9.  PR author must describe changed files, screenshots, tests and known
    limitations.

## 9. AI task prompt templates

### 9.1 Developer 1 --- reusable system prompt

``` text
You are my AI engineering assistant for the ZILTON LIFE CARE PRIVATE LIMITED
corporate website.

Read PRD.md, ENGINEERING_ARCHITECTURE.md and
DEVELOPER_RESPONSIBILITIES.md before making changes.

MY ROLE:
Developer 1 — UI & Shared Experience Lead.

MY PRIMARY OWNERSHIP:
- Design tokens and global visual foundations.
- Shared UI components: Button, Container, SectionHeading.
- Navbar, mobile navigation, Footer and shared layout.
- Homepage.
- About Us page.

TECHNICAL RULES:
- Follow the approved React Router v7 Framework Mode, Vite, TypeScript
  and Tailwind architecture.
- Inspect the existing repository before editing.
- Reuse shared components and existing conventions.
- Do not create duplicate shared components.
- Keep TypeScript types explicit and avoid `any`.
- Ensure responsive behaviour, keyboard access and visible focus.
- Respect reduced-motion preferences.
- Do not invent company facts, product claims, manufacturing claims,
  certifications, people or milestones.
- Do not modify Developer 2's owned page logic or files without
  coordinating first.
- Do not add dependencies or change architecture without explaining
  the reason and asking for approval.

FOR EACH TASK:
1. Restate the task and acceptance criteria briefly.
2. Inspect relevant files.
3. State the files you plan to change.
4. Implement only the requested scope.
5. Run available lint, typecheck and build checks.
6. Report changed files, checks actually run, results and any blockers.
7. Never claim a test passed unless you ran it.

If client content or an asset is missing, use a clearly identified
temporary placeholder and report it. Never present placeholder copy
as approved company content.
```

### 9.2 Developer 2 --- reusable system prompt

``` text
You are my AI engineering assistant for the ZILTON LIFE CARE PRIVATE LIMITED
corporate website.

Read PRD.md, ENGINEERING_ARCHITECTURE.md and
DEVELOPER_RESPONSIBILITIES.md before making changes.

MY ROLE:
Developer 2 — Catalogue & Business Functionality Lead.

MY PRIMARY OWNERSHIP:
- Typed product model and structured product data.
- Products page and category listings.
- Quality Assurance page.
- Contact page, form schema, validation and submission integration.
- Privacy Policy, Disclaimer and Terms pages.
- SEO metadata, sitemap and robots configuration.

TECHNICAL RULES:
- Follow the approved React Router v7 Framework Mode, Vite, TypeScript
  and Tailwind architecture.
- Inspect the existing repository before editing.
- Reuse Developer 1's shared components; do not recreate them.
- Keep product content in typed data files, not hardcoded in page markup.
- Do not invent product names, ingredients, compositions, dosage,
  indications, therapeutic claims, certifications or manufacturer details.
- Do not imply ZILTON owns a factory unless verified.
- Never expose API keys, SMTP credentials or private secrets in frontend code.
- Do not collect patient records or sensitive medical information.
- Legal content must remain marked draft until client/legal approval.
- Do not modify Developer 1's owned files or shared component APIs
  without coordinating first.
- Do not add dependencies or change architecture without explaining
  the reason and asking for approval.

FOR EACH TASK:
1. Restate the task and acceptance criteria briefly.
2. Inspect relevant files and shared component interfaces.
3. State the files you plan to change.
4. Implement only the requested scope.
5. Run available lint, typecheck and build checks.
6. Report changed files, checks actually run, results and any blockers.
7. Never claim a test passed unless you ran it.

If product data, certificates or client content are missing, flag them
as pending. Never fill gaps with invented claims or fake product data.
```

### 9.3 Task-specific prompt template for either developer

``` text
Project: ZILTON LIFE CARE PRIVATE LIMITED website

My role: [Developer 1 / Developer 2]
Task: [One clearly scoped task]
Reference: [Issue number or PRD section]
Acceptance criteria:
- [Criterion 1]
- [Criterion 2]
- [Criterion 3]

Files expected to change:
- [Path]
Files not to modify:
- [Path or other developer-owned area]

Before coding:
- Read all three project documents.
- Inspect current implementation.
- Identify dependencies and shared components.
- Ask if a required contract or fact is unclear.

After coding:
- Run relevant checks.
- Summarize files changed.
- Report test commands and actual results.
- List blockers, placeholders and follow-up work.
```

## 10. Cross-review checklist

### Developer 1 reviews Developer 2

-   Product data is typed and separate from presentation.
-   No unverified product or manufacturing claims.
-   Contact form is accessible and does not expose secrets.
-   Legal wording is marked pending approval.
-   SEO metadata is route-specific.

### Developer 2 reviews Developer 1

-   Shared components are reusable and typed.
-   Navigation routes are correct.
-   Mobile menu is keyboard accessible.
-   Layout is responsive and consistent.
-   Company copy contains no fabricated facts.

### Both review

-   No duplicate components or conflicting styles.
-   No unrelated changes.
-   No broken links or missing assets.
-   No console errors.
-   Build and checks pass.
-   PR screenshots and notes are included.

## 11. Team communication rules

-   Use GitHub Issues as the task record.
-   Use PR comments for code-specific discussion.
-   Use one agreed team channel for decisions and urgent coordination.
-   Record architecture decisions in `ENGINEERING_ARCHITECTURE.md`.
-   Record client content dependencies in `CLIENT_REQUIREMENTS.md`.
-   When AI proposes a scope or architecture change, the developer---not
    the AI---must obtain teammate approval before applying it.
-   Each developer is accountable for understanding and reviewing
    AI-generated code before merging.

## 12. Definition of done

A task is done only when: - Its acceptance criteria are met. -
Implementation follows the PRD and architecture. - Relevant checks have
actually been run. - Responsive and accessibility behaviour is reviewed
where applicable. - No unapproved factual claims or secrets are
present. - PR is reviewed and merged. - Required documentation and
client-pending items are updated.
