import React, { useState } from "react";
import {
  ExternalLink,
  Smartphone,
  Eye,
  CheckCircle2
} from "lucide-react";

const productionApps = [
  {
    id: "little-floh",
    name: "Little Floh",
    category: "Marketplace & Payments",
    domain: "Community Marketplace / Chat & Payments",
    colSpan: "lg:col-span-6",
    summary:
      "Engineered community marketplace mobile experience with buyer-seller transaction flows, in-app messaging, secure payment gateway integrations, and real-time localized item discovery.",
    tech: ["React Native", "TypeScript", "Stripe Payments", "In-App Chat", "Push Notifications"],
    architecturePoints: [
      "Stripe payment intent tokenization and escrow transaction flows.",
      "Real-time websocket-powered buyer/seller chat with read receipts.",
      "Optimized multi-photo upload pipeline with client-side image downscaling."
    ],
    previewImage: "/apps/app5.png",
    links: [
      {
        platform: "App Store",
        url: "https://apps.apple.com/us/app/little-floh/id6470370015",
        type: "ios"
      },
      {
        platform: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.littlefloh.app",
        type: "android"
      }
    ]
  },
  {
    id: "big4-health",
    name: "BIG4 Health",
    category: "Healthcare & Telehealth",
    domain: "Healthcare & Appointment Management",
    colSpan: "lg:col-span-6",
    summary:
      "Delivered cross-platform healthcare app for clinical routine tracking, medication schedule management, and doctor appointment scheduling with strict privacy controls across iOS and Android.",
    tech: ["React Native", "Telehealth APIs", "Calendar Reminders", "Health Tracking"],
    architecturePoints: [
      "Dynamic medication alarm reminders utilizing native background scheduling.",
      "Encrypted patient records storage with local biometric authentication (FaceID/Fingerprint).",
      "Interactive health vitals charts displaying historical biometric progress."
    ],
    previewImage: "/apps/app3.png",
    links: [
      {
        platform: "App Store",
        url: "https://apps.apple.com/us/app/big4-health/id1517973481",
        type: "ios"
      },
      {
        platform: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.big4healthapp",
        type: "android"
      }
    ]
  },
  {
    id: "in-common",
    name: "In Common",
    category: "Social & Geo-Discovery",
    domain: "Community & Destination Finder",
    colSpan: "lg:col-span-7",
    summary:
      "Shipped social discovery application helping users find curated venues, shared experiences, and local community connections with silky mobile-first swipe navigation.",
    tech: ["React Native", "Geo-Discovery", "Location APIs", "Social UX"],
    architecturePoints: [
      "Location-aware radius querying with dynamic geohash spatial indexing.",
      "Smooth gesture-driven card deck interactions with zero layout shifts.",
      "Seamless integration with Apple Maps and Google Maps turn-by-turn navigation."
    ],
    previewImage: "/apps/app2.png",
    links: [
      {
        platform: "App Store",
        url: "https://apps.apple.com/us/app/in-common-find-destinations/id6747021185",
        type: "ios"
      },
      {
        platform: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.incommon.app",
        type: "android"
      }
    ]
  },
  {
    id: "chummy",
    name: "Chummy",
    category: "Social & Geo-Discovery",
    domain: "Social Networking / Geo-Discovery / Location APIs",
    colSpan: "lg:col-span-5",
    summary:
      "Engineered real-time social connection mobile app pairing users via proximity detection, interest matching algorithms, and low-latency instant messaging.",
    tech: ["React Native", "Socket.IO", "Location APIs", "Profile Matching"],
    architecturePoints: [
      "Low-battery GPS clustering algorithms preventing continuous sensor drain.",
      "Real-time websocket presence heartbeat and typing status indicators.",
      "Multi-tenant push notification orchestrations via Firebase Cloud Messaging."
    ],
    previewImage: null,
    links: [
      {
        platform: "App Store",
        url: "https://apps.apple.com/us/app/chummy-find-real-friends/id6738577443",
        type: "ios"
      },
      {
        platform: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.wolfpackfindfriends",
        type: "android"
      }
    ]
  },
  {
    id: "jg-travel",
    name: "JG Vacation & JG Calendar",
    category: "Travel & Scheduling",
    domain: "Curated Travel Planning & Smart Scheduling",
    colSpan: "lg:col-span-7",
    summary:
      "Dual-app ecosystem built for high-end vacation rental hosts and travelers, synchronizing calendars with Airbnb/VRBO, handling team assignments, and offline itinerary management.",
    tech: ["React Native", "Multi-Calendar Sync", "Booking Engine", "Offline Storage"],
    architecturePoints: [
      "Bi-directional iCal calendar synchronization parsing multi-channel bookings.",
      "Dedicated cleaner/maintenance dispatch portal with photo verification proof.",
      "Offline itinerary caching enabling access during international transit."
    ],
    previewImage: "/apps/app4.png",
    links: [
      {
        platform: "JG Vacation (iOS)",
        url: "https://apps.apple.com/us/app/jg-vacation/id6452726337",
        type: "ios"
      },
      {
        platform: "JG Vacation (Android)",
        url: "https://play.google.com/store/apps/details?id=com.jgvacation.app",
        type: "android"
      },
      {
        platform: "JG Calendar (iOS)",
        url: "https://apps.apple.com/us/app/jg-calendar/id6463896471",
        type: "ios"
      },
      {
        platform: "JG Calendar (Android)",
        url: "https://play.google.com/store/apps/details?id=com.jgcalendar",
        type: "android"
      }
    ]
  },
  {
    id: "n8tive",
    name: "N8tive Nightlife",
    category: "Social & Geo-Discovery",
    domain: "Live Event Discovery / Interactive Maps",
    colSpan: "lg:col-span-5",
    summary:
      "Delivered high-energy nightlife and live entertainment discovery platform featuring interactive venue maps, ticket check-ins, and venue capacity indicators.",
    tech: ["React Native", "Mapbox SDK", "Event Ticketing", "Geofencing"],
    architecturePoints: [
      "Custom Mapbox vector layers rendering dense metropolitan venue pins without jitter.",
      "Geofenced venue check-ins verifying physical attendance for loyalty rewards.",
      "High-contrast dark-mode first design engineered for low-light venue environments."
    ],
    previewImage: null,
    links: [
      {
        platform: "App Store",
        url: "https://apps.apple.com/us/app/n8tive-nightlife/id6469099525",
        type: "ios"
      }
    ]
  }
];

