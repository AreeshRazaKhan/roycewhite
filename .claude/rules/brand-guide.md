# Royce White for Senate — Brand Guide (v2.0)

Source of truth for every visual decision on this site. When styling, building components, or writing CSS/markup, follow these rules. Source document: `C:\Users\Dev\Documents\brand-guide-v1.html`.

**Positioning:** Fearless, authentic populist leader — modern editorial, rooted in God, Family, Country.
**Visual DNA:** Contemporary editorial (asymmetric heroes, marquee type, bento grids) + populist fire + torch mark (red flame / blue handle) as chromatic anchor.

---

## 1. Design Principles (non-negotiable)

1. **Populist Gravitas** — heavy serif display, deep navy, patriotic red. Authority that feels earned.
2. **Deliberate Asymmetry** — 7/5 and 8/4 splits, oversized type bleeding past sections, unequal bento spans. Avoid perfect halves.
3. **Torch as Signal** — torch mark anchors the brand; used as icon, watermark, and motion element. Never overused.
4. **Accessible by Default** — WCAG AA minimum on every pair; 16px body floor; 1.65 line-height.
5. **Editorial, Not Political** — numbered sections (`/001`), bento grids, marquee type. Never typical campaign templates.
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
  /* NAVY */
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
- Red body text is forbidden — red is for CTAs, accent runs, and headline italics.

---

## 3. Typography

### Families

```css
--font-display:'Playfair Display', Georgia, serif;   /* headlines */
--font-body:'Inter', -apple-system, sans-serif;       /* body */
--font-accent:'Space Grotesk', sans-serif;            /* labels, eyebrows, nav, buttons */
--font-mono:'JetBrains Mono', monospace;              /* code, meta numerals */
```

Load from Google Fonts with the weights used in the guide: Playfair 400/500/600/700/800/900 (+ italic 400/700), Inter 300/400/500/600/700/800, Space Grotesk 400/500/600/700, JetBrains Mono 400/500.

### Type scale

| Level | Font / Weight | Size | Line-height |
|---|---|---|---|
| Display Hero | Playfair 900 | `clamp(3rem, 5.5vw, 5.5rem)` | 1.05 |
| H1 | Playfair 900 | 68px (60px mobile) | 1.0 |
| H2 Section | Playfair 900 | `clamp(2.5rem, 4vw, 4rem)` | 1.1 |
| H3 Card | Playfair 700 | 1.8rem (~29px) | 1.25 |
| H4 Sub-card | Playfair 700 | 1.15rem (~18px) | 1.4 |
| Section Label | Space Grotesk 600 | 13px · **0.2em tracking** · UPPER | 1.2 |
| Body Large | Inter 300 | 17px | 1.8 |
| Body | Inter 400 | **16px (floor)** | 1.65 |
| Caption | Space Grotesk 500 | 12px · 0.12em · UPPER | 1.5 |
| Stat Numeral | Playfair 900 | 5rem (100px) | 0.9 |

### Typography rules

- **Pairing rule:** Playfair Display never appears on the same line as Space Grotesk. A Space Grotesk eyebrow sits *above* a Playfair headline with deliberate vertical spacing.
- **Italics in headlines** use Patriot Red on light, Liberty Blue on dark (e.g., `Design <em>Principles</em>`).
- **Body never drops below 16px.** Captions at 12–13px only for metadata.
- Letter-spacing: `-.02em` on display headlines, `.2em` on section labels, `.12em` on captions.

---

## 4. Logo & Torch Mark

- Lockup = torch SVG (red flame, blue handle) + "ROYCE WHITE" in Space Grotesk 700 + "For U.S. Senate" tag.
- **Clear space** around the logo = height of the flame on all sides.
- **Minimum size:** digital — torch 32px, lockup 140px; print — torch 0.5", lockup 1.25". Below these, use torch-only.
- **Four approved variants:** on Navy (primary), on Parchment, on Patriot Red (flame→white), Mono/Print (ink).
- **Never:** recolor flame/handle independently, rotate, stretch, outline, or add drop shadows.

The torch SVG path is in `brand-guide-v1.html` at the cover section — reuse it verbatim.

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
- **Cards:** 20px border-radius. **Buttons:** 0 border-radius (use clip-path instead).

---

## 6. UI Components

### Buttons

All buttons use the signature angled clip-path:

```css
clip-path: polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%);
```

Padding `16px 32px`; font Space Grotesk 600 / 12px / `.12em` / UPPER; 1.5px border.

