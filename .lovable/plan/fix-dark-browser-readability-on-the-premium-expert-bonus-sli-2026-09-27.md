# Fix dark-browser readability on the Premium Expert Bonus slide

## Verified problem

- The circled wording is **“$10K/mo Expert.”**
- Its intended appearance is near-black text on a bright amber highlight.
- The source and a forced-dark Chromium check both render the intended high-contrast styling correctly.
- The supplied Android screenshot shows the browser changing that foreground to gray, reducing contrast against the amber highlight. This points to browser-level automatic darkening rather than missing text or a slide animation problem.

## Solution

1. Mark the presentation as natively dark so mobile browsers do not apply a second automatic dark-mode conversion.
2. Add a narrowly scoped protection for highlighted amber labels, including an explicit text fill and browser color-adjust rule, while preserving the current design in normal mode.
3. Apply the protected style to **“$10K/mo Expert”** on the visible Premium Expert Bonus slide.
4. Verify the slide at desktop and portrait-mobile sizes in normal and forced-dark modes, checking the headline remains sharp and readable.
5. Update the Slide 05 specification and add an issue note documenting the mobile forced-dark contrast rule so future highlighted wording receives the same protection.

## Scope

- No wording, pricing, layout, animation, or navigation changes.
- Only browser dark-mode handling and documentation will change.
