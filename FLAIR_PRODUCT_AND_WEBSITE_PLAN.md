# Flair: product and website blueprint

Working plan, 14 September 2026. This reconciles the supplied Flair master context with the earliest 20 turns of **Continue Shared Chat** and the full **Downtown B2B2C or B2C** conversation. Where those discussions changed direction, the latest explicit decision takes precedence. Proposed technical contracts below describe what to build; they are not claims that an API already exists.

## 1. The company in one page

**Flair is the shopping capability for consumer AI apps.** The app knows its user and the moment they need something. Flair knows the world of products and handles the shopping. It decides which purchasable product and deal fit, presents the right experience inside the app, completes the order, and stays with the user through delivery, returns, and reorders. The partner app earns when a purchase happens.

The central shift is simple: **AI is moving from advice to action.** A health coach that knows someone needs more protein should be able to get their preferred protein to the door. A hairstylist that creates a look should be able to source the products needed to maintain it. The transaction should happen where the intent happens.

Flair has two intertwined jobs:

1. **Make shopping executable:** a living product graph, variants, prices, stock, offers, delivery, merchant connections, payment, checkout, orders, and post-purchase work.
2. **Make shopping good:** use the host app's context and shopping behavior to decide what to show, what deal matters, how much choice to present, how shopping fits the moment, and what helps a person decide.

The prior consumer experiments led to the key insight: **discovery is not buying.** A catalog, product links, or a checkout endpoint alone leave the developer to solve the actual shopping experience. Downtown was the consumer proving ground for that insight. Flair is now the product and brand for developers and their users.

The earliest shared discussion gives the fuller origin of this thesis. Work with brands showed a cold-start problem: deep merchant integrations and commercial agreements move slowly before demand is visible. Work with developers showed that they want a useful, revenue-producing capability, not a protocol to manage. The couples-app pilot and Downtown experiments showed that even relevant discovery did not automatically turn considered purchases into orders. The team called out **taste, shopping together, deals, and intent** as distinct consumer-learning areas. The first website does not need to narrate this entire history, but the product must embody it. In particular, comparison, saving, sharing, and collaborative decisions may matter more in gifting or style than in a simple reorder.

### Who receives value

| Party | What they bring or need | What Flair gives them |
| --- | --- | --- |
| Consumer AI app | User relationship, context, trust, interface, distribution | A native shopping experience, completed orders, commerce performance, a share of sales |
| Shopper | A goal, taste, budget, constraints, and permission to act | Less searching and form filling, relevant choices, purchase execution, order help, an increasingly useful personal shopper |
| Merchant or brand | Products, offers, fulfillment | Demand created inside consumer AI experiences and orders with attribution |
| Flair | Product graph, shopping intelligence, execution, and operations | Distribution through partners, transaction economics, and learning from consented shopping activity |

Flair should be free or close to free for the shopper. The initial business model is merchant or affiliate commission, shared with the partner. Brand relationships may later improve economics. Future placements or insights are separate products and must be clearly labeled if introduced.

## 2. Product scope and positioning decisions

**Primary customer:** U.S. developers and companies building consumer AI products. Founders and product leads must understand the promise instantly; engineers must see a credible path to integration.

**Primary website action:** Book a demo.

**Current product-scale statement supplied for this plan:** 100 million products and 20,000 brands, spanning marketplaces. This is newer than the older India graph figures in the shared history, so the website should use the new figures only after the team confirms their exact geographic coverage, freshness, purchasability, and public wording. “All marketplaces” is a universal claim and needs a precise definition before publication.

**Purchase behavior:** The AI should complete purchases for the shopper. The implementation must support explicit per-order approval and standing, user-set purchase rules. Within an active mandate, the AI can place an order automatically. Outside it, the AI asks for approval. This preserves the intended autonomous experience while making spending boundaries legible and auditable.

**Primary promise:** “Your app understands the user. Flair handles the shopping.” The approved brand payoff remains “Give your AI a flair for shopping.” The latter belongs near the end of the website story and at the close of the film.

**What Flair is not reduced to:** SDK, MCP, affiliate widget, product database, merchant API, universal checkout, or a generic shopping widget. These are access methods or components of the system, not the whole product.

## 3. The full shopper journey

