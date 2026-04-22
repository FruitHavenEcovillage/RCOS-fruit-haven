# Decision Matrix

- **Layer:** 2 — Governance & Decision Logic
- **Status:** Stub — not yet adopted
- **RCOS reference:** §4.2, §4.4, §4.7

> Maps every decision type and domain to an authorized role or body, mechanism, threshold, and escalation path. Decisions made outside this matrix are considered invalid.

---

## Voting Principles

- All collective decisions requiring a vote use **Snapshot** (gasless on-chain voting)
- **Operational threshold:** No vote required — delegated to Admin within explicitly defined limits
- **Strategic threshold:** Simple majority (>50% of votes cast); minimum 5-day deliberation period before vote opens
- **Constitutional threshold:** Supermajority (≥⅔ of votes cast) + 30-day ratification period; minimum 15-day deliberation period before vote opens
- **Re-vote:** Any Full Member may trigger a re-vote on any passed decision by submitting a written, reasoned objection that was not considered during deliberation; re-vote uses the same mechanism as the original decision
- **Future:** Strategic decisions may move to consent-based decision-making (no reasoned objections = pass) once tooling supports it
- **Delegated authority spending limit:** Currently €0 — no community funds exist; all expenditure requires a Strategic vote until a spending threshold is adopted
- Nothing is permanent — all decisions can be revised through the appropriate process

---

## Matrix

| Decision Domain                                       | Decision Type  | Authorized Body | Eligible Participants | Mechanism                           | Threshold          | Blocking / Veto conditions   | Escalation        |
| ----------------------------------------------------- | -------------- | --------------- | --------------------- | ----------------------------------- | ------------------ | ---------------------------- | ----------------- |
| Membership admission                                  | Operational    | Admin           | N/A                   | Delegated                           | N/A                | None                         | Full Members vote |
| Membership forced exit                                | Strategic      | Full Members    | All Full Members      | Snapshot vote                       | Simple majority    | Reasoned objection → re-vote | N/A               |
| RCOS artifact changes (wording, formatting, content)  | Operational    | Admin           | N/A                   | Delegated                           | N/A                | None                         | Full Members vote |
| RCOS Core layer changes                               | Strategic      | Full Members    | All Full Members      | Snapshot vote                       | Simple majority    | Reasoned objection → re-vote | N/A               |
| Adding or retiring optional RCOS modules              | Operational    | Admin           | N/A                   | Delegated                           | N/A                | None                         | Full Members vote |
| Treasury spending — any amount (current: limit is €0) | Strategic      | Full Members    | All Full Members      | Snapshot vote                       | Simple majority    | Reasoned objection → re-vote | N/A               |
| Platform and channel changes — routine                | Operational    | Admin           | N/A                   | Delegated                           | N/A                | None                         | Full Members vote |
| Platform and channel changes — structural             | Strategic      | Full Members    | All Full Members      | Snapshot vote                       | Simple majority    | Reasoned objection → re-vote | N/A               |
| Partnerships and brand use                            | Strategic      | Full Members    | All Full Members      | Snapshot vote                       | Simple majority    | Reasoned objection → re-vote | N/A               |
| Governance rule changes                               | Constitutional | Full Members    | All Full Members      | Snapshot vote + 30-day ratification | Supermajority (≥⅔) | Reasoned objection → re-vote | N/A               |
| Primary purpose, scope, or invariant changes          | Constitutional | Full Members    | All Full Members      | Snapshot vote + 30-day ratification | Supermajority (≥⅔) | Reasoned objection → re-vote | N/A               |
| Community support and facilitation activities         | Operational    | Admin           | N/A                   | Delegated                           | N/A                | None                         | Full Members vote |

## Decision Type Definitions

- **Operational** — Day-to-day functioning within existing rules; executed by Admin without a vote; no proposal or deliberation period required
- **Strategic** — Long-term direction, significant resource allocation, creation or removal of major structures; requires a Full Member Snapshot vote; minimum 5-day deliberation period
- **Constitutional** — Changes to Layer 0 (purpose, scope, invariants) or the governance system itself; requires a Full Member Snapshot vote, supermajority (≥⅔), and a 30-day ratification period; minimum 15-day deliberation period

> If a decision cannot be clearly classified, it defaults to the higher-impact type.

---

## Ratification Record

- **Adopted:** [date]
- **Decision type:** Constitutional
- **Version:** [version]
- **Decision record:** [link to proposal]
