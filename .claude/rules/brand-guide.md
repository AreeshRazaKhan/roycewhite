# Royce White for Senate — Brand Guide (v2.1, engineering edition)

Source of truth for every visual decision on this site. When styling, building components, or writing CSS/markup, follow these rules. Source document: `C:\Users\Dev\Documents\brand-guide-v1.html`. When this file and the HTML disagree, the HTML wins; update this file to match.

**Positioning:** Fearless, authentic populist leader — modern editorial, rooted in God, Family, Country. **"The People Are Coming!"**
**Visual DNA:** Contemporary editorial (asymmetric heroes, marquee type, bento grids) + populist fire + torch mark (red flame / blue handle) as chromatic anchor.

---

## 1. Design Principles (non-negotiable)

1. **Populist Gravitas** — heavy serif display, deep navy, patriotic red. Authority that feels earned.
2. **Deliberate Asymmetry** — 7/5 and 8/4 splits, oversized type bleeding past sections, unequal bento spans. Avoid perfect halves.
3. **Torch as Signal** — torch mark anchors the brand; used as icon, watermark, and motion element. Never overused.
4. **Accessible by Default** — WCAG AA minimum on every pair; 16px body floor; 1.65 line-height.
5. **Editorial, Not Political** — numbered sections (`/001`), bento grids, marquee type, pull-quotes. Never typical campaign templates.
6. **Rooted in Minnesota** — real communities and landscape. No stock handshakes, generic flags, or eagle graphics.

---

## 2. Color System

### Tokens (CSS custom properties)

```css
:root{
  /* PRIMARY */
  --patriot:#D42027;       --patriot-dark:#A8181E;   --patriot-glow:rgba(212,32,39,.12);
  /* SECONDARY */
  --liberty:#29ABE2;       --liberty-light:#5EC4ED;  --liberty-pale:rgba(41,171,226,.10);
  /* NAVY (Authority) */
  --navy-900:#0A1628;      --navy-800:#0F1D34;       --navy-700:#162840;  --navy-600:#1E3550;
  /* WARM NEUTRALS */
  --parchment:#F5F0EB;     --stone-100:#EDE8E0;      --stone-200:#DBD5CB;
  --stone-400:#9C968A;     --stone-600:#6B7280;      --ink:#141722;       --moonlight:#EDEBE3;
  /* ACCENT */
  --gold:#C8A44E;          --gold-light:#E0C978;
  /* UTILITY */
  --white:#FFFFFF;         --red-error:#B3261E;      --success:#2D7D46;
  --hairline:rgba(212,32,39,.18);
}
```

### Usage ratio (enforce across pages)

| Color | Ratio | Role |
|---|---|---|
| Authority Navy | **55%** | Hero backgrounds, headers, primary text on light |
| Parchment | **20%** | Page background, light sections |
| Patriot Red | **15%** | CTAs, marquees, headline accents — **never** full-page background |
| Liberty Blue | **8%** | Links, focus rings, secondary accent, torch handle |
| Heritage Gold | **2%** | Numbered eyebrows / prestige labels only |

### Color rules

- Lead with navy; red is the fire, not the base.
- Blue is reserved for **trust** elements: links, focus rings, torch handle.
- Gold **only** for numbered eyebrows (`/001 — …`) and prestige labels.
- Red body text is forbidden — red is for CTAs, accent runs, and headline italics (on light backgrounds).
- `--patriot-glow` (12% red) is for icon backgrounds, tag fills, subtle emphasis on light.
- `--liberty-pale` (10% blue) is for card borders on dark, quote-card backgrounds.

### Cover/hero gradients

```css
/* Cover rule (thin gradient line under eyebrow) */
background: linear-gradient(90deg, var(--patriot), var(--liberty));

/* Cover watermark text (giant faded brand name behind title) */
color: rgba(212, 32, 39, 0.03);
```

---

## 3. Typography

### Families

