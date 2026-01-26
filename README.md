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
- **React 19** + **Vite 7** for fast refresh, production builds, and routing via `react-router-dom`.
- **Tailwind CSS 4** together with `@tailwindcss/vite` for a utility-first, design-token-backed style system.
- **lucide-react** for lightweight, scalable icons.
- **@emailjs/browser** so the contact form can send messages without a custom backend.
- **clsx** + **tailwind-merge** as helpers in `src/lib/utils.jsx` for composing responsive class lists.

## Getting started
1. Install dependencies:
	```bash
	npm install
	```
2. Run the dev server:
	```bash
	npm run dev
	```
3. Lint JavaScript files:
	```bash
	npm run lint
	```
4. Build for production:
	```bash
	npm run build
	```
5. Preview the production build:
	```bash
	npm run preview
	```

## Environment variables
`: App` relies on EmailJS to deliver form submissions. Create `.env.local` with the following keys (per [Vite env naming rules](https://vite.dev/config/env/)):

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

If any key is missing or invalid, the form logs an error and shows a generic failure message.

## Project layout
```
public/             # Static assets served as-is (favicon, screenshot images, etc.)
src/
  main.jsx          # Mounts `<App />` inside StrictMode
  App.jsx           # Router config pointing `/` to `Home` and fallback to `NotFound`
  pages/
	 Home.jsx        # Assembles the hero, about, skills, projects, contact, and footer sections
	 NotFound.jsx    # Simple 404 placeholder for unmatched routes
  components/       # Reusable UI sections (Navbar, hero block, skills, projects, contact, theme toggle, star effects, footer)
  lib/utils.jsx     # `cn` helper that merges `clsx` + `twMerge`
  index.css         # Tailwind imports plus custom utilities, animations, and light/dark theme tokens

dist/               # Generated output after `npm run build`
```

## Key UI sections
- **HeroSection**: Intro text with staggered fade-ins, CTA button, and bouncing scroll cue.
- **AboutSection**: Two-column story that highlights Daniel’s full-stack experience and links to contacts/LinkedIn.
- **SkillsSection**: Filterable skill matrix (frontend/backend/tools/other) with animated progress bars.
- **ProjectsSection**: Data-driven cards (title, image, tags, demo/GitHub links) and a “check out my GitHub” CTA.
- **ContactSection**: Split layout with contact details, social links, and an EmailJS-powered form that handles loading/success/error states.
- **Navbar**: Sticky header that adjusts on scroll, presents `ADDO-Dev` branding, and provides a responsive drawer menu.
- **ThemeToggle** + **StarBackgroundEffects**: Floating controls that persist the chosen theme and render animated stars/meteors behind the content.
- **Footer**: Copyright notice plus a “Back to Top” button using the `ArrowUp` icon.

## Styling & theme
- Tailwind’s `@theme` block exposes CSS variables for colors, gradients, and motion timetables (e.g., `fade-in`, `meteor`, `pulse`).
- Utility classes like `cosmic-button`, `card-hover`, `star`, and `meteor` live in `index.css` to keep the JSX concise.
- Light/dark tokens are swapped via the `.dark` class; `ThemeToggle` syncs the preference with `localStorage` and the `document.documentElement` class list.
- Responsive layout uses custom `@utility container` to keep consistent max widths plus Tailwind breakpoints throughout the sections.

## Assets & favicon
- Add static resources to `public/`; they are published exactly as named (e.g., `/projects/project1.png`).
- The favicon is `public/ayomide.png`, linked from `index.html`.
- Drop documents (resume, OG image) or extra screenshots in `public/` and reference them via absolute paths from components or `index.html`.

## Deployment notes
- Run `npm run build` to emit the optimized client bundle inside `dist/`.
- Host `dist/` on Netlify, Vercel, GitHub Pages, or any static host; ensure the server serves `/index.html` for SPA routing (fallback to `index.html`).
- Optional: Run `npm run preview` locally after building to sanity-check the production output, especially the favicon and contact form behaviour.

Feel free to expand the documentation by describing any new sections, hooking the contact form up to a different service, or detailing deployment pipelines as the project evolves.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
