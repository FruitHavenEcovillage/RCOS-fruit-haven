# Treasury Ruleset

- **Layer:** 3 — Economic & Resource System
- **Status:** Present
- **RCOS reference:** §5.3, §5.5

---

## Treasury Scope

:::rcos{clauses="5.3.1, 5.5.4"}
:::

:::rationale{title="Why draw a hard line around treasury funds?"}
Without an explicit boundary, any money flowing near the community — a founder's personal card, a side account, an informal reimbursement pool — can drift into being treated as community money, with all the obligations that entails. Naming exactly which accounts are treasury and which are not protects both the community and the individuals paying out of pocket.
:::

The shared treasury consists of all funds held in the Safe multi-sig wallet and any additional accounts explicitly declared as community treasury accounts via Strategic decision (e.g. a fiat bank account for grant receipt). Only funds explicitly received in the name of Fruit Haven and deposited into a declared treasury account are community funds. Operational costs currently covered personally by the founding member are not treasury funds and carry no community obligation or repayment claim.

> Any new treasury account (fiat or otherwise) must be declared and approved via a Strategic decision before funds are received into it.

## Income Sources

:::rcos{clauses="5.3.2"}
:::

:::rationale{title="Why route all income through one declared list?"}
Every income source carries strings — reporting requirements, expectations, dependency risks. If income channels can open informally, those strings get attached before the community has had a chance to weigh them. One declared list, changed only through Strategic decisions, keeps the community's obligations under its own control.
:::

All income streams must align with the External Income Interfaces defined in the Internal Economy Protocol. Current income: none — all operational costs are covered personally by the founding member.

Potential future income interfaces: grants and foundations, Web3 ecosystem funding, partnerships, paid services (tooling, onboarding support, educational programs). Any new income interface must be approved via a Strategic decision before funds are received or commitments made.

## Spending Authority

:::rcos{clauses="5.3.3, 5.7.1"}
:::

:::rationale{title="Why spell out thresholds in a table?"}
When spending authority is vague, two failure modes appear: either every small decision escalates and nothing gets done, or a single steward quietly accumulates discretion no one ever voted to grant them. A table of amounts, decision types, and authorized bodies removes the ambiguity and makes unauthorized spending immediately visible.
:::

| Amount | Decision Type | Authorized Body | Mechanism |
|---:|---|---|---|
| Up to $100 USD | Operational | Communal Finance / Accountant | Delegated limit |
| Above $100 USD | Strategic | Active Members | Community Meeting |
| Multi-year contracts, debt, or structural financial obligations | Constitutional | Active Members | Community Meeting + 2-week absentee review |

> Spending thresholds will be defined via a future Strategic proposal once community funds exist. See [Future Proposals](../../resources/future-proposals.md).

## Transparency and Reporting

:::rcos{clauses="5.3.4, 5.3.5, 5.6.1"}
:::

:::rationale{title="Why make transparency the default, not a feature?"}
Opacity in a treasury compounds: one missing disclosure invites another, and before long members can no longer verify whether the community's money is being handled as they agreed. Making real-time visibility the baseline — and requiring any exception to be named, justified, and time-bounded — keeps audit within reach of every member, not just stewards.
:::

**Accounting Ledger:** As per the [community bylaws](https://fruithaven.land/wp-content/uploads/2024/04/FH1_Community_Bylaws.pdf), community finances must be managed with a continuous accounting ledger that is public, transparent, and accessible/reviewable by the trustees at any time.

**Roles:** The Financial Bookkeeper handles data entry and tracking. The Communal Finance / Accountant holds the cash and manages the treasury.

All spending decisions above $100 USD must reference the linked governance record (Community Meeting minutes or approved proposals).

## Reserve, Risk, and Debt Constraints

:::rcos{clauses="5.3.6"}
:::

:::rationale{title="Why block debt and long-term obligations by default?"}
Debt and recurring commitments bind the community beyond the people currently in it — future members inherit the obligations. Forbidding them unless a Strategic vote explicitly authorizes keeps long-term constraints from being entered into casually, and preserves the option to stay lightweight.
:::

- **Debt:** No debt may be incurred without a Strategic vote
- **Long-term obligations:** No recurring costs or contracts may be entered without a Strategic vote
- **Contingency reserve:** A reserve target will be defined via proposal once community funds exist
- **Off-treasury instruments:** No financial instruments (loans, investments, guarantees) may be used without a Strategic vote

## Conflict-of-Interest Rules

:::rcos{clauses="5.4.3"}
:::

:::rationale{title="Why ban self-approval outright?"}
Even well-intentioned people unconsciously tilt decisions toward their own interests; a rule that requires disclosure and abstention removes the judgment call and the social pressure to "trust someone." Self-approval of spending is the single most common way small governance systems quietly lose integrity, so the rule is stated bluntly.
:::

- A requester may not approve their own spending request
- Any member with a direct financial interest in a spending decision must declare it and abstain from the vote
- Communal Finance / Accountant may not authorize any single treasury spending unilaterally above $100 USD

---

## Ratification Record

- **Adopted:** 2019-05-17 (Original Bylaws), 2026-05-19 (RCOS adaptation)
- **Decision type:** Strategic
- **Version:** v1.0.0
- **Decision record:** [proposals/passed/2019-05-17_fh1-bylaws.md](/proposals/passed/2019-05-17_fh1-bylaws)
