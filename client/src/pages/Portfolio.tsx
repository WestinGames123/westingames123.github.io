/*
 * DESIGN: "Void Glass" Cyberpunk — Portfolio Main Page
 * Three main categories: Minecraft, Design, Development
 * Each card has a banner image, title, description, and sub-category pills
 */

import { Link } from "wouter";

const PORTFOLIO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663602858071/BZbo6BfgG8qVnGwCP7Bhb8/portfolio-bg-nmsNvVGRwVNyNTEsWBpb7k.webp";
const MINECRAFT_BANNER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663602858071/BZbo6BfgG8qVnGwCP7Bhb8/minecraft-banner-afNngK9V5tWWU2CUiFQy8Z.webp";
const DESIGN_BANNER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663602858071/BZbo6BfgG8qVnGwCP7Bhb8/design-banner-FEnxQ9MkANecvBgjQdpzKX.webp";
const DEV_BANNER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663602858071/BZbo6BfgG8qVnGwCP7Bhb8/dev-banner-2z4CFy9W6yHcayc4xZySV9.webp";

interface PortfolioCategory {
  id: string;
  title: string;
  description: string;
  banner: string;
  accentColor: string;
  categoryHref: string;
  subCategories: { label: string; href: string }[];
  icon: string;
}

const categories: PortfolioCategory[] = [
  {
    id: "minecraft",
    title: "Minecraft",
    description: "Server management, staff moderation, and plugin development for Minecraft communities.",
    banner: MINECRAFT_BANNER,
    accentColor: "#00ff88",
    icon: "⛏️",
    categoryHref: "/portfolio/minecraft",
    subCategories: [
      { label: "Management", href: "/portfolio/minecraft/management" },
      { label: "Moderation", href: "/portfolio/minecraft/moderation" },
      { label: "Development", href: "/portfolio/minecraft/development" },
    ],
  },
  {
    id: "design",
    title: "Design",
    description: "Creative visual work including Discord embed design and graphic design projects.",
    banner: DESIGN_BANNER,
    accentColor: "#00d4ff",
    icon: "🎨",
    categoryHref: "/portfolio/design",
    subCategories: [
      { label: "Embeds", href: "/portfolio/design/embeds" },
      { label: "Graphics", href: "/portfolio/design/graphics" },
    ],
  },
  {
    id: "development",
    title: "Development",
    description: "Software development projects including Minecraft plugins and Discord bots.",
    banner: DEV_BANNER,
    accentColor: "#a78bfa",
    icon: "💻",
    categoryHref: "/portfolio/development",
    subCategories: [
      { label: "Minecraft", href: "/portfolio/minecraft/development" },
      { label: "Discord Bots", href: "/portfolio/development/discord-bots" },
    ],
  },
];

export default function Portfolio() {
  return (
    <div
      className="min-h-screen relative"
      style={{ background: "#0a0a0a" }}
    >
      {/* Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${PORTFOLIO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
        }}
      />
      <div
        className="fixed inset-0 z-0"
        style={{
          background: "linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.9) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-10 page-enter">
            <div
              className="flex items-center gap-2 mb-2"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.75rem",
                color: "rgba(0,255,136,0.6)",
              }}
            >
              <span>~/</span>
              <span style={{ color: "rgba(255,255,255,0.25)" }}>portfolio</span>
            </div>
            <h1
              className="text-3xl font-bold mb-2"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}
            >
              Portfolio
            </h1>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              select a category to explore my work
            </p>
          </div>

          {/* Category grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 stagger-children">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryCard({ category }: { category: PortfolioCategory }) {
  return (
    <Link href={category.categoryHref}>
      <div
        className="portfolio-card group cursor-pointer"
        style={{ border: `1px solid rgba(255,255,255,0.07)` }}
      >
      {/* Banner image */}
      <div
        className="relative h-32 overflow-hidden"
        style={{ borderRadius: "12px 12px 0 0" }}
      >
        <img
          src={category.banner}
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ opacity: 0.7 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.95) 100%)`,
          }}
        />
        {/* Icon overlay */}
        <div className="absolute bottom-3 left-4">
          <span className="text-2xl">{category.icon}</span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-4">
        <h2
          className="text-lg font-bold mb-1"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#ffffff",
          }}
        >
          {category.title}
        </h2>
        <p
          className="text-xs leading-relaxed mb-4"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          {category.description}
        </p>
      </div>
      </div>
    </Link>
  );
}
