import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  type ContactFormData,
  ENQUIRY_TYPES,
  type EnquiryType,
} from "~/schemas/contact.schema";
import {
  submitContactForm,
  type ContactSubmissionResponse,
} from "~/services/contact.service";
import { PRODUCTS } from "~/data/products";
import {
  CheckCircle2,
  AlertTriangle,
  Loader2,
  Send,
  Tag,
  X,
  FileCheck2,
  Building,
  RotateCcw,
} from "lucide-react";

export const ContactForm: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const productParam = searchParams.get("product");
  const rawTypeParam = searchParams.get("type");

  // Map legacy / alternative incoming query type values to valid schema keys
  const resolveInitialType = (param: string | null, product: string | null): EnquiryType => {
    if (product) return "product-related";
    if (!param) return "general";
    if (param === "quality-inquiry" || param === "quality-docs") return "quality-docs";
    if (param === "business-partnership" || param === "institutional-partnership")
      return "institutional-partnership";
    if (param === "product-related") return "product-related";
    if (param === "other") return "other";
    return "general";
  };

  const initialEnquiryType = resolveInitialType(rawTypeParam, productParam);

  const [submissionStatus, setSubmissionStatus] = useState<ContactSubmissionResponse | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      organization: "",
      email: "",
      phone: "",
      enquiryType: initialEnquiryType,
      productName: productParam || "",
      subject: productParam
        ? `Institutional Enquiry: ${productParam}`
        : initialEnquiryType === "quality-docs"
        ? "Request for Batch Certificate of Analysis / Quality Dossier"
        : initialEnquiryType === "institutional-partnership"
        ? "Proposal for Institutional Distribution Partnership"
        : "",
      message: productParam
        ? `I would like to enquire regarding commercial availability, batch supply, and institutional pricing terms for ${productParam}.`
        : initialEnquiryType === "quality-docs"
        ? "Please furnish recent batch Certificates of Analysis (CoAs) and regulatory documentation for our institutional evaluation."
        : "",
    },
  });

  const selectedEnquiryType = watch("enquiryType");

  // Keep form synchronized if search params change
  useEffect(() => {
    if (productParam) {
      setValue("enquiryType", "product-related");
      setValue("productName", productParam);
      setValue("subject", `Institutional Enquiry: ${productParam}`);
      setValue(
        "message",
        `I would like to enquire regarding commercial availability, batch supply, and institutional pricing terms for ${productParam}.`
      );
    } else if (rawTypeParam) {
      const resolved = resolveInitialType(rawTypeParam, null);
      setValue("enquiryType", resolved);
      if (resolved === "quality-docs") {
        setValue("subject", "Request for Batch Certificate of Analysis / Quality Dossier");
      } else if (resolved === "institutional-partnership") {
        setValue("subject", "Proposal for Institutional Distribution Partnership");
      }
    }
  }, [productParam, rawTypeParam, setValue]);

  const clearProductPreFill = () => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete("product");
    setSearchParams(nextParams);
    setValue("productName", "");
    setValue("subject", "");
    setValue("message", "");
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await submitContactForm(data);
      if (response.success) {
        setSubmissionStatus(response);
      } else {
        setServerError(response.message || "Unable to dispatch enquiry. Please try again.");
      }
    } catch {
      setServerError("A communication error occurred. Please verify your connection or call our corporate desk.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setSubmissionStatus(null);
    reset({
      fullName: "",
      organization: "",
      email: "",
      phone: "",
      enquiryType: "general",
      productName: "",
      subject: "",
      message: "",
    });
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete("product");
    nextParams.delete("type");
    setSearchParams(nextParams);
  };

  if (submissionStatus?.success) {
    return (
      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E4EBE6] shadow-sm text-center">
        <div className="w-16 h-16 bg-[#DFF1E9] rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#07845E] shadow-xs">
          <CheckCircle2 className="w-10 h-10 stroke-[2]" />
        </div>

        <span className="inline-block text-xs uppercase tracking-wider font-bold text-[#07845E] bg-[#DFF1E9]/70 px-3 py-1 rounded-full mb-3">
          Enquiry Received
        </span>

        <h3
          className="text-2xl sm:text-3xl font-extrabold text-[#123D32]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Corporate Request Logged
        </h3>

        <p className="mt-3 text-sm sm:text-base text-[#53635C] max-w-lg mx-auto leading-relaxed">
          {submissionStatus.message}
        </p>

        {submissionStatus.submissionId && (
          <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-2 bg-[#F2F7F4] border border-[#E4EBE6] px-5 py-3 rounded-2xl text-xs text-[#53635C]">
            <span className="font-semibold text-[#123D32]">Unique Tracking Reference:</span>
            <code className="font-mono font-bold text-[#07845E] bg-white px-2.5 py-1 rounded-md border border-[#E4EBE6]">
              {submissionStatus.submissionId}
            </code>
          </div>
        )}

        {/* Transmission Summary Card */}
        {submissionStatus.receivedData && (
          <div className="mt-8 max-w-md mx-auto text-left bg-[#FAFCFA] border border-[#E4EBE6] rounded-2xl p-5 text-xs text-[#53635C] space-y-2">
            <h4 className="font-bold text-[#123D32] border-b border-[#E4EBE6] pb-2 uppercase tracking-wider text-[11px]">
              Submission Log Summary
            </h4>
            <div className="flex justify-between py-1">
              <span>Representative:</span>
              <strong className="text-[#123D32]">{submissionStatus.receivedData.fullName}</strong>
            </div>
            {submissionStatus.receivedData.organization && (
              <div className="flex justify-between py-1">
                <span>Organization:</span>
                <strong className="text-[#123D32]">{submissionStatus.receivedData.organization}</strong>
              </div>
            )}
            <div className="flex justify-between py-1">
              <span>Official Email:</span>
              <strong className="text-[#123D32]">{submissionStatus.receivedData.email}</strong>
            </div>
            <div className="flex justify-between py-1">
              <span>Subject:</span>
              <strong className="text-[#123D32] text-right truncate max-w-[200px]">
                {submissionStatus.receivedData.subject}
              </strong>
            </div>
            <div className="pt-2 border-t border-[#E4EBE6] text-[11px] text-[#53635C]/80 italic">
              * Staged submission mode. Once production SMTP credentials are provided, communications are directly dispatched to the corporate executive inbox.
            </div>
          </div>
        )}

        <div className="mt-8 flex justify-center gap-4">
          <button
            type="button"
            onClick={handleResetForm}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#123D32] bg-[#DFF1E9] hover:bg-[#cbe3d9] rounded-xl transition-all cursor-pointer shadow-xs"
          >
            <RotateCcw className="w-4 h-4" />
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E4EBE6] shadow-sm relative">
      <div className="mb-8">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#07845E] uppercase bg-[#DFF1E9]/60 px-3 py-1 rounded-full border border-[#07845E]/20 mb-3">
          <Building className="w-3.5 h-3.5" />
          Institutional Communications
        </span>
        <h3
          className="text-xl sm:text-2xl font-extrabold text-[#123D32]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Submit an Institutional Enquiry
        </h3>
        <p className="text-sm text-[#53635C] mt-1.5 leading-relaxed">
          Please provide your institutional credentials and requirements. Our corporate desk coordinates timely verification and quotation responses.
        </p>

        {productParam && (
          <div className="mt-4 p-3.5 rounded-2xl bg-[#DFF1E9]/80 border border-[#07845E]/30 flex items-center justify-between gap-3 text-xs text-[#123D32] font-medium">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-[#07845E] shrink-0" />
              <span>
                Referenced Product Context: <strong>{productParam}</strong>
              </span>
            </div>
            <button
              type="button"
              onClick={clearProductPreFill}
              className="p-1 text-[#53635C] hover:text-[#123D32] rounded-full hover:bg-white/80 transition-colors"
              aria-label="Clear product context"
              title="Clear product context"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {serverError && (
        <div
          role="alert"
          className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 flex items-start gap-3 text-sm text-red-800"
        >
          <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wide">Communication Notice</h4>
            <p className="mt-0.5 text-xs leading-relaxed">{serverError}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        {/* Full Name & Organization */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-bold text-[#123D32] uppercase tracking-wider mb-1.5"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              placeholder="e.g. Dr. Rajesh Sharma"
              {...register("fullName")}
              aria-invalid={errors.fullName ? "true" : "false"}
              className={`w-full px-4 py-3 text-sm rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-[#07845E] ${
                errors.fullName
                  ? "border-red-400 bg-red-50/20"
                  : "border-[#E4EBE6] bg-[#FAFCFA] hover:bg-white text-[#123D32]"
              }`}
            />
            {errors.fullName && (
              <p className="text-xs text-red-600 mt-1 font-medium">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="organization"
              className="block text-xs font-bold text-[#123D32] uppercase tracking-wider mb-1.5"
            >
              Organization / Hospital <span className="text-[#53635C] font-normal text-[11px]">(Optional)</span>
            </label>
            <input
              id="organization"
              type="text"
              autoComplete="organization"
              placeholder="e.g. Apex Multi-Speciality Hospital"
              {...register("organization")}
              className="w-full px-4 py-3 text-sm rounded-xl border border-[#E4EBE6] bg-[#FAFCFA] hover:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#07845E] text-[#123D32]"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-bold text-[#123D32] uppercase tracking-wider mb-1.5"
            >
              Official Business Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="procurement@hospital.org"
              {...register("email")}
              aria-invalid={errors.email ? "true" : "false"}
              className={`w-full px-4 py-3 text-sm rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-[#07845E] ${
                errors.email
                  ? "border-red-400 bg-red-50/20"
                  : "border-[#E4EBE6] bg-[#FAFCFA] hover:bg-white text-[#123D32]"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-600 mt-1 font-medium">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-bold text-[#123D32] uppercase tracking-wider mb-1.5"
            >
              Contact Telephone <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+91 9819667211"
              {...register("phone")}
              aria-invalid={errors.phone ? "true" : "false"}
              className={`w-full px-4 py-3 text-sm rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-[#07845E] ${
                errors.phone
                  ? "border-red-400 bg-red-50/20"
                  : "border-[#E4EBE6] bg-[#FAFCFA] hover:bg-white text-[#123D32]"
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-red-600 mt-1 font-medium">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Enquiry Type Selector */}
        <div>
          <label
            htmlFor="enquiryType"
            className="block text-xs font-bold text-[#123D32] uppercase tracking-wider mb-1.5"
          >
            Enquiry Classification <span className="text-red-500">*</span>
          </label>
          <select
            id="enquiryType"
            {...register("enquiryType")}
            className="w-full px-4 py-3 text-sm rounded-xl border border-[#E4EBE6] bg-[#FAFCFA] hover:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#07845E] text-[#123D32]"
          >
            {ENQUIRY_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          {errors.enquiryType && (
            <p className="text-xs text-red-600 mt-1 font-medium">{errors.enquiryType.message}</p>
          )}
        </div>

        {/* Product Selection Dropdown (Visible if product-related or if product selected) */}
        {selectedEnquiryType === "product-related" && (
          <div>
            <label
              htmlFor="productName"
              className="block text-xs font-bold text-[#123D32] uppercase tracking-wider mb-1.5"
            >
              Select Product Formulation <span className="text-[#53635C] font-normal text-[11px]">(Optional)</span>
            </label>
            <select
              id="productName"
              {...register("productName")}
              onChange={(e) => {
                const val = e.target.value;
                setValue("productName", val);
                if (val) {
                  setValue("subject", `Institutional Enquiry: ${val}`);
                }
              }}
              className="w-full px-4 py-3 text-sm rounded-xl border border-[#E4EBE6] bg-[#FAFCFA] hover:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-[#07845E] text-[#123D32]"
            >
              <option value="">-- Choose from portfolio (or specify in message) --</option>
              {PRODUCTS.map((prod) => (
                <option key={prod.id} value={prod.name}>
                  {prod.name} ({prod.category.replace(/-/g, " ")})
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Subject Input */}
        <div>
          <label
            htmlFor="subject"
            className="block text-xs font-bold text-[#123D32] uppercase tracking-wider mb-1.5"
          >
            Subject / Inquiry Title <span className="text-red-500">*</span>
          </label>
          <input
            id="subject"
            type="text"
            placeholder="e.g. Commercial supply terms for MEROZIL 1gm"
            {...register("subject")}
            aria-invalid={errors.subject ? "true" : "false"}
            className={`w-full px-4 py-3 text-sm rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-[#07845E] ${
              errors.subject
                ? "border-red-400 bg-red-50/20"
                : "border-[#E4EBE6] bg-[#FAFCFA] hover:bg-white text-[#123D32]"
            }`}
          />
          {errors.subject && (
            <p className="text-xs text-red-600 mt-1 font-medium">{errors.subject.message}</p>
          )}
        </div>

        {/* Message Textarea */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-bold text-[#123D32] uppercase tracking-wider mb-1.5"
          >
            Message &amp; Detailed Requirements <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Detail your requirements including expected volumes, delivery timelines, or technical specifications..."
            {...register("message")}
            aria-invalid={errors.message ? "true" : "false"}
            className={`w-full px-4 py-3 text-sm rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-[#07845E] ${
              errors.message
                ? "border-red-400 bg-red-50/20"
                : "border-[#E4EBE6] bg-[#FAFCFA] hover:bg-white text-[#123D32]"
            }`}
          />
          {errors.message && (
            <p className="text-xs text-red-600 mt-1 font-medium">{errors.message.message}</p>
          )}
        </div>

        {/* Institutional Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              id="consent"
              {...register("consent")}
              className="mt-1 h-4 w-4 rounded border-[#E4EBE6] text-[#07845E] focus:ring-[#07845E] accent-[#07845E] cursor-pointer"
            />
            <span className="text-xs text-[#53635C] leading-relaxed group-hover:text-[#123D32] transition-colors">
              I certify that this submission represents a formal institutional or commercial inquiry. I consent to ZILTON LIFE CARE storing my contact details solely to evaluate and respond to this request.
            </span>
          </label>
          {errors.consent && (
            <p className="text-xs text-red-600 mt-1 font-medium">{errors.consent.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#123D32] hover:bg-[#07845E] text-white font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-[#07845E] focus:ring-offset-2 transition-all duration-200 disabled:opacity-60 shadow-md hover:shadow-lg cursor-pointer text-sm"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Transmitting Institutional Enquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Institutional Enquiry</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
