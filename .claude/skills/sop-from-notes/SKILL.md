---
name: sop-from-notes
description: Turn rough notes, a transcript or a screen-recording description into a step-by-step SOP. Use for "write an SOP", "document this process" or /sop-from-notes.
---

# SOP from notes

1. Read the notes the user points to (file path or pasted text).
2. Identify: goal of the process, who does it, systems used, inputs, output, how often.
3. Write the SOP in `docs/sops/<process-name>.md` with:
   - **Purpose** (1 line) and **Owner**
   - **Before you start:** access and inputs needed
   - **Steps:** numbered, one action per step, starting with a verb; mark checks with ✅ and decisions with ❓
   - **If something goes wrong:** the 3 most likely problems and what to do
4. List any step the notes did not make clear as an open question at the end. Never invent a step.
