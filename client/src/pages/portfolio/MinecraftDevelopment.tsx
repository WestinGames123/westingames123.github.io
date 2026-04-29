import PortfolioSubPage from "@/components/PortfolioSubPage";

const BANNER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663602858071/BZbo6BfgG8qVnGwCP7Bhb8/minecraft-banner-afNngK9V5tWWU2CUiFQy8Z.webp";

const items = [
  {
    title: "Custom Plugins",
    description: "I can create a simple custom plugin for your Minecraft server.",
    tags: ["Java", "Spigot", "Paper", "Plugins"],
    status: "active" as const,
  },
  {
    title: "Server Setups",
    description: "I can create you an entire server setup ready for launch.",
    tags: ["Server Setup", "Spigot", "Paper", "Launch-Ready"],
    status: "active" as const,
  },
  {
    title: "Config Creation",
    description: "I can configure almost every major plugin. Some common examples include TAB, DeluxeMenus, LuckPerms, anticheats, and a plethora of others.",
    tags: ["TAB", "DeluxeMenus", "LuckPerms", "Anticheats", "Config"],
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