```css
--font-display:'Playfair Display', Georgia, serif;   /* headlines */
--font-body:'Inter', -apple-system, sans-serif;       /* body */
--font-accent:'Space Grotesk', sans-serif;            /* labels, eyebrows, nav, buttons */
--font-mono:'JetBrains Mono', monospace;              /* code, meta numerals */
```

Load from Google Fonts with the weights actually used: Playfair 400/500/600/700/800/900 (+ italic 400/700), Inter 300/400/500/600/700/800, Space Grotesk 400/500/600/700, JetBrains Mono 400/500.

### Type scale (with fluid clamp() formulas)

| Level | Font / Weight | Size | LH | Tracking |
|---|---|---|---|---|
| Cover Title | Playfair 900 | `clamp(80px, 11vw, 180px)` | 0.9 | -0.02em |
| Display Hero | Playfair 900 | `clamp(3rem, 5.5vw, 5.5rem)` | 1.05 | -0.02em |
| H1 | Playfair 900 | 68px (60px mobile) | 1.0 | -0.02em |
| H2 Section | Playfair 900 | `clamp(2.5rem, 4vw, 4rem)` | 1.1 | -0.02em |
| H3 Card | Playfair 700 | 1.8rem (~29px) | 1.25 | normal |
| H4 Sub-card | Playfair 800 | 22px | 1.4 | normal |
| Section Label | Space Grotesk 600 | 13px · **0.2em** · UPPER | 1.2 | 0.2em |
| Body Large | Inter 300 | 17px | 1.8 | normal |
| Body | Inter 400 | **16px (floor)** | 1.65 | normal |
| Caption | Space Grotesk 500 | 12px · UPPER | 1.5 | 0.12em |
| Stat Numeral | Playfair 900 | 5rem (100px) | 0.9 | -0.04em |
| Watermark (decorative) | Playfair 900 | 160–360px | 0.8–1.0 | -0.04em |

### Typography rules

- **Pairing rule:** Playfair Display never appears on the same line as Space Grotesk. A Space Grotesk eyebrow sits *above* a Playfair headline with deliberate vertical spacing (Zeyna-inspired).
- **Italics in headlines** use Patriot Red on light, Liberty Blue on dark (e.g., `Design <em>Principles</em>`).
- **Body never drops below 16px.** Captions at 12–13px only for metadata (labels, footers, photo credits).
- Letter-spacing: `-.02em` on display headlines, `-.04em` on stat numerals and watermarks, `.2em` on section labels, `.12em` on captions, `.18em` on nav wordmark, `.14em` on form labels.

### Section label pattern (with leading rule)

```css
.section-label {
  font-family: var(--font-accent);
  font-weight: 600; font-size: 13px;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--patriot);                    /* gold on numbered eyebrows, patriot elsewhere */
  display: inline-flex; align-items: center; gap: 14px;
}
.section-label::before {
  content: ""; width: 42px; height: 1px; background: currentColor;
}
```

On **numbered eyebrows**, color is background-dependent because gold fails AA on parchment (2.09:1):

| Background | Eyebrow color | Ratio |
|---|---|---|
| Navy (any) | `--gold` | 7.66:1 AAA |
| Parchment / white | `--patriot` | 4.60:1 AA |

On non-numbered eyebrows use Patriot Red on light, Liberty Blue on dark.

### Giant decorative watermarks

Oversized Playfair numerals/names float behind sections at very low opacity — editorial signature.

```css
.section-number { /* decorative /001, /002 etc */
  position: absolute; top: 70px; right: 90px;
  font-family: var(--font-display); font-weight: 900;
  font-size: 160px; line-height: 1;
  color: rgba(10, 22, 40, 0.05);     /* 0.06 red on dark sections */
  letter-spacing: -0.04em; pointer-events: none;
}
```

---

## 4. Logo & Torch Mark

- Lockup = torch SVG (red flame, blue handle) + "ROYCE WHITE" in Space Grotesk 700 (tracking `0.18em`) + "For U.S. Senate" tag.
- **Clear space** around the logo = height of the flame on all sides.
- **Minimum size:** digital — torch 32px, lockup 140px; print — torch 0.5", lockup 1.25". Below these, use torch-only.
- **Four approved variants:** on Navy (primary), on Parchment, on Patriot Red (flame→white), Mono/Print (ink).
- **Never:** recolor flame/handle independently, rotate, stretch, outline, or add drop shadows.

