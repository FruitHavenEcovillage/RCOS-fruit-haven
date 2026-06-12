# Exit & Separation Protocol

- **Layer:** 1 — Membership System
- **Status:** Stub — not yet adopted
- **RCOS reference:** §3.6, §3.7, §3.8

---

## Voluntary Exit

:::rcos{clauses="3.6.1, 3.6.2, 3.6.4"}
:::

:::rationale{title="Why make leaving frictionless?"}
A community that is hard to leave is not a community — it is a trap. Voluntary exit must be available at all times, without interrogation, notice periods, or punishment, because the right to withdraw consent is what makes every other act of consent real. Retaining contribution history separately ensures that leaving does not erase the work the person did.
:::

- Any Full Member or Trial Member may exit at any time by submitting a request through Fruit Haven (reason optional)
- No notice period required; if the member holds a role, they are asked to consider a handover where appropriate
- Access is revoked within 24 hours of admin confirmation
- Contribution history and XP are retained permanently
- Membership state transitions to Exited Member
- Exit is recorded in Fruit Haven with a timestamp

## Forced Exit

:::rcos{clauses="3.6.3, 3.6.4"}
:::

:::rationale{title="Why gate removal behind Layer 4?"}
Removal is the sharpest power the community holds over a person. If it can be exercised by anyone with enough social pull, membership is worthless. Requiring a concluded Layer 4 accountability decision — with written reasons, a notification, and a minimum re-application window — turns removal from an act of power into an act of governance that can be reviewed and contested.
:::

- Forced exit may only result from a concluded Layer 4 accountability process with a documented decision
- The affected member must be notified in writing with the reason and decision record reference before access is revoked
- Access is revoked within 24 hours of the decision being finalised
- Accounts on platforms related to Fruit Haven (Discord, Notion, Puckstack, etc.) may be deleted or blocked depending on the severity of the decision and platform capabilities
- Contribution history and XP are retained
- Membership state transitions to Exited Member
- For the duration of the banishment/forced exit, the individual is temporarily stripped of their community member status and loses any previously possessed voting power. If they have residency in other Fruit Haven community areas, they may retain it if that area permits, but their Fruit Haven community membership is no longer recognized.
- The member may not reapply for a period defined in the accountability decision (minimum 6 months)
- The decision record is retained permanently; access to it is governed by the privacy rules in the Conflict Resolution Ladder

## Suspension

:::rcos{clauses="3.7.1, 3.7.2, 3.7.3"}
:::

:::rationale{title="Why leave suspension undefined for now?"}
A poorly-designed suspension state is worse than none — it becomes a soft exit with no due process, or an indefinite limbo used to punish without the accountability of a full removal. Until the community can commit to explicit conditions, time bounds, and review mechanisms, it is safer to have no formal suspension than a loose one.
:::

Formal membership suspension is not yet technically implemented. See [Future Proposals](../../proposals/future) for the deferred Suspended Member state design.

## Asset, Role, and Responsibility Separation

:::rcos{clauses="3.6.5"}
:::

:::rationale{title="Why enumerate separation steps?"}
When someone leaves, every unclosed thread — a role nobody vacated, a wallet key still active, a task still assigned — becomes a live attack surface or an operational gap. A checklist forces these threads to be closed deliberately, not discovered months later when something breaks or someone abuses access they no longer should have.
:::

The following separation steps apply to both voluntary and forced exits:

- Any roles held must be vacated and documented in the Role Registry
- Ongoing tasks claimed in Puckstack must be released or handed over
- Safe wallet co-signer or Proposer status must be removed
- All administrative access to platforms (Fruit Haven, Discord, social media, Notion, Puckstack, etc.) must be revoked
- Outstanding obligations (incomplete tasks, financial commitments) must be resolved or transferred before exit is finalised where possible

---

## Ratification Record

- **Adopted:** <YYYY-MM-DD>
- **Decision type:** Strategic
- **Version:** <version>
- **Decision record:** <link to decision record>
