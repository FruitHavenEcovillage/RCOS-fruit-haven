# Compliance Checklist

- **RCOS-Core version:** v0.1
- **Last audited:** 2026-06-12
- **Audit method:** Self-audit (content definition complete; pending formal adoption; cross-referenced against 2019 passed proposals)
- **Overall status:** Pending adoption — all artifacts have substantive content; 13 of 23 artifacts (57%) are formally adopted via 2019 community consensus ([FH1 Bylaws](../proposals/passed/2019-05-17_fh1-bylaws), [Federation Sovereignty Doctrine](../proposals/passed/2019-05-17_federation-sovereignty)); the remaining 10 RCOS-formatted artifacts have not yet been formally adopted through a Fruit Haven vote

> **Status key:**
> - `Present` — file exists with substantive, adopted content
> - `Draft` — file exists with substantive content; not yet formally adopted
> - `Stub` — file exists but is a placeholder only; does not count as compliant
> - `Missing` — file does not exist
> - `Non-compliant` — file exists but systematically violates RCOS requirements

---

## RCOS Compliance Progress

RCOS-Core compliance is binary per §10.1.1: a community is either compliant or non-compliant. Fruit Haven is currently **non-compliant** — 13 of the 23 artifacts are formally adopted via 2019 community consensus (see [FH1 Community Bylaws](../proposals/passed/2019-05-17_fh1-bylaws) and [Federation Sovereignty Doctrine](../proposals/passed/2019-05-17_federation-sovereignty)), but the remaining 10 RCOS-formatted artifacts have not yet been formally adopted through a Fruit Haven vote.

The two bars below show content readiness and formal adoption separately.

### Content Coverage (spec requirements addressed in artifacts)

```
Layer 0 — Identity & Scope        ███████████████████░  95%  (updated 2026-04-27)
Layer 1 — Membership System       ██████████████████░░  92%
Layer 2 — Governance & Logic      ████████████████████  98%
Layer 3 — Economic & Resource     ████████████████░░░░  82%
Layer 4 — Conflict & Repair       ███████████████████░  93%
Layer 5 — Operations              ██████████████████░░  92%
Layer 6 — Evolution               ████████████████████  97%
─────────────────────────────────────────────────────────
Overall content coverage          ████████████████████  93%
```

> Scoring method: each normative MUST requirement in the spec counts as 1 point. Fully addressed = 1, partially addressed = 0.5, not addressed = 0. Total ~200 normative MUST requirements identified across Layers 0–6 (updated to reflect Identity Constraints Register as a 4th Layer 0 artifact per RCOS-Core v0.1 spec 2026-04-27). Score: ~186/200 ≈ 93%. Layer 0 reduced from 98% to 95% because two ecological constraints (IC-004, IC-005) have partial enforcement (measurable threshold deferred).

### Formal Adoption (artifacts ratified via consensus vote or Fruit Haven vote)

```
Layer 0 — Identity & Scope        ████████████████████ 100%  (4/4)
Layer 1 — Membership System       ██████████░░░░░░░░░░  50%  (2/4)
Layer 2 — Governance & Logic      ███████████████░░░░░  75%  (3/4)
Layer 3 — Economic & Resource     █████████████░░░░░░░  67%  (2/3)
Layer 4 — Conflict & Repair       ░░░░░░░░░░░░░░░░░░░░   0%  (0/2)
Layer 5 — Operations              ███████░░░░░░░░░░░░░  33%  (1/3)
Layer 6 — Evolution               ███████░░░░░░░░░░░░░  33%  (1/3)
─────────────────────────────────────────────────────────
Overall formal adoption           ███████████░░░░░░░░░  57%  (13/23 artifacts)
```

