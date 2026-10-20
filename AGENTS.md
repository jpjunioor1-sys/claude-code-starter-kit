# Team rules for AI coding agents

Read by Codex directly and by Claude Code through `CLAUDE.md`. One file, one set of rules.

## Project
- What this repo is: <one line: product, users, stack>
- Run locally: `<install command>` then `<start command>`
- Tests: `<test command>` — run them after every code change and before saying "done"

## How to work
- Do what was asked. No extra features, no refactors outside the task.
- Read a file before editing it. Prefer editing over creating new files.
- Small diffs. If a change touches more than ~5 files, stop and propose a plan first.
- When unsure about a requirement, ask one clear question instead of guessing.

## Never
- Commit secrets, `.env` files or credentials.
- Push to `main`, force-push, or delete branches without being asked.
- Change CI, deploy or database migration files without saying so in the summary.

## Finishing a task
1. Tests pass (paste the command and result).
2. Summary in 3 lines: what changed, why, what to check.
3. Anything skipped or uncertain is listed, not hidden.
