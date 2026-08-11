"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiPython,
  SiPytorch,
  SiFastapi,
  SiReact,
  SiMlflow,
  SiLangchain,
} from "react-icons/si";
import { ArrowRight, Mail, Sparkles, Terminal } from "lucide-react";
import TiltPhotoCard from "./TiltPhotoCard";
import NotebookCard from "./NotebookCard";

const ROLES = [
  "AI/ML Engineer",
  "LLM & RAG Systems Builder",
  "Generative AI Developer",
  "Full-Stack Developer",
];

const TECH_ITEMS = [
  { icon: SiPython, label: "Python", color: "#3776AB" },
  { icon: SiPytorch, label: "PyTorch", color: "#EE4C2C" },
  { icon: SiFastapi, label: "FastAPI", color: "#009688" },
  { icon: SiLangchain, label: "LangChain", color: "#7B2D3C" },
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiMlflow, label: "MLflow", color: "#0194E2" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative px-6 md:px-12 lg:px-16 pt-28 md:pt-32 pb-10 md:pb-12 flex items-center overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 lg:gap-14 items-center w-full">
        
        {/* Left Column Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:col-span-7 flex flex-col items-start z-10"
        >
          {/* Subtle Tag */}
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#7B2D3C] bg-[#7B2D3C]/10 border border-[#7B2D3C]/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#7B2D3C]" />
            <span>AI / ML ENGINEER PORTFOLIO</span>
          </span>

          {/* Editorial Display Heading */}
          <div className="relative mb-2">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal text-[#1F1D1A] leading-[1.02] tracking-tight">
              Hello,<br />
              <span className="italic text-[#7B2D3C]">I'm Swati.</span>
            </h1>
          </div>

          {/* Role Rotator */}
          <div className="h-8 mb-4 flex items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={ROLES[roleIndex]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="font-heading text-base sm:text-lg font-semibold text-[#8C827A] tracking-wide flex items-center gap-2"
              >
                <span className="text-[#7B2D3C] font-bold">—</span> {ROLES[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="w-full max-w-xl mb-6"
          >
            <NotebookCard>
              Curious by nature, driven by challenges, and always eager to build. I enjoy understanding how things work, solving problems, and turning ideas into something real — learning through experiments, building through curiosity.
            </NotebookCard>
          </motion.div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-7">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider btn-accent shadow-md hover:scale-105 transition-all"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#1F1D1A] bg-[#F4EFEA] border border-[#E5DED6] hover:border-[#7B2D3C] hover:text-[#7B2D3C] transition-all shadow-xs"
            >
              <Mail className="w-4 h-4 text-[#7B2D3C]" />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Tech Stack Bar */}
          <div className="w-full pt-4 border-t border-[#E5DED6]">
            <p className="text-[10px] uppercase font-mono tracking-widest text-[#8C827A] mb-2.5 font-semibold">
              CORE TECHNOLOGIES & TOOLS:
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {TECH_ITEMS.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="px-2.5 py-1.5 rounded-xl bg-[#F4EFEA] border border-[#E5DED6] flex items-center gap-2 hover:border-[#7B2D3C] hover:-translate-y-0.5 transition-all shadow-xs cursor-default"
                >
                  <Icon className="text-sm sm:text-base" style={{ color }} />
                  <span className="text-xs font-body text-[#1F1D1A] font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Dynamic Double-Layered Editorial Card Frame */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="md:col-span-5 relative flex items-center justify-center lg:justify-end mt-8 md:mt-0"
        >
          {/* Outer Dynamic Floating Wrapper */}
          <motion.div
            animate={{ y: [-4, 4, -4], rotate: [-0.5, 0.5, -0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-[330px] sm:max-w-[360px] flex items-center justify-center"
          >
            
            {/* Double Layer 1: Backing Envelope Paper Card (Rotated Left) */}
            <div className="absolute -inset-4 sm:-inset-5 rounded-[36px] bg-[#F4EFEA] border border-[#E5DED6] shadow-sm transform -rotate-3 pointer-events-none" />
            
            {/* Double Layer 2: Mid Accent Ring Frame (Rotated Right) */}
            <div className="absolute -inset-2 rounded-[32px] border border-[#7B2D3C]/20 transform rotate-2 pointer-events-none" />

            {/* Main Foreground Editorial Card Frame */}
            <div className="relative z-10 w-full rounded-[28px] bg-[#FAF7F2] border-2 border-[#E5DED6] shadow-2xl p-4 sm:p-5 flex flex-col gap-3.5 overflow-hidden">
              
              {/* Card Header Strip */}
              <div className="flex items-center justify-between pb-2.5 border-b border-[#E5DED6]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#7B2D3C]" />
                  <span className="font-heading font-bold text-[#1F1D1A] tracking-wide text-xs sm:text-sm">
                    SWATI SINGH
                  </span>
                </div>
                <span className="font-mono text-[10px] tracking-widest text-[#7B2D3C] uppercase font-bold">
                  ✦ AI/ML ENGINEER
                </span>
              </div>

              {/* Swati's Portrait Frame (100% untouched photo with Tilt physics) */}
              <div className="w-full rounded-2xl overflow-hidden border border-[#E5DED6] bg-[#F4EFEA] p-1.5 shadow-sm">
                <TiltPhotoCard
                  src="/swati_photo.jpeg"
                  alt="Swati Singh"
                  className="w-full aspect-[4/5] sm:h-[350px] lg:h-[380px]"
                />
              </div>

            </div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}