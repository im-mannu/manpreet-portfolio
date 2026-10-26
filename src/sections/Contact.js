import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  FileText,
  ArrowUpRight
} from "lucide-react";

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8v-8.37M7.86 6.3a1.63 1.63 0 1 0 1.63 1.63c0-.9-.73-1.63-1.63-1.63z" />
  </svg>
);

export default function Contact({ onOpenCV }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("manpreethamb@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+918802390007");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#09090b] text-zinc-100 border-t border-zinc-800/80">
      
      {/* Background Subtle Mesh */}
      <div className="absolute inset-0 bg-dot-mesh opacity-25 pointer-events-none" />

      {/* Ambient Glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-cyan-400 mb-4">
            <Send className="w-3.5 h-3.5 text-cyan-400" />
            <span>LET&apos;S CONNECT DIRECTLY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready to Build at Scale?
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg mt-3 leading-relaxed font-normal">
            Whether you&apos;re looking for a Staff / Lead Mobile Engineer to architect your next flagship cross-platform system, scale an existing app to millions of downloads, or modernize an engineering organization—let&apos;s talk.
          </p>
        </div>

        {/* Contact Bento Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Action Card (8 Cols) */}
          <div className="lg:col-span-8 rounded-2xl p-8 sm:p-10 bg-[#0c0d12]/95 border border-zinc-800 shadow-2xl flex flex-col justify-between text-left space-y-8">
            
            <div className="space-y-6">
              {/* Availability Banner */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Staff & Lead Mobile Roles (Global Remote)</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Direct Channels
              </h3>

              {/* Contact Information Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Email Box */}
                <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800/90 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono uppercase text-zinc-400">
                        Primary Email
                      </div>
                      <a
                        href="mailto:manpreethamb@gmail.com"
                        className="text-sm font-semibold text-white hover:text-cyan-400 transition"
                      >
                        manpreethamb@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white transition"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800/90 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono uppercase text-zinc-400">
                        Phone / WhatsApp
                      </div>
                      <a
                        href="tel:+918802390007"
                        className="text-sm font-semibold text-white hover:text-emerald-400 transition"
                      >
                        +91 8802390007
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white transition"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Box */}
                <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800/90 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-zinc-400">
                      Location
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Mohali, India (Open to Global Remote)
                    </div>
                  </div>
                </div>

                {/* LinkedIn Box */}
                <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800/90 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <LinkedinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono uppercase text-zinc-400">
                        LinkedIn Profile
                      </div>
                      <a
                        href="https://linkedin.com/in/manpreet-singh-0101b5203/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-white hover:text-blue-400 transition"
                      >
                        manpreet-singh-0101b5203
                      </a>
                    </div>
                  </div>
                  <a
                    href="https://linkedin.com/in/manpreet-singh-0101b5203/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white transition"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>

            {/* Quick Actions Row */}
            <div className="pt-4 border-t border-zinc-850 flex flex-wrap items-center gap-3">
              <a
                href="mailto:manpreethamb@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email Directly</span>
              </a>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 transition-all shadow-sm"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View &amp; Download CV</span>
              </button>
            </div>

          </div>

          {/* Side Summary Bento (4 Cols) */}
          <div className="lg:col-span-4 rounded-2xl p-8 bg-[#0c0d12]/95 border border-zinc-800 shadow-2xl flex flex-col justify-between text-left space-y-6">
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                Engineering Governance
              </div>
              <h4 className="text-xl font-bold text-white tracking-tight">
                Why Senior Leaders Reach Out
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                When product companies need someone who doesn&apos;t just code tickets, but takes complete ownership of mobile client architecture, sets 60 FPS performance bars, and guarantees rock-solid store delivery.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-850 text-xs text-zinc-300">
                  <span className="font-semibold text-white block">Autonomous Execution:</span>
                  From architecture RFC to App Store Connect submission.
                </div>
                <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-850 text-xs text-zinc-300">
                  <span className="font-semibold text-white block">Offline-First Mastery:</span>
                  MMKV &amp; SQLite zero-latency local caching.
                </div>
                <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-850 text-xs text-zinc-300">
                  <span className="font-semibold text-white block">Proven Store Track Record:</span>
                  15+ releases, 600K+ downloads reached.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-850">
              <span className="text-[11px] font-mono text-zinc-400 block">
                Timezone: IST (UTC+5:30) • Flexible for US/EU overlaps
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Engineering Colophon / Footer */}
      <footer className="mt-24 pt-8 border-t border-zinc-800/80 text-xs font-mono text-zinc-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-200">Manpreet Singh</span>
            <span>•</span>
            <span>Lead &amp; Senior Mobile Engineer Showcase</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#flagship" className="hover:text-cyan-400 transition">Case Studies</a>
            <a href="#production-apps" className="hover:text-cyan-400 transition">Shipped Apps</a>
            <a href="#architecture" className="hover:text-cyan-400 transition">Architecture</a>
            <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
            <button onClick={onOpenCV} className="hover:text-cyan-400 transition">CV / Resume</button>
          </div>

          <div>
            Built with React &amp; Tailwind CSS • Linear/Vercel Aesthetic
          </div>
        </div>
      </footer>

    </section>
  );
}
