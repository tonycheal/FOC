# Apollonius PDT — FOC Talk Reference
*Last updated: April 2026*

---

## Talk Structure (target ~7 minutes)

### 1. Who Am I? (~1.5 min)
- Maths teacher → Mechanical Drawing A-level → five physical tools (2H pencil, HB pencil, ruler, compass, adjustable set square)
- "The light pencil is the construction. The dark pencil is the final drawing."
- Compilers, disassemblers, debuggers — I build tools
- First ARM machine → Euclid 3D (DAG, SDK-first, accidental commercial hit)
  - A&B Computing cover Oct 1989, Dec 1989 ("IMPRESSED?")
  - Tesco vouchers. Christmas bundle. Museum piece.
- Brought in to rewrite a traditional parametric CAD tool
- Mathematical scrutiny → disgust → incompleteness discovered
  - Couldn't do all cases of 'circle tangent to three things' despite huge number of buttons
- Threw away the button model entirely
- Named after Apollonius of Perga, ~200BC

### 2. The Question (~30 sec)
- FreeCad screenshot — the wince
- "Five tools. Complete. Composable. Why does CAD software need hundreds of buttons?"
- Show Vitruvian Man manual cover — no comment needed

### 3. The Modern Version (~2 min)
- Live demo at apollonius.vercel.app
- "No, it's not tldraw. It doesn't use the tldraw SDK."
- "But it IS the first infinite canvas with actually infinite lines." → zoom out, line keeps going
- Build up tools: line at angle, parallel, perpendicular, bisector, points, circles
- Apollonius' 10th problem → Wikipedia diagram → "The original couldn't do all of them. This one can."
- Two circles standard demo:
  - Place two circles, different sizes
  - Tangent lines — show label "L2 = Line tangent to C2 and C1"
  - Add dimension
  - Hit F → construction lines vanish
  - "The light pencil and the dark pencil. Same workflow, different century."
- MiniMap reveal:
  - "Inspired by Observable notebooks"
  - "Click anything in the dependency list, highlights on canvas. The drawing IS the program."
- Engine demo (if ready):
  - PLPD explanation: "P3 on L1 at distance from P1 = circle centred on P1 intersecting L1"
  - Time drives the angle → piston goes up and down

### 4. The Original (~1.5 min)
- Switch to archi.medes.live (upload the zip)
- "Here's the original. Running right now. In your browser."
- A540 / A3000, ARM2 @ 8MHz, 2MB RAM, RISC OS 3.11
- Show the PilotBoat file — "Files from the 90s. Customers up North who really pushed the system."
- "640x512 pixels. I need to go out and buy some extra pixels."
- Show TimeEng file — hover over the driving line
  - "L3: thro P2 at TIME*10 {112}°"
  - "The animation was already there in 1994. The emulator just can't run the clock."
  - "The modern version can."
- The retro UI — beautifully sparse toolbar, Apollonius portrait

### 5. The Question (~30 sec)
- "So. Retro RISC OS skin... or modern tldraw-ish UI?"
- *[audience answers — probably immediately and unanimously]*
- *[flip the switch live]*

### 6. Links (~30 sec)
- QR codes:
  - apollonius.design (or apollonius.vercel.app)
  - tonycheal.com
  - YouTube ROUGOL talk (1h41m — "you have been warned")
- "It's in beta. Go play. Come find me afterwards — there's one more thing I didn't show."

---

## Key Lines (don't forget these)

- "Five tools. Complete. Composable."
- "The first infinite canvas with actually infinite lines." → zoom out
- "No, it's not tldraw." (get this in early)
- "The light pencil and the dark pencil. Same workflow, different century."
- "The drawing IS the program."
- "640x512. I need to go out and buy some extra pixels."
- "L3: thro P2 at TIME*10 — the animation was already there in 1994."
- "Come find me afterwards — there's one more thing I didn't show." (LLM endpoint via HMR)

---

