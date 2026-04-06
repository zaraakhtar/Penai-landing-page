<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# PentAI Landing Page — Project Rules

These rules apply to every file in this project. Follow them without exception.

## Stack
- **Framework**: Next.js (App Router) — read docs before writing code
- **Styling**: Tailwind CSS v4 — configured entirely via `app/globals.css` using `@theme inline`. There is NO `tailwind.config.js`.
- **Language**: TypeScript + TSX

## Design Source of Truth
- All dimensions, colors, and spacing MUST be traced back to `c:\Users\zarak\OneDrive\Desktop\svgs\landing page svg.txt` (1440×7157px Figma canvas).
- Always re-read the relevant SVG section when implementing a new component. Do not guess coordinates.

## Color & Theme
- All color tokens live in `app/globals.css` under `@theme inline` and are mirrored in `theme.ts` as plain TypeScript constants.
- Never hard-code a hex value in a component without first checking if it exists in `theme.ts`. If it doesn't, add it there AND in `globals.css` before using it.
- Use Tailwind utility classes (`bg-brand-dark`, `text-text-muted`, etc.) wherever possible. Fall back to `style={{}}` only when Tailwind cannot express the value (e.g. exact pixel dimensions from SVG).

## Key Design Tokens (from SVG)
```
Background:        #1C1C1C
Brand purple dark: #301A3A  (gradient start)
Brand purple mid:  #442155  (gradient end @ 62%)
Brand accent:      #7938B2  (logo "A", sparkle)
Text primary:      #ECEDEE  (active links, headings)
Text muted:        #4C5155  (inactive links, captions)
Grid stroke:       #505050
Card stroke:       #3D3D3D
```

### Navbar (SVG foreignObject x=76 y=28 w=1288 h=72)
```
Top padding:      28px
Side margin:      76px each
Max-width:        1288px
Height:           72px
Backdrop blur:    blur(2px)
Logo width:       106px  (SVG: x=82→200 = 118px on 1440, scaled to 1288)
Logo height:      44px   (SVG: y=42→86)
Logo margin-right:80px   (SVG gap logo→"Home": x=200→290 = 90px)
Nav links:        left-aligned after logo, NOT centered
Active link:      #ECEDEE
Inactive link:    #4C5155
Dashboard button: w=128px h=48px radius=24px gradient #301A3A→#442155
```

## Responsiveness
- Every component MUST be responsive. Design mobile-first.
- Breakpoints follow Tailwind defaults: `sm` 640px · `md` 768px · `lg` 1024px · `xl` 1280px.
- The SVG canvas is 1440px — treat that as the `xl`/2xl baseline. Scale proportionally downward.
- Never use fixed pixel widths on layout containers without a responsive override.
- Navbar: full desktop layout at `md+`, hamburger menu below `md`.

## Utility Classes (defined in globals.css)
```
.btn-primary-gradient   CTA buttons (Dashboard, Book a demo, etc.)
.heading-gradient       Large hero text (white → #7E7E7E)
.logo-a-gradient        Logo "A" letter text gradient
.glass                  Card glassmorphism (blur 12px)
.glass-nav              Navbar backdrop (blur 2px, as per SVG spec)
.glow-purple            Ambient purple glow orb
.bg-grid-pattern        Hero section dot/grid overlay
.card-border            Feature card border (stroke #3D3D3D, radius 14px)
```

## Code Style
- No comments in component files unless explaining non-obvious logic.
- No inline block comments (`{/* comment */}`) for labelling sections — keep JSX clean.
- All SVG-derived pixel values go in `style={{}}` props, not arbitrary Tailwind values `[]`, unless the value is used more than once (then add it to the theme).
- Import order: React/Next → third-party → local components → local utils/types.

## Components
- Section components live in `components/sections/`.
- Shared UI (Navbar, Footer, etc.) lives in `components/`.
- Each section is its own file. Do not put multiple sections in `page.tsx`.
- `page.tsx` only imports and renders section components — no JSX logic there.

## Images
- Logo: `public/images/Logo.png` — render at `width={106} height={44}` with `className="h-11 w-auto object-contain"`.
- All images use `next/image` with explicit `width` and `height` props.
- Placeholder/supporter logos: use `next/image` or generate with the image generation tool — never use `<img>` tags or placeholder text.
