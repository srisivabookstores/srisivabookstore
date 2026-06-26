/* ==========================================================================
   Sri Siva Book Store — script.js  (single-page edition)
   - One page; nav links scroll to sections
   - Product details open in a Bootstrap modal (no page redirect)
   - Designed for REAL product photographs in images/products/
   - Search + category filter, gallery, scrollspy, WhatsApp enquiries
   ========================================================================== */

/* ---------- 1. Store config ---------- */
const STORE = {
  name: "Sri Siva Book Store",
  phone: "919150620572",          // WhatsApp: country code, no + or spaces
  phoneDisplay: "+91 9150620572",
  location: "Uthangarai, Tamil Nadu"
};

/* ---------- 2. Categories ---------- */
const CATEGORIES = [
  { key:"stationery",  name:"Stationery",        icon:"✏️", blurb:"Pens, pencils, notebooks & more" },
  { key:"school",      name:"School Supplies",   icon:"🎒", blurb:"Accessories & student essentials" },
  { key:"art",         name:"Art & Craft",       icon:"🎨", blurb:"Colours, sketch pens & craft kits" },
  { key:"educational", name:"Educational Items", icon:"🧩", blurb:"Learning aids & puzzle cubes" },
  { key:"toys",        name:"Toys & Gifts",      icon:"🚗", blurb:"Fun toys & gift items" },
  { key:"party",       name:"Party Supplies",    icon:"🎈", blurb:"Balloons, decor & return gifts" },
  { key:"fancy",       name:"Fancy Items",       icon:"✨", blurb:"Ribbons, hair clips, earrings & fashion accessories" }
];

/* ---------- 3. Products ----------
   IMPORTANT: `img` points to a REAL photo in images/products/.
   Add your photo with the matching file name and it appears instantly.
   Until then the card shows a labelled "Add product photo" slot. */