### Torch SVG (verbatim — reuse this markup)

```xml
<svg viewBox="0 0 200 350" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M100 20 C90 60,70 80,75 120 C78 140,90 150,100 155 C110 150,122 140,125 120 C130 80,110 60,100 20Z" fill="#D42027"/>
  <path d="M100 50 C95 75,82 90,85 120 C87 135,95 145,100 148 C105 145,113 135,115 120 C118 90,105 75,100 50Z" fill="#D42027" opacity=".6"/>
  <rect x="85" y="160" width="30" height="12" rx="3" fill="#29ABE2"/>
  <rect x="88" y="175" width="24" height="8" rx="2" fill="#29ABE2"/>
  <polygon points="92,185 108,185 104,260 96,260" fill="#29ABE2"/>
</svg>
```

Flame: two-layer red (outer 100%, inner 60% opacity) for depth. Handle: Liberty Blue in three sections (upper rx=3 rect, middle rx=2 rect, shaft polygon). Canvas 200 × 350. Default display widths: 28px (nav), 60px (logo specimen), 120px (cover), 260–280px (hero).

---

## 5. Layout & Spacing

### 8px spacing scale

| Token | Value | Usage |
|---|---|---|
| XXS | 4px | Inline icon gaps |
| XS | 8px | Tight stacks, chip padding |
| SM | 16px | Element gaps inside cards |
| MD | 24px | Grid gutter, bento gaps |
| LG | 48px | Card interior, nav padding |
| XL | 80px | Sub-section rhythm |
| 2XL | 120px | Section top/bottom padding (desktop) |
| 3XL | 160px | Hero padding (desktop) |

### Grid

- 12 columns · 24px gutter · **1400px max-width**.
- Default splits: **7/5** and **8/4**. Bento uses span-8/4 and span-5/3 combinations.
- Avoid perfect halves.
- Section padding: **120px desktop / 80px mobile**.
- **Cards:** 4–20px border-radius (4px for issue cards, 20px for marquee cards). **Buttons:** 0 border-radius (use clip-path instead).

### Bento reference composition (7/5 hero)

```css
.bento-75 {
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: 24px;
  min-height: 320px;
}
.bento-75 .big {          /* left anchor card */
  background: var(--navy-900); color: var(--moonlight);
  padding: 40px; border-radius: 4px;
  display: flex; flex-direction: column; justify-content: space-between;
}
.bento-75 .stack {        /* right column of two stacked cards */
  display: flex; flex-direction: column; gap: 24px;
}
.bento-75 .stack > div {
  flex: 1; padding: 26px; border-radius: 4px;
  display: flex; align-items: flex-end;
  font-family: var(--font-accent); font-weight: 600;
  font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
}
```

Preferred bento span patterns (12-col): **8+4**, **7+5**, **5+3+4**, **4+4+4** (equal only for terminal rows). Editorial rhythm: always leave one visibly "off" card (larger or taller) to break perfect symmetry.

### Page shell / responsive

Max-width `1200px` for editorial page shells (brand-guide deck), `1400px` for the live site. Outer padding `90px 90px 120px` desktop, `50px 28px 90px` at `≤760px`. Mobile breakpoint lowers hero font-size to ~42px, collapses bento to single-column.

---

## 6. UI Components

### Buttons (5 variants)

Every button uses the signature angled clip-path — **no border-radius**.

```css
clip-path: polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%);
padding: 16px 32px;
font: 600 12px/1 var(--font-accent);
letter-spacing: 0.12em; text-transform: uppercase;
border: 1.5px solid currentColor; transition: all 150ms ease-out;
```

