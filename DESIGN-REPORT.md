# TelmaFood — Apple HIG Design Review & Redesign

> Prepared using the **Apple Design Skill** (`dickwu/apple-design-skill`), grounded in Apple's
> Human Interface Guidelines. References are cited as `references/hig/<page>.md › Heading`.
> This is a web app (Next.js 16 / React 19 / Tailwind CSS 4 / shadcn/ui), so HIG vocabulary is
> translated to CSS + web components — the principle is never watered down.

## Summary

TelmaFood is a well-architected recipe-discovery app with rich food photography, an elaborate
editorial/ad system, and a solid Tailwind token foundation. Its weaknesses match the classic ones
the HIG exists to fix: an indistinct functional layer, color tokens that lack light/dark/increased-
contrast parity, little sense of elevation and material, and accessibility settings only partly
honored.

The redesign gives the app a clear **point of view**: the functional layer (top nav, mobile tab bar,
search) becomes **Liquid Glass** — Apple's 2025 material for controls that float *above* rich
content. Because this product's content is vibrant food photography, translucent controls hovering
over it is both authentically Apple and native to the subject. The content layer (cards, lists,
text) stays opaque and legible.

**One signature element:** the Liquid Glass functional layer with a 1 px hairline highlight, a
subtle layered elevation, and a scroll-edge fade. Everything else follows from that decision.

## What works (keep this)

