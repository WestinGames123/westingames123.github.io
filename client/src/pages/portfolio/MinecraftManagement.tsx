import PortfolioSubPage from "@/components/PortfolioSubPage";

const BANNER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663602858071/BZbo6BfgG8qVnGwCP7Bhb8/minecraft-banner-afNngK9V5tWWU2CUiFQy8Z.webp";

const items = [
  {
    title: "Netherboat Network (1.5K)",
    description: "Currently managing a team of 12 highly active and professional staff members dedicated to providing a safe and positive experience for a younger player base.",
    tags: ["Staff Management", "1.5K Players", "12 Staff", "Active"],
    status: "active" as const,
  },
  {
    title: "Lifedupe7 (2K)",
    description: "Owner for the 4 years the server ran. Primarily focused on development while also serving as staff manager for most of its life, overseeing around 20 staff members alongside other duties.",
    tags: ["Owner", "2K Players", "20 Staff", "4 Years"],
    status: "archived" as const,
  },
  {
    title: "Achived (1.5K)",
    description: "Responsible for managing staff, development, and overseeing server health. Took full charge of server operations while both owners were simultaneously on LOA for approximately a month.",
    tags: ["Staff Management", "Development", "1.5K Players", "Server Health"],
    status: "archived" as const,
  },
  {
    title: "HeadDupe (300)",
    description: "Staff manager for approximately 6 months, managing a team of around 15 staff members.",
    tags: ["Staff Management", "300 Players", "15 Staff", "6 Months"],
    status: "archived" as const,
  },
  {
    title: "Lifedupe77 (800)",
    description: "Lead manager for approximately one year, overseeing a team of around 6 staff members.",
    tags: ["Lead Manager", "800 Players", "6 Staff", "1 Year"],
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
