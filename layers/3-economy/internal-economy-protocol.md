# Internal Economy Protocol

- **Layer:** 3 — Economic & Resource System
- **Status:** Stub — not yet adopted
- **RCOS reference:** §5.1, §5.2, §5.4, §5.5

---

## Commons vs. Private Classification

> All resources within the declared governed scope must be explicitly classified.

| Resource                                          | Classification | Steward                                  | Access rules                                                   | Transfer constraints                                         |
| ------------------------------------------------- | -------------- | ---------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------ |
| RCOS specification and artifacts (this repo)      | Commons        | Admin                                    | Public read; Full Members write via governance process         | Cannot be privatised; forks permitted                        |
| Shared treasury (Safe multi-sig)                  | Commons        | Admin (Finance Steward in future)        | Transparent to all Full Members                                | Governed by Treasury Ruleset                                 |
| ecohubsOS (os.ecohubs.community)                  | Commons        | Admin (Infrastructure Steward in future) | Full Members; public-facing features open                      | Cannot be sold or privatised without Constitutional decision |
| EcoHubs website (ecohubs.community)               | Commons        | Admin                                    | Public read; Admin writes                                      | Cannot be sold without Constitutional decision               |
| RCOS hosted website (blueprint.ecohubs.community) | Commons        | Admin                                    | Public read; Admin writes                                      | Cannot be sold without Constitutional decision               |
| Brand, domain names, social media accounts        | Commons        | Admin (Social Media Steward in future)   | Admin manages; Full Members may contribute via defined process | Cannot be transferred without Constitutional decision        |

> Any unclassified resource must not be allocated, encumbered, monetized, or transferred until classification is completed.

## Recognized Contribution Categories

> The community must not structurally depend on unpaid or invisible labor without explicit recognition.

| Category                      | Examples                                                                                                                                                                                  |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Knowledge & Research**      | Writing RCOS artifacts, research into community models, documentation, translation                                                                                                        |
| **Technical Development**     | ecohubsOS development, website development, tooling, infrastructure maintenance                                                                                                           |
| **Governance & Coordination** | Facilitating and organizing internal meetings, reviewing proposals, onboarding new members, running votes, member coordination (helping members find tasks they'd like to participate in) |
| **Community Building**        | Outreach, welcoming new members, moderating channels, hosting public calls, facilitating meetings to support other communities in applying RCOS                                           |
| **Creative & Communication**  | Content creation, social media, design, writing for public channels                                                                                                                       |
| **Care & Support**            | Emotional support, conflict facilitation, wellbeing check-ins                                                                                                                             |
| **Stewardship**               | Maintaining shared resources, monitoring platforms, managing external services                                                                                                            |
| **Informal Participation**    | Active Discord/forum engagement, attending calls, feedback on proposals                                                                                                                   |

## Contribution Recognition Mechanism

> Defines what qualifies, how contributions are recorded, who validates, and whether recognition affects access or privileges.

- **What qualifies:** Any activity falling into one of the recognized categories above; informal participation counts at the member's own declaration
- **How contributions are recorded:**
  - Structured: automatically via Puckstack task completion → XP/ECO credited via Offcoin
  - Informal/other: self-reported by the member in ecohubsOS or Discord; no validation required for informal participation
- **Who validates:** Structured contributions validated automatically by Puckstack/Offcoin; significant contributions (e.g. major artifacts, facilitation work) may be nominated by any member for additional XP via Admin
- **Effect on access/privileges:** Contribution recognition affects XP and ECO balance only — it does not grant additional governance rights beyond what the membership state defines
- **Dispute:** Any member may contest a contribution record within 30 days; disputes resolved by Admin with right of appeal to Full Members

## Internal Units

Two internal units are in use: **XP** (experience points) and **ECO** (community currency). Both are tracked via Offcoin / ecohubsOS.

| Property | XP | ECO |
|---|---|---|
| **Purpose** | Activity and progress indicator | Contribution recognition; may unlock certain Puckstack permissions |
| **Issuance** | Automatic via Puckstack task completion; manual via Admin for nominated informal contributions | Same as XP |
| **Transferability** | Non-transferable between members | Non-transferable between members; not traded on external markets |
| **Expiration / decay** | None currently | None currently — see [Missing Technical Implementations](../../resources/missing-technical-implementations.md) |
| **Hard cap** | None currently | None currently |
| **Future utility** | N/A | TBD — further utility to be defined via future proposals |
| **Fraud prevention** | Self-reported contributions subject to community review; dispute mechanism as defined in Contribution Recognition Mechanism | Same as XP |
| **Privacy** | Balances visible to all Full Members in ecohubsOS | Balances visible to all Full Members in ecohubsOS |

> ECO and XP do not grant governance rights beyond what the membership state defines (see §5.2.5).

## Accumulation Constraints

> Internal economic systems must prevent unbounded concentration of internal influence.

- No hard cap on XP or ECO currently — accumulation is unlimited
- Neither unit can be converted into governance authority or used to bypass the Decision Matrix
- Accumulation limits and decay mechanisms are deferred as a future proposal; see [Future Proposals](../../resources/future-proposals.md)

## External Income Interfaces

- **Current:** No external income; all operational costs are covered by the founding member as personal contributions
- **Potential future interfaces:** Grants and foundations, Web3 ecosystem funding, partnerships, paid services (tooling, onboarding support, educational programs)
- **Rule:** Any new external income interface must be declared and approved via a Strategic decision before funds are received or commitments made

## Dispute Resolution for Economic Records

Any member may contest a contribution record or internal unit balance within 30 days of the record being created. See Contribution Recognition Mechanism above for the full dispute process. Appeals beyond Admin resolution are handled by Full Members via the governance process (Layer 2).

---

## Ratification Record

- **Adopted:** [date]
- **Decision type:** Strategic
- **Version:** [version]
- **Decision record:** [link to proposal]
