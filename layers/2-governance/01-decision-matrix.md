# Decision Matrix

- **Layer:** 2 — Governance & Decision Logic
- **Status:** Stub — not yet adopted
- **RCOS reference:** §4.2, §4.4, §4.7

> Maps every decision type and domain to an authorized role or body, mechanism, threshold, and escalation path. Decisions made outside this matrix are considered invalid.

---

## Voting Principles

- All collective decisions requiring a vote use the **Fruit Haven internal voting system** (off-chain, one-member-one-vote, votes recorded and tallied inside Fruit Haven)
- **Operational threshold:** Simple majority (>50% of votes cast); 3-day vote window; no deliberation period required (used for routine system actions like membership applications and blog publication)
- **Strategic threshold:** Simple majority (>50% of votes cast); minimum 5-day deliberation period before vote opens; 7-day vote window
- **Constitutional threshold:** Supermajority (≥⅔ of votes cast) + 30-day ratification period; minimum 15-day deliberation period before vote opens; 14-day vote window
- **Tied vote:** A tied vote (exactly 50% for and 50% against) results in the proposal failing; the status quo is maintained
- **Re-vote:** Any Full Member may trigger a re-vote on any passed decision by submitting a written, reasoned objection that was not considered during deliberation; re-vote uses the same mechanism as the original decision
- **Reasoned objection:** A reasoned objection must cite a specific consideration that was not raised or addressed during the original deliberation — a general disagreement with the outcome does not qualify
- **Future:** Strategic decisions may move to consent-based decision-making (no reasoned objections = pass) once tooling supports it
- **Delegated authority spending limit:** Currently €0 — no community funds exist; all expenditure requires a Strategic vote until a spending threshold is adopted
- Nothing is permanent — all decisions can be revised through the appropriate process

---

## Matrix

| Decision Domain                                       | Decision Type  | Authorized Body | Eligible Participants | Mechanism                           | Threshold          | Blocking / Veto conditions   | Escalation        |
| ----------------------------------------------------- | -------------- | --------------- | --------------------- | ----------------------------------- | ------------------ | ---------------------------- | ----------------- |
| Membership admission                                  | Operational    | Membership Admin | N/A                   | Delegated                           | N/A                | None                         | Full Members vote |
| Membership forced exit                                | Strategic      | Full Members    | All Full Members      | Fruit Haven vote                       | Simple majority    | Reasoned objection → re-vote | N/A               |
| RCOS artifact changes (wording, formatting, content)  | Operational    | Membership Admin | N/A                   | Delegated                           | N/A                | None                         | Full Members vote |
| RCOS Core layer changes                               | Strategic      | Full Members    | All Full Members      | Fruit Haven vote                       | Simple majority    | Reasoned objection → re-vote | N/A               |
| Adding or retiring optional RCOS modules              | Operational    | Membership Admin | N/A                   | Delegated                           | N/A                | None                         | Full Members vote |
| Treasury spending — any amount (current: limit is €0) | Strategic      | Full Members    | All Full Members      | Fruit Haven vote                       | Simple majority    | Reasoned objection → re-vote | N/A               |
| Platform and channel changes — routine                | Operational    | Infrastructure Steward / Communications Steward | N/A                   | Delegated                           | N/A                | None                         | Full Members vote |
| Platform and channel changes — structural             | Strategic      | Full Members    | All Full Members      | Fruit Haven vote                       | Simple majority    | Reasoned objection → re-vote | N/A               |
| Partnerships and brand use                            | Strategic      | Full Members    | All Full Members      | Fruit Haven vote                       | Simple majority    | Reasoned objection → re-vote | N/A               |
| Governance rule changes                               | Constitutional | Full Members    | All Full Members      | Fruit Haven vote + 30-day ratification | Supermajority (≥⅔) | Reasoned objection → re-vote | N/A               |
| Primary purpose, scope, invariant, or identity constraint changes | Constitutional | Full Members    | All Full Members      | Fruit Haven vote + 30-day ratification | Supermajority (≥⅔) | Reasoned objection → re-vote | N/A               |
| Community support and facilitation activities         | Operational    | Facilitator     | N/A                   | Delegated                           | N/A                | None                         | Full Members vote |

> **Operational role holders:** Each operational decision is executed by the named role holder responsible for that domain, acting within their defined scope per the Role Registry (Layer 5). Where a decision spans multiple domains, each role holder acts within their own scope.

## Decision Type Definitions

- **Operational** — Day-to-day functioning within existing rules. Routine role-holder operations remain delegated (no vote). System-driven decisions (e.g. membership applications, blog publication) are surfaced as auto-created proposals with a short 3-day vote window and no deliberation period — simple majority decides.
- **Strategic** — Long-term direction, significant resource allocation, creation or removal of major structures. Requires a Full Member Fruit Haven vote; minimum 5-day deliberation period; 7-day vote window; simple majority.
- **Constitutional** — Changes to Layer 0 (purpose, scope, invariants, or identity constraints) or the governance system itself. Requires a Full Member Fruit Haven vote, supermajority (≥⅔), 14-day vote window, minimum 15-day deliberation period before vote opens, and a 30-day ratification period after vote closes.

> If a decision cannot be clearly classified, it defaults to the higher-impact type.

---

## Ratification Record

- **Adopted:** <YYYY-MM-DD>
- **Decision type:** Constitutional
- **Version:** <version>
- **Decision record:** <link to decision record>
