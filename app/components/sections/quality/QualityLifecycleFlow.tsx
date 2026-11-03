import React from "react";
import { CheckCircle2, FlaskConical, ThermometerSnowflake, Hospital } from "lucide-react";

export const QualityLifecycleFlow: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Partner Audit",
      subtitle: "Facility Qualification",
      description:
        "Rigorous verification of third-party cleanrooms, air filtration systems, and cGMP compliance before contracting any formulation batch.",
      icon: CheckCircle2,
    },
    {
      step: "02",
      title: "Analytical Testing",
      subtitle: "CoA Verification",
      description:
        "Every batch lot undergoes HPLC assay, bacterial endotoxin testing, and absolute sterility verification prior to dispatch authorization.",
      icon: FlaskConical,
    },
    {
      step: "03",
      title: "Cold-Chain Transit",
      subtitle: "GDP Storage",
      description:
        "Strict adherence to temperature thresholds for sensitive injectables and parenteral infusions across regional warehousing nodes.",
      icon: ThermometerSnowflake,
    },
    {
      step: "04",
      title: "Institutional Delivery",
      subtitle: "Traceable Supply",
      description:
        "Final dispatch to verified hospitals, ICUs, and licensed distribution channel partners with documented lot traceability.",
      icon: Hospital,
    },
  ];

  return (
    <div className="py-12 border-t border-gray-100">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs uppercase tracking-wider font-semibold text-[#087B59] bg-[#E8F4EE] px-3 py-1 rounded-full">
          Quality Control Lifecycle
        </span>
        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-gray-900">
          The 4-Stage Quality Assurance Cycle
        </h2>
        <p className="mt-2 text-sm text-[#46534C]">
          Documented diligence from source manufacturing audit to healthcare facility receipt.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={item.step}
              className="relative p-6 rounded-2xl bg-white border border-[#DCE8E0] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-[#087B59]/30 font-mono">
                    {item.step}
                  </span>
                  <div className="p-2.5 rounded-xl bg-[#E8F4EE] text-[#087B59]">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-gray-900 leading-snug">
                  {item.title}
                </h3>
                <span className="text-xs font-semibold text-[#087B59] block mt-0.5">
                  {item.subtitle}
                </span>

                <p className="mt-3 text-xs text-[#46534C] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-[#DCE8E0] flex items-center justify-center text-[#087B59] text-[10px] font-bold">
                  →
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
