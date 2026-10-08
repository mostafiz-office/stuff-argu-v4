# Add Marek’s three verified LinkedIn recommendations to the alternating covers

## Confirmed source mapping
- `image-4.png` is the LinkedIn recommendations screenshot and the wording source.
- `image-5.png` is Cristian Stancalău.
- `image-6.png` is Jakub Szubarga.
- `image-7.png` is Adam Lewkowicz.
- Alim Ul Karim’s visible recommendation will not be used.

## Cover distribution
- Keep one Slide 1 position that alternates between Cover V1 and Cover V3 on reload.
- Put two compact recommendations on one cover and the third on the alternate cover.
- Use each recommender’s uploaded portrait, real name, role from the screenshot, and a short exact excerpt.
- Link every recommendation card to Marek’s LinkedIn recommendations page.

## Selected excerpts and emphasis
- Cristian: use the passage about leading the code-review team through troubled times and keeping daily work calm; emphasize the leadership/result phrase only.
- Jakub: use the passage describing Marek as excellent across developer, architect, speaker, scrum master, and team-leader roles; emphasize the strongest reliability phrase only.
- Adam: use “Marek is a high level professional, qualified and well organised person” and “Marek is a kind of person you can rely on”; emphasize the reliability phrase only.
- Preserve the source meaning and wording; use ellipses only where text is shortened.

## Implementation
1. Store the three uploaded portraits through the project’s asset flow.
2. Add typed recommendation data and assign the 2+1 sets to the two cover wrappers.
3. Replace the current generic cards with smaller recommender cards that support one restrained amber highlight.
4. Remove the incorrect Marek avatar/name treatment from recommendation cards while keeping Marek’s main cover portrait unchanged.
5. Update the Slide 1 specifications, structured content data, and issue record with the verified names, image mapping, excerpts, and cover distribution.

## Verification
- Confirm deterministic cover alternation over consecutive reloads.
- Confirm the two-card cover and one-card cover show the correct portraits, names, roles, and excerpts with no Alim recommendation.
- Confirm every card opens Marek’s recommendations URL.
- Check the current viewport and a desktop viewport for clipping, overlap, and readable card sizing.
- Confirm Next/arrow navigation still reaches the first problem slide.
- Confirm the preview build has no errors.
