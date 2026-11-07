The challenge text is clear: the **only** HTTP behavior you need to demonstrate is **`POST /api/onboarding`** when the user picks a path on the final screen, with **visible success and failure handling** ([FrontendChallenge.md](c:\Users\justin\github\willow-wealth\main\.mytmp\FrontendChallenge.md)). Mid-flow calls are not required.

## API calls vs bundle / one load

- **Reasonable v1:** Treat onboarding as **client-only** until the end. Keep **copy, option lists** (income bands, net worth, yes/no cards, countries, employment statuses) as **static data** (TypeScript constants or small JSON imported into the bundle). Hold answers in **React state** (and/or context). **One MSW handler** for `POST /api/onboarding` matches the brief and keeps the story simple.

- **Extra API calls mid-flow** only pay off if you want to show something specific: e.g. **draft save**, **email uniqueness check**, **server-driven steps**, or **CMS-driven copy**. None of that is in the spec; adding it is a deliberate scope choice you’d document in the README.

- **“One initial data load”** (e.g. `GET /api/onboarding/config`) is useful if you want to practice a **loading state** and a **typed config** shape without many handlers—but it’s optional; **baking everything in** is totally aligned with a simplified flow.

**Bottom line:** Yes—it **does** make sense to avoid API calls until the final submit for this challenge, unless you explicitly want to demo another pattern and explain the trade-off in your README.

## npm packages you can reasonably expect

Aligned with **React + TypeScript + MSW** and a multi-step UI:

| Area | Typical choices |
|------|------------------|
| App + build | `react`, `react-dom`, `vite`, `@vitejs/plugin-react`, `typescript` |
| Routing | `react-router-dom` (clean URLs / back behavior across steps) |
| Forms / validation | `react-hook-form` + `zod` + `@hookform/resolvers` *or* plain controlled inputs if you keep Goal 1 tiny |
| HTTP mocking | `msw` (handlers for `POST /api/onboarding`; optional `msw` Node setup for tests) |
| Testing (optional) | `vitest`, `@testing-library/react`, `jsdom` |
| DX | `eslint`, `@eslint/js`, `typescript-eslint`, `prettier` (as you prefer) |

You already have **pnpm workspace** ([package.json](c:\Users\justin\github\willow-wealth\main\package.json)); the usual pattern is a **workspace package for the web app** with the deps above at that package, not necessarily all at the repo root.

If you want a **formal implementation plan** (scaffold, folder structure, MSW bootstrap, first screen only for Goal 1), say so and we can turn this into a step-by-step plan next.
