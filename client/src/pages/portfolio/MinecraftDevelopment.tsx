import PortfolioSubPage from "@/components/PortfolioSubPage";

const BANNER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663602858071/BZbo6BfgG8qVnGwCP7Bhb8/minecraft-banner-afNngK9V5tWWU2CUiFQy8Z.webp";

const items = [
  {
    title: "EcoSkyBlock Plugin",
    description: "Custom SkyBlock plugin with island management, economy integration, and leaderboard system. Built with Spigot API in Java.",
    tags: ["Java", "Spigot", "SkyBlock", "Economy"],
    status: "completed" as const,
  },
  {
    title: "StaffUtils",
    description: "Staff management plugin featuring vanish, freeze, inspect, and punishment logging. Used by 3+ servers.",
    tags: ["Java", "Paper", "Staff Tools", "Logging"],
    status: "active" as const,
  },
  {
    title: "CustomEnchants",
    description: "Custom enchantments plugin with 30+ unique enchants, anvil integration, and configurable drop rates for HCF servers.",
    tags: ["Java", "Enchants", "HCF", "Custom"],
    status: "completed" as const,
  },
  {
    title: "ArenaManager",
    description: "Dynamic arena creation and management system for PvP minigames. Supports multiple game modes and auto-reset.",
    tags: ["Java", "PvP", "Minigames", "Arenas"],
    status: "active" as const,
  },
];

export default function MinecraftDevelopment() {
  return (
    <PortfolioSubPage
      breadcrumb={[
        { label: "portfolio", href: "/portfolio" },
        { label: "minecraft", href: "/portfolio" },
        { label: "development", href: "/portfolio/minecraft/development" },
      ]}
      title="Minecraft · Development"
      subtitle="Plugin development, config development, and general server development."
      accentColor="#00ff88"
      bannerUrl={BANNER}
      items={items}
    />
  );
}