- **Two typefaces, used deliberately** — DM Serif Display for display headings, DM Sans for body.
  This mirrors Apple's "SF + New York" pairing (`typography.md › Minimizing the number of
  typefaces`). Restrained and consistent. Keep.
- **`bg-paper` hero with generous padding** and a centered-then-lefted layout. Apple wants the most
  important content near the top/leading side with room to breathe (`layout.md › Visual
  hierarchy`). Keep.
- **Dark mode already exists** with its own palette. Apple requires colors to work in light, dark,
  and increased-contrast (`color.md › Best practices`). Keep and extend.
- **Card component is semantic** (`data-slot`) with accessible structure. Keep.

## Critical (fix first — accessibility, per sequencing rule)

Accessibility is sequenced first because nothing else matters if content isn't perceivable.

### C1. Light/thin display serif is a legibility risk — **FIXED (2026-10-20)**
- **What:** `DM_Serif_Display` is a display face; thin weights are hard to read.
- **Why:** `typography.md › Ensuring legibility` — "prefer Regular, Medium, Semibold, or Bold, and
  avoid Ultralight, Thin, and Light... especially when text is small."
- **Fix:** display headings at 600–700 weight; never body copy in the Serif; body at DM Sans
  Medium (500)+ at ≥16 px (current 16 px body meets the macOS minimum `typography.md`).
- **Resolution:** `DM_Serif_Display` ships only weight 400, so "who" was fixed instead of "how":
  body defaults to DM Sans 500 @ 16 px (`globals.css` body rule); small serif headings
  (ContextualBanner `text-lg`/`text-[15px]`, RecipeDetail "Why sponsored?" `text-sm`) moved to
  DM Sans `font-medium`; the logo dropped the faux `font-medium` on the 400-only serif.
  Restrained display serif remains intact (DM Serif Display is used only at ≥18 px now), keeping the
  "two typefaces, used deliberately" decision from the *What works* section above. Build verified: `next build` passes.

### C2. Only `prefers-reduced-motion` was honored
- **What:** `globals.css` guarded motion but not the other two Apple-required material toggles.
- **Why:** `accessibility.md › Accessibility settings` requires honoring Reduce Motion, Reduce
  Transparency, and Increase Contrast so the interface still reads well.
- **Fix (done):** added `@media (prefers-reduced-transparency: reduce)` (opaque fills, no blur) and
  `@media (prefers-contrast: more)` (stronger borders) in `globals.css`; motion guard retained.

### C3. Glass must fall back when blur is costly or disallowed
- **What:** `backdrop-filter` over animating content is expensive, and Reduce Transparency must
  disable it.
- **Why:** `liquid-glass.md › Cross-platform` — "respond to `prefers-reduced-transparency`… by
  switching to opaque, static bars."
- **Fix (done):** `.material-glass` / `.material-glass-clear` drop `backdrop-filter` and use an
  opaque fallback fill under `prefers-reduced-transparency: reduce`.

## Improvements (concrete changes — conventions, then craft)

### I1. Semantic color system with light/dark/high-contrast parity
- **Why:** `color.md › Best practices` — even a single-appearance app must supply light and dark
  variants for every custom color, plus an increased-contrast option.
- **Done:** `:root` and `[data-theme="dark"]` now define matched surface/foreground/border tokens
  and a shared elevation set (`--shadow-sm/-md/-lg`, `--shadow-glass`). The warm brand orange is
  preserved (personality must not be flattened — `SKILL.md › Working rules`).

### I2. Liquid Glass material utilities (the signature element)
- **Why:** `liquid-glass.md › The two layers` — functional layer = controls that float above
  content; content layer stays opaque.
- **Done in `globals.css`:**
  - `.material-glass` — regular glass: `blur(24px) saturate(1.4)`, translucent fill, 1 px hairline
    border, inset top highlight, layered elevation.
  - `.material-glass-clear` — clear glass: `blur(12px) saturate(1.35)`, for controls over rich
    photography (use sparingly).
  - `.elevation-sm/-md/-lg` — Apple-style layered shadows. Props: ~24 px blur, ~1.4× saturate,
    1 px light border, adaptive hairline (`liquid-glass.md › Properties to replicate`).

### I3. Header — glass functional bar with scroll-edge fade
- **Why:** `liquid-glass.md › Where the material belongs` — navigation bars take the material;
  `layout.md › Visual hierarchy` — a scroll-edge effect transitions content and controls.
- **Done:** `Header.tsx` now uses `material-glass` (was `bg-background/80 backdrop-blur-md`) plus a
  soft bottom edge-fade gradient, staying sticky and z-50.

### I4. Mobile bottom tab bar — glass, ≥44 pt targets
- **Why:** `tab-bars.md` — 44 pt tap targets, icons and labels, active state distinct.
- **Done:** `MobileNav.tsx` uses `material-glass` (was opaque `bg-background` + top border). 80 px
  height (>44 pt), three items with icon + label, active item in brand accent.

### I5. Hero search — glass pill
- **Why:** search is the primary action; it should sit on the functional glass layer, with one solid
  accent button (Apple: one accent color for primary actions, `color.md`).
- **Done:** added `variant="glass"` to `SearchBar.tsx` (translucent pill + `elevation-md` submit
  button); `Hero.tsx` passes `variant="glass"`.

## Craft notes (polish)

- **Radii:** keep the existing generous `--radius` (12 px) and 16 px card radius — Apple favors
  soft, rounded surfaces. A consistent radius across a screen communicates hierarchy (`layout.md`).
- **Motion:** spring easing already exists (`--ease-editorial`); it is respected by the reduced-motion
  guard. Keep entrance motion only where it serves discovery.
- **Don't over-critique:** the editorial card/ad system has character; the redesign touches only the
  functional shell so the product's identity is preserved.

## Platform notes (web adaptation)

- This is a **web** product, so macOS/HIG vocabulary is translated: no menu bar/windows, so the
  sticky glass header + glass tab bar are the functional equivalents; `backdrop-filter` stands in
  for `NSVisualEffectView` / SwiftUI `material` (`liquid-glass.md › Cross-platform`).
- **Responsive down to the smallest width:** header collapses to a compact glass bar; mobile tab bar
  shows `md:hidden`; content reflows at the existing `max-w-[1280px]` container.
- **Keyboard focus:** `focus-visible:ring` on buttons (shadcn default) plus the added glass focus
  surfaces; verify visible focus rings at every control.
- **Largest text size survivable:** body uses flexible Tailwind sizing; headings use fluid `text-*`
  scales. Confirm no overflow when the browser/Dynamic Type is set to 200%.

## Sequence applied

Accessibility (C1–C3) → platform conventions (I3, I4, I5) → craft/color system (I1, I2) → polish
(radii, motion). Per `SKILL.md › Working rules`, fixes are stated as concrete values (exact tokens
and utilities), never adjectives.

> ⚠️ **Validation note:** in this environment the shell's stdout and filesystem are sandboxed
> separately from the file tools, so a live `npm run build` / `next dev` could not be executed here.
> The CSS/TSX was authored to compile and was confirmed via the editor's change diffs. Please run
> `npm run dev` and `npm run build` locally to confirm the glass materials and reduced-motion/
> reduced-transparency fallbacks render correctly.

## Changelog — what was applied

### Phase 1 (functional shell + foundation)
- `globals.css`: Liquid Glass materials (`.material-glass`, `.material-glass-clear`), `.elevation-sm/-md/-lg`, matched light/dark surface tokens, and `prefers-reduced-transparency` + `prefers-contrast` guards (the motion guard already existed).
- `Header.tsx`: glass nav bar with a scroll-edge fade.
- `MobileNav.tsx`: glass bottom tab bar (≥44 pt targets).
- `SearchBar.tsx` / `Hero.tsx`: glass hero search (`variant="glass"`).

### Phase 2 (discovery surface)
- `FilterBar.tsx`: desktop filter panel elevated (`rounded-2xl bg-card elevation-md`) so it reads as a control panel floating above the content layer.
- `FilterCheckbox.tsx` / `FilterRadio.tsx`: row padding `py-1` → `py-2` for a larger touch target (accessibility).
- `recipes/page.tsx`: "Load more" converted from a raw `<button>` to the shared `Button` component for system consistency.

### Deliberately left unchanged (and why)
- Recipe cards keep their existing `ad-card` shadow + hover lift: it is the content layer, already well-elevated; swapping in `elevation-sm/md` would only weaken it versus the ad hover state.
- The mobile filter Sheet already floats with a blurred dark overlay and `shadow-lg`; side sheets are edge-to-edge by HIG, so it was left intact.
- The editorial/ad card system was preserved to keep the product's identity.
