import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  type ContactFormData,
  ENQUIRY_TYPES,
} from "~/schemas/contact.schema";
import { submitContactForm, type ContactSubmissionResponse } from "~/services/contact.service";
import { ImageSlot } from "~/components/ui/ImageSlot";
import { COMPANY } from "~/data/company";
import { generateRouteMeta } from "~/utils/seo";
import { getWhatsAppLink } from "~/utils/whatsapp";
import {
  buildCorporateInquiryGmail,
  buildCorporateInquiryWhatsApp,
} from "~/utils/inquiry";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  CheckCircle2,
  Loader2,
  AlertCircle,
  Tag,
  X,
  ExternalLink,
  Send,
  RotateCcw,
} from "lucide-react";

export function meta() {
  return generateRouteMeta({
    title: "Contact Corporate & Procurement Desk",
    description:
      "Connect with ZILTON LIFE CARE PRIVATE LIMITED for institutional supply, commercial hospital procurement, batch documentation, and distribution partnerships.",
    canonicalPath: "/contact",
  });
}

export default function ContactPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const productParam = searchParams.get("product");
  const [dispatchNotice, setDispatchNotice] = useState<{
    type: "email" | "whatsapp";
    title: string;
    detail: string;
    actionRequired: string;
    url: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      organization: "",
      email: "",
      phone: "",
      enquiryType: productParam ? "product-related" : "general",
      productName: productParam || "",
      subject: productParam ? `Institutional Enquiry: ${productParam}` : "",
      message: productParam
        ? `We request commercial terms, batch availability, and institutional pricing for ${productParam}.`
        : "",
      consent: true,
    },
  });

  useEffect(() => {
    if (productParam) {
      setValue("enquiryType", "product-related");
      setValue("productName", productParam);
      setValue("subject", `Institutional Enquiry: ${productParam}`);
      setValue(
        "message",
        `We request commercial terms, batch availability, and institutional pricing for ${productParam}.`
      );
    }
  }, [productParam, setValue]);

  const clearProduct = () => {
    const next = new URLSearchParams(searchParams);
    next.delete("product");
    setSearchParams(next);
    setValue("productName", "");
    setValue("subject", "");
    setValue("message", "");
  };

  const handleEmailSubmit = (data: ContactFormData) => {
    if (honeypot) return;
    setIsSubmitting(true);

    try {
      const gmailUrl = buildCorporateInquiryGmail(data);
      setDispatchNotice({
        type: "email",
        title: "Gmail Web Compose Opened",
        detail: `All submitted inquiry fields have been pre-filled for ${COMPANY.inquiryEmail}.`,
        actionRequired: "Please review the prefilled draft in the opened Gmail tab and click 'Send' to complete delivery. (If prompted, please sign in to your Google Account).",
        url: gmailUrl,
      });

      if (typeof window !== "undefined") {
        window.open(gmailUrl, "_blank", "noopener,noreferrer");
      }
    } finally {
      setTimeout(() => setIsSubmitting(false), 400);
    }
  };

  const handleWhatsAppSubmit = (data: ContactFormData) => {
    if (honeypot) return;
    setIsSubmitting(true);

    try {
      const waUrl = buildCorporateInquiryWhatsApp(data);
      setDispatchNotice({
        type: "whatsapp",
        title: "WhatsApp Window Opened",
        detail: `All submitted inquiry fields have been pre-filled for our desk at +${COMPANY.whatsapp}.`,
        actionRequired: "Please review the pre-filled message in WhatsApp and tap Send to complete delivery.",
        url: waUrl,
      });

      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }
    } finally {
      setTimeout(() => setIsSubmitting(false), 400);
    }
  };

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#0D9E71] font-semibold block mb-3">
            01 / Executive Communications
          </span>
          <h1 className="text-fluid-hero font-editorial font-bold text-[#1B634E] tracking-tight">
            Institutional Dialogue Desk
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#3E6958] font-light leading-relaxed">
            Direct your commercial inquiries, hospital tender schedules, or regulatory batch documentation requests to our Mumbai corporate office.
          </p>
        </div>

        {/* ─── SPLIT LAYOUT ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Lightened Vibrant Green Corporate Panel with Map ImageSlot */}
          <div className="lg:col-span-5 bg-[#1B634E] text-[#F6F4EE] p-8 sm:p-10 rounded-3xl border border-[#1B634E] shadow-xl space-y-6 select-none">
            {/* Registered Office Address Card */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#DCEEE4] font-bold">
                  Registered Office
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-[#DCEEE4]/80">
                  Official Entity
                </span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-white leading-tight">
                {COMPANY.name}
              </h2>

              {/* Clickable Address Block with Location Icon & Hover Interaction */}
              <a
                href={COMPANY.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3.5 block group/addr rounded-xl p-3 -mx-3 transition-colors duration-200 hover:bg-white/10"
                title="Open Registered Office location in Google Maps (opens in new tab)"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white/10 text-[#DCEEE4] group-hover/addr:bg-[#07845E] group-hover/addr:text-white transition-colors duration-200 shrink-0 mt-0.5 border border-white/10">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <address className="not-italic text-xs sm:text-sm text-white/85 font-light leading-relaxed group-hover/addr:text-white transition-colors">
                      {COMPANY.address.line1},<br />
                      {COMPANY.address.line2},<br />
                      {COMPANY.address.city} – {COMPANY.address.pincode}, {COMPANY.address.state}, {COMPANY.address.country}.
                    </address>
                  </div>
                </div>
              </a>

              {/* Clearly visible "View on Google Maps" Button */}
              <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between">
                <a
                  href={COMPANY.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-[#07845E] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200 border border-white/15 hover:border-transparent group shadow-xs"
                  aria-label="View Registered Office on Google Maps (opens in new tab)"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#DCEEE4] group-hover:text-white transition-colors" />
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-[#DCEEE4] group-hover:text-white transition-colors ml-0.5" />
                </a>
              </div>
            </div>

            {/* Direct Lines */}
            <div className="space-y-4 pt-2 font-mono text-xs text-white/95">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#DCEEE4] shrink-0" />
                <a
                  href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
                  className="hover:text-white transition-colors font-bold text-sm tracking-wide"
                >
                  {COMPANY.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#DCEEE4] shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-white/85 hover:text-white transition-colors font-medium"
                >
                  {COMPANY.email}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#DCEEE4] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold">Monday – Saturday: 09:30 – 18:30 IST</span>
                  <span className="text-[10px] text-white/70">Closed on Sundays &amp; National Holidays</span>
                </div>
              </div>

              {/* WhatsApp Quick Connect Block */}
              <div className="flex items-start gap-3 pt-2 border-t border-white/15">
                <div className="p-2 rounded-xl bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] shrink-0 mt-0.5">
                  <svg viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16 2C8.268 2 2 8.268 2 16c0 2.44.655 4.726 1.797 6.69L2 30l7.52-1.773A13.934 13.934 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm6.3 18.909c-.345-.173-2.045-1.009-2.362-1.124-.317-.115-.547-.173-.778.173-.23.345-.893 1.124-1.095 1.354-.202.23-.403.258-.748.086-.345-.173-1.456-.537-2.773-1.71-1.025-.914-1.717-2.044-1.918-2.389-.202-.345-.022-.531.151-.703.155-.155.345-.404.518-.605.172-.202.23-.345.345-.576.115-.23.057-.432-.029-.605-.086-.173-.778-1.874-1.066-2.566-.28-.673-.565-.582-.778-.593l-.663-.012c-.23 0-.605.086-.922.432s-1.209 1.181-1.209 2.882c0 1.7 1.238 3.344 1.411 3.574.173.23 2.437 3.72 5.902 5.216.825.356 1.468.569 1.97.728.828.263 1.582.226 2.178.137.664-.1 2.045-.836 2.333-1.643.288-.807.288-1.499.202-1.643-.086-.144-.317-.23-.662-.403z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-white/70 text-[10px] uppercase tracking-wider">WhatsApp Business Desk</span>
                  <a
                    href={getWhatsAppLink("Hello Zilton Life Care Team,\n\nI would like to get in touch regarding your pharmaceutical products and services.\n\nPlease assist me further.\n\nThank you.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#25D366] transition-colors font-bold text-sm tracking-wide block mt-0.5 text-white"
                  >
                    +91 9819667211
                  </a>
                  <a
                    href={getWhatsAppLink("Hello Zilton Life Care Team,\n\nI would like to get in touch regarding your pharmaceutical products and services.\n\nPlease assist me further.\n\nThank you.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-mono text-[11px] uppercase tracking-wider font-semibold transition-colors duration-200"
                  >
                    <span>Chat with Us</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Registered Office Google Maps Location Preview */}
            <div className="pt-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#DCEEE4] block mb-2 flex items-center justify-between">
                <span>REGISTERED OFFICE LOCATION MAP</span>
                <span className="text-[9px] text-[#DCEEE4]/70 font-mono">BANDRA WEST · MUMBAI</span>
              </span>

              <a
                href={COMPANY.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/map relative block w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/20 bg-[#123D32] shadow-md transition-all duration-300 hover:border-white/40 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#0D9E71]"
                aria-label="Open registered office location in Google Maps (opens in a new tab)"
                title="Open 67 B, Gopal Mansion, Bandra West on Google Maps"
              >
                {/* Embedded Live Google Maps with Exact Location Query & Pin */}
                <iframe
                  title="Google Maps Location: 67 B, Gopal Mansion, Bandra West, Mumbai"
                  src="https://maps.google.com/maps?q=Laxmi+Housing+%26+Finance%2C+67+B%2C+Gopal+Mansion%2C+Gurunanak+Road%2C+Bandra+West%2C+Mumbai+400050%2C+Maharashtra%2C+India&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 w-full h-full border-0 pointer-events-none transition-transform duration-500 ease-out group-hover/map:scale-[1.03]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-hidden="true"
                />

                {/* Subtle Ambient Vignette Gradient */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 transition-opacity duration-300 group-hover/map:from-black/75"
                  aria-hidden="true"
                />

                {/* Top-Right: Subtle "View on Google Maps" Overlay Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#123D32]/90 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] uppercase tracking-wider font-semibold shadow-sm transition-all duration-200 group-hover/map:bg-[#07845E] group-hover/map:border-transparent">
                    <MapPin className="w-3 h-3 text-[#DFF1E9]" />
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-2.5 h-2.5 text-[#DFF1E9] ml-0.5" />
                  </div>
                </div>

                {/* Bottom-Left: Location Label with Pin */}
                <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/65 backdrop-blur-md border border-white/15 text-white shadow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D9E71] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
                    </span>
                    <span className="font-mono text-[11px] font-medium text-white/95 truncate">
                      67 B, Gopal Mansion, Bandra West, Mumbai
                    </span>
                  </div>
                </div>
              </a>

              <figcaption className="mt-2 font-mono text-[11px] text-[#DCEEE4]/80 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D9E71]" />
                Interactive map preview · Click to navigate via Google Maps
              </figcaption>
            </div>

            {/* Statutory Disclaimer */}
            <div className="p-4 rounded-xl bg-white/10 border border-white/15 text-xs text-white/85 font-light leading-relaxed">
              <strong>Statutory Notice:</strong> This contact desk does not provide patient consultations or emergency services. For medical emergencies, consult your local healthcare facility immediately.
            </div>
          </div>

          {/* Right Column: Enquiry Form with Direct Email + WhatsApp Integration */}
          <div className="lg:col-span-7 bg-[#FCFAF5] p-8 sm:p-12 rounded-3xl border border-[#1B634E]/15 shadow-sm">
            <div className="mb-6 pb-4 border-b border-[#1B634E]/10">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#0D9E71] font-bold block mb-1">
                Direct Corporate Dispatch
              </span>
              <h3 className="font-editorial text-2xl font-bold text-[#1B634E]">
                Corporate Inquiry Formulation
              </h3>
              <p className="text-xs text-[#3E6958] font-light mt-1">
                Submissions open directly in Gmail Web Compose or official WhatsApp.
              </p>
            </div>

            {/* Direct Dispatch Feedback Banner */}
            {dispatchNotice && (
              <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-[#DCEEE4] border border-[#0D9E71]/40 text-[#1B634E] space-y-2.5 animate-in fade-in duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#0D9E71]">
                    {dispatchNotice.type === "email" ? (
                      <Mail className="w-4 h-4 text-[#0D9E71]" />
                    ) : (
                      <svg viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4 text-[#25D366]" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16 2C8.268 2 2 8.268 2 16c0 2.44.655 4.726 1.797 6.69L2 30l7.52-1.773A13.934 13.934 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm6.3 18.909c-.345-.173-2.045-1.009-2.362-1.124-.317-.115-.547-.173-.778.173-.23.345-.893 1.124-1.095 1.354-.202.23-.403.258-.748.086-.345-.173-1.456-.537-2.773-1.71-1.025-.914-1.717-2.044-1.918-2.389-.202-.345-.022-.531.151-.703.155-.155.345-.404.518-.605.172-.202.23-.345.345-.576.115-.23.057-.432-.029-.605-.086-.173-.778-1.874-1.066-2.566-.28-.673-.565-.582-.778-.593l-.663-.012c-.23 0-.605.086-.922.432s-1.209 1.181-1.209 2.882c0 1.7 1.238 3.344 1.411 3.574.173.23 2.437 3.72 5.902 5.216.825.356 1.468.569 1.97.728.828.263 1.582.226 2.178.137.664-.1 2.045-.836 2.333-1.643.288-.807.288-1.499.202-1.643-.086-.144-.317-.23-.662-.403z" />
                      </svg>
                    )}
                    <span>{dispatchNotice.title}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setDispatchNotice(null)}
                    className="text-[#3E6958] hover:text-[#1B634E] p-1 cursor-pointer"
                    aria-label="Dismiss notice"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-[#1B634E] leading-relaxed">
                  {dispatchNotice.detail}
                </p>

                <div className="p-3 rounded-xl bg-white/80 border border-[#0D9E71]/20 text-xs text-[#123D32] leading-relaxed">
                  <strong>Action Required:</strong> {dispatchNotice.actionRequired}
                </div>

                <div className="pt-1 flex flex-wrap items-center gap-3">
                  {dispatchNotice.type === "email" ? (
                    <>
                      <a
                        href={dispatchNotice.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#1B634E] hover:text-[#0D9E71] underline"
                      >
                        <span>Re-open Gmail Web Compose</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <span className="text-[#3E6958]/30">·</span>
                      <button
                        type="button"
                        onClick={handleSubmit(handleWhatsAppSubmit)}
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#0D9E71] hover:text-[#1B634E] cursor-pointer"
                      >
                        <span>Also Send via WhatsApp</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </>
                  ) : (
                    <>
                      <a
                        href={dispatchNotice.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#0D9E71] hover:text-[#1B634E] underline"
                      >
                        <span>Re-open WhatsApp</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <span className="text-[#3E6958]/30">·</span>
                      <button
                        type="button"
                        onClick={handleSubmit(handleEmailSubmit)}
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#1B634E] hover:text-[#0D9E71] cursor-pointer"
                      >
                        <span>Also Send via Email</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit(handleEmailSubmit)} className="space-y-6">
              {/* Honeypot Spam Trap (hidden from humans) */}
              <input
                type="text"
                name="b_url"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Pre-filled Product Tag Badge */}
              {productParam && (
                <div className="p-3 rounded-xl bg-[#DCEEE4] border border-[#0D9E71]/30 flex items-center justify-between gap-2 text-xs font-mono text-[#1B634E]">
                  <div className="flex items-center gap-2">
                    <Tag className="w-3.5 h-3.5 text-[#0D9E71]" />
                    <span>Referenced Formulation: <strong>{productParam}</strong></span>
                  </div>
                  <button
                    type="button"
                    onClick={clearProduct}
                    className="text-[#3E6958] hover:text-[#1B634E] p-1 cursor-pointer"
                    aria-label="Clear referenced product"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Full Name & Organization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-[#1B634E] font-bold mb-1.5">
                    Representative Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Dr. Rajesh Sharma"
                    {...register("fullName")}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#1B634E]/15 text-xs font-mono text-[#1B634E] focus:outline-none focus:ring-1 focus:ring-[#0D9E71]"
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-red-600 mt-1 font-mono">{errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-[#1B634E] font-bold mb-1.5">
                    Institution / Hospital
                  </label>
                  <input
                    type="text"
                    placeholder="City Healthcare Consortium"
                    {...register("organization")}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#1B634E]/15 text-xs font-mono text-[#1B634E] focus:outline-none focus:ring-1 focus:ring-[#0D9E71]"
                  />
                  {errors.organization && (
                    <p className="text-[11px] text-red-600 mt-1 font-mono">{errors.organization.message}</p>
                  )}
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-[#1B634E] font-bold mb-1.5">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    placeholder="procurement@hospital.org"
                    {...register("email")}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#1B634E]/15 text-xs font-mono text-[#1B634E] focus:outline-none focus:ring-1 focus:ring-[#0D9E71]"
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-600 mt-1 font-mono">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-[#1B634E] font-bold mb-1.5">
                    Telephone *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 9819667211"
                    {...register("phone")}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#1B634E]/15 text-xs font-mono text-[#1B634E] focus:outline-none focus:ring-1 focus:ring-[#0D9E71]"
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-600 mt-1 font-mono">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Enquiry Type Selector */}
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-[#1B634E] font-bold mb-1.5">
                  Enquiry Classification *
                </label>
                <select
                  {...register("enquiryType")}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#1B634E]/15 text-xs font-mono text-[#1B634E] focus:outline-none focus:ring-1 focus:ring-[#0D9E71]"
                >
                  {ENQUIRY_TYPES.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {errors.enquiryType && (
                  <p className="text-[11px] text-red-600 mt-1 font-mono">{errors.enquiryType.message}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-[#1B634E] font-bold mb-1.5">
                  Subject Line *
                </label>
                <input
                  type="text"
                  placeholder="Institutional tender pricing schedule..."
                  {...register("subject")}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#1B634E]/15 text-xs font-mono text-[#1B634E] focus:outline-none focus:ring-1 focus:ring-[#0D9E71]"
                />
                {errors.subject && (
                  <p className="text-[11px] text-red-600 mt-1 font-mono">{errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-[#1B634E] font-bold mb-1.5">
                  Detailed Message &amp; Required Volumes *
                </label>
                <textarea
                  rows={4}
                  placeholder="Provide details regarding delivery timeframe, destination city, and projected batch requirement..."
                  {...register("message")}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#1B634E]/15 text-xs font-mono text-[#1B634E] focus:outline-none focus:ring-1 focus:ring-[#0D9E71]"
                />
                {errors.message && (
                  <p className="text-[11px] text-red-600 mt-1 font-mono">{errors.message.message}</p>
                )}
              </div>

              {/* Consent */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("consent")}
                    className="mt-0.5 rounded border-[#1B634E]/20 text-[#0D9E71] focus:ring-[#0D9E71]"
                  />
                  <span className="text-xs text-[#3E6958] leading-relaxed">
                    I certify that this inquiry represents an institutional, clinical, or commercial request.
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-[11px] text-red-600 mt-1 font-mono">{errors.consent.message}</p>
                )}
              </div>

              {/* Submit Actions: Direct Email + WhatsApp Integration */}
              <div className="pt-2 space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Email Submission (Primary) */}
                  <button
                    type="button"
                    onClick={handleSubmit(handleEmailSubmit)}
                    disabled={isSubmitting}
                    className="w-full py-4 px-5 rounded-xl bg-[#1B634E] hover:bg-[#0D9E71] text-[#F6F4EE] font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 shadow-md hover:shadow-lg"
                  >
                    <Mail className="w-4 h-4 text-[#DCEEE4]" />
                    <span>Submit via Email</span>
                  </button>

                  {/* WhatsApp Submission (Alternative) */}
                  <button
                    type="button"
                    onClick={handleSubmit(handleWhatsAppSubmit)}
                    disabled={isSubmitting}
                    className="w-full py-4 px-5 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 shadow-md hover:shadow-lg"
                  >
                    <svg viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16 2C8.268 2 2 8.268 2 16c0 2.44.655 4.726 1.797 6.69L2 30l7.52-1.773A13.934 13.934 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm6.3 18.909c-.345-.173-2.045-1.009-2.362-1.124-.317-.115-.547-.173-.778.173-.23.345-.893 1.124-1.095 1.354-.202.23-.403.258-.748.086-.345-.173-1.456-.537-2.773-1.71-1.025-.914-1.717-2.044-1.918-2.389-.202-.345-.022-.531.151-.703.155-.155.345-.404.518-.605.172-.202.23-.345.345-.576.115-.23.057-.432-.029-.605-.086-.173-.778-1.874-1.066-2.566-.28-.673-.565-.582-.778-.593l-.663-.012c-.23 0-.605.086-.922.432s-1.209 1.181-1.209 2.882c0 1.7 1.238 3.344 1.411 3.574.173.23 2.437 3.72 5.902 5.216.825.356 1.468.569 1.97.728.828.263 1.582.226 2.178.137.664-.1 2.045-.836 2.333-1.643.288-.807.288-1.499.202-1.643-.086-.144-.317-.23-.662-.403z" />
                    </svg>
                    <span>Submit via WhatsApp</span>
                  </button>
                </div>

                <div className="pt-1 flex flex-wrap items-center justify-between text-[11px] font-mono text-[#3E6958] gap-2">
                  <span>Recipient: <strong className="text-[#1B634E]">{COMPANY.inquiryEmail}</strong></span>
                  <span>WhatsApp: <strong className="text-[#1B634E]">+{COMPANY.whatsapp}</strong></span>
                </div>

                <p className="text-[11px] text-[#3E6958]/80 text-center leading-relaxed">
                  Note: Clicking opens Gmail Web Compose or WhatsApp in a new tab with your inquiry pre-filled. You will review and press <strong>Send</strong> to complete transmission.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
