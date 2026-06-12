# Governance Protocol

- **Layer:** 2 — Governance & Decision Logic
- **Status:** Present
- **RCOS reference:** §4.5, §4.6, §4.7

> Defines the full lifecycle of a collective decision — from proposal submission to documentation and appeal.

---

## Proposal Submission

:::rcos{clauses="4.5.1, 4.5.2"}
:::

:::rationale{title="Why formalize how proposals enter the system?"}
A decision process that accepts proposals informally — a message, a verbal suggestion, a founder's idea — has no reliable way to tell what is actually on the table. Requiring a standard submission format, filing location, and mandatory content fields means every proposal arrives with the same information, visible to everyone, traceable from day one.
:::

- **Operational decisions** do not require a proposal — the relevant operational role holder executes within delegated limits per the Role Registry (Layer 5). Informal consensus should be attempted.
- **Strategic and Constitutional decisions:** Any Active Member may submit a proposal directly for consideration at a community meeting using the predefined proposal template.
- Every proposal must include: summary of the change, affected layers and artifacts, decision type, rationale, risks and mitigations, rollback plan, and proposed effective date.
- Decision type must be declared in the proposal; if unclear, defaults to the higher-impact type.
- **Withdrawal:** A proposer may withdraw their proposal at any point before testing consensus by notifying the community. Once consensus is tested, withdrawal is not possible.

## Review and Deliberation

:::rcos{clauses="4.5.1, 4.5.2"}
:::

:::rationale{title="Why enforce a minimum deliberation window?"}
Rushed votes favor whoever is already paying attention and disadvantage everyone else. A mandatory deliberation period, tied to the weight of the decision, gives members time to read, respond, and surface concerns before the vote opens — so the vote reflects considered judgment, not speed of reaction.
:::

- Deliberation happens in the community forum, Discord, or directly during the Community Meeting.
- Minimum deliberation guidelines apply to ensure adequate time for review before a meeting.
- Members are encouraged to raise concerns during deliberation and use non-adversarial discussion techniques to prevent "adversarial debate".

## Decision Execution

:::rcos{clauses="4.5.1, 4.5.4"}
:::

:::rationale{title="Why tie execution to the record?"}
A passed proposal that never reaches the affected artifact is a decision in name only — the rules on the ground still say what they said before. Binding execution to a concrete artifact update and version-history entry closes the gap between what was decided and what is actually in force.
:::

- On **testing consensus:** If unanimity minus one is reached among present voting members, the proposal is considered “Passed, pending consensus of non-present community members with voting power.”
- **Absentee Review (2 weeks):** The proposal is included in the meeting minutes. All non-present community members with voting power have a period of 2 weeks to respond.
- On **final passing:** If no valid objection is presented within 2 weeks, non-present members consent *in absentia*. The proposal file is added to [proposals/passed/](/proposals/passed) in this repository and the change is applied to the affected artifact(s) in `layers/`; [layers/6-evolution/02-version-history.md](/layers/6-evolution/02-version-history) is updated.
- On **rejection:** The proposal file is added to [proposals/rejected/](/proposals/rejected) for archive.

## Documentation and Publication

:::rcos{clauses="4.5.4"}
:::

:::rationale{title="Why document every outcome, including rejections?"}
Keeping a record of only the decisions that passed erases the reasoning history — members lose track of what was already considered and rejected, and the same debates get re-litigated indefinitely. Archiving both passed and rejected proposals, with a time bound and a verifiable decision record, preserves institutional memory and makes the governance system auditable.
:::

- The meeting minutes must be saved in permanent record, emailed to all community members, and made available centrally.
- Hard copies of the minutes, bylaws, and formal proposals must be saved in date order in the community house.
- Version history is updated with every passed proposal.

## Appeal and Review

:::rcos{clauses="4.5.2, 4.6.2"}
:::

:::rationale{title="Why make re-votes possible but bounded?"}
A governance system with no appeal route hardens mistakes into permanent rules; one with unlimited informal appeal paths never settles anything. Allowing any Full Member to trigger a re-vote — but only with a written, reasoned objection raising something not already addressed — keeps the system self-correcting without turning every decision into a standing referendum.
:::

- Within the 2-week absentee review period, a non-present member may present an objection combined with a demonstration that the proposal violates the community vision.
- A re-vote or re-testing of consensus is held using the same consensus mechanism if a valid objection is raised.

## Sovereignty of Community Areas and Properties

:::rationale{title="Why define sovereignty of areas?"}
Recognizing the sovereignty of localized areas ensures that decisions primarily affecting a specific physical community or property are made by the people actually residing there, preventing overreach by the broader network while maintaining shared standards.
:::

The detailed rules governing the sovereignty of community areas, community autonomy, access rules, formation of new communities, and federation voting standards are defined in the [Federation Protocol](04-federation-protocol).

## Conflict Between Decisions

:::rcos{clauses="4.5.3"}
:::

:::rationale{title="Why predefine conflict resolution?"}
When two decisions point in different directions, someone has to choose which one counts — and if that choice is made ad hoc, it reduces to whoever has the authority or energy to enforce their reading. A fixed precedence rule (higher type wins; more recent wins at the same type) resolves conflicts mechanically, without a judgment call.
:::

- If two decisions conflict, the higher-impact decision type prevails (Constitutional > Strategic > Operational)
- If two decisions of the same type conflict, the more recent decision prevails unless the earlier decision explicitly locked future changes
- Conflicts must be surfaced via the community forum; resolution follows the standard proposal process

## Safeguards and Failure Modes

:::rcos{clauses="4.6.1, 4.6.2, 4.6.3"}
:::

:::rationale{title="Why plan for governance failure up front?"}
Every governance system fails somewhere — captured by a subgroup, frozen by informal vetoes, drifted by a role holder who quietly expanded their remit. Naming the specific failure modes in advance, wiring in challenge routes that cannot be retaliated against, and requiring a formal review when failures accumulate, is what keeps governance from slowly hollowing out while no one is watching.
:::

- **Power concentration:** All formal decisions require consensus testing at a meeting; no individual or role has unilateral authority beyond the delegated operational role limits defined in the Role Registry (Layer 5).
- **Informal vetoes:** Only valid objections submitted via the defined process (with demonstration of vision violation) may block a proposal; social pressure or private objections have no governance weight.
- **Decision capture:** The 2-week absentia period ensures non-present members cannot be sidelined by impromptu meeting decisions.
- **Founder/role entrenchment:** No role grants permanent authority; all roles are defined in the Role Registry with explicit terms and removal processes; founders hold no special governance authority beyond their membership state.
- **Challenge without retaliation:** Any member raising a re-vote request or governance concern is protected by the anti-retaliation provisions in Layer 4.
- **Persistent failure trigger:** Three or more governance failures within a 6-month period must trigger a Constitutional review of the governance system.

---

## Ratification Record

- **Adopted:** 2019-05-17
- **Decision type:** Constitutional
- **Version:** v1.0.0
- **Decision record:** [proposals/passed/2019-05-17_fh1-bylaws.md](/proposals/passed/2019-05-17_fh1-bylaws)