The same underlying system works for two classes of moment: an explicit request (“What protein should I buy?”) and an intent that emerges inside a non-shopping app (“I love this hairstyle”). The host app decides whether a moment is appropriate to offer commerce; Flair should help partners discover and improve those moments through early launches and tooling.

### Example: health coach

1. The coach knows the user's protein goal, chocolate preference, brand history, budget, location, and delivery constraints. It sends only the shopping context needed for this task.
2. Flair resolves the intent into product criteria, searches its graph, checks exact variants, price, stock, offers, seller reliability, and delivery feasibility.
3. Flair returns one strong recommendation or a very small set, with a concise reason, real total, and arrival estimate. The shopping UI appears inside the coach.
4. The user either asks the AI to buy, approves this order, or has previously authorized a recurring purchase under defined rules.
5. Flair rechecks the offer, secures payment through its payment partner, places the order through a supported merchant route, and returns a confirmation to the coach.
6. The coach can show “Ordered ✓” and “Arrives tomorrow” when these are actually confirmed. Flair continues tracking and handles exceptions.
7. The partner sees the attributed sale and expected earnings, with final settlement adjusted for cancellations or returns.

The homepage animation should follow **one product and one order** through context → recommendation → buying → confirmation → partner earnings. It should not depict several unrelated demos as if each were a new step in the same transaction.

### Other natural moments

- **Hairstylist:** after a user loves a look, offer a shampoo, conditioner, and serum chosen for the user's hair and the look. This is the strongest example for integration and “right product, right deal, right experience.”
- **Family assistant:** replace a child's outgrown football shoes with the next size of the pair they like, arriving before practice.
- **Travel assistant:** find a carry-on that meets the trip and arrival deadline.
- **Matchmaker or couples app:** find and deliver a gift suited to the recipient before a date or occasion.
- **Companion, game, creator, or voice assistant:** surface commerce only when the product is genuinely relevant to the user's goal or interest.

Shopping is visual. Conversation carries intent and confirmation; product images, variants, comparisons, real price, offers, and delivery need an appropriate visual surface. Some moments need one confident choice; others need a shortlist, comparison, save, sharing, or buying together. Flair chooses and improves the pattern with the partner rather than forcing one universal card.

## 4. What Flair must operate behind the experience

### A. Commerce graph

Collect and normalize offers from marketplaces, merchant integrations, affiliate feeds, and other authorized sources. Separate a canonical product from its variants and merchant offers. Track identifiers, brand, category, images, attributes, size or flavor, merchant, price, coupon, inventory signal, location availability, shipping cost, ETA, return policy, and data freshness. Match duplicate listings across sellers. Treat “100 million products” as graph coverage, not proof that every item can be purchased through Flair at any instant.

### B. Shopping intelligence

Translate structured context and permitted image or video inputs into needs and constraints. Retrieve relevant products, reject unavailable or unsuitable variants, compare all-in costs and delivery, and rank with relevance, quality, deal confidence, trust, and conversion signals. Return a reason a human can understand. Choose a surface: single item, shortlist, bundle, comparison, save-for-later, restock alert, or reorder. Learn from commerce impressions, clicks, saves, purchases, returns, and explicit feedback. Optimize for successful and satisfactory shopping, not just the first click.

### C. Transaction execution

Quote the final amount and delivery before commitment, detect changes, obtain or verify the shopper's purchase authority, route to a supported merchant, and use an agentic payment partner where appropriate. Maintain an order state machine and an auditable record. If a basket spans merchants, Flair can present one coherent experience while recording that fulfillment, shipment, return, and even payment legs may be separate. Never show “Ordered” until a merchant order is actually confirmed.

### D. Post-purchase operations

Ingest merchant and shipping updates; reflect them in the host app; send optional notifications; support cancellation, return, refund, replacement, and escalation. Keep the order record connected to its originating app and shopper. Handle failed or uncertain orders as explicit states rather than silently retrying a charge.

### E. Personal shopper and Shopping Passport

With user consent, create a persistent Flair shopper identity that remembers taste, sizes, saved items, purchase history, returns, preferred brands, budget tendencies, and recurring needs. A private agent mailbox can hold merchant-created account email, receipts, verification messages, order updates, and support threads without requiring access to the user's personal inbox. Messaging via iMessage, WhatsApp, or email could carry delivery updates, price drops, restocks, returns, and reorders. Cross-app memory must be opt-in and controllable; a partner receives only its own shopper reference and commerce results, not another partner's user data. The long-term aim is a personal shopper that knows, acts for, and stays with a person across apps.

