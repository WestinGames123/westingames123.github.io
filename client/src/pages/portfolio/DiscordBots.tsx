import PortfolioSubPage from "@/components/PortfolioSubPage";

const BANNER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663602858071/BZbo6BfgG8qVnGwCP7Bhb8/dev-banner-2z4CFy9W6yHcayc4xZySV9.webp";

const items = [
  {
    title: "Moderation Bots",
    description: "I can create a custom moderation bot for your server.",
    tags: ["Moderation", "Custom", "Discord.js"],
    status: "active" as const,
  },
  {
    title: "Server Management Bots",
    description: "I can create an amazing Discord bot which manages your whole Discord server.",
    tags: ["Server Management", "Discord.js", "Automation"],
    status: "active" as const,
  },
  {
    title: "ER:LC Server Bots",
    description: "I can create a server management bot integrating with the ER:LC API.",
    tags: ["ER:LC", "API Integration", "Discord.js"],
    status: "active" as const,
  },
  {
    title: "Other Bots",
    description: "I can create a plethora of other bots.",
    tags: ["Discord.js", "Custom", "Versatile"],
    status: "active" as const,
  },
];

export default function DiscordBots() {
  return (
    <PortfolioSubPage
      breadcrumb={[
        { label: "portfolio", href: "/portfolio" },
        { label: "development", href: "/portfolio" },
        { label: "discord-bots", href: "/portfolio/development/discord-bots" },
      ]}
      title="Development · Discord Bots"
      subtitle="custom Discord bots built with Discord.js for moderation, economy, and community management"
      accentColor="#a78bfa"
      bannerUrl={BANNER}
      items={items}
    />
  );
}
