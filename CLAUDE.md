@AGENTS.md

## Claude Code only
- Skills in `.claude/skills/` run on request: `/pr-review`, `/release-notes`, `/sop-from-notes`.
- A hook in `.claude/hooks/` blocks edits to secret files; if it fires, tell the user instead of working around it.