> Once all 23 artifacts are adopted, formal adoption reaches 100% and Fruit Haven becomes RCOS-Core compliant (subject to any remaining content gaps being resolved first).
>
> 13 of the 23 artifacts (marked "Adopted via 2019 consensus" in the per-layer tables below) carry substantive content that was already ratified by Fruit Haven 1 community consensus on 2019-05-17, via the [FH1 Community Bylaws](../proposals/passed/2019-05-17_fh1-bylaws) and [Federation Sovereignty Doctrine](../proposals/passed/2019-05-17_federation-sovereignty). The 2026 RCOS-formatted versions of these artifacts re-express that prior decision in the RCOS layer structure; the bars above count that 2019 ratification toward formal adoption. The remaining 10 artifacts (Layer 1: Onboarding Protocol, Exit & Separation Protocol; Layer 2: Authority Registry; Layer 3: Internal Economy Protocol; Layer 4: Conflict Resolution Ladder, Accountability Protocol; Layer 5: Operations Manual, Meeting Templates; Layer 6: Version History, Learning Log) have not been ratified by either the 2019 consensus or a Fruit Haven vote.

---

## Layer 0 — Identity & Scope

**Layer compliance:** Pending adoption — content complete; ecological constraint enforcement partially deferred

| Artifact | File | Status | Notes |
|---|---|---|---|
| Purpose Charter | [layers/0-identity/01-purpose-charter](../layers/0-identity/01-purpose-charter) | Present | Content complete; Identity Constraints section replaced with cross-reference to dedicated register; substantive content adopted via 2019 consensus ([FH1 Bylaws](../proposals/passed/2019-05-17_fh1-bylaws) Art. 2) — RCOS-formatted artifact not yet separately ratified |
| Scope Declaration | [layers/0-identity/02-scope-declaration](../layers/0-identity/02-scope-declaration) | Draft | Content complete; substantive content adopted via 2019 consensus ([FH1 Bylaws](../proposals/passed/2019-05-17_fh1-bylaws) Art. 1, 2.03) — RCOS-formatted artifact not yet separately ratified |
| Invariants Register | [layers/0-identity/03-invariants-register](../layers/0-identity/03-invariants-register) | Draft | Content complete; substantive content adopted via 2019 consensus ([FH1 Bylaws](../proposals/passed/2019-05-17_fh1-bylaws) Art. 12) — RCOS-formatted artifact not yet separately ratified |
| Identity Constraints Register | [layers/0-identity/04-identity-constraints-register](../layers/0-identity/04-identity-constraints-register) | Present | Content complete; IC-001–003, IC-006–008 fully enforceable; IC-004–005 (ecological) have partial enforcement — measurable threshold deferred. Substantive content adopted via 2019 consensus ([FH1 Bylaws](../proposals/passed/2019-05-17_fh1-bylaws) Art. 10) — RCOS-formatted artifact not yet separately ratified |

---

## Layer 1 — Membership System

**Layer compliance:** Pending adoption — content complete; some technical implementations missing

| Artifact | File | Status | Notes |
|---|---|---|---|
| Membership Agreement | [layers/1-membership/01-membership-agreement](../layers/1-membership/01-membership-agreement) | Present | Content complete; substantive content adopted via 2019 consensus ([FH1 Bylaws](../proposals/passed/2019-05-17_fh1-bylaws) Art. 8, 13) — RCOS-formatted artifact not yet separately ratified |
| Onboarding Protocol | [layers/1-membership/02-onboarding-protocol](../layers/1-membership/02-onboarding-protocol) | Draft | Content complete; several technical implementations pending — see [missing-technical-implementations.md](../resources/missing-technical-implementations.md) |
| Exit & Separation Protocol | [layers/1-membership/03-exit-separation-protocol](../layers/1-membership/03-exit-separation-protocol) | Draft | Content complete; exit flow in Fruit Haven not yet implemented — see [missing-technical-implementations.md](../resources/missing-technical-implementations.md) |
| Membership State Registry | [layers/1-membership/04-membership-state-registry](../layers/1-membership/04-membership-state-registry) | Present | Content complete; substantive content adopted via 2019 consensus ([FH1 Bylaws](../proposals/passed/2019-05-17_fh1-bylaws) Art. 8.02) — RCOS-formatted artifact not yet separately ratified |

---

## Layer 2 — Governance & Decision Logic

**Layer compliance:** Pending adoption — content complete; Fruit Haven voting app proposal template missing

