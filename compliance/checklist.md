# Compliance Checklist

- **RCOS-Core version:** v0.1
- **Last audited:** 2026-04-22
- **Audit method:** Self-audit (content definition complete; pending formal adoption)
- **Overall status:** Pending adoption — all artifacts have substantive content; none yet formally adopted through a governance vote

> **Status key:**
> - `Present` — file exists with substantive, adopted content
> - `Draft` — file exists with substantive content; not yet formally adopted
> - `Stub` — file exists but is a placeholder only; does not count as compliant
> - `Missing` — file does not exist
> - `Non-compliant` — file exists but systematically violates RCOS requirements

---

## Layer 0 — Identity & Scope

**Layer compliance:** Pending adoption — content complete

| Artifact | File | Status | Notes |
|---|---|---|---|
| Purpose Charter | [layers/0-identity/purpose-charter.md](../layers/0-identity/purpose-charter.md) | Draft | Content complete; not yet adopted |
| Scope Declaration | [layers/0-identity/scope-declaration.md](../layers/0-identity/scope-declaration.md) | Draft | Content complete; not yet adopted |
| Invariants Register | [layers/0-identity/invariants-register.md](../layers/0-identity/invariants-register.md) | Draft | Content complete; not yet adopted |

---

## Layer 1 — Membership System

**Layer compliance:** Pending adoption — content complete; some technical implementations missing

| Artifact | File | Status | Notes |
|---|---|---|---|
| Membership State Registry | [layers/1-membership/membership-state-registry.md](../layers/1-membership/membership-state-registry.md) | Draft | Content complete; not yet adopted |
| Membership Agreement | [layers/1-membership/membership-agreement.md](../layers/1-membership/membership-agreement.md) | Draft | Content complete; not yet adopted |
| Onboarding Protocol | [layers/1-membership/onboarding-protocol.md](../layers/1-membership/onboarding-protocol.md) | Draft | Content complete; several technical implementations pending — see [missing-technical-implementations.md](../resources/missing-technical-implementations.md) |
| Exit & Separation Protocol | [layers/1-membership/exit-separation-protocol.md](../layers/1-membership/exit-separation-protocol.md) | Draft | Content complete; exit flow in ecohubsOS not yet implemented — see [missing-technical-implementations.md](../resources/missing-technical-implementations.md) |

---

## Layer 2 — Governance & Decision Logic

**Layer compliance:** Pending adoption — content complete; Snapshot proposal template missing

| Artifact | File | Status | Notes |
|---|---|---|---|
| Decision Matrix | [layers/2-governance/decision-matrix.md](../layers/2-governance/decision-matrix.md) | Draft | Content complete; not yet adopted |
| Governance Protocol | [layers/2-governance/governance-protocol.md](../layers/2-governance/governance-protocol.md) | Draft | Content complete; Snapshot proposal template not yet created — see [missing-technical-implementations.md](../resources/missing-technical-implementations.md) |
| Authority Registry | [layers/2-governance/authority-registry.md](../layers/2-governance/authority-registry.md) | Draft | Content complete; updated to reference specific operational roles from Layer 5 |

---

## Layer 3 — Economic & Resource System

**Layer compliance:** Pending adoption — content complete; ECO decay mechanism deferred

| Artifact | File | Status | Notes |
|---|---|---|---|
| Internal Economy Protocol | [layers/3-economy/internal-economy-protocol.md](../layers/3-economy/internal-economy-protocol.md) | Draft | Content complete; ECO expiration/decay mechanism deferred — see [future-proposals.md](../resources/future-proposals.md) |
| Treasury Ruleset | [layers/3-economy/treasury-ruleset.md](../layers/3-economy/treasury-ruleset.md) | Draft | Content complete; treasury spending thresholds deferred until community funds exist — see [future-proposals.md](../resources/future-proposals.md) |

---

## Layer 4 — Conflict, Repair & Accountability

**Layer compliance:** Pending adoption — content complete

| Artifact | File | Status | Notes |
|---|---|---|---|
| Conflict Resolution Ladder | [layers/4-conflict/conflict-resolution-ladder.md](../layers/4-conflict/conflict-resolution-ladder.md) | Draft | Content complete; not yet adopted |
| Accountability Protocol | [layers/4-conflict/accountability-protocol.md](../layers/4-conflict/accountability-protocol.md) | Draft | Content complete; not yet adopted |

---

## Layer 5 — Operations & Coordination

**Layer compliance:** Pending adoption — content complete; all operational roles currently held by founding member

| Artifact | File | Status | Notes |
|---|---|---|---|
| Role Registry | [layers/5-operations/role-registry.md](../layers/5-operations/role-registry.md) | Draft | Content complete; 12 roles defined; all operational roles currently held by founding member |
| Operations Manual | [layers/5-operations/operations-manual.md](../layers/5-operations/operations-manual.md) | Draft | Content complete; not yet adopted |
| Meeting Templates | [layers/5-operations/meeting-templates/](../layers/5-operations/meeting-templates/) | Draft | All 5 templates complete (Operations, Governance, Coordination/Alignment, Reflection & Learning, Conflict Handling) |

---

## Layer 6 — Evolution & Adaptation

**Layer compliance:** Pending adoption — content complete

| Artifact | File | Status | Notes |
|---|---|---|---|
| Change Protocol | [layers/6-evolution/change-protocol.md](../layers/6-evolution/change-protocol.md) | Draft | Content complete; not yet adopted |
| Version History | [layers/6-evolution/version-history.md](../layers/6-evolution/version-history.md) | Draft | Active; v0.0 scaffold entry present; will be updated as artifacts are formally adopted |
| Learning Log | [layers/6-evolution/learning-log.md](../layers/6-evolution/learning-log.md) | Draft | Active; no entries yet; entry format defined |

---

## Path to Full Compliance

All artifacts have substantive content. To achieve full compliance, each artifact must be:

1. Proposed and deliberated per the Governance Protocol (Layer 2)
2. Adopted through an authorized Snapshot vote
3. Status fields updated from *Stub — not yet adopted* to *Active — adopted [date]*
4. Recorded in `layers/6-evolution/version-history.md`

**Open technical gaps** (required for full operational compliance — see [missing-technical-implementations.md](../resources/missing-technical-implementations.md)):
- Member exit flow in ecohubsOS
- Voluntary exit request flow in ecohubsOS
- Artifact links in onboarding flow
- Explicit in-app consent to Membership Agreement and Layer 0
- Onboarding reminder emails and expiry notifications
- 6-month re-application block after rejection or incomplete onboarding
- Onboarding expiry actions in ecohubsOS admin panel
- Snapshot proposal template
- ECO expiration / decay mechanism

**Deferred governance decisions** (see [future-proposals.md](../resources/future-proposals.md)):
- Treasury spending thresholds (trigger: first community funds received)
- Consent-based decision making for Strategic decisions
- ECO accumulation limits and decay
- Suspended Member state
