# Replace the cover testimonials with Marek’s real recommendations

## Confirmed scope
- Keep Slide 1 as two alternating cover designs; do not add two slides to the deck sequence.
- Use three unique recommendations about Marek in total: two on one cover and one on the alternate cover.
- Show the real recommender’s name and role on each card, not Marek’s identity.
- Use short, exact excerpts only. Highlight only the strongest phrase in each excerpt.
- Do not use Alimon Karim’s recommendations.
- Keep each card compact and link it to Marek’s LinkedIn recommendations page.

## Current finding
The two cover designs currently share the same two generic cards. Both cards incorrectly display Marek as the recommender. Public search confirms Marek’s profile and role, but has not exposed the recommendation text or recommender identities, so no quote will be invented or attributed without a verifiable public source.

## Implementation
1. Retrieve the exact recommendation text and recommender details that LinkedIn exposes publicly from Marek’s supplied recommendations page.
2. Create one shared recommendation data set, assigning two recommendations to Cover V1 and one to Cover V3.
3. Update the shared cover layout to render each cover’s assigned cards with the actual recommender identity, concise excerpt, restrained highlighting, and Marek’s recommendations link.
4. Remove the existing generic/misattributed quote cards. If fewer than three exact recommendations are publicly accessible, use only those verified entries and leave no fabricated placeholder.
5. Update both Slide 1 specifications, the structured content data, and a Slide 1 issue note so the documented recommendation sources and 2+1 distribution match the presentation.

## Verification
- Reload repeatedly and confirm the two covers still alternate deterministically.
- Confirm Cover V1 shows two unique verified cards and Cover V3 shows one, with no quote duplicated.
- Open every card and confirm it reaches Marek’s recommendations page.
- Check the cover at the current presentation viewport and a desktop viewport for clipping or oversized cards.
- Verify arrow-key/Next navigation still moves from the cover to the first problem slide.
- Confirm the project build completes without errors.
