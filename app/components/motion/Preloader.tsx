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

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      id="preloader-screen"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1B634E] text-[#F6F4EE] select-none"
    >
      <div className="relative flex flex-col items-center">
        {/* Exact Logo Container with Soft Glow */}
        <div className="w-20 h-20 rounded-2xl bg-white p-2.5 shadow-2xl flex items-center justify-center mb-5 animate-pulse">
          <img
            src="/images/branding/logo-512.png"
            alt="Zilton Life Care Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <span className="font-editorial text-2xl tracking-tight text-white mb-2">
          Zilton Life Care
        </span>

        {/* Counter */}
        <div className="flex items-center gap-1 font-mono text-xs text-[#DCEEE4]">
          <span className="w-8 text-right font-bold">{count}</span>
          <span>%</span>
        </div>
      </div>
    </div>
  );
};
