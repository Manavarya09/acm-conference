# ACM Conference Website

Website for the Women in Computing Conference at BITS Pilani, Dubai Campus,
organised by the ACM-W Dubai and ACM Dubai Professional Chapters. Speaker,
organiser and chapter details come from the organisers; details still pending
read "to be announced".

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Roboto Condensed, Geist, Geist Mono and Instrument Serif via `next/font`
- Single static page, no backend

## Page structure

The banner and footer keep the original look. Every section in between is
recreated from a different conference site. All photos of people are large
squares, never circles.

1. Black strip and blue utility bar (original), then a sticky header: logo, conference section links, one Register button
2. Banner: title, tags, date / time / venue / price, Register now and View schedule
3. About: big statement, monospace details, intro in two columns (GitHub Universe)
4. Speakers: Industry Panel and Academic Panel as sideways-scrolling photo cards (Grace Hopper Celebration)
5. Schedule: large heading, ruled rows, monospace details, session-type tags (Next.js Conf)
6. WiCode 27: blob-pattern field, black panel linking out to the WiCode 27 website (Figma Config)
7. Scholar Cohort: gradient quote (OCWiC), then tinted scholar cards (Smashing Conference)
8. Organising Committee and Partner: "Thanks to our…" tiers (SIGGRAPH)
9. Venue: mosaic and Dubai skyline band, address, map (ACM CHI)
10. FAQ: giant wordmark, bordered expandable rows (GitHub Universe)
11. Get involved: headline and three bordered cards, then share links (Demuxed)
12. Closing band: wordmark on black and colour tiles (Figma Config)
13. Audience link band and footer (original)

## Replacing the placeholder content

Everything lives in **`content/event.ts`** — org, faculty, event details, intro
copy, schedule, industry and academic panels, committee, partner, venue,
WiCode 27, scholar cohort, FAQ and get-involved cards. Edit that one file; no
component changes needed.

Artwork is from Midjourney (prompts in `docs/midjourney-prompts.md`) and lives
in `public/art/`; chapter logos are in `public/logos/`. Headshots are still
placeholders (`.photo-placeholder` in `app/globals.css`, a lavender backdrop).

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```
