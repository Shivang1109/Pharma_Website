import type { ContactFormData } from "~/schemas/contact.schema";

export type ContactPayload = ContactFormData;

export interface ContactSubmissionResponse {
  success: boolean;
  message: string;
  submissionId?: string;
  timestamp?: string;
  isSimulated: boolean;
  receivedData?: {
    fullName: string;
    organization?: string;
    email: string;
    phone: string;
    enquiryType: string;
    productName?: string;
    subject: string;
  };
}

/**
 * Service to dispatch contact enquiries.
 * 
 * Production Integration Architecture:
 * - When the client provisions official corporate mailboxes and selects an email dispatch service
 *   (e.g., AWS SES, Resend, SendGrid, or corporate SMTP relay via an authenticated server action / API route),
 *   wire the POST call here.
 * - Current State: Validated frontend simulation with reference code generation.
 * - Security note: NEVER expose private API keys or SMTP passwords in frontend bundle code.
 */
export async function submitContactForm(
  payload: ContactPayload
): Promise<ContactSubmissionResponse> {
  // Simulate network latency (750ms)
  await new Promise((resolve) => setTimeout(resolve, 750));

  if (!payload.email || !payload.fullName || !payload.message || !payload.subject) {
    return {
      success: false,
      message: "Mandatory enquiry fields are missing. Please verify all required inputs.",
      isSimulated: true,
    };
  }

  // Generate deterministic-style reference identifier
  const refCode = `ZLC-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

  return {
    success: true,
    message:
      "Your corporate enquiry has been successfully logged on this staging environment. In production, this record will be securely dispatched to ZILTON LIFE CARE's designated executive desk.",
    submissionId: refCode,
    timestamp: new Date().toISOString(),
    isSimulated: true,
    receivedData: {
      fullName: payload.fullName,
      organization: payload.organization,
      email: payload.email,
      phone: payload.phone,
      enquiryType: payload.enquiryType,
      productName: payload.productName,
      subject: payload.subject,
    },
  };
}
