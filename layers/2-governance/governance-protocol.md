# Governance Protocol

- **Layer:** 2 — Governance & Decision Logic
- **Status:** Stub — not yet adopted
- **RCOS reference:** §4.5, §4.6, §4.7

> Defines the full lifecycle of a collective decision — from proposal submission to documentation and appeal.

---

## Proposal Submission

> _Requirements for submitting a proposal. Who may submit, what must be included, where it is filed._

- **Operational decisions** do not require a proposal — the relevant operational role holder executes within delegated limits per the Role Registry (Layer 5)
- **Strategic and Constitutional decisions:** Any Full Member may submit a proposal directly on Snapshot using the predefined proposal template (see [Missing Technical Implementations](../../resources/missing-technical-implementations.md))
- Every proposal must include: summary of the change, affected layers and artifacts, decision type, rationale, risks and mitigations, rollback plan, and proposed effective date
- Decision type must be declared in the proposal; if unclear, defaults to the higher-impact type
- **Withdrawal:** A proposer may withdraw their proposal at any point before the Snapshot vote opens by notifying the community via Discord or forum. Once the vote has opened, withdrawal is not possible.

## Review and Deliberation

> _How proposals are reviewed. Where deliberation happens. Time bounds._

- Deliberation happens in the community forum (discussions.ecohubs.community) or Discord before and during the Snapshot vote window
- **Minimum deliberation period before a vote opens:**
  - Strategic: 5 days
  - Constitutional: 15 days
- Members are encouraged to raise concerns during deliberation to avoid the need for re-votes after the fact

## Decision Execution

> _How adopted decisions are enacted. Who is responsible for implementation._

- On **passing:** the proposer or Membership Admin adds the proposal file to `proposals/passed/` in this repository and applies the change to the affected artifact(s) in `layers/`; `layers/6-evolution/version-history.md` is updated
- On **rejection:** the proposal file is added to `proposals/rejected/` for archive
- Artifact updates must reflect the adopted decision accurately and completely

## Documentation and Publication

> _Where decisions are recorded. Who publishes them. By when._

- All passed and rejected proposals are filed in this repository within 7 days of the vote closing
- The Snapshot vote link is included in the proposal file as the decision record
- Version history is updated with every passed proposal

## Appeal and Review

> _How a decided outcome can be challenged. Who may appeal. What process applies._

- Any Full Member may trigger a re-vote on any passed decision by submitting a written, reasoned objection via the community forum or Discord
- The objection must raise a consideration that was not addressed during deliberation
- A re-vote is held using the same Snapshot mechanism and threshold as the original decision
- There is no limit on how many times a decision can be re-voted, but repeated frivolous re-vote requests may themselves be subject to a governance review

## Conflict Between Decisions

> _How conflicts between decisions of the same or different types are resolved._

- If two decisions conflict, the higher-impact decision type prevails (Constitutional > Strategic > Operational)
- If two decisions of the same type conflict, the more recent decision prevails unless the earlier decision explicitly locked future changes
- Conflicts must be surfaced via the community forum; resolution follows the standard proposal process

## Safeguards and Failure Modes

> _§4.6 — The governance system must include safeguards against concentration of decision power, informal vetoes, decision capture by subgroups, and founder or role entrenchment. Mechanisms must allow challenge and review without retaliation. Persistent governance failures must trigger a formal review or constitutional process._

- **Power concentration:** All decisions above Operational level require a Full Member vote; no individual or role has unilateral authority beyond the delegated operational role limits defined in the Role Registry (Layer 5)
- **Informal vetoes:** Only written, reasoned objections submitted via the defined process may trigger a re-vote; social pressure or private objections have no governance weight
- **Decision capture:** Snapshot voting is open to all Full Members simultaneously; no quorum requirement beyond votes cast (any participation level is valid)
- **Founder/role entrenchment:** No role grants permanent authority; all roles are defined in the Role Registry with explicit terms and removal processes; founders hold no special governance authority beyond their membership state
- **Challenge without retaliation:** Any member raising a re-vote request or governance concern is protected by the anti-retaliation provisions in Layer 4
- **Persistent failure trigger:** Three or more governance failures within a 6-month period (decisions made outside the matrix, re-votes triggered by process failures, blocked escalations) must trigger a Constitutional review of the governance system

---

## Ratification Record

- **Adopted:** <YYYY-MM-DD>
- **Decision type:** Constitutional
- **Version:** <version>
- **Decision record:** <link to decision record>
