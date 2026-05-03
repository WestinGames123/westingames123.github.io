import PortfolioSubPage from "@/components/PortfolioSubPage";

const BANNER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663602858071/BZbo6BfgG8qVnGwCP7Bhb8/minecraft-banner-afNngK9V5tWWU2CUiFQy8Z.webp";

const items = [
  {
    title: "ImpendMC (8.5K)",
    description: "Currently serving as a Helper at ImpendMC; I was previously a Junior Moderator.",
    tags: ["Junior Moderator", "8K Discord Members", "Discord"],
    status: "active" as const,
  },
  {
    title: "LeóneMC (10K)",
    description: "Served as Helper on LeóneMC, a Discord community with 10,000 members.",
    tags: ["Helper", "10K Discord Members", "Discord"],
    status: "archived" as const,
  },
  {
    title: "CTCKPVP (1K)",
    description: "Served as Junior Moderator on CTCKPVP, which reached 1,000 Discord members at its peak.",
    tags: ["Junior Moderator", "1K Discord Members", "Discord"],
    status: "archived" as const,
  },
  {
    title: "DupeKid (2K)",
    description: "Served as Moderator on DupeKid, which reached 2,000 Discord members at its peak.",
    tags: ["Moderator", "2K Discord Members", "Discord"],
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
      subtitle="Ability to understand staff documents, and preform well while moderating."
      accentColor="#00ff88"
      bannerUrl={BANNER}
      items={items}
    />
  );
}
