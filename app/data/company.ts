/**
 * Approved company facts only.
 * Do NOT add unverified claims, certifications, CIN, GSTIN, or history.
 * Mark pending fields clearly — never invent values.
 */
export const COMPANY = {
  name:        "ZILTON LIFE CARE PRIVATE LIMITED",
  shortName:   "Zilton Life Care",
  established: "3 August 2026", // Confirm: incorporation date or another milestone
  type:        "Pharmaceutical Marketing Company",

  address: {
    line1:   "LAXMI HOUSING & FINANCE, 67 B, GOPAL MANSION",
    line2:   "GURUNANAK ROAD, BANDRA WEST",
    city:    "MUMBAI",
    pincode: "400050",
    state:   "MAHARASHTRA",
    country: "INDIA",
    full:    "LAXMI HOUSING & FINANCE, 67 B, GOPAL MANSION, GURUNANAK ROAD, BANDRA WEST, MUMBAI – 400050, MAHARASHTRA, INDIA",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Laxmi+Housing+%26+Finance%2C+67+B%2C+Gopal+Mansion%2C+Gurunanak+Road%2C+Bandra+West%2C+Mumbai+400050%2C+Maharashtra%2C+India",
  },

  phone:        "+91 9819667211",
  email:        "info@ziltonlifecare.com",
  // Centralized test email recipient configuration (active until official company credentials are provided):
  inquiryEmail: "r2661048@gmail.com",
  whatsapp:     "919819667211",

  tagline: "Caring for Life, Committed to Health",
  vision:  "Better Healthcare, Healthier Lives.",
  mission: "Delivering Quality, Building Trust, Improving Lives.",

  values: [
    { label: "Quality",     description: "Uncompromising standards in every product we market." },
    { label: "Integrity",   description: "Transparent and honest in all our partnerships." },
    { label: "Trust",       description: "Building lasting relationships with healthcare providers." },
    { label: "Innovation",  description: "Embracing modern approaches to pharmaceutical marketing." },
    { label: "Commitment",  description: "Dedicated to improving patient outcomes." },
    { label: "Excellence",  description: "Striving for the highest in everything we do." },
  ],

  productCategories: [
    { id: "critical-care-injection", label: "Critical Care Injection" },
    { id: "nutrition-iv",            label: "Nutrition IV" },
    { id: "nutrition-sachet",        label: "Nutrition Sachet" },
  ],
} as const;

