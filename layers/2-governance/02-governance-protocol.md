# Governance Protocol

- **Layer:** 2 — Governance & Decision Logic
- **Status:** Present
- **RCOS reference:** §4.5, §4.6, §4.7

> Defines the full lifecycle of a collective decision — from proposal submission to documentation and appeal.

---

## Proposal Submission

- **Operational decisions** do not require a proposal — the relevant operational role holder executes within delegated limits per the Role Registry (Layer 5). Informal consensus should be attempted.
- **Strategic and Constitutional decisions:** Any Active Member may submit a proposal directly for consideration at a community meeting using the predefined proposal template.
- Every proposal must include: summary of the change, affected layers and artifacts, decision type, rationale, risks and mitigations, rollback plan, and proposed effective date.
- Decision type must be declared in the proposal; if unclear, defaults to the higher-impact type.
- **Withdrawal:** A proposer may withdraw their proposal at any point before testing consensus by notifying the community. Once consensus is tested, withdrawal is not possible.

## Review and Deliberation

- Deliberation happens in the community forum, Discord, or directly during the Community Meeting.
- Minimum deliberation guidelines apply to ensure adequate time for review before a meeting.
- Members are encouraged to raise concerns during deliberation and use non-adversarial discussion techniques to prevent "adversarial debate".

## Decision Execution

- On **testing consensus:** If unanimity minus one is reached among present voting members, the proposal is considered “Passed, pending consensus of non-present community members with voting power.”
- **Absentee Review (2 weeks):** The proposal is included in the meeting minutes. All non-present community members with voting power have a period of 2 weeks to respond.
- On **final passing:** If no valid objection is presented within 2 weeks, non-present members consent *in absentia*. The proposal file is added to `proposals/passed/` in this repository and the change is applied to the affected artifact(s) in `layers/`; `layers/6-evolution/02-version-history.md` is updated.
- On **rejection:** The proposal file is added to `proposals/rejected/` for archive.

## Documentation and Publication

- The meeting minutes must be saved in permanent record, emailed to all community members, and made available centrally.
- Hard copies of the minutes, bylaws, and formal proposals must be saved in date order in the community house.
- Version history is updated with every passed proposal.

## Appeal and Review

- Within the 2-week absentee review period, a non-present member may present an objection combined with a demonstration that the proposal violates the community vision.
- A re-vote or re-testing of consensus is held using the same consensus mechanism if a valid objection is raised.

## Conflict Between Decisions

- If two decisions conflict, the higher-impact decision type prevails (Constitutional > Strategic > Operational)
- If two decisions of the same type conflict, the more recent decision prevails unless the earlier decision explicitly locked future changes
- Conflicts must be surfaced via the community forum; resolution follows the standard proposal process

## Safeguards and Failure Modes

- **Power concentration:** All formal decisions require consensus testing at a meeting; no individual or role has unilateral authority beyond the delegated operational role limits defined in the Role Registry (Layer 5).
- **Informal vetoes:** Only valid objections submitted via the defined process (with demonstration of vision violation) may block a proposal; social pressure or private objections have no governance weight.
- **Decision capture:** The 2-week absentia period ensures non-present members cannot be sidelined by impromptu meeting decisions.
- **Founder/role entrenchment:** No role grants permanent authority; all roles are defined in the Role Registry with explicit terms and removal processes; founders hold no special governance authority beyond their membership state.
- **Challenge without retaliation:** Any member raising a re-vote request or governance concern is protected by the anti-retaliation provisions in Layer 4.
- **Persistent failure trigger:** Three or more governance failures within a 6-month period must trigger a Constitutional review of the governance system.

---

## Ratification Record

- **Adopted:** 2019-05-17 (Original Bylaws), 2026-05-19 (RCOS adaptation)
- **Decision type:** Constitutional
- **Version:** v1.0.0
- **Decision record:** proposals/passed/2019-05-17_fh1-bylaws.md
