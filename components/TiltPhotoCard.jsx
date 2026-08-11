"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TiltPhotoCard({
  src,
  alt,
  className = "",
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), {
    stiffness: 180,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), {
    stiffness: 180,
    damping: 24,
  });

  function handleMouseMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className={`relative ${className}`} style={{ perspective: 1000 }}>
      {/* Background Soft Glow */}
      <div className="absolute inset-2 -z-10 rounded-2xl bg-[#7B2D3C]/10 blur-[30px] pointer-events-none" />

      {/* Main Image Container */}
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative overflow-hidden w-full h-full rounded-2xl border border-[#E5DED6] shadow-md bg-[#FAF7F2] cursor-pointer"
      >
        <div className="w-full h-full overflow-hidden relative">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
            style={{ transform: "translateZ(10px)" }}
          />
        </div>
      </motion.div>
    </div>
  );
}