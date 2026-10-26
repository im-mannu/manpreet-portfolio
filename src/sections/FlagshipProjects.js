import React, { useState } from "react";
import {
  ExternalLink,
  Layers,
  Zap,
  Cpu,
  ShieldCheck,
  Activity,
  WifiOff,
  Flame,
  CheckCircle2,
  Terminal
} from "lucide-react";
import PhoneMockup from "../components/PhoneMockup";

const flagshipData = [
  {
    id: "fuellab",
    title: "FuelLab.fit",
    subtitle: "AI Sports Nutrition & Match-Day Planning",
    domain: "SportsTech / High-Performance Athletic Workflows",
    role: "Lead Mobile Engineer (Product)",
    scale: "Lead Client Architect • Cross-Platform",
    accentColor: "cyan",
    glowBorder: "group-hover:border-cyan-500/40",
    glowBg: "from-cyan-500/10 via-transparent to-transparent",
    image: "/apps/fuellab.jpg",
    appStoreUrl: "https://apps.apple.com/us/app/fuellab-cricket-sports/id6757917456",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.fuellabfit.app",
    metrics: [
      { label: "Target UI Frame Rate", value: "60 FPS", sub: "Zero frame drops" },
      { label: "Local MMKV Sync Latency", value: "< 8ms", sub: "Ultra-fast read/write" },
      { label: "Offline Availability", value: "100%", sub: "Full match-day access" },
      { label: "Production Platforms", value: "iOS & Android", sub: "Independent releases" }
    ],
    tabs: [
      {
        id: "architecture",
        title: "Client Architecture",
        icon: Layers,
        badge: "React Native + TS + RTK",
        content:
          "Architected cross-platform client with React Native, TypeScript, and Redux Toolkit. Built clean domain-driven module boundaries separating UI presentation from athletic telemetry calculating engines and real-time intake algorithms.",
        keyPoints: [
          "Granular RTK slices with normalized data schemas for match days, hydration logs, and macro intake.",
          "Strict TypeScript type safety across all athlete telemetry payloads and OpenAI backend responses.",
          "Composable UI component library engineered to eliminate unnecessary react render cycles."
        ]
      },
      {
        id: "offline",
        title: "Offline-First Sync",
        icon: WifiOff,
        badge: "MMKV + SQLite Storage",
        content:
          "Offline-first local data synchronization using MMKV and SQLite for zero-latency match-day access in athletic venues with low or intermittent cellular reception.",
        keyPoints: [
          "Instantaneous local writes with optimistic UI updates, background queue sync when connection restores.",
          "Bi-directional conflict resolution logic prioritizing athlete match-day inputs over server stale data.",
          "Compressed binary state caching ensuring instant startup time even with years of historical intake logs."
        ]
      },
      {
        id: "rendering",
        title: "60 FPS Performance",
        icon: Zap,
        badge: "Hermes + Reanimated 3",
        content:
          "Sustained 60 FPS UI rendering across complex meal scheduling, dynamic macro breakdown rings, and continuous hydration timeline charts.",
        keyPoints: [
          "Declarative worklet animations running on the UI thread via React Native Reanimated 3.",
          "Custom SVG charting with optimized memoization and geometry recalculations.",
          "Eliminated JavaScript thread bottlenecks through fine-tuned Hermes engine garbage collection."
        ]
      },
      {
        id: "storeOps",
        title: "Native Modules & Store Ops",
        icon: ShieldCheck,
        badge: "Fastlane + App Stores",
        content:
          "Integrated custom native modules for background tasks and automated Google Play and Apple App Store release pipelines.",
        keyPoints: [
          "Custom Swift and Kotlin bridge modules handling precision local device alarms and match reminders.",
          "Automated Fastlane deployment scripts for automated beta distribution and production submission.",
          "Strict compliance with App Store guidelines, permissions, and security standards."
        ]
      }
    ]
  },
  {
    id: "fitted",
    title: "FittedCloset",
    subtitle: "AI-Driven Digital Wardrobe & Styling Assistant",
    domain: "High-Scale Consumer / AI Fashion (USA Market)",
    role: "Senior React Native Developer",
    scale: "600K+ iOS Downloads • USA Audience",
    accentColor: "purple",
    glowBorder: "group-hover:border-purple-500/40",
    glowBg: "from-purple-500/10 via-transparent to-transparent",
    image: "/apps/fitted.jpg",
    appStoreUrl: "https://apps.apple.com/in/app/fitted/id6596771952",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.fittedcloset.app",
    metrics: [
      { label: "Active User Scale", value: "600K+", sub: "iOS App Store downloads" },
      { label: "Image Upload Latency", value: "-45%", sub: "Client compression" },
      { label: "Catalog Scroll Speed", value: "Butter-smooth", sub: "FlashList recycling" },
      { label: "Target Audience", value: "US Market", sub: "High engagement consumer" }
    ],
    tabs: [
      {
        id: "architecture",
        title: "Scalable MVVM Architecture",
        icon: Layers,
        badge: "React Native + TS",
        content:
          "Engineered scalable MVVM component structure separating business rules, styling recommendation logic, and state management into modular, highly testable subsystems.",
        keyPoints: [
          "Decoupled view presentation layer from complex wardrobe valuation and outfit aggregation logic.",
          "Strict TypeScript type contracts matching GraphQL and Firebase schema payloads.",
          "Standardized design tokens and reusable design primitives for consistent user experience."
        ]
      },
      {
        id: "flashlist",
        title: "FlashList Catalog Migration",
        icon: Zap,
        badge: "Shopify FlashList",
        content:
          "Migrated heavy image catalogs to Shopify FlashList with cell recycling to eliminate scroll lag and memory spikes across users with hundreds of cataloged garments.",
        keyPoints: [
          "Recycled existing view instances instead of remounting, reducing memory footprint by over 60%.",
          "Implemented progressive image placeholder loading and disk caching with FastImage.",
          "Zero blank cells during rapid velocity flings across extensive wardrobe collections."
        ]
      },
      {
        id: "camera",
        title: "Native Camera & Compression",
        icon: Cpu,
        badge: "Native Modules",
        content:
          "Implemented custom native camera bridges and client-side image compression, reducing upload latency by 45% and lowering cloud ingestion bandwidth costs.",
        keyPoints: [
          "Engineered native iOS AVCapture and Android CameraX bridge for real-time item background segmenting.",
          "On-device bilinear image downsampling and metadata stripping prior to network transmission.",
          "Resilient chunked background upload queue ensuring zero lost uploads on flaky cellular."
        ]
      },
      {
        id: "cicd",
        title: "Firebase & CI/CD Pipelines",
        icon: ShieldCheck,
        badge: "Firebase + Store Compliance",
        content:
          "Integrated Firebase backend APIs, automated CI/CD deployment workflows, and ensured rigorous App Store compliance for high-scale US consumer launch.",
        keyPoints: [
          "Integrated Firebase Auth, Cloud Firestore, Realtime Analytics, and Remote Config.",
          "Automated release builds via GitLab CI/CD, running unit tests and lint checks automatically.",
          "Full compliance with Apple App Tracking Transparency (ATT) and consumer privacy guidelines."
        ]
      }
    ]
  },
  {
    id: "nhance",
    title: "nHance Health",
    subtitle: "Wearable & Healthcare Telemetry",
    domain: "Wearables & HealthTech (Hong Kong Market)",
    role: "Senior Mobile Engineer",
    scale: "Apple HealthKit Telemetry • Biometrics",
    accentColor: "emerald",
    glowBorder: "group-hover:border-emerald-500/40",
    glowBg: "from-emerald-500/10 via-transparent to-transparent",
    image: "/apps/nhance.jpg",
    appStoreUrl: "https://apps.apple.com/us/app/big4-health/id1517973481",
    playStoreUrl: null,
    metrics: [
      { label: "Biometric Data Sync", value: "Real-Time", sub: "Apple HealthKit integration" },
      { label: "Background Sync", value: "100%", sub: "Apple guideline compliant" },
      { label: "Memory Footprint", value: "< 24 MB", sub: "Streamlined data ingest" },
      { label: "Telemetry Telepathy", value: "Vitals & Food", sub: "Continuous monitoring" }
    ],
    tabs: [
      {
        id: "healthkit",
        title: "Apple HealthKit Integration",
        icon: Activity,
        badge: "Direct iOS HealthKit Bridge",
        content:
          "Direct Apple HealthKit integration for real-time biometric and health metric sync, continuously ingesting heart rate, heart rate variability (HRV), active energy, and sleep telemetry.",
        keyPoints: [
          "Engineered native Objective-C/Swift bridge communicating with HKHealthStore APIs safely.",
          "Granular permission request sequences explaining healthcare utility clearly to pass App Store review.",
          "Deduplicated concurrent sample queries with local batching to prevent main thread blocking."
        ]
      },
      {
        id: "telemetry",
        title: "Food Logging & Telemetry Engine",
        icon: Zap,
        badge: "Interactive Charts",
        content:
          "Engineered intuitive food logging engine, personalized health onboarding, and interactive health telemetry charts with dynamic time-series smoothing.",
        keyPoints: [
          "Interactive bezier curve charts rendering hundreds of discrete biometric data points smoothly.",
          "Macro-nutrient calculation engine converting logged meals into daily caloric progress targets.",
          "Personalized onboarding questionnaires tailoring target metrics to patient health profile."
        ]
      },
      {
        id: "compliance",
        title: "iOS Background Processing",
        icon: ShieldCheck,
        badge: "Strict Apple Compliance",
        content:
          "Strict compliance with iOS HealthKit background processing guidelines and secure local encrypted storage for sensitive patient telemetry.",
        keyPoints: [
          "Implemented HKObserverQuery background delivery while adhering strictly to iOS battery budgets.",
          "Secure on-device encryption utilizing iOS Keychain and secure enclave cryptographic keys.",
          "Zero data leakage architecture with strict anonymization of telemetry before cloud sync."
        ]
      },
      {
        id: "state",
        title: "Redux Streaming Architecture",
        icon: Layers,
        badge: "High-Frequency Stream",
        content:
          "Architected state synchronization engine capable of handling high-frequency telemetry updates without inducing re-render cascades.",
        keyPoints: [
          "Selector memoization with Reselect ensuring only affected visual cards re-render on metric updates.",
          "Throttled biometric event buffers to coalesce updates during workout intensity bursts.",
          "Graceful fallback to simulated trends when sensor connectivity is temporarily severed."
        ]
      }
    ]
  }
];

export default function FlagshipProjects() {
  const [activeTabs, setActiveTabs] = useState({
    fuellab: "architecture",
    fitted: "architecture",
    nhance: "healthkit"
  });

  const handleTabChange = (projectId, tabId) => {
    setActiveTabs((prev) => ({ ...prev, [projectId]: tabId }));
  };

  return (
    <section id="flagship" className="relative py-28 bg-[#0c0d12] text-zinc-100 border-t border-zinc-800/80">
      
      {/* Background Subtle Mesh */}
      <div className="absolute inset-0 bg-dot-mesh opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-cyan-400 mb-4">
            <Flame className="w-3.5 h-3.5 text-cyan-400" />
            <span>FLAGSHIP CASE STUDIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Production Engineering Deep Dives
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            Architectural teardowns of flagship cross-platform systems I have led and shipped. Each case study highlights real production engineering decisions: offline-first synchronization, high frame rate profiling, native bridges, and scale.
          </p>
        </div>

        {/* Flagship Cards Container */}
        <div className="space-y-24">
          {flagshipData.map((project, index) => {
            const currentTabId = activeTabs[project.id] || project.tabs[0].id;
            const currentTab = project.tabs.find((t) => t.id === currentTabId) || project.tabs[0];

            return (
              <article
                key={project.id}
                className="relative rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-b from-[#12131a] to-[#0c0d12] border border-zinc-800 hover:border-zinc-700 transition-all duration-300 shadow-2xl"
              >
                
                {/* Subtle Ambient Glow */}
                <div
                  className={`absolute top-0 right-1/4 w-[400px] h-[300px] bg-gradient-to-br ${project.glowBg} blur-[120px] pointer-events-none`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                  
                  {/* Left Column: Project Overview, Metrics, Interactive Tabs */}
                  <div className="lg:col-span-7 space-y-7">
                    
                    {/* Domain & Role Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-zinc-800/90 text-zinc-300 border border-zinc-700">
                        {project.domain}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950/60 text-cyan-300 border border-cyan-800/60">
                        {project.role}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800">
                        {project.scale}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-base text-zinc-400 mt-1 font-medium">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Key Engineering Metrics Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/90"
                        >
                          <div className="text-xs text-zinc-400 font-mono">{m.label}</div>
                          <div className="text-base sm:text-lg font-bold text-white mt-0.5 tracking-tight">
                            {m.value}
                          </div>
                          <div className="text-[11px] text-zinc-400 mt-0.5">{m.sub}</div>
                        </div>
                      ))}
                    </div>

                    {/* Interactive Technical Breakdown Tabs Bar */}
                    <div className="space-y-4 pt-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Interactive Technical Breakdown:</span>
                      </div>

                      {/* Tab Buttons */}
                      <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-zinc-900/90 border border-zinc-800">
                        {project.tabs.map((tab) => {
                          const isSelected = tab.id === currentTabId;
                          const TabIcon = tab.icon;
                          return (
                            <button
                              key={tab.id}
                              onClick={() => handleTabChange(project.id, tab.id)}
                              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                                isSelected
                                  ? "bg-zinc-800 text-white border border-zinc-700 shadow-sm"
                                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
                              }`}
                            >
                              <TabIcon className="w-3.5 h-3.5 text-cyan-400" />
                              <span>{tab.title}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Active Tab Detailed View */}
                      <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 space-y-3.5 text-left transition-all">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-white flex items-center gap-2">
                            {currentTab.title}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-zinc-800 text-cyan-300 border border-zinc-700">
                            {currentTab.badge}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                          {currentTab.content}
                        </p>

                        <div className="space-y-2 pt-2 border-t border-zinc-850">
                          {currentTab.keyPoints.map((point, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTAs: Store Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      {project.appStoreUrl && (
                        <a
                          href={project.appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-900 bg-white hover:bg-zinc-200 transition-all shadow-sm"
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 1.01-2.87-.96.04-2.07.65-2.73 1.42-.56.64-1.05 1.7-1.01 2.76 1.05.08 2.12-.56 2.73-1.31z" />
                          </svg>
                          <span>Apple App Store</span>
                          <ExternalLink className="w-3 h-3 text-zinc-600" />
                        </a>
                      )}

                      {project.playStoreUrl && (
                        <a
                          href={project.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 transition-all shadow-sm"
                        >
                          <svg className="w-4 h-4 fill-current text-emerald-400" viewBox="0 0 24 24">
                            <path d="M3.609 1.814L13.793 12 3.61 22.186a1.996 1.996 0 0 1-.61-.954V2.768c.15-.36.37-.69.609-.954zm11.235 11.236l2.164 2.164-11.75 6.784 9.586-8.948zm2.164-2.164l-2.164 2.164-9.586-8.948 11.75 6.784zm1.189 1.189l3.582 2.068c.837.483.837 1.272 0 1.755l-3.582 2.068-2.163-2.163 2.163-3.728z" />
                          </svg>
                          <span>Google Play Store</span>
                          <ExternalLink className="w-3 h-3 text-zinc-400" />
                        </a>
                      )}

                      <span className="text-xs text-zinc-400 font-mono ml-auto">
                        Case Study #{index + 1}
                      </span>
                    </div>

                  </div>

                  {/* Right Column: Realistic iPhone Frame Mockup */}
                  <div className="lg:col-span-5 flex flex-col items-center justify-center">
                    <div className="w-full flex justify-center">
                      <PhoneMockup
                        imageSrc={project.image}
                        alt={`${project.title} Production Interface`}
                        time="9:41"
                        statusColor={project.accentColor === "emerald" ? "emerald" : "cyan"}
                      />
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-xs text-zinc-400 font-mono">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live Production Build Interface</span>
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
