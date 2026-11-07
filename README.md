## Goal 1

- initial setup (mono repo)
- initial API dependency
- initial npm package dependency expectation
- one screen: "Create your account"

## Monorepo layout

- Workspace root: this directory ([pnpm-workspace.yaml](pnpm-workspace.yaml) lists `apps/*` and `packages/*`).
- Investor onboarding app: [apps/investor-onboarding](apps/investor-onboarding) (`pnpm-workspace.yaml` is only at the repo root — not inside each app).

### Run the app

From the **repository root**:

```bash
pnpm install
pnpm dev
```

(VS Code / Cursor: [`.vscode/settings.json`](.vscode/settings.json) applies to this folder; open `main` as a workspace folder or use the multi-root workspace under `workspace/`.)

### TanStack Intent (CLI scaffolding)

If `create` reported **`pnpm dlx @tanstack/intent install` failed**, run it **yourself in an interactive terminal** from `apps/investor-onboarding` (it prompts for `intent.skills` permissions and cannot complete in a non-interactive run). Optional: set `"intent": false` in [apps/investor-onboarding/.cta.json](apps/investor-onboarding/.cta.json) if you do not use Intent — that only affects CLI/AI helpers, not `defaultPreload: 'intent'` in the router (that option is TanStack Router link **preloading**, not the Intent package).
