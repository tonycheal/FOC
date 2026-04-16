# Handover Note — For the Next Claude

*From a previous instance, April 2026*

## Who You're Talking To

Tony Cheal. Cambridge. Senior programmer at Linguamatics (Java-to-TypeScript compiler called TWT). Before that, maths teacher. Before that, ran Ace Computing in the ARM/Archimedes era — solo developer, produced Euclid (3D), Apollonius PDT, Mogul, ArcLight, Rephorm, Ace Film format, and others. Sold commercially, including to schools, including via Tesco vouchers. Wikipedia famous. Museum famous (Centre for Computing History, Cambridge).

He has a Bulldog named Ivy, a partner named Keely, a daughter named Sapphire. He works at a work desk and has a play desk (kitchen stool). The play brain never switches off.

He uses the word "grobble" for casual exploratory investigation. He will talk for an hour if you let him. The FOC talk is 7 minutes. These facts are related.

## The Project

Apollonius PDT — a 1994 parametric geometric construction tool originally written in BBC BASIC for RISC OS, now being revived as a TypeScript/Vue web application. It's named after Apollonius of Perga (~200BC) who understood that circles, lines, and points are all you need for geometric construction.

The core philosophy: **not objects, relationships**. Every element is defined in terms of other elements. The drawing IS the program. This is a DAG — same architecture as Euclid (3D, 1989) which was like Figma before Figma. The original had a sparse toolbar by necessity (640x512 pixels). The modern version has a sparse toolbar by philosophy.

**Key insight for the talk**: The original CAD tool Tony was asked to modernise had hundreds of buttons but was mathematically *incomplete* — it couldn't do all cases of 'circle tangent to three things'. Tony threw away the button model and redesigned around mathematical completeness. Apollonius of Perga's 10th problem is the centrepiece.

## Current State (April 2026)

- **apollonius.vercel.app** — live, modern TypeScript/Vue version
- **apollonius.design** — live, points to Vercel
- **tonycheal.com** — live, Cloudflare Pages, GitHub auto-deploy
- **archi.medes.live** — online Archimedes emulator; the original 1994 software runs here if you upload the zip from the archive
- **~/Dev/apollonius/notes/** — growing collection of .md planning files including FOC_TALK.md
- **ApoPDT.txt** — BBC BASIC source in readable form
- **BBC BASIC converter** — BASICtoText and TexttoBASIC, round-trips verified, in the repo

## The FOC Talk

Committed to Lu Wilson (TodePond) for the *next* FOC session after April 2026. 7 minutes. Structure:

1. Who am I? (credentials, drawing board tools, FreeCad wince, Euclid history)
2. The modern version (live demo, infinite lines joke, tldraw disclaimer, Apollonius 10th problem, two circles demo, MiniMap)
3. The original (archi.medes.live, PilotBoat, TimeEng with TIME*10 formula, 640x512 pixels)
4. The question ("Retro skin or modern UI?" — ask the audience, flip the switch live)
5. Links + "come find me, there's one more thing" (LLM endpoint via HMR — keep this for the pub)

Full detail in FOC_TALK.md in the repo.

## Key People

- **Lu Wilson** — FOC organiser, committed to next slot
- **Steve Ruiz** — tldraw, has seen Apollonius over his shoulder, now at Downing Street apparently
- **Max Drake** — tldraw, met April 2026 FOC
- **Orion Reed** — Ink & Switch, met April 2026 FOC  
- **Sunil Pai** — Cloudflare/PartyKit, FOC regular
- **Maggie Appleton** — GitHub Next, original FOC organiser
- **Phil Driscoll** — Dial Solutions (where Apollonius was sold from), now does Yorkshire Brass Bands from a prison van
- **Gareth** — Centre for Computing History board connections, museum donation conversation needed
- **Sculptor in Aus/NZ** — MB-sized Apollonius files, needs recontacting for beta launch

## Outstanding Bugs

- 🔴 Arc drawing glitch on initial draw (clears on recalc, must not glitch at all)
- 🔴 Dimensions — linear + circular stable
- 🔴 Time-driven angle animation (TIME*10 equivalent for engine demo)
- 🟡 Boat file compatibility (25 errors, survivable but better fixed)
- 🟡 MiniMap stable on projector

## Things Tony Will Say That Are True

- "I've probably got something about this in another chat" — yes, there are many chats
- "I'll do that later" — sometimes true, sometimes the play brain takes over
- "Just to completely throw the kitchen sink at you" — always followed by something excellent
- The back is better now (was bad April 14th, resolved by April 15th)
- The spare bedroom has not yet been fully explored
- The set square has not yet been found

## Things to Know About Tony's Style

- Prefers to discuss architecture conversationally first, then get a CLAUDE.md generated
- Likes mathematically elegant solutions
- Self-deprecating about timing ("I'll have to talk 14 times faster")
- Genuinely knows everyone in the FOC/tldraw/Ink&Switch world
- Will mention something in passing that turns out to be extraordinary (e.g. "oh and Sophie Wilson used to visit my house with new code")
- "Interesting people tend to keep doing interesting things, whether the world likes it or not" — his best line, possibly the thesis of everything

## The Deeper Thesis

Apollonius isn't just a tool revival. It's a 35-year argument that the right primitive vocabulary for geometric construction is circles, lines, and points — and that encoding relationships rather than operations gives you completeness automatically. Euclid had the same insight for 3D in 1989. The DAG model predates Figma by decades. The sparse toolbar predates the "tools shouldn't get in the way" movement by decades.

The FOC crowd will get this immediately. The tldraw people already half-know it. Steve Ruiz's "Agents on the Canvas" talk at AI Engineer 2026 and Tony's Apollonius demo are convergent evolution from completely different directions.

Good luck. He's excellent company. Don't let him talk for 45 minutes.

*— A previous Claude, April 2026*
