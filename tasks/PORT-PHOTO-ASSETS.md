# PORT-PHOTO-ASSETS — Portfolio capture register and release gates (QUEUED)

Owner: ChatGPT/User for shot approvals; Codex in each source repo prepares reproducible drafts *only when that repo's active mailbox permits*. This file is the **cross-repo manifest** for `PORT-GAL-001`. No screenshots have been approved by creating this file.


## Mandatory Git-tracked screenshot review handoff — updated 1 November 2026

**The user's approved workflow has changed:** Codex must **push the screenshot images themselves** with the scoped photo-session commit so ChatGPT can inspect the genuine output via GitHub without manual file uploads. Do not leave *all* images Git-ignored. Screenshots remain **DRAFT/UNAPPROVED** until the user reviews them.

1. Keep large original renders in their existing local capture folder, ignored if appropriate. For each requested candidate, create a **small, visually faithful review copy** inside a tracked repo directory (suggest `docs/portfolio/review/`, or `docs/portfolio/review/<task-id>/` if necessary). Prefer **JPG or WebP at real 1280×720–1920×1080 resolution, quality approximately 85–92**; PNG is fine when small (especially flat-color 2D). Retain aspect ratio and actual gameplay pixels. No AI upscaling, filters, synthetic content, drawn labels, or replacements.
2. Commit/push the **2–4 chosen preview binaries plus scripts/docs** in the same repo and branch. They must appear on GitHub at normal clickable blob/raw URLs, not just an ignored local path or a Markdown filename. Do NOT commit hundreds of frames, videos, caches, game build binaries, high-resolution raw archives, or unrelated work. If repo policy or storage limits make the PNG too large, use a compressed review derivative, not git-lfs-only inaccessible images.
3. Codex's responsibility for image QA is **mechanical only**: confirm file exists, can be decoded, sensible dimensions/aspect ratio, no zero-byte/blank capture, expected filenames, clean commit, and GitHub-visible tracked path. **Do not spend agent usage studying screenshots, interpreting artistic quality, comparing composition, scoring visuals, or selecting a hero. ChatGPT and the user perform subjective image review directly from pushed files.**
4. Report source render path, pushed preview path, native/review dimensions and commit SHA. Never mark a screenshot "approved" or deploy it on the portfolio site until the user explicitly chooses it. Only publish game shots safe for a public repository (no secrets/personal data/proprietary material).
5. When adding review screenshots later, overwrite or remove obsolete **review derivatives** only after preserving the underlying local originals and recording the change; do not rewrite gameplay. Preserve existing active mailbox restrictions — a queued task does not become active merely because this handoff rule is updated.


## Updated direction — all captures STATIC and Codex-first

Codex should take the first 2–3 screenshots from authentic rendered scenes, **especially for 2D/UI-first projects**, then the user reviews and may recompose manually. **Do not require anyone to capture mid-action.** For 3D projects freeze/non-hostile-pose all figures, cameras and effects in an isolated opt-in stage; no live enemy pursuit, firing, timing or mission progression. For Ball Battalion place a frozen upward-traveling projectile in the air with a fixed vertical motion trail; it does **not** need to move for the screenshot. For Blades in Bloom and Dungeon Streamer prepare stable static gameplay/UI screens. Only picture actual assets and clearly mark prototype staging; keep normal gameplay unchanged.

## Capturing standard
- Draft -> human review/manual reference -> final genuine rendered frame. 1 approved hero + 2 backups by default, but **Kartikaris has TWO approved, visibly displayed images** and **Blades in Bloom requires at least TWO differently themed final images (overworld + swordplay), pending approval**.
- **1280×720 native is acceptable**, especially for 2D/UI; 1600×900 or 1920×1080 if feasible. 16:9 preferred, don't stretch, upscale and claim extra detail or crop away important UI.
- Screenshot from actual running game/tool, ideally 1 frame that conveys the distinctive mechanic. For 3D, save model/camera transforms and screenshot-only stage separately. For 2D/UI use real gameplay states without staging by default.
- Keep source code, unreleased proprietary art, credentials, personal data and unlicensed fan art out of the public gallery; only publish assets with appropriate rights.
- Fill actual approval/date and approved image file below before PORT-GAL-001 is deployed. Store web-optimized assets under `assets/img/gallery/` with useful alt text; **never fabricate missing images**.

## Game hero shots (approval per project noted below)

