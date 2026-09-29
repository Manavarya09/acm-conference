# ACM Conference Website

A Next.js clone of the layout used by the Monash ACM-W "From Research to Reality"
event page. **All copy is lorem ipsum placeholder text** — no real event data.

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

Photos are CSS placeholders (`.photo-placeholder` in `app/globals.css`). To use
real headshots, add an image field to `Person` / `Scholar` and swap the
placeholder elements in `app/page.tsx` for `<Image>`.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```
