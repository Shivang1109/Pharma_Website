# ZILTON LIFE CARE — PRODUCT RECONCILIATION REPORT
## Repository vs. Phase 9 Audit vs. Client Requirements

**Report Date:** November 2026  
**Status:** PENDING CLIENT SIGN-OFF  
**Scope:** Reconciliation of product names between Phase 9 audit documentation and the current live codebase.

---

## 1. Executive Summary

A discrepancy was identified between the product names listed in `docs/PHASE_9_AUDIT_REPORT.md` and those currently implemented in `app/data/products.ts`. The current codebase contains the 12 SKUs as recorded in `CLIENT_REQUIREMENTS.md` (CR-07, status: *Received & Integrated*) and confirmed in `CLIENT_VERIFICATION.md` (item 06, status: *Confirmed — Portfolio Match*).

**The Phase 9 audit report contains an older, interim product list** that was not the final agreed catalogue. The current `app/data/products.ts` reflects the most recently confirmed client portfolio.

**No products have been removed, renamed, or altered** as part of this audit. All existing product data is preserved intact. This report is for client review only.

---

## 2. Current Codebase Product List (`app/data/products.ts`)

The following 12 SKUs are implemented in the live codebase and match `CLIENT_REQUIREMENTS.md` CR-07:

| # | Product ID | Brand Name | Composition | Category | Sub-Category |
|---|---|---|---|---|---|
| 1 | `merozil-1gm` | MEROZIL 1gm | Meropenem 1gm Injection | Critical Care Injection | IV Antibiotics Range |
| 2 | `merozil-500mg` | MEROZIL 500mg | Meropenem 500mg Injection | Critical Care Injection | IV Antibiotics Range |
| 3 | `ziltaz-4-5gm` | Ziltaz 4.5gm | Piperacillin 4gm + Tazobactam 500mg Injection | Critical Care Injection | IV Antibiotics Range |
| 4 | `polyzil-5lac` | Polyzil 5 lac IU | Polymyxin B 5,00,000 IU Injection | Critical Care Injection | IV Antibiotics Range |
| 5 | `polyzil-7-5lac` | Polyzil 7.5 lac IU | Polymyxin B 7,50,000 IU Injection | Critical Care Injection | IV Antibiotics Range |
| 6 | `fosfozil-4gm` | Fosfozil 4gm | Fosfomycin 4gm IV Infusion | Critical Care Injection | IV Antibiotics Range |
| 7 | `tigezil-50mg` | Tigezil 50mg | Tigecycline 50mg Injection | Critical Care Injection | IV Antibiotics Range |
| 8 | `zilfcm-500mg` | ZilFCM 500mg | Ferric Carboxymaltose 500mg Inj (50mg/ml) | Critical Care Injection | Haematinics & Anti-anaemic |
| 9 | `micasure-50mg` | Micasure 50mg | Micafungin 50mg Injection | Critical Care Injection | Antifungal Range |
| 10 | `zinctrace-iv` | Zinctrace IV | Zinc Chloride 10mg/10ml IV | Nutrition IV | Clinical Nutrition IV |
| 11 | `hmb-zil-3gm` | HMB ZIL 3gm Sachet | Beta-hydroxy-beta-methylbutyrate 3gm | Nutrition Sachet | Therapeutic Nutrition Sachet |
| 12 | `glutashape-sachet` | Glutashape Sachet | L-Glutamine combined with Antioxidants | Nutrition Sachet | Therapeutic Nutrition Sachet |

---

## 3. Phase 9 Audit Report Product List (Historical)

The following names appeared in `docs/PHASE_9_AUDIT_REPORT.md` Section 3 (Critical Care Injections row):

> *"Merozil (1g & 500mg), Pipzil-T, Imipen-Zil, Colistizil, Tigecil, Vorizil, Caspozil, Artesuzil"*

These names **do not match** the current `app/data/products.ts`. The Phase 9 report appears to reflect an earlier portfolio snapshot or a draft product list that was subsequently revised.

---

## 4. Discrepancy Analysis

