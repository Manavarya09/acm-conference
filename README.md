# ACM-W Conference Website

A Next.js conference site for an ACM-W event, structured after the Monash ACM-W
"From Research to Reality" event page. **All copy is lorem ipsum placeholder text.**

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Static-generated — no backend, no database

## Pages

| Route | Contents |
|---|---|
| `/` | Hero, fact strip, about, agenda preview, featured speakers, partners, venue teaser, CTA |
| `/agenda` | Full programme |
| `/speakers` | Speakers & panelists, conveners, partners |
| `/venue` | Address, travel info, FAQ accordion |
| `/register` | Ticket tiers and what's included (placeholder CTA) |

## Replacing the placeholder content

Every string on the site lives in **`content/event.ts`**. Edit that one file —
event details, agenda, speakers, conveners, venue, FAQ, tickets — and no JSX
needs to change.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```