| Variant | Background | Text | Border | Use |
|---|---|---|---|---|
| **Primary** | `--patriot` | white | `--patriot` | Main CTA ("Join the Movement →") |
| **Blue** | `--liberty` | `--navy-900` | `--liberty` | Volunteer / secondary |
| **Navy** | `--navy-900` | white | `--navy-900` | Tertiary on light bg |
| **Ghost** | transparent | `--navy-900` | `--navy-900` | Read More / inline (light bg) |
| **Ghost Light** | transparent | `--moonlight` | `--moonlight` | Read More / inline (dark bg) |
| **Gold** | `--gold` | `--navy-900` | `--gold` | Donate / prestige only |

Hover: shift background to `-dark` pair (e.g., `--patriot` → `--patriot-dark`), 150ms.

### Navigation

- **Dark variant (default):** navy bg, moonlight links, primary red CTA, 22–28px vertical padding.
- **Light variant:** parchment bg with `stone-200` border, navy links, navy CTA.
- Torch icon 28px next to "ROYCE WHITE" in Space Grotesk 700, tracking `0.18em`.
- Link type: Space Grotesk 500 / 12px / `.12em` / UPPER / moonlight (dark) or navy (light).
- On scroll (`scrollY > 80`): background opacity increases, 8–12px backdrop blur applied, vertical padding reduces from ~24px → 14px, 300ms transition.

### Issue cards (numbered)

```css
.feat-card {
  background: var(--white); border: 1px solid var(--stone-200);
  border-radius: 4px; padding: 34px; position: relative;
}
.feat-card::before {
  content: ""; position: absolute; top: 0; left: 0;
  width: 48px; height: 3px; background: var(--patriot);
}
.feat-card .icon {
  width: 44px; height: 44px;
  border: 1.5px solid var(--navy-900); border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 20px;
  font: 600 12px/1 var(--font-accent);
  letter-spacing: 0.1em; color: var(--patriot);
}
.feat-card h4 {
  font-family: var(--font-display); font-weight: 800;
  font-size: 22px; color: var(--navy-900); margin-bottom: 10px;
}
.feat-card p { font-size: 14px; color: var(--stone-600); line-height: 1.6; }
```

Grid: 3-column, 20px gap. Numbering: `/01`, `/02`, `/03`. On hover (optional editorial invert): background fills to navy, text inverts to moonlight — 300ms ease-out.

### Forms

```css
.form-card {
  background: var(--white); border: 1px solid var(--stone-200);
  padding: 26px; border-radius: 4px;
  display: grid; gap: 14px; max-width: 460px;
}
.form-card label {
  font: 600 11px/1 var(--font-accent);
  letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--patriot);
}
.form-card input {
  padding: 14px 16px; border: 1px solid var(--stone-200);
  background: var(--parchment);
  font: 400 15px/1 var(--font-body); color: var(--ink);
  border-radius: 4px;
}
.form-card input:focus-visible {
  outline: 2px solid var(--liberty); outline-offset: 2px;
}
```

### Note / call-out box

```css
.note-box {
  padding: 26px 32px; background: var(--navy-900); color: var(--moonlight);
  border-left: 4px solid var(--patriot); border-radius: 4px;
  font-size: 15px; line-height: 1.65; max-width: 820px;
}
.note-box strong { color: var(--liberty); font-weight: 700; }
```

### Pull-quote / testimonial

Pull-quotes use Playfair Display 700 italic, size 28–40px, leading 1.25, with a small Space Grotesk attribution underneath (`— Royce White` style). On dark backgrounds, the open-quote glyph renders in `--liberty` at 120px, top-left, opacity 0.25.

### Contrast chip

```css
.contrast-chip {
  padding: 34px; border-radius: 4px; border: 1px solid var(--stone-200);
}
.contrast-chip .ratio-num {
  font-family: var(--font-display); font-weight: 900; font-size: 40px; line-height: 1;
}
```

### Page footer meta strip

```css
.page-footer {
  display: flex; justify-content: space-between;
  font: 400 12px/1 var(--font-accent);
  letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--stone-400);
  padding-top: 22px; border-top: 1px solid var(--stone-200);
}
.page.dark .page-footer {
  color: rgba(237, 235, 227, 0.4);
  border-top-color: rgba(212, 32, 39, 0.15);
}
```