| Phase 9 Name | Status in Current Codebase | Notes |
|---|---|---|
| Merozil 1g | ✅ Present as `MEROZIL 1gm` | Name confirmed, minor capitalisation difference only |
| Merozil 500mg | ✅ Present as `MEROZIL 500mg` | Confirmed |
| Pipzil-T | ⚠️ **Not present** — replaced by `Ziltaz 4.5gm` | Same salt: Piperacillin + Tazobactam. Brand name variant — awaiting client confirmation |
| Imipen-Zil | ❌ **Not present** | Imipenem formulation not in current approved portfolio. Removed or deferred. |
| Colistizil | ❌ **Not present** | Colistin formulation not in current approved portfolio. Removed or deferred. |
| Tigecil | ⚠️ **Not present** — replaced by `Tigezil 50mg` | Same salt: Tigecycline 50mg. Brand name variant — awaiting client confirmation |
| Vorizil | ❌ **Not present** | Voriconazole formulation not in current approved portfolio. Removed or deferred. |
| Caspozil | ❌ **Not present** | Caspofungin formulation not in current approved portfolio. Removed or deferred. |
| Artesuzil | ❌ **Not present** | Artesunate formulation not in current approved portfolio. Removed or deferred. |
| ZilFCM 500mg | ✅ Present (not in Phase 9 list) | Added after Phase 9 — Ferric Carboxymaltose |
| Fosfozil 4gm | ✅ Present (not in Phase 9 list) | Added after Phase 9 — Fosfomycin |
| Micasure 50mg | ✅ Present (not in Phase 9 list) | Added after Phase 9 — Micafungin (Antifungal) |
| Polyzil 5 lac IU | ✅ Present (not in Phase 9 list) | Added after Phase 9 — Polymyxin B |
| Polyzil 7.5 lac IU | ✅ Present (not in Phase 9 list) | Added after Phase 9 — Polymyxin B |

---

## 5. Items Requiring Client Decision

The following items cannot be resolved without explicit client instruction. No changes have been made to the codebase pending this confirmation.

### 5.1 Brand Name Variants (2 items)

| Current Brand Name | Phase 9 / Alternative | Salt | Client Action Required |
|---|---|---|---|
| **Ziltaz 4.5gm** | Pipzil-T 4.5gm | Piperacillin 4gm + Tazobactam 500mg | **Confirm which trade name to use on the website.** |
| **Tigezil 50mg** | Tigecil 50mg | Tigecycline 50mg | **Confirm which trade name to use on the website.** |

### 5.2 Products in Phase 9 Not in Current Portfolio (5 items)

These 5 products appeared in an earlier iteration but are not in the current approved catalogue:

| Product | Salt | Status |
|---|---|---|
| Imipen-Zil | Imipenem | Not in current portfolio — confirm if deferred or removed |
| Colistizil | Colistin | Not in current portfolio — confirm if deferred or removed |
| Vorizil | Voriconazole | Not in current portfolio — confirm if deferred or removed |
| Caspozil | Caspofungin | Not in current portfolio — confirm if deferred or removed |
| Artesuzil | Artesunate | Not in current portfolio — confirm if deferred or removed |

> **Developer note:** Do not add these products back without explicit written client confirmation. Do not invent brand names or compositions.

---

## 6. Current Repository State

- The current `app/data/products.ts` is **intact and unchanged** by this audit.
- All 12 SKUs from `CLIENT_REQUIREMENTS.md` CR-07 are correctly implemented.
- `CLIENT_VERIFICATION.md` item 06 status remains: *Confirmed (Portfolio Match)*.
- The Phase 9 audit report reflects a historical state and should not be used as the authoritative product list.

---

## 7. Recommended Next Steps

1. Client reviews this report and confirms the final 12 SKU list.
2. Client confirms trade name preference for Ziltaz vs Pipzil-T and Tigezil vs Tigecil.
3. Client advises whether the 5 absent products (Imipen-Zil, Colistizil, Vorizil, Caspozil, Artesuzil) are deferred for a V2 release or permanently removed.
4. Once confirmed, update `app/data/products.ts` with any approved name changes and update this report with resolution status.
