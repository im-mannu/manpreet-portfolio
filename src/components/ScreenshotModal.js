import React from "react";
import { X } from "lucide-react";

export default function ScreenshotModal({ imageSrc, title, isOpen, onClose }) {
  if (!isOpen || !imageSrc) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] bg-[#0c0d12] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-zinc-800 bg-zinc-950/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <h3 className="text-xs font-mono font-semibold text-zinc-200 uppercase tracking-wider">
              {title} • Production App Screen Preview
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Image Viewport */}
        <div className="overflow-auto p-4 flex items-center justify-center bg-zinc-950">
          <img
            src={imageSrc}
            alt={title}
            className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-lg border border-zinc-800/60"
          />
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-zinc-800 bg-zinc-950/80 flex items-center justify-between text-xs text-zinc-500 font-mono">
          <span>Production mobile client interface release</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-md bg-zinc-850 hover:bg-zinc-800 text-zinc-300 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
