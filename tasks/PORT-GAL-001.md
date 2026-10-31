# PORT-GAL-001 — Static recruiter-friendly Gallery tab (QUEUED; NOT IMPLEMENTED)

## Objective
Extend the **existing** GitHub Pages portfolio site (`index.html`, Bootstrap 5 and `assets/css/style.css`) with a prominent top-level **Gallery** navigation/tab. Show **one visible screenshot + a short (1–3 sentences) honest description for each project**, without hover-only details or requiring clicking through to another page. Existing Games/Web/Mobile/Desktop filters and working project/download links must remain intact.

## Scope / design
- Add `Gallery` to existing near-top navigation in a way that makes Gallery obvious, keyboard/touch accessible, and available with JavaScript disabled as far as practical. Either a native link to `gallery.html` or clear anchored section is acceptable; prefer simple static HTML and CSS over new framework.
- Gallery itself should be **plain, static, immediately readable**: image followed by project title, concise explanation, engine/platform/status, and optional small Play/Download link. No hover reveal, flip card, modal, carousel, click-to-expand or filter required to understand a project.
- Responsive 1-column mobile / 2-column tablet / 2–3-column desktop cards; consistent natural cropping/letterboxing to preserve screenshot composition; legible texts, alt text, lazy-loaded below-fold images; no animations required.
- Use only **approved real screenshots** from `tasks/PORT-PHOTO-ASSETS.md`; store optimized production assets in `assets/img/gallery/`, preferably WebP/JPEG previews plus original archival PNG if size permits. 720p screenshots are acceptable if crisp at card size; no claimed 4K upscaling.
- Priority main gallery: **Ball Battalion**, **Kartikaris (old Unity version)**, **Witch Broom Dogfighting**, **Ritual Phalanx**, **Blades in Bloom**, **Dungeon Streamer**. Include HoloGacha, Wash Your Hands and other legacy items if approved source captures are available. Lavernus may go in a non-game Tools section.
- Truthfulness: state playable vs prototype vs concept vs older legacy version; no false multiplayer/unfinished features; no pretending Kartikaris Godot screenshot is legacy Unity mech+forest. Do not publish repo source code or secrets.
- Empty/missing images: **do not fabricate placeholders and deploy as if complete**. If some captures are not approved yet, either hold gallery publication or omit those entries, keeping an explicit asset checklist. Stub layout locally only if needed for development.
- Existing site has hover-text over image tiles on index; leave those cards and filters alone except for adding Gallery navigation. No unrelated homepage redesign.

## Gates and acceptance
1. Inspect `index.html` and `assets/css/style.css`, note existing production URLs and APK/Web links; preserve those exact working URLs.
2. Produce responsive visual examples/screenshots at desktop and mobile, with actual content instantly visible; native img `alt` and text.
3. Test actual static links, image paths, no unexpected visibility due to old `.item-wrap .work-info` hover CSS, responsive overflow/keyboard focus.
4. Only publish/commit the new page once there are approved real project images and blurbs; test GitHub Pages navigation/deploy separately from source commit, with no unauthorized credential or cross-repo operations.
5. Deliver short edit guide for adding projects (`image`, title, blurb, engine/platform/status and optional URL), plus actual screenshots/tests and GitHub Pages link verification; user final visual QA before declaring complete.

**Codex activation prompt:** `In Shikirashi/Shikirashi.github.io (master), read tasks/PORT-GAL-001.md and tasks/PORT-PHOTO-ASSETS.md, inspect index.html and assets/css/style.css, then implement the static Gallery navigation/page using only human-approved project images. Preserve existing portfolio games, downloads and deployed Web assets. Report actual page checks; do not fabricate missing screenshots.`