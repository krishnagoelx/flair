# Flair audience, voice, and content architecture

Working website strategy, 14 September 2026. Buyer profiles below are **hypotheses from the supplied product context**, not interview findings. We should validate their language with actual U.S. consumer AI teams before treating it as customer quotation.

## Audience framework

The first buyer is a U.S. consumer AI company that has repeated moments of purchase intent inside its existing product. Its team wants to finish a user task and create commerce revenue, but does not want to become a retailer, payments operator, catalog maintainer, or returns desk. The first evaluator is likely a founder or product lead; an engineer will then ask whether Flair works reliably and how it fits the app. The site must satisfy both without turning its first screen into API documentation.

### Ideal first partner

- U.S.-facing consumer AI app with an engaged audience and a clear moment when a product would help the user achieve a goal.
- Can share a bounded amount of user context with consent and can host an embedded purchase experience.
- Has product and engineering ownership for a pilot and can define success in confirmed orders, shopper satisfaction, and partner economics.
- Health, beauty/style, family, gifting, and travel are useful starting examples, not a claim that every category is live.
- Company stage, team size, revenue, and founder demographics are deliberately unspecified because the context provides no evidence for them.

### Three decision lenses

| Lens | Job to be done | Trigger | Concern | Website proof needed |
| --- | --- | --- | --- | --- |
| Founder/product lead | Make the app able to finish a useful real-world task and earn on it | Users ask what to buy or reveal a need during a conversation | Shopping feels bolted on; team will inherit merchant operations | One native app moment becomes a confirmed order and an attributed earning |
| Engineering lead | Integrate commerce without owning offer normalization, purchase orchestration, and order recovery | Pilot gets budget or product lead requests a commerce feature | Unsupported routes, unclear security boundary, brittle callbacks, false “one-line SDK” promise | Session inputs, embedded surface, authorization, order states, webhooks, sandbox path |
| Shopper | Get a relevant item, a clear total, and an order without repeating their context | AI knows the goal and suggests an item | Wrong variant, bad deal, surprise charge, unclear delivery or returns | Exact product and reason, all-in price, control over purchase, real order status |

These are role lenses, not fabricated named personas or direct quotes. The closest source language is from the shared strategy: developers want a useful capability and outcome, not an MCP to manage; “discovery is not buying.”

### Not the launch audience

Merchants buying advertising, generic B2B procurement teams, and developers who only want raw catalog search are not the homepage's primary audience. They may be served by future products or a deeper conversation, but optimizing the first page for them would blur Flair's current promise.

### Audience implication

Show the purchase before showing architecture. Let the founder see the customer and revenue outcome; let the engineer inspect the mechanics one click deeper. Use “app,” “product,” “order,” and “purchase,” not a new technical vocabulary in the first viewport.

## Brand voice

**Voice essence:** Flair sounds like a product builder who understands shopping deeply: direct, curious, human, and exact about what the system did.

Flair is optimistic about AI taking action, but does not confuse aspiration with release status. It can be playful in a brand line and still be sober in order states, prices, permissions, and errors. It speaks to the developer as a peer, not as a lecturer or hype machine.

| Axis | Position | In practice |
| --- | --- | --- |
| Formality | Conversational, not casual slang | “Your app knows the moment. Flair handles the shopping.” |
| Energy | Quiet confidence with one lively beat | Let the product state change carry excitement; copy stays short |
| Humor | Light wit only in brand moments | The name can do the wordplay; checkout errors cannot |
| Expertise | Technical precision behind plain words | Say “confirmed order” instead of “seamless autonomous commerce” |
| Warmth | Helpful, not intimate | Shopper copy explains what happens next and what they control |

Voice qualities: **concrete** (show the exact product and order); **agency-aware** (say when the user approves or sets rules); **outcome-led** (lead with completed shopping, not the SDK); **self-aware** (label demos as illustrative); **economical** (one idea per line); **human** (write what a builder would say to another builder).

Preferred vocabulary: app, shopper, user need, context, product, exact variant, offer, deal, final total, order, confirmed, arrives, earnings, purchase rule, in your app, Book a demo.

Avoid: agentic commerce layer, revolutionary, frictionless, supercharge, unlock, monetize your AI, infinite shelf, every marketplace, best deal, zero effort, one prompt, universal checkout, transaction completed when merely attempted.

Style rules: sentence case headings and buttons; short sentences mixed with one explanatory sentence where needed; active voice; numerals for prices, dates, and verified scale; contractions are acceptable; no em dashes; one exclamation mark at most in a campaign, none in product states; no invented user quotes or metrics. “Order confirmed” is reserved for an actual merchant confirmation. “Estimated earnings” and “Settled earnings” are different labels.

### Tone by surface

| Surface | Tone | Example |
| --- | --- | --- |
| Homepage | Crisp and demonstrative | “From a user need to an order, inside your app.” |
| Developer detail | Precise and candid | “Send the shopping context. Render the experience. Receive order events.” |
| Shopper UI | Reassuring and specific | “Chocolate, 2 lb. $39.80 total. Arrives Thursday.” |
| Purchase approval | Neutral and explicit | “Buy this for $39.80?” |
| Order success | Calm confirmation | “Order confirmed. We’ll send updates here.” |
| Failure | Actionable | “The price changed before checkout. Review the new total to continue.” |
| Demo booking | Respectful of time | “Tell us about the shopping moment in your app.” |

