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
  const [submissionStatus, setSubmissionStatus] = useState<ContactSubmissionResponse | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
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

  const onSubmit = async (data: ContactFormData) => {
    if (honeypot) return; // Silent spam rejection
    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await submitContactForm({ ...data, honeypot });
      if (response.success) {
        setSubmissionStatus(response);
      } else {
        setServerError(response.message);
      }
    } catch {
      setServerError("A communication error occurred. Please contact our desk directly via phone.");
    } finally {
      setIsSubmitting(false);
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
          <div className="lg:col-span-5 bg-[#1B634E] text-[#F6F4EE] p-8 sm:p-10 rounded-3xl border border-[#1B634E] shadow-xl space-y-8 select-none">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#DCEEE4] font-bold block mb-2">
                Registered Office
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-white leading-tight">
                Zilton Life Care Pvt Ltd
              </h2>
              <address className="not-italic text-xs sm:text-sm text-white/85 font-light mt-3 leading-relaxed">
                LAXMI HOUSING &amp; FINANCE, 67 B, GOPAL MANSION,<br />
                GURUNANAK ROAD, BANDRA WEST,<br />
                MUMBAI – 400050, MAHARASHTRA, INDIA
              </address>
            </div>

            {/* Direct Lines */}
            <div className="space-y-4 pt-4 border-t border-white/15 font-mono text-xs text-white/95">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#DCEEE4] shrink-0" />
                <a
                  href="tel:+919819667211"
                  className="hover:text-white transition-colors font-bold text-sm tracking-wide"
                >
                  +91 9819667211
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#DCEEE4] shrink-0" />
                <span className="text-white/80">
                  info@ziltonlifecare.com
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#DCEEE4] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold">Monday – Saturday: 09:30 – 18:30 IST</span>
                  <span className="text-[10px] text-white/70">Closed on Sundays &amp; National Holidays</span>
                </div>
              </div>
            </div>

            {/* Office Map Architectural Image Slot */}
            <div className="pt-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#DCEEE4] block mb-2">
                LOCATION / MUMBAI REGION
              </span>
              <ImageSlot
                slotKey="contactOffice"
                ratio="16/9"
                caption="Bandra West corporate desk."
                className="rounded-2xl border border-white/15"
              />
            </div>

            {/* Statutory Disclaimer */}
            <div className="p-4 rounded-xl bg-white/10 border border-white/15 text-xs text-white/85 font-light leading-relaxed">
              <strong>Statutory Notice:</strong> This contact desk does not provide patient consultations or emergency services. For medical emergencies, consult your local healthcare facility immediately.
            </div>
          </div>

          {/* Right Column: Enquiry Form with Floating Labels & Honeypot */}
          <div className="lg:col-span-7 bg-[#FCFAF5] p-8 sm:p-12 rounded-3xl border border-[#1B634E]/15 shadow-sm">
            {submissionStatus?.success ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#DCEEE4] text-[#0D9E71] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 stroke-[2]" />
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1B634E]">
                  Enquiry Logged
                </h3>
                <p className="text-sm text-[#3E6958] max-w-md mx-auto leading-relaxed font-light">
                  {submissionStatus.message}
                </p>
                {submissionStatus.submissionId && (
                  <div className="inline-block px-4 py-2 rounded-lg bg-white border border-[#1B634E]/15 font-mono text-xs text-[#1B634E]">
                    REFERENCE: <strong>{submissionStatus.submissionId}</strong>
                  </div>
                )}
                <div className="pt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmissionStatus(null);
                      reset();
                    }}
                    className="font-mono text-xs uppercase tracking-wider font-bold text-[#0D9E71] hover:text-[#1B634E] underline cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

                {serverError && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{serverError}</span>
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

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-[#1B634E] hover:bg-[#0D9E71] text-[#F6F4EE] font-mono text-xs uppercase tracking-wider font-semibold transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 shadow-md"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <ArrowRight className="w-4 h-4" />
                        <span>Submit Corporate Inquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
