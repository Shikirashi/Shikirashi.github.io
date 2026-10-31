# Photo-session execution guide — repository-specific Codex prompts

**Status:** Tasks committed and queued. This is an operational guide, not a claim that screenshots or a gallery page already exist.

## Rules for every screenshot
- Use real game/tool rendering; no AI-generated imitation.
- Codex must take the FIRST 2–3 real rendered screenshots when graphical access is available, including for 2D/UI-first games. Stage everything as a stable, non-hostile, non-timed scene before capturing. User can then approve/reframe without chasing live motion.
- At least crisp native **1280×720**, preferably 1600×900/1920×1080 if UI framing holds. 16:9 where practical; no 4K goal or fake upscaling.
- 1 approved hero + 2 backups, source version, honest implementation status, relevant license/rights check.
- No huge raw video files or debug/editor overlays; screenshot-only states and tools should not alter normal gameplay. Keep projectiles, enemies, characters, effects and timing frozen in the optional photo fixture while rendering remains available.
- **Mailbox rule:** LBS, RP and WBD already have active implementation tasks. Their photo tasks remain queued and require activation by ChatGPT. Kartikaris-Unity follows its separate AGENTS.md / Docs/PROJECT_STATE.md workflow; use its task under Docs/. Do not start queued tasks just because this guide exists.

## 1 — Ball Battalion / Shikirashi/lane-ball-shooter
**Manual session:** No mid-flight timing. Use a completely stationary 2D photo fixture: conveyor, shooter, colored ascending projectile already positioned half way up with a fixed vertical trail, defenders and enemies all frozen/non-hostile. You can inspect and crop it at leisure.

**Codex prompt — only after LBS-PHOTO-001 activation:**
```text
In Shikirashi/lane-ball-shooter (master), follow AGENTS.md and the active mailbox LBS-PHOTO-001, not the old active P040. Make a reproducible opt-in STATIC portfolio shot using the actual 2D Godot 4.7.2 gameplay assets: conveyor and lanes, fixed player shooter, one colored projectile held half way up with a stationary localized vertical streak, and stationary non-hostile defenders/enemies. NO live shooting, enemy AI, timers, moving balls or frame timing. Make the game/photo preview indefinitely stable so I can arrange proportions. Codex should render and save 2–3 draft 16:9 screenshots FIRST using current real graphical capture tooling; 1280x720 is adequate, 1600x900 optional. If unable to render, give manual setup instructions and mark screenshot blocked. Do not alter normal gameplay, balance, Web/Android release or production visuals. Save exact positions and images for human approval.
```

## 2 — Kartikaris legacy Unity / Shikirashi/Kartikaris-Unity
**Confirmed source:** `Shikirashi/Kartikaris-Unity` on `main`, Unity **6000.3.9f1**, `Assets/Scenes/Kartikaris_MapTest.unity`, mech model, existing procedural forest. Task: `Docs/PortfolioPhotoSession.md`. Do not use the Godot greybox.

**Manual session:** After Codex captures draft compositions, take as long as needed to position the mech, external camera and forest scene. The photo scene must have all hostile AI/movement, projectiles and gameplay time progression disabled. Preserve the original cockpit and gameplay scenes.

**Codex prompt:**
```text
In Shikirashi/Kartikaris-Unity on main, read AGENTS.md, Docs/PROJECT_STATE.md and Docs/PortfolioPhotoSession.md. Use ONLY Unity 6000.3.9f1 and the authentic detailed Kartikaris mech plus generated 25,000-tree forest. Create an isolated opt-in STATIC, NON-HOSTILE external camera photo setup; freeze mech and enemy movement and stop artillery, player actions and all automatic state changes. Pose a readable mech at a 3/4 angle amid real forest and landscape. Take 2–3 real Unity rendered screenshots FIRST. I will choose/adjust a composition manually with no time pressure. Capture at native 1280x720 or higher if practical; avoid upscaling. Preserve main scene, project assets and original controls; follow project-state/report rules for code changes. Never upgrade editor or claim screenshots were made if no graphics access.
```

## 3 — Ritual Phalanx / Shikirashi/ritual-phalanx
**Manual session:** Frame a braced shield/spear soldier among **stationary harmless red figures**, with no pursuers moving toward you. Existing prototype is single-player; do not imply multiplayer has been implemented.

**Codex prompt — after RP-PHOTO-001 activation:**
```text
In Shikirashi/ritual-phalanx on main, follow AGENTS.md and active RP-PHOTO-001. Prepare a STATIC opt-in photo fixture with the real Godot primitive soldier, shield, spear, courtyard, and 2–4 red pursuers posed as non-hostile motionless figures. Disable all AI/movement/bash physics and progression for the fixture but keep rendering and camera controllable. Codex must take 2–3 screenshots FIRST: braced confrontation, fixed shield bash pose, wide isometric composition. No need to time attacks or flee enemies. Record camera/actor/pose transforms for my later manual adjustments. 1280x720 native acceptable, prefer 1600x900 only if convenient. Preserve existing combat and all normal scene behavior; don't claim implemented multiplayer, attacks or advanced creature art.
```