| Artifact | File | Status | Notes |
|---|---|---|---|
| Decision Matrix | [layers/2-governance/01-decision-matrix](../layers/2-governance/01-decision-matrix) | Present | Content complete; substantive content adopted via 2019 consensus ([FH1 Bylaws](../proposals/passed/2019-05-17_fh1-bylaws) Art. 11.03–11.04) — RCOS-formatted artifact not yet separately ratified |
| Governance Protocol | [layers/2-governance/02-governance-protocol](../layers/2-governance/02-governance-protocol) | Present | Content complete; substantive content adopted via 2019 consensus ([FH1 Bylaws](../proposals/passed/2019-05-17_fh1-bylaws) Art. 11.01–11.02, [Federation Sovereignty Doctrine](../proposals/passed/2019-05-17_federation-sovereignty)) — RCOS-formatted artifact not yet separately ratified |
| Authority Registry | [layers/2-governance/03-authority-registry](../layers/2-governance/03-authority-registry) | Draft | Content complete; updated to reference specific operational roles from Layer 5 |
| Federation Protocol | [layers/2-governance/04-federation-protocol](../layers/2-governance/04-federation-protocol) | Present | Adopted via 2019 consensus ([FH1 Bylaws](../proposals/passed/2019-05-17_fh1-bylaws) Art. 6.02, [Federation Sovereignty Doctrine](../proposals/passed/2019-05-17_federation-sovereignty)); explicitly integrated — RCOS-formatted artifact not yet separately ratified |

---

## Layer 3 — Economic & Resource System

**Layer compliance:** Pending adoption — content complete; ECO decay mechanism and concentration risk indicators deferred

| Artifact | File | Status | Notes |
|---|---|---|---|
| Internal Economy Protocol | [layers/3-economy/01-internal-economy-protocol](../layers/3-economy/01-internal-economy-protocol) | Draft | Content complete; ECO expiration/decay mechanism deferred; concentration risk indicators not yet defined — see [future-proposals.md](../proposals/future.md) |
| Treasury Ruleset | [layers/3-economy/02-treasury-ruleset](../layers/3-economy/02-treasury-ruleset) | Present | Content complete; substantive content adopted via 2019 consensus ([FH1 Bylaws](../proposals/passed/2019-05-17_fh1-bylaws) Art. 9) — RCOS-formatted artifact not yet separately ratified |
| Land Allotment Protocol | [layers/3-economy/03-land-allotment-protocol](../layers/3-economy/03-land-allotment-protocol) | Present | Adopted via 2019 consensus ([FH1 Bylaws](../proposals/passed/2019-05-17_fh1-bylaws) Art. 7) — RCOS-formatted artifact not yet separately ratified |

---

## Layer 4 — Conflict, Repair & Accountability

**Layer compliance:** Pending adoption — content complete

| Artifact | File | Status | Notes |
|---|---|---|---|
| Conflict Resolution Ladder | [layers/4-conflict/01-conflict-resolution-ladder](../layers/4-conflict/01-conflict-resolution-ladder) | Draft | Content complete; updated 2026-04-22 to add per-class response timelines, non-response/withdrawal/deadlock handling, and power-differential intake channels |
| Accountability Protocol | [layers/4-conflict/02-accountability-protocol](../layers/4-conflict/02-accountability-protocol) | Draft | Content complete; not yet adopted |

---

## Layer 5 — Operations & Coordination

**Layer compliance:** Pending adoption — content complete; all operational roles currently held by founding member

| Artifact | File | Status | Notes |
|---|---|---|---|
| Operations Manual | [layers/5-operations/01-operations-manual](../layers/5-operations/01-operations-manual) | Draft | Content complete; updated 2026-04-22 to add temporary/ad-hoc responsibility rules and information anti-gatekeeping policy |
| Role Registry | [layers/5-operations/02-role-registry](../layers/5-operations/02-role-registry) | Present | Content complete; roles adapted from Fruit Haven bylaws; substantive content adopted via 2019 consensus ([FH1 Bylaws](../proposals/passed/2019-05-17_fh1-bylaws) Art. 3–4) — RCOS-formatted artifact not yet separately ratified |
| Meeting Templates | [layers/5-operations/meeting-templates/](../layers/5-operations/meeting-templates/) | Draft | All 5 templates complete (Operations, Governance, Coordination/Alignment, Reflection & Learning, Conflict Handling) |

