# Missing Technical Implementations

Features and flows required for full RCOS compliance that are not yet implemented in ecohubsOS or related platforms. Each item references the artifact that requires it.

**Owner:** Infrastructure Steward / Digital Builder  
**Review cadence:** Quarterly

---

## 8. Proposal template (ecohubsOS voting app)

**Required by:** Layer 2 — Governance Protocol (Proposal Submission)  
**Priority:** High

A predefined proposal template must be available in the ecohubsOS voting app so all Strategic and Constitutional proposals follow a consistent, auditable format. The template must include fields for:
- Summary of the change
- Affected layers and artifacts (with links to this repository)
- Decision type (Strategic / Constitutional)
- Rationale
- Risks and mitigations
- Rollback plan
- Proposed effective date

---

## 7. Voluntary exit request flow in ecohubsOS

**Required by:** Layer 1 — Exit & Separation Protocol (Voluntary Exit)  
**Priority:** High

A self-service exit flow must be available to members in ecohubsOS:
- Exit request form with an optional reason field
- A message asking the member to consider doing a handover if they hold any roles
- On submission: notify admin via email with member name, reason (if provided), and any roles held
- Admin panel: show a confirm-exit button for the admin to finalise the exit within 24 hours
- On confirmation: revoke access, transition state to Exited Member, send exit confirmation email to the member

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

## 4. Onboarding reminder emails and expiry notifications

**Required by:** Layer 1 — Onboarding Protocol (Trial and Evaluation)  
**Priority:** High

The following automated emails must be sent during the onboarding window:
- **Day 7:** Reminder that onboarding is incomplete; link to resume
- **Day 15:** Warning that the grace period has started; member has 15 days remaining before automatic exit; note that failure to complete results in a 6-month re-application block
- **Day 30:** Exit triggered — notification sent to the member explaining the exit reason and the 6-month re-application block

---

## 5. 6-month re-application block after rejection or incomplete onboarding exit

**Required by:** Layer 1 — Onboarding Protocol (Admission Criteria, Trial and Evaluation)  
**Priority:** High

Members who are rejected via an ecohubsOS vote or exited due to incomplete onboarding must be blocked from re-applying for 6 months. Required:
- Record rejection/exit date and reason in ecohubsOS
- Block re-submission of application form for 6 months from that date
- Display a clear message if a blocked applicant attempts to re-apply

---

## 6. Onboarding expiry actions in ecohubsOS admin panel

**Required by:** Layer 1 — Onboarding Protocol (Trial and Evaluation)  
**Priority:** High

At 30 days post-vote-approval with incomplete onboarding, the admin panel must surface:
- A button to trigger immediate member exit
- A button to grant a one-time 30-day extension

---

## 3. Explicit in-app consent to Membership Agreement and Layer 0 identity constraints

**Required by:** Layer 1 — Onboarding Protocol (Step 2), Membership Agreement  
**Priority:** High

The onboarding flow must include an explicit, recorded consent step where the member acknowledges:
- The Membership Agreement (Layer 1)
- The Layer 0 identity constraints and invariants

Currently there is no consent gate in the ecohubsOS onboarding UI. Required: a consent checkbox or confirmation step with a timestamp, linked to the specific artifact versions in force at the time of onboarding.

---

## 9. ECO expiration / decay mechanism

**Required by:** Layer 3 — Internal Economy Protocol (Internal Units, Accumulation Constraints)  
**Priority:** Medium

Consider designing and implementing an expiration or decay mechanism for ECO to prevent passive accumulation by inactive members and keep the unit meaningful as a contribution signal. Design questions to resolve first:
- Should ECO expire after a fixed period (e.g. 12 months of inactivity)?
- Should it decay gradually or expire in full?
- Should expired ECO be redistributed, burned, or simply zeroed?
- Should the mechanism trigger only when ECO has real utility (unlocks, access, etc.)?

This is a design decision before a technical one — open a governance proposal once the future utility of ECO is clearer.
