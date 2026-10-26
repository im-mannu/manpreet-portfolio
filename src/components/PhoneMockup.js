import React from "react";
import { Wifi, Battery } from "lucide-react";

export default function PhoneMockup({
  imageSrc,
  alt = "App Screenshot",
  time = "9:41",
  statusColor = "emerald",
  children,
  className = ""
}) {
  return (
    <div className={`relative mx-auto w-full max-w-[280px] sm:max-w-[310px] md:max-w-[320px] transition-transform duration-500 hover:scale-[1.02] ${className}`}>
      {/* Outer Titanium Frame */}
      <div className="relative rounded-[46px] p-[10px] bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.12)]">
        
        {/* Subtle Hardware Buttons */}
        <div className="absolute -left-[13px] top-[100px] w-[3px] h-[26px] bg-zinc-700 rounded-l-sm" />
        <div className="absolute -left-[13px] top-[140px] w-[3px] h-[45px] bg-zinc-700 rounded-l-sm" />
        <div className="absolute -left-[13px] top-[195px] w-[3px] h-[45px] bg-zinc-700 rounded-l-sm" />
        <div className="absolute -right-[13px] top-[130px] w-[3px] h-[65px] bg-zinc-700 rounded-r-sm" />

        {/* Screen Bezel */}
        <div className="relative overflow-hidden rounded-[38px] bg-zinc-950 border border-zinc-800/80 aspect-[9/19.5] flex flex-col">
          
          {/* iOS Status Bar */}
          <div className="relative z-30 flex items-center justify-between px-6 pt-3 pb-1 text-zinc-100 text-[11px] font-semibold tracking-tight select-none">
            <span>{time}</span>

            {/* Dynamic Island */}
            <div className="flex items-center justify-center gap-1.5 px-3 py-1 bg-black rounded-full border border-zinc-800/60 shadow-inner">
              <span className={`w-1.5 h-1.5 rounded-full ${statusColor === "emerald" ? "bg-emerald-400" : "bg-cyan-400"} animate-pulse`} />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-700/50" />
            </div>

            <div className="flex items-center gap-1.5 text-zinc-300">
              <span className="text-[9px] font-bold tracking-wider">5G</span>
              <Wifi className="w-3 h-3 text-zinc-300" />
              <Battery className="w-3.5 h-3.5 text-zinc-300 fill-zinc-300" />
            </div>
          </div>

          {/* Screen Content Area */}
          <div className="relative flex-1 w-full overflow-hidden bg-zinc-950">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={alt}
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            ) : (
              children
            )}

            {/* Gloss / Screen Reflection */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/[0.04] via-transparent to-transparent" />
          </div>

          {/* Home Indicator Bar */}
          <div className="relative z-30 py-2 flex justify-center bg-zinc-950/80 backdrop-blur-sm">
            <div className="w-32 h-1 bg-zinc-500/80 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
