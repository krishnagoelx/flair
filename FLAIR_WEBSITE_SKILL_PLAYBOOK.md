# Flair website skill playbook

14 September 2026. This is a routing plan for the skills already installed on this machine. It is deliberately selective: each skill must answer a different design question. Skills listed for later stages should be read in full when we execute that stage. The current section draft is in `FLAIR_WEBSITE_STRUCTURE.md`; the product source is `FLAIR_PRODUCT_AND_WEBSITE_PLAN.md`.

## The site we are designing

Flair's website sells a conversation with a U.S. consumer AI developer or product team. It must make a shopper's task visibly complete inside a partner app, explain why Flair owns both shopping intelligence and commerce execution, make integration credible, and drive **Book a demo**. The brand should feel premium, youthful, clear, and technically serious. The site must never confuse a concept animation with a live product claim.

## Use these skills in this order

| Stage | Skill | Exact job | Output |
| --- | --- | --- | --- |
| 1. Define buyer | `target-audience` | Split founder/product-buyer questions from engineering-evaluator questions, using the known U.S. consumer AI customer as the starting point | Two short buyer lenses and objections |
| 1. Set promise | `brand-messaging` | Fix one core promise, three supporting pillars, and the proof needed for each | Message hierarchy and claim-to-proof map |
| 1. Set language | `brand-voice` | Convert the established founder tone into rules for homepage, UI, docs, and booking copy | Short voice guide; prohibited jargon and unearned claims |
| 2. Audit content | `ux-strategy:content-strategy` | Remove repeated ideas across the master context, product plan, and page structure; assign owners and freshness to claims | Section content inventory and claim ledger |
| 2. Structure site | `ux-strategy:information-architecture` | Decide homepage section order, navigation, and what belongs on Product, Developers, Company, and Demo | Sitemap, section hierarchy, navigation labels |
| 2. Map action | `prototyping-testing:user-flow-diagram` | Map a developer's route from first impression to booked demo, including detours through product or developer detail | First-click and booking flow |
| 3. Draft words | `direct-response-copy` | Strengthen the hero, section transitions, objections, and CTA using truthful specifics | Copy draft and two strong headline angles |
| 3. Write UI text | `design:ux-writing` | Name product states, labels, buttons, order status, and booking form fields consistently | UI text sheet for demo scenes and form |
| 3. Review words | `copychief` | Cut repetition, weak claims, vague conversion promises, and unearned proof after the draft exists | Marked-up copy and a final tighter version |
| 4. Set identity | `brand-identity` | Turn “Flair” into type, palette, material, product-image, and wordmark rules | Visual identity brief and design tokens |
| 4. Explore concepts | `frontend-design:frontend-design` | Design a distinct developer site anchored in real shopping UI, with disciplined typography and layout | Two art directions for the same page content |
| 4. Compare concepts | `prototyping-testing:parallel-concepts` | Compare genuinely different hero behaviors, such as entering through the shopper outcome or through the developer's app | Concept comparison before polishing one direction |
| 5. Lock structure | `prototyping-testing:wireframe-spec` | Define each section's content priority, UI size, responsive behavior, and states before color and ornament | Annotated desktop and mobile wireframes |
| 5. Specify motion | `interaction-design:micro-interaction-spec` | Define trigger, rules, feedback, interruption, and reduced-motion behavior for each important sequence | Storyboard/state table for product-to-order and developer-to-app transitions |
| 5. Tune motion | `interaction-design:animation-principles` | Give explanatory transitions consistent easing, staging, and timing once the state sequence is clear | Motion rules for the selected concept |
| 6. Build | `animate` | Implement only approved purposeful animations | Working product-state transitions |
| 6. Polish | `emil-design-eng` | Refine the details of real controls, spacing, responsive product UI, and interaction feedback | Production polish pass |
| 7. Validate | `design-systems:accessibility-audit` | Audit the built UI for reading, navigation, contrast, focus, and reduced motion | Prioritized accessibility fixes |
| 7. Validate | `web-design-guidelines` | Review the implemented site against web interface guidelines | Code-level UI findings |
| 7. Validate | `design-research:usability-test-plan` | Test whether target developers understand Flair and find the demo path | Short comprehension and navigation test plan |

