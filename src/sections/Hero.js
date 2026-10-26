import React, { useState } from "react";
import { ArrowDown, FileText, Send, CheckCircle2, Smartphone, Cpu, Rocket, Users, Zap } from "lucide-react";
import PhoneMockup from "../components/PhoneMockup";

const flagshipHighlights = [
  {
    id: "fuellab",
    title: "FuelLab.fit",
    category: "AI Sports Nutrition",
    badge: "SportsTech / Lead Role",
    image: "/apps/fuellab.jpg",
    metric: "60 FPS • Offline-First",
    color: "cyan",
    desc: "AI match-day planning & hydration telemetry client."
  },
  {
    id: "fitted",
    title: "FittedCloset",
    category: "AI Digital Wardrobe",
    badge: "600K+ iOS Downloads",
    image: "/apps/fitted.jpg",
    metric: "600K+ Scale • FlashList",
    color: "purple",
    desc: "AI styling engine with native camera bridges."
  },
  {
    id: "nhance",
    title: "nHance Health",
    category: "Wearable & HealthTech",
    badge: "Apple HealthKit Telemetry",
    image: "/apps/nhance.jpg",
    metric: "HealthKit • Real-Time Sync",
    color: "emerald",
    desc: "Biometrics sync with food logging engine."
  }
];

export default function Hero({ onOpenCV }) {
  const [activeHighlight, setActiveHighlight] = useState(flagshipHighlights[0]);

  return (
    <section id="top" className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#09090b] text-zinc-100 flex items-center">
      
      {/* Background Gradients & Mesh (Linear / Vercel Dark Style) */}
      <div className="absolute inset-0 bg-dot-mesh opacity-40 pointer-events-none" />
      
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Subhead, Badges & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Top Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 shadow-sm shimmer-effect">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-zinc-200 font-semibold tracking-wide">Staff / Lead Mobile Engineering</span>
              <span className="text-zinc-600">|</span>
              <span className="text-cyan-400 font-medium">Production Architecture</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                Lead & Senior Mobile Engineer{" "}
                <span className="block mt-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                  (React Native & Fullstack)
                </span>
              </h1>
            </div>

            {/* Subhead emphasizing requirements */}
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed">
              4.9+ years of cross-platform mobile engineering delivering high-concurrency client architectures, offline-first data synchronization, custom native modules, and production delivery at scale across 20+ shipped apps.
            </p>

            {/* Core Metric Badges (clean pill badges) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              <div className="p-3 rounded-xl bg-zinc-900/70 border border-zinc-800/90 hover:border-zinc-700 transition shadow-sm">
                <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-mono mb-1">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>EXPERIENCE</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white tracking-tight">4.9+ Years</div>
                <div className="text-[11px] text-zinc-400 truncate">Production Exp</div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/70 border border-zinc-800/90 hover:border-zinc-700 transition shadow-sm">
                <div className="flex items-center gap-1.5 text-purple-400 text-xs font-mono mb-1">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>PRODUCTS</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white tracking-tight">20+ Apps</div>
                <div className="text-[11px] text-zinc-400 truncate">Production Shipped</div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/70 border border-zinc-800/90 hover:border-zinc-700 transition shadow-sm">
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-mono mb-1">
                  <Rocket className="w-3.5 h-3.5" />
                  <span>RELEASES</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white tracking-tight">15+ Releases</div>
                <div className="text-[11px] text-zinc-400 truncate">iOS & Android Stores</div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/70 border border-zinc-800/90 hover:border-zinc-700 transition shadow-sm">
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono mb-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>AUDIENCE</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white tracking-tight">600K+ Users</div>
                <div className="text-[11px] text-zinc-400 truncate">Downloads Reached</div>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#flagship"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-all duration-200 shadow-[0_0_25px_-5px_rgba(255,255,255,0.4)] hover:scale-[1.02]"
              >
                <span>View Case Studies</span>
                <ArrowDown className="w-4 h-4 text-zinc-950" />
              </a>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 transition-all duration-200 shadow-sm hover:scale-[1.02]"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Contact Directly</span>
              </a>
            </div>

            {/* Quick architectural guarantees */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-400 pt-2 border-t border-zinc-800/60 font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Offline-First (MMKV/WatermelonDB)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                60 FPS Profiled Rendering
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Native Modules (Swift / Kotlin)
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Flagship Device Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Interactive Showcase Header Switcher */}
            <div className="w-full max-w-[340px] mb-4 p-1.5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between gap-1 backdrop-blur-md">
              {flagshipHighlights.map((item) => {
                const isActive = activeHighlight.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveHighlight(item)}
                    className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-medium transition-all ${
                      isActive
                        ? "bg-zinc-800 text-white border border-zinc-700 shadow-sm"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    {item.title.split(".")[0]}
                  </button>
                );
              })}
            </div>

            {/* Realistic iPhone Device Frame */}
            <div className="relative group">
              
              {/* Backlight Glow based on selected app */}
              <div
                className={`absolute -inset-4 rounded-[60px] opacity-25 blur-2xl transition-all duration-700 pointer-events-none ${
                  activeHighlight.id === "fuellab"
                    ? "bg-cyan-500"
                    : activeHighlight.id === "fitted"
                    ? "bg-purple-500"
                    : "bg-emerald-500"
                }`}
              />

              <PhoneMockup
                imageSrc={activeHighlight.image}
                alt={activeHighlight.title}
                time="9:41"
                statusColor={activeHighlight.id === "nhance" ? "emerald" : "cyan"}
              />

              {/* Floating Dynamic Metric Tag */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 z-40 p-3 rounded-xl bg-[#0c0d12]/95 border border-zinc-800 backdrop-blur-xl shadow-2xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    Engineered Standard
                  </div>
                  <div className="text-xs font-bold text-white">
                    {activeHighlight.metric}
                  </div>
                </div>
              </div>

              {/* Floating Live Badge */}
              <div className="absolute -top-3 -right-3 sm:-right-5 z-40 px-3 py-1 rounded-full bg-zinc-900/95 border border-zinc-700/80 backdrop-blur-md shadow-xl text-[11px] font-mono text-zinc-200 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Production Build</span>
              </div>
            </div>

            {/* Quick Caption Under Mockup */}
            <div className="mt-6 text-center max-w-xs">
              <span className="text-xs font-semibold text-zinc-200">
                {activeHighlight.title}
              </span>
              <p className="text-[11px] text-zinc-400 mt-0.5">
                {activeHighlight.desc}
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
