import React from "react";
import { MapPin, Phone, Mail, Clock, AlertCircle, Building2, Warehouse } from "lucide-react";
import { COMPANY } from "~/data/company";

export const ContactInfo: React.FC = () => {
  return (
    <div className="bg-[#123D32] text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between border border-[#07845E]/30 relative overflow-hidden">
      {/* Decorative ambient backdrop */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-60 h-60 rounded-full bg-[#07845E]/15 blur-2xl pointer-events-none" />

      <div className="relative z-10">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#DFF1E9] bg-white/10 px-3.5 py-1 rounded-full uppercase border border-white/10 mb-4">
          <Building2 className="w-3.5 h-3.5 text-[#07845E]" />
          Corporate Communications
        </span>

        <h3
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {COMPANY.shortName} Desk
        </h3>

        <p className="mt-3 text-[#DFF1E9]/80 text-sm leading-relaxed font-light">
          We welcome formal inquiries from hospital procurement committees, registered pharmaceutical distributors, clinical specialists, and healthcare institutions.
        </p>

        {/* Contact Details List */}
        <div className="mt-8 space-y-6">
          {/* Registered Office */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/10 rounded-2xl shrink-0 mt-0.5 text-[#DFF1E9] border border-white/10">
              <MapPin className="w-5 h-5 text-[#07845E]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#DFF1E9]">
                  Registered Corporate Office
                </h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-[#DFF1E9]/80">
                  Official Entity
                </span>
              </div>
              <p className="text-sm font-medium mt-1 text-white/95 leading-relaxed">
                {COMPANY.name}
              </p>
              <address className="not-italic text-xs text-[#DFF1E9]/80 mt-1 leading-relaxed">
                {COMPANY.address.line1},<br />
                {COMPANY.address.line2},<br />
                {COMPANY.address.city} – {COMPANY.address.pincode}, {COMPANY.address.state}, {COMPANY.address.country}
              </address>
            </div>
          </div>

          {/* Operational Facilities Note */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/10 rounded-2xl shrink-0 mt-0.5 text-[#DFF1E9] border border-white/10">
              <Warehouse className="w-5 h-5 text-[#07845E]" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#DFF1E9]">
                Manufacturing &amp; Logistics Network
              </h4>
              <p className="text-xs text-[#DFF1E9]/80 mt-1 leading-relaxed">
                Product compounding, sterilization, and warehousing are conducted exclusively at statutory cGMP/Schedule M contract manufacturing plants and audited regional depots across India.
              </p>
            </div>
          </div>

          {/* Telephone */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/10 rounded-2xl shrink-0 mt-0.5 text-[#DFF1E9] border border-white/10">
              <Phone className="w-5 h-5 text-[#07845E]" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#DFF1E9]">
                Direct Corporate Desk
              </h4>
              <a
                href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
                className="text-sm font-semibold mt-1 inline-block text-white hover:text-[#DFF1E9] transition-colors"
              >
                {COMPANY.phone}
              </a>
              <span className="block text-[11px] text-[#DFF1E9]/60 mt-0.5">
                Standard telecommunications rates apply
              </span>
            </div>
          </div>

          {/* Official Email */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/10 rounded-2xl shrink-0 mt-0.5 text-[#DFF1E9] border border-white/10">
              <Mail className="w-5 h-5 text-[#07845E]" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#DFF1E9]">
                Institutional Mailbox
              </h4>
              <span className="text-sm font-medium mt-1 inline-block text-white/90">
                info@ziltonlifecare.com
              </span>
              <span className="block text-[11px] text-amber-200/80 mt-0.5 font-light">
                (Awaiting official domain mailbox provisioning by client)
              </span>
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/10 rounded-2xl shrink-0 mt-0.5 text-[#DFF1E9] border border-white/10">
              <Clock className="w-5 h-5 text-[#07845E]" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#DFF1E9]">
                Operating Hours (IST)
              </h4>
              <p className="text-sm font-medium mt-1 text-white/90">
                Monday to Saturday: 09:30 AM – 06:30 PM
              </p>
              <span className="block text-[11px] text-[#DFF1E9]/60 mt-0.5">
                Closed on Sundays and Gazetted Indian National Holidays
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Medical / Non-Clinical Notice */}
      <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-[#DFF1E9]/80 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Institutional Scope:</strong> This corporate portal facilitates commercial and regulatory dialogue. For patient emergencies, adverse drug reactions, or immediate medical assistance, please contact emergency health services or a licensed healthcare provider directly.
          </p>
        </div>
      </div>
    </div>
  );
};