The business has two distinct learning loops: more partners bring more users and commerce moments; more permitted interactions for one shopper improve that shopper's experience across apps. These should not be collapsed into one diagram.

## 5. Developer integration: proposed product contract

The easiest initial route should be a **hosted/embedded commerce surface** with an SDK wrapper. A headless API can serve teams that need their own UI, and an MCP/tool interface can serve AI agents. They should share the same sessions, offers, orders, identity, analytics, and safeguards. Do not market “one prompt” or “a few lines” as the whole integration unless the production path actually demonstrates it.

### Partner onboarding

1. Create an organization and app, set U.S. availability, supported categories and surfaces, branding, callback URLs, and revenue agreement.
2. Get sandbox credentials and test shoppers. Keep server credentials off the client.
3. Choose an initial commerce moment with Flair's partner team. Define what context is available and what the shopper sees.
4. Configure the commerce surface and order callbacks. Run test purchase, failure, cancellation, and refund paths.
5. Launch to a small cohort, inspect the funnel and user feedback, then widen distribution.

### Minimal partner-controlled inputs

The host app sends a stable pseudonymous user reference, the commerce moment, relevant user intent, budget, category, location or delivery constraints, allowed preference data, desired UI surface, and optional purchase mandate reference. It should not send its full conversation transcript by default. The host retains the user relationship and general app analytics. Flair receives only enough context to shop and operates commerce analytics.

Illustrative server-side session creation, not a published API:

```json
POST /v1/commerce/sessions
{
  "partner_user_ref": "usr_42",
  "surface": "health_coach_protein",
  "intent": { "need": "protein supplement", "flavor": "chocolate" },
  "constraints": { "max_total_usd": 45, "deliver_to_zip": "10001" },
  "presentation": "embedded",
  "purchase_mandate_ref": "mandate_optional"
}
```

Flair returns a short-lived session token, a URL or component payload for the embedded experience, and a commerce session ID. The partner renders the surface inside its app. For headless mode, the partner consumes product, quote, and order objects and accepts additional responsibility for UI quality and instrumenting the same event contract.

### Purchase authority

An order is only placed when one of these is true:

- **Approval for this order:** the shopper confirms the exact product, variant, final cost, address, and delivery terms.
- **Standing mandate:** the shopper has authorized a bounded action such as “reorder this exact protein every month if the total is at most $45 and delivery is available.” The mandate records item or category, spend ceiling, frequency, expiration, delivery address, and revocation state. Flair checks it immediately before buying.

The AI can decide what to buy and execute it automatically inside the mandate. If price, stock, merchant, item, or delivery terms fall outside the rules, it asks the shopper. This is how “AI automatically completes purchases” becomes a trustworthy product behavior rather than a loose marketing line.

### Order state and callbacks

Recommended states: `proposed` → `quoted` → `authorized` → `placing` → `confirmed` → `shipped` → `delivered`, with explicit `needs_approval`, `failed`, `cancelled`, `return_requested`, `returned`, and `refunded` branches. Orders and payment attempts need idempotency keys so retries cannot create duplicate purchases. Webhooks should be signed, versioned, replayable, and delivered at least once; partner handlers must deduplicate by event ID. The partner should be able to fetch the authoritative order status after a missed callback.

Example partner events: `commerce.session_opened`, `offer.selected`, `order.needs_approval`, `order.confirmed`, `order.failed`, `order.shipped`, `order.delivered`, `return.started`, `refund.completed`, `earnings.updated`.

### Security and data boundaries

Use short-lived signed client sessions and server-side API credentials. Tokenize payment information with the payment partner; Flair and host apps should not handle raw card data in application payloads. Store merchant account secrets and agent mailbox access in a dedicated vault with restricted workers. Maintain consent and mandate records, audit every autonomous purchase, allow revocation, and give the shopper clear order and account visibility. Share cross-app shopping knowledge only under a user-granted scope. Do not promise automated access to every merchant account: prefer direct merchant connections, then approved account creation with the agent email, and require the user to complete challenges that cannot be handled legitimately by the agent.

### Reliability and operations

