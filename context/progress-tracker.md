# Progress Tracker

Update this file after every meaningful implementation
change.

## Current Phase

- In progress

## Current Goal

- Start the next feature unit (see `context/features-specs/`).

## Completed

- Design system setup (`context/features-specs/01-design-system.md`): shadcn/ui installed and configured (`components.json`, style `base-nova`, neutral base color); added Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea to `components/ui/` (untouched after generation); installed `lucide-react`; added `lib/utils.ts` with `cn()`; mapped shadcn's CSS variables in `app/globals.css` onto the dark palette from `context/ui-context.md` and forced `class="dark"` on `<html>` in `app/layout.tsx` (dark-only, no light mode). `npm run build` and `tsc --noEmit` both pass.
- Editor chrome (`context/features-specs/02-editor.md`):
  - `components/editor/editor-navbar.tsx` — fixed-height top navbar, left/center/right sections, left section holds sidebar toggle button swapping `PanelLeftOpen`/`PanelLeftClose` based on `isSidebarOpen` prop, dark `bg-surface` with `border-b border-surface-border`.
  - `components/editor/project-sidebar.tsx` — floating overlay sidebar (`fixed`, does not push layout), slides in/out from the left via `translate-x`, `isOpen`/`onClose` props, header with "Projects" title + close button, shadcn `Tabs` (My Projects / Shared) each with an empty placeholder state, full-width "New Project" button with `Plus` icon pinned to the bottom.
  - Dialog pattern: no new component needed — the existing `components/ui/dialog.tsx` (generated in the design-system step) already supports title/description/footer-actions and is styled entirely through the shadcn tokens that map onto the Ghost palette in `globals.css`. Confirmed ready for future use; intentionally not wired into any actual dialog yet, per spec.
  - Wired into a real route: `app/editor/layout.tsx` (client component) holds `isSidebarOpen` state, renders `EditorNavbar` above and `ProjectSidebar` overlaying a `<main>` canvas region; `app/editor/page.tsx` is a minimal `bg-base` canvas placeholder (no canvas feature built yet — out of scope for this spec). Verified via `tsc --noEmit`, `eslint`, `npm run build` (route `/editor` compiles and prerenders), and a dev-server smoke check (`GET /editor` → 200).
- Auth (`context/features-specs/03-auth.md`): installed `@clerk/ui@1.30.8`.
  - `proxy.ts` (root) — Next 16 renamed `middleware.ts` to `proxy.ts` (same API, function just needs to be the default export); wraps `clerkMiddleware`, protects every route except `/sign-in` and `/sign-up` (read from `NEXT_PUBLIC_CLERK_SIGN_IN_URL`/`NEXT_PUBLIC_CLERK_SIGN_UP_URL`) via `createRouteMatcher` + `auth.protect()`. Matcher is Clerk's standard static-asset-excluding default.
  - Added `NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in` and `NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up` to `.env.local` (existing Clerk-conventional env var names, not invented) — `auth.protect()` reads these to know where to redirect signed-out users.
  - `app/layout.tsx` — wraps children in `ClerkProvider` with `appearance={{ theme: dark }}` (`dark` from `@clerk/ui/themes`) and `variables` mapped entirely onto the app's existing CSS custom properties (`var(--accent-primary)`, `var(--bg-surface)`, etc.) — no hardcoded colors.
  - `components/auth/auth-split-layout.tsx` — shared two-panel shell for sign-in/sign-up: left panel (wordmark, headline, feature rows with icon badges) hidden below `lg`, right panel centers the Clerk form. No gradients, no boxed feature cards, no hero.
  - `app/sign-in/[[...sign-in]]/page.tsx` and `app/sign-up/[[...sign-up]]/page.tsx` — catch-all routes (required by Clerk for multi-step flows like email verification) rendering `<SignIn />`/`<SignUp />` inside `AuthSplitLayout`.
  - `app/page.tsx` — server component; `auth()` then `redirect()` to `/editor` (signed in) or `/sign-in` (signed out). No explicit post-sign-in redirect URL needed: Clerk's default post-auth redirect is `/`, and `/` immediately re-routes based on auth state.
  - `components/editor/editor-navbar.tsx` — added `<UserButton />` to the navbar's right section.
  - Verified via `npm run build` (proxy detected as `ƒ Proxy (Middleware)`, all routes compile) and a dev-server smoke check: `GET /` → 307 to `/sign-in`, `GET /editor` → 307 to `/sign-in?redirect_url=...`, `GET /sign-in` → 200.
  - Visual pass (reference-design restyle, no auth logic touched): found and fixed a pre-existing bug in `app/globals.css` — `--font-sans: var(--font-sans);` was self-referential and never resolved, so the `font-sans` utility (used on `<html>`) silently fell back to the browser's default serif for any text that didn't set an explicit font (our left-pane headline/copy; Clerk's own card text was unaffected since its `fontFamily` variable is set explicitly). Fixed once at the token source (`--font-sans`/`--font-heading` → `var(--font-geist-sans)`) rather than special-casing the headline, since every other unstyled heading/body element sitewide had the same latent bug.
  - Added 5 opacity-derived tokens to `app/globals.css` (`--accent-primary-10/20/25`, `--border-hairline`, `--border-hairline-strong`, via `color-mix`) for the teal tints and hairline borders the restyle needed — not added to the `--color-*` Tailwind theme map (that table stays the documented named palette); consumed via `var(--x)` in arbitrary Tailwind values instead.
  - `components/auth/auth-card-appearance.ts` — shared Clerk `appearance` (`elements` + `options`, no `theme`/base `variables` — those still come from `ClerkProvider` in `app/layout.tsx`) passed to both `<SignIn>` and `<SignUp>`: widens the card, adds the card gradient/border/radius, restyles social buttons/divider/input/primary button/footer per the reference design. Card-specific radii (12/14/20px) intentionally use exact pixel arbitrary values rather than the app's `rounded-xl/2xl/3xl` scale, since the reference design specified exact pixels for this component — flagged here as a deliberate one-off, not a new precedent for other components.

## In Progress

- None yet.

## Next Up

- Build the actual canvas (React Flow) that `app/editor/page.tsx` currently stubs out.

## Open Questions

- AGENTS.md points to `context/architecture-context.md`, but the actual file is `context/architecture.md`. Not blocking — content was read from the correct path — but the reference in AGENTS.md should be fixed so it isn't misleading next session.

## Architecture Decisions

- [Decisions made that affect the system design or
  data model — include why the decision was made]

## Session Notes

- [Context needed to resume work in the next session]
