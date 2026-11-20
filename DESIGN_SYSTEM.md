# ROKU // Jehrome Martin Portfolio — Master Design System & Architecture

> **Single Source of Truth:** This document locks in the visual identity, color tokens, typography scale, layout architecture, motion choreography, and project case-study structure of the portfolio (`https://martin-it-portfolio.vercel.app/`). All future updates must strictly adhere to these specifications so the website's design remains cohesive and never needs to be rebuilt from scratch.

---

## 1. Brand Identity & Ethos
- **Brand Mark:** **ROKU-** (Minimalist conical samurai *kasa* hat above bold geometric `ROKU` lettering with a slanted vermilion dash, served with transparent backgrounds via `logos/roku-dark-logo.png` and `logos/roku-light-logo.png`, plus `logos/favicon.ico` and `favicon-*.png`).
- **Aesthetic Direction:** **High-Contrast Swiss / Editorial Minimalism**. Inspired by editorial print layouts and architectural monographs—relying on stark contrast, oversized display typography, hair-thin structural borders, generous negative space, and purposeful kinetic reveals.
- **Excluded Patterns (Do Not Re-Introduce):** No RPG stat bars (HP/MP), no game-franchise UI gimmicks (Materia orbs, soundboards, walking bottom-screen sprites), no neon cyberpunk/emerald gradients, and no cluttered multi-font cards.

---

## 2. Color Palette & Theme Tokens

The site uses a strict 3-pillar palette (**Ink**, **Paper**, **Vermilion**) with full **Dark Mode** (default) and **Light Mode** (`html[data-color-theme="light"]`) parity:

| Token / Role | Dark Mode (Default) | Light Mode (`data-color-theme="light"`) | Usage Rules |
| :--- | :--- | :--- | :--- |
| **Primary Canvas (`--ink` / bg)** | `#080808` | `#f5f1e8` | Main page background, masthead, works section, timeline, footer, case study modal |
| **Contrast Surface (`--paper`)** | `#f4f0e4` | `#e9e3d7` | Alternating editorial bands (`.role-strip`, `.profile-section`, `.credentials`, `.cs-features-band`) |
| **Elevated Card / Inset Surface** | `#141312` / `#171615` / `#191919` | `#fffaf0` / `#fffcf5` | Dark inset blocks (`.profile-facts`, `.message-form`, project frames, case study cards) |
| **Primary Text** | `#f4f0e4` (on dark) / `#080808` (on paper) | `#191817` | High-contrast body and display copy |
| **Muted / Meta Text** | `#aaaaaa` / `#bbbbbb` / `#c6bfb0` | `#635c50` | Eyebrows, role metadata (`dd`), result counts, timeline dates, tech stack subtitles |
| **Primary Accent (`--red`)** | `#ed2c13` | `#c82915` / `#bd2918` | Hero `PORTFOLIO` display, section `h2` accents, active filters, numbered badges, hover states, scroll progress bar |
| **Interactive CTA Fill** | `#ef6047` (hover `#ff6c54`) | `#ca301c` | Primary submit buttons, active filter pills, contact pill hover, case study CTA pill |
| **Structural Hairline Borders** | `#34302c` / `#444444` / `#555555` | `#c8bead` / `#c1b8a7` / `#bcb8ae` | `1px solid` section dividers, table rules, button outlines |

---

## 3. Typography & Hierarchy

- **Font Stack:** `Arial, Helvetica, sans-serif` (clean neo-grotesque geometric sans-serif with tight negative tracking on display headings and wide positive tracking on uppercase micro-eyebrows).
- **Typographic Scale:**
  - **Hero Display (`h1`):** `clamp(50px, 14.6vw, 240px)`, `font-weight: 950`, `line-height: 0.95`, `letter-spacing: -0.075em`, uppercase, `color: var(--red)`.
  - **Footer / Major Statement (`footer h2`):** `clamp(35px, 7.6vw, 115px)`, `line-height: 0.95`, `letter-spacing: -0.065em`.
  - **Section Display (`h2`):** `clamp(40px, 6vw, 88px)` (Works) / `clamp(34px, 5vw, 70px)` (Timeline & Case Study Title) / `38px` (Profile & Credentials), `letter-spacing: -0.05em` to `-0.06em`.
  - **Role Strip Banner (`.role-strip h2`):** `clamp(22px, 4.2vw, 68px)`, `letter-spacing: -0.06em`, `line-height: 1`.
  - **Card / Entry Heading (`h3`):** `22px`–`28px`, `letter-spacing: -0.04em`, bold.
  - **Section Eyebrow (`.eyebrow`):** `10px`–`11px`, uppercase, `letter-spacing: 0.13em`, `margin-bottom: 18px` (e.g., `01 / INTRODUCTION`, `02 / SELECTED PROJECTS`).
  - **Navigation Links (`.masthead nav > a`):** `13px`, `font-weight: 700`, uppercase, `letter-spacing: 0.1em`.
  - **Body Copy (`p`):** `13px`–`15px`, `line-height: 1.65`–`1.75`, `max-width: 540px`–`650px`.
  - **Metadata (`dl`, `.result-count`, `small`):** `11px`–`12px`.

---

## 4. Layout & Section Architecture

