"use client";

import { useEffect, useRef } from "react";

export default function BackgroundCanvas() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    function handleMouseMove(e) {
      if (!spotlightRef.current) return;
      spotlightRef.current.style.setProperty("--mx", `${e.clientX}px`);
      spotlightRef.current.style.setProperty("--my", `${e.clientY}px`);
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#FDFBF7]">
      {/* Soft Ambient Burgundy & Blush Glow Orbs */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-[#7B2D3C]/6 via-[#F8F2F2]/50 to-transparent rounded-full blur-[140px]" />
      <div className="absolute top-1/3 -right-32 w-[550px] h-[550px] bg-gradient-to-bl from-[#8C827A]/8 via-[#F4EFEA]/60 to-transparent rounded-full blur-[150px]" />
      <div className="absolute -bottom-32 left-1/3 w-[650px] h-[650px] bg-gradient-to-tr from-[#E5DED6]/40 via-[#FDFBF7]/60 to-transparent rounded-full blur-[160px]" />

      {/* Subtle Mouse-Follow Burgundy Spotlight */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `
            radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(123, 45, 60, 0.035), transparent 70%)
          `,
        }}
      />

      {/* Fine Subtle Editorial Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1F1D1A 1px, transparent 1px),
            linear-gradient(to bottom, #1F1D1A 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />
    </div>
  );
}