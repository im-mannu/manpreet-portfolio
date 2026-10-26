import React from "react";
import { Briefcase, CheckCircle2 } from "lucide-react";

const careerJobs = [
  {
    role: "Lead React Native Developer (Product)",
    company: "Shine Dezign Infonet Pvt. Ltd.",
    location: "Mohali, India",
    period: "06/2026 – Present",
    tag: "Current Lead Role",
    flagship: "FuelLab.fit",
    highlightMetric: "60 FPS • Offline-First MMKV",
    summary:
      "Leading cross-platform client architecture and engineering execution for FuelLab.fit, an AI-powered sports nutrition, hydration, and match-day planning platform engineered for professional athletes.",
    achievements: [
      "Architected cross-platform client with React Native, TypeScript, and Redux Toolkit for high-frequency athletic tracking and 60 FPS UI responsiveness.",
      "Engineered offline-first local data synchronization utilizing MMKV and SQLite, guaranteeing zero-latency match-day access in low-connectivity sports venues.",
      "Engineered personalized athletic workflows: match/training schedules, hydration telemetry, macro breakdown rings, and AI-driven meal recommendations.",
      "Owned end-to-end store deployment pipelines, testing, performance profiling, and production releases on Apple App Store and Google Play Store."
    ],
    techStack: ["React Native", "TypeScript", "Redux Toolkit", "MMKV", "SQLite", "Fastlane", "OpenAI APIs", "App Store Connect"]
  },
  {
    role: "Senior React Native Developer",
    company: "Fitted (US Product Co.), via Netinnovatus IT Solutions",
    location: "Remote / US Market",
    period: "07/2025 – 04/2026",
    tag: "High-Scale Consumer",
    flagship: "FittedCloset",
    highlightMetric: "600K+ Downloads • -45% Upload Latency",
    summary:
      "Led end-to-end mobile development of a high-growth US consumer product with React Native and TypeScript, owning architecture decisions, release quality, performance tuning, and scaling.",
    achievements: [
      "Scaled the mobile application past 600K+ iOS downloads, maintaining 99.8% crash-free sessions across high-velocity releases.",
      "Migrated heavy wardrobe feeds to Shopify FlashList with cell recycling to eliminate scroll hitching on 1,000+ item closets.",
      "Engineered custom native camera bridge and client-side image compression, reducing upload latency by 45%.",
      "Integrated Firebase backend APIs, automated CI/CD deployment workflows, and store compliance."
    ],
    techStack: ["React Native", "TypeScript", "MVVM", "Shopify FlashList", "Native Camera Bridges", "Firebase", "GitLab CI/CD"]
  },
  {
    role: "React Native Developer",
    company: "Indi IT Solutions",
    location: "Mohali, India",
    period: "10/2024 – 05/2025",
    tag: "Real-Time Systems & Media",
    flagship: "Chat & Calling Infrastructure",
    highlightMetric: "WebSockets • Stripe Subscriptions",
    summary:
      "Built and maintained cross-platform mobile applications for client products, focusing on real-time communication, subscriptions, store readiness, and stable feature delivery.",
    achievements: [
      "Implemented real-time chat systems, WebSocket-based event flows, CometChat SDK, and ZEGOCLOUD audio-video calling pipelines.",
      "Integrated multi-currency Stripe payment flows, subscription entitlement management, and production issue resolution across Android and iOS.",
      "Contributed to fast-cadence release cycles, bug triage, and client-facing feature delivery in Agile setups."
    ],
    techStack: ["React Native", "CometChat SDK", "ZEGOCLOUD RTC", "Stripe", "WebSockets", "Redux"]
  },
  {
    role: "Senior React Native Developer",
    company: "Owebest Technologies Pvt. Ltd.",
    location: "Jaipur, India",
    period: "06/2023 – 09/2024",
    tag: "HealthTech & Lifestyle",
    flagship: "nHance Health",
    highlightMetric: "Apple HealthKit Telemetry",
    summary:
      "Engineered multiple mobile products in healthcare, dating, and family management domains, translating complex product requirements into resilient mobile experiences.",
    achievements: [
      "Delivered healthcare telemetry apps (nHance Health) with direct Apple HealthKit biometrics sync and complex scheduling workflows.",
      "Built authentication, push notifications, calendars, payment flows, and real-time user interactions, while also developing React.js admin dashboards to support operations.",
      "Handled R&D for new product requirements, performance improvements, and implementation of modern mobile capabilities in Agile delivery setups."
    ],
    techStack: ["React Native", "Apple HealthKit", "React.js", "Firebase", "REST APIs", "Agile/Scrum"]
  },
  {
    role: "React Native Developer",
    company: "Netset Software Solutions",
    location: "Mohali, India",
    period: "01/2022 – 06/2023",
    tag: "Foundation & Growth",
    flagship: "Logistics & Marketplace",
    highlightMetric: "Mapbox SDK • Core Delivery",
    summary:
      "Built the foundation of production mobile engineering experience by working on diverse healthcare, social, and business applications with a strong focus on practical integrations and stable delivery.",
    achievements: [
      "Integrated maps (Mapbox), payment gateways, chat systems, and multiple third-party APIs into cross-platform mobile apps, including gig and logistics-style solutions.",
      "Worked closely with backend teams to connect product requirements with scalable mobile implementation and practical server-side coordination."
    ],
    techStack: ["React Native", "JavaScript", "Mapbox SDK", "Payment Gateways", "REST APIs"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 bg-[#0c0d12] text-zinc-100 border-t border-zinc-800/80">
      
      {/* Background Subtle Mesh */}
      <div className="absolute inset-0 bg-dot-mesh opacity-25 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-cyan-400 mb-4">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>CAREER PROGRESSION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Production Engineering Journey
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg mt-3 leading-relaxed font-normal max-w-2xl">
            4.9+ years advancing from core cross-platform engineering to Lead Mobile Architect roles—owning systems end-to-end from technical RFCs to store deployment.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-zinc-800 space-y-12">
          {careerJobs.map((job, index) => (
            <div key={job.company + job.period} className="relative group text-left">
              
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-zinc-900 border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors shadow-[0_0_10px_rgba(6,182,212,0.6)]" />

              {/* Job Card */}
              <div className="rounded-2xl p-6 sm:p-8 bg-[#14151f]/80 border border-zinc-800 group-hover:border-zinc-700 transition-all duration-300 shadow-xl space-y-4">
                
                {/* Header Row: Role & Tag */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider bg-cyan-950/50 border border-cyan-800/40 px-2.5 py-0.5 rounded-full inline-block mb-1.5">
                      {job.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {job.role}
                    </h3>
                    <div className="text-xs sm:text-sm text-zinc-400 font-medium flex items-center gap-2 mt-0.5">
                      <span className="text-zinc-200 font-semibold">{job.company}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                    </div>
                  </div>

                  <div className="text-left sm:text-right shrink-0">
                    <span className="text-xs font-mono text-zinc-400 bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800 block sm:inline-block">
                      {job.period}
                    </span>
                    {job.highlightMetric && (
                      <div className="text-[11px] font-mono text-emerald-400 mt-1.5 font-semibold">
                        {job.highlightMetric}
                      </div>
                    )}
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {job.summary}
                </p>

                {/* Quantitative Bullet Points */}
                <div className="space-y-2 pt-2 border-t border-zinc-850">
                  {job.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {job.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-zinc-900/90 text-zinc-400 border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
