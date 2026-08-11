"use client";

export default function NotebookCard({ children, className = "" }) {
  return (
    <div
      className={`relative rounded-2xl border border-[#E5DED6] bg-[#F4EFEA] shadow-xs overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 sm:px-5 py-2 border-b border-[#E5DED6] bg-[#FAF7F2]">
        <span className="font-mono text-xs font-medium text-[#7B2D3C] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#7B2D3C]" />
          ✦ intro_notebook.md
        </span>
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E5DED6]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#D6CDC3]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#7B2D3C]/40" />
        </div>
      </div>

      {/* Body */}
      <div className="px-4 py-3.5 sm:px-5 sm:py-4 border-l-2 border-[#7B2D3C] ml-4 sm:ml-5 my-1.5">
        <p className="font-body text-[#1F1D1A] text-xs sm:text-sm md:text-base leading-relaxed pl-2.5 sm:pl-3 font-normal">
          {children}
        </p>
      </div>
    </div>
  );
}