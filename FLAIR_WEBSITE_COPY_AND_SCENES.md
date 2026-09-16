# Flair homepage copy and scene board

Working draft for a U.S. developer site, 14 September 2026. This is a concept demo, not a claim that every scene is a currently live feature. Public use requires release and claims review. The preferred CTA is **Book a demo** throughout.

## Copy strategy

The likely visitor is problem-aware or solution-aware: they have an app with useful context and know that a product recommendation or affiliate link does not finish the job. The page should prove a mechanism, not agitate with invented pain numbers. Lead with the outcome, then let a single transaction answer the question “Does it really buy?” There is no fake urgency, “limited slots,” testimonial, revenue claim, or risk reversal without evidence.

Two headline angles to test at equal visual fidelity:

1. **The shopping capability for your consumer app.** Category-first. Good for a new visitor who has never heard of Flair.
2. **Your AI knows what they need. Now it can get it.** Outcome-first. More immediate, but requires the supporting sentence to name shopping and Flair explicitly.

Recommended default: angle 1, because the product category is genuinely new and the descriptor is already established in the source context. Test, do not decide purely by taste.

## Finished first-pass homepage copy

| Section | Headline | Support / screen text | Visitor takeaway | Next transition |
| --- | --- | --- | --- | --- |
| Hero | **The shopping capability for your consumer app.** | “Your AI understands the user. Flair finds the right product and deal, completes the purchase, and brings the order back into your app.” CTA: **Book a demo**. Secondary text link: **See how it works**. | This is an end-to-end shopping capability for my app. | Health-coach moment comes into focus |
| One order | **From a need to an order.** | “A health coach knows the goal and preference. Flair finds an exact product, checks the offer, and buys it with the shopper’s permission.” State labels: **Recommended**, **Approved**, **Buying**, **Order confirmed**, **Earnings recorded**. | This is more than discovery; an authorized order happens. | Peel back the UI to see the work underneath |
| Hard shopping work | **The hard part happens underneath.** | “Products, variants, live offers, delivery, purchase routes, and order updates need to agree before a recommendation becomes a real order.” | Flair owns the complexity my team would otherwise have to build. | Collapse those layers into one partner integration |
| Integration | **Your app brings context. Flair handles shopping.** | “Send the relevant shopping moment. Show a native experience. Get order updates back.” Link: **Explore the developer flow**. CTA: **Book a demo**. | I can picture the boundary between my app and Flair. | The host app changes from coach to stylist |
| Shopping intelligence | **The right product is only the start.** | “For a look someone loves, Flair chooses the product, the useful deal, and the way to present it inside the stylist app.” Labels: **Right product**, **Right deal**, **Right experience**. | Flair helps with the decision and experience, not merely data access. | Pull back from this app to adjacent moments |
| Many apps | **Shopping intent appears everywhere.** | “A new routine. A new look. A trip. A birthday. Your app does not have to be a shopping app to help someone buy what they need.” Use-case labels: **Health**, **Style**, **Family**, **Travel**, **Gifting**. | This can fit my category. | Return to the question of credibility |
| Credibility | **Built for the full shopping task.** | “Explore how a session becomes a recommendation, an authorized order, and a status your app can trust.” Sub-links: **See the product**, **Explore integration**. Use factual coverage and merchant-route proof only after verification. | There is a real system boundary to inspect, and the page is honest about its scope. | Move from current capability to long-term direction |
| Close | **Give your AI a flair for shopping.** | “Let the next useful recommendation become something your user actually gets.” CTA: **Book a demo**. Future note, if included: “The direction: a personal shopper that learns from permitted shopping across apps.” | I know the next step. | Demo form |

## One continuous transaction: exact illustrative states

The demo uses a generic chocolate protein product rather than an unauthorized real merchant or brand. All prices, ETA, and earnings numbers shown in a rendered prototype must carry an **Illustrative demo** label until tied to a real supported merchant offer.

