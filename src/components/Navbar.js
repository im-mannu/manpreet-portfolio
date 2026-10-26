import React, { useState, useEffect } from "react";
import { FileText, Send, Menu, X, ArrowUpRight, Smartphone } from "lucide-react";

export default function Navbar({ onOpenCV }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Case Studies", href: "#flagship" },
    { label: "Shipped Apps", href: "#production-apps" },
    { label: "Architecture", href: "#architecture" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#09090b]/85 backdrop-blur-xl border-b border-zinc-800/90 shadow-2xl py-3.5"
          : "bg-transparent border-b border-white/[0.04] py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Title */}
        <a href="#top" className="flex items-center gap-3 group text-left">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-zinc-800 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)]">
            <Smartphone className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-zinc-100 text-[15px] sm:text-base tracking-tight group-hover:text-cyan-300 transition-colors">
                Manpreet Singh
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-950/60 text-emerald-400 border border-emerald-800/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Staff/Lead
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 font-mono tracking-wide hidden md:block">
              Lead & Senior Mobile Engineer • 4.9+ Yrs Exp
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-zinc-900/60 border border-zinc-800/70 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Action CTAs */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenCV}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-zinc-300 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-zinc-400" />
            <span>CV / Resume</span>
          </button>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold text-zinc-950 bg-gradient-to-r from-zinc-100 to-zinc-200 hover:from-white hover:to-zinc-100 border border-white/20 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:scale-[1.02]"
          >
            <Send className="w-3 h-3 text-zinc-900" />
            <span>Get In Touch</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenCV}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs flex items-center gap-1"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>CV</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-2 border-b border-zinc-800/90 bg-[#0c0d12]/95 backdrop-blur-2xl px-5 py-4 space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-zinc-800/60">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-emerald-400 font-medium">Available for Staff & Lead Roles</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-zinc-300 hover:text-cyan-400 border-b border-zinc-850"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="w-full py-2.5 rounded-lg text-xs font-medium text-center bg-zinc-800 text-zinc-200 border border-zinc-700 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              View & Download CV
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-lg text-xs font-semibold text-center bg-cyan-500 hover:bg-cyan-400 text-zinc-950 flex items-center justify-center gap-1.5"
            >
              <span>Contact Directly</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
