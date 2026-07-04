# ஸ்ரீ சிவா புத்தக நிலையம் — Sri Siva Book Store

Single-page, Tamil-first (English toggle) website. HTML5 + Bootstrap 5 (CDN) +
vanilla JS. No backend. Host anywhere static (GitHub Pages, Netlify, any host).

## What's in this build
- **122 products total** = 52 with real photos + 70 APSARA/Nataraj catalogue items.
- Category hierarchy filters: Writing Instruments, Art & Colours, Paper & Notebooks,
  Files & Filing, Fasteners & Adhesives, Cutting & Measuring, Kits & Bags,
  Fancy & Party, Toys & Games, Project Items, Other — plus **Popular** and search.
- **Load more** pagination (24 at a time) so the page stays short.
- Cart + "Enquire on WhatsApp", product modal, Brands (dynamic/expandable), Services.

## Product types in the data (js/script.js → PRODUCTS)
Three helpers:
- `P(id,cat,brand,"file",{ta},{en},featured)` — product with a real photo at `images/products/file.jpg`.
- `Z(id,cat,brand,"file","Tamil","English",featured)` — same, shorthand for the ZIP photos.
- `A(id,cat,brand,"#color","Name","MRP")` — **catalogue tile** (no photo yet): shows a
  branded tile with the name + `MRP ₹…`. To give it a real photo later, save
  `images/products/x.jpg` and change `A(...)` to `Z(id,cat,brand,"x","…","…")`.

## APSARA / Nataraj catalogue (70 items)
Auto-extracted from APSARA-PRODUCT-CATALOGUE_2024.pdf (names + category + MRP).
Shown as branded tiles until you add photos. **Please review** — a few names may be
slightly off and the MRP is the catalogue's **box/pack** price (e.g. ₹1000 = box of
100), not a single-item price. Edit names/prices in the `A(...)` lines, or tell me
your selling prices and I'll update them.

## ZIP photos (22 items)
Added with real photos (`zip01.jpg`…`zip22.jpg`). Names read via OCR where the photo
had printed text (Fountain Pen, Hi-Dark Leads, Ink Cartridges, Folders/Files, Clay sets,
Balloon Pump, 9V Battery Clip Kit, Project Pump Kit, Glitter Kit…). A few could not be
read and use **provisional names** to confirm/rename (ids 200,201,204,205,218–221):
Assorted Stationery, Student Pen, Gel Pen, Beaded Bracelets. Rename in their `Z(...)` lines.

## NOT included yet: DOMS catalogue
doms-catalogue_copy.pdf is an **image-only PDF** (106 scanned pages, no text). It needs
OCR/vision to read, which needs a working image viewer (mine failed this session).
Send a DOMS product/price list as text/Excel, or ask me to OCR it next turn.

## Add a product (quick)
Add one line to `PRODUCTS` in `js/script.js`:
```js
Z(400,"writing","DOMS","my-photo","தமிழ் பெயர்","English name", true),
```
Save a square photo at `images/products/my-photo.jpg`. Categories: writing, art, paper,
filing, fasteners, cutting, kits, fancy, toys, project, other.

## Google Maps
Edit the `MAP` object at the top of `js/script.js` with your exact share link.

## Prices
Real-photo products show "Ask on WhatsApp"; catalogue items show MRP. Change the price
model any time — tell me your own selling prices and I'll switch the display.
