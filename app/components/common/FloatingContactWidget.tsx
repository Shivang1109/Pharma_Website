import React, { useState, useEffect } from "react";
import { MessageCircle, Phone, ArrowUp, X } from "lucide-react";
import { COMPANY } from "~/data/company";

export const FloatingContactWidget: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Zilton Life Care team, I am contacting you regarding pharmaceutical distribution and institutional supply enquiries."
  );
  const whatsappUrl = `https://wa.me/919819667211?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="pointer-events-auto p-3 bg-white text-[#123D32] rounded-full shadow-lg border border-[#E4EBE6] hover:bg-[#DFF1E9] hover:text-[#07845E] transition-all duration-200 focus-visible:outline-[#07845E]"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Expanded Quick Contact Panel */}
      {isOpen && (
        <div className="pointer-events-auto mb-1 w-72 bg-white rounded-2xl shadow-2xl border border-[#E4EBE6] p-4 text-left animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <div>
              <p className="text-xs font-bold text-gray-900">Direct Enquiry</p>
              <p className="text-[11px] text-[#07845E] font-medium">Zilton Life Care Desk</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100"
              aria-label="Close contact options"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-3 space-y-2">
            {/* WhatsApp Option */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-xl bg-[#DFF1E9]/60 hover:bg-[#DFF1E9] text-[#123D32] transition-colors text-xs font-semibold"
            >
              <div className="p-1.5 rounded-lg bg-[#07845E] text-white">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <span className="block leading-tight">Chat on WhatsApp</span>
                <span className="text-[10px] text-[#07845E] font-medium">
                  +91 9819667211
                </span>
              </div>
            </a>

            {/* Direct Phone Call Option */}
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-800 transition-colors text-xs font-semibold"
            >
              <div className="p-1.5 rounded-lg bg-[#123D32] text-white">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="block leading-tight">Call Business Desk</span>
                <span className="text-[10px] text-gray-500 font-normal">
                  Direct Line
                </span>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto flex items-center gap-2 px-4 py-3 bg-[#07845E] hover:bg-[#05684A] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 focus-visible:outline-[#07845E] group"
        aria-label="Open fast business enquiry"
        aria-expanded={isOpen}
      >
        <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline">
          Quick Enquiry
        </span>
      </button>
    </div>
  );
};
