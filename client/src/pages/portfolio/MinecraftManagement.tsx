import PortfolioSubPage from "@/components/PortfolioSubPage";

const BANNER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663602858071/BZbo6BfgG8qVnGwCP7Bhb8/minecraft-banner-afNngK9V5tWWU2CUiFQy8Z.webp";

const items = [
  {
    title: "SkyBlock Network",
    description: "Managed a 500+ player SkyBlock server. Oversaw staff team of 12, handled player relations, and maintained server economy balance.",
    tags: ["SkyBlock", "Staff Management", "Economy", "500+ players"],
    status: "completed" as const,
  },
  {
    title: "Survival SMP",
    description: "Co-owner and manager of a whitelist survival SMP. Responsible for community events, rule enforcement, and server maintenance.",
    tags: ["Survival", "SMP", "Community", "Events"],
    status: "active" as const,
  },
  {
    title: "Prison Server",
    description: "Head Administrator for a Prison server. Managed rank progression systems, player disputes, and weekly events.",
    tags: ["Prison", "Administration", "Events", "Ranks"],
    status: "completed" as const,
  },
  {
    title: "Factions Server",
    description: "Server Manager overseeing daily operations, staff scheduling, and player experience improvements for a competitive Factions server.",
    tags: ["Factions", "PvP", "Management", "Operations"],
    status: "archived" as const,
  },
];

export default function MinecraftManagement() {
  return (
    <PortfolioSubPage
      breadcrumb={[
        { label: "portfolio", href: "/portfolio" },
        { label: "minecraft", href: "/portfolio" },
        { label: "management", href: "/portfolio/minecraft/management" },
      ]}
      title="Minecraft · Management"
      subtitle="Staff management, general management, and ownership experience."
      accentColor="#00ff88"
      bannerUrl={BANNER}
      items={items}
    />
  );
}
