# Membership State Registry

- **Layer:** 1 — Membership System
- **Status:** Stub — not yet adopted
- **RCOS reference:** §3.1, §3.8

---

## Defined Membership States

:::rcos{clauses="3.1.1, 3.1.2, 3.1.3, 3.1.4, 3.1.5"}
:::

:::rationale{title="Why a single table of states?"}
Rights and obligations scattered across documents drift apart. Collecting every state, its rights, its obligations, and its transitions into one table makes the membership system auditable at a glance — you can see every door into and out of the community, and what each one grants. If two documents ever disagree, this registry is the tiebreaker.
:::

| State | Rights | Obligations | Entry condition | Exit condition |
|---|---|---|---|---|
| Applicant | Access to public EcoHubs information and application process; access to public Discord channels; can join public calls as listener; may request permission to speak; right to withdraw at any time | Honest and complete application submission | Completed application submitted via ecohubs.community; no prior forced exit, rejection, or incomplete-onboarding exit within the last 6 months (see Onboarding Protocol) | Vote approved → Trial Member; vote rejected → Exited Member |
| Trial Member | Same as Applicant; onboarding process unlocked | Begin and complete onboarding within the defined period (see Onboarding Protocol) | Snapshot vote approved | Onboarding complete → Full Member; onboarding period expired → exit or extension process (see Onboarding Protocol; member remains in Trial Member state during any extension); voluntary exit → Exited Member |
| Full Member | Voting rights per Decision Matrix; access to all member-only Discord channels and speaking rights in calls; full access to ecohubsOS; ability to earn XP/ECO and claim tasks; ability to hold roles (defined in Layer 5); access to all community artifacts and records; right to propose changes via the governance process | Meet minimum participation expectations (see Membership Agreement); adhere to all Layer 0 identity constraints and invariants; contribute in at least one recognized category; participate in conflict resolution processes when required | Onboarding completed | Voluntary exit (see Exit & Separation Protocol); forced exit via Layer 4 due process |
| Exited Member | Access to public Discord channels and public calls (listener); may request permission to speak in public calls; may re-apply as Applicant | None; must not misrepresent former membership status; adhere to Layer 0 identity constraints when interacting in public channels | Exit process completed | May re-enter as Applicant through a new application |

> No individual may hold multiple membership states simultaneously.  
> No rights or obligations may be assumed outside of the individual's current membership state.

## Technical Notes

:::rationale{title="Why preserve data after exit?"}
The community's history belongs to the community, not to any individual account. Retaining contribution records after exit protects the integrity of audit trails, governance history, and XP/ECO accounting — while revoking access and removing the person from active listings respects the finality of their departure.
:::

- Contribution history and XP are retained in ecohubsOS after exit — records are preserved for audit and transparency purposes.
- Exited members have their access blocked; they are removed from all member listings.
- Depending on platform capabilities, exited members may be blocked or fully removed from ecohubsOS-related platforms (Discord, forum, etc.).
- A formal member exit flow in ecohubsOS is not yet implemented — see [Future Proposals](../../resources/future-proposals.md).

## Current Member List

:::rcos{clauses="3.8.2"}
:::

:::rationale{title="Why separate the definition from the list?"}
This document defines what the states mean; the live registry tracks who is in which state today. Keeping them separate means the definitions are stable and governable while the assignments stay current — and nobody has to change a ratified artifact every time a member joins or leaves.
:::

> The live member list is maintained in ecohubsOS. This document defines the states; the registry tool holds the current assignments.

[Link to ecohubsOS member directory]

---

## Ratification Record

- **Adopted:** <YYYY-MM-DD>
- **Decision type:** Strategic
- **Version:** <version>
- **Decision record:** <link to decision record>
