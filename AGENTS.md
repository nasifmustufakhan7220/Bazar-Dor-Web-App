# AGENTS.md

BazarDor — a single Next.js 16 (App Router) app for browsing grocery product prices. Bengali-language UI. No monorepo, no tests, no CI.

## Commands

- Dev server: `npm run dev` (Turbopack; Tailwind 4 loads via `@tailwindcss/turbopack` rule in `next.config.ts`)
- Lint: `npm run lint` (flat ESLint config in `eslint.config.mjs`) — the only check script
- Typecheck/build: `npm run build` (no standalone `typecheck` script; `next build` type-checks)

## Architecture

- All code in `src/`; path alias `@/*` → `./src/*`.
- Route protection lives in `src/proxy.ts` (Next.js 16 name for middleware, not `middleware.ts`). It redirects unauthenticated users to `/sign-in` and only matches `/products/:path` and `/update-profile`.
- Auth: Better Auth + MongoDB adapter (`src/lib/auth.ts` server, `src/lib/auth-client.ts` browser). Auth API route: `src/app/api/auth/[...all]/route.ts`.
- Product/category data is **not** in the DB — it is fetched from the external API `https://openapi.programming-hero.com/api/bazardor/...` (see `src/components/navlink/NavLinks.tsx`, `src/components/The Product Sections (Home Page)/*.tsx`, `src/app/products/[productId]/page.tsx`). Types in `src/types/bazarDor.types.ts`. Product fetches use `revalidate: 60`; categories use `force-cache`.
- `next.config.ts` enables `cacheComponents: true` — async page/component data fetching is wrapped in `<Suspense>` everywhere. Follow this pattern for new data components.

## Gotchas

- **Env var names contain typos that are load-bearing**: `BETTER_AUTH_GOGGLE_CLIENT_ID`, `BETTER_AUTH_GOGGLE_CLIENT_SERECT`, `BETTER_AUTH_GITHUB_CLIENT_SERECT` (see `src/lib/auth.ts`). When creating `.env`, match these spellings exactly or auth breaks. `src/lib/auth.ts` throws at import time if `BETTER_AUTH_MONGO_URI` is missing.
- The working env file is `.env` (gitignored), not `.env.local` as the README claims.
- `src/lib/auth-client.ts` hardcodes `baseURL: "http://localhost:3000"` and also exports a second `createAuthClient()` instance — keep in mind before "cleaning up" either.
- Component directory `src/components/The Product Sections (Home Page)/` contains spaces and parentheses; imports must quote the full path.
- `export const instant = false` in `src/app/products/[productId]/page.tsx` is a typo (likely meant `revalidate`/`dynamic`) and currently has no effect. Don't assume it configures route caching.
- Bengali UI text is intentional; digits are converted to Bengali numerals inline (e.g. in `AllProducts.tsx`).