---

## 7. Accessibility (WCAG 2.2 AA minimum, AAA on primaries)

Verified contrast pairs:

| Pair | Ratio | Level |
|---|---|---|
| Parchment on Navy | 15.2:1 | AAA |
| White on Navy | 17.4:1 | AAA |
| Ink on Parchment | 16.2:1 | AAA |
| White on Patriot Red | 5.9:1 | AA (body & CTAs) |
| Navy on Liberty Blue | 6.8:1 | AA |
| Parchment on Stone 600 | 4.8:1 | AA |

### Required

- 16px body floor; 1.65 line-height body, 1.05 display.
- Interactive targets ≥ 44×44px on touch.
- **Visible focus:** 2px Liberty Blue outline on every interactive element, 2px offset, plus a 6px navy halo via `box-shadow: 0 0 0 6px rgba(10,22,40,0.9)` so the indicator hits ≥3:1 non-text contrast on parchment, white, and all tone cards (WCAG 1.4.11 and 2.4.13). Liberty vs the halo stays at 5.38:1 — the blue stroke remains legible.
- Color is never the sole signal — always paired with text or icon.
- Alt text on meaningful images; empty alt on decorative torch marks.
- Semantic landmarks: `<header> <nav> <main> <section> <footer>`.
- Skip-to-content link = first focusable element.
- Forms: labels associated, errors via `aria-live`, hints visible.
- Test: axe-core, NVDA (Windows), VoiceOver (macOS/iOS), keyboard-only.

### Reduced motion (`prefers-reduced-motion: reduce`)

- All transforms instant (duration 0ms).
- Marquee pauses; floating cards freeze; custom cursor hides.
- Only opacity fades remain. Loader skips animation.

---

## 8. Photography & Imagery

### Do

- Natural light — rally energy or golden hour.
- Real Minnesota locations.
- Duotone (navy × red) on archival / historical imagery.
- Documentary framing — real moments over staged poses.
- Leave negative space for typographic overlays on hero images.
- Campaign trail: crowd energy, handshakes, town halls.

### Don't

- Stock handshakes, waving flag overlays, eagle graphics.
- Heavy filters / over-saturation.
- Tight face crops (leave compositional breathing room).
- HDR, aggressive clarity or sharpening.
- Mix duotone and full-color in the same grid or section.
- Drop shadows, vignettes, text baked into photos.

### Duotone & tone treatments

```css
/* Placeholder tone cards (used when photography is unavailable) */
.photo-card.tone-navy { background: linear-gradient(135deg, var(--navy-700), var(--navy-900)); }
.photo-card.tone-red  { background: linear-gradient(135deg, #2a1015, var(--navy-900)); }
.photo-card.tone-blue { background: linear-gradient(135deg, #0a2a3d, var(--navy-900)); }

/* Duotone overlay applied to real photos */
.photo-card.duotone::after {
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(10, 22, 40, 0.8), rgba(212, 32, 39, 0.25));
  mix-blend-mode: multiply;
}

/* Subtle 45° repeating red line pattern over photo cards (4% opacity) */
.photo-card::before {
  content: ""; position: absolute; inset: 0;
  background: repeating-linear-gradient(45deg,
    rgba(212, 32, 39, 0.04) 0 10px,
    transparent 10px 20px);
}
```

Aspect ratio for editorial portrait cards: **4/5**. Padding 24px. Copy overlay uses `var(--moonlight)`.

---

## 9. Signature Design Patterns (use sparingly)

### Pattern 01 — Asymmetric Corner Brackets

```css
.brackets .tl { position:absolute; top:20px;  left:20px;  width:60px; height:60px; border-top:2px solid var(--patriot); border-left:2px solid var(--patriot); }
.brackets .br { position:absolute; bottom:20px; right:20px; width:60px; height:60px; border-bottom:2px solid var(--liberty); border-right:2px solid var(--liberty); }
.brackets .tr-dot { position:absolute; top:24px;   right:24px; width:6px; height:6px; background:var(--patriot); border-radius:50%; }
.brackets .bl-dot { position:absolute; bottom:24px; left:24px;  width:6px; height:6px; background:var(--liberty); border-radius:50%; }
```

