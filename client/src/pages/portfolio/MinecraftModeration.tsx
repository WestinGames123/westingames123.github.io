import PortfolioSubPage from "@/components/PortfolioSubPage";

const BANNER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663602858071/BZbo6BfgG8qVnGwCP7Bhb8/minecraft-banner-afNngK9V5tWWU2CUiFQy8Z.webp";

const items = [
  {
    title: "HCF Network",
    description: "Senior Moderator on a Hardcore Factions network. Handled ban appeals, cheat detection, and player reports with a 24-hour response time.",
    tags: ["HCF", "Anti-Cheat", "Ban Appeals", "Reports"],
    status: "completed" as const,
  },
  {
    title: "Minigames Hub",
    description: "Moderation team lead for a minigames server. Trained new moderators, created moderation guidelines, and handled escalated cases.",
    tags: ["Minigames", "Team Lead", "Training", "Guidelines"],
    status: "active" as const,
  },
  {
    title: "Roleplay Server",
    description: "Head Moderator for a roleplay community. Enforced lore-consistent rules, managed in-character disputes, and maintained server atmosphere.",
    tags: ["Roleplay", "Community", "Lore", "Disputes"],
    status: "completed" as const,
  },
  {
    title: "Bedwars Network",
    description: "Moderator specializing in anti-cheat enforcement for a competitive Bedwars network. Reviewed screen-share evidence and issued punishments.",
    tags: ["Bedwars", "Anti-Cheat", "Screen-Share", "Competitive"],
    status: "archived" as const,
  },
];

export default function MinecraftModeration() {
  return (
    <PortfolioSubPage
      breadcrumb={[
        { label: "portfolio", href: "/portfolio" },
        { label: "minecraft", href: "/portfolio" },
        { label: "moderation", href: "/portfolio/minecraft/moderation" },
      ]}
      title="Minecraft · Moderation"
      subtitle="moderation experience across competitive and community-focused Minecraft servers"
      accentColor="#00ff88"
      bannerUrl={BANNER}
      items={items}
    />
  );
}
