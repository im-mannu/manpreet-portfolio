import React from "react";
import {
  ShieldCheck,
  Layers,
  Users2,
  CheckCircle2,
  Sparkles,
  Gauge
} from "lucide-react";

const leadershipPillars = [
  {
    icon: Layers,
    title: "System Design & Architectural Ownership",
    tagline: "Preventing technical debt before the first line of code is committed.",
    description:
      "I establish modular MVVM architectures, decoupled domain layers, and strict TypeScript schema contracts. Every system is built to scale gracefully across multi-engineer teams without causing state contention or fragile dependencies.",
    deliverables: [
      "Modular cross-platform client architecture with clean boundaries.",
      "Reusable component primitives and unified design token systems.",
      "Strict data contract synchronization between mobile, GraphQL, and REST APIs."
    ]
  },
  {
    icon: Gauge,
    title: "Performance Engineering (60 FPS & Low Latency)",
    tagline: "Profiling with Xcode Instruments, Hermes, and Flipper.",
    description:
      "I treat performance as a fundamental engineering feature, not an afterthought. From eliminating JavaScript thread starvation to migrating complex lists to Shopify FlashList and implementing native camera bridges with on-device downsampling.",
    deliverables: [
      "Elimination of UI frame drops via Reanimated worklets on native thread.",
      "45% reduction in asset upload latency via native compression bridges.",
      "Optimized Hermes memory footprints preventing out-of-memory crashes on low-end Androids."
    ]
  },
  {
    icon: ShieldCheck,
    title: "Store Operations & Release Reliability",
    tagline: "15+ successful store submissions with 0 critical rejections.",
    description:
      "I own the entire release lifecycle: configuring Fastlane automation lanes, signing keys, provisioning profiles, Apple App Store Connect guidelines, and Google Play Console phased rollouts with automated crash monitoring.",
    deliverables: [
      "Automated CI/CD pipelines deploying to TestFlight and Google Play Internal tracks.",
      "Strict compliance with Apple HealthKit, ATT, and sensitive device permissions.",
      "Rapid turnaround on store review communications and production hotfixes."
    ]
  },
  {
    icon: Users2,
    title: "Cross-Functional Leadership & Squad Velocity",
    tagline: "Bridging product vision, UX design, and engineering delivery.",
    description:
      "Comfortable operating as a player-coach who unblocks teammates, conducts high-standard pull request reviews, mentors junior engineers, and aligns closely with Product Managers and Designers on timeline trade-offs.",
    deliverables: [
      "High-velocity delivery within Agile and Scrum sprint cadences.",
      "Translating complex Figma prototypes into fluid, accessible mobile interactions.",
      "Autonomous ownership from problem definition to live production deployment."
    ]
  }
];

export default function LeadershipImpact() {
  return (
    <section className="relative py-28 bg-[#09090b] text-zinc-100 border-t border-zinc-800/80">
      
      {/* Background Subtle Mesh */}
      <div className="absolute inset-0 bg-dot-mesh opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>STAFF & LEAD ENGINEERING VALUES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            How I Lead & Execute
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg mt-3 leading-relaxed font-normal">
            What separates an ordinary mobile developer from a Lead / Staff Engineer is ownership: making architectural bets that hold up at scale, protecting release quality, and driving engineering velocity across the squad.
          </p>
        </div>

        {/* 4 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-2xl p-7 sm:p-8 bg-[#0c0d12]/90 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 shadow-xl flex flex-col justify-between group text-left"
              >
                <div className="space-y-4">
                  
                  {/* Pillar Icon & Title */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Tagline */}
                  <div className="text-xs font-mono text-cyan-400/90 font-medium">
                    {pillar.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {pillar.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 pt-2 border-t border-zinc-850">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                      Measurable Engineering Impact:
                    </div>
                    {pillar.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
