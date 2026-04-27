/*
 * DESIGN: "Void Glass" Cyberpunk — Bio Page
 * Inspired by guns.lol: centered profile card, dashed borders,
 * dark void background, neon green accents, music player
 */

import DiscordPresence from "@/components/DiscordPresence";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663602858071/BZbo6BfgG8qVnGwCP7Bhb8/hero-bg-HXKanv8moNhViZryyzjWuK.webp";

export default function Home() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Hero background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.35,
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(0,255,136,0.04) 0%, transparent 70%), linear-gradient(to bottom, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.85) 60%, #0a0a0a 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-12">
        <div
          className="w-full max-w-sm stagger-children"
          style={{ animation: "fadeInUp 0.6s ease forwards" }}
        >
          {/* Profile card */}
          <div className="glass-card p-5 mb-3">
            {/* Avatar + views row */}
            <div className="flex items-start justify-between mb-4">
              <div className="relative">
                <div
                  className="w-16 h-16 rounded-xl overflow-hidden"
                  style={{
                    border: "2px solid rgba(0,255,136,0.25)",
                    boxShadow: "0 0 20px rgba(0,255,136,0.1)",
                  }}
                >
                  {/* Placeholder avatar — replace with actual avatar */}
                  <div
                    className="w-full h-full flex items-center justify-center text-2xl"
                    style={{ background: "rgba(0,255,136,0.08)" }}
                  >
                    👤
                  </div>
                </div>
              </div>

              {/* Views counter */}
              <div
                className="flex items-center gap-1.5 text-xs"
                style={{
                  color: "rgba(255,255,255,0.35)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.7rem",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                <span>—</span>
              </div>
            </div>

            {/* Username */}
            <div className="mb-1">
              <h1
                className="text-xl font-bold"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                }}
              >
                username
              </h1>
              <p
                className="text-xs mt-0.5"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                developer · designer · staff
              </p>
            </div>

            {/* Bio text */}
            <p
              className="text-sm mt-3 leading-relaxed"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "rgba(255,255,255,0.55)",
                fontSize: "0.78rem",
              }}
            >
              passionate about building things on the internet.
              minecraft enthusiast, discord bot dev, and graphic designer.
            </p>
          </div>

          {/* Discord Presence */}
          <DiscordPresence />

          {/* Music Player */}
          <div className="mt-3 dashed-card p-4">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#00ff88">
                  <path d="M9 18v-5h2v5H9zm4-5h2v5h-2v-5zm5-4V2h-1v7H7V2H6v7H2v2h18V11h-2zm0 7v-3h-1v3h1zm-4 4v-3h-2v3h2zm4 0v-3h-1v3h1z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.85)",
                    fontWeight: 600,
                  }}
                >
                  Falling Down
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.68rem",
                    color: "rgba(255,255,255,0.4)",
                    marginTop: "2px",
                  }}
                >
                  Lil Peep & XXXTENTACION
                </div>
              </div>
              <audio
                controls
                style={{
                  width: "80px",
                  height: "24px",
                  accentColor: "#00ff88",
                }}
              >
                <source
                  src="/manus-storage/YTDown_YouTube_Lil-Peep-_-XXXTENTACION-Falling-Down_Media_-jRKsiAOAA8_009_128k_a04b9259.mp3"
                  type="audio/mpeg"
                />
              </audio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
