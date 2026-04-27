import PortfolioSubPage from "@/components/PortfolioSubPage";

const BANNER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663602858071/BZbo6BfgG8qVnGwCP7Bhb8/dev-banner-2z4CFy9W6yHcayc4xZySV9.webp";

const items = [
  {
    title: "ModBot",
    description: "Full-featured moderation bot with auto-mod, logging, warn/mute/ban commands, and appeal system. Used in 50+ servers.",
    tags: ["Discord.js", "Moderation", "Auto-Mod", "Logging"],
    status: "active" as const,
  },
  {
    title: "TicketBot",
    description: "Advanced ticket management bot with categories, staff assignment, transcript generation, and analytics dashboard.",
    tags: ["Discord.js", "Tickets", "Transcripts", "Analytics"],
    status: "active" as const,
  },
  {
    title: "EconomyBot",
    description: "Economy simulation bot with currency, shop, gambling, leaderboards, and daily rewards. MongoDB backend.",
    tags: ["Discord.js", "Economy", "MongoDB", "Gambling"],
    status: "completed" as const,
  },
  {
    title: "StatusBot",
    description: "Server status monitoring bot that tracks Minecraft server uptime and posts real-time updates to Discord channels.",
    tags: ["Discord.js", "Minecraft", "Status", "Monitoring"],
    status: "active" as const,
  },
  {
    title: "ApplicationBot",
    description: "Staff application bot using Discord modals and select menus. Includes review panel, voting, and notification system.",
    tags: ["Discord.js", "Applications", "Modals", "Staff"],
    status: "completed" as const,
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
