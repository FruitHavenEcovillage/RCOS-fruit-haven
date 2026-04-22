# Missing Technical Implementations

Features and flows required for full RCOS compliance that are not yet implemented in ecohubsOS or related platforms. Each item references the artifact that requires it.

---

## 1. Member exit flow in ecohubsOS

**Required by:** Layer 1 — Exit & Separation Protocol, Membership State Registry  
**Priority:** High

A formal offboarding workflow does not currently exist. Required functionality:
- Trigger exit for a member (voluntary or forced via Layer 4)
- Transition membership state from Full Member → Exited Member in the registry
- Revoke access to member-only Discord channels and calls
- Revoke access to ecohubsOS member features (retain profile and contribution history)
- Block or remove member from platform-specific tools (Discord, forum via SSO, Safe) depending on what each platform supports
- Send exit confirmation to the member

---

## 2. Artifact links in onboarding flow

**Required by:** Layer 1 — Onboarding Protocol (Step 1)  
**Priority:** High

The onboarding flow in ecohubsOS must include direct links to all Layer 0–6 artifacts so members can review them before consenting. Currently no such links exist in the onboarding UI.

Required: add links to the RCOS artifact repository (this repo) at the start of the onboarding flow, with a checklist confirming the member has reviewed them.

---

## 3. Explicit in-app consent to Membership Agreement and Layer 0 identity constraints

**Required by:** Layer 1 — Onboarding Protocol (Step 2), Membership Agreement  
**Priority:** High

The onboarding flow must include an explicit, recorded consent step where the member acknowledges:
- The Membership Agreement (Layer 1)
- The Layer 0 identity constraints and invariants

Currently there is no consent gate in the ecohubsOS onboarding UI. Required: a consent checkbox or confirmation step with a timestamp, linked to the specific artifact versions in force at the time of onboarding.
