import { z } from "zod";

export const ENQUIRY_TYPES = [
  { value: "general", label: "General Business Enquiry" },
  { value: "business-partnership", label: "Distributor & Channel Partnership" },
  { value: "product-related", label: "Product Availability & Institutional Supply" },
] as const;

export const enquiryTypeValues = ["general", "business-partnership", "product-related"] as const;
export type EnquiryType = (typeof enquiryTypeValues)[number];

// Standard Indian/International phone regex (allows +country code and 7-15 digits)
const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,15}$/;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Full name cannot exceed 80 characters")
    .regex(/^[a-zA-Z\s.'-]+$/, "Name contains invalid characters"),

  organization: z
    .string()
    .max(120, "Organization name cannot exceed 120 characters")
    .optional()
    .or(z.literal("")),

  email: z
    .string()
    .min(1, "Email address is required")
    .email("Please provide a valid email address")
    .max(100, "Email cannot exceed 100 characters"),

  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(phoneRegex, "Please enter a valid telephone number (e.g., +91 9819667211)"),

  enquiryType: z.enum(enquiryTypeValues, {
    errorMap: () => ({ message: "Please select an enquiry category" }),
  }),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(1000, "Message cannot exceed 1000 characters"),

  consent: z.literal(true, {
    errorMap: () => ({
      message: "You must acknowledge our data handling policy to proceed",
    }),
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

