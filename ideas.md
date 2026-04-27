# Design Brainstorm: Bio Portfolio Website

## Three Design Approaches

<response>
<text>

### Idea 1: "Void Glass" — Cyberpunk Glassmorphism

**Design Movement**: Cyberpunk Glassmorphism / Neo-Brutalism Dark
**Core Principles**:
1. Frosted glass cards floating over a deep void background
2. Sharp neon accent lines (green/cyan) contrasting pure black
3. Monospace typography mixed with a geometric sans-serif
4. Asymmetric card layouts with intentional negative space

**Color Philosophy**: Pure black (#0a0a0a) as the void, with neon green (#00ff88) as the primary accent — evoking hacker terminals and guns.lol's own green aesthetic. Secondary accent: electric cyan (#00d4ff). Cards use rgba(255,255,255,0.04) glass effect.

**Layout Paradigm**: Off-center profile card pinned left, Discord presence floating right. Portfolio uses a masonry-style grid with varying card heights. Navigation is a slim horizontal bar with neon underline indicators.

**Signature Elements**:
1. Scanline texture overlay on hero section (subtle CSS repeating-linear-gradient)
2. Neon glow pulse animation on status indicators
3. Dashed/dotted border accents on cards (referencing guns.lol's dashed borders)

**Interaction Philosophy**: Hover states reveal hidden neon borders; cards lift with subtle glow. Click animations use a brief "glitch" flash.

**Animation**: Entrance animations use staggered fade-up. Status pulse uses keyframe glow. Page transitions use a horizontal slide with opacity fade.

**Typography System**: 
- Display: "Space Grotesk" (bold, geometric)
- Body: "JetBrains Mono" (monospace, technical feel)
- Hierarchy: Large username in Space Grotesk 700, subtitles in JetBrains Mono 400

</text>
<probability>0.08</probability>
</response>

<response>
<text>

### Idea 2: "Obsidian Minimal" — Dark Minimalism with Grain

**Design Movement**: Dark Minimalism / Editorial Dark
**Core Principles**:
1. Near-black backgrounds with subtle warm undertones
2. Cream/off-white text for warmth, avoiding harsh pure white
3. Thin, precise borders and dividers as the primary structural element
4. Generous whitespace with tight typographic rhythm

**Color Philosophy**: Background #0d0d0f (near-black with blue undertone), text #e8e6e1 (warm cream), accent #7c3aed (deep violet) for interactive elements. Inspired by high-end editorial dark sites.

**Layout Paradigm**: Centered narrow column (max 640px) for bio, full-width for portfolio. Portfolio uses a clean list/grid hybrid.

**Signature Elements**:
1. Grain/noise texture overlay on background
2. Thin 1px horizontal rules as section dividers
3. Subtle letter-spacing on headings

**Interaction Philosophy**: Minimal hover effects — just color transitions. No heavy animations.

**Animation**: Gentle fade-in only. No sliding or bouncing.

**Typography System**:
- Display: "Playfair Display" (serif, editorial)
- Body: "DM Sans" (clean, readable)

</text>
<probability>0.06</probability>
</response>

<response>
<text>

### Idea 3: "Terminal Noir" — Retro Terminal with Modern Polish

**Design Movement**: Retro Terminal / Dark Hacker Aesthetic
**Core Principles**:
1. Deep charcoal/near-black backgrounds with green terminal glow
2. Monospace-forward typography with pixel-perfect spacing
3. Card borders use dashed lines referencing old terminal UI
4. Particle/star background for depth

**Color Philosophy**: Background #080808, primary green #39ff14 (neon green), secondary #1a1a2e (dark navy for cards). Text in #c8ffc8 (soft green-white). Accent highlights in #ff6b35 (orange-red for warnings/tags).

**Layout Paradigm**: Left-aligned profile section with a vertical timeline feel. Portfolio uses a tabbed interface with terminal-style tab headers.

**Signature Elements**:
1. Blinking cursor on username
2. ">" prompt prefix on interactive elements
3. ASCII-art style decorative borders

**Interaction Philosophy**: Typewriter effect on page load. Hover states show terminal-style highlights.

**Animation**: Typewriter text reveal on load. Scanline flicker on hover.

**Typography System**:
- All text: "JetBrains Mono" or "Fira Code"
- Size hierarchy via weight and color, not font family changes

</text>
<probability>0.07</probability>
</response>

---

## Selected Design: **Idea 1 — "Void Glass" Cyberpunk Glassmorphism**

**Rationale**: This most closely matches guns.lol's aesthetic — deep black backgrounds, neon green accents, dashed borders on cards, and a glassmorphism card style. It's visually striking while remaining functional and modern.