---

## Layer 6 — Evolution & Adaptation

**Layer compliance:** Pending adoption — content complete

| Artifact | File | Status | Notes |
|---|---|---|---|
| Change Protocol | [layers/6-evolution/01-change-protocol](../layers/6-evolution/01-change-protocol) | Draft | Content complete; updated 2026-04-22 to add experiment review checkpoints and safety suspension mechanism; substantive content adopted via 2019 consensus ([FH1 Bylaws](../proposals/passed/2019-05-17_fh1-bylaws) Art. 5, 6.01) — RCOS-formatted artifact not yet separately ratified |
| Version History | [layers/6-evolution/02-version-history](../layers/6-evolution/02-version-history) | Draft | Active; v0.0 scaffold entry present; will be updated as artifacts are formally adopted |
| Learning Log | [layers/6-evolution/03-learning-log](../layers/6-evolution/03-learning-log) | Draft | Active; updated 2026-04-22 to define learnable events, ownership, and synthesis cadence; no entries yet |

---

## RCOS Spec Coverage Gaps

> The following items were identified during a systematic §-by-§ audit of RCOS-Core v0.1 on 2026-04-22. Items already fully addressed in artifacts are not listed. Items marked **REQUIRED** correspond to MUST requirements in the spec. Items marked **OPTIONAL** correspond to MAY or SHOULD requirements.

Items are grouped by whether they are addressed, partially addressed, or still open.

### Fixed During This Audit (2026-04-22)

| Ref | Requirement | Resolution |
|---|---|---|
| §2.1.3 | Primary purpose change threshold — artifact incorrectly stated "simple majority" instead of required "supermajority ≥⅔" | **Fixed** — Purpose Charter corrected |
| §6.1.3 | Each conflict class MUST define expected response priority and timelines | **Fixed** — per-class initial response windows added to CRL classification table |
| §6.2.3 | Resolution ladder MUST define how refusal, non-response, withdrawal, and procedural deadlock are handled | **Fixed** — "Non-Response, Withdrawal, and Deadlock" section added to CRL |
| §6.3.3 | Where power differential exists, elevated safeguards MUST include separate intake/communication channels | **Fixed** — power differential separate intake channel added to CRL safeguards |
| §7.1.5 | Temporary/ad-hoc responsibilities MUST be explicitly time-bounded and MUST NOT become ongoing without formal role definition | **Fixed** — "Temporary and Ad-Hoc Responsibilities" section added to Operations Manual |
| §7.3.5 | Information flow MUST be designed to prevent gatekeeping, bottlenecks, or dependency on informal intermediaries | **Fixed** — "Information Flow and Anti-Gatekeeping" section added to Operations Manual |
| §8.3.2 | Every experiment MUST define review checkpoints within its duration | **Fixed** — Change Protocol experiment requirements updated |
| §8.3.5 | If experiment introduces safety risk, MUST suspend or terminate immediately with post-hoc review | **Fixed** — Safety suspension clause added to Change Protocol |
| §8.6.5 | Learning Log MUST define what constitutes a learnable event, documentation ownership, and review/synthesis cadence | **Fixed** — "What Constitutes a Learnable Event" section added to Learning Log |

### Partially Addressed — Open Items (REQUIRED)

These are genuine gaps that require more design work or governance decisions to fully resolve. They are not errors in the current artifacts but represent requirements not yet completely satisfied.

