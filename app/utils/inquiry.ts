import { COMPANY } from "~/data/company";
import { ENQUIRY_TYPES, type ContactFormData } from "~/schemas/contact.schema";

/**
 * Returns human-readable label for enquiry classification
 */
export function getEnquiryTypeLabel(value: string): string {
  const match = ENQUIRY_TYPES.find((t) => t.value === value);
  return match ? match.label : value;
}

/**
 * Formats a clean, structured plain text body for Corporate Inquiries
 */
export function formatInquiryBodyText(data: ContactFormData): string {
  const classification = getEnquiryTypeLabel(data.enquiryType);

  const lines = [
    "CORPORATE INQUIRY — ZILTON LIFE CARE PRIVATE LIMITED",
    "==================================================",
    "",
    `Representative Name : ${data.fullName}`,
    `Institution / Hospital: ${data.organization?.trim() || "Not Specified"}`,
    `Official Email      : ${data.email}`,
    `Telephone           : ${data.phone}`,
    `Classification      : ${classification}`,
    ...(data.productName ? [`Referenced Product  : ${data.productName}`] : []),
    `Subject Line        : ${data.subject}`,
    "",
    "DETAILED MESSAGE & REQUIRED VOLUMES:",
    "--------------------------------------------------",
    data.message,
    "",
    "--------------------------------------------------",
    "Certification       : Verified institutional/clinical inquiry.",
  ];

  return lines.join("\r\n");
}

/**
 * Generates the Gmail Web Compose URL for the Corporate Inquiry form.
 * Uses centralized temporary testing email from COMPANY.inquiryEmail.
 * Directly opens in a browser tab without triggering OS desktop mail clients (e.g. Apple Mail / Outlook).
 */
export function buildCorporateInquiryGmail(data: ContactFormData): string {
  const recipient = COMPANY.inquiryEmail;
  const subject = "New Corporate Inquiry – ZILTON LIFE CARE";
  const body = formatInquiryBodyText(data);

  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: recipient,
    su: subject,
    body: body,
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
}

/**
 * @deprecated Use buildCorporateInquiryGmail instead to prevent unwanted desktop mail popups.
 */
export function buildCorporateInquiryMailto(data: ContactFormData): string {
  return buildCorporateInquiryGmail(data);
}

/**
 * Generates the full WhatsApp URL (wa.me) for the Corporate Inquiry form.
 * Uses official WhatsApp number from COMPANY.whatsapp.
 */
export function buildCorporateInquiryWhatsApp(data: ContactFormData): string {
  const number = COMPANY.whatsapp;
  const classification = getEnquiryTypeLabel(data.enquiryType);

  const lines = [
    "*NEW CORPORATE INQUIRY — ZILTON LIFE CARE*",
    "--------------------------------------",
    `*Representative:* ${data.fullName}`,
    `*Institution / Hospital:* ${data.organization?.trim() || "Not Specified"}`,
    `*Official Email:* ${data.email}`,
    `*Telephone:* ${data.phone}`,
    `*Classification:* ${classification}`,
    ...(data.productName ? [`*Referenced Product:* ${data.productName}`] : []),
    `*Subject Line:* ${data.subject}`,
    "",
    "*Detailed Message & Required Volumes:*",
    data.message,
    "",
    "✓ _Certified Institutional / Commercial Request_",
  ];

  const message = lines.join("\n");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

