"use client";

import { motion } from "framer-motion";
import { Sparkles, ExternalLink, Code2, Cpu } from "lucide-react";

const PROJECTS = [
  {
    number: "01",
    subtitle: "Research Mentor",
    title: "AI Research Assistant",
    description:
      "An AI-powered academic research assistant that helps users discover relevant papers and interact with research content. It combines semantic search with live academic-paper retrieval — finding papers based on the intent of a query, not just keyword matching — alongside a RAG-based 'Chat with Paper' system that chunks PDFs, retrieves context from a vector database, and generates context-aware answers. Embedding-based caching and resilient API handling keep the workflow fast and reliable.",
    tech: ["React", "FastAPI", "ChromaDB", "Gemini", "Supabase", "RAG", "Semantic Search"],
    github: "https://github.com/swatisingh050405/research_mentor",
    live: "https://research-mentor-rust.vercel.app",
    image: "/research_mentor.png",
    tag: "RAG & Vector DB",
  },
  {
    number: "02",
    subtitle: "US Visa Petition Prediction",
    title: "ML & MLOps Pipeline",
    description:
      "An end-to-end machine learning application that predicts whether a US visa petition is likely to be approved. It benchmarks Logistic Regression, Random Forest, XGBoost, and CatBoost, selecting the strongest model through validation-based comparison. Severe class imbalance is handled with cost-sensitive learning and custom threshold tuning, while SHAP provides model-level explainability. The trained model is served through a FastAPI inference endpoint, with MLflow/DagsHub experiment tracking and Evidently-based data-drift monitoring.",
    tech: ["Python", "Scikit-learn", "XGBoost", "CatBoost", "FastAPI", "SHAP", "MLflow", "Evidently"],
    github: "https://github.com/swatisingh050405/visa-prediction-project",
    live: null,
    image: "/us_visa.png",
    tag: "MLOps & SHAP Explainability",
  },
  {
    number: "03",
    subtitle: "ProdigyAI",
    title: "AI Productivity Assistant",
    description:
      "A full-stack AI productivity assistant that helps users organize and manage their daily work. It uses Google Gemini to convert natural-language goals into structured daily schedules, tracking tasks alongside priorities, deadlines, and descriptions over time. An AI Task Prioritizer ranks pending work by urgency and workload, while an AI Meeting Summarizer extracts key decisions, discussion points, and follow-ups directly from meeting transcripts — all behind secure authentication in a production-style deployment.",
    tech: ["React", "FastAPI", "Python", "SQLite", "SQLAlchemy", "Gemini", "JWT", "Docker"],
    github: "https://github.com/swatisingh050405/AI_productivity_assistant",
    live: "https://ai-productivity-assistant-iota.vercel.app",
    image: "/prodigy_ai.png",
    tag: "GenAI & Task Intelligence",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-20 px-6 md:px-12 lg:px-16 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#7B2D3C] bg-[#7B2D3C]/10 border border-[#7B2D3C]/20 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#7B2D3C]" />
            <span>FEATURED CASE STUDIES</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1F1D1A] tracking-tight leading-snug">
            From Ideas to{" "}
            <span className="italic text-[#7B2D3C]">
              Intelligent Systems.
            </span>
          </h2>
          <p className="font-heading text-base sm:text-lg text-[#8C827A] mt-2 font-medium">
            — Production-grade AI applications, machine learning workflows, and intelligent software.
          </p>
        </motion.div>

        {/* Alternating project rows */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {PROJECTS.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={project.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* Text column */}
                <div className={`lg:col-span-6 flex flex-col items-start ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  
                  {/* Category Tag */}
                  <motion.div variants={itemVariants} className="flex items-center gap-2.5 mb-3">
                    <span className="font-mono text-sm font-bold text-[#7B2D3C]">
                      {project.number}
                    </span>
                    <span className="text-[#B8B0A8] text-xs">•</span>
                    <span className="font-mono text-xs font-semibold tracking-wider uppercase text-[#7B2D3C]">
                      {project.subtitle}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#F8F2F2] border border-[#E5DED6] text-[#8C827A] ml-1">
                      {project.tag}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3 variants={itemVariants} className="font-heading text-2xl sm:text-4xl font-bold text-[#1F1D1A] mb-4">
                    {project.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p variants={itemVariants} className="font-body text-sm sm:text-base text-[#2D2A26] leading-relaxed mb-6 max-w-xl">
                    {project.description}
                  </motion.p>

                  {/* Tech Badges */}
                  <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#F8F2F2] border border-[#E5DED6] text-xs font-body text-[#1F1D1A] font-medium shadow-xs"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7B2D3C]" />
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider btn-accent shadow-md hover:scale-105 transition-all"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-[#1F1D1A] bg-[#F4EFEA] border border-[#E5DED6] hover:border-[#7B2D3C] hover:text-[#7B2D3C] transition-all shadow-xs"
                    >
                      <Code2 className="w-4 h-4 text-[#7B2D3C]" />
                      <span>GitHub Repository</span>
                    </a>
                  </motion.div>

                </div>

                {/* Image column with warm framing */}
                <motion.div 
                  variants={itemVariants}
                  className={`lg:col-span-6 relative group ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  {/* Subtle Background Glow */}
                  <div className="absolute inset-2 -z-10 rounded-3xl bg-[#7B2D3C]/10 blur-[50px] pointer-events-none" />

                  {/* Editorial Tag */}
                  <div className="absolute -top-3 -left-3 z-20 px-3 py-1 rounded-lg shadow-md font-mono text-[11px] font-semibold text-[#FDFBF7] bg-[#7B2D3C] flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>case_study_{project.number}</span>
                  </div>

                  {/* Image Card Container */}
                  <div className="editorial-card p-3 rounded-2xl overflow-hidden shadow-lg bg-[#F4EFEA]">
                    <div className="overflow-hidden rounded-xl border border-[#E5DED6]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto rounded-xl object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>

                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}