# ACM Conference Website

A Next.js clone of the layout used by the Monash ACM-W "From Research to Reality"
event page. **All copy is lorem ipsum placeholder text** — no real event data.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Roboto / Roboto Condensed via `next/font`
- Single static page, no backend

## Page structure

Mirrors the reference page top to bottom:

1. Dark utility bar → white masthead → grey faculty band
2. Hero banner (dark gradient over placeholder artwork), title, tag row
3. Date / time / price strip
4. Intro copy (lead paragraph bold)
5. Agenda table — Time | Programme, detail lines italic
6. Audience link band
7. Speakers and Panelists — circular photo left, linked name, role
8. Event Conveners — same list treatment
9. Partner, Location, Share this event
10. Footer

## Replacing the placeholder content

Everything lives in **`content/event.ts`** — org, faculty, event details, intro
copy, agenda, speakers, conveners, partner, venue. Edit that one file; no
component changes needed.

Photos are CSS placeholders (`.photo-placeholder` in `app/globals.css`). To use
real headshots, add an image field to `Person` and swap `ProfilePhoto` in
`app/page.tsx` for an `<Image>`.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```