Every offer needs freshness metadata. Revalidate price, stock, delivery, and policy at checkout. If the merchant returns an uncertain result, reconcile before retrying. Build merchant adapters behind one order interface, but expose merchant-specific exceptions to the operations team. Keep tracing by commerce session, shopper, merchant order, and partner attribution ID. Alert on quote changes, checkout failures, order-confirmation delays, webhook lag, refund backlog, and data-freshness failures. Start with a narrow set of reliable purchase routes and widen coverage based on observed demand.

### Commerce analytics and partner earnings

The Flair surface emits impressions and actions. The checkout and order system emit authoritative financial and post-purchase events. A session attribution record ties `partner_id`, `partner_user_ref`, `surface`, `commerce_session_id`, offer, order, and eventual commission together. Partners see only their own funnel, orders, net sales, returns, and estimated or settled earnings. Flair uses permitted aggregate and shopper-level signals to improve ranking, offer choice, and presentation. Commission is provisional until merchant reporting and return windows settle; the dashboard must distinguish estimated from payable earnings.

## 6. Phased delivery plan for the product

| Phase | Product outcome | Scope gate |
| --- | --- | --- |
| 0. Truth and pilot contract | One U.S. partner can describe an exact shopping moment, coverage, order path, and success measure | Confirm purchasable catalog coverage and merchant/payment routes for the first category |
| 1. Working purchase loop | Embedded experience takes context to a real confirmed order and returns status to the app | One category, limited merchants, payment, approval or mandate, order ledger, webhooks, support path |
| 2. Repeatable developer product | A second partner integrates with substantially less custom work | SDK, sandbox, docs, templates, dashboard, standardized commerce events, merchant adapters |
| 3. Conversion intelligence | Flair adapts recommendation and UI to different moments | Experiments across product/deal/presentation, with satisfaction and return signals |
| 4. Persistent personal shopper | Shopper gets continuity across participating apps | Consent, identity linking, agent mailbox, saved products, alerts, recurring rules, messaging |
| 5. Wider commerce reach | More categories and merchant routes with reliable execution | Coverage, freshness, fulfillment and return quality measured per route |

The historical U.S. GTM proposal starts with roughly 4–5 close pilots and later targets larger consumer AI partners. The one-million-U.S.-shopper figure is an ambition and operating target, not present traction. The website should sell a real pilot and credible direction without implying every phase is already available.

## 7. What the website must accomplish

The visitor's understanding should progress in this order:

1. **My app understands a user need but cannot finish the shopping task.**
2. **Flair finds a relevant product and deal, buys it, and brings the result back into my app.**
3. **My user gets a better experience and my app earns from a completed sale.**
4. **Flair also handles the shopping choices, interface, checkout, and order work I would otherwise need to build.**
5. **This could work in my app; I should book a demo.**

### Recommended site map

- **Homepage:** the full story and primary demo CTA.
- **Product:** the end-to-end consumer and partner experience, with concrete use cases.
- **Developers:** integration modes, illustrative flow, security and event model; link to real docs when available.
- **Company:** concise vision and team credibility. Downtown and the lassi origin can appear here if they add clarity.
- **Book a demo:** a short form asking company, app URL, role, use case, approximate U.S. audience, and email. Do not make a visitor answer twenty questions.

Build the homepage and demo page first. Product and developer pages can follow once the visual story and actual integration path are settled. Do not fabricate live API documentation or traction logos.

### Homepage narrative

| Section | Point to communicate | What the visitor sees |
| --- | --- | --- |
| Hero | “The shopping capability for your consumer app” | Living health-coach UI where known context becomes one relevant product and then a confirmed order; clear Book a demo button |
| Same-order sequence | Show the right products → Let your AI shop for the user → Earn on every sale | One continuous product/order becomes the partner earning event |
| Developer transition | Easy to integrate | Developer-side setup resolves into a working hairstylist shopping moment; avoid a fake general-purpose AI coding assistant |
| Built-in decisions | Already optimized to convert | Inspect the same hairstylist UI to reveal right product, right deal, right experience; do not replay a products-to-one animation |
| Many apps | The capability can be added to many consumer AI products | The hairstylist experience pulls back to health, family, travel, companion, gifting, and other natural moments |
| Credibility | The hard shopping work sits underneath | A compact but legible view of product coverage, live offer checks, purchase execution, order updates, and partner performance, limited to defensible current claims |
| Future | A personal shopper that improves with use | A restrained cross-app identity and order-continuity illustration, explicitly framed as the direction if not shipped |
| Close | User benefit and partner earnings align | “Give your AI a flair for shopping.” and Book a demo |