Two diagonal corners only (TL red + BR blue), with opposing dots. Hero sections, quote blocks, CTA containers, featured bento cards. Never all four corners. Cover-page variant scales brackets to 140×140px with 3px border.

### Pattern 02 — Diagonal Section Slice

```css
/* Top edge slices into parchment above; bottom edge slices into parchment below */
.slice-top    { position:absolute; top:0;    left:0; right:0; height:80px; background:var(--parchment); clip-path: polygon(0 0, 100% 0, 100% 30%, 0 100%); }
.slice-bottom { position:absolute; bottom:0; left:0; right:0; height:80px; background:var(--parchment); clip-path: polygon(0 70%, 100% 0, 100% 100%, 0 100%); }
```

3–5° angle mirrors the torch flame's lean. **Navy-background sections only** — never on light-to-light transitions.

### Pattern 03 — Scattered Geometric Constellation

```css
.geo         { position:absolute; pointer-events:none; opacity:0.06; }
.geo-circle  { border-radius:50%; border:1.5px solid var(--navy-900); }
.geo-diamond { transform: rotate(45deg); border:1.5px solid var(--patriot); }
.geo-plus    { font:700 18px var(--font-accent); color:var(--liberty); opacity:0.10; }
.geo-ring    { border-radius:50%; border:1px solid var(--navy-900); }
```

**Sizes:** 8–70px. **Opacity:** 4–10%. **Shape → color mapping:** circles = navy, diamonds = red, plus signs = blue, rings = navy/white. Cluster in the **right third** of dark sections. Never centered.

### Pattern 04 — Grid Overlay

```css
.grid-overlay {
  position:absolute; inset:0; pointer-events:none;
  background-image:
    linear-gradient(rgba(10,22,40,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(10,22,40,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}
```

60px grid, 3% opacity. Architectural/blueprint reference. Dark sections and hero right columns only — never on light backgrounds.

### Pattern 05 — Staggered Score Lines

```css
.score .sl { position:absolute; height:1px; pointer-events:none; left:0; }
.score .sl-1 { top:30px; width:45%; background:linear-gradient(90deg,var(--patriot),transparent);  opacity:.12; }
.score .sl-2 { top:38px; width:28%; background:linear-gradient(90deg,var(--liberty),transparent);  opacity:.15; }
.score .sl-3 { top:46px; width:62%; background:linear-gradient(90deg,var(--patriot),transparent);  opacity:.08; }
.score .sl-4 { top:54px; width:18%; background:linear-gradient(90deg,var(--liberty),transparent);  opacity:.18; }
.score .sl-5 { top:62px; width:38%; background:linear-gradient(90deg,var(--patriot),transparent);  opacity:.10; }
.score .score-label {
  position:absolute; top:28px; right:30px;
  font:400 10px var(--font-mono); letter-spacing:.1em; text-transform:uppercase;
  color:var(--stone-400);
}
```

**Rhythm is fixed:** widths 45 / 28 / 62 / 18 / 38% — long, short, longer, shortest, medium. Vertical stack at 30/38/46/54/62px (8px increments). Alternating red/blue gradient-to-transparent. Used behind stat blocks, testimonial cards, and data rhythms.

### Pattern 06 — Cover corner brackets (hero-scale)

```css
.cover-corner   { position:absolute; top:0;    left:0;  width:140px; height:140px; border-top:3px solid var(--patriot); border-left:3px solid var(--patriot); }
.cover-corner-br{ position:absolute; bottom:0; right:0; width:140px; height:140px; border-bottom:3px solid var(--patriot); border-right:3px solid var(--patriot); }
.cover-stripe   { position:absolute; top:0; bottom:0; right:56px; width:1px; background:var(--hairline); }
.cover-rule     { width:120px; height:3px; background:linear-gradient(90deg,var(--patriot),var(--liberty)); margin-bottom:28px; }
.cover-watermark{
  position:absolute; bottom:-40px; left:50px;
  font:900 360px/0.8 var(--font-display); letter-spacing:-0.04em;
  color: rgba(212,32,39,0.03); pointer-events:none;
}
```

