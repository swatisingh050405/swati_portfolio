"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Mail, Phone, Globe, Code2, ArrowUpRight, Copy, Check } from "lucide-react";

const LINKS = [
  { title: "Email", value: "swatisingh050405@gmail.com", href: "mailto:swatisingh050405@gmail.com", icon: Mail },
  { title: "Phone", value: "+91 9310092532", href: "tel:+919310092532", icon: Phone },
  { title: "LinkedIn", value: "linkedin.com/in/swati-singh-ai", href: "https://linkedin.com/in/swati-singh-ai", icon: Globe },
  { title: "GitHub", value: "github.com/swatisingh050405", href: "https://github.com/swatisingh050405", icon: Code2 },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("swatisingh050405@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-16 md:py-20 px-6 md:px-12 lg:px-16 overflow-hidden scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="editorial-card rounded-3xl p-8 sm:p-12 grid md:grid-cols-2 gap-10 relative overflow-hidden"
        >
          {/* Left — CTA */}
          <div className="relative z-10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#7B2D3C] bg-[#7B2D3C]/10 border border-[#7B2D3C]/20 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#7B2D3C]" />
                <span>OPEN TO OPPORTUNITIES</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1F1D1A] tracking-tight leading-tight mb-4">
                Let's build something{" "}
                <span className="italic text-[#7B2D3C]">
                  intelligent.
                </span>
              </h2>

              <p className="font-body text-sm sm:text-base text-[#8C827A] leading-relaxed mb-6 max-w-md">
                I'm looking for opportunities to apply my skills, solve real-world challenges, and grow as an AI/ML engineer while building meaningful, production-ready systems.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="mailto:swatisingh050405@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider btn-accent shadow-md hover:scale-105 transition-all"
              >
                <span>Say Hello</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full text-xs font-mono font-medium text-[#1F1D1A] bg-[#F8F2F2] border border-[#E5DED6] hover:border-[#7B2D3C] hover:text-[#7B2D3C] transition-all cursor-pointer shadow-xs"
                title="Copy Email Address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#7B2D3C]" />
                    <span className="text-[#7B2D3C]">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#7B2D3C]" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right — link rows */}
          <div className="relative z-10 flex flex-col justify-center divide-y divide-[#E5DED6] border-t border-b border-[#E5DED6] md:border-t-0 my-auto">
            {LINKS.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
                className="group flex items-center justify-between py-4 hover:pl-2 transition-all"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#7B2D3C]/10 text-[#7B2D3C] border border-[#7B2D3C]/20 shrink-0 transition-transform group-hover:scale-110">
                    <link.icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#8C827A] font-semibold">
                      {link.title}
                    </p>
                    <p className="font-body text-sm text-[#1F1D1A] truncate group-hover:text-[#7B2D3C] transition-colors font-medium">
                      {link.value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8C827A] group-hover:text-[#7B2D3C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-xs font-body text-[#8C827A] gap-3">
          <p>© {new Date().getFullYear()} Swati Singh. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-mono">
            <span>Crafted for AI/ML Engineering</span>
            <span className="text-[#7B2D3C]">✦</span>
            <span>Next.js & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </section>
  );
}