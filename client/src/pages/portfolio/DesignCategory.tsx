/*
 * DESIGN: "Void Glass" Cyberpunk — Design Category Page
 */

import { Link } from "wouter";

const BANNER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663602858071/BZbo6BfgG8qVnGwCP7Bhb8/design-banner-FEnxQ9MkANecvBgjQdpzKX.webp";

export default function DesignCategory() {
  return (
    <div className="min-h-screen" style={{ background: "#0a0a0a" }}>
      <div className="relative h-48 sm:h-56 overflow-hidden" style={{ marginTop: "56px" }}>
        <img src={BANNER} alt="Design" className="w-full h-full object-cover" style={{ opacity: 0.5 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.98) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(0,212,255,0.4), transparent)" }} />
        <div className="absolute bottom-6 left-0 right-0 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-1.5 mb-2" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "rgba(255,255,255,0.3)" }}>
              <Link href="/"><span className="hover:text-white transition-colors cursor-pointer">~</span></Link>
              <span>/</span>
              <Link href="/portfolio"><span className="hover:text-white transition-colors cursor-pointer">portfolio</span></Link>
              <span>/</span>
              <span style={{ color: "#00d4ff" }}>design</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#ffffff", letterSpacing: "-0.02em" }}>
              🎨 Design
            </h1>
          </div>
        </div>
      </div>
      <div className="px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center py-16" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem", color: "rgba(255,255,255,0.25)" }}>
            <div className="text-4xl mb-4">🚧</div>
            coming soon — check back later
          </div>
        </div>
      </div>
    </div>
  );
}
