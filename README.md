# Sri Siva Book Store — Single-Page Website

A one-page, fully responsive catalog built with **HTML5, CSS3, Bootstrap 5 and
vanilla JavaScript** only. No frameworks, no backend, no database, no cart or
payments. The whole site lives in `index.html`; the menu scrolls to sections on
the same page, and each product opens in a **Bootstrap modal** — no page changes.

## Files
```
/
├── index.html        the entire website
├── css/style.css     all styles
├── js/script.js      product data + all interactivity
└── images/
    └── products/     <-- put your REAL product photos here
```

## IMPORTANT: this site uses your real product photos
There are **no illustrations or placeholders pretending to be products**. Each
product expects a real photo file. Until you add one, that product shows a plain
"Add product photo" slot so you can see exactly what's missing.

### How to add your photos
1. Take/collect a photo of each product (square works best, ~800–1200px).
2. Save it into `images/products/` using the **exact file name** listed for that
   product in `js/script.js` (the `img` field), e.g. `pens.jpg`, `notebook.jpg`,
   `school-bag.jpg`, `balloons.jpg`, and so on.
3. Refresh the page — the photo appears immediately, in the grid, the gallery and
   the popup. No code change needed.

If you prefer different file names or formats (`.webp`, `.png`), just update the
`img` value for that product in `js/script.js` to match.

## Editing products
All products are defined once, in the `PRODUCTS` array in `js/script.js`. Copy an
entry and change the fields:
```js
{ id:32, name:"New Item", category:"stationery", price:99,
  desc:"Short description shown in the popup.", img:"images/products/new-item.jpg" }
```
`category` is one of: `stationery`, `school`, `art`, `educational`, `toys`, `party`.

## WhatsApp number
Set once in the `STORE` object at the top of `js/script.js` (`phone` = country
code, no `+` or spaces, e.g. `919150620572`). Update the `tel:` links in the HTML
if the number changes.

## Google Map
In the Contact section of `index.html`, replace the `.map-placeholder` block with
your Google Maps embed (Maps → Share → "Embed a map" → paste the `<iframe>` with
`class="map-frame"`).

## Run / deploy
Open `index.html` in a browser, or upload the folder to any static host
(GitHub Pages, Netlify, Hostinger, cPanel). No build step.
