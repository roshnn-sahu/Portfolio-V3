# Implementation Plan - Shadcn UI Styled Component View

We will redesign the component slug page (`app/components/[slug]/page.tsx`) to match the premium, modern aesthetic of Shadcn UI's documentation. We will leverage the requested utility files (`code-commands.ts`, `highlight-code.ts`, `rehype-code-block.ts`, and `rehype-npm-command.ts`) to implement full component preview tabs, interactive installation terminal blocks, and custom props tables.

---

## User Review Required

> [!IMPORTANT]
> - **Registry Code Reading**: We will dynamically read the source code of components from the `registry/` folder using Node's `fs/promises` in the Next.js Server Component. This will automatically keep the "Manual Installation" code block updated with any changes in the registry!
> - **Interactive Component Rerender (Key Reset)**: We will implement a client-side component wrapper with a reset button in the Preview tab so that users can instantly restart animations (especially helpful for entrance/exit shimmer text).

---

## Proposed Changes

We will modify the core component detail view, adding support for the classic Shadcn UI "Preview vs Code" switcher and "CLI vs Manual" installation options.

### Components Documentation Layer

#### [MODIFY] [page.tsx](file:///c:/Users/USER/Desktop/React%20Projects/Projects/Portfolio-3.0/app/components/%5Bslug%5D/page.tsx)
- Redesign the page utilizing `@/components/ui/tabs` to offer a unified Preview / Code layout.
- Use `fs/promises` to read the component's core implementation file from `registry/${slug}.tsx`.
- Pass the loaded component source code through `highlightCode` to serve under the **Manual Installation** step.
- Update the CLI installation area using a custom terminal switcher that parses commands using `getNpmCommands` from `lib/code-commands.ts`.
- Format the API Reference props table with modern Tailwind CSS styles (sleek border gradients, color-coded badges for types, mono-spaced defaults).
- Integrate a reset action using a client-side wrapper to easily trigger component re-mounts.

#### [NEW] [client-preview-wrapper.tsx](file:///c:/Users/USER/Desktop/React%20Projects/Projects/Portfolio-3.0/components/docs/client-preview-wrapper.tsx)
- Create a client-side wrapper that receives the preview component.
- Display a "Reset" or "Refresh" action button inside the preview container.
- Manage a stateful `key` to allow restarting the rendering of animated components seamlessly.

---

## Verification Plan

### Automated/Manual Verification
- Visit the dev server at `http://localhost:3000/components/blur-shimmer-text` or similar slug to verify:
  1. Component Preview / Code tabs function correctly.
  2. CLI Installation switcher updates the terminal command based on selected manager (npm, pnpm, yarn, bun).
  3. Manual installation correctly lists the step-by-step setup and highlights the actual source code read from `registry/blur-shimmer-text.tsx`.
  4. The Props table displays with high-contrast text and beautiful badge tags.
