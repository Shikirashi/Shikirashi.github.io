# Photo-session execution guide — repository-specific Codex prompts

**Status:** Tasks committed and queued. This is an operational guide, not a claim that screenshots or a gallery page already exist.

## Rules for every screenshot
- Use real game/tool rendering; no AI-generated imitation.
- Codex: make 2–3 draft candidates if a real graphical renderer is available, document scene/controls/transforms and capture commands. User chooses hero or manually supplies composition/reference. Only then reproduce/capture final.
- At least crisp native **1280×720**, preferably 1600×900/1920×1080 if UI framing holds. 16:9 where practical; no 4K goal or fake upscaling.
- 1 approved hero + 2 backups, source version, honest implementation status, relevant license/rights check.
- No huge raw video files or debug/editor overlays; screenshot-only states and tools should not alter normal gameplay.
- **Mailbox rule:** LBS, Kartikaris-Godot, RP and WBD already have active implementation tasks. Their photo tasks are queued. Before running Codex against them, ask ChatGPT to activate that repo's queued photo task once its current active task can be paused/closed. The archived/queued file alone does NOT authorize Codex to execute against a different active `.ai/TASK.md`.

## 1 — Ball Battalion / Shikirashi/lane-ball-shooter
**Manual session:** Use current Godot/Web gameplay and aim for tactically readable conveyor and defenders. Capture while a ball is visibly moving upward, keeping full UI readable and an action moment rather than victory/menu. Existing renderer previews documented in README include `./scripts/capture_p036_monochrome.sh`.

**Codex prompt — after LBS-PHOTO-001 activation:**
```text
Work ONLY in Shikirashi/lane-ball-shooter on its tracked master branch. First inspect git status and pull safely, then read AGENTS.md, .ai/PROTOCOL.md, .ai/TASK_LEDGER.md, .ai/TASK.md and the now-activated LBS-PHOTO-001 task. Capture 2-3 genuine in-engine landscape gameplay candidates: clearly visible four lanes and conveyor, shooter, one colored ball mid-flight upwards with a short localized VERTICAL motion trail, no global blur or debug overlays. Reuse/extend existing screenshot test/capture tooling, keep any new scene/state seeded and screenshot-only, and do NOT change production shooting speeds/controls, Web/Android builds, haptics, game balance or deployment. Render at native 1280x720 minimum, preferably 1600x900/1920x1080 if UI framing remains correct. If no graphical display, provide reliable launch/staging instructions rather than fake captures. Stop for my visual review before selecting the final hero. Report commands, source commit, candidate paths and rendering limits.
```

## 2 — Kartikaris legacy Unity (not found among connected source repositories)
**Manual session:** Find local old Unity project with the detailed mech and forest; inspect `ProjectSettings/ProjectVersion.txt` first. Open with matching Unity release (without upgrading original), compose mech 3/4 view, forest depth and sunlight. Screenshot through Unity Game view or isolated high-resolution capture camera; save scene and camera/FOV parameters. Newer `Kartikaris-Godot` only contains a cuboid placeholder.

**Codex prompt — only after old Unity project is located/access granted:**
```text
Kartikaris LEGACY UNITY PHOTO SESSION. First verify this folder really contains the older Unity project with detailed mech and forest; read ProjectSettings/ProjectVersion.txt and show its exact Unity version. DO NOT use Shikirashi/Kartikaris-Godot for the final screenshot; it is a different newer greybox project. Do not automatically upgrade the Unity source or overwrite original scenes. Using the old Unity scene's existing mech and forest models, prepare 2-3 portfolio framings showing the mech as the foreground focal point from a readable 3/4 view, with forests and terrain filling the background. If helpful, create an isolated screenshot-only scene or camera that does not touch production. User will manually approve/adjust framing. Save camera transform, FOV, lighting and mech placement; capture native 1280x720+ at 16:9, preferably 1600x900/1920x1080. Report exact paths and any blockers honestly. Reference handoff ticket: Shikirashi/Kartikaris-Godot/.ai/TASKS/KGD-PHOTO-001.md.
```

## 3 — Ritual Phalanx / Shikirashi/ritual-phalanx
**Manual session:** Launch `godot --path .`. Key 2 is isometric, 3 is third-person, Q braces the shield, E bashes, 5 spawns a group of harmless red pursuers; capture a clear shield/spear pose in front of a few pursuers. Current prototype has one player, not multiplayer.

**Codex prompt — after RP-PHOTO-001 activation:**
```text
Work ONLY in Shikirashi/ritual-phalanx, branch main. Follow AGENTS.md and the active mailbox RP-PHOTO-001 before any implementation. Use the existing single-player Godot 4.7.2 greybox arena, actual soldier/shield/spear, dummies and harmless red pursuers. Make opt-in stable photo staging of one braced soldier facing several approaching pursuers, with visible spear and shield, plus two alternative shots (bash and wide isometric). DO NOT portray four player characters as actual co-op, and do not implement magic/manafauna/enemy attacks or change physical combat. Supply camera transform/FOV and prop transforms so I can manually improve framing. Capture native 16:9 1280x720+ in real renderer, preferably 1600x900, or explain capture blocker and give manual steps. Stop for hero selection before announcing final. Preserve all current tests/gameplay and active task boundaries.
```