### Before and after

| Avoid | Use instead | Why |
| --- | --- | --- |
| “Unlock seamless agentic commerce.” | “Let your AI find and buy the right product.” | Says what happens |
| “Monetize every user interaction.” | “Earn when a shopper places an attributed order.” | Ties economics to a real event |
| “One integration works across all marketplaces.” | “Start with a supported purchase route; expand with demand.” | Does not overclaim coverage |
| “Your order is on its way” at authorization | “Buying now. We’ll confirm when the merchant accepts the order.” | Matches system state |
| “Something went wrong.” | “We couldn’t confirm the order. We’re checking with the merchant before trying again.” | Gives next step and avoids double charge |

## Content audit and model

| Existing source | Decision | Why |
| --- | --- | --- |
| Supplied master Flair context | Keep as strategic source | Product thesis and examples are rich; not publish-ready as one page |
| Earliest shared chat and Downtown chat | Keep as historical context | Reveals why product discovery alone was inadequate; older counts and pilots need status checks |
| `FLAIR_PRODUCT_AND_WEBSITE_PLAN.md` | Keep as product source of truth for this project | Distinguishes product intent, proposed contract, and phase status |
| `FLAIR_WEBSITE_STRUCTURE.md` | Consolidate into this page architecture | Some sections repeat the same claim; each should answer a new visitor question |
| `FLAIR_BRAND_MESSAGING.md` | Keep as messaging source of truth | Single promise, pillars, and claim-to-proof rules |

Content types needed: **page** (title, audience, goal, CTA, owner, review date); **claim** (exact wording, scope, evidence link, status, owner, expiry); **demo scene** (scenario, UI state, state source, illustrative/live flag); **use case** (user moment, relevant context, outcome, supported category status); **integration step** (input, Flair action, output, failure state, released status); **FAQ** (question, answer, owner, last verified).

Default owners to assign before launch: marketing/product owns promise and page copy; commerce/data owns coverage and price claims; engineering owns integration and order-state claims; legal/privacy owns mandates, consent, earnings disclosures; partnerships owns names/logos and agreements. These are responsibility roles, not assertions that those departments exist today. Review live coverage, supported routes, prices, and integration status at least monthly; review the rest quarterly and at each release. Retire stale claims instead of quietly leaving them online.

Critical content gaps: confirmed U.S. purchasable coverage; supported merchant/payment routes; a real demo booking endpoint; current integration modes; permission to show any partner or merchant logo; whether earnings dashboard and post-purchase flows are live. Until filled, demos must be labeled illustrative and numerical scale claims held back.

## Information architecture

The visitor has four tasks: understand the outcome, see the product, assess integration, and book a demo. Navigation should mirror those tasks. Proposed shallow sitemap:

```text
Home
├─ Product           shopping moment, order, merchant work, use cases
├─ Developers        integration, purchase authority, events, security, FAQ
├─ Company           vision and verifiable team/history
└─ Book a demo       short form and confirmed scheduling path
```

Header: Flair wordmark → Home; Product; Developers; Company; **Book a demo**. Footer: the same primary links plus Privacy, Terms, and Contact only when real destinations exist. Do not add “Docs” until docs are available. No mega-menu for five destinations.

Homepage section order, with one job per section:

1. **Hero:** what Flair is and a visible shopping moment.
2. **One order:** prove recommendation, authorization, confirmed purchase, and earnings.
3. **The hard work underneath:** explain why this is more than a link or checkout button.
4. **Integration:** explain what the partner sends, embeds, and receives.
5. **Shopping intelligence:** show product, deal, and experience working together inside the stylist app.
6. **Many apps:** show where else an intent moment appears.
7. **Credibility and boundaries:** exact supported/current proof and a few hard questions.
8. **Close:** personal shopper direction, approved tagline, Book a demo.

The homepage previews; Product holds the full shopper journey; Developers holds technical depth; Company holds vision/history; Demo holds the conversion flow. This avoids copy-pasting the same eight sections onto each page. “Product” and “Developers” labels have a clear information scent; “Platform” and “Solutions” would be less useful.

### Developer to demo flow

```text
Entry: homepage, product link, developer link, referral
  → Hero: does this apply to my app?
    → no → use-case examples → if still no fit, exit with no pressure
    → yes → watch/scan one order
      → want implementation detail? → Developers page → supported path and constraints
      → ready to talk? → Book a demo
        → form valid? → no → inline field guidance, keep entered data
        → yes → submit → confirmation + real scheduling option if configured
          → submission fails → keep form values + retry/contact alternative
```

Primary first click is “Book a demo” for already-convinced visitors; “See how it works” can jump to the order sequence for new visitors. A developer must reach integration details in one click and the demo action in one click from any page. The booking form should ask only what a team needs to prepare a useful conversation, not a sales qualification survey.

## Validation questions

The first comprehension test should ask an unfamiliar U.S. consumer AI founder and engineer, separately: “What does Flair do?”, “What does your app provide?”, “Does Flair place the order or only recommend a product?”, “What would you click to evaluate integration?”, and “What would happen after Book a demo?” Their answers should determine copy and navigation changes; internal taste alone is not evidence.
