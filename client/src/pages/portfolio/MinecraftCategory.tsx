/*
 * DESIGN: "Void Glass" Cyberpunk — Minecraft Category Page
 * Shows the three Minecraft sub-categories: Management, Moderation, Development
 */

import { Link } from "wouter";

const BANNER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663602858071/BZbo6BfgG8qVnGwCP7Bhb8/minecraft-banner-afNngK9V5tWWU2CUiFQy8Z.webp";

const subCategories = [
  {
    label: "Management",
    href: "/portfolio/minecraft/management",
    description: "Staff management, general management, and ownership experience.",
    icon: "🏰",
  },
  {
    label: "Moderation",
    href: "/portfolio/minecraft/moderation",
    description: "Ability to understand staff documents, and preform well while moderating.",
    icon: "🛡️",
  },
  {
    label: "Development",
    href: "/portfolio/minecraft/development",
    description: "Plugin development, config development, and general server development.",
    icon: "⚙️",
  },
];

export default function MinecraftCategory() {
  return (
    <div className="min-h-screen" style={{ background: "#0a0a0a" }}>
      {/* Banner */}
      <div className="relative h-48 sm:h-56 overflow-hidden" style={{ marginTop: "56px" }}>
        <img src={BANNER} alt="Minecraft" className="w-full h-full object-cover" style={{ opacity: 0.5 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.98) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(0,255,136,0.4), transparent)" }} />
        <div className="absolute bottom-6 left-0 right-0 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-1.5 mb-2" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "rgba(255,255,255,0.3)" }}>
              <Link href="/"><span className="hover:text-white transition-colors cursor-pointer">~</span></Link>
              <span>/</span>
              <Link href="/portfolio"><span className="hover:text-white transition-colors cursor-pointer">portfolio</span></Link>
              <span>/</span>
              <span style={{ color: "#00ff88" }}>minecraft</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#ffffff", letterSpacing: "-0.02em" }}>
              ⛏️ Minecraft
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <p className="mb-8" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>
            select a sub-category to explore
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 stagger-children">
            {subCategories.map((sub) => (
              <Link key={sub.label} href={sub.href}>
                <div
                  className="portfolio-card p-5 cursor-pointer group"
                  style={{ border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="text-3xl mb-3">{sub.icon}</div>
                  <h2 className="text-base font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#ffffff" }}>
                    {sub.label}
                  </h2>
                  <p className="text-xs mb-4 leading-relaxed" style={{ fontFamily: "'JetBrains Mono', monospace", color: "rgba(255,255,255,0.4)" }}>
                    {sub.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