| Ref | Requirement | Status | Notes |
|---|---|---|---|
| §2.4.3 | Identity constraints MUST be testable and enforceable through defined processes | **Partial** | Identity Constraints Register (IC-001 through IC-008) created 2026-04-27. IC-001–003 and IC-006–008 have defined enforcement pathways via Layer 4 and Layer 2. IC-004–005 (ecological constraints) have behavioral/process enforcement but lack measurable thresholds — "sustained net harm" and "significant decision" are not yet defined in measurable terms for the networked community context. Threshold definition deferred — see [future-proposals.md](../proposals/future.md) | 
| §3.5.3 | Substitution of participation (e.g., outsourcing labor) MUST be explicitly governed | **Not addressed** | The Membership Agreement defines participation expectations and contribution categories but does not address whether a member may have others perform their contributions on their behalf. **REQUIRED.** Add a clause to the Membership Agreement or Internal Economy Protocol. |
| §5.1.4 | For commons resources, MUST explicitly define stewardship responsibilities, maintenance obligations, and funding mechanisms | **Partial** | The IEP resource table lists stewards and access rules. Maintenance obligations are implied (Infrastructure Steward for platforms) but not explicit per-resource. Funding mechanisms (operational costs) are covered in the Treasury Ruleset. Add a "Maintenance obligations" column or sub-note to the IEP resource table. |
| §5.4.4 | MUST define reviewable indicators of economic concentration risk and an explicit mechanism to adjust constraints when such risks are detected | **Not addressed** | No concentration risk indicators defined. Given current early stage (one member, no significant balances), this is low-risk but still a MUST requirement. **REQUIRED.** Define simple indicators (e.g., if one member holds >50% of total ECO balance, a review is triggered) and a review/adjustment pathway. |

### Deferred — Governance Decision Required

These items are deferred because they require a community governance decision to define, not just a content update.

| Ref | Requirement | Priority | Notes |
|---|---|---|---|
| ECO expiration / decay mechanism | §5.2.4 + §5.4.2 — if internal units exist, MUST define expiration/decay/cap | Medium | Non-transferability currently serves as the single accumulation-limiting mechanism (satisfies §5.4.2 minimum). Expiration/decay would add additional protection. Deferred — see [future-proposals.md](../proposals/future.md) |
| Treasury spending thresholds | §5.3.3 — spending authority MUST be explicitly bounded by thresholds | Low urgency | Finance Steward currently has €0 unilateral authority (effectively no spending authority). Thresholds should be defined once community funds exist. Deferred — see [future-proposals.md](../proposals/future.md) |
| Suspended Member state | §3.7 (MAY) — temporary suspension states | Low | Technically not yet feasible in Fruit Haven. **Optional** per spec. Deferred — see [future-proposals.md](../proposals/future.md) |
| Consent-based decision-making for Strategic decisions | §4.2.2 (MAY) — alternatives to majority vote | Low | Currently using simple majority for Strategic decisions. Consent-based approach is optional. Deferred. |

---

## Path to Full Compliance

All artifacts have substantive content. To achieve full compliance, each artifact must be:

1. Proposed and deliberated per the Governance Protocol (Layer 2)
2. Adopted through an authorized Fruit Haven vote
3. Status fields updated from *Stub — not yet adopted* to *Active — adopted <YYYY-MM-DD>*
4. Recorded in [layers/6-evolution/02-version-history](/layers/6-evolution/02-version-history)

**Remaining content gaps to resolve before claiming compliance** (from "Partially Addressed — Open Items" above):
- §3.5.3 — Substitution of participation rule (Membership Agreement or IEP)
- §5.1.4 — Per-commons maintenance obligations (IEP resource table)
- §5.4.4 — Economic concentration risk indicators (IEP)
- §2.4.3 — Ecological identity constraint measurable thresholds (IC-004/IC-005 in Identity Constraints Register — behavioral enforcement exists; numerical definition deferred)

**Open technical gaps** (required for full operational compliance — see [missing-technical-implementations.md](../resources/missing-technical-implementations.md)):
- Member exit flow in Fruit Haven
- Voluntary exit request flow in Fruit Haven
- Artifact links in onboarding flow
- Explicit in-app consent to Membership Agreement and Layer 0
- Onboarding reminder emails and expiry notifications
- 6-month re-application block after rejection or incomplete onboarding
- Onboarding expiry actions in Fruit Haven admin panel
- Fruit Haven voting app proposal template

**Deferred governance decisions** (see [future-proposals.md](../proposals/future.md)):
- Treasury spending thresholds (trigger: first community funds received)
- Consent-based decision making for Strategic decisions
- ECO accumulation limits and decay
- Suspended Member state