### Conditional skills

- `design-consultation`: formal design-system workflow once the first art direction is chosen. Its full process is heavy, so it should not hold up the initial message and section work.
- `design-systems:design-token` and `design-systems:motion-system`: useful when the chosen visual and animation patterns need to become reusable tokens across several pages.
- `review-animations`: critique implemented motion. `find-animation-opportunities` is a later read-only sweep of an existing interface, not the starting point for an unbuilt page.
- `cinematic-director`: relevant if the launch film is produced or embedded as a major media asset. Website UI transitions should use the interaction and animation skills above.
- `seo-keyword-research`: for a later editorial/docs acquisition plan, not the first homepage composition.
- `vercel-react-best-practices` or other framework guidance: only once the site stack is chosen.

### Intentionally not in the core set

`landing-page-copy` is specifically for short ad-to-video bridge pages and often recommends curiosity or urgency tactics that would weaken a technically credible developer homepage. `ad-copy` applies to campaign creative, not the product site. `compliance-checker` applies if we make paid ads. Using every available skill at once would produce repeated work and conflicting design rules.

## Skill-to-section assignment

| Homepage section | Content question | Visual element to develop | Motion decision | Leading skills |
| --- | --- | --- | --- | --- |
| 1. Hero | What does Flair let my AI do? | A health-coach UI that visibly contains a purchasable product and outcome | One introductory change from need to product; static first frame must still explain the product | Brand messaging, frontend design, wireframe spec |
| 2. One transaction | Does it actually buy, and do I earn? | The same product proceeds to order confirmation and partner earnings | The only major explanatory sequence: selected → buying → ordered → earnings | Micro-interaction spec, animation principles, animate |
| 3. Hard shopping work | Why can't I build this with a product API? | Product, variant, live offer, delivery, and order layers connected to the same transaction | Subtle state reveal only if it clarifies the relationship; avoid animated data noise | Content strategy, information architecture, frontend design |
| 4. Easy integration | What does my team do? | Hairstylist app moment plus a small, accurate integration view | Developer action resolves into the shopping surface; no fake general-purpose coding agent | User-flow diagram, wireframe spec, UX writing |
| 5. Built to convert | What intelligence is already included? | Inspect the same stylist UI: relevant products, best useful offer, fitting shopping pattern | Controlled highlight or focus change, not a second product-narrowing sequence | Brand messaging, frontend design, micro-interaction spec |
| 6. Many apps | Would this work in my category? | Distinct health, family, travel, gifting, and companion moments | A short spatial transition from one app to several; avoid a looping card carousel | Information architecture, frontend design |
| 7. Credibility | Is the integration and execution real? | Actual or explicitly illustrative session flow, confirmed coverage, and order result | Little or none; technical proof must remain readable | Content strategy, copychief, UX writing |
| 8. Close and demo | Why meet Flair now? | Small preview of the personal-shopper direction, final brand line, simple demo CTA | One calm closing transition; no competing climax | Direct-response copy, brand voice, wireframe spec |

## Decision gates before build

1. **Story gate:** a developer can repeat Flair's promise after seeing the first screen and one order sequence.
2. **Content gate:** each section adds a new fact, objection answered, or future implication; no repeated “add shopping” pitch.
3. **Proof gate:** every displayed metric, logo, API snippet, merchant, ETA, and confirmation is identified as real, illustrative, or future.
4. **Visual gate:** two art directions use identical copy and scenes, so the comparison tests design rather than changing the message.
5. **Motion gate:** every animation is labeled as explanation, feedback, or spatial continuity. Anything decorative must earn its cost in comprehension.
6. **Conversion gate:** “Book a demo” leads to a working booking route, and a visitor can reach it from the hero, after integration proof, and at the close.
7. **Usability gate:** target developers can answer four questions without our help: what Flair does, what the app supplies, whether an order is completed, and what to do next.

