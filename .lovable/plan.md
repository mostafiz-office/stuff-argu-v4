# Fix: hosted domain shows the old presentation

## What I found (verified)

- The uploaded ZIP `riseup-deck-2026-10-27.zip` is correct and current: the JS bundle inside (`index-C5jReEXL.js`) matches the latest published build exactly.
- `stuff-aug-v1.riseupasia.xyz` is **not served by your hosting**:
  - Its DNS A record points to `185.158.133.1` — Lovable's servers.
  - Lovable confirms the domain is connected to a **different (older) Lovable workspace/project**, so it serves that old build (`index-DiY9EpCF.js`, matches none of your ZIPs).
- Nameservers for `riseupasia.xyz` are at your hosting provider (`mysecurecloudhost.com`), so DNS is managed where your hosting is.

Result: the ZIP upload worked, but visitors never reach those files because the domain still points at the old Lovable project.

## Plan (you do these two steps — neither can be done from this chat)

### Step 1 — Disconnect the domain from the old Lovable project

1. Open the **old** Lovable project that owns the `stuff-aug-v1` address (the one this domain was connected to).
2. Go to **Project Settings → Project section → Domains**.
3. Find `stuff-aug-v1.riseupasia.xyz`, open its **⋯** menu, and **disconnect/remove** it.

This frees the domain so DNS can point anywhere else.

### Step 2 — Point the subdomain at your own hosting

In your hosting control panel's DNS editor (where the nameservers are — mysecurecloudhost):

1. Delete the existing **A record** for `stuff-aug-v1` → `185.158.133.1`.
2. Add a new record for `stuff-aug-v1` pointing to **your own hosting server's IP** (shown in your hosting panel, the same place you uploaded the ZIP files).
3. Wait for DNS to spread (minutes to a few hours).

## Then verify

- Open `https://stuff-aug-v1.riseupasia.xyz/` in a fresh/incognito window.
- It should show the updated deck: 18 slides, new cover recommendations, sound toggle.
- If the old version still shows at first, it is only browser cache — hard refresh (Ctrl+Shift+R).

No changes to the presentation or the ZIP are needed — the file you uploaded is already the right one.
