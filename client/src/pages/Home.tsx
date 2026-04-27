/*
 * DESIGN: "Void Glass" Cyberpunk — Bio Page
 * Inspired by guns.lol: centered profile card, dashed borders,
 * dark void background, neon green accents, social links row
 */

import { Link } from "wouter";
import DiscordPresence from "@/components/DiscordPresence";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663602858071/BZbo6BfgG8qVnGwCP7Bhb8/hero-bg-HXKanv8moNhViZryyzjWuK.webp";

// Social link icons
function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.082.114 18.105.133 18.12a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}

const socialLinks = [
  { icon: <DiscordIcon />, label: "Discord", href: "#", color: "#5865f2" },
  { icon: <GithubIcon />, label: "GitHub", href: "#", color: "#e8e8e8" },
  { icon: <TwitterIcon />, label: "Twitter", href: "#", color: "#1d9bf0" },
  { icon: <TelegramIcon />, label: "Telegram", href: "#", color: "#26a5e4" },
  { icon: <GlobeIcon />, label: "Website", href: "#", color: "#00ff88" },
];

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
                // developer · designer · builder
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

            {/* Social links */}
            <div className="flex items-center gap-2 mt-4 flex-wrap">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  title={link.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.45)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = link.color;
                    (e.currentTarget as HTMLElement).style.borderColor = `${link.color}40`;
                    (e.currentTarget as HTMLElement).style.background = `${link.color}10`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                  }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Discord Presence */}
          <DiscordPresence />

          {/* Portfolio CTA */}
          <div className="mt-3">
            <Link href="/portfolio">
              <div
                className="w-full py-3 px-4 rounded-xl flex items-center justify-between cursor-pointer transition-all duration-200 group"
                style={{
                  background: "rgba(0,255,136,0.05)",
                  border: "1px dashed rgba(0,255,136,0.25)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(0,255,136,0.09)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,136,0.45)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(0,255,136,0.05)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,136,0.25)";
                }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.8rem",
                    color: "#00ff88",
                  }}
                >
                  view portfolio →
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00ff88"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </Link>
          </div>

          {/* Footer */}
          <div
            className="text-center mt-6"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
              color: "rgba(255,255,255,0.18)",
            }}
          >
            built with ♥ · inspired by guns.lol
          </div>
        </div>
      </div>
    </div>
  );
}
