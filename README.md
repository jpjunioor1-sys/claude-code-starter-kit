# Claude Code & Codex Starter Kit

A ready-to-copy setup that makes AI coding agents follow your team's rules from the first prompt.
Works with **Claude Code** and **OpenAI Codex**: both read the same rules file.

## What's inside

| File | What it does |
|---|---|
| `AGENTS.md` | Team rules: how to run, test and finish a task. Codex reads it directly. |
| `CLAUDE.md` | Imports `AGENTS.md` for Claude Code, plus Claude-only notes. One source of truth. |
| `.claude/settings.json` | Permissions: safe commands run without asking, `push`/`commit` ask first, force-push and `.env` reads are denied. |
| `.claude/hooks/protect-secrets.mjs` | Blocks any edit to `.env`, keys and credential files. |
| `.claude/skills/pr-review` | `/pr-review`: bugs, security, tests and scope, as a table, before you open a PR. |
| `.claude/skills/release-notes` | `/release-notes`: commits turned into notes a client can read. |
| `.claude/skills/sop-from-notes` | `/sop-from-notes`: rough notes turned into a step-by-step SOP. |

## Set up in 10 minutes

1. Copy `AGENTS.md`, `CLAUDE.md` and the `.claude/` folder into your repo root.
2. Fill the 3 placeholders in `AGENTS.md` (what the project is, how to run it, how to test it).
3. Adjust the `allow` list in `.claude/settings.json` to your test and lint commands.
4. Open Claude Code in the repo once and accept the "trust this folder" prompt (until then, the `allow` list is ignored).
5. Type `/pr-review` on any branch. In Codex, ask "what are the rules for this repo?" to confirm it read `AGENTS.md`.

Requires Node.js for the hook. Check it with `node tests/protect-secrets.test.mjs`.

## Need it tailored?

Setup for your stack, skills for your own workflow and a recorded walkthrough for your team, all async:
[JP Gestão](https://jpgestao.com/en/).
