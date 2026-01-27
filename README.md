# ADDO-Dev Portfolio

A single-page React + Vite experience that showcases Daniel (Ayodeji Obamiyi) as a full-stack builder. The site mixes a cosmic-inspired visual theme, animated starfield effects, curated projects, a skills matrix, and a form wired to EmailJS so visitors can contact Daniel directly.

## Table of Contents
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Environment variables](#environment-variables)
- [Project layout](#project-layout)
- [Key UI sections](#key-ui-sections)
- [Styling & theme](#styling--theme)
- [Assets & favicon](#assets--favicon)
- [Deployment notes](#deployment-notes)

## Tech stack
- **React 19** + **Vite 7** for fast refresh, production builds, and routing with `react-router-dom`.
- **Tailwind CSS 4** with `@tailwindcss/vite` for a utility-first, design-token-ready style system.
- **lucide-react** for lightweight, SVG-based icons.
- **@emailjs/browser** so the contact form sends mail without a dedicated backend.
- **clsx** + **tailwind-merge** in `src/lib/utils.jsx` for merging responsive class names.

## Getting started
1. Install dependencies:
	```bash
	npm install
	```
2. Run the development server:
	```bash
	npm run dev
	```
3. Check linting:
	```bash
	npm run lint
	```
4. Build for production:
	```bash
	npm run build
	```
5. Preview the production build locally:
	```bash
	npm run preview
	```

## Environment variables
The contact form uses EmailJS. Create `.env.local` with the following keys (per [Vite env conventions](https://vite.dev/config/env/)):

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

If any value is missing or invalid, the form shows a friendly error message and logs the issue to the console.

## Project layout
```
public/             # Static files published as-is (favicon, project screenshots)
src/
  main.jsx          # Mounts `<App />` inside `<StrictMode>`
  App.jsx           # Router setup that renders `Home` and falls back to `NotFound`
  pages/
	 Home.jsx        # Composes hero, about, skills, projects, contact, and footer
	 NotFound.jsx    # 404 placeholder to catch unknown routes
  components/       # Navbar, hero, about, skills, projects, contact, footer, theme toggle, and star effects
  lib/utils.jsx     # `cn` helper that combines `clsx` and `twMerge`
  index.css         # Tailwind import + custom utilities, animations, and theme tokens

dist/               # Output after `npm run build`
```

## Key UI sections
- **HeroSection**: Staggered fade-ins, CTA button, and bouncing scroll indicator while introducing “ADDO-Dev”.
- **AboutSection**: Narrative about Daniel’s full-stack experience with LinkedIn + contact CTAs.
- **SkillsSection**: Filterable skills by category with animated progress bars.
- **ProjectsSection**: Data-driven cards (image, tags, demo & GitHub links) plus an invitation to explore the GitHub profile.
- **ContactSection**: Contact info grid (email, phone, location, socials) and EmailJS-backed form handling loading/feedback states.
- **Navbar**: Sticky header that adapts on scroll, provides desktop links, and exposes a mobile drawer menu.
- **ThemeToggle** & **StarBackgroundEffects**: Floating toggle that persists the light/dark choice and renders animated stars/meteors as a backdrop.
- **Footer**: Copyright notice with a “Back to Top” cosmic button.

## Styling & theme
- Tailwind’s `@theme` block defines CSS variables for color palettes, border tokens, and animation timings (`fade-in`, `meteor`, `pulse`).
- Custom utilities like `cosmic-button`, `card-hover`, `star`, and `meteor` simplify JSX class lists.
- The `.dark` class swaps to night mode variables; `ThemeToggle` syncs the preference with `localStorage` and toggles the class on `document.documentElement`.
- Responsive layout uses the `@utility container` helper for consistent padding and max widths across breakpoints.

## Assets & favicon
- Drop static assets (resumes, OG images, screenshots) into `public/` and reference them via absolute paths (for example, `/projects/project1.png`).
- The favicon is `public/ayomide.png`, imported inside `index.html`.
- Project screenshots live under `public/projects/` and are referenced inside `ProjectsSection` via `/projects/projectN.png`.

## Deployment notes
- `npm run build` emits an optimized client bundle inside `dist/`.
- Serve `dist/` on Netlify, Vercel, GitHub Pages, or any static host. Ensure SPA routing falls back to `index.html`.
- Optional: Run `npm run preview` after building to validate the production output locally, especially the favicon and contact form.

Feel free to extend this documentation with new sections, deployment steps, or integration notes as the portfolio evolves.
