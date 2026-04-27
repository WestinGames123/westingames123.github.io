/*
 * DESIGN: "Void Glass" Cyberpunk — Navbar
 * - Frosted glass background, fixed at top
 * - Space Grotesk for brand, JetBrains Mono for nav links
 * - Neon green accent on active/hover states
 * - Dashed underline on active link
 */

import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "bio" },
  { href: "/portfolio", label: "portfolio" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <nav className="navbar fixed top-0 left-0 right-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Brand */}
          <Link href="/">
            <span
              className="font-bold text-lg tracking-tight cursor-pointer"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#00ff88",
                textShadow: "0 0 12px rgba(0,255,136,0.4)",
              }}
            >
              ~/portfolio
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className="px-4 py-1.5 rounded-md text-sm transition-all duration-200 cursor-pointer"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.8rem",
                    color: isActive(link.href)
                      ? "#00ff88"
                      : "rgba(255,255,255,0.55)",
                    background: isActive(link.href)
                      ? "rgba(0,255,136,0.08)"
                      : "transparent",
                    borderBottom: isActive(link.href)
                      ? "1px dashed rgba(0,255,136,0.5)"
                      : "1px dashed transparent",
                  }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden p-2 rounded-md"
            style={{ color: "rgba(255,255,255,0.6)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="sm:hidden pb-3 flex flex-col gap-1"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className="block px-3 py-2 rounded-md text-sm cursor-pointer"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.8rem",
                    color: isActive(link.href)
                      ? "#00ff88"
                      : "rgba(255,255,255,0.55)",
                    background: isActive(link.href)
                      ? "rgba(0,255,136,0.08)"
                      : "transparent",
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