## 4 — Witch Broom Dogfighting / Shikirashi/witch-broom-dogfighting
**Manual session:** In the actual Godot prototype use the rider/broom and flight controls. Roll/bank into a readable chase, get an enemy broom in frame, RMB target, LMB cast Firebolt or Chaser. Keep targeting reticle but hide debug telemetry if unnecessary.

**Codex prompt — after WBD-PHOTO-001 activation:**
```text
Work ONLY in Shikirashi/witch-broom-dogfighting, master. Follow AGENTS.md and the activated WBD-PHOTO-001 (currently queued at .ai/queued/WBD-PHOTO-001.md). Keep default sandbox and active P050 mini-strike work intact. Use actual rider/broom primitive models, existing sky/terrain, opposing broom AI, targeting cues and live Firebolt/Chaser effects; prepare 2-3 opt-in aerial photo frames that instantly communicate witch-on-broom dogfighting (over-shoulder pursuit, banked action, projectile/lock-on). Never introduce false polished character models, alter AI/damage/projectile physics or claim finished visuals. Save camera/player/opponent transforms, chosen spell and capture frame; provide real rendered 16:9 1280x720+ candidates or manual capture commands if no graphical environment. Stop for human selection, verify existing regression when capture helper changes code.
```

## 5 — Blades in Bloom / Shikirashi/AstraventusBladesInBloom
**Manual session:** Take normal 2D combat screenshots; choose a clear duel with meaningful sword/parry/clash feedback and legible UI. Alternative: actual current NPC/exploration interaction. Keep existing balance untouched.

**Codex prompt:**
```text
Work in Shikirashi/AstraventusBladesInBloom, reading AGENTS.md, PROJECT_STATE.md and docs/portfolio/PHOTO_SESSION_TASK.md. This is a portfolio-capture-only session, not permission to modify the frozen Natural combat baseline. Find and launch the existing real 2D combat sandbox; create three original screenshots that show an interesting fight with correct sword stances/weapon visuals and readable HUD, plus an exploration/NPC alternative if appropriate. No fabricated RPG features, AI training changes or combat rebalance. Native 1280x720+ screenshots are sufficient; I will approve/replace the composition manually. Report exact launch/capture and source revision; do not alter unrelated active development.
```

## 6 — Dungeon Streamer / Shikirashi/DungeonStreamer
**Manual session:** Open the existing v21.2 HTML prototype in a browser, not the still-migrating Godot shell, unless current port is ready. Choose dungeon combat/planning with livestream chat and audience UI simultaneously visible.

**Codex prompt:**
```text
Work in Shikirashi/DungeonStreamer. Read AGENTS.md, docs/00_SCOPE_AND_PRINCIPLES.md and docs/PORTFOLIO_SCREENSHOT_TASK.md. Respect the v21.2 HTML prototype reference as authoritative and do NOT alter frozen HTML or bypass migration parity rules. Take 2-3 real browser screenshots of its existing gameplay/dungeon action alongside the streamer chat, viewer statistics and interface, with all critical UI readable. Use a real 1280x720, 1600x900 or 1920x1080 viewport as fits the layout. Do not claim the unfinished Godot port implements these screens. Let me choose the hero, and report browser commands, actual screenshot dimensions and state.
```

## 7 — Lavernus / Shikirashi/lavernus (OPTIONAL TOOL)
**Manual session:** Arrange an interesting actual visual-novel dialog nodemap with a multi-branch choice. Hide browser DevTools. Avoid exposing private source or draft story content.

**Codex prompt:**
```text
Work in Shikirashi/lavernus. Read README.md and docs/PORTFOLIO_SCREENSHOT_TASK.md, and preserve the policy that source is private while only built dist/ is published. Create or load a benign sample .leabhar narrative with several nodes and clearly branching routes and one readable choice card. Use the running app to prepare a native 1280x720+ screenshot with nodemap composition. No private story text or code disclosure. Ask for my approval before calling an image final; do not rebuild/deploy anything in this photo session.
```

## 8 — Legacy browser / published games (no connected source repos)
These should be **human-first** captures rather than Codex changes to a guessed repository.
- **HoloGacha:** if the site's hosted game loads, screenshot representative RPG/gacha gameplay.
- **Wash Your Hands:** if a legit old build is available, take an actual FPS screen with its distinctive mechanic.
- **Cocok Gambar, Happi, Jatiware, HoloYeet:** launch existing published builds and capture a representative screen; otherwise retain approved old image with an honest label.
- Site-repo assistant should organize images and metadata under `tasks/PORT-PHOTO-ASSETS.md` but **cannot conjure unavailable source code**.

## 9 — Static gallery / Shikirashi/Shikirashi.github.io
Only after human approves screenshots. **Codex prompt:**
```text
Work ONLY in Shikirashi/Shikirashi.github.io on master. Read tasks/PORT-GAL-001.md, tasks/PORT-PHOTO-ASSETS.md, index.html and assets/css/style.css. Add a clearly visible top-level Gallery navigation link and a simple responsive static gallery page/section with screenshot, title, one-to-three-sentence blurb and factual status/platform for every approved entry. All text must be visible WITHOUT hover or clicking. Preserve existing homepage filter cards, deployed Web game folders, functional APK and legacy external links; never publish private source. Do not replace missing screenshots with generated placeholders and do not claim a gallery is live until you verify GitHub Pages. Validate desktop and mobile, accessibility, alt text, image optimization and absolute/relative URLs. Stop at human visual QA with exact test evidence.
```
