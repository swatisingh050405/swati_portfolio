"use client";

import { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = LINKS.map((link) =>
      document.getElementById(link.href.slice(1))
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = LINKS.find(
              (link) => link.href.slice(1) === entry.target.id
            );
            if (match) setActive(match.label);
          }
        });
      },
      { rootMargin: "-30% 0px -40% 0px", threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-4xl rounded-full editorial-nav px-5 py-2.5 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group shrink-0">
          <span className="font-serif text-lg sm:text-xl font-normal tracking-tight text-[#1F1D1A]">
            Swati Singh<span className="text-[#7B2D3C] font-bold">.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-200 ${
                  active === link.label
                    ? "bg-[#7B2D3C] text-[#FDFBF7] font-semibold shadow-sm"
                    : "text-[#8C827A] hover:text-[#1F1D1A] hover:bg-[#F4EFEA]"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CV Link Button */}
        <a
          href="https://drive.google.com/file/d/11rvbgVL56U4KZfDH_NkwPg6qMkYiAKKo/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full btn-accent text-xs font-semibold shadow-sm shrink-0"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download CV</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-[#1F1D1A] hover:text-[#7B2D3C] shrink-0 p-1 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="absolute top-16 left-4 right-4 bg-[#FAF7F2]/95 border border-[#E5DED6] backdrop-blur-2xl p-5 rounded-2xl flex flex-col gap-2.5 text-center lg:hidden shadow-xl">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActive(link.label);
                setMobileOpen(false);
              }}
              className={`text-sm font-medium py-2 rounded-xl transition-colors ${
                active === link.label
                  ? "text-[#7B2D3C] bg-[#7B2D3C]/10 font-semibold"
                  : "text-[#8C827A] hover:text-[#1F1D1A]"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/11rvbgVL56U4KZfDH_NkwPg6qMkYiAKKo/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 mt-2 rounded-full btn-accent text-xs font-semibold"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>
        </div>
      )}
    </header>
  );
}