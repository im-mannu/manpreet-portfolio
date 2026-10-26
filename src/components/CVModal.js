import React, { useState } from "react";
import { X, Download, Printer, Copy, Check, Mail, Phone, MapPin } from "lucide-react";

const LinkedinIcon = ({ className = "w-3.5 h-3.5 text-cyan-400" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8v-8.37M7.86 6.3a1.63 1.63 0 1 0 1.63 1.63c0-.9-.73-1.63-1.63-1.63z" />
  </svg>
);

export default function CVModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText("manpreethamb@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0d12] border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-zinc-100">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/90 bg-zinc-950/70">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider font-mono">
              Staff / Lead Mobile Engineer Profile • CV
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-zinc-400" />
              <span>Print / Save PDF</span>
            </button>

            <a
              href="/Manpreet_Singh_Lead_Mobile_Engineer_CV.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Open Standalone CV</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/70 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Scrollable Resume */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 font-sans text-sm leading-relaxed text-zinc-300">
          
          {/* Header Section */}
          <div className="border-b border-zinc-800 pb-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Manpreet Singh
              </h1>
              <p className="text-cyan-400 font-semibold text-base mt-1">
                Lead & Senior Mobile Engineer (React Native & Fullstack)
              </p>
              <p className="text-zinc-400 text-xs mt-1.5 font-mono">
                Cross-Platform Mobile Architecture • High Concurrency • Offline-First Systems
              </p>
            </div>

            <div className="flex flex-col gap-1.5 text-xs text-zinc-400 font-mono">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>manpreethamb@gmail.com</span>
                <button onClick={handleCopy} className="ml-1 text-zinc-500 hover:text-zinc-300">
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>+91 8802390007</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Mohali, India (Open to Remote Globally)</span>
              </div>
              <div className="flex items-center gap-2">
                <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
                <a
                  href="https://linkedin.com/in/manpreet-singh-0101b5203/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 underline"
                >
                  linkedin.com/in/manpreet-singh-0101b5203
                </a>
              </div>
            </div>
          </div>

          {/* Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
              <div className="text-xl font-bold text-white font-mono">4.9+ Yrs</div>
              <div className="text-[11px] text-zinc-400 uppercase tracking-wider mt-0.5">Production Exp</div>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
              <div className="text-xl font-bold text-cyan-400 font-mono">20+ Apps</div>
              <div className="text-[11px] text-zinc-400 uppercase tracking-wider mt-0.5">Production Shipped</div>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
              <div className="text-xl font-bold text-purple-400 font-mono">15+ Releases</div>
              <div className="text-[11px] text-zinc-400 uppercase tracking-wider mt-0.5">App & Play Store</div>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
              <div className="text-xl font-bold text-emerald-400 font-mono">600K+</div>
              <div className="text-[11px] text-zinc-400 uppercase tracking-wider mt-0.5">User Downloads</div>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2 font-semibold">
              Executive Summary
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Product-focused Lead Mobile Engineer with 4.9+ years architecting and scaling cross-platform mobile systems for US, Indian, and international product companies. Proven record scaling consumer applications past 600K+ iOS downloads, driving 60 FPS rendering on data-intensive charting interfaces, engineering offline-first local cache synchronization (MMKV / SQLite / WatermelonDB), and orchestrating independent store release pipelines with Fastlane and automated CI/CD.
            </p>
          </div>

          {/* Core Technical Arsenal */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3 font-semibold">
              Technical Arsenal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                <span className="font-semibold text-white block mb-1">Core Mobile Architecture</span>
                <span className="text-zinc-400">React Native (CLI & Expo), TypeScript, Swift/Kotlin Native Modules, Shopify FlashList, React Navigation v6/v7, Reanimated 3</span>
              </div>
              <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                <span className="font-semibold text-white block mb-1">State & Offline Synchronization</span>
                <span className="text-zinc-400">Redux Toolkit, RTK Query, MVVM Architecture, MMKV, SQLite, WatermelonDB, WebSockets / Socket.IO</span>
              </div>
              <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                <span className="font-semibold text-white block mb-1">Real-Time, Media & Hardware SDKs</span>
                <span className="text-zinc-400">Apple HealthKit Telemetry, ZEGOCLOUD Audio/Video, CometChat SDK, Mapbox SDK, Stripe, In-App Purchases</span>
              </div>
              <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                <span className="font-semibold text-white block mb-1">Release Engineering & CI/CD</span>
                <span className="text-zinc-400">Fastlane, App Store Connect, Google Play Console, GitLab CI/CD, GitHub Actions, Sentry, Firebase Crashlytics</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4 font-semibold">
              Professional Experience
            </h2>

            <div className="space-y-6">
              {/* Role 1 */}
              <div className="border-l-2 border-cyan-500/40 pl-4 space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <h3 className="text-base font-bold text-white">Lead React Native Developer (Product)</h3>
                  <span className="text-zinc-400 font-mono">06/2026 – Present • Mohali, India</span>
                </div>
                <div className="text-cyan-400 text-xs font-medium">Shine Dezign Infonet • Flagship Product: FuelLab.fit</div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-zinc-300 text-xs pt-1">
                  <li>Direct client architecture & engineering on FuelLab.fit, an AI sports nutrition and match-day scheduling client across iOS and Android.</li>
                  <li>Architected offline-first local data synchronization utilizing MMKV and SQLite, guaranteeing zero-latency match-day access in low-connectivity sports venues.</li>
                  <li>Sustained 60 FPS UI rendering across complex meal scheduling timelines, hydration curves, and dynamic macro ring charts.</li>
                  <li>Integrated custom native bridges for background sync and owned automated App Store and Play Store release pipelines.</li>
                </ul>
              </div>

              {/* Role 2 */}
              <div className="border-l-2 border-zinc-700 pl-4 space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <h3 className="text-base font-bold text-white">Senior React Native Developer</h3>
                  <span className="text-zinc-400 font-mono">07/2025 – 04/2026 • US Product Co.</span>
                </div>
                <div className="text-purple-400 text-xs font-medium">Fitted (via Netinnovatus IT Solutions) • US Market</div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-zinc-300 text-xs pt-1">
                  <li>Scaled digital wardrobe and AI styling application to 600K+ iOS downloads for a high-volume US consumer audience.</li>
                  <li>Migrated heavy wardrobe feeds to Shopify FlashList with cell recycling, eliminating scroll hitches on 1,000+ item closets.</li>
                  <li>Engineered custom native camera bridge and client-side image compression, cutting upload latency by 45%.</li>
                  <li>Integrated Firebase backend APIs, automated CI/CD deployment workflows, and store compliance.</li>
                </ul>
              </div>

              {/* Role 3 */}
              <div className="border-l-2 border-zinc-700 pl-4 space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <h3 className="text-base font-bold text-white">React Native Developer</h3>
                  <span className="text-zinc-400 font-mono">10/2024 – 05/2025 • Mohali, India</span>
                </div>
                <div className="text-zinc-400 text-xs font-medium">Indi IT Solutions</div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-zinc-300 text-xs pt-1">
                  <li>Engineered real-time chat and video communication architectures using CometChat SDK and ZEGOCLOUD audio/video pipelines.</li>
                  <li>Delivered multi-currency Stripe payment gateways, subscription entitlement management, and cross-platform store verification.</li>
                </ul>
              </div>

              {/* Role 4 */}
              <div className="border-l-2 border-zinc-700 pl-4 space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <h3 className="text-base font-bold text-white">Senior React Native Developer</h3>
                  <span className="text-zinc-400 font-mono">06/2023 – 09/2024 • Jaipur, India</span>
                </div>
                <div className="text-zinc-400 text-xs font-medium">Owebest Technologies Pvt. Ltd.</div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-zinc-300 text-xs pt-1">
                  <li>Delivered healthcare telemetry apps (nHance Health) with Apple HealthKit biometrics and complex scheduling applications.</li>
                  <li>Built React.js admin control planes to support real-time mobile operations and API lifecycle governance.</li>
                </ul>
              </div>

              {/* Role 5 */}
              <div className="border-l-2 border-zinc-700 pl-4 space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <h3 className="text-base font-bold text-white">React Native Developer</h3>
                  <span className="text-zinc-400 font-mono">01/2022 – 06/2023 • Mohali, India</span>
                </div>
                <div className="text-zinc-400 text-xs font-medium">Netset Software Solutions</div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-zinc-300 text-xs pt-1">
                  <li>Built cross-platform logistics, healthcare, and social marketplace apps with Mapbox location routing and payment APIs.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-zinc-800 bg-zinc-950/90">
          <span className="text-xs text-zinc-500 font-mono hidden sm:inline">
            Manpreet Singh • Lead & Senior Mobile Engineer Showcase
          </span>
          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800"
            >
              Close
            </button>
            <a
              href="mailto:manpreethamb@gmail.com"
              className="px-4 py-1.5 rounded-lg text-xs font-semibold text-zinc-950 bg-cyan-400 hover:bg-cyan-300"
            >
              Schedule Technical Interview
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