const PRODUCTS = [
  // Stationery
  { id:1,  name:"Ball Point Pens (Pack of 10)", category:"stationery", price:50,  desc:"Smooth-writing blue & black pens for everyday school and office use.", img:"images/products/pens.jpg", featured:true },
  { id:2,  name:"HB Pencils (Pack of 12)",       category:"stationery", price:40,  desc:"Dark, break-resistant lead — great for writing and sketching.", img:"images/products/pencils.jpg" },
  { id:3,  name:"Ruled Notebook (200 pages)",    category:"stationery", price:45,  desc:"Quality single-line notebook with smooth paper for daily class work.", img:"images/products/notebook.jpg", featured:true },
  { id:4,  name:"Dust-Free Erasers (Set of 4)",  category:"stationery", price:20,  desc:"Clean, smudge-free erasing that doesn't tear the page.", img:"images/products/erasers.jpg" },
  { id:5,  name:"Sharpeners with Box",           category:"stationery", price:15,  desc:"Sharp metal blade with an attached shaving collector box.", img:"images/products/sharpener.jpg" },
  { id:6,  name:"Geometry Box",                  category:"stationery", price:120, desc:"Complete set: compass, divider, ruler, protractor and set squares.", img:"images/products/geometry-box.jpg", featured:true },
  { id:7,  name:"Scientific Calculator",         category:"stationery", price:450, desc:"Multi-function calculator for school and college mathematics.", img:"images/products/calculator.jpg" },

  // School Supplies
  { id:8,  name:"School Bag",                    category:"school", price:650, desc:"Durable padded backpack with multiple compartments for books.", img:"images/products/school-bag.jpg", featured:true },
  { id:9,  name:"Insulated Lunch Box",           category:"school", price:220, desc:"Leak-proof lunch box that keeps meals warm through the school day.", img:"images/products/lunch-box.jpg" },
  { id:10, name:"Water Bottle (750ml)",          category:"school", price:180, desc:"BPA-free sipper bottle, easy for kids to carry and clean.", img:"images/products/water-bottle.jpg" },
  { id:11, name:"Pencil Pouch",                  category:"school", price:90,  desc:"Roomy zip pouch that holds pens, pencils and small instruments.", img:"images/products/pencil-pouch.jpg" },
  { id:12, name:"Exam Writing Board",            category:"school", price:60,  desc:"Lightweight clip board — a steady writing surface for exams.", img:"images/products/exam-board.jpg" },

  // Art & Craft
  { id:13, name:"Wax Crayons (24 Shades)",       category:"art", price:70,  desc:"Bright, smooth-glide crayons in 24 shades for young artists.", img:"images/products/crayons.jpg", featured:true },
  { id:14, name:"Sketch Pens (12 Colours)",      category:"art", price:85,  desc:"Vivid, washable sketch pens with sturdy tips.", img:"images/products/sketch-pens.jpg" },
  { id:15, name:"Water Colour Set",              category:"art", price:110, desc:"12-shade cake set with a brush — ideal for school painting.", img:"images/products/water-colours.jpg" },
  { id:16, name:"Craft Paper Sheets",            category:"art", price:55,  desc:"Assorted colourful sheets for craft and project work.", img:"images/products/craft-paper.jpg" },
  { id:17, name:"Decorative Craft Kit",          category:"art", price:140, desc:"Scissors, glue and decorative bits for creative DIY projects.", img:"images/products/craft-kit.jpg" },
  { id:18, name:"Plastic Play Balls (Pack)",     category:"art", price:95,  desc:"Soft, colourful balls for play and craft activities.", img:"images/products/plastic-balls.jpg" },

  // Educational Items
  { id:19, name:"Alphabet & Number Magnets",     category:"educational", price:130, desc:"Colourful fridge magnets to learn letters and counting.", img:"images/products/magnets.jpg", featured:true },
  { id:20, name:"Learning Flash Cards",          category:"educational", price:90,  desc:"Picture cards that build early reading and vocabulary.", img:"images/products/flash-cards.jpg" },
  { id:21, name:"Wooden Educational Toy",        category:"educational", price:240, desc:"Shape-stacking wooden toy that develops motor skills.", img:"images/products/edu-toy.jpg" },
  { id:22, name:"Puzzle Cube (3x3)",             category:"educational", price:75,  desc:"Classic speed cube that sharpens logic and focus.", img:"images/products/puzzle-cube.jpg", featured:true },

  // Toys & Gifts
  { id:23, name:"Fidget Spinner",                category:"toys", price:60,  desc:"Smooth-spin, metal-bearing fidget toy.", img:"images/products/fidget-spinner.jpg" },
  { id:24, name:"Alphabet Cube Toy Set",         category:"toys", price:110, desc:"Stackable lettered cubes for playful early learning.", img:"images/products/cube-toy.jpg" },
  { id:25, name:"Die-Cast Metal Car",            category:"toys", price:150, desc:"Sturdy collectible toy car with free-rolling wheels.", img:"images/products/metal-car.jpg", featured:true },
  { id:26, name:"Aeroplane Toy",                 category:"toys", price:130, desc:"Lightweight model aeroplane that's fun for all ages.", img:"images/products/aeroplane-toy.jpg" },
  { id:27, name:"Assorted Gift Items",           category:"toys", price:200, desc:"A curated selection of small gifts for every occasion.", img:"images/products/gift-items.jpg" },

  // Party Supplies
  { id:28, name:"Party Balloons (Pack of 50)",   category:"party", price:60,  desc:"Assorted colour balloons to brighten any celebration.", img:"images/products/balloons.jpg", featured:true },
  { id:29, name:"Birthday Decoration Kit",       category:"party", price:250, desc:"Banner, foil balloons and streamers in one handy combo.", img:"images/products/birthday-decor.jpg" },
  { id:30, name:"Return Gift Combo (Set of 12)", category:"party", price:360, desc:"Assorted small gifts, ready for party giveaways.", img:"images/products/return-gifts.jpg" },
  { id:31, name:"Paper Party Caps (Pack of 10)", category:"party", price:50,  desc:"Colourful cone caps for birthday parties.", img:"images/products/party-caps.jpg" },

  // Fancy Items
  { id:32, name:"Colorful Ribbons Set (Pack of 10)", category:"fancy", price:60,  desc:"Assorted satin and grosgrain ribbons in multiple colours and widths.", img:"images/products/ribbons.jpg", featured:true },
  { id:33, name:"Hair Clips Collection",             category:"fancy", price:80,  desc:"Pretty metal and pearl-studded hair clips in various designs and colours.", img:"images/products/hair-clips.jpg" },
  { id:34, name:"Stud Earrings Set (Pack of 6)",     category:"fancy", price:90,  desc:"Fashionable stainless steel earring studs with gemstone designs.", img:"images/products/earrings.jpg" },
  { id:35, name:"Hair Bands & Scrunchies Pack",      category:"fancy", price:70,  desc:"Elastic hair bands and velvet scrunchies in trendy colours.", img:"images/products/hair-bands.jpg", featured:true },
  { id:36, name:"Fashion Bracelets & Bangles",       category:"fancy", price:110, desc:"Stylish beaded and metallic bracelets suitable for daily wear.", img:"images/products/bracelets.jpg" }
];