const categories = [
  "All Products",
  "Healthcare & Telehealth",
  "Marketplace & Payments",
  "Social & Geo-Discovery",
  "Travel & Scheduling"
];

export default function ProductionAppsGrid({ onPreviewImage }) {
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const filteredApps =
    selectedCategory === "All Products"
      ? productionApps
      : productionApps.filter((app) => app.category === selectedCategory);

  return (
    <section id="production-apps" className="relative py-28 bg-[#09090b] text-zinc-100 border-t border-zinc-800/80">
      
      {/* Background Subtle Mesh */}
      <div className="absolute inset-0 bg-dot-mesh opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-cyan-400 mb-4">
              <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
              <span>LIVE SHIPPED ECOSYSTEM</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Production Mobile Apps Grid
            </h2>

            <p className="text-zinc-400 text-base sm:text-lg mt-3 leading-relaxed font-normal">
              A curated catalog of production applications I have engineered, tested, and published across Apple App Store and Google Play Store spanning multiple industries.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-zinc-800 text-cyan-400 border border-zinc-700 shadow-sm"
                    : "bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 border border-zinc-850 hover:bg-zinc-850"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className={`${app.colSpan} rounded-2xl p-6 sm:p-8 bg-[#0c0d12]/90 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 shadow-xl flex flex-col justify-between group relative overflow-hidden`}
            >
              
              {/* Subtle Card Glow on Hover */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/[0.03] group-hover:bg-cyan-500/[0.07] blur-3xl rounded-full transition-colors pointer-events-none" />

              <div className="space-y-4 text-left">
                
                {/* Card Top: Category & Domain */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-2.5 py-0.5 rounded-full">
                    {app.category}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400">
                    Live in Store
                  </span>
                </div>

                {/* Name & Domain */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {app.name}
                  </h3>
                  <div className="text-xs text-zinc-400 font-mono mt-0.5">
                    {app.domain}
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {app.summary}
                </p>

                {/* Architecture Highlights */}
                <div className="space-y-1.5 pt-2 border-t border-zinc-850">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    Engineering Highlights:
                  </div>
                  {app.architecturePoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Optional Screenshot Preview Strip if image exists */}
                {app.previewImage && (
                  <div className="pt-3">
                    <button
                      onClick={() => onPreviewImage && onPreviewImage(app.previewImage, app.name)}
                      className="w-full relative rounded-xl overflow-hidden border border-zinc-800/80 group/img flex items-center justify-center max-h-36 bg-zinc-950"
                      title="Click to view full preview"
                    >
                      <img
                        src={app.previewImage}
                        alt={`${app.name} Preview`}
                        className="w-full h-36 object-cover object-top opacity-70 group-hover/img:opacity-100 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex items-end justify-between p-3">
                        <span className="text-[11px] font-mono text-zinc-300 flex items-center gap-1.5 bg-zinc-900/90 px-2.5 py-1 rounded-md border border-zinc-700">
                          <Eye className="w-3 h-3 text-cyan-400" />
                          <span>View App Screen Preview</span>
                        </span>
                      </div>
                    </button>
                  </div>
                )}

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {app.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-zinc-900 text-zinc-400 border border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Direct Store CTAs */}
              <div className="mt-6 pt-4 border-t border-zinc-850 flex flex-wrap items-center gap-2">
                {app.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 bg-zinc-900/90 hover:bg-zinc-800 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-all shadow-sm"
                  >
                    {link.type === "ios" ? (
                      <svg className="w-3.5 h-3.5 fill-current text-zinc-300" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 1.01-2.87-.96.04-2.07.65-2.73 1.42-.56.64-1.05 1.7-1.01 2.76 1.05.08 2.12-.56 2.73-1.31z" />
                      </svg>
                    ) : (
                      <svg className="w-3.5 h-3.5 fill-current text-emerald-400" viewBox="0 0 24 24">
                        <path d="M3.609 1.814L13.793 12 3.61 22.186a1.996 1.996 0 0 1-.61-.954V2.768c.15-.36.37-.69.609-.954zm11.235 11.236l2.164 2.164-11.75 6.784 9.586-8.948zm2.164-2.164l-2.164 2.164-9.586-8.948 11.75 6.784zm1.189 1.189l3.582 2.068c.837.483.837 1.272 0 1.755l-3.582 2.068-2.163-2.163 2.163-3.728z" />
                      </svg>
                    )}
                    <span>{link.platform}</span>
                    <ExternalLink className="w-2.5 h-2.5 text-zinc-400" />
                  </a>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