## Pub / After Talk Demo (keep back)
- LLM endpoint via HMR — Claude generating geometry via construction language
- 8 solutions to circle tangent to three circles (flip flags / gear mesh)
- Negative radius / inside-out circles
- The full CORDIC/TOE story (that's a whole other evening)

---

## Images Array

```javascript
const images = [
    // WHO AM I?
    "AceComputing1997",         // Wayback Machine tony.html - product list with original sprites
    "ABCOct1989",               // A&B Computing Oct 1989 cover - Euclid on the cover
    "ABCDec1989",               // A&B Computing Dec 1989 cover - IMPRESSED?
    "https://en.wikipedia.org/wiki/Acorn_Archimedes",   // Wikipedia - Euclid in Jet Set bundle
    "https://www.computinghistory.org.uk/det/34394/Euclid/",  // Museum entry

    // THE QUESTION
    "FreeCad",                  // hundreds of buttons - the wince slide
    "DrawingTools",             // 📸 NEEDED: 2H pencil, HB pencil, ruler, compass, set square

    // THE PHILOSOPHY
    "VitruvianManual",          // Apollonius PDT manual cover - Vitruvian Man
    "RiscOSScreenshot",         // original RISC OS sparse toolbar
    "https://en.wikipedia.org/wiki/Problem_of_Apollonius",
    "https://en.wikipedia.org/wiki/Apollonius_of_Perga",

    // DEMO (live — apollonius.vercel.app in separate tab)

    // THE ORIGINAL
    "ArchimedesEmulator",       // archi.medes.live with Apollonius loaded
    "ArchimedesBoat",           // PilotBoat - ziggy-zaggy curves, beautifully retro
    "ArchimedesEngine",         // TimeEng - with hover showing "L3: thro P2 at TIME*10 {112}°"

    // OBSERVABLE MINIMAP INSPIRATION
    "https://observablehq.com/@enkimute/ganja-js",

    // SIDE BY SIDE (if captured)
    "SideBySide",               // 📸 NEEDED: original emulator + modern version side by side

    // THE QUESTION SLIDE
    "RetroOrModern",            // 📸 NEEDED: simple text slide - "Retro or Modern?" with switch

    // LINKS
    "Links",                    // 📸 NEEDED: QR codes for apollonius.design, tonycheal.com, YouTube
]
```

---

## Bug Priority List

### Must Fix (demo breaks without these)
- 🔴 Arc drawing glitch on initial draw — clears on recalc but must not glitch at all
- 🔴 Dimensions — linear + circular stable
- 🔴 Time-driven angle animation for engine (`TIME*10` equivalent)

### Should Fix (demo is weaker without)
- 🟡 Boat file compatibility — enough to show, not necessarily perfect
- 🟡 MiniMap stable and readable on projector

### Stretch
- 🟢 Engine with attached images (crank + piston head from tldraw)
- 🟢 Full old file compatibility (25 errors in boat)

---

## Non-Code Tasks

### Urgent
- 📐 Spare bedroom expedition:
  - Find adjustable set square → DrawingTools photo
  - Find software copies → museum donation for Gareth (April 14th meetup)
  - Photograph manuals (Vitruvian Man cover)
- 📸 DrawingTools photo: 2H pencil, HB pencil, ruler, compass, set square (flat lay, good light)
- 🎯 Talk rehearsal — 7 minute discipline (it will want to be 45 minutes)

### Soon
- 🌐 tonycheal.com — add content (Apollonius page, links, museum entries)
- 📦 Museum donation conversation with Gareth — Apollonius PDT, Oak PDT, Geometer
- 🔲 QR codes — once URLs stable
- 📧 Contact sculptor in Aus/NZ when apollonius.design beta opens

### Later
- 💰 Transfer tonycheal.com from NetNames to Cloudflare Registrar (~£30/year saving)
- 💰 Transfer apollonius.design from NetNames/GoDaddy to Cloudflare
- 🔄 Move apollonius.design DNS from Vercel to Cloudflare (consolidation)

---

## Infrastructure Status

| Thing | Status | Notes |
|-------|--------|-------|
| apollonius.vercel.app | ✅ Live | Main demo URL |
| apollonius.design | ✅ Live | Points to Vercel |
| tonycheal.com | ✅ Live | Cloudflare, GitHub auto-deploy |
| archi.medes.live | ✅ Working | Upload zip from archive |
| GitHub: tonycheal/tonycheal.com | ✅ Public | Auto-deploys to Cloudflare |

---

## Key People / Network

- **Lu Wilson (TodePond)** — FOC organiser, committed to demo at next session ✅
- **Steve Ruiz (tldraw)** — has seen Apollonius over shoulder at tldraw offices
- **Max Drake (tldraw)** — met at FOC April 2026
- **Orion Reed (Ink & Switch)** — met at FOC April 2026
- **Sunil Pai (Cloudflare/PartyKit)** — FOC regular, knows Tony
- **Maggie Appleton (GitHub Next)** — original FOC organiser, sporadic attendance
- **Phil Driscoll** — Dial Solutions, still in touch (prison van / brass bands)
- **Gareth** — Centre for Computing History board connections
- **Peter Aldworth** — ARM, patent oversight, April 14th meetup
- **Vorn Hancock** — Cambridge Consultants, April 14th meetup
- **Sculptor in Aus/NZ** — MB-sized Apollonius files, needs recontacting for beta

---

## Historical Assets Available

- A&B Computing Oct 1989 cover (Euclid on cover) ✅ scanned
- A&B Computing Dec 1989 cover (IMPRESSED?) ✅ scanned
- Wayback Machine: acecomp.demon.co.uk/tony.html ✅ rescued
- Apollonius PDT manual (Vitruvian Man cover) ✅ scanned
- Apollonius Geometer manual ✅
- Original RISC OS software — runs on archi.medes.live ✅
- PilotBoat file from 90s ✅ loading in both versions
- TimeEng file from 90s ✅ loading in emulator
- ROUGOL YouTube talk (1h41m) ✅ https://www.youtube.com/watch?v=yIbIEDpxTqY
- Centre for Computing History entries: Euclid, ArcLight, Mogul, Splice, Tween, Rephorm ✅
- Dial House photos (Phil Driscoll) ✅
- Physical copies in spare bedroom (for museum donation)
- ~13 hand-written Ace Computing era notebooks

---

## The Thesis (for talk / website)

> "A pencil, a rubber, a ruler, a compass, and an adjustable set square.
> Five tools. Complete. Composable.
> So why does CAD software need hundreds of buttons?"

> "Not objects. Relationships. Define the dependencies, 
> and correctness follows automatically."

> "The same architecture — Euclid in 1989, Apollonius in 1994, 
> the modern version in 2026. The DAG was always right.
> Figma figured this out and became a $20 billion company.
> We were doing it on 1MB of RAM and Tesco vouchers."

---

## Slide Viewer (Vue-based)

Based on existing Clifford talk viewer. Images array above drives it.
- Local images: filename.png
- URLs: loaded as iframes
- Navigation: Previous/Next buttons + URL parameter (?1, ?2 etc.)
- Hosted at: tonycheal.com/apollonius/ (eventually)

