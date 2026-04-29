/*
 * DESIGN: "Void Glass" Cyberpunk — Portfolio Sub-Page Layout
 * Shared layout for all portfolio sub-pages
 * Includes breadcrumb, section header, and work items grid
 */

import { Link } from "wouter";

export interface WorkItem {
  title: string;
  description: string;
  tags?: string[];
  status?: "active" | "completed" | "archived";
  link?: string;
}

interface PortfolioSubPageProps {
  breadcrumb: { label: string; href: string }[];
  title: string;
  subtitle: string;
  accentColor: string;
  bannerUrl: string;
  items: WorkItem[];
  emptyMessage?: string;
}

function StatusBadge({ status }: { status: WorkItem["status"] }) {
  if (!status) return null;
  const config = {
    active: { color: "#00ff88", label: "active" },
    completed: { color: "#00d4ff", label: "completed" },
    archived: { color: "#747f8d", label: "archived" },
  };
  const c = config[status];
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs"
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.65rem",
        background: `${c.color}12`,
        border: `1px solid ${c.color}30`,
        color: c.color,
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: c.color, boxShadow: `0 0 4px ${c.color}` }}
      />
      {c.label}
    </span>
  );
}

export default function PortfolioSubPage({
  breadcrumb,
  title,
  subtitle,
  accentColor,
  bannerUrl,
  items,
  emptyMessage,
}: PortfolioSubPageProps) {
  return (
    <div className="min-h-screen" style={{ background: "#0a0a0a" }}>
      {/* Banner */}
      <div
        className="relative h-48 sm:h-56 overflow-hidden"
        style={{ marginTop: "56px" }}
      >
        <img
          src={bannerUrl}
          alt={title}
          className="w-full h-full object-cover"
          style={{ opacity: 0.5 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.98) 100%)`,
          }}
        />
        {/* Accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(to right, transparent, ${accentColor}40, transparent)` }}
        />

        {/* Title overlay */}
        <div className="absolute bottom-6 left-0 right-0 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumb */}
            <div
              className="flex items-center gap-1.5 mb-2 flex-wrap"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                color: "rgba(255,255,255,0.3)",
              }}
            >
              <Link href="/">
                <span className="hover:text-white transition-colors cursor-pointer">~</span>
              </Link>
              {breadcrumb.map((crumb, i) => (
                <span key={`breadcrumb-${i}`} className="flex items-center gap-1.5">
                  <span>/</span>
                  {i < breadcrumb.length - 1 ? (
                    <Link href={crumb.href}>
                      <span className="hover:text-white transition-colors cursor-pointer">{crumb.label}</span>
                    </Link>
                  ) : (
                    <span style={{ color: accentColor }}>{crumb.label}</span>
                  )}
                </span>
              ))}
            </div>
            <h1
              className="text-2xl sm:text-3xl font-bold"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}
            >
              {title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Subtitle */}
          <p
            className="mb-8"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            {subtitle}
          </p>

          {/* Work items */}
          {items.length === 0 ? (
            <div
              className="text-center py-16"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.25)",
              }}
            >
              <div className="text-4xl mb-4">📭</div>
              {emptyMessage || "no items yet — check back soon"}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
              {items.map((item, i) => (
                <WorkItemCard key={i} item={item} accentColor={accentColor} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function WorkItemCard({ item, accentColor }: { item: WorkItem; accentColor: string }) {
  return (
    <div className="work-card group">
      <div className="flex items-start justify-between mb-2">
        <h3
          className="font-semibold text-sm"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "rgba(255,255,255,0.85)",
          }}
        >
          {item.title}
        </h3>
        {item.status && <StatusBadge status={item.status} />}
      </div>
      <p
        className="text-xs leading-relaxed mb-3"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: "rgba(255,255,255,0.4)",
        }}
      >
        {item.description}
      </p>

      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center gap-1 text-xs transition-colors"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "rgba(255,255,255,0.3)",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = accentColor; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)"; }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
          view project
        </a>
      )}
    </div>
  );
}
