"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, Brain, Workflow } from "lucide-react";
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
  Git: { icon: SiGit, color: "#F05032" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
};

const SKILL_GROUPS = [
  {
    category: "FOUNDATIONS",
    subtitle: "Core Computer Science & Programming",
    icon: Code2,
    skills: ["Python", "C++", "DSA", "OOP", "DBMS", "Operating Systems"],
  },
  {
    category: "INTELLIGENCE",
    subtitle: "Machine Learning, GenAI & RAG",
    icon: Brain,
    skills: ["PyTorch", "Scikit-learn", "LangChain", "RAG Systems"],
  },
  {
    category: "ENGINEERING",
    subtitle: "Frameworks, MLOps & Tooling",
    icon: Workflow,
    skills: ["FastAPI", "React", "MySQL", "ChromaDB", "MLflow", "DVC", "Git", "GitHub Actions"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-20 px-6 md:px-12 lg:px-16 overflow-hidden scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#7B2D3C] bg-[#7B2D3C]/10 border border-[#7B2D3C]/20 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#7B2D3C]" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1F1D1A] tracking-tight">
            Tools, frameworks &{" "}
            <span className="italic text-[#7B2D3C]">
              core stack.
            </span>
          </h2>
          <p className="font-heading text-base sm:text-lg text-[#8C827A] mt-2 font-medium">
            — Building software with robust algorithms and production AI workflows.
          </p>
        </motion.div>

        {/* 3 Editorial Groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, idx) => {
            const GroupIcon = group.icon;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="editorial-card p-7 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#E5DED6]">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#7B2D3C]/10 text-[#7B2D3C] border border-[#7B2D3C]/20">
                      <GroupIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-bold tracking-wider text-[#1F1D1A]">
                        {group.category}
                      </h3>
                      <p className="font-body text-[11px] text-[#8C827A]">
                        {group.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {group.skills.map((skill) => {
                      const mapped = SKILL_ICON_MAP[skill];
                      const SkillIcon = mapped?.icon;

                      return (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#F8F2F2] border border-[#E5DED6] text-xs font-body text-[#1F1D1A] font-medium hover:border-[#7B2D3C] hover:text-[#7B2D3C] transition-all shadow-xs"
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}