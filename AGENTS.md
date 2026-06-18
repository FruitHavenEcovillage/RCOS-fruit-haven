# AGENTS.md — Instructions for AI Agents

This file tells AI agents (Claude Code or similar) how to correctly update this repository. Follow these instructions precisely to keep the governance record consistent and RCOS-compliant.

---

## Core Rule

> **If it is not written, versioned, and adopted, it does not exist.**

Never summarize a change without recording it. Never update an artifact without updating version history. Never mark compliance as changed without verifying the artifact is actually present and complete.

---

## 1. When a Fruit Haven Vote Passes

The authoritative trigger for all repository updates is a **passed Fruit Haven vote** — not a PR merge. The workflow is:
1. A Full Member submits a proposal to the Fruit Haven voting app and opens deliberation (Discord / forum)
2. The Fruit Haven vote runs for the required period
3. On passing: the Membership Admin adds the proposal file to `proposals/passed/` and triggers the updates below

When a proposal passes, do all of the following in the same commit or a direct follow-up:

### 1a. Update the affected artifact(s) in `layers/`

Edit the relevant file(s) in `layers/` to reflect the adopted change. The proposal file itself records the decision; the artifact file records the current authoritative state.

### 1b. Update `layers/6-evolution/02-version-history.md`

Append a new entry at the top of the log using this format:

```markdown
## v<MAJOR>.<MINOR> — <YYYY-MM-DD>

- **Effective date:** <YYYY-MM-DD>
- **Decision record:** proposals/passed/<proposal-filename>.md
- **Decision type:** Operational / Strategic / Constitutional
- **Mechanism:** <e.g. Fruit Haven vote, consent, delegated authority>
- **Summary:** <1–3 sentences describing what changed>
- **Layers affected:** <e.g. Layer 1, Layer 2>
- **Artifacts changed:** <list of files modified>
- **Migration notes:** <any transition requirements, or "none">
```

Version numbering:
- **Constitutional change** (Layer 0 or governance system) → increment MAJOR
- **Strategic change** → increment MINOR
- **Operational change** → increment PATCH (add a third digit, e.g. v0.1.1)

### 1c. Update `compliance/checklist.md` if compliance status changed

If the merged proposal adds a previously missing mandatory artifact, or fixes a known non-compliance, update the relevant row in `compliance/checklist.md`. Mark artifacts as Present only when the file contains substantive content — a stub does not count.

---

## 2. When a Fruit Haven Vote Fails (Rejected)

When a Fruit Haven vote fails:

1. The Membership Admin adds the proposal file to `proposals/rejected/` with a note at the top:

```markdown
> **Status: Rejected**
> **Closed:** <YYYY-MM-DD>
> **Reason (brief):** <optional short note>
```

2. No artifact files are changed.
3. No version history entry is needed.
4. If the rejection reveals a systemic issue (e.g. governance gap, unclear authority), add a learning log entry (see section 3).

---

## 3. When to Add a Learning Log Entry

Add an entry to `layers/6-evolution/03-learning-log.md` when any of the following occur:
- A proposal is rejected due to a structural gap (not just disagreement)
- An experiment ends — whether it succeeded, failed, or was extended
- A governance failure or process breakdown is identified
- A conflict resolution case reveals a missing or ambiguous rule
- A major adaptation is made in any layer

Use this format (append at top of file):

```markdown
## <YYYY-MM-DD> — <Short title>

- **Trigger:** <What happened that prompted this entry>
- **Layers/artifacts implicated:** <e.g. Layer 2 — Governance Protocol>
- **What occurred:** <Short narrative — what happened and why it mattered>
- **Signals that triggered action:** <What made this visible as a problem>
- **What changed or was tried:** <Decision made, experiment run, rule added>
- **Outcome:** <Result after review, if known>
- **Follow-up owner and due date:** <Name / role and date, or "none">
```

---

## 4. Proposal File Format

This is the **repository archive format** for proposals — the record filed to the repo after a Fruit Haven vote concludes. The submission itself is a separate step done directly in the Fruit Haven voting app before the vote opens (a proposal template for the voting app is tracked as a missing technical implementation).

All proposal files must follow this template. Save new proposals as:
`proposals/<status>/<YYYY-MM-DD>_<short-kebab-title>.md`

```markdown
# Proposal: <Title>

- **Status:** Draft / Under Vote / Passed / Rejected
- **Submitted:** <YYYY-MM-DD>
- **Submitted by:** <Name or role>
- **Decision type:** Operational / Strategic / Constitutional
- **Authorized decision path:** <Decision Matrix reference or description>

---

## Summary

<1–3 sentences describing what this proposal changes and why.>

## Affected Layers and Artifacts

- Layer X — `layers/X-name/artifact-name.md`

## Change Type

- [ ] Permanent rule change
- [ ] Time-bounded experiment

## Rationale

<Why this change is needed. What problem it solves or what improvement it enables.>

## Risks and Mitigations

<Known risks and how they are addressed.>

## Transition and Migration Plan

<What existing roles, agreements, or records need to change. Or: "No migration required.">

## Rollback Plan

<How to revert this change if it causes harm. Rollback triggers.>

## Effective Date

<YYYY-MM-DD>

## Review Date (if experiment or time-bounded)

<YYYY-MM-DD or "N/A">

---

## Decision Record

- **Vote outcome:** <Passed / Rejected / Needs Review>
- **Vote date:** <YYYY-MM-DD>
- **Mechanism:** <Fruit Haven vote / consent / delegated authority>
- **Vote link:** <URL or "N/A">
- **Signatories / vote count:** <e.g. 12 approve, 1 reject, 2 abstain>
```

---

## 5. Compliance Checklist Update Rules

`compliance/checklist.md` tracks the current compliance state per layer.

- **Present** = file exists AND contains substantive, adopted content (not a stub)
- **Draft** = file exists with substantive content but has not yet been formally adopted through a governance vote
- **Stub** = file exists but is empty or placeholder only
- **Missing** = file does not exist
- **Non-compliant** = artifact exists but systematically violates RCOS requirements

Update the checklist only when you have verified the actual file state — do not assume a file is complete based on a proposal passing. Read the artifact file to confirm.

When updating:
1. Change the status cell for the affected artifact
2. Update the "Last audited" date at the top of the checklist
3. Update the overall layer compliance column if all required artifacts for that layer are now Present

---

## 6. Linking Conventions

When writing markdown links to internal layer artifacts or proposal files, **never include the `.md` extension** in either the link text or the href. Use the path without extension in both places.

**Correct:**
```markdown
[layers/1-membership/04-membership-state-registry](/layers/1-membership/04-membership-state-registry)
```

**Incorrect:**
```markdown
[layers/1-membership/04-membership-state-registry.md](/layers/1-membership/04-membership-state-registry)
```

---

## 7. Do Not Do

- Do not mark an artifact as Present based on intent or a draft
- Do not skip version history when merging a passed proposal
- Do not make informal edits to artifact files without a corresponding proposal (unless fixing a typo or formatting error — note these in the commit message)
- Do not delete content from `proposals/rejected/` — it is a permanent archive
- Do not change Layer 0 artifacts without a Constitutional decision record
- Do not update `compliance/checklist.md` to "Compliant" while any mandatory artifact for that layer is missing or is a stub
