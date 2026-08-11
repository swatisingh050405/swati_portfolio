"use client";

import { motion } from "framer-motion";
import { Sparkles, HelpCircle, Hammer, Target, ArrowUpRight, Terminal, Cpu, GraduationCap, Award } from "lucide-react";

const TRAITS = [
  {
    number: "01",
    label: "Problem Solving",
    icon: HelpCircle,
    color: "#7B2D3C",
    title: "I Ask Why.",
    text: "I'd rather understand the reasoning behind a solution than memorize how it works. Breaking a problem down until the logic is clear is what leads to solutions that actually hold up.",
    flow: "WHY → UNDERSTAND → SOLVE",
  },
  {
    number: "02",
    label: "Building Style",
    icon: Hammer,
    color: "#7B2D3C",
    title: "Build. Break. Refine.",
    text: "I learn by getting my hands dirty — building something, finding what breaks, fixing it, and letting each iteration sharpen the result.",
    flow: "BUILD → DEBUG → IMPROVE",
  },
  {
    number: "03",
    label: "Working Mindset",
    icon: Target,
    color: "#7B2D3C",
    title: "Make It Make Sense.",
    text: "Whether I'm learning a concept or shipping a system, I care about the details underneath — and making sure what I build actually solves the problem it was meant to.",
    flow: "UNDERSTAND → TEST → BUILD BETTER",
  },
];

const JOURNEY_STEPS = [
  {
    year: "FOUNDATION",
    title: "CS Fundamentals & Engineering",
    description: "Built strong grounding in Data Structures, Algorithms, Object-Oriented Programming, Data Management, and core CS principles.",
    icon: GraduationCap,
  },
  {
    year: "EXPERIENCE",
    title: "DRDO Research Internship",
    description: "Hands-on research & engineering exposure at Defence Research and Development Organisation, sharpening practical technical methodologies.",
    icon: Award,
  },
  {
    year: "SPECIALIZATION",
    title: "AI/ML, RAG & MLOps Systems",
    description: "Designing end-to-end ML pipelines, LLM-powered applications, vector search indexes, experiment tracking, and production API deployments.",
    icon: Cpu,
  },
];

export default function About() {
  return (
    <section id="about" className="relative pt-8 md:pt-12 pb-20 px-6 md:px-12 lg:px-16 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#7B2D3C] bg-[#7B2D3C]/10 border border-[#7B2D3C]/20 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#7B2D3C]" />
            <span>ABOUT ME</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1F1D1A] tracking-tight">
            Learning, Exploring,{" "}
            <span className="italic text-[#7B2D3C]">
              Building.
            </span>
          </h2>
          <p className="font-heading text-base sm:text-lg text-[#8C827A] mt-2 font-medium">
            — Learning deeply, experimenting hands-on, and turning ideas into working systems.
          </p>
        </motion.div>

        {/* TOP BLOCK: Editorial Bio Box */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="editorial-card p-7 sm:p-10 rounded-3xl space-y-6"
        >
          {/* Header Label */}
          <div className="flex items-center justify-between pb-3 border-b border-[#E5DED6] text-xs font-mono text-[#7B2D3C] font-semibold uppercase tracking-wider">
            <span className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#7B2D3C]" /> intro_notebook.md
            </span>
            <span className="text-[#8C827A] font-normal">ENGINEER PROFILE</span>
          </div>

          {/* Paragraphs with Clear High-Contrast Typography */}
          <div className="space-y-4 font-body text-base sm:text-lg leading-relaxed text-[#2D2A26]">
            <p>
              I'm a Computer Science undergraduate focused on <strong className="text-[#1F1D1A] font-semibold">AI/ML engineering, Generative AI, and intelligent applications</strong>. I started with programming and software development, building a strong foundation in problem-solving, data structures, and software engineering.
            </p>

            <p>
              My interests gradually evolved towards Machine Learning and AI, and today I work with <strong className="text-[#1F1D1A] font-semibold">LLMs, RAG systems, Generative AI, fine-tuning, and MLOps</strong> — combining experimentation with practical engineering to turn ideas into useful, reliable applications.
            </p>

            <p>
              I'm especially interested in understanding how AI systems work under the hood, and applying that understanding to build better real-world products.
            </p>
          </div>

          {/* Bottom Accent Line */}
          <div className="pt-4 border-t border-[#E5DED6] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7B2D3C]" />
              <span className="font-semibold text-[#7B2D3C]">
                Still learning. Still experimenting. Still building.
              </span>
            </div>
            <span className="text-[#8C827A] italic font-serif text-sm">
              Curiosity drives the questions. Building turns them into answers.
            </span>
          </div>
        </motion.div>

        {/* MIDDLE SECTION: 3 Mindset Trait Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRAITS.map((trait, i) => {
            const Icon = trait.icon;

            return (
              <motion.div
                key={trait.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="editorial-card p-6 rounded-2xl h-full flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#7B2D3C]/10 text-[#7B2D3C] border border-[#7B2D3C]/20">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs font-semibold text-[#7B2D3C] tracking-wider uppercase">
                        {trait.number} / {trait.label}
                      </span>
                    </div>

                    <div className="w-6 h-6 rounded-full bg-[#FAF7F2] flex items-center justify-center border border-[#E5DED6]">
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#8C827A] group-hover:text-[#7B2D3C] transition-colors" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-normal text-[#1F1D1A] mb-2 group-hover:text-[#7B2D3C] transition-colors">
                    {trait.title}
                  </h3>

                  {/* Text */}
                  <p className="font-body text-xs sm:text-sm text-[#8C827A] leading-relaxed mb-4">
                    {trait.text}
                  </p>
                </div>

                {/* Flow Tag Footer */}
                <div className="pt-3 border-t border-[#E5DED6] flex items-center justify-between">
                  <span className="font-mono text-[11px] font-semibold text-[#7B2D3C]">
                    {trait.flow}
                  </span>
                  <span className="text-[#7B2D3C] text-xs">✦</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM SECTION: Engineering Trajectory Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pt-2"
        >
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1F1D1A] mb-6 flex items-center gap-3">
            <span>Engineering Focus & Journey</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {JOURNEY_STEPS.map((step) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.title}
                  className="editorial-card p-6 rounded-2xl relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FAF7F2] border border-[#E5DED6] text-[#7B2D3C]">
                        {step.year}
                      </span>
                      <StepIcon className="w-4 h-4 text-[#7B2D3C]" />
                    </div>
                    <h4 className="font-heading text-base font-semibold text-[#1F1D1A] mb-2">
                      {step.title}
                    </h4>
                    <p className="font-body text-xs text-[#8C827A] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}