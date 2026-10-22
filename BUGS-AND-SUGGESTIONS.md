# Bugs & Suggestions — Contact Form + Shareable Deep Links

**Date:** 2026-10-23
**Scope:** Work done on the `#contact` transmission form and `#work=` / `#materia=` deep-link routing, plus issues found along the way.
**Status legend:** ✅ fixed · ⚠️ open · 💡 suggestion

---

## 1. Bugs found and fixed

| # | Issue | Impact | Fix |
|---|-------|--------|-----|
| 1 | **Edge closes `<dialog>` on Esc without firing `close`** (Chromium quirk, likely tied to `closedby`) | Esc closed the modal visually, but `#work=<id>` stayed in the URL, `activeWorkModalId` stayed populated, and Copy Link kept targeting the old project. State desync. | Intercept `cancel`, call `preventDefault()`, close explicitly, and add a `MutationObserver` on the dialog's `open` attribute as a safety net. Cleanup is idempotent. |
| 2 | **Section anchors hid under the fixed nav** *(pre-existing)* | Clicking "Works" / "Contact" landed with the heading ~64px under the header. | `section[id] { scroll-margin-top: 5rem; }` |
| 3 | **Stale `assessHistoryPushed` flag** could make Close call `history.back()` and leave the site | Caught during logic review; triggered after a Back-then-deep-link sequence. | Capture and reset the flag unconditionally in the close handler. |
| 4 | **`decodeURIComponent` throws on malformed hashes** (e.g. `#work=%E0%A4%A`) | A mangled shared link would throw inside the routing handler and abort the rest of it. | Wrapped in `try/catch`; falls through with the raw fragment. |
| 5 | **`location.origin` is `"null"` under `file://`** | Deep links copied from a locally-opened file became `null#work=...`. | Build the URL by trimming the hash off `location.href`. |
| 6 | **Clipboard API unavailable on non-secure contexts / older browsers** | Copy Link would silently do nothing. | `textarea` + `execCommand('copy')` fallback, then `window.prompt` as a last resort. |
| 7 | **Mixed line endings** — PowerShell `Add-Content` appended a CRLF to an LF file | Noisy diffs; eventual whole-file rewrite on commit. | Normalized back to LF. |
| 8 | **Modal event listeners accumulated on every open (Bug A)** | Multiple clicks and copy flashes after inspecting multiple projects. | Moved to unified event delegation on `#assess-modal` inside `initRouting()`. |
| 9 | **2xx non-JSON response treated as success (Bug B)** | Captive portals / proxies returning 200 HTML could look like successful message delivery. | Strictened check to `!response.ok || result.success !== true`. |
| 10 | **Contact form request had no deadline (Bug C)** | Submissions could hang on "TRANSMITTING..." indefinitely on dropped sockets. | Wrapped in `AbortController` with a 15-second timeout and clean `mailto:` fallback. |
| 11 | **Route switch while modal was already open (Bug D)** | Switching project hash while open could trap back-navigation in a loop. | Disarmed `assessHistoryPushed` on intra-modal route transitions in `syncRoute()`. |
| 12 | **Web3Forms access key installed (Item F)** | Relay was on fallback mode awaiting owner's Web3Forms key. | Live key installed in `index.html`. Direct transmissions are now fully active. |

---

## 2. Notes & Design Choices

### E. `#materia=` cold load auto-scrolls (Design Choice) 💡
Opening a shared materia link smooth-scrolls straight to `#works` to immediately display the filtered project cards matching that skill. (Retained as intended behavior).

---

## 3. Test / tooling problems (not app bugs)

Recorded so they are not mistaken for regressions.

- **30s cooldown blocked the failure-path test** — the cooldown was working; the test submitted twice back-to-back.
- **Synthetic `KeyboardEvent('Escape')` does not trigger native dialog dismissal** — had to send a real key via CDP `Input.dispatchKeyEvent`. This is also how bug #1 surfaced.
- **`getComputedStyle` read during a CSS transition** returns the *starting* color, so the red invalid border read as amber. The value is correct once the 200ms transition settles.
- **Fresh Edge profiles auto-install bundled extensions and open promo tabs**, flooding `/json/list` with unrelated targets and eventually evicting the test page. Fixed by relaunching on a dedicated port with `--disable-extensions`.
- **Killing background processes by `CommandLine` matching** exited the shell with code 255 and left the server alive; resolved by looking up the PID via `Get-NetTCPConnection`.
- **PowerShell mangled inline `node -e`** scripts — moved all test code into `.js` files.
- **Nested repo path** (`...\IT-Portfolio-main\IT-Portfolio-main\`) made the edit tool report a relative path, briefly suggesting the wrong file had been written. Verified with `Test-Path` and byte counts.

---

## 4. Suggestions

### Before deploying

1. 💡 Paste the real Web3Forms key and send one live test message (check the spam folder).
2. 💡 Fix **A** and **B** — both are small, and B can make a lost lead look like a successful send.
3. 💡 Add the `AbortController` timeout (**C**).

### Site-wide, previously flagged and still open

4. 💡 **No OG / Twitter meta.** This matters more now: every `#work=...` link shares the same generic preview, because hash fragments never reach a server. Per-project previews would require query params, pre-rendered static project pages, or an edge function — which is also better for SEO.
5. 💡 **Tailwind CDN in production** — runtime JIT, extra request, and it blocks a strict CSP.
6. 💡 **`DEFAULT_PORTFOLIO_DATA` duplicates `portfolio-data.json`** and will drift. Single source of truth.
7. 💡 **Images hosted on external blob URLs** — a dead host breaks the portfolio.
8. 💡 **No `prefers-reduced-motion`** — heavy parallax, patrol animations and scroll effects.
9. 💡 **GitHub token in `localStorage`** (`js/editor.js`) is exfiltrable by any XSS or compromised third-party script. Self-host Tailwind / Font Awesome and add a CSP, especially now that the page posts to a third-party form endpoint.

### Nice to have

10. 💡 hCaptcha via Web3Forms if spam appears — the honeypot is cheap and the client-side cooldown is trivially bypassed.
11. 💡 A visible "link copied" fallback for browsers where clipboard writes fail silently (currently only `prompt`).
12. 💡 A small Playwright suite committed to the repo so the routing / Esc / back-button matrix is regression-tested locally, not just in ad-hoc scripts.
13. 💡 Check placeholder contrast (0.7 opacity) against WCAG AA on the YAKUZA theme.

---

## 5. Verification summary

Run headless against `http://127.0.0.1:8123` over the Chrome DevTools Protocol:

| Area | Result |
|------|--------|
| Routing (cold deep link, card open, Back, Forward, Esc, backdrop, close button, reopen, bogus link) | 12/12 |
| Contact form (validation, success path, failure path, mailto content, double-submit) | all checks pass (one initial miss was the cooldown working as intended) |
| Styling (3 themes, desktop + 390px mobile, error state) | 18/19; the single miss was the transition-timing artifact described above |
| Syntax | `node --check js/app.js` clean |

---

*Note: this file lives at the repo root, so it will be publicly served if committed and deployed (e.g. `/BUGS-AND-SUGGESTIONS.md`). Keep it local, move it outside the deploy root, or add it to `.gitignore` if that is not desired.*