| Variant | Background | Text | Use |
|---|---|---|---|
| Primary | `--patriot` | white | Main CTA ("Join the Movement →") |
| Blue | `--liberty` | navy | Volunteer / secondary |
| Navy | `--navy-900` | white | Tertiary on light bg |
| Ghost | transparent | navy (navy border) | Read More / inline |
| Gold | `--gold` | navy | Donate / prestige only |

### Navigation

- Dark variant (default): navy bg, moonlight links, primary red CTA.
- Light variant: parchment bg with stone-200 border, navy links, navy CTA.
- Torch icon 28px next to "ROYCE WHITE" in Space Grotesk 700 / `.18em`.
- On scroll (`scrollY > 80`): background opacity + blur, padding reduces.

### Issue cards (numbered)

- White bg, stone-200 border, 4px radius.
- Top-left: 3px × 48px patriot accent bar.
- Icon = circle with numbered eyebrow `/01`, `/02` in Space Grotesk, patriot color & border.
- H4 Playfair 800 / 22px / navy; body Inter / 14px / stone-600.

### Forms

- White bg, stone-200 border, 4px radius, 26px padding.
- Labels: Space Grotesk 600 / 11px / `.14em` / UPPER / patriot.
- Inputs: parchment fill, stone-200 border, Inter 15px / ink.
- Focus: 2px Liberty Blue outline ring.

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
- **Visible focus:** 2px Liberty Blue outline on every interactive element.
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

---

## 9. Signature Design Patterns (use sparingly)

1. **Asymmetric Corner Brackets** — L-brackets on only two diagonal corners (TL red, BR blue) with small opposing dots. Hero sections, quote blocks, CTA containers. Never all four corners.
2. **Diagonal Section Slice** — 3–5° clip-path on top/bottom edges of dark sections, cutting into parchment above/below. Navy sections only; never light-to-light.
3. **Scattered Geometric Constellation** — circles (navy) / diamonds (red) / plus (blue) / rings at 4–10% opacity, clustered in the right third of dark sections. Sizes 8–70px. Never centered.
4. **Grid Overlay** — 1px lines at 3% opacity on a 60px grid, over dark sections / hero right column. Never on light backgrounds.
5. **Staggered Score Lines** — 3–5 horizontal lines at 18%–62% width, alternating red/blue, graduated opacity (8–18%), anchored left. Rhythm: long, short, longer, shortest, medium. Used behind stats and testimonials.

---

## 10. Motion & Animation

### Tokens

```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);      /* scroll reveals, hovers, transitions */
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);  /* loader, marquee, cursor ring */
--dur-fast: 150ms;    /* button hover, link underline, focus ring */
--dur-normal: 300ms;  /* card transform, nav bg, mobile menu */
--dur-slow: 600-800ms;/* scroll reveals, loader hide, section transitions */
```

### Inventory

- **Loader:** torch SVG pulse + progress bar, fade out.
- **Scroll reveal:** IntersectionObserver at 15%; `translateY(40px) → 0`, opacity `0 → 1`.
- **Stagger:** children 100ms delay when parent enters.
- **Stat counters:** IntersectionObserver at 50%; increment 0 → target.
- **Marquee:** `translateX(0) → -50%`, 30s linear infinite.
- **Floating cards:** `translateY(0) → -20px`, 6–8s ease-in-out.
- **Issue hover:** background fills from bottom; color inverts.
- **Custom cursor:** dot instant, ring trails at 0.15 lerp; hidden under reduced motion.
- **Nav scroll:** opacity + blur transition past `scrollY > 80`.

---

## 11. Quick Reference (cheat sheet)

- **Colors:** navy `#0A1628`, red `#D42027`, blue `#29ABE2`, parchment `#F5F0EB`, ink `#141722`, gold `#C8A44E`.
- **Fonts:** Playfair 900 (display) · Space Grotesk 600 (label) · Inter 400 (body) · JetBrains Mono (code).
- **Grid:** 12 col · 24px gutter · 1400px max · 120px/80px section padding.
- **Radii:** cards 20px · buttons 0 (clip-path).
- **Default splits:** 7/5 · 8/4 · bento (never perfect halves).
- **Color ratio:** 55/20/15/8/2 (navy/parchment/red/blue/gold).
- **Min body:** 16px · **Contrast:** WCAG AA everywhere, AAA on primary pairs.
- **Motion:** always respect `prefers-reduced-motion`.

---

## Escalation

For brand questions, consult this document first. For exceptions (new variants, off-palette color, breaking a pattern rule), escalate to the campaign creative lead before shipping.
