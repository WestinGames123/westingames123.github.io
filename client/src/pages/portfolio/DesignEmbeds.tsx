import PortfolioSubPage from "@/components/PortfolioSubPage";

const BANNER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663602858071/BZbo6BfgG8qVnGwCP7Bhb8/design-banner-FEnxQ9MkANecvBgjQdpzKX.webp";

const items: never[] = [];

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
      emptyMessage="coming soon — check back later"
      accentColor="#00d4ff"
      bannerUrl={BANNER}
      items={items}
    />
  );
}