| State | Shopper/app screen | Flair operation being depicted | Critical accuracy rule |
| --- | --- | --- | --- |
| 0. Need | Coach: “You’re short on protein this week. Want me to find one that fits your preferences?” | Host app identifies an appropriate moment and sends only relevant context | Flair does not infer or disclose medical advice; host context is illustrative |
| 1. Recommendation | “Chocolate protein, 2 lb. Fits your budget and preference.” Show variant, all-in total, delivery, seller, and reason | Resolve intent, match product/variant, compare purchasable offers | No “best deal” unless comparison scope is known |
| 2. Authority | Either “Buy this for $X?” or a visible rule such as “Reorder this exact item monthly under $X” | Obtain or check purchase authorization | AI does not charge outside the shopper’s rule |
| 3. Placing | “Buying now. We’ll confirm the order here.” | Revalidate offer and route the purchase | Do not imply completion at this state |
| 4. Confirmed | “Order confirmed” plus order reference and arrival estimate only if merchant confirms | Store confirmed merchant order and emit event | Confirmed means merchant accepted the order |
| 5. Earnings | Partner dashboard: “Attributed order” and “Estimated earnings” | Attribute sale and show provisional commission | Estimated is not settled; no fabricated dollar amount |

The stylist sequence is a different scenario and should not masquerade as the same order. It demonstrates how Flair adapts the shopping surface: a small hair-care bundle after “I love this look,” with one product choice, one offer comparison, and a bundle-versus-single presentation decision.

## UI text sheet

### Shopper commerce surface

| Purpose | Use | Avoid |
| --- | --- | --- |
| Recommendation | “Recommended for your routine” | “The perfect product” |
| Reason | “Matches your chocolate preference and $45 budget” | “AI-picked for you” without reason |
| Price | “$39.80 total” | Price without shipping/tax caveat |
| Purchase action | “Buy for $39.80” | “Continue” when it places an order |
| Standing rule | “Buy this exact item monthly if the total is under $45” | “Let AI shop for me” without bounds |
| Processing | “Buying now. We’ll confirm the order here.” | “Ordered” before confirmation |
| Success | “Order confirmed” | “Success!” alone |
| Price changed | “The total changed to $41.20. Review it before buying.” | Silent substitution |
| Order uncertain | “We’re checking whether the merchant accepted this order. We won’t try again until we know.” | “Try again” with double-charge risk |

### Developer surface

Use **Create shopping session**, **Preview experience**, **Run test order**, **View order event**, **Estimated earnings**, **Settled earnings**. Never label a mock interface as live docs. A code fragment should have **Illustrative integration flow** beside it until the API is public and matches the example.

### Demo booking form

Title: **Show us the shopping moment in your app.** Help text: “A short conversation about your app, the user need, and how Flair could fit.” Fields: **Work email**, **Company or app**, **App website** (optional), **What does your app help people do?** (optional, short), **Role** (optional). Action: **Book a demo** only if it opens a real calendar or actually requests scheduling; if it merely sends a lead, use **Request a demo** until scheduling is connected. Success: “Thanks. We received your request and will follow up at [email].” Error: “We couldn’t send your request. Your answers are still here. Try again or contact [real address].”

## Copychief review of this first pass

**Classification:** developer homepage, mostly cold-to-warm traffic, U.S. consumer AI founders and engineering evaluators, problem/solution aware. The mechanism is context → product/deal/presentation → authorized order → partner event.

**Strategic verdict:** The category headline is clear, and the one-order demonstration is the strongest proof device. The biggest weakness is proof availability: no public coverage evidence, real transaction, partner result, or working booking route has been supplied. Copy cannot compensate for that. The first pass also risks repeating “right product” in sections 2 and 5, so section 5 must visibly focus on *how the shopping experience is chosen*, not run another generic recommendation.

| Location | Issue | Fix | Principle |
| --- | --- | --- | --- |
| Hero supporting line | Four verbs are packed into one sentence | Keep it, but display the order sequence directly beside it; do not add more prose | Mechanism should be demonstrated, not piled into adjectives |
| One-order section | “Buys it with permission” could still feel vague | Show the exact approval or standing rule on screen before “Buying” | Specificity and trust |
| Hard-work section | A list of components can feel like an architecture inventory | Connect every layer to the same pictured product and order | Reason why |
| Shopping-intelligence section | Repeats “right product” from the order sequence | Lead with product, deal, and presentation as three distinct decisions in the stylist UI | One new point per section |
| Credibility section | Without verified evidence, it is more a promise than proof | Gate scale, merchant, and pilot claims; replace with an honest integration diagram until verified | Proof before assertion |
| Demo CTA | “Book” and “Request” differ materially | Connect a real scheduling destination, or change all CTA labels consistently | Promise must match action |

**Readiness:** 6/10 as a truthful draft; not publication-ready until release status, claims, and demo destination are verified. The top three changes are a real purchase recording or accurately labeled interactive demo, verified coverage/route facts, and a working booking action. Keep the category headline, one-order narrative, and no-fake-urgency approach. Kill generic phrases like “seamless shopping,” repeated product cards, and any metric with no source.
