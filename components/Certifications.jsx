"use client";

import { motion } from "framer-motion";
import { Sparkles, Brain, BarChart3, Award, CheckCircle2 } from "lucide-react";

const CERTIFICATIONS = [
  {
    icon: Brain,
    title: "Samsung Innovation Campus",
    subtitle: "Artificial Intelligence",
    description: "AI fundamentals, machine learning concepts, and practical AI applications.",
    year: "2026",
  },
  {
    icon: BarChart3,
    title: "IBM SkillsBuild",
    subtitle: "Data Analytics",
    description: "Data analysis, visualization, and working with data-driven insights.",
    year: "2025",
  },
  {
    icon: Award,
    title: "DRDO Internship Certificate",
    subtitle: "Research & Engineering",
    description: "Hands-on exposure to technology, research, and engineering practices at DRDO.",
    year: "2025",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-16 md:py-20 px-6 md:px-12 lg:px-16 overflow-hidden scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#7B2D3C] bg-[#7B2D3C]/10 border border-[#7B2D3C]/20 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#7B2D3C]" />
            <span>CREDENTIALS & RECOGNITION</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1F1D1A] tracking-tight">
            Verified learning &{" "}
            <span className="italic text-[#7B2D3C]">
              credentials.
            </span>
          </h2>
          <p className="font-heading text-base sm:text-lg text-[#8C827A] mt-2 font-medium">
            — Industry certifications and research experience that strengthened my technical foundation.
          </p>
        </motion.div>

        {/* Credential list */}
        <div className="editorial-card rounded-3xl overflow-hidden divide-y divide-[#E5DED6]">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative flex flex-col sm:flex-row sm:items-center gap-4 px-6 py-6 transition-colors hover:bg-[#FAF7F2]"
            >
              <div className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-[#7B2D3C]/10 text-[#7B2D3C] border border-[#7B2D3C]/20">
                <cert.icon className="w-5 h-5" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[#1F1D1A] group-hover:text-[#7B2D3C] transition-colors">
                    {cert.title}
                  </h3>
                  <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#F8F2F2] border border-[#E5DED6] text-[#7B2D3C]">
                    {cert.subtitle}
                  </span>
                </div>
                <p className="font-body text-xs sm:text-sm text-[#8C827A] mt-1 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
                <CheckCircle2 className="w-4 h-4 text-[#7B2D3C]" />
                <span className="font-mono text-xs text-[#8C827A] font-semibold">{cert.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}