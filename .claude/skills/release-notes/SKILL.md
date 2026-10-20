---
name: release-notes
description: Turn recent commits into release notes a client or manager can read. Use for "write release notes", "what changed this week" or /release-notes.
---

# Release notes

1. Find the range: since the last tag (`git describe --tags --abbrev=0`) or, if there is none, the last 7 days.
2. Read `git log <range> --no-merges --pretty=format:"%h %s"`; open a diff only when a message is unclear.
3. Group into: **New**, **Improved**, **Fixed**. Drop chores, formatting and dependency bumps unless they change behavior.
4. Write each line for a non-developer: what the user can now do, not which function changed.
5. Save to `docs/release-notes/<YYYY-MM-DD>.md` and show it in the chat.
