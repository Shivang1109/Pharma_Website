import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  type ContactFormData,
  ENQUIRY_TYPES,
} from "~/schemas/contact.schema";
import {
  submitContactForm,
  type ContactSubmissionResponse,
} from "~/services/contact.service";
import { CheckCircle2, AlertTriangle, Loader2, Send, Tag, X } from "lucide-react";

export const ContactForm: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const productParam = searchParams.get("product");
  const typeParam = searchParams.get("type");

  const [submissionStatus, setSubmissionStatus] = useState<ContactSubmissionResponse | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      organization: "",
      email: "",
      phone: "",
      enquiryType: (typeParam as any) || (productParam ? "product-related" : "general"),
      message: productParam
        ? `I would like to enquire regarding commercial availability, batch supply, and pricing terms for ${productParam}.`
        : "",
    },
  });

  // Keep form in sync if search params change
  useEffect(() => {
    if (productParam) {
      setValue("enquiryType", "product-related");
      setValue(
        "message",
        `I would like to enquire regarding commercial availability, batch supply, and pricing terms for ${productParam}.`
      );
    }
  }, [productParam, setValue]);

  const clearProductPreFill = () => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete("product");
    setSearchParams(nextParams);
    setValue("message", "");
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setServerError(null);
  const startTime = Date.now();

    try {
      const response = await submitContactForm(data);
      if (response.success) {
        setSubmissionStatus(response);
        reset();
      } else {
        setServerError(response.message || "Unable to submit enquiry. Please try again.");
      }
    } catch {
      setServerError("A communication error occurred. Please try again or reach out by phone.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submissionStatus?.success) {
    return (
      <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E4EBE6] shadow-sm text-center">
        <div className="w-16 h-16 bg-[#DFF1E9] rounded-2xl flex items-center justify-center mx-auto mb-5 text-[#07845E]">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-[#123D32]">Enquiry Received</h3>
        <p className="mt-3 text-sm sm:text-base text-[#53635C] max-w-md mx-auto leading-relaxed">
          {submissionStatus.message}
        </p>

        {submissionStatus.submissionId && (
          <div className="mt-6 inline-block bg-[#F2F7F4] border border-[#E4EBE6] px-4 py-2 rounded-xl text-xs text-[#53635C] font-mono">
            Reference ID: <strong className="text-[#123D32]">{submissionStatus.submissionId}</strong>
          </div>
        )}

        <div className="mt-8">
          <button
            type="button"
            onClick={() => setSubmissionStatus(null)}
            className="px-5 py-2.5 text-sm font-semibold text-[#123D32] bg-[#DFF1E9] hover:bg-[#c9e6db] rounded-xl transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E4EBE6] shadow-sm">
      <div className="mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-[#123D32]">
          Send a Business Enquiry
        </h3>
        <p className="text-sm text-[#53635C] mt-1">
          Complete the form below and our team will get back to you promptly.
        </p>

        {productParam && (
          <div className="mt-4 p-3 rounded-xl bg-[#DFF1E9] border border-[#07845E]/20 flex items-center justify-between gap-3 text-xs text-[#123D32] font-medium">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-[#07845E] shrink-0" />
              <span>
                Pre-selected Product Enquiry: <strong>{productParam}</strong>
              </span>
            </div>
            <button
              type="button"
              onClick={clearProductPreFill}
              className="p-1 text-[#53635C] hover:text-[#123D32] rounded-full hover:bg-white/80 transition-colors"
              aria-label="Remove pre-selected product"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {serverError && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-sm text-red-800">
          <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <p>{serverError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        {/* Full Name & Organization */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="fullName" className="block text-xs font-semibold text-[#123D32] uppercase tracking-wide mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              placeholder="e.g. Dr. Rajesh Sharma"
              {...register("fullName")}
              aria-invalid={errors.fullName ? "true" : "false"}
              className={`w-full px-4 py-2.5 text-sm rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-[#07845E] ${
                errors.fullName ? "border-red-400 bg-red-50/20" : "border-[#E4EBE6] bg-[#FAFCFA] hover:bg-white text-[#123D32]"
              }`}
            />
            {errors.fullName && (
              <p className="text-xs text-red-600 mt-1">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="organization" className="block text-xs font-semibold text-[#123D32] uppercase tracking-wide mb-1.5">
              Organization / Hospital <span className="text-[#53635C] font-normal text-[11px]">(Optional)</span>
            </label>
            <input
              id="organization"
              type="text"
              autoComplete="organization"
              placeholder="e.g. City Healthcare Ltd."
              {...register("organization")}
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#E4EBE6] bg-[#FAFCFA] hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#07845E] text-[#123D32]"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-[#123D32] uppercase tracking-wide mb-1.5">
              Business Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="name@company.com"
              {...register("email")}
              aria-invalid={errors.email ? "true" : "false"}
              className={`w-full px-4 py-2.5 text-sm rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-[#07845E] ${
                errors.email ? "border-red-400 bg-red-50/20" : "border-[#E4EBE6] bg-[#FAFCFA] hover:bg-white text-[#123D32]"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-[#123D32] uppercase tracking-wide mb-1.5">
              Contact Phone <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+91 9819667211"
              {...register("phone")}
              aria-invalid={errors.phone ? "true" : "false"}
              className={`w-full px-4 py-2.5 text-sm rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-[#07845E] ${
                errors.phone ? "border-red-400 bg-red-50/20" : "border-[#E4EBE6] bg-[#FAFCFA] hover:bg-white text-[#123D32]"
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Enquiry Type Selector */}
        <div>
          <label htmlFor="enquiryType" className="block text-xs font-semibold text-[#123D32] uppercase tracking-wide mb-1.5">
            Enquiry Type <span className="text-red-500">*</span>
          </label>
          <select
            id="enquiryType"
            {...register("enquiryType")}
            className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#E4EBE6] bg-[#FAFCFA] hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#07845E] text-[#123D32]"
          >
            {ENQUIRY_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          {errors.enquiryType && (
            <p className="text-xs text-red-600 mt-1">{errors.enquiryType.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-[#123D32] uppercase tracking-wide mb-1.5">
            Message / Requirements <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Please detail your institutional supply, distributor interest, or query..."
            {...register("message")}
            aria-invalid={errors.message ? "true" : "false"}
            className={`w-full px-4 py-2.5 text-sm rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-[#07845E] ${
              errors.message ? "border-red-400 bg-red-50/20" : "border-[#E4EBE6] bg-[#FAFCFA] hover:bg-white text-[#123D32]"
            }`}
          />
          {errors.message && (
            <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Consent Checkbox */}
        <div className="pt-1">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register("consent")}
              className="mt-1 h-4 w-4 rounded border-[#E4EBE6] text-[#07845E] focus:ring-[#07845E]"
            />
            <span className="text-xs text-[#53635C] leading-relaxed">
              I consent to ZILTON LIFE CARE storing my contact details solely to respond to this commercial enquiry. No sensitive medical records are being submitted.
            </span>
          </label>
          {errors.consent && (
            <p className="text-xs text-red-600 mt-1">{errors.consent.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#123D32] hover:bg-[#07845E] text-white font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-[#07845E] focus:ring-offset-2 transition-colors disabled:opacity-60 shadow-xs cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Transmitting Enquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Business Enquiry</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
