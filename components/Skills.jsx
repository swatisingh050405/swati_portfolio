"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, Brain, Layers, Workflow } from "lucide-react";
import {
  SiPython,
  SiCplusplus,
  SiPytorch,
  SiScikitlearn,
  SiLangchain,
  SiFastapi,
  SiReact,
  SiMlflow,
  SiGit,
  SiGithubactions,
  SiMysql,
  SiDocker,
} from "react-icons/si";

const SKILL_ICON_MAP = {
  Python: { icon: SiPython, color: "#3776AB" },
  "C++": { icon: SiCplusplus, color: "#00599C" },
  PyTorch: { icon: SiPytorch, color: "#EE4C2C" },
  "Scikit-learn": { icon: SiScikitlearn, color: "#F7931E" },
  LangChain: { icon: SiLangchain, color: "#7B2D3C" },
  FastAPI: { icon: SiFastapi, color: "#009688" },
  React: { icon: SiReact, color: "#61DAFB" },
  MLflow: { icon: SiMlflow, color: "#0194E2" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Git: { icon: SiGit, color: "#F05032" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
};

const SKILL_GROUPS = [
  {
    code: "01 // FOUNDATIONS",
    category: "CS & PROGRAMMING FOUNDATIONS",
    subtitle: "Core Languages & Algorithmic Principles",
    description: "Strong algorithmic grounding, efficient problem-solving, and clean software architecture.",
    icon: Code2,
    skills: ["Python", "C++", "DSA"],
  },
  {
    code: "02 // INTELLIGENCE",
    category: "AI, MACHINE LEARNING & LLMs",
    subtitle: "Neural Networks, Generative AI, RAG & Vector Search",
    description: "Building end-to-end ML models, RAG document pipelines, vector indexing, threshold tuning, and model explainability.",
    icon: Brain,
    skills: ["PyTorch", "Scikit-learn", "LangChain", "RAG Systems", "ChromaDB", "SHAP"],
  },
  {
    code: "03 // ENGINEERING",
    category: "FULL-STACK & APPLICATION ENGINEERING",
    subtitle: "Production Backend APIs, Interfaces & Containerization",
    description: "Shipping production-grade web services, responsive React UIs, relational database architectures, and Docker containerization.",
    icon: Layers,
    skills: ["FastAPI", "React", "MySQL", "Docker"],
  },
  {
    code: "04 // OPERATIONS",
    category: "MLOPS & DEVELOPER TOOLING",
    subtitle: "Experiment Tracking, Data Versioning & CI/CD Automation",
    description: "Streamlining experiment tracking, pipeline orchestration, model drift monitoring, version control, and automated deployment pipelines.",
    icon: Workflow,
    skills: ["MLflow", "DVC", "Evidently AI", "Git", "GitHub Actions"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-20 px-6 md:px-12 lg:px-16 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#7B2D3C] bg-[#7B2D3C]/10 border border-[#7B2D3C]/20 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#7B2D3C]" />
            <span>TECHNICAL CAPABILITIES & STACK</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1F1D1A] tracking-tight">
            Engineering stack &{" "}
            <span className="italic text-[#7B2D3C]">
              core competencies.
            </span>
          </h2>
          <p className="font-heading text-base sm:text-lg text-[#8C827A] mt-2 font-medium">
            — Structured technical domain knowledge across CS fundamentals, AI engineering, full-stack systems, and MLOps.
          </p>
        </motion.div>

        {/* 2x2 Recruiter-Friendly Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILL_GROUPS.map((group, idx) => {
            const GroupIcon = group.icon;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="editorial-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between h-full bg-[#FAF7F2] border border-[#E5DED6] shadow-sm hover:border-[#7B2D3C] hover:shadow-md transition-all group"
              >
                <div>
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E5DED6]">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#7B2D3C]/10 text-[#7B2D3C] border border-[#7B2D3C]/20 group-hover:scale-105 transition-transform">
                        <GroupIcon className="w-4 h-4 text-[#7B2D3C]" />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] font-semibold text-[#7B2D3C] tracking-widest block uppercase">
                          {group.code}
                        </span>
                        <h3 className="font-heading text-base sm:text-lg font-bold tracking-tight text-[#1F1D1A] group-hover:text-[#7B2D3C] transition-colors">
                          {group.category}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Category Description */}
                  <p className="font-body text-xs sm:text-sm text-[#8C827A] leading-relaxed mb-5">
                    {group.description}
                  </p>

                  {/* Skill Chips */}
                  <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-1">
                    {group.skills.map((skill) => {
                      const mapped = SKILL_ICON_MAP[skill];
                      const SkillIcon = mapped?.icon;

                      return (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#F4EFEA] border border-[#E5DED6] text-xs font-body text-[#1F1D1A] font-medium hover:border-[#7B2D3C] hover:text-[#7B2D3C] hover:bg-[#F8F2F2] transition-all shadow-xs"
                        >
                          {SkillIcon ? (
                            <SkillIcon className="w-3.5 h-3.5 shrink-0" style={{ color: mapped.color }} />
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-[#7B2D3C]" />
                          )}
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Subtitle Bar */}
                <div className="pt-4 mt-5 border-t border-[#E5DED6] flex items-center justify-between text-[11px] font-mono text-[#8C827A]">
                  <span>{group.subtitle}</span>
                  <span className="text-[#7B2D3C] group-hover:translate-x-0.5 transition-transform">✦</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}