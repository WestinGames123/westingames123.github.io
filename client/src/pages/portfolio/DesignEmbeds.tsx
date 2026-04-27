import PortfolioSubPage from "@/components/PortfolioSubPage";

const BANNER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663602858071/BZbo6BfgG8qVnGwCP7Bhb8/design-banner-FEnxQ9MkANecvBgjQdpzKX.webp";

const items = [
  {
    title: "Server Info Embeds",
    description: "Complete set of Discord embeds for a Minecraft server including rules, info, roles, and announcements. Clean dark theme with consistent branding.",
    tags: ["Discord", "Embeds", "Branding", "Minecraft"],
    status: "completed" as const,
  },
  {
    title: "Ticket System Embeds",
    description: "Support ticket embed system with category selection, status indicators, and staff response templates.",
    tags: ["Discord", "Tickets", "Support", "UX"],
    status: "active" as const,
  },
  {
    title: "Bot Status Embeds",
    description: "Real-time status embeds for Discord bots showing uptime, command usage, and server statistics.",
    tags: ["Discord", "Bots", "Status", "Statistics"],
    status: "completed" as const,
  },
  {
    title: "Welcome Embeds",
    description: "Animated welcome embed designs for various Discord communities with custom color schemes and iconography.",
    tags: ["Discord", "Welcome", "Animated", "Community"],
    status: "active" as const,
  },
  {
    title: "Application Forms",
    description: "Staff application embed flows with modal integration, review panels, and decision notification embeds.",
    tags: ["Discord", "Applications", "Modals", "Staff"],
    status: "completed" as const,
  },
];

export default function DesignEmbeds() {
  return (
    <PortfolioSubPage
      breadcrumb={[
        { label: "portfolio", href: "/portfolio" },
        { label: "design", href: "/portfolio" },
        { label: "embeds", href: "/portfolio/design/embeds" },
      ]}
      title="Design · Embeds"
      subtitle="Discord embed designs for servers, bots, and community management"
      accentColor="#00d4ff"
      bannerUrl={BANNER}
      items={items}
    />
  );
}