| Priority | Display title | Source repo / external source | Screenshot concept and draft status | Proposed final filename |
| --- | --- | --- | --- | --- |
| P0 | Ball Battalion (formerly Lane Ball Shooter) | `Shikirashi/lane-ball-shooter` — `.ai/TASKS/LBS-PHOTO-001.md` | Static non-hostile landscape battle tableau: frozen colored projectile mid-ascent with fixed vertical trail, chain + lanes readable; Codex first screenshot pending | `ball-battalion_hero_01.png` |
| P0 | Kartikaris (legacy Unity) | `Shikirashi/Kartikaris-Unity` — `Docs/PortfolioPhotoSession.md` | **TWO FINAL IMAGES APPROVED:** `kartikaris_alt2_folded_02.png` (folded/travel) AND `kartikaris_alt2_unfolded_30deg.png` (deployed cannon at 30° above horizontal). User explicitly chose the new 30° image to REPLACE the old fully vertical `kartikaris_alt2_unfolded_02.png` as the deployed gallery shot. Native Unity 1600×900; Codex logged measured 30.048° at commit `a88c528`. Two visible inline images with captions; no slider or hover. Raw files remain local and Git-ignored, NOT YET published. | `kartikaris_alt2_folded_02.png` + `kartikaris_alt2_unfolded_30deg.png` |
| P0 | Witch Broom Dogfighting | `Shikirashi/witch-broom-dogfighting` — `.ai/queued/WBD-PHOTO-001.md` | Static non-hostile aerial formation with posed broom/rider/opposing brooms and optional frozen cast effect; Codex first capture pending | `witch-broom-dogfighting_hero_01.png` |
| P1 | Ritual Phalanx | `Shikirashi/ritual-phalanx` — `.ai/TASKS/RP-PHOTO-001.md` | Stationary single-player soldier with shield/spear vs posed non-hostile red figures, no motion/AI (no false multiplayer claim); Codex first capture pending | `ritual-phalanx_hero_01.png` |
| P1 | Blades in Bloom (BiB) | `Shikirashi/AstraventusBladesInBloom` — `docs/portfolio/PHOTO_SESSION_TASK.md` | **SECOND PASS PUSHED TO GITHUB; human approval pending:** four real 1920×1080 review PNGs committed in `Shikirashi/AstraventusBladesInBloom` at `9d15756`, under `docs/portfolio/review/bib_photo_001/`. ChatGPT visually inspected all four. Recommended: `candidate_overworld_market_01.png` (exploration) + `candidate_frozen_combat_01.png` (swordplay); optional `candidate_rpg_dialogue_01.png`; do NOT use normal sandbox reference or previously rejected infographic images as final. User has NOT explicitly approved this selection. Both categories required in visible gallery. | `bib_overworld_hero.png` + `bib_swordplay_hero.png` (approval pending) |
| P1 | Dungeon Streamer | `Shikirashi/DungeonStreamer` — active photo branch `portfolio/ds-photo-001`, `docs/PORTFOLIO_SCREENSHOT_TASK.md` | Static v21.2 HTML prototype dungeon state + livestream chat, audience metrics; 2–4 authentic browser renders and Git-tracked previews PENDING | `dungeon-streamer_hero_01.png` |

## Existing portfolio / external-only legacy captures (source repo NOT found in connected GitHub)

These are not blockers for the P0/P1 gallery. If the original game build or legitimate public page is available, user can capture its **running UI/gameplay manually** or approve existing screenshots. Codex working only in `Shikirashi.github.io` may organize/check assets but should not infer access to code.

| Project | Public source already referenced on site | Capture guide |
| --- | --- | --- |
| HoloGacha | Site's existing `assets/img/hologacha.png` and `https://shikirashi.github.io/hologacha/` | Display actual battle/gacha interface from live game; inspect if it still loads before calling it a playable demo. |
| Wash Your Hands | `assets/img/washYourHands.png`, GameJolt `https://gamejolt.com/games/washyourhandsthx/482786` | Actual FPS first-person scene with recognizable distinctive action; no claim current build available if only legacy still is. |
| Cocok Gambar | `assets/img/cocok.png`, `https://shikirashi.itch.io/cocok-gambar-web-build` | Take unmodified representative matching activity screen. |
| Jatiware | `assets/img/Jatiware.png`, `https://shikirashi.itch.io/jatiware` | Capture distinctive real interaction, genre/status to be confirmed by human. |
| Happi | `assets/img/Happi-logo.png`, `https://shikirashi.itch.io/happi` | Replace logo with actual game screenshot only if source or installable build is available. |
| HoloYeet | `assets/img/holoyeet.png`, `https://shikirashi.itch.io/holoyeet` | Real gameplay/interaction state, not just title art. |

## Concise gallery copy — DRAFT only, human to verify
- **Ball Battalion** — A lane-defense puzzle game combining a moving color-ball conveyor with tactical defenders. I developed its gameplay, controls and UI for Android and Web, iterating through playtesting and automated regression checks. **Status:** playable prototype.
- **Kartikaris** — A 3D mech/terrain prototype exploring vehicle presentation and forest environments. **Status:** older Unity prototype (distinct from the newer Godot terrain experiment). Verify precise mech/gameplay claims before publishing.
- **Witch Broom Dogfighting** — An arcade aerial-combat prototype where a witch steers a broom like a fighter while aiming spells independently. It explores flight momentum, targeting and combat against other broom riders. **Status:** prototype.
- **Ritual Phalanx** — A single-player combat-systems prototype for a proposed cooperative tactical action game, testing physical spear and shield interactions, positioning and knockback. **Status:** prototype, co-op not yet implemented.
- **Blades in Bloom** — A systems-driven 2D RPG prototype with side-view sword combat and reactive AI, built to support quests, dialogue and a larger simulated world. **Status:** in development.
- **Dungeon Streamer** — A dungeon adventure prototype built around a live-streaming fantasy, with exploration/combat alongside streamer audience management. **Status:** existing HTML prototype, Godot migration underway.

## Approval checklist
- [ ] Codex provided first real rendered screenshots, or reported graphics access blocker with manual static composition instructions
- [ ] Project screenshot actually exists and is identifiable as game/tool (no fake composites)
- [ ] Human approved hero composition
- [ ] Image is sharp on mobile and desktop gallery (720p genuinely acceptable)
- [ ] Alt text and concise factual project blurb approved
- [ ] Source version/status/platform described accurately
- [ ] Source code/assets rights checked; no private material in public site
- [ ] Only then mark corresponding gallery entry ready and run `tasks/PORT-GAL-001.md`

## Note on portfolio site status
The existing `index.html` uses image hover overlays for existing portfolio cards. `PORT-GAL-001` must add a separate obvious **static Gallery** without breaking old cards, Web build folders, APK links or public deployments.

**Update:** Kartikaris has genuine source-game screenshots reviewed and two approved by the user; the binary captures are not yet committed to or published on the portfolio website. Other projects remain pending.
