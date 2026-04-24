# Operations Manual

- **Layer:** 5 — Operations & Coordination
- **Status:** Stub — not yet adopted
- **RCOS reference:** §7.1, §7.3, §7.4, §7.5, §7.6

---

## Core Operational Processes

> Critical processes must be documented such that continuity does not depend on knowledge held by specific individuals.

| Process | Who | Detail |
|---|---|---|
| Member onboarding | Membership Admin | Processes application, triggers trial period, monitors 30-day window, grants Full Member status on completion — see Onboarding Protocol (Layer 1) |
| Member exit | Membership Admin | Processes voluntary exit request or forced exit per Layer 4 outcome — see Exit & Separation Protocol (Layer 1) |
| Proposal publication | Proposing member + Membership Admin | Proposing member submits to Snapshot; Membership Admin adds proposal file to `proposals/passed/` or `proposals/rejected/` within 7 days of vote conclusion; affected artifacts updated within 7 days — see Governance Protocol (Layer 2) |
| Contribution recording | Member (self-reported) / Puckstack (automatic) | Structured contributions credited automatically via Puckstack/Offcoin; informal contributions self-reported in ecohubsOS — see Internal Economy Protocol (Layer 3) |
| Weekly meeting | Facilitator | Publishes agenda in Discord ≥24 hours in advance; posts meeting notes in Discord after the meeting; action items tracked until resolved |
| Treasury management | Finance Steward | Ensures all Full Members have Safe Proposer access; publishes fiat account summaries at least every 6 months if the account does not support direct member access — see Treasury Ruleset (Layer 3) |
| Platform access review | Infrastructure Steward | Reviews platform permissions quarterly; revokes access for exited members within 24 hours |

## Temporary and Ad-Hoc Responsibilities

> Temporary responsibilities must not silently become ongoing.

When a task or responsibility is assigned temporarily (e.g. covering for an absent role holder, handling a one-off project), it must be:
- Explicitly time-bounded from the outset (a specific end date or completion condition must be stated)
- Documented as a temporary assignment (in Discord or the relevant task tool) at the time of assignment
- Reviewed before the end date; if the need continues beyond the original scope, the responsibility must be formally assigned through the Role Registry process

No temporary or ad-hoc responsibility may persist beyond 90 days without being converted into a formally defined role or terminated. If a temporary responsibility has no owner after its end date, it lapses — it does not transfer implicitly to any other member or role.

---

## Role and Domain Interfaces

> How roles, domains, and meeting types connect and hand off to each other.

| From | To | Handoff |
|---|---|---|
| Membership Admin | Finance Steward | New member requires Safe Proposer access |
| Membership Admin | Infrastructure Steward | New or exiting member requires platform access changes |
| Content Creator | Communications Steward | Content ready for publication or social media |
| Digital Builder | Infrastructure Steward | New features ready for deployment |
| Research Steward | Blueprint Steward | Research findings for framework consideration |
| Blueprint Steward | Facilitator | Workshop content or agenda input |
| Any role holder | Facilitator | Agenda items for community meetings |

## Workload Boundaries

> Time, attention, and emotional labor are finite resources. Limits must be explicit and reviewable.

- **Meeting load:** One weekly community meeting, 90 minutes maximum. Extraordinary meetings may be called by any Full Member but should be the exception.
- **Role load:** No formal cap currently. Role holders are responsible for flagging overload at any community meeting or in Discord. Any overload concern must be addressed within 14 days; roles may be redistributed via the governance process.
- **Response time expectations:** Non-urgent async messages (Discord, forum): 72 hours. Urgent operational matters: 24 hours. Safety-critical matters: as soon as possible.
- **Renegotiation and relief:** Any role holder may request redistribution of responsibilities at any community meeting. The community seeks a solution within 14 days.

## Operational Continuity

> No single individual may be a critical single point of failure for core operations.

- **Current state:** All operational roles are held by the founding member (Stefan). This is an acknowledged single point of failure; active recruitment of role holders is ongoing to reduce concentration.
- **Handover mechanisms:** Handover requirements for each role are defined in the Role Registry (Layer 5). Handover must be completed before a role is vacated.
- **Continuity review cadence:** Operational continuity is reviewed quarterly at a Reflection & Learning meeting, or at any community meeting when a role change occurs.

## Information Flow and Anti-Gatekeeping

> Information access rules must be explicit and enforceable. No single person or role may act as an informal gatekeeper for information that members are entitled to access.

- All governance decisions (passed and rejected proposals) are filed in this repository and are accessible to all Full Members
- Meeting notes are published in Discord within 48 hours of each meeting and are accessible to all Full Members
- Membership state and role assignment information is maintained in ecohubsOS and accessible to all Full Members (individual states visible to the member and Membership Admin; aggregate member list visible to all Full Members)
- Contribution records are accessible in ecohubsOS to all Full Members
- Any Full Member may request access to any document they are entitled to see under the access rules in this manual; requests must be responded to within 72 hours
- If a role holder controls access to information that other members are entitled to receive, they may not withhold or delay it; doing so is an accountability trigger under Layer 4
- No role or individual may be the sole point of access for information required by other role holders to perform their responsibilities

---

## Documentation Locations and Update Procedures

| Document type | Location | Owner | Review cadence |
|---|---|---|---|
| RCOS artifacts | `layers/` in this repo | Blueprint Steward / Membership Admin | Per change protocol (Layer 6) |
| Member registry | ecohubsOS | Membership Admin | Ongoing |
| Meeting notes | Discord (dedicated channel) | Facilitator | After each meeting |
| Governance proposals (passed) | `proposals/passed/` in this repo | Membership Admin | Within 7 days of vote |
| Governance proposals (rejected) | `proposals/rejected/` in this repo | Membership Admin | Within 7 days of vote |
| Contribution records | ecohubsOS / Offcoin | Member (self-reported) / Puckstack (auto) | Ongoing |
| Missing technical implementations | `resources/missing-technical-implementations.md` | Infrastructure Steward / Digital Builder | Quarterly |
| Future proposals | `resources/future-proposals.md` | Blueprint Steward / Membership Admin | As needed |

---

## Ratification Record

- **Adopted:** <YYYY-MM-DD>
- **Decision type:** Strategic
- **Version:** <version>
- **Decision record:** <link to decision record>
