import PortfolioSubPage from "@/components/PortfolioSubPage";

const BANNER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663602858071/BZbo6BfgG8qVnGwCP7Bhb8/design-banner-FEnxQ9MkANecvBgjQdpzKX.webp";

const items = [
  {
    title: "Server Branding Package",
    description: "Complete visual identity for a Minecraft network including logo, banner, icon, and social media assets.",
    tags: ["Branding", "Logo", "Identity", "Minecraft"],
    status: "completed" as const,
  },
  {
    title: "Discord Server Icons",
    description: "Custom animated and static server icons for Discord communities. Various styles from minimal to detailed.",
    tags: ["Discord", "Icons", "Animated", "Design"],
    status: "active" as const,
  },
  {
    title: "YouTube Thumbnails",
    description: "High-CTR thumbnail designs for Minecraft content creators. Bold typography, contrast-heavy compositions.",
    tags: ["YouTube", "Thumbnails", "Content", "Typography"],
    status: "completed" as const,
  },
  {
    title: "GFX Banners",
    description: "Profile banners and promotional graphics for Discord users and server owners. Dark cyberpunk aesthetic.",
    tags: ["GFX", "Banners", "Profiles", "Cyberpunk"],
    status: "active" as const,
  },
  {
    title: "Store Graphics",
    description: "Product graphics and promotional banners for Minecraft store packages. Conversion-optimized layouts.",
    tags: ["Store", "Marketing", "Minecraft", "Conversion"],
    status: "completed" as const,
  },
  {
    title: "Event Posters",
    description: "Digital event posters for community tournaments and special server events. Cinematic compositions.",
    tags: ["Events", "Posters", "Tournaments", "Community"],
    status: "completed" as const,
  },
];

export default function DesignGraphics() {
  return (
    <PortfolioSubPage
      breadcrumb={[
        { label: "portfolio", href: "/portfolio" },
        { label: "design", href: "/portfolio" },
        { label: "graphics", href: "/portfolio/design/graphics" },
      ]}
      title="Design · Graphics"
      subtitle="graphic design work including branding, icons, banners, and promotional materials"
      accentColor="#00d4ff"
      bannerUrl={BANNER}
      items={items}
    />
  );
}