- **Global Container:** Fluid `5%` horizontal padding (`padding-inline: 5%`), capped at `max-width: 1800px` on ultra-wide screens (`>= 1600px`).
- **Minimum Touch Targets:** All interactive controls (`a`, `button`, `summary`, `.theme-toggle`, `.menu-toggle`) enforce `min-height: 44px`.
- **Sticky Masthead (`.masthead`):**
  - `position: sticky; top: 0; z-index: 40; backdrop-filter: blur(14px);`
  - Left: Theme-aware **ROKU** brand logo (`roku-dark-logo.png` / `roku-light-logo.png`).
  - Right: `PROFILE`, `WORK`, pill-styled `CONTACT ↗`, circular `44×44` Sun/Moon Theme Toggle, and on `<= 900px` screens, a `44×44` circular Hamburger button opening the right-aligned swipeable `#mobile-drawer`.
  - Bottom edge: `2px` vermilion scroll-progress bar (`.masthead::after`).
- **Alternating Section Rhythm:**
  1. **Opening Hero (`.opening`):** Dark Ink canvas → Giant `PORTFOLIO` title → `16:9` theme-synced `<video id="hero-video">` with overlaid caption → Paper `.role-strip` banner.
  2. **`01 / INTRODUCTION` (`.profile-section`):** Warm Paper canvas → 2-column asymmetric split (`38%` portrait with stacked red `JEHROME MARTIN` overlay + `1fr` bio copy & dark inset `.profile-facts` 2-column box with `2px solid var(--red)` left accents).
  3. **`02 / SELECTED PROJECTS` (`.work-section`):** Dark Ink canvas → Split heading → Filter pill bar (`All work`, `Game design`, `IT & systems`) → Live project counter → 2-column `.project-grid` (`16:10` image frame with corner `↗` badge, title + `01..05` red index, `Role` & `Focus` `<dl>`, summary copy, and `.project-actions` bar with `View case study →` + external link).
  4. **`03 / CONTINUED LEARNING` (`.credentials`):** Warm Paper canvas → 2-column grid of top-bordered certificate rows (`1px solid #bcb8ae`) with title, `Issuer · Date` `<small>`, and `↗` arrow.
  5. **`04 / EXPERIENCE` (`.timeline-section`):** Dark Ink canvas → 2-column horizontal rows (`1fr` meta date/org + `2fr` title & description) separated by `1px solid #444` top borders.
  6. **`05 / LET’S CONNECT` (`footer#contact`):** Dark Ink canvas → Giant red CTA headline → Large underlined mailto link → Rounded `12px` `.message-form` card → Footer bar with secret 5-click owner CMS trigger (`#secret-admin-trigger`) and social links.

---

## 5. Project Case Study Structure (`#case-study-modal` / `#project=<id>`)

Every project case study follows the **5-Stage Editorial Case Study Blueprint**:
1. **Stage 1 — Hero Header (`.cs-hero`):**
   - Centered project title (or optional project logo graphic)
   - Uppercase 1-line elevator pitch
   - Vermilion eyebrow: `CATEGORY · YEAR` (e.g., `CAPSTONE PROJECT · 2025`)
   - Role & collaborator/studio credits line
2. **Stage 2 — `The Problem` (`.cs-split`):**
   - 2-column split: Left column has `The Problem` heading + narrative paragraph; Right column has a framed visual artifact or structured diagnostic blueprint card.
3. **Stage 3 — `The Solution` (`.cs-split.cs-split-reverse`):**
   - Reversed 2-column split: Left column has a framed hero product/game screenshot; Right column has `The Solution` heading + architectural/design approach paragraph.
4. **Stage 4 — `KEY FEATURES:` Banner & Alternating Zig-Zag Showcases (`.cs-features-band` + `.cs-features`):**
   - Full-width editorial banner (`KEY FEATURES:`).
   - 3–6 alternating 2-column feature blocks (`.cs-feature`, reversing columns on even rows) with:
     - Vermilion feature eyebrow (`01 / EXPLORATION PHASE`, etc.)
     - Bold uppercase outcome headline
     - 1–2 sentence design rationale
     - Media column supporting **1 framed screenshot**, **2 stacked screenshots**, or a structured architectural feature preview card.
5. **Stage 5 — Primary Action CTA & `TECH STACK` Grid (`.cs-cta-row` + `.cs-tech`):**
   - Centered vermilion pill CTA button (`VISIT LIVE PROJECT ↗` / `VIEW ON ITCH.IO ↗`).
   - Centered `TECH STACK` heading above a 3-column grid where each cell lists the **Tool / Technology Name** in bold and its **Specific Application / Role** underneath.
   - Footer navigation bar with `← Previous Project` and `Next Project →`.

---

## 6. Motion & Interaction Guidelines

- **Accessibility First:** All decorative motion is gated inside `@media (prefers-reduced-motion: no-preference)`.
- **Compositor-Only Properties:** Animate only `transform`, `opacity`, and `clip-path` (plus `background-color` / `border-color` on hover).
- **Top-Layer Overlays (`<dialog>` & `popover`):**
  - Both `#cms-modal` and `#case-study-modal` use `closedby="any"` + click-outside boundary fallback, `@starting-style`, `transition-behavior: allow-discrete`, `overlay`, and `closeTopLayer()`.
