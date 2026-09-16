# Flair visual directions, wireframe, and motion specification

Working design specification, 14 September 2026. This applies brand identity, frontend design, parallel-concept, wireframe, micro-interaction, and animation-principle skills to the same approved message. A rendered concept is still required before declaring a final identity.

## Identity strategy

Flair must feel like a shopping action becoming possible inside a trusted AI app. The visual system should be warmer and more human than developer infrastructure, but precise enough that prices, order status, and technical boundaries are believable. The one memorable artifact is a **shopping decision rail**: context enters, an exact product and offer are selected, an authorized order is confirmed, and a partner event comes back. The brand earns distinction through that visible transformation, not gradients or repeated SaaS cards.

### Logo direction

Primary: a custom lowercase **flair** wordmark with one distinctive, slightly lifted dot or terminal that can also mark a confirmed shopping action. Keep the letters stable and legible at small sizes. Avoid a cart, bag, sparkle cluster, robot face, lightning bolt, or a generic rounded “f” app icon. Formal reference qualities, not models to copy: the restraint of the [Stripe wordmark](https://stripe.com/), the friendliness of the [Airbnb Bélo](https://www.airbnb.com/), and the memorable single-letter logic of the [Pinterest mark](https://www.pinterest.com/). The final mark needs original drawing and trademark review.

### Two art directions for the same content

| Decision | A. Decision rail | B. Personal shopper editorial |
| --- | --- | --- |
| Emotional register | Crisp, kinetic, trustworthy | Warm, taste-led, quietly premium |
| Base palette | Paper `#F8F8F5`, ink `#17223A`, electric blue `#3E51E8`, sky `#DDE6FF`, signal lime `#D9F27B` | Mist `#F7F4F8`, deep aubergine `#30213D`, iris `#7353B8`, blush `#F5C8B7`, mint `#C8E7D5` |
| Typography | [DM Sans](https://github.com/googlefonts/dm-fonts) for headlines/body, with heavier compact headlines; restrained tabular figures in product UI | DM Sans for body plus a limited editorial display serif in large brand moments only |
| Hero composition | Left-aligned copy, dominant coach UI in a horizontal purchase rail; exact order states are the visual center | A taller shopping story, with large human product imagery and an overlaid app conversation; receipt is tucked into the same visual field |
| Product treatment | Schematic but tactile product and receipt panels, clear status colors | More photographic product close-ups and less chrome |
| Risk | Can feel like a generic platform diagram if too schematic | Can look like a beauty DTC brand and hide the developer value |
| Distinctive test | Does a stranger see **a purchase happen inside an app**? | Does a stranger see **the app and integration**, not just attractive shopping? |

Palette A is the provisional prototype direction because the first site must make the system legible to developers. Direction B remains a genuine alternative for a future comparison. Avoid the near-black-plus-neon SaaS formula, cream-plus-terracotta editorial formula, gradients as filler, all-caps eyebrows above every heading, and identical shadowed cards. Color is reserved for the handoff and the decisive status, not sprayed on every container.

Typography roles: display 64–76 px on large screens, 38–46 px on small screens; section title 42–52/30–34 px; body 17–20 px; UI body 14–16 px; label 12–14 px. Keep body line length around 65–75 characters. Use sentence case throughout. Product totals use tabular numerals. Verify actual font loading/licensing and mobile rendering in the implementation. The [DM Sans source](https://github.com/googlefonts/dm-fonts) lists its license and family.

Iconography: simple regular-weight line icons where an action needs recognition, but use words for consequential actions. Photography should show products and app context, not a smiling model holding a phone. Product imagery in a prototype may be schematic; production images need licensing and offer accuracy.

Design principles: **one transaction, one thread** (related states remain visually connected); **proof is visible** (authorization, total, and confirmation are readable); **consumer surface first** (app moment before architecture); **quiet infrastructure** (technical detail is available without drowning the hero).

Brand expressions: website and embedded shopping surfaces share product/receipt details; pitch deck uses the same decision rail; social post crops one before/after transaction; developer docs use the same state names; stationery can use the wordmark alone. No physical packaging is implied by Flair's business.

## Three equal-fidelity behavioral concepts

Question to answer: **Which entry lets a new U.S. consumer AI developer understand Flair and reach a useful demo conversation fastest?** These concepts share the same copy, palette A, product example, and CTA, but differ in visitor action and information sequence.

| Concept | Visitor does first | What system shows first | What this tests |
| --- | --- | --- | --- |
| 1. Outcome-first rail | Watches or steps through one coach transaction, then scrolls to integration | Product → authorization → order → earnings | Does seeing the shopper outcome establish interest before architecture? |
| 2. Choose-your-app | Chooses Health, Style, or Family, then sees a tailored first commerce moment | App-specific context → recommended surface | Does self-identifying with a category improve comprehension, or add a distracting first choice? |
| 3. Integration-first | Looks at a compact “your app / Flair / your app” boundary, then opens the transaction | Inputs and outputs → product experience | Does technical certainty matter before the consumer story for engineering-led visits? |

Keep these as rough sketches at the same fidelity for first-click/comprehension testing. Do not “choose” by making one polished and the others rough. For the first implementation we can prototype concept 1 without treating it as a final winner, because it matches the known product-demo-first direction and requires no user-category branching.

## Annotated wireframe: desktop

```text
┌──────────────────────────────────────────────────────────────────────────┐
│ Flair       Product    Developers    Company               Book a demo │
├──────────────────────────────────────────────────────────────────────────┤
│ H1: The shopping capability     ┌──────────────────────────────────────┐ │
│ for your consumer app.          │ COACH APP / Illustrative demo       │ │
│ Support: 1 sentence             │ user need → exact product          │ │
│ [Book a demo] [See how]         │ price / delivery / authorization   │ │
│                                 │ [Step control]                      │ │
│                                 └──────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────┤
│ H2 From a need to an order.    [same product | order | earnings states] │
├──────────────────────────────────────────────────────────────────────────┤
│ H2 The hard part happens underneath.                                    │
│ [product] → [variant/offer] → [purchase route] → [order update]          │
├──────────────────────────────────────────────────────────────────────────┤
│ H2 Your app brings context. Flair handles shopping.                     │
│ [partner app] → [Flair session] → [embedded UI] → [order event]           │
│ [Explore developer flow]                                 [Book a demo] │
├──────────────────────────────────────────────────────────────────────────┤
│ H2 The right product is only the start.    [stylist UI / 3 decisions]  │
├──────────────────────────────────────────────────────────────────────────┤
│ H2 Shopping intent appears everywhere. [5 use-case moments]            │
├──────────────────────────────────────────────────────────────────────────┤
│ H2 Built for the full shopping task. [credible facts / integration]     │
├──────────────────────────────────────────────────────────────────────────┤
│ H2 Give your AI a flair for shopping.                [Book a demo]      │
└──────────────────────────────────────────────────────────────────────────┘
```

Desktop content width max 1200–1280 px. Hero copy occupies about 40% and UI about 60%, with enough UI width for 14–16 px readable text. The live order module is *not* a tiny screenshot. Headline and CTA are present in the first viewport at 1280×800. The app panel is semantically a demonstration, not a new checkout form. Do not place real-looking merchant logos or unverified scale stats in it.

## Annotated wireframe: mobile

```text
┌─────────────────────────────┐
│ Flair        Book a demo   │
│          Menu             │
├─────────────────────────────┤
│ H1: The shopping capability│
│ for your consumer app.     │
│ Support: 1 short sentence  │
│ [Book a demo] [See how]   │
│ ┌─────────────────────────┐ │
│ │ Coach app               │ │
│ │ product / order state   │ │
│ │ readable without zoom   │ │
│ │ [previous] [next]       │ │
│ └─────────────────────────┘ │
├─────────────────────────────┤
│ same order, vertical steps  │
│ ... remaining sections     │
└─────────────────────────────┘
```

At 375 px width, stack rather than shrink a desktop composition. The demonstration must retain full text and controls; no clipped purchase total or horizontal scroll. Reuse the same state labels, but shorten supporting copy, not the accuracy details. The mobile navigation should be a standard accessible disclosure, not a bespoke animated menu.

## Content and state annotations

- H1 occurs once; each major section has an H2; use-case names are H3 only if they own supporting content.
- First-screen priority: headline, product demonstration, CTA, disclosure that the flow is illustrative. Navigation is secondary.
- UI scene data in the prototype is static and illustrative; production may consume real product, offer, order, and earnings data only with appropriate freshness and authorization.
- Each state has loading, success, and exception behavior. A static order-success frame is not enough to explain permission and merchant confirmation.
- All essential information is present without animation. Motion changes focus, not content availability.
- Desktop and mobile share the same DOM reading order: headline → support/CTA → demo → explanatory sections.

## Motion and interaction contract

**Gate:** The explanatory order sequence is rare/first-visit, and its purpose is **explanation** plus **state indication**. It may animate. Navigation, form validation, and routine controls should have only immediate feedback; no decorative hover choreography or scroll reveals on every section.

| Interaction | Trigger | Rules and feedback | Motion | Interruption/reduced motion |
| --- | --- | --- | --- | --- |
| Order stepper | User selects Next/Previous or a named state | Change the state label and panel contents together; announce state to assistive tech | CSS `opacity`/`transform` transition, `--ease-out` `cubic-bezier(0.23, 1, 0.32, 1)`, 200–250 ms | Repeated presses retarget immediately; reduced motion removes translation, keeps short opacity change |
| Intro demonstration | User selects Play, if autoplay exists at all | Advance only through known illustrative states; pause control stays visible | Preset timing may be longer than UI timing, but each visible change under 400 ms | Pause at any state; stop on hidden tab; reduced motion defaults to static/manual |
| Purchase authority state | Stepper enters Approved | Exact total and user rule appear before Buying | Focus/opacity emphasis, no bouncing button | No automated click that looks like a real authorization |
| Confirmed order | Only after simulated merchant confirmation | Replace Buying with Order confirmed and expose order reference | Quick state crossfade, 250 ms | Do not animate a success state that hides confirmation text |
| Earnings event | Stepper enters final state | Same order reference visually connects to estimated earnings | Short spatial handoff, 250–350 ms max | No money-counting odometer; text remains readable |
| CTA press | Click/tap | Immediate pressed feedback | Transform scale to `0.97` for 100–160 ms, hover only on fine pointer | Motion removed for reduced motion if uncomfortable |
| Form validation | Submit/blur | Field-level reason and repair; preserve values | No entrance motion necessary | Focus the first invalid field and announce error |

Use transform and opacity for motion, not layout properties. No `transition: all`, scale-from-zero, `ease-in` entrances, decorative repeating loop, scroll-jacked playback, or moving data while someone reads it. The core demo should be navigable with ordinary buttons and work as a static sequence when motion is disabled.

## Visual review criteria

On desktop and at 375 px mobile: the product appears in the first screen; “Book a demo” is visible; the wordmark and main heading are distinct; purchase authorization and confirmation cannot be confused; every state remains readable at normal zoom; the full story works with motion off. Review screenshots for generic SaaS patterns, then remove any card, icon, divider, or color block that exists only as decoration.