## Immediate output to make next

The next useful artifact is a **content-and-scene board**, not production code: for each section, write one headline, one supporting sentence, the exact UI state or evidence shown, and the single transition into the next section. Then make two visual concepts for the hero and the same-order sequence. Only after choosing one should we set final colors, fonts, and motion tokens.

## Execution record, 14 September 2026

The original “Immediate output” above is now complete. Skills were applied to a working prototype, not merely listed. Their deliverables are:

| Skill | Applied result | Remaining validation |
| --- | --- | --- |
| `target-audience` | Buyer/evaluator/shopper lenses in `FLAIR_AUDIENCE_VOICE_AND_CONTENT.md` | Interview real U.S. teams; do not treat hypotheses as quotes |
| `brand-messaging` | Complete hierarchy, tagline decision, proof bank, audience/channel variants in `FLAIR_BRAND_MESSAGING.md` | Verify product-release claims |
| `brand-voice` | Voice axes, vocabulary, surface examples, rewrite rules | Validate with founder/team |
| `ux-strategy:content-strategy` | Source inventory, content model, ownership and freshness rules | Assign actual owners |
| `ux-strategy:information-architecture` | Sitemap, navigation, page/section division | Tree/first-click test |
| `prototyping-testing:user-flow-diagram` | Developer-to-demo flow including detours and failure paths | Test actual booking path after connection |
| `direct-response-copy` | Two hero angles and section-level persuasive copy in `FLAIR_WEBSITE_COPY_AND_SCENES.md` | Test comprehension/conversion with visitors |
| `design:ux-writing` | Product states, errors, partner labels, and booking text sheet | Finalize against live order API |
| `copychief` | Copy classification, critique, fixes, kill list, readiness score | Repeat after real proof is inserted |
| `brand-identity` | Wordmark, palette, typography, imagery, icon, and touchpoint brief in `FLAIR_DESIGN_AND_MOTION_SPEC.md` | Original logo and brand review |
| `frontend-design:frontend-design` | Two art directions; decision-rail direction rendered in `index.html` / `styles.css` | Compare with second direction using same content |
| `prototyping-testing:parallel-concepts` | Three behaviorally distinct entry concepts at equal sketch fidelity | User test before final selection |
| `prototyping-testing:wireframe-spec` | Annotated desktop/mobile layouts and state priorities | Reconcile with production content |
| `interaction-design:micro-interaction-spec` | Demo, purchase authority, CTA, and validation triggers/rules/feedback | Test with actual data and assistive tech |
| `interaction-design:animation-principles` | Purpose, properties, easing, duration, interruption, reduced motion rules | Feel-check on real devices |
| `animate` | Working manual stepper with CSS state transitions in `script.js` / `styles.css` | Frame-by-frame and low-power-device check |
| `emil-design-eng` | Press feedback, interruptible transitions, reduced motion, clearer approval state and typography | Final production polish after data/assets |
| `design-systems:accessibility-audit` | Preliminary semantic, keyboard-path, contrast, and responsive audit in `FLAIR_VALIDATION_AND_LAUNCH_GATES.md` | Full VoiceOver/NVDA and user test before launch |
| `web-design-guidelines` | Fresh guideline review and resolved interaction/contrast findings | Re-run after booking and additional pages |
| `design-research:usability-test-plan` | Ready-to-run study, tasks, metrics, script, pilot checklist | Recruit and conduct sessions |

The distinction matters: planning and prototype skills have produced artifacts; **audit and research work cannot be claimed fully complete** until the final booking flow, real data, and real participants exist. The prototype intentionally does not transmit a demo request without a destination.
