# Flair website structure: first design pass

This is a proposed information and visual flow for a U.S. developer audience. The only primary action is **Book a demo**. Use the product and claims ledger in `FLAIR_PRODUCT_AND_WEBSITE_PLAN.md` to distinguish real capabilities from concept scenes.

## Design read

A developer-facing product site with a consumer-quality shopping experience at its center. It should feel technically credible without turning the homepage into documentation. The signature image is a purchase completed inside someone else's AI app. The site should explain the product through one continuous transaction and one clear developer integration story.

## Visitor's decision sequence

| Visitor asks | Page answers |
| --- | --- |
| What is Flair? | It gives my consumer AI app the ability to shop for users. |
| Does it do more than recommend links? | It chooses a relevant product and deal, places the order, and returns confirmation to my app. |
| Why should I care? | My user gets the task done and my app earns from completed purchases. |
| What would I need to build? | Flair supplies the shopping experience and the commerce systems underneath it. |
| Would it fit my app? | The same capability works at different natural shopping moments. |
| Is this real and reliable enough to discuss? | I can see what is live, how the order works, and what an integration entails. |
| What next? | Book a demo with a real use case. |

## Homepage: eight sections

### 1. Hero: the capability, demonstrated

**Message:** “The shopping capability for your consumer app.” A short supporting line explains that Flair turns user context into a relevant product and completed purchase within the host app. Primary button: **Book a demo**.

**Visual:** a carefully designed AI health-coach conversation and shopping surface. It begins with a known need and shows the product selected. The initial viewport must establish “inside an AI app” and “real shopping outcome” even when motion is paused. Avoid a generic chatbot, terminal, or floating collection of feature cards.

**Design test:** In five seconds, can a first-time developer say what Flair does and for whom?

### 2. One transaction, three outcomes

**Message sequence:** “Show the right products” → “Let your AI shop for the user” → “Earn on every sale.” These are states of the *same order*, not three separate feature blocks.

**Visual:** health context resolves into a specific product and variant, the AI buys under the shopper's approval or standing rules, a genuine order confirmation returns to the coach, and the partner-side earning event appears. The user should not need to infer checkout from a product card alone.

**Design test:** Can the visitor follow one product all the way to a placed order and understand who earns?

### 3. Why Flair has to do the hard part

**Message:** A relevant result is only the beginning. Product variants, real prices, stock, offers, delivery, purchase, and order problems all matter.

**Visual:** a compact behind-the-scenes view of the same order, with only the data needed to explain the difficulty. A linked commerce graph or offer comparison can communicate this faster than a paragraph. Do not imply that every item in the graph is always purchasable.

**Design test:** Does the visitor see why a product API or checkout endpoint would still leave their team with substantial work?

### 4. The developer experience

**Message:** “Easy to integrate.” The partner app passes relevant user context and renders a shopping experience that fits its product. The example is an AI hairstylist after a user loves a look.

**Visual:** show the host app's moment, a minimal integration cue, and the resulting shopping experience within that app. The setup can look simple without pretending Flair is a general-purpose coding assistant or promising a literal one-prompt integration.

**Design test:** Can the developer name what they provide and what Flair provides?

### 5. Built to convert within that app

**Message:** “Already optimized to convert.” Flair handles the right product, right deal, and right experience. Stay inside the **same hairstylist UI** so the visitor sees what these decisions mean.

**Visual:** highlight one set of products suited to the look, a credible offer and delivery choice, and an interface that feels native to a stylist app. Comparison, saving, sharing, or bundles appear only when they serve that scenario. Do not repeat the hero's product-universe narrowing animation.

**Design test:** Does it feel like a considered shopping product rather than an embedded catalog?

### 6. Many applications, one capability

**Message:** “This shopping capability can be added to many kinds of consumer AI apps.” The line should describe ability to add it, not imply Flair already runs in every app.

**Visual:** the hairstylist app recedes into a small group of different AI experiences: health, family, travel, gifting or matchmaker, companion. Each shows its own natural shopping moment in one quick visual cue. Do not use a long grid of industries or identical cards.

**Design test:** Can a founder recognize an analogue of their own app?

### 7. Credibility and integration detail

**Message:** Flair owns the full commerce loop, with a clear route for a partner to start. Show product coverage, developer interface, purchase execution, post-purchase, and commerce reporting using current, defensible facts.

**Visual:** a precise sample session flow and order result, plus any permitted real demo, brand, partner, or catalog evidence. If code is shown, it must correspond to an actual API or be visibly labeled as an illustrative concept. If the 100M product / 20K brand figures are used, define exactly what those counts mean.

**Design test:** Does a technical evaluator have enough substance to book a meeting without being asked to believe a film alone?

### 8. Close: the larger future and action

**Message:** Shopping becomes more personal over time. A consented personal shopper can remember preferences, manage orders, notice restocks or better deals, and work across apps. Keep current product and future direction visually distinct. Final line: **“Give your AI a flair for shopping.”** Button: **Book a demo**.

**Visual:** one shopper's product, order, and preference continuity across a few apps, ending on the Flair wordmark. The close should feel like a payoff to the transaction, not a second product pitch.

**Design test:** Does the visitor leave with both the near-term use and the ambition?

## Navigation and supporting pages

For launch, keep navigation short: **Product**, **Developers**, **Company**, **Book a demo**. The homepage can contain the whole essential story. Supporting pages deepen it:

- **Product:** end-to-end health-coach use case, other natural moments, shopper control and post-purchase.
- **Developers:** actual integration options, session and event flow, UI ownership, sandbox/docs when ready, reliability, and commerce analytics.
- **Company:** belief, founders, earned lessons from brands/developers/shoppers, and the personal-shopper future.
- **Book a demo:** short form and genuine booking destination. Ask only for what helps prepare a useful conversation.

Do not launch empty docs, invented logos, an unsupported pricing page, or a “Get API key” CTA if pilot onboarding is the actual path.

## Visual and content rules for the first concepts

1. Design the real app scenes before designing section decoration. The product UI is the brand's strongest visual material.
2. Use one restrained motion language for state changes: selected, buying, ordered, earnings recorded. Every important state must also be understandable without animation.
3. Give type and layout a distinctive Flair identity. Avoid the common AI site look of purple glow, floating glass cards, a centered slogan, and a three-card feature row.
4. Keep each section to one new idea. Do not restate “add shopping to your app” in the developer section after the hero has established it.
5. Write literal CTA and interface language. “Book a demo” should lead to an actual demo booking flow.
6. Test the entire first viewport on mobile. The health-coach UI cannot become a tiny desktop screenshot.
7. Review each public claim against the product truth sheet before design is finalized.

## Skills to use in sequence

| Stage | Skill | Why it belongs |
| --- | --- | --- |
| Message architecture | `brand-messaging` | Hold one core promise and give each section a distinct supporting job. |
| Visual concepts | `frontend-design:frontend-design` | Find a brand-specific composition, type, palette, and product-demo treatment. |
| Interface language | `design:ux-writing` | Make labels, product states, and the booking form concrete and consistent. |
| Motion specification, once the static sequence works | `animate` | Animate the purchase and order transitions with clear state and reduced-motion behavior. |
| Build polish | `emil-design-eng` | Refine spacing, hierarchy, controls, and responsive details after a concept is chosen. |
| Final review | `design-systems:accessibility-audit` and a small comprehension test | Check that the experience is usable and that developers understand the product quickly. |

The full `design-consultation` workflow could establish a formal design system once the core page direction has been chosen. The first task is deciding the message and product scenes, not choosing colors in isolation.