Heavier scale reserved for hero pages / launch cover. Do not mix small and cover-scale brackets in the same section.

---

## 10. Motion & Animation

### Tokens

```css
--ease-out:   cubic-bezier(0.16, 1, 0.3, 1);      /* scroll reveals, hovers, transitions */
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);    /* loader, marquee, cursor ring */
--dur-fast:   150ms;    /* button hover, link underline, focus ring */
--dur-normal: 300ms;    /* card transform, nav bg, mobile menu */
--dur-slow:   600-800ms;/* scroll reveals, loader hide, section transitions */
```

### Inventory

| Element | Trigger | Effect |
|---|---|---|
| Loader | Page load | Torch SVG pulse + progress bar fill, fade out |
| Scroll reveal | IntersectionObserver @ 15% | `translateY(40px) → 0`, opacity `0 → 1`, 700ms ease-out |
| Stagger | Parent enters viewport | Children offset 100ms each |
| Stat counters | IntersectionObserver @ 50% | Increment 0 → target value |
| Marquee | Always | `translateX(0) → -50%`, **30s linear infinite** |
| Floating cards | Always | `translateY(0) → -20px`, 6–8s ease-in-out |
| Issue hover | Mouseenter | Navy fills from bottom; text inverts to moonlight, 300ms |
| Custom cursor | Mousemove | Dot instant; ring trails @ 0.15 lerp; hidden under reduced motion |
| Nav scroll | `scrollY > 80` | Opacity + blur transition; padding reduces, 300ms |

---

## 11. Editorial Flourishes (roycewhite.us voice)

These are the signature campaign phrases — use them verbatim for marquees, section eyebrows, and pull-quotes.

- **"The People Are Coming!"** — primary rally slogan (marquee, footer stamp)
- **"America First"** — positioning label
- **"What's wrong with taking care of Americans first?"** — hero rhetorical question
- **"Smash Mouth Populism"** — identity label
- **"Fighting for Freedom"** — identity label
- **"The Global Affects The Local"** — philosophical frame
- **"Senators should work for the people, not their own net worth"** — anti-corruption line
- **"There's a crisis of leadership, worldwide."** — pull-quote line
- **"All Hands On Deck"** — volunteer call
- **"God · Family · Country"** — values triad

Attribution style: `— Royce White` (em-dash, Space Grotesk 500, `0.12em` tracking, `--stone-400` on dark, `--stone-600` on light).

Contact block (footer): `Royce White For Senate · P.O. Box 5473 Hopkins, MN 55343 · 218-686-3970 · Paid for by Royce White For Senate`.

Primary nav (match live site): **About · Issues · News · Calendar · Endorsements · FAQs** + `Shop`, `Donate` utility links.

---

## 12. Quick Reference (cheat sheet)

- **Colors:** navy `#0A1628`, red `#D42027`, blue `#29ABE2`, parchment `#F5F0EB`, ink `#141722`, gold `#C8A44E`.
- **Fonts:** Playfair 900 (display) · Space Grotesk 600 (label) · Inter 400 (body) · JetBrains Mono (code).
- **Grid:** 12 col · 24px gutter · 1400px max · 120px/80px section padding.
- **Radii:** cards 4–20px · buttons 0 (`clip-path: polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)`).
- **Default splits:** 7/5 · 8/4 · bento (never perfect halves).
- **Color ratio:** 55/20/15/8/2 (navy/parchment/red/blue/gold).
- **Min body:** 16px · **Contrast:** WCAG AA everywhere, AAA on primary pairs.
- **Motion:** always respect `prefers-reduced-motion`.
- **Voice:** "The People Are Coming!" · "Smash Mouth Populism" · "God · Family · Country".

---

## Escalation

For brand questions, consult this document first. For exceptions (new variants, off-palette color, breaking a pattern rule), escalate to the campaign creative lead before shipping.
