# Flair website validation and launch gates

Prototype review, 14 September 2026. Scope: `index.html`, `demo.html`, `styles.css`, and `script.js`. The page is a design prototype, not yet a public launch. Browser checks were run at default desktop width and 375 px phone width.

## Checks completed

- Home loads; all named page links have destinations; there is exactly one H1.
- No horizontal overflow at 375 px. The hero, navigation, and demo controls remain reachable.
- Mobile Menu opens and exposes Product, Developers, Why Flair, and Book a demo.
- The illustrative shopping sequence advances from recommendation to approval, buying, confirmation, and partner earnings. At the last step, Next is disabled; Previous remains available.
- Inactive demo states are `inert` and `aria-hidden`; the active state is exposed through a polite live region.
- The demo CTA reaches `demo.html`. That page does **not** pretend to submit a lead: it states booking is not connected.
- JavaScript syntax check passes.
- A computed-color sweep found and then corrected low-contrast small text in the demo, integration, and footer. After the fix, no visible non-disabled text in that sweep fell below 4.5:1. This is a targeted check, not a substitute for an assistive-technology audit.
- The latest Vercel [Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md) were checked against the files. Their title-case suggestion conflicts with Flair’s established sentence-case voice, so the brand rule takes precedence. The rest of the applicable interaction/accessibility guidance informed the fixes.

## Audit findings

| Severity | Location | Finding | Status / remediation |
| --- | --- | --- | --- |
| Critical for launch | `demo.html:19` | Book a demo cannot schedule or deliver a lead. | Open. Connect a real calendar or verified lead endpoint, then make the CTA match the action. |
| Major for launch | `index.html:48` and product-flow copy | The mock total, order, and earnings are illustrative, not evidence of a live U.S. route. | Clearly labeled in the prototype. Replace with a real transaction recording or keep the illustrative label at launch. |
| Major for launch | `index.html:94` and credibility section | Public proof of U.S. catalog coverage, supported routes, and pilot performance is missing. | Open. Obtain a dated claim sheet before using the 100M/20K figures or “all marketplaces.” |
| Major for production | Whole site | Keyboard and screen-reader behavior was reviewed from semantics/AX tree, but not tested with VoiceOver, NVDA, or users with disabilities. | Open. Run manual assistive-tech tests before publishing. |
| Minor | `index.html:90` | Stylist scene uses a graphic placeholder, not an actual hairstyle or purchasable care set. | Open for visual polish. Create licensed/owned imagery and show an exact relevant product and deal. |
| Minor | `demo.html:15` | On phone, this page has only the Flair home link rather than the full navigation. | Acceptable for a simple booking step, but revisit if it becomes a larger form. |

### Resolved code-level review notes

| Before | After | Why |
| --- | --- | --- |
| Approval-looking button in a nonfunctional demo | Labeled “Purchase authorized by shopper” state | Prevents a dead control and false implication that this prototype can buy |
| “Company” link to a proof section | “Why Flair” link to that section | Navigation label now predicts the destination |
| Several small labels below 4.5:1 | Darkened labels to `#586278` where needed | Improved readability |
| Reduced-motion setting still allowed hover movement | Reduced-motion override removes control transforms | Honors the user’s motion preference |
| Four awkward hero headline lines | Slightly smaller display type yielding three lines at desktop width | Better first-viewport hierarchy |

## Usability test plan

**Research questions**

1. Can a new visitor explain Flair’s role after five seconds, without using our words?
2. Do founder/product and engineering visitors understand that Flair completes *authorized* purchases rather than merely showing product links?
3. Can they identify what the host app supplies and what Flair returns?
4. Does the stylist example make the product/deal/experience distinction clearer or feel like a second unrelated pitch?
5. Do they find the demo path and correctly predict what “Book a demo” will do?

**Method:** moderated remote think-aloud sessions, 25–30 minutes. Recruit 5–8 U.S. consumer AI founders/product leads and 5–8 engineering leads involved in a consumer app. Prefer teams with real shopping-intent moments; include at least a few who have tried links or affiliate products. Do not show the strategy documents before the test. Ask participants to share their screen on desktop or phone; test both devices across the sample. Compensation, consent, and recording rules should be set before recruitment.

**Tasks and success criteria**

| Task | Prompt | Success | Target time |
| --- | --- | --- | --- |
| First impression | View the first screen for five seconds, then describe what Flair does | Says it enables shopping inside consumer AI apps, not just product search | 1 min |
| Understand purchase | Use the coach demo to explain what happens between recommendation and order | Identifies approval/rule, buying, merchant confirmation | 3 min |
| Explain partner role | Point to what your app would provide and what it would receive | Names relevant context and order/status result | 2 min |
| Evaluate fit | Find one example that resembles your product; say what would need adaptation | Uses relevant use case without assuming every category is live | 3 min |
| Find integration | Show where an engineer would begin evaluating implementation | Finds Developers section in one action | 2 min |
| Book conversation | Start the demo booking path and state what you expect next | Reaches demo destination and recognizes current prototype limitation | 2 min |
| Trust check | Identify one claim that needs proof before your team would integrate | Names a concrete concern: coverage, route, payments, permission, returns, economics | 3 min |

**Metrics:** task success (independent/assisted/failed), first-click path, time on task, wrong assumption count, SEQ after purchase and integration tasks (1–7), and one overall confidence rating (1–7). Record verbatim interpretations of “shopping capability,” “authorized purchase,” and “Book a demo.” SUS is optional only after the booking route and deeper developer page are functional; it may add little to a short marketing page test.

**Facilitation guide:** “We’re testing the website, not you. Please say what you expect each element to do and what feels unclear. I’ll stay quiet unless you get stuck.” Show the first screen for five seconds, then hide it briefly for the first-impression answer. For each task, read the prompt verbatim; do not teach Flair terminology. Probe with “What makes you think that?” and “What would you expect to happen next?” Close with “What would you need to see before booking a demo or piloting this?” Ask permission separately for any recording.

**Observation sheet:** participant role, product category, device, task, first click, outcome, time, hesitation point, mistaken inference, quote, severity, and suggested copy/UI change. Note whether they were shown a prototype disclaimer and whether it altered trust.

**Analysis:** group observations by visitor question (what, does it buy, integration, fit, trust, demo). Prioritize defects that create a false product belief or block the demo path; then tackle repeated hesitation, then aesthetic preferences. Change one major variable at a time and retest comprehension with a few new participants. Compare the three behavioral concepts from `FLAIR_DESIGN_AND_MOTION_SPEC.md` using the same task prompts and visual fidelity.

**Pilot checklist:** booking prototype is clearly marked; screen-share works; mobile viewport is readable; facilitator does not cue the answer; every task has a reachable target; recording consent is obtained; capture template is ready; one pilot participant completes the session within 30 minutes.

## Release gates

1. Connect the real demo calendar or lead route and test a submission end-to-end.
2. Verify current U.S. purchase routes, catalog scope, 100M products, 20K brands, and marketplace wording with dated evidence.
3. Classify every website-visible behavior as live, pilot, illustrative, or future. Keep those labels near the claim, not buried in a disclaimer.
4. Replace placeholder stylist imagery with owned/licensed assets and an exact shopping example.
5. Test keyboard, VoiceOver/NVDA, zoom to 200%, 375 px layout, reduced motion, and slow connection.
6. Run the comprehension study. Publish only when visitors can explain what Flair does, how their app participates, whether an order is completed, and how to book a conversation.
