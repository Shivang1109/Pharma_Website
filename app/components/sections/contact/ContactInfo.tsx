import React from "react";
import { MapPin, Phone, Mail, Clock, AlertCircle } from "lucide-react";

export const ContactInfo: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#173B30] to-[#087B59] text-white p-8 sm:p-10 rounded-3xl shadow-lg flex flex-col justify-between">
      <div>
        <span className="inline-block text-xs uppercase tracking-wider font-semibold text-[#E8F4EE] bg-white/10 px-3 py-1 rounded-full mb-4">
          Corporate Office
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Connect with ZILTON LIFE CARE
        </h3>
        <p className="mt-3 text-[#E8F4EE]/90 text-sm sm:text-base leading-relaxed">
          We welcome institutional procurement enquiries, healthcare professional consultations, and prospective channel distribution partnerships.
        </p>

        {/* Contact Details List */}
        <div className="mt-8 space-y-6">
          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-white/10 rounded-xl shrink-0 mt-0.5">
              <MapPin className="w-5 h-5 text-[#E8F4EE]" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#E8F4EE]/70">
                Registered Office
              </h4>
              <p className="text-sm font-medium mt-1 leading-snug">
                LAXMI HOUSING & FINANCE, 67 B, GOPAL MANSION,<br />
                GURUNANAK ROAD, BANDRA WEST,<br />
                MUMBAI – 400050, MAHARASHTRA, INDIA
              </p>
            </div>
          </div>

          {/* Telephone */}
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-white/10 rounded-xl shrink-0 mt-0.5">
              <Phone className="w-5 h-5 text-[#E8F4EE]" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#E8F4EE]/70">
                Telephone Enquiries
              </h4>
              <a
                href="tel:+919819667211"
                className="text-sm font-medium mt-1 inline-block hover:underline"
              >
                +91 9819667211
              </a>
              <span className="block text-[11px] text-[#E8F4EE]/60 mt-0.5">
                Standard corporate calling charges apply
              </span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-white/10 rounded-xl shrink-0 mt-0.5">
              <Mail className="w-5 h-5 text-[#E8F4EE]" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#E8F4EE]/70">
                Official Email
              </h4>
              <p className="text-sm font-medium mt-1">
                info@ziltonlifecare.com
              </p>
              <span className="block text-[11px] text-amber-200/80 mt-0.5">
                (Awaiting official domain mailbox provisioning)
              </span>
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-white/10 rounded-xl shrink-0 mt-0.5">
              <Clock className="w-5 h-5 text-[#E8F4EE]" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#E8F4EE]/70">
                Operating Hours
              </h4>
              <p className="text-sm font-medium mt-1">
                Monday to Saturday: 09:30 AM – 06:30 PM IST
              </p>
              <span className="block text-[11px] text-[#E8F4EE]/60 mt-0.5">
                Closed on Sundays & National Holidays
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance / Emergency Notice */}
      <div className="mt-10 p-4 rounded-2xl bg-black/20 border border-white/10 text-xs text-[#E8F4EE]/80 flex items-start gap-3">
        <AlertCircle className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
        <p>
          <strong>Medical Notice:</strong> This contact channel does not provide patient consultations or emergency medical services. In a medical emergency, please contact your nearest hospital immediately.
        </p>
      </div>
    </div>
  );
};

