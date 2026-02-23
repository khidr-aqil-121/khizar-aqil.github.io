# Patch notes / Changelog

## [Unreleased]

### Added
- **DarkVeil background** – Full-viewport fixed dark gradient background; content scrolls over it. Animated gradient and optional glow layer. Props: `hueShift`, `noiseIntensity`, `scanlineIntensity`, `speed`, etc.
- **Dark-veil theme** – When DarkVeil is active: light text, translucent cards/sections, dark glass header, orange accents. Reduced blur and opacity so the veil pattern stays visible.
- **GradualBlur** – Page-level gradual blur at bottom of viewport (react-bits style). Fixed visibility (minimal background for backdrop-filter, isolation). Used with `target="page"`, `position="bottom"`, configurable strength/height/curve.
- **GradualBlur component** – `src/components/GradualBlur/` (Ansh – github.com/ansh-dhanani). Supports presets, scroll/hover, responsive dimensions. Dependency: `mathjs`.
- **Phone / tablet / desktop breakpoints** – Centralized in CSS: phone ≤767px, tablet 768–1023px, desktop ≥1024px. Layout variables: `--section-padding-y`, `--section-padding-x`, `--section-gap`, `--scroll-margin-top`. Utility classes: `.show-phone`, `.show-tablet`, `.show-desktop`, `.hide-phone`, etc.
- **Safe area support** – `env(safe-area-inset-*)` for notched devices; theme-color meta for mobile browser chrome.

### Changed
- **Mobile responsive** – Viewport locked (no zoom), touch-friendly (touch-action, overscroll). Responsive headings (Tailwind classes that exist in build). Section padding/gap use CSS variables per breakpoint. Project cards: horizontal scroll + snap on small screens. About/Skills cards stack on mobile. Contact form full-width on mobile.
- **Header** – Larger touch target for menu button (44px). Dark glass style when using DarkVeil.
- **Sections** – Use `--section-*` variables; transparent when DarkVeil is used so background shows through.

### Fixed
- **GradualBlur not visible** – Added minimal background for backdrop-filter, correct positioning/mask, and rendered it in App (page-level bottom blur).
- **Desktop headings** – Replaced non-existent Tailwind classes (e.g. `text-3xl`, `md:text-6xl`) with classes present in build (`text-5xl sm:text-6xl`, Hero `text-6xl sm:text-7xl`).

### Technical
- `jsrepo.json` added (paths for components). `mathjs@^14.6.0` dependency for GradualBlur.
