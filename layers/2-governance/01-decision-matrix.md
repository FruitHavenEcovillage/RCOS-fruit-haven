# Decision Matrix

- **Layer:** 2 — Governance & Decision Logic
- **Status:** Stub — not yet adopted
- **RCOS reference:** §4.2, §4.4, §4.7

> Maps every decision type and domain to an authorized role or body, mechanism, threshold, and escalation path. Decisions made outside this matrix are considered invalid.

---

## Voting Principles

:::rcos{clauses="4.2.1, 4.2.3, 4.2.4"}
:::

:::rationale{title="Why pin down mechanism, threshold, and timing?"}
A vote without a predefined mechanism, threshold, and deliberation window is an invitation to manufacture outcomes after the fact — whoever counts the votes or sets the clock wins. Declaring these parameters in advance makes every collective decision reproducible and contestable on the same terms, regardless of who is in the room.
:::

- All collective decisions requiring a vote use the **ecohubsOS internal voting system** (off-chain, one-member-one-vote, votes recorded and tallied inside ecohubsOS)
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

:::rcos{clauses="4.4.1, 4.4.2, 4.4.3, 4.4.4"}
:::

:::rationale{title="Why a single authoritative matrix?"}
If the rules for who decides what live in people's heads, authority becomes whatever the loudest or most senior person says it is. A public matrix that binds every decision to a domain, body, mechanism, and threshold makes out-of-scope action visible the moment it happens — and makes any decision made outside it invalid by construction.
:::

| Decision Domain                                       | Decision Type  | Authorized Body | Eligible Participants | Mechanism                           | Threshold          | Blocking / Veto conditions   | Escalation        |
| ----------------------------------------------------- | -------------- | --------------- | --------------------- | ----------------------------------- | ------------------ | ---------------------------- | ----------------- |
| Membership admission                                  | Operational    | Membership Admin | N/A                   | Delegated                           | N/A                | None                         | Full Members vote |
| Membership forced exit                                | Strategic      | Full Members    | All Full Members      | ecohubsOS vote                       | Simple majority    | Reasoned objection → re-vote | N/A               |
| RCOS artifact changes (wording, formatting, content)  | Operational    | Membership Admin | N/A                   | Delegated                           | N/A                | None                         | Full Members vote |
| RCOS Core layer changes                               | Strategic      | Full Members    | All Full Members      | ecohubsOS vote                       | Simple majority    | Reasoned objection → re-vote | N/A               |
| Adding or retiring optional RCOS modules              | Operational    | Membership Admin | N/A                   | Delegated                           | N/A                | None                         | Full Members vote |
| Treasury spending — any amount (current: limit is €0) | Strategic      | Full Members    | All Full Members      | ecohubsOS vote                       | Simple majority    | Reasoned objection → re-vote | N/A               |
| Platform and channel changes — routine                | Operational    | Infrastructure Steward / Communications Steward | N/A                   | Delegated                           | N/A                | None                         | Full Members vote |
| Platform and channel changes — structural             | Strategic      | Full Members    | All Full Members      | ecohubsOS vote                       | Simple majority    | Reasoned objection → re-vote | N/A               |
| Partnerships and brand use                            | Strategic      | Full Members    | All Full Members      | ecohubsOS vote                       | Simple majority    | Reasoned objection → re-vote | N/A               |
| Governance rule changes                               | Constitutional | Full Members    | All Full Members      | ecohubsOS vote + 30-day ratification | Supermajority (≥⅔) | Reasoned objection → re-vote | N/A               |
| Primary purpose, scope, invariant, or identity constraint changes | Constitutional | Full Members    | All Full Members      | ecohubsOS vote + 30-day ratification | Supermajority (≥⅔) | Reasoned objection → re-vote | N/A               |
| Community support and facilitation activities         | Operational    | Facilitator     | N/A                   | Delegated                           | N/A                | None                         | Full Members vote |

> **Operational role holders:** Each operational decision is executed by the named role holder responsible for that domain, acting within their defined scope per the Role Registry (Layer 5). Where a decision spans multiple domains, each role holder acts within their own scope.

## Decision Type Definitions

:::rcos{clauses="4.1.1, 4.1.2, 4.1.3, 4.1.4, 4.1.5"}
:::

:::rationale{title="Why classify every decision?"}
Without a type, every decision gets handled at whatever speed and scrutiny happens to suit the moment — routine changes stall in debate, and constitutional shifts slip through unnoticed. Fixed types tie the weight of a decision to the process it must pass through, and the default-higher rule closes the gap where ambiguity would otherwise be exploited.
:::

- **Operational** — Day-to-day functioning within existing rules. Routine role-holder operations remain delegated (no vote). System-driven decisions (e.g. membership applications, blog publication) are surfaced as auto-created proposals with a short 3-day vote window and no deliberation period — simple majority decides.
- **Strategic** — Long-term direction, significant resource allocation, creation or removal of major structures. Requires a Full Member ecohubsOS vote; minimum 5-day deliberation period; 7-day vote window; simple majority.
- **Constitutional** — Changes to Layer 0 (purpose, scope, invariants, or identity constraints) or the governance system itself. Requires a Full Member ecohubsOS vote, supermajority (≥⅔), 14-day vote window, minimum 15-day deliberation period before vote opens, and a 30-day ratification period after vote closes.

> If a decision cannot be clearly classified, it defaults to the higher-impact type.

---

## Ratification Record

- **Adopted:** <YYYY-MM-DD>
- **Decision type:** Constitutional
- **Version:** <version>
- **Decision record:** <link to decision record>