/* ---------- 4. Helpers ---------- */
function categoryName(key){ const c = CATEGORIES.find(x=>x.key===key); return c?c.name:key; }
function getProduct(id){ return PRODUCTS.find(p=>p.id===Number(id)); }

function whatsappLink(productName){
  const msg = "Hello Sri Siva Book Store,\n\nI am interested in:\n\n" + productName + "\n\nPlease share price and availability.";
  return "https://wa.me/" + STORE.phone + "?text=" + encodeURIComponent(msg);
}
function whatsappGeneral(text){
  const msg = text || "Hello Sri Siva Book Store, I would like to know more about your products.";
  return "https://wa.me/" + STORE.phone + "?text=" + encodeURIComponent(msg);
}

// Called by an <img> when its real photo file is missing — reveals the labelled slot.
function markNoPhoto(img){ img.closest(".product-thumb, .gallery-item, .pm-photo")?.classList.add("no-photo"); }

const PENDING_HTML = '<div class="photo-pending"><i class="bi bi-camera"></i><span>Add product photo</span></div>';

/* ---------- 5. Product card ---------- */
function productCardHTML(p){
  return (
    '<div class="col-6 col-md-4 col-lg-3">' +
      '<article class="product-card" role="button" tabindex="0" data-id="' + p.id + '" aria-label="View details for ' + p.name + '">' +
        '<div class="product-thumb">' +
          '<span class="product-badge">' + categoryName(p.category) + '</span>' +
          '<span class="product-zoom"><i class="bi bi-arrows-fullscreen"></i></span>' +
          '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy" onerror="markNoPhoto(this)">' +
          PENDING_HTML +
        '</div>' +
        '<div class="product-body">' +
          '<h3 class="product-name">' + p.name + '</h3>' +
          '<p class="product-price">₹' + p.price + ' <small>onwards</small></p>' +
        '</div>' +
      '</article>' +
    '</div>'
  );
}

/* ---------- 6. Render: categories, featured, all products, gallery ---------- */
function renderCategoryCards(){
  const grid = document.getElementById("categoryGrid");
  grid.innerHTML = CATEGORIES.map(c =>
    '<div class="col-6 col-md-4 col-lg-2">' +
      '<div class="cat-card" data-cat="' + c.key + '" role="button" tabindex="0">' +
        '<div class="cat-icon">' + c.icon + '</div>' +
        '<h3>' + c.name + '</h3><p>' + c.blurb + '</p>' +
      '</div>' +
    '</div>'
  ).join("");

  // Clicking a category scrolls to products (offset for the sticky nav) and filters
  grid.querySelectorAll(".cat-card").forEach(el => {
    const go = () => {
      ProductsSection.setCategory(el.dataset.cat);
      const t = document.getElementById("products");
      const y = t.getBoundingClientRect().top + window.scrollY - navHeight() + 1;
      window.scrollTo({ top: Math.max(0, y), behavior:"smooth" });
    };
    el.addEventListener("click", go);
    el.addEventListener("keydown", e => { if(e.key==="Enter"||e.key===" "){ e.preventDefault(); go(); } });
  });
}

/* ---------- 7. Products section: search + filter ---------- */
const ProductsSection = {
  activeCat:"all",
  query:"",

  init(){
    const pillWrap = document.getElementById("filterPills");
    const cats = [{key:"all",name:"All"}].concat(CATEGORIES);
    pillWrap.innerHTML = cats.map(c =>
      '<button class="filter-pill" data-cat="' + c.key + '">' + (c.name||categoryName(c.key)) + '</button>'
    ).join("");
    pillWrap.querySelectorAll(".filter-pill").forEach(btn =>
      btn.addEventListener("click", () => this.setCategory(btn.dataset.cat)));

    const search = document.getElementById("searchInput");
    search.addEventListener("input", () => { this.query = search.value.trim().toLowerCase(); this.render(); });

    this.render();
  },

  setCategory(cat){ this.activeCat = cat; this.render(); },

  filtered(){
    return PRODUCTS.filter(p => {
      const catOk = this.activeCat==="all" || p.category===this.activeCat;
      const q = this.query;
      const sOk = !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || categoryName(p.category).toLowerCase().includes(q);
      return catOk && sOk;
    });
  },

  render(){
    document.querySelectorAll(".filter-pill").forEach(b =>
      b.classList.toggle("active", b.dataset.cat===this.activeCat));

    const grid = document.getElementById("productsGrid");
    const list = this.filtered();
    const count = document.getElementById("resultCount");
    if(count) count.textContent = list.length + (list.length===1?" product":" products") +
      (this.activeCat==="all" ? "" : " in " + categoryName(this.activeCat));

    if(list.length===0){
      grid.innerHTML = '<div class="col-12"><div class="empty-state"><div class="big">🔍</div><h3>No products found</h3>' +
        '<p>Try a different search or category, or message us directly on WhatsApp.</p>' +
        '<a class="btn btn-whatsapp mt-2" target="_blank" rel="noopener" href="' + whatsappGeneral() + '">Message us on WhatsApp</a></div></div>';
      return;
    }
    grid.innerHTML = list.map(productCardHTML).join("");

    // Wire each card to open the modal
    grid.querySelectorAll(".product-card").forEach(card => {
      const open = () => openProductModal(card.dataset.id);
      card.addEventListener("click", open);
      card.addEventListener("keydown", e => { if(e.key==="Enter"||e.key===" "){ e.preventDefault(); open(); } });
    });
  }
};

