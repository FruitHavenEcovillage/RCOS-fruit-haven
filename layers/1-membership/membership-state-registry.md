# Membership State Registry

- **Layer:** 1 — Membership System
- **Status:** Stub — not yet adopted
- **RCOS reference:** §3.1, §3.8

---

## Defined Membership States

| State | Rights | Obligations | Entry condition | Exit condition |
|---|---|---|---|---|
| Applicant | Access to public EcoHubs information and application process; access to public Discord channels; can join public calls as listener; may request permission to speak; right to withdraw at any time | Honest and complete application submission | Completed application submitted via ecohubs.community | Vote approved → Trial Member; vote rejected → Exited Member |
| Trial Member | Same as Applicant; onboarding process unlocked | Begin and complete onboarding within the defined period (see Onboarding Protocol) | Snapshot vote approved | Onboarding complete → Full Member; onboarding period expired → exit or extension process (see Onboarding Protocol); voluntary exit → Exited Member |
| Full Member | Voting rights per Decision Matrix; access to all member-only Discord channels and speaking rights in calls; full access to ecohubsOS; ability to earn XP/ECO and claim tasks; ability to hold roles (defined in Layer 5); access to all community artifacts and records; right to propose changes via the governance process | Meet minimum participation expectations (see Membership Agreement); adhere to all Layer 0 identity constraints and invariants; contribute in at least one recognized category; participate in conflict resolution processes when required | Onboarding completed | Voluntary exit (see Exit & Separation Protocol); forced exit via Layer 4 due process |
| Exited Member | Access to public Discord channels and public calls (listener); may request permission to speak in public calls; may re-apply as Applicant | None; must not misrepresent former membership status; adhere to Layer 0 identity constraints when interacting in public channels | Exit process completed | May re-enter as Applicant through a new application |

> No individual may hold multiple membership states simultaneously.  
> No rights or obligations may be assumed outside of the individual's current membership state.

## Technical Notes

- Contribution history and XP are retained in ecohubsOS after exit — records are preserved for audit and transparency purposes.
- Exited members have their access blocked; they are removed from all member listings.
- Depending on platform capabilities, exited members may be blocked or fully removed from ecohubsOS-related platforms (Discord, forum, etc.).
- A formal member exit flow in ecohubsOS is not yet implemented — see [Future Proposals](../../resources/future-proposals.md).

## Current Member List

> The live member list is maintained in ecohubsOS. This document defines the states; the registry tool holds the current assignments.

[Link to ecohubsOS member directory]

---

## Ratification Record

- **Adopted:** [date]
- **Decision type:** Strategic
- **Version:** [version]
- **Decision record:** [link to proposal]
