<!-- Copilot / AI contributor guidance for my-nxt-template -->

# Copilot Instructions

Purpose: Help AI coding agents become productive quickly in this repo by highlighting the architecture, developer workflows, conventions, and important files.

- Runner: This is a Next.js (App Router) TypeScript project (Next 16, React 19). The app entry is in `src/app` (App Directory).
- Package scripts: use the scripts from `package.json` (e.g. `dev`, `build`, `start`, `lint`, `format`, `lint:analyze`, `lint:apply`). Use the user's package manager (`pnpm`, `yarn` or `npm`) to run them: e.g. `pnpm install && pnpm dev`.

Architecture notes (what to read first)

- App router and layout: `src/app/layout.tsx` — global fonts, `ThemeScript` injection, and where `ThemeToggle` is mounted.
- Theme handling: `src/app/theme-script.tsx` (head-injected script) and `src/components/theme-toggle.tsx` (client component). Both read/write `localStorage` key `theme` and toggle the `dark` class on `document.documentElement`.
- UI primitives: `src/components/ui/*` — Radix primitives + Tailwind + `class-variance-authority` (`cva`) patterns. Example: `src/components/ui/button.tsx` uses `cva` variants, `asChild` Slot pattern and `cn` util.
- Utility helpers: `src/lib/utils.ts` — `cn(...)` wraps `clsx` + `twMerge` (preferred way to merge class names).
- Styling: Tailwind v4 is used; the global stylesheet is `src/styles/globals.css` and components rely on Tailwind utility classes.
- Path alias: `@/*` -> `./src/*` (see `tsconfig.json`). Prefer importing with `@/`.

Conventions and patterns to follow

- Component types: default to server components (no `"use client"`); add `"use client"` only when required (event handlers, hooks, local state). Verify this by checking the top of a file.
- UI primitives: follow the `cva` + `cn` pattern for class composition. New components should export variants where appropriate and accept `asChild` when wrapping native elements.
- Accessibility: components use Radix and focus-visible styles; preserve `aria-*` attributes when refactoring.
- Theme: maintain the `localStorage` key `theme` and the `dark` class toggle behavior — changing this flow needs updates in both `theme-script.tsx` and `theme-toggle.tsx`.

Developer workflows (explicit commands)

- Install: `pnpm install` (or `yarn` / `npm install`).
- Run dev server: `pnpm dev` (or `yarn dev` / `npm run dev`).
- Build: `pnpm build`.
- Lint (eslint): `pnpm lint`.
- Neurolint analysis/fix: `pnpm run lint:analyze`, `pnpm run lint:fix` (dry run) and `pnpm run lint:apply` (apply fixes).
- Format: `pnpm run format` and check with `pnpm run format:check`.
- Husky hooks: `prepare` script runs `husky install` — commits will run `lint-staged` which invokes `eslint --fix` and `prettier --write` for staged files.

Files to inspect when making UI/behavior changes

- `src/app/layout.tsx`
- `src/app/theme-script.tsx`
- `src/components/theme-toggle.tsx`
- `src/components/ui/*` (see `button.tsx` for cva example)
- `src/lib/utils.ts`
- `package.json`, `tsconfig.json`, `postcss.config.mjs`, `src/styles/globals.css`

Do NOT change without confirmation

- Global theming approach (localStorage + class toggle) — breaking it will affect hydration and UX.
- The `@/` path alias and `tsconfig.json` paths.
- Tailwind configuration and PostCSS setup without verifying style output.

PR etiquette for AI changes

- Keep changes small and focused. Run `pnpm dev` and confirm visually when editing UI.
- Run `pnpm run lint:analyze` and `pnpm run format` before opening a PR.
- If adding new UI primitives, follow `cva` + `cn` patterns and include a small example usage in a story or simple page.

If anything above is unclear or you want more detailed rules (commit message style, branching, tests), ask and I will update this file.
