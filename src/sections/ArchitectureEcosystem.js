import React from "react";
import {
  Smartphone,
  Layers,
  ShieldCheck,
  Cpu,
  Radio,
  Terminal,
  CheckCircle2
} from "lucide-react";

const engineeringCategories = [
  {
    id: "core-mobile",
    title: "Core Mobile Engine",
    icon: Smartphone,
    color: "cyan",
    badge: "Runtime & Native Bridges",
    accentBorder: "hover:border-cyan-500/50",
    description:
      "Modern React Native runtime engineering combining cross-platform flexibility with native platform performance via Swift and Kotlin bridges.",
    technologies: [
      { name: "React Native", detail: "CLI & Expo EAS Ecosystem", highlight: true },
      { name: "TypeScript", detail: "Strict Type Safety & Schemas", highlight: true },
      { name: "Swift & Kotlin Modules", detail: "Custom Native TurboModules / JSI", highlight: true },
      { name: "Shopify FlashList", detail: "High-Frequency Cell Recycling", highlight: false },
      { name: "React Navigation v6/v7", detail: "Deep Linking & Native Stacks", highlight: false },
      { name: "Reanimated 3", detail: "60 FPS Worklets on UI Thread", highlight: false }
    ],
    architectureHighlights: [
      "Custom Swift & Kotlin native modules bridging platform-specific APIs directly.",
      "Profiled Hermes engine garbage collection and memory tuning with Xcode Instruments.",
      "FlashList migrations replacing FlatList to guarantee 60 FPS across 10,000+ item feeds."
    ],
    codeSnippet: `// Custom Native TurboModule Interface
export interface TelemetryBridgeSpec extends TurboModule {
  syncBiometrics(sampleRate: number): Promise<boolean>;
  getEnclaveSecureKey(): Promise<string>;
}`
  },
  {
    id: "architecture-state",
    title: "Architecture & State Orchestration",
    icon: Layers,
    color: "indigo",
    badge: "Offline-First & Data Flow",
    accentBorder: "hover:border-indigo-500/50",
    description:
      "Enterprise state architecture designed for deterministic state transitions, optimistic mutations, and resilient offline-first data stores.",
    technologies: [
      { name: "Redux Toolkit & RTK Query", detail: "Normalized Cache & Auto-Refetch", highlight: true },
      { name: "MVVM Architecture", detail: "Decoupled Presentation & Domain Logic", highlight: true },
      { name: "MMKV & WatermelonDB", detail: "C++ Key-Value & SQLite Engine", highlight: true },
      { name: "WebSockets & Socket.IO", detail: "Low-Latency Bi-Directional Transport", highlight: false },
      { name: "Reselect Memoization", detail: "Re-render Prevention Pipelines", highlight: false },
      { name: "Zod Schema Validation", detail: "Runtime Type Enforcement", highlight: false }
    ],
    architectureHighlights: [
      "Offline-first sync using MMKV and SQLite ensuring zero-latency reads/writes without network.",
      "Optimistic UI updates paired with resilient background queue synchronization.",
      "Decoupled MVVM patterns enabling parallel feature engineering across teams."
    ],
    codeSnippet: `// Resilient Offline-First Sync Layer
const syncQueue = new OfflineSyncQueue({
  storage: MMKVStorage,
  conflictStrategy: 'CLIENT_AUTHORITATIVE',
  maxRetries: 5
});`
  },
  {
    id: "realtime-media",
    title: "Real-Time, Media & Hardware SDKs",
    icon: Radio,
    color: "emerald",
    badge: "Hardware Telemetry & Stream",
    accentBorder: "hover:border-emerald-500/50",
    description:
      "Integration of real-time communication protocols, biometric health telemetry, spatial vector maps, and secure payment systems.",
    technologies: [
      { name: "Apple HealthKit", detail: "Biometrics & Vitals Streaming", highlight: true },
      { name: "ZegoCloud RTC", detail: "Audio/Video Live Streaming", highlight: true },
      { name: "CometChat SDK", detail: "Enterprise Real-Time Messaging", highlight: false },
      { name: "Mapbox Maps SDK", detail: "Vector Layers & Geofencing", highlight: false },
      { name: "Stripe & In-App Purchases", detail: "StoreKit 2 & Google Play Billing", highlight: true },
      { name: "Native CameraX / AVCapture", detail: "On-Device Frame Processing", highlight: false }
    ],
    architectureHighlights: [
      "Direct Apple HealthKit sync parsing background telemetry under strict Apple policies.",
      "Low-latency audio/video call pipelines with automated reconnect and network degradation handling.",
      "Stripe payment intent tokenization and in-app subscription entitlement state machines."
    ],
    codeSnippet: `// Apple HealthKit Telemetry Stream
HealthKit.initStepCountObserver({
  backgroundDelivery: 'immediate',
  onTelemetry: (vitals) => dispatch(ingestVitals(vitals))
});`
  },
  {
    id: "cicd-store",
    title: "CI/CD & Store Operations",
    icon: ShieldCheck,
    color: "amber",
    badge: "Release Engineering & Reliability",
    accentBorder: "hover:border-amber-500/50",
    description:
      "Automated release engineering pipelines from Git commit to App Store Connect and Google Play Console production deployment.",
    technologies: [
      { name: "Fastlane", detail: "Automated Build, Sign & Deploy Lanes", highlight: true },
      { name: "App Store Connect", detail: "Phased Rollout & TestFlight Engine", highlight: true },
      { name: "Google Play Console", detail: "Release Tracks & Store Compliance", highlight: true },
      { name: "GitLab CI/CD & Actions", detail: "Automated Testing & Lint Pipelines", highlight: false },
      { name: "Sentry & Crashlytics", detail: "Real-Time Exception & ANR Profiling", highlight: false },
      { name: "EAS Build & Update", detail: "Over-the-Air Hotfix Pipelines", highlight: false }
    ],
    architectureHighlights: [
      "15+ independent production launches managed through App Store review cycles without rejection.",
      "Multi-flavor build environments (Dev, Staging, Prod) with isolated bundle identifiers and credentials.",
      "Automated certificates, provisioning profiles, and signing key management via Fastlane match."
    ],
    codeSnippet: `lane :deploy_production do
  ensure_git_status_clean
  match(type: "appstore", readonly: true)
  build_app(scheme: "Release")
  upload_to_app_store(skip_metadata: true)
end`
  }
];

