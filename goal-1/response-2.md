Here’s what was wrong and what we changed.

### What went wrong

1. **`apps/investor-onboarding/pnpm-workspace.yaml`** turned that folder into its **own** pnpm workspace (with its own lockfile). That fights your root [`pnpm-workspace.yaml`](c:\Users\justin\github\willow-wealth\main\pnpm-workspace.yaml) (`apps/*`). For a single monorepo lockfile, only the **root** should define the workspace.

2. **`pnpm dlx @tanstack/intent install`** needs an **interactive** permissions step (`intent.skills`). It fails in automated/non-interactive runs with:  
   `intent.skills is not configured. Run intent install in an interactive terminal`.  
   I can’t complete that from here; run it locally in **Git Bash** or **PowerShell** from `apps/investor-onboarding` when you want TanStack Intent.

3. **`defaultPreload: 'intent'`** in [`router.tsx`](c:\Users\justin\github\willow-wealth\main\apps\investor-onboarding\src\router.tsx) is TanStack Router’s **link preload** mode — not the `@tanstack/intent` CLI.

### Monorepo alignment (done)

| Change | Reason |
|--------|--------|
| Removed [`apps/investor-onboarding/pnpm-workspace.yaml`](c:\Users\justin\github\willow-wealth\main\apps\investor-onboarding\pnpm-workspace.yaml) and [`pnpm-lock.yaml`](c:\Users\justin\github\willow-wealth\main\apps\investor-onboarding\pnpm-lock.yaml) | One workspace + one lockfile at repo root |
| Moved Biome/routeTree VS Code settings to [`main/.vscode/settings.json`](c:\Users\justin\github\willow-wealth\main\.vscode\settings.json) and mirrored them in [`workspace/ww.code-workspace`](c:\Users\justin\github\willow-wealth\workspace\ww.code-workspace) | Settings apply when you open **main** or your multi-root workspace; no app-local `.vscode` |
| Root [`package.json`](c:\Users\justin\github\willow-wealth\main\package.json): `dev`, `build`, `preview`, `generate-routes`, `lint`, `format`, `check` | Run from repo root with `pnpm dev`, etc. |
| [`main/README.md`](c:\Users\justin\github\willow-wealth\main\README.md) + app [`README.md`](c:\Users\justin\github\willow-wealth\main\apps\investor-onboarding\README.md) | Documents root-first install and Intent |

### What you should run locally

From **`main`** (repo root):

```bash
pnpm install
pnpm dev
```

For **TanStack Intent** (optional, interactive):

```bash
cd apps/investor-onboarding
pnpm dlx @tanstack/intent install
```

Until you run `pnpm install` at the root, there will be **no** `pnpm-lock.yaml` under `main` (we removed the nested one so the next install creates the **root** lockfile). I didn’t run `pnpm install` here (per your rule about not installing packages in this environment).