## 4 — Witch Broom Dogfighting / Shikirashi/witch-broom-dogfighting
**Manual session:** Pose broom, rider, stationary opponents and a static projectile/trail midair; the flight itself does not progress. Orbit the camera freely without live combat, timers or hostility.

**Codex prompt — after WBD-PHOTO-001 activation:**
```text
In Shikirashi/witch-broom-dogfighting (master), read AGENTS.md and the activated WBD-PHOTO-001. Stage a NON-HOSTILE STATIC flying tableau with existing primitive rider/broom, stationary opposing brooms, horizon/terrain, fixed lock-on indicator and a frozen Firebolt/Chaser trail if supported. All hostile AI, aircraft motion, gameplay timers, firing and damage must be disabled for this opt-in fixture only. Codex should FIRST take 2–3 genuine Godot-rendered drafts; I can then orbit/adjust all figures for as long as needed and reshoot. No need for real-time chase or timed spell casting. Keep normal flight, networking, physics, mission P050 and gameplay unchanged. 1280x720 native is enough; record composition and truthfully report graphical limitations.
```

## 5 — Blades in Bloom / Shikirashi/AstraventusBladesInBloom
**Manual session:** Use a stable 2D combat or dialogue screen. For combat, freeze figures in a recognizable parry/clash pose and disable hostility and time progression in a capture-only fixture.

**Codex prompt:**
```text
In Shikirashi/AstraventusBladesInBloom, read AGENTS.md, PROJECT_STATE.md and docs/portfolio/PHOTO_SESSION_TASK.md. Take FIRST 2–3 real 2D Godot rendered screenshots. Use static non-hostile staging: freeze combatants and fixed clash FX in a credible composition, or select a permanently stable real dialogue/exploration screen. No timed attack input or chasing AI. Do not modify frozen combat baseline, AI training, player balance or Web logic. Native 1280x720 is fine. Let me review and reframe in the actual project; report precisely how shots were generated.
```

## 6 — Dungeon Streamer / Shikirashi/DungeonStreamer
**Manual session:** Compose an authentic v21.2 HTML prototype screen with dungeon controls, livestream chat and audience statistics in a stable state. No action timing or active hostile combat is necessary.

**Codex prompt:**
```text
In Shikirashi/DungeonStreamer, follow AGENTS.md and docs/PORTFOLIO_SCREENSHOT_TASK.md. Open the real frozen v21.2 HTML prototype in a browser with a stable non-hostile stage or paused display that shows dungeon interaction plus livestream UI. Codex takes 2–3 genuine screenshot candidates FIRST before asking me for manual review. Avoid advancing timers, fighting enemies, triggering timed transitions or changing the authoritative HTML reference. 1280x720 native or 1600x900 if readable. Do not misrepresent the unfinished Godot migration. Save screenshot dimensions, source and reproducibility steps.
```



## 7 — Legacy browser / published games (no connected source repos)
These are legacy games without verified connected source repositories. Prefer Codex's **first screenshot** from genuine running public builds if browser automation is available, otherwise capture manually. Use stable menu/gameplay UI states and never ask the user to time action frames.
- **HoloGacha:** if the site's hosted game loads, screenshot representative RPG/gacha gameplay.
- **Wash Your Hands:** if a legit old build is available, take an actual FPS screen with its distinctive mechanic.
- **Cocok Gambar, Happi, Jatiware, HoloYeet:** launch existing published builds and capture a representative screen; otherwise retain approved old image with an honest label.
- Site-repo assistant should organize images and metadata under `tasks/PORT-PHOTO-ASSETS.md` but **cannot conjure unavailable source code**.

## 8 — Static gallery / Shikirashi/Shikirashi.github.io
Only after human approves screenshots. **Codex prompt:**
```text
Work ONLY in Shikirashi/Shikirashi.github.io on master. Read tasks/PORT-GAL-001.md, tasks/PORT-PHOTO-ASSETS.md, index.html and assets/css/style.css. Lavernus is a PRIVATE personal tool and must NOT appear in the portfolio gallery. Add a clearly visible top-level Gallery navigation link and a simple responsive static gallery page/section with screenshot, title, one-to-three-sentence blurb and factual status/platform for every approved entry. All text must be visible WITHOUT hover or clicking. Preserve existing homepage filter cards, deployed Web game folders, functional APK and legacy external links; never publish private source. Do not replace missing screenshots with generated placeholders and do not claim a gallery is live until you verify GitHub Pages. Validate desktop and mobile, accessibility, alt text, image optimization and absolute/relative URLs. Stop at human visual QA with exact test evidence.
```
