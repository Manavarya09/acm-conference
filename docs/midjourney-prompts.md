# Midjourney prompts for the site artwork

Palette to keep everything consistent:
deep plum `#2a1645`, royal purple `#6b3fa0`, lavender `#b79ae0`, pale lilac `#f1eafb`, warm terracotta `#c47a60`, saffron `#f0b35a`.

General rules:
- Add `--no text, letters, words, logos, watermark` to every prompt. Midjourney's text comes out garbled, so all words stay in the HTML.
- Don't generate people. Speakers and organisers get their real headshots.
- Do 4–6 rerolls of each prompt, then upscale the best one. Export as PNG, then convert to WebP for the site.
- Put the files in `public/art/` under the file names below.

---

## 1. Hero banner: `public/art/hero.webp` (most important)
Sits behind the title, date and Register button. The left side has to stay dark and quiet so the white text reads.

```
wide editorial hero artwork for a women in computing conference, deep plum and royal purple night gradient, delicate glowing line drawings of circuit traces, binary constellations, a soft neural network mesh and orbital rings drifting across the right side, faint terracotta and saffron light bleeding in from the lower right corner, generous empty dark space on the left for headline text, elegant, premium, calm, subtle film grain, flat vector-meets-light-painting style --ar 21:9 --style raw --v 7 --s 250 --no text, letters, words, logos, watermark, people, faces
```

Alternative with more of a Dubai feel:
```
abstract night panorama of a futuristic desert city dissolving into purple data streams and glowing circuit lines, deep plum sky, lavender light trails, terracotta dune silhouettes at the bottom edge, dark negative space on the left third, cinematic, minimal, premium conference key art --ar 21:9 --style raw --v 7 --s 300 --no text, letters, words, logos, watermark, people
```

## 2. Venue band: `public/art/venue.webp`
A short, wide strip above "BITS Pilani, Dubai Campus". It replaces the current mosaic.

```
stained glass mosaic of the Dubai skyline with the Burj Khalifa at the centre, geometric triangular glass tiles in royal purple, lavender, pale lilac, terracotta and saffron, dark plum lead lines, Islamic geometric pattern subtly woven into the sky, flat front-on view, bold and graphic --ar 6:1 --style raw --v 7 --s 200 --no text, letters, words, logos, watermark, people
```

## 3. WiCode 27 background: `public/art/wicode.webp`
Full-width background for the hackathon section, behind white text.

```
bold playful hackathon background, vivid violet field covered with soft white organic blob shapes, floating curly braces, angle brackets and tiny pixel sparkles, energetic but uncluttered, flat graphic design, Figma Config poster style, high contrast --ar 16:9 --style raw --v 7 --s 200 --no text, letters, words, logos, watermark, people
```

## 4. Scholar Cohort art: `public/art/scholars.webp`
Fills the "2026 cohort to be announced" slot until the cohort is picked.

```
warm gradient abstract of ascending paper airplanes and open books turning into glowing stars, saffron to terracotta to royal purple gradient, soft grain, optimistic, editorial illustration, minimal --ar 3:1 --style raw --v 7 --s 250 --no text, letters, words, logos, watermark, people
```

## 5. About section texture: `public/art/about-texture.webp`
A very faint background behind the About grid. Keep it nearly white.

```
extremely subtle seamless background texture, pale lilac paper with faint fine-line geometric grid, tiny scattered circuit node dots, almost white, low contrast, clean --ar 16:9 --tile --style raw --v 7 --s 50 --no text, letters, words, logos, watermark
```

## 6. Closing band tiles: `public/art/tile-1.webp` … `tile-5.webp`
The five coloured squares at the bottom of the page. Run the prompt once per colour.

```
flat square graphic tile, solid [COLOUR] background with a repeating pattern of small black organic blob shapes, Bauhaus playful, risograph texture, perfectly flat --ar 1:1 --tile --style raw --v 7 --s 100 --no text, letters, words, logos, watermark
```
Colours to use for [COLOUR]: `saffron #f0b35a`, `lavender #b79ae0`, `terracotta #c47a60`, `pale lilac #f1eafb`, `royal purple #6b3fa0`.

## 7. Speaker card backdrop (optional): `public/art/speaker-bg.webp`
A backdrop behind the cut-out headshots, so every photo matches no matter how it was taken.

```
soft studio backdrop, smooth lavender to pale lilac gradient with a gentle light glow at the top, faint paper grain, empty, minimal --ar 1:1 --style raw --v 7 --s 50 --no text, letters, words, logos, watermark, people
```

## 8. Social share image: `public/og.webp`
The preview that shows when the link is shared on WhatsApp or LinkedIn. Generate the art here and add the title text yourself in Canva or Figma.

```
conference key art, deep plum background, a large glowing lavender orbital ring made of circuit lines on the right, small saffron and terracotta sparks, clean empty space on the left for a title, premium, minimal --ar 1.91:1 --style raw --v 7 --s 250 --no text, letters, words, logos, watermark, people
```
