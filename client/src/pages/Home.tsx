/*
 * DESIGN: "Void Glass" Cyberpunk — Bio Page
 * Inspired by guns.lol: centered profile card with Discord presence integration,
 * dashed borders, dark void background, neon green accents, music player with auto-play
 */

import { useLanyard, getAvatarUrl, getStatusColor, getStatusLabel } from "@/hooks/useLanyard";
import { useEffect, useRef, useState } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663602858071/BZbo6BfgG8qVnGwCP7Bhb8/hero-bg-HXKanv8moNhViZryyzjWuK.webp";
const DISCORD_USER_ID = "851276979318554635";

function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Auto-play when component mounts
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        // Autoplay prevented by browser, user must interact first
      });
      setIsPlaying(true);
    }
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="mt-3 dashed-card p-4">
      <div className="flex items-center gap-3">
        {/* Play/Pause button */}
        <button
          onClick={togglePlayPause}
          className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200"
          style={{
            background: "rgba(0,255,136,0.12)",
            border: "1px solid rgba(0,255,136,0.3)",
            cursor: "pointer",
            padding: 0,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(0,255,136,0.2)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 0 12px rgba(0,255,136,0.3)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(0,255,136,0.12)";
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
          }}
        >
          {isPlaying ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#00ff88">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#00ff88">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
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
        {/* Hidden audio element */}
        <audio
          ref={audioRef}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source
            src="/manus-storage/YTDown_YouTube_Lil-Peep-_-XXXTENTACION-Falling-Down_Media_-jRKsiAOAA8_009_128k_a04b9259.mp3"
            type="audio/mpeg"
          />
        </audio>
      </div>
    </div>
  );
}

export default function Home() {
  const { data, loading } = useLanyard(DISCORD_USER_ID);

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
          {/* Profile card with Discord presence */}
          <div className="glass-card p-5 mb-3">
            {loading ? (
              // Loading skeleton
              <div className="animate-pulse">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-xl" style={{ background: "rgba(255,255,255,0.06)" }} />
                  <div className="w-8 h-8 rounded" style={{ background: "rgba(255,255,255,0.06)" }} />
                </div>
                <div className="h-4 rounded mb-2" style={{ background: "rgba(255,255,255,0.06)", width: "60%" }} />
                <div className="h-3 rounded" style={{ background: "rgba(255,255,255,0.04)", width: "40%" }} />
              </div>
            ) : data && data.discord_user ? (
              // Discord presence data
              <>
                {/* Avatar + views row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="relative">
                    <img
                      src={getAvatarUrl(data.discord_user)}
                      alt={data.discord_user.global_name || data.discord_user.username}
                      className="w-16 h-16 rounded-xl"
                      style={{
                        border: "2px solid rgba(0,255,136,0.25)",
                        boxShadow: "0 0 20px rgba(0,255,136,0.1)",
                      }}
                    />
                    {/* Status dot */}
                    <div
                      className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full"
                      style={{
                        background: getStatusColor(data.discord_status),
                        border: "2px solid #0a0a0a",
                        boxShadow: `0 0 10px ${getStatusColor(data.discord_status)}`,
                      }}
                    />
                  </div>

                </div>

                {/* Username + status */}
                <div className="mb-1">
                  <div className="flex items-center gap-2">
                    <h1
                      className="text-xl font-bold"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        color: "#ffffff",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {data.discord_user.global_name || data.discord_user.username}
                    </h1>
                    {/* Discord badge */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#5865f2">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.082.114 18.105.133 18.12a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                    </svg>
                  </div>
                  <p
                    className="text-xs mt-0.5"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    developer · designer · staff
                  </p>
                  {/* Status label */}
                  <div
                    className="flex items-center gap-1.5 mt-1"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{
                        background: getStatusColor(data.discord_status),
                        boxShadow: `0 0 6px ${getStatusColor(data.discord_status)}`,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.7rem",
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      {getStatusLabel(data.discord_status)}
                    </span>
                  </div>
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
                  Hey, you can call me Westin! I am a passionate individual who enjoys having a good time.
                </p>
              </>
            ) : (
              // Fallback when no data
              <>
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
                      <div
                        className="w-full h-full flex items-center justify-center text-2xl"
                        style={{ background: "rgba(0,255,136,0.08)" }}
                      >
                        👤
                      </div>
                    </div>
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
                  Hey, you can call me Westin! I am a passionate individual who enjoys having a good time.
                </p>
              </>
            )}
          </div>

          {/* Music Player - Auto-play with integrated controls */}
          <MusicPlayer />
        </div>
      </div>
    </div>
  );
}
