import PortfolioSubPage from "@/components/PortfolioSubPage";

const BANNER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663602858071/BZbo6BfgG8qVnGwCP7Bhb8/minecraft-banner-afNngK9V5tWWU2CUiFQy8Z.webp";

const items = [
  {
    title: "Custom Plugins",
    description: "I can create a simple plugin for your server. Please note, I am a beginner at plugin development.",
    tags: ["Java", "Spigot", "Paper", "Plugins"],
    status: "active" as const,
  },
  {
    title: "DeluxeMenus Configs",
    description: "I can create beautiful menus using DeluxeMenus.",
    tags: ["DeluxeMenus", "Config", "Menus"],
    status: "active" as const,
  },
  {
    title: "LuckPerms",
    description: "I can create ranks with permissions for you.",
    tags: ["LuckPerms", "Ranks", "Permissions"],
    status: "active" as const,
  },
  {
    title: "Other Configs",
    description: "I can configure almost every major plugin. Some common ones include TAB, Essentials, Vulcan, and a plethora of other plugins.",
    tags: ["TAB", "Essentials", "Vulcan", "Config"],
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
