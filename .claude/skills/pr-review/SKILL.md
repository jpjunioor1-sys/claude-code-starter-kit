---
name: pr-review
description: Review the current branch against main before opening a pull request. Use when the user says "review my changes", "check before PR" or runs /pr-review.
---

# PR review

1. Run `git diff main...HEAD --stat`, then read the full diff.
2. Check, in this order, and report only real findings:
   - **Bugs:** wrong logic, missing null/empty handling, off-by-one, unhandled errors.
   - **Security:** secrets in code, unvalidated input reaching SQL/shell/HTML.
   - **Tests:** changed behavior without a test; run the test command from AGENTS.md.
   - **Scope:** files changed that the task did not need.
3. Output a table: `file:line | severity (high/medium/low) | finding | suggested fix`.
4. End with one line: "Ready for PR" or "Fix N items first".

Do not edit files during the review. Offer to fix after the user reads the table.
