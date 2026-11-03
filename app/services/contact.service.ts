import type { ContactFormData } from "~/schemas/contact.schema";

export type ContactPayload = ContactFormData;

export interface ContactSubmissionResponse {
  success: boolean;
  message: string;
  submissionId?: string;
  timestamp?: string;
}

/**
 * Service to dispatch contact enquiries.
 * 
 * Note for production:
 * Integrate the client-approved submission provider (e.g. Resend, AWS SES serverless function, or Formspree)
 * here once recipient credentials and provider are selected.
 * NEVER expose private API keys or SMTP passwords in frontend code.
 */
export async function submitContactForm(
  payload: ContactPayload
): Promise<ContactSubmissionResponse> {
  // Simulate network dispatch with realistic latency
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (!payload.email || !payload.fullName || !payload.message) {
    return {
      success: false,
      message: "Mandatory enquiry fields are missing. Please verify your submission.",
    };
  }

  return {
    success: true,
    message:
      "Thank you for reaching out to ZILTON LIFE CARE. Your enquiry has been received and our corporate representative will connect with you shortly.",
    submissionId: `ZLC-${Date.now().toString(36).toUpperCase()}`,
    timestamp: new Date().toISOString(),
  };
}
