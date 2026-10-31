# PORT-PHOTO-ASSETS — Portfolio capture register and release gates (QUEUED)

Owner: ChatGPT/User for shot approvals; Codex in each source repo prepares reproducible drafts *only when that repo's active mailbox permits*. This file is the **cross-repo manifest** for `PORT-GAL-001`. No screenshots have been approved by creating this file.

## Capturing standard
- Draft -> human review/manual reference -> final genuine rendered frame. 1 approved hero + 2 backups per included project.
- **1280×720 native is acceptable**, especially for 2D/UI; 1600×900 or 1920×1080 if feasible. 16:9 preferred, don't stretch, upscale and claim extra detail or crop away important UI.
- Screenshot from actual running game/tool, ideally 1 frame that conveys the distinctive mechanic. For 3D, save model/camera transforms and screenshot-only stage separately. For 2D/UI use real gameplay states without staging by default.
- Keep source code, unreleased proprietary art, credentials, personal data and unlicensed fan art out of the public gallery; only publish assets with appropriate rights.
- Fill actual approval/date and approved image file below before PORT-GAL-001 is deployed. Store web-optimized assets under `assets/img/gallery/` with useful alt text; **never fabricate missing images**.

## Game hero shots (all PENDING human approval)

| Priority | Display title | Source repo / external source | Screenshot concept and draft status | Proposed final filename |
| --- | --- | --- | --- | --- |
| P0 | Ball Battalion (formerly Lane Ball Shooter) | `Shikirashi/lane-ball-shooter` — `.ai/TASKS/LBS-PHOTO-001.md` | Live landscape battle, colored ball in mid-ascent with narrow vertical trail, chain + lanes readable; capture not run | `ball-battalion_hero_01.png` |
| P0 | Kartikaris (legacy Unity) | **OLDER UNITY SOURCE MISSING FROM CONNECTED REPOS**; newer `Shikirashi/Kartikaris-Godot` has `.ai/TASKS/KGD-PHOTO-001.md` planning/handoff | **Actual Unity mech** in detailed forest at 3/4 angle; blocked on finding older Unity project | `kartikaris_hero_01.png` |
| P0 | Witch Broom Dogfighting | `Shikirashi/witch-broom-dogfighting` — `.ai/queued/WBD-PHOTO-001.md` | Aerial pursuit with actual broom/rider/hostile, midflight cast and legible HUD; not captured | `witch-broom-dogfighting_hero_01.png` |
| P1 | Ritual Phalanx | `Shikirashi/ritual-phalanx` — `.ai/TASKS/RP-PHOTO-001.md` | Shield/spear in single-player arena, harmless red pursuers (no false four-player claim); not captured | `ritual-phalanx_hero_01.png` |
| P1 | Blades in Bloom (BiB) | `Shikirashi/AstraventusBladesInBloom` — `docs/portfolio/PHOTO_SESSION_TASK.md` | Real 2D combat duel/parry or approved gameplay UI; not captured | `blades-in-bloom_hero_01.png` |
| P1 | Dungeon Streamer | `Shikirashi/DungeonStreamer` — `docs/PORTFOLIO_SCREENSHOT_TASK.md` | Actual v21.2 HTML prototype combat/dungeon + livestream chat, audience metrics; not captured | `dungeon-streamer_hero_01.png` |
| Optional tool | Lavernus | `Shikirashi/lavernus` — `docs/PORTFOLIO_SCREENSHOT_TASK.md` | Real VN nodemap with branching choice route; only in Tools section if approved | `lavernus_hero_01.png` |

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
- **Lavernus** — A visual-novel dialogue planner for constructing linked conversation nodes and branching choice routes. **Status:** browser-based tool.

## Approval checklist
- [ ] Project screenshot actually exists and is identifiable as game/tool (no fake composites)
- [ ] Human approved hero composition
- [ ] Image is sharp on mobile and desktop gallery (720p genuinely acceptable)
- [ ] Alt text and concise factual project blurb approved
- [ ] Source version/status/platform described accurately
- [ ] Source code/assets rights checked; no private material in public site
- [ ] Only then mark corresponding gallery entry ready and run `tasks/PORT-GAL-001.md`

## Note on portfolio site status
The existing `index.html` uses image hover overlays for existing portfolio cards. `PORT-GAL-001` must add a separate obvious **static Gallery** without breaking old cards, Web build folders, APK links or public deployments.

**No artwork or screenshot was generated, copied, photographed, or published as part of planning tasks.**