### Copy hierarchy

**Hero option:** “Give your app the ability to shop.” Supporting line: “Flair uses the context your AI already has to find the right product, complete the purchase, and keep the order inside your app.” CTA: “Book a demo.” An alternate, closer to the current film, is “The shopping capability for your consumer app.” We should judge these against a visual prototype; the clearest line can be the headline and the other the first supporting sentence.

**Three claims inside the product proof:** “Show the right products.” “Let your AI shop for the user.” “Earn on every sale.” Each should correspond to an observed state in the UI, not a standalone wall of copy.

**Developer proof:** “Easy to integrate.” “Already optimized to convert.” Show what is built in: product, deal, and experience. Do not repeat the hero promise in a second heading.

**Tone:** short, concrete, human, ambitious, technically credible. No em dashes, unexplained “agentic commerce” jargon, or invented scale claims. Examples and UI should carry more weight than abstract declarations.

### Visual direction to explore

Flair should look like a consumer product with developer credibility. The memorable artifact is a **shopping decision coming alive inside someone else's AI app**. Use a calm canvas and a small number of carefully designed application surfaces, with typography and color that feel ownable to Flair. The hero should be composed around the working app and order transition, not abstract gradient decoration. Motion should show state change: context received, product selected, buying, ordered, earning recorded. It needs pause controls and a reduced-motion version. Mobile should retain the narrative without tiny desktop mockups.

We should build two visual directions for review before choosing colors and fonts: one crisp and product-led, one more expressive and consumer-led. Both must use the same real content so the comparison tests design, not different messages. Final visual tokens should be chosen after that review, not guessed in this document.

### Website conversion and measurement

The demo action appears in the hero, navigation, after the developer proof, and at the close. The form should acknowledge submission, route the lead to the team, and provide a calendar option only if a real booking destination exists. Track hero-to-demo clicks, completed bookings, section engagement, film starts and completions, and which use-case link leads to bookings. Do not confuse website leads with Flair shopping transactions.

## 8. Claims and decisions ledger

| Item | Status for planning | Publication rule |
| --- | --- | --- |
| U.S. developers are the primary buyer | Confirmed in latest user message | Use directly |
| Book a demo is the primary CTA | Confirmed in latest user message | Use directly |
| 100M products, 20K brands | Latest user-supplied figure; supersedes older India figures for planning | Verify scope and current operational meaning before public numerical claim |
| “All marketplaces” | User-supplied ambition or coverage wording, technically broad | Define coverage and exclusions before printing literally |
| AI automatically completes purchases | Confirmed product intent | Show approved order and bounded standing-mandate behaviors accurately |
| Live U.S. checkout, tracking, returns, and agent mailbox | Discussed across older chats, but exact current release state is not established here | Demo and website must distinguish working, pilot, and future capabilities |
| 25M+ products and ~6K brands in India | Historical claim from prior materials | Do not blend into new U.S. figure |
| Billions of products and millions of brands | Aspirational film wording from earlier discussion | Do not publish as live coverage without proof |
| 1M U.S. shoppers in six months | GTM ambition from prior discussion | Never present as achieved traction |
| Faff as an early customer; brands, couples-app pilot, and Downtown experiments | Described in early shared discussions, with status that may have changed | Confirm names, permissions, outcomes, and dates before using as proof |

## 9. Next concrete work

1. Turn this blueprint into a short, dated claim sheet with evidence for the U.S. graph, purchase routes, merchant coverage, and pilot status. The website can begin design before that, but numerical copy waits for the claim sheet.
2. Draw the exact health-coach and hairstylist UI states, including price, variant, approval or standing rule, order confirmation, and partner earning event.
3. Produce two homepage art directions using those same states; review the first viewport on desktop and mobile.
4. Choose the copy hierarchy and one direction, then build the homepage and demo flow.
5. Test comprehension with several target developers: after five seconds, can they say what Flair does, how it fits their app, whether it buys, and what action to take?
6. Add deeper product and developer pages from the real integration contract, then verify accessibility, performance, responsive behavior, demo submission, and factual claims before publishing.

The most important unresolved matter is product **release truth**, not product philosophy: which of the end-to-end behaviors are already working in the U.S. and which are pilot or roadmap. That single record will keep the website ambitious without letting a film-style example become an inaccurate product promise.