/* ---------- 8. Product modal ---------- */
let productModal = null;
function openProductModal(id){
  const p = getProduct(id);
  if(!p) return;
  document.getElementById("pmPhotoWrap").className = "pm-photo";  // reset state
  document.getElementById("pmImg").src = p.img;
  document.getElementById("pmImg").alt = p.name;
  document.getElementById("pmBadge").textContent = categoryName(p.category);
  document.getElementById("pmName").textContent = p.name;
  document.getElementById("pmPrice").innerHTML = "₹" + p.price + ' <small>onwards</small>';
  document.getElementById("pmDesc").textContent = p.desc;
  document.getElementById("pmWa").href = whatsappLink(p.name);
  if(!productModal) productModal = new bootstrap.Modal(document.getElementById("productModal"));
  productModal.show();
}

/* ---------- 9. Navbar scroll state, scrollspy, scroll-to-top ---------- */
function navHeight(){ return (document.getElementById("mainNav")?.offsetHeight) || 66; }

// Keep --nav-h in sync with the real navbar height (changes by device/zoom)
function syncNavHeight(){
  document.documentElement.style.setProperty("--nav-h", navHeight() + "px");
}

// Smooth-scroll every in-page anchor to land just below the sticky navbar
function initAnchors(){
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    const sel = a.getAttribute("href");
    if(!sel || sel.length < 2) return;
    a.addEventListener("click", e => {
      const target = document.querySelector(sel);
      if(!target) return;
      e.preventDefault();
      // Close the mobile menu first so the offset is measured correctly
      const open = document.querySelector(".navbar-collapse.show");
      if(open && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(open).hide();
      const doScroll = () => {
        const y = sel === "#home" ? 0
          : target.getBoundingClientRect().top + window.scrollY - navHeight() + 1;
        window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
      };
      // small delay lets the menu finish collapsing on mobile
      open ? setTimeout(doScroll, 180) : doScroll();
    });
  });
}

function initChrome(){
  const nav = document.querySelector(".navbar");
  const toTop = document.getElementById("toTop");

  const onScroll = () => {
    if(nav)   nav.classList.toggle("scrolled", window.scrollY>8);
    if(toTop) toTop.classList.toggle("show", window.scrollY>500);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive:true });
  if(toTop) toTop.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

  // Scrollspy: highlight nav link for the section in view
  const links = Array.from(document.querySelectorAll('.navbar .nav-link[data-spy]'));
  const sections = links.map(l => document.querySelector(l.getAttribute("href"))).filter(Boolean);
  if("IntersectionObserver" in window && sections.length){
    const obs = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if(en.isIntersecting){
          links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id));
        }
      });
    }, { rootMargin:"-45% 0px -50% 0px" });
    sections.forEach(s => obs.observe(s));
  }

  // Inject WhatsApp links + phone text
  document.querySelectorAll("[data-wa]").forEach(a => { a.href = whatsappGeneral(a.dataset.wa||""); });
  document.querySelectorAll("[data-phone-display]").forEach(el => { el.textContent = STORE.phoneDisplay; });

  // Today's business-hours row
  const todayRow = document.querySelector('.hours-row[data-day="' + new Date().getDay() + '"]');
  if(todayRow) todayRow.classList.add("today");

  const yr = document.getElementById("year");
  if(yr) yr.textContent = new Date().getFullYear();

  // Close mobile menu after tapping a link
  document.querySelectorAll(".navbar-collapse .nav-link").forEach(link =>
    link.addEventListener("click", () => {
      const c = document.querySelector(".navbar-collapse.show");
      if(c) bootstrap.Collapse.getOrCreateInstance(c).hide();
    }));
}

/* ---------- 10. Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  syncNavHeight();
  window.addEventListener("resize", syncNavHeight, { passive:true });
  initChrome();
  initAnchors();
  renderCategoryCards();
  ProductsSection.init();
});
