# Change Protocol

- **Layer:** 6 — Evolution & Adaptation
- **Status:** Stub — not yet adopted
- **RCOS reference:** §8.1, §8.5, §8.6

---

## How Changes Are Proposed

Any Full Member may propose a change to any RCOS artifact. Proposals are submitted via Snapshot first (per the Governance Protocol, Layer 2) — not as repository PRs. After the vote concludes, the Membership Admin adds the proposal file to the repository. Every proposal must include:

- Summary of the change
- Affected layers and artifacts (with links)
- Decision type (Operational / Strategic / Constitutional)
- Rationale
- Risks and mitigations
- Rollback plan
- Proposed effective date

## How Proposals Are Classified

- **Operational:** wording corrections, formatting, and minor content updates to artifacts — no vote required; executed by Membership Admin within delegated limits
- **Strategic:** changes to Layer 1–5 content that affect member rights, processes, or structures
- **Constitutional:** changes to Layer 0 (purpose, scope, invariants) or to the governance system itself (Layer 2)

> If classification is unclear, it defaults to the higher-impact type.

## Review and Deliberation

- **Operational:** no deliberation required
- **Strategic:** minimum 5-day deliberation period; deliberation happens in Discord or forum; a Governance meeting may be called per the meeting template (Layer 5)
- **Constitutional:** minimum 15-day deliberation period; deliberation in Discord and forum; a Governance meeting is strongly recommended; 30-day ratification period after the vote passes

## Adoption and Publication

When a proposal passes:
1. Membership Admin adds the proposal file to `proposals/passed/` within 7 days
2. Affected artifacts in `layers/` are updated within 7 days
3. `layers/6-evolution/02-version-history.md` is updated to record the change
4. Status fields in affected artifacts are updated from *Stub — not yet adopted* to *Active — adopted <YYYY-MM-DD>*

## Rejection

When a proposal is rejected:
1. Membership Admin adds the proposal file to `proposals/rejected/` within 7 days
2. No artifact changes are made
3. The re-vote mechanism applies if new information emerges (per the Decision Matrix, Layer 2)

## Transition and Migration

When a rule change affects existing roles, agreements, or records:
- Existing role holders are notified of any changes to their scope before the change takes effect
- Existing members' rights may not be reduced without their consent or a Constitutional vote
- Records that predate the change are not retroactively altered unless explicitly part of the proposal
- A transition period may be defined in the proposal itself

## Rollback

Any passed decision can be reversed through the same process as the original decision. Any Full Member may trigger a re-vote by submitting a written reasoned objection that was not considered during the original deliberation (per the Decision Matrix, Layer 2). Rollback uses the same decision type as the original decision.

## Emergency Changes

An emergency operational change may be made by Membership Admin only if all of the following conditions are met:

1. Immediate action is required to prevent safety harm or platform failure
2. A Full Member vote cannot be convened in time
3. The change does not override a Layer 0 invariant

Emergency changes must be:
- Reported to all Full Members within 48 hours
- Reviewed at the next community meeting
- Ratified via the appropriate decision type within 30 days, or automatically rolled back

## Experiments

Any Full Member may propose a time-bounded experiment via Strategic decision. Every experiment must define:
- Scope (what is being tried and what it affects)
- Duration (maximum 90 days)
- Review checkpoints within the experiment duration (at minimum one midpoint check-in)
- Success and failure criteria
- Rollback conditions and rollback process
- Authorized decision path for starting, extending, modifying, or terminating the experiment

Experiments expire automatically at the end of their defined duration unless explicitly renewed via a new proposal. Renewal requires a new Strategic vote. Results and learnings are recorded in the Learning Log (`layers/6-evolution/03-learning-log.md`).

All artifacts affected by an experiment MUST be explicitly labeled as experimental for the duration.

**Safety suspension:** If an experiment introduces a credible safety risk, coercion, or sustained harm, the Membership Admin may suspend the experiment immediately as an emergency protective action. The suspension must be reported to all Full Members within 48 hours and reviewed at the next community meeting. Post-hoc ratification or rollback follows the emergency change process above.

---

## Ratification Record

- **Adopted:** <YYYY-MM-DD>
- **Decision type:** Constitutional
- **Version:** <version>
- **Decision record:** <link to decision record>
