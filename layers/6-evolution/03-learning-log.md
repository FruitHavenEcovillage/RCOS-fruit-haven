# 3 Learning Log

- **Layer:** 6 — Evolution & Adaptation
- **Status:** Active — updated when learnable events occur
- **RCOS reference:** §8.4, §8.6

> Records major failures, adaptations, reversals, and systemic learnings. Repeated failure patterns must trigger structural review, not individual blame. Entries are prepended (most recent first).

---

## What Constitutes a Learnable Event

:::rcos{clauses="8.4.1, 8.4.4, 8.6.5, 8.7.4"}
:::

:::rationale{title="Why define the trigger explicitly?"}
If "we should learn from this" is left to individual judgement, the hardest lessons — the ones involving conflict, failure, or embarrassment — are the ones most likely to go unrecorded. Naming the specific events that MUST produce an entry takes the question out of the moment, and makes sure uncomfortable learnings are captured rather than quietly dropped.
:::

An entry MUST be added when any of the following occur:

- A governance decision is reversed, rolled back, or found to contradict another adopted rule
- An experiment concludes (success, failure, or early termination)
- A conflict escalates to Step 5 (Governance decision) of the Conflict Resolution Ladder
- A structural or systemic failure is identified that caused harm, confusion, or repeated process breakdown
- A major adaptation to community operations is adopted that significantly changes how a layer functions
- A near-miss: a situation that could have caused significant harm but was caught before it did
- Any event the community collectively identifies as worth learning from

Minor operational adjustments, routine decisions, and individual member issues that are fully resolved at Step 1–3 of the Conflict Resolution Ladder do not require a Learning Log entry.

---

_No entries yet. First entry will be added when the first learnable event occurs._

---

## Entry Format

:::rcos{clauses="8.4.2, 8.4.3, 8.6.5"}
:::

:::rationale{title="Why a fixed entry template?"}
Free-form reflection is valuable, but it does not aggregate. A consistent schema — trigger, signals, what changed, outcome, follow-up owner — makes it possible to scan years of entries for recurring patterns and to turn isolated incidents into structural evidence. It also forces each entry to name an owner, so learning does not stop at "we noticed."
:::

```markdown
## <YYYY-MM-DD> — <Short title>

- **Trigger:** <What happened that prompted this entry>
- **Layers/artifacts implicated:** <e.g. Layer 2 — Governance Protocol>
- **What occurred:** <Short narrative>
- **Signals that triggered action:** <What made this visible as a problem>
- **What changed or was tried:** <Decision, experiment, or rule change>
- **Outcome:** <Result after review, if known>
- **Follow-up owner and due date:** <Name / role and date, or "none">
```