export default function ArchitectureEcosystem() {
  return (
    <section id="architecture" className="relative py-28 bg-[#0c0d12] text-zinc-100 border-t border-zinc-800/80">
      
      {/* Background Subtle Mesh */}
      <div className="absolute inset-0 bg-dot-mesh opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-cyan-400 mb-4">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>SYSTEM DESIGN & METHODOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Technical Architecture & Ecosystem
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg mt-3 leading-relaxed font-normal">
            A comprehensive breakdown of the core mobile engineering principles, architectural patterns, and production release infrastructure I leverage to build resilient applications at scale.
          </p>
        </div>

        {/* Categorized Engineering Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {engineeringCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className={`rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-[#14151f] to-[#0d0e14] border border-zinc-800 ${category.accentBorder} transition-all duration-300 shadow-xl flex flex-col justify-between group`}
              >
                <div className="space-y-6 text-left">
                  
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-cyan-400 shadow-inner">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {category.title}
                        </h3>
                        <span className="text-[11px] font-mono text-zinc-400">
                          {category.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {category.description}
                  </p>

                  {/* Structured Technology Items */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                      Core Stack & Frameworks:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {category.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className={`p-2.5 rounded-lg border text-left transition-colors ${
                            tech.highlight
                              ? "bg-zinc-900/90 border-zinc-700/80 text-white"
                              : "bg-zinc-950/60 border-zinc-850 text-zinc-300"
                          }`}
                        >
                          <div className="text-xs font-semibold flex items-center justify-between">
                            <span>{tech.name}</span>
                            {tech.highlight && (
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            )}
                          </div>
                          <div className="text-[11px] text-zinc-400 font-mono mt-0.5">
                            {tech.detail}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Architecture Highlights */}
                  <div className="space-y-2 pt-2 border-t border-zinc-850">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                      Architectural Guarantees:
                    </div>
                    <div className="space-y-1.5">
                      {category.architectureHighlights.map((hl, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Code Pattern Callout */}
                  <div className="pt-2">
                    <div className="rounded-xl bg-[#09090b] border border-zinc-800 p-3 font-mono text-[11px] text-zinc-300 overflow-x-auto shadow-inner">
                      <div className="text-[10px] text-zinc-400 uppercase tracking-widest pb-1 border-b border-zinc-850 mb-2 flex items-center justify-between">
                        <span>Production Implementation Pattern</span>
                        <Terminal className="w-3 h-3 text-cyan-400" />
                      </div>
                      <pre className="text-cyan-300/90 leading-tight">
                        <code>{category.codeSnippet}</code>
                      </pre>
                    </div>
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
