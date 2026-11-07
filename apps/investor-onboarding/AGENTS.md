<!-- intent-skills:start -->
## Skill Loading

Use the repository’s installed Intent. If it is unavailable, report the missing dependency instead of downloading a replacement.
Before editing files for a substantial task:
- Run `pnpm exec intent list` from the workspace root to see available local skills.
- If a listed skill matches the task, run `pnpm exec intent load <package>#<skill>` before changing files.
- Use the loaded `SKILL.md` guidance while making the change.
- Monorepos: when working across packages, run the skill check from the workspace root and prefer the local skill for the package being changed.
- Multiple matches: prefer the most specific local skill for the package or concern you are changing; load additional skills only when the task spans multiple packages or concerns.
<!-- intent-skills:end -->

## UI (shadcn)

shadcn/ui is set up in this app (`components.json`). For forms and shared UI, use components from [shadcn docs](https://ui.shadcn.com/docs/components): run `pnpm exec shadcn add <component> --yes` from this package, then import from `@/components/ui/*`. See repo rule `.cursor/rules/shadcn-ui.mdc`.
