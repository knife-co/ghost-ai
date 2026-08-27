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
