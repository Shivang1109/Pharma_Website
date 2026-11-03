import React, { useState, useEffect } from "react";
import gsap from "gsap";

export const Preloader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only run once per session
    if (typeof window === "undefined") return;
    const hasLoaded = sessionStorage.getItem("zlc_preloader_shown");
    if (hasLoaded || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onComplete?.();
      return;
    }

    setVisible(true);
    sessionStorage.setItem("zlc_preloader_shown", "true");

    const counter = { val: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to("#preloader-screen", {
          yPercent: -100,
          duration: 0.7,
          ease: "power3.inOut",
          onComplete: () => {
            setVisible(false);
            onComplete?.();
          },
        });
      },
    });

    tl.to(counter, {
      val: 100,
      duration: 1.2,
      ease: "power2.inOut",
      onUpdate: () => setCount(Math.floor(counter.val)),
    });

    tl.to(
      "#preloader-logo-stroke",
      {
        strokeDashoffset: 0,
        duration: 1.1,
        ease: "power2.inOut",
      },
      0
    );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      id="preloader-screen"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1F3D33] text-[#F6F4EE] select-none"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Brand Emblem Stroke */}
        <div className="w-20 h-20 mb-6">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              id="preloader-logo-stroke"
              points="50,10 90,30 90,70 50,90 10,70 10,30"
              fill="none"
              stroke="#0B996F"
              strokeWidth="3"
              strokeDasharray="300"
              strokeDashoffset="300"
            />
            <circle cx="50" cy="50" r="14" fill="#F6F4EE" opacity="0.9" />
          </svg>
        </div>

        <span className="font-editorial text-2xl tracking-tight text-white mb-2">
          Zilton Life Care
        </span>

        {/* Counter */}
        <div className="flex items-center gap-1 font-mono text-xs text-[#0B996F]">
          <span className="w-8 text-right font-bold">{count}</span>
          <span>%</span>
        </div>
      </div>
    </div>
  );
};
