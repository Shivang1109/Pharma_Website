import type { ContactFormData } from "~/schemas/contact.schema";

export type ContactPayload = ContactFormData & { honeypot?: string };

export interface ContactSubmissionResponse {
  success: boolean;
  message: string;
  submissionId?: string;
  timestamp?: string;
  isLiveEndpoint?: boolean;
  receivedData?: {
    fullName: string;
    organization?: string;
    email: string;
    phone: string;
    enquiryType?: string;
    productName?: string;
    subject?: string;
  };
}

/**
 * Service to dispatch contact enquiries.
 * 
 * Production Configuration:
 * - Configure `VITE_CONTACT_FORM_ENDPOINT` in `.env` (e.g. Formspree URL, AWS SES endpoint, or serverless webhook).
 * - When set, submissions are dispatched live via HTTP POST.
 * - Honeypot field `_gotcha` / `b_url` protects against automated spam.
 */
export async function submitContactForm(
  payload: ContactPayload
): Promise<ContactSubmissionResponse> {
  // Honeypot spam defense
  if (payload.honeypot) {
    return {
      success: false,
      message: "Submission rejected.",
    };
  }

  const endpoint = typeof import.meta !== "undefined" ? (import.meta as any).env?.VITE_CONTACT_FORM_ENDPOINT : null;

  if (endpoint) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        return {
          success: true,
          message: "Thank you for reaching out. Your enquiry has been dispatched directly to our executive corporate desk.",
          submissionId: `ZLC-${Date.now().toString(36).toUpperCase()}`,
          timestamp: new Date().toISOString(),
          isLiveEndpoint: true,
        };
      }
    } catch {
      // Fallback to error
      return {
        success: false,
        message: "Enquiry dispatch failed over the network. Please connect via telephone (+91 9819667211).",
      };
    }
  }

  // Staged demonstration latency & reference generation
  await new Promise((resolve) => setTimeout(resolve, 750));

  return {
    success: true,
    message: "Thank you for reaching out. Your enquiry has been logged on staging. (Configure VITE_CONTACT_FORM_ENDPOINT for live SMTP/API delivery).",
    submissionId: `ZLC-${Date.now().toString(36).toUpperCase()}`,
    timestamp: new Date().toISOString(),
    isLiveEndpoint: false,
  };
}
