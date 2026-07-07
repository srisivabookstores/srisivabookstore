/* ==========================================================================
   ஸ்ரீ சிவா புத்தக நிலையம் — Sri Siva Book Store
   script.js — single page, Tamil-first (English optional), vanilla JS.
   Real product photos only. WhatsApp enquiry (no prices, no checkout).
   ========================================================================== */

const STORE = {
  phone: "919150620572",           // WhatsApp + primary
  phone1Display: "+91 9150620572",
  phone2Display: "+91 9003703237",
};

/* Google Maps — replace all three with your exact share link when ready. */
const MAP = {
  embed:      "https://maps.google.com/maps?q=Sri%20Siva%20Book%20Store%2C%20Uthangarai%2C%20Tamil%20Nadu&z=15&output=embed",
  open:       "https://www.google.com/maps/search/?api=1&query=Sri+Siva+Book+Store+Uthangarai+Tamil+Nadu",
  directions: "https://www.google.com/maps/dir/?api=1&destination=Sri+Siva+Book+Store+Uthangarai+Tamil+Nadu",
};

/* ---------------- i18n ---------------- */
const I18N = {
  ta:{
    brand_name:"ஸ்ரீ சிவா புத்தக நிலையம்", brand_sub:"ஊத்தங்கரை, தமிழ்நாடு", brand_mark:"S",
    nav_home:"முகப்பு", nav_categories:"வகைகள்", nav_brands:"பிராண்டுகள்",
    nav_services:"சேவைகள்", nav_products:"பொருட்கள்", nav_about:"எங்களைப் பற்றி", nav_contact:"தொடர்பு",
    hero_loc:"ஊத்தங்கரை • தமிழ்நாடு",
    hero_title:'ஸ்ரீ சிவா <span class="u">புத்தக நிலையம்</span>',
    hero_tag:"ஸ்டேஷனரி | ஜெராக்ஸ் | பிரிண்ட் அவுட் | லேமினேஷன் | ஸ்பைரல் பைண்டிங் | பர்த்டே & கிஃப்ட் ஐட்டம்ஸ் | ஃபேன்சி ஐட்டம்ஸ்",
    hero_view:"பொருட்களை பார்க்கவும்", hero_contact:"தொடர்பு கொள்ளவும்", hero_dir:"வழிகாட்டுதலை பெறவும்",

    cat_eye:"நாங்கள் வைத்திருப்பவை", cat_title:"பொருள் வகைகள்",
    cat_lead:"ஒரு வகையைத் தட்டி அந்தப் பொருட்களைப் பார்க்கவும். மேலும் பல பொருட்கள் கடையில் கிடைக்கும்.",
    cat_more:"மேலும்", cat_browse:"பார்க்கவும்", browse_hint:"வகைகள் வழியாக பொருட்களைப் பாருங்கள் — அல்லது மேலே தேடுங்கள்.", browse_cta:"வகைகளைப் பார்க்கவும்",

    brand_eye:"நம்பகமான பிராண்டுகள்", brand_title:"எங்கள் பிராண்டுகள்",
    brand_lead:"நாங்கள் வழங்கும் நம்பகமான பிராண்டுகள்.",
    brand_note:"* பிராண்ட் பெயர்கள் மற்றும் லோகோக்கள் அந்தந்த நிறுவனங்களுக்கு சொந்தமானவை.",
    brand_more:"இன்னும் பல பிராண்டுகள் கடையில் கிடைக்கும்",

    svc_eye:"எங்கள் சேவைகள்", svc_title:"பிரிண்ட் & பைண்டிங் சேவைகள்",
    svc_lead:"பிரிண்ட், ஜெராக்ஸ், லேமினேஷன், ஸ்பைரல் பைண்டிங் — ஒரே இடத்தில்.",
    svc_ask:"கேளுங்கள்",

    feat_eye:"தேர்ந்தெடுக்கப்பட்டவை", feat_title:"சிறப்பு பொருட்கள்",
    feat_lead:"கடையில் அதிகம் விற்பனையாகும் பொருட்கள்.",

    prod_eye:"பார்த்து • கேளுங்கள்", prod_title:"எங்கள் பொருட்கள்",
    prod_lead:"பொருளைத் தட்டி விவரங்களைப் பார்க்கவும். தேவையானவற்றை கார்ட்டில் சேர்த்து வாட்ஸ்அப்பில் கேளுங்கள்.",
    search_ph:"பொருட்களைத் தேடுங்கள்…", filter_all:"அனைத்தும்", filter_popular:"பிரபலம்", items:"பொருட்கள்",
    no_results:"பொருட்கள் எதுவும் கிடைக்கவில்லை. வேறு வார்த்தையில் தேடிப் பாருங்கள்.",
    load_more:"மேலும் பார்க்கவும்",
    ask_price:"விலை கேளுங்கள்", add_cart:"கார்ட்டில் சேர்",

    about_eye:"எங்களைப் பற்றி", about_title:"ஸ்ரீ சிவா புத்தக நிலையம்",
    about_p1:"ஊத்தங்கரை மற்றும் சுற்றுவட்டாரத்தில் உள்ள மாணவர்கள், பெற்றோர்கள் மற்றும் அலுவலகங்களுக்குத் தேவையான தரமான ஸ்டேஷனரி, பள்ளி & கல்லூரிப் பொருட்கள், அலுவலகப் பொருட்கள், ஃபேன்சி பொருட்கள் மற்றும் பிரிண்டிங் சேவைகள் அனைத்தையும் ஒரே கூரையின் கீழ் வழங்கும் நம்பகமான கடை.",
    about_p2:"DOMS, Apsara, Nataraj போன்ற அங்கீகரிக்கப்பட்ட பிராண்டுகளின் அசல் பொருட்களை மட்டுமே சரியான டீலர்களிடமிருந்து வாங்கி நியாயமான விலையில் வழங்குகிறோம். பொருட்களை இங்கே பார்த்துவிட்டு, விலை மற்றும் இருப்பு அறிய வாட்ஸ்அப்பில் தொடர்பு கொள்ளுங்கள்.",
    af1_h:"தரமான பொருட்கள்", af1_p:"நம்பகமான, அசல் பொருட்கள் மட்டுமே",
    af2_h:"அங்கீகृத பிராண்டுகள்", af2_p:"DOMS · Apsara · Nataraj டீலர் பொருட்கள்",
    af3_h:"பள்ளி · கல்லூரி · அலுவலகம்", af3_p:"அனைத்துத் தேவைகளும் ஒரே இடத்தில்",
    af4_h:"பிரிண்டிங் & ஃபேன்சி", af4_p:"ஜெராக்ஸ், லேமினேஷன், ஃபேன்சி பொருட்கள்",

    contact_eye:"தொடர்பு கொள்ள", contact_title:"எங்களைத் தொடர்பு கொள்ளுங்கள்",
    contact_lead:"விலை மற்றும் இருப்பு அறிய அழைக்கவும் அல்லது வாட்ஸ்அப் செய்யவும்.",
    c_loc:"இடம்", c_loc_val:"ஊத்தங்கரை, தமிழ்நாடு", c_phone:"தொலைபேசி", c_wa:"வாட்ஸ்அப்", c_phonewa:"தொலைபேசி / வாட்ஸ்அப்",
    map_dir:"வழிகாட்டுதல் பெறவும்", map_open:"கூகுள் மேப்ஸில் திறக்கவும்",
    cta_title:"உடனடி விசாரணை", cta_p:"தேவையான பொருளை வாட்ஸ்அப்பில் அனுப்புங்கள் — விலை & இருப்பு உடனே தெரிவிக்கிறோம்.",
    wa:"வாட்ஸ்அப்", call_store:"அழைக்கவும்",

    foot_tag:"தரமான ஸ்டேஷனரி, ஃபேன்சி பொருட்கள் & பிரிண்டிங் சேவைகள்.",
    foot_tag2:"ஊத்தங்கரைக்கு நம்பகமான பொருட்களுடன் சேவை.",
    foot_links:"பகுதிகள்", foot_contact:"தொடர்பு", foot_wa:"வாட்ஸ்அப்பில் தொடர்பு கொள்ளுங்கள்",
    rights:"ஸ்ரீ சிவா புத்தக நிலையம், ஊத்தங்கரை. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",

    cart_title:"உங்கள் கார்ட்", cart_empty:"உங்கள் கார்ட் காலியாக உள்ளது. பொருட்களைச் சேர்த்து வாட்ஸ்அப்பில் கேளுங்கள்.",
    cart_total:"மொத்தப் பொருட்கள்", cart_enquire:"வாட்ஸ்அப்பில் கேளுங்கள்", cart_clear:"கார்ட்டை காலி செய்",
    toast_added:"கார்ட்டில் சேர்க்கப்பட்டது",
  },
  en:{
    brand_name:"Sri Siva Book Store", brand_sub:"Uthangarai, Tamil Nadu", brand_mark:"S",
    nav_home:"Home", nav_categories:"Categories", nav_brands:"Brands",
    nav_services:"Services", nav_products:"Products", nav_about:"About", nav_contact:"Contact",
    hero_loc:"Uthangarai • Tamil Nadu",
    hero_title:'Sri Siva <span class="u">Book Store</span>',
    hero_tag:"Stationery | Xerox | Print Out | Lamination | Spiral Binding | Birthday & Gift Items | Fancy Items",
    hero_view:"View Products", hero_contact:"Contact Us", hero_dir:"Get Directions",

    cat_eye:"What we stock", cat_title:"Product Categories",
    cat_lead:"Tap a category to view those products. Many more items are available in store.",
    cat_more:"more", cat_browse:"Browse", browse_hint:"Browse products by category above — or search at the top.", browse_cta:"Browse categories",

    brand_eye:"Trusted brands", brand_title:"Our Brands",
    brand_lead:"Trusted brands we offer.",
    brand_note:"* Brand names and logos belong to their respective companies.",
    brand_more:"& many more brands in store",

    svc_eye:"Our services", svc_title:"Print & Binding Services",
    svc_lead:"Print, Xerox, lamination and spiral binding — all in one place.",
    svc_ask:"Ask",

    feat_eye:"Hand-picked", feat_title:"Featured Products",
    feat_lead:"Popular, fast-moving items from the store.",

    prod_eye:"Browse • enquire", prod_title:"Our Products",
    prod_lead:"Tap a product for details. Add what you need to the cart and ask on WhatsApp.",
    search_ph:"Search products…", filter_all:"All", filter_popular:"Popular", items:"items",
    no_results:"No products found. Try another word.",
    load_more:"Load more",
    ask_price:"Ask price", add_cart:"Add to Cart",

    about_eye:"About us", about_title:"Sri Siva Book Store",
    about_p1:"A trusted store serving students, parents and offices in and around Uthangarai — quality stationery, school & college items, office supplies, fancy items and printing services, all under one roof.",
    about_p2:"We stock only genuine products from authorised brands like DOMS, Apsara and Nataraj, bought from proper dealers and offered at fair prices. Browse here and message us on WhatsApp for price and availability.",
    af1_h:"Quality Products", af1_p:"Only genuine, trusted products",
    af2_h:"Authorised Brands", af2_p:"DOMS · Apsara · Nataraj dealer stock",
    af3_h:"School · College · Office", af3_p:"Every need in one place",
    af4_h:"Printing & Fancy", af4_p:"Xerox, lamination, fancy items",

    contact_eye:"Get in touch", contact_title:"Contact Us",
    contact_lead:"Call or WhatsApp us for price and availability.",
    c_loc:"Location", c_loc_val:"Uthangarai, Tamil Nadu", c_phone:"Phone", c_wa:"WhatsApp", c_phonewa:"Phone / WhatsApp",
    map_dir:"Get Directions", map_open:"Open in Google Maps",
    cta_title:"Quick enquiry", cta_p:"Message the item you need on WhatsApp — we'll reply with price and stock right away.",
    wa:"WhatsApp", call_store:"Call",

    foot_tag:"Quality Stationery, Fancy Items & Printing Services.",
    foot_tag2:"Serving Uthangarai with trusted products.",
    foot_links:"Sections", foot_contact:"Contact", foot_wa:"Contact us on WhatsApp",
    rights:"Sri Siva Book Store, Uthangarai. All rights reserved.",

    cart_title:"Your Cart", cart_empty:"Your cart is empty. Add products and ask on WhatsApp.",
    cart_total:"Total items", cart_enquire:"Enquire on WhatsApp", cart_clear:"Clear cart",
    toast_added:"Added to cart",
  }
};

/* ---------------- Brands ---------------- */
/* Brands are fully data-driven. To ADD a brand, copy one line below:
   { word:"BrandName", color:"#hex", logo:"", ta:"தமிழ் விளக்கம்", en:"English line" }
   - color = the wordmark colour shown on the card.
   - logo  = optional. Put an image at images/brands/<file>.png and set
             logo:"images/brands/<file>.png"; it replaces the text wordmark.
   Edit / remove any example brand freely. */
const BRANDS = [
  { word:"DOMS",          color:"#e8462b", logo:"", ta:"பென்சில், கலர் பென்சில், கிரேயான்ஸ், ஸ்கெட்ச் பேனா, ஜியோமெட்ரி பாக்ஸ்.", en:"Pencils, colour pencils, crayons, sketch pens, geometry boxes." },
  { word:"APSARA",        color:"#1f3fb0", logo:"", ta:"பென்சில், பேனா, அழிப்பான், ஷார்ப்பனர், ஜியோமெட்ரி பொருட்கள்.", en:"Pencils, pens, erasers, sharpeners, geometry items." },
  { word:"NATARAJ",       color:"#0e8a5f", logo:"", ta:"பென்சில், பேனா, அழிப்பான், ஸ்கேல் — பள்ளிக்கு ஏற்றது.", en:"Pencils, pens, erasers, scales — ideal for school." },
  { word:"Faber-Castell", color:"#0a7d3b", logo:"", ta:"கலர் பென்சில், கிரேயான்ஸ், மார்க்கர் & ஓவியப் பொருட்கள்.", en:"Colour pencils, crayons, markers and art supplies." },
  { word:"Camlin",        color:"#e67e22", logo:"", ta:"கலர்ஸ், ஜியோமெட்ரி, ஸ்டேஷனரி & ஓவியப் பொருட்கள்.", en:"Colours, geometry, stationery and art materials." },
  { word:"Cello",         color:"#c0392b", logo:"", ta:"பால் பேனா, ஜெல் பேனா & எழுதும் பொருட்கள்.", en:"Ball pens, gel pens and writing instruments." },
  { word:"Flair",         color:"#e4002b", logo:"", ta:"பால் பேனா, ஜெல் பேனா & ஃபவுண்டன் பேனா.", en:"Ball pens, gel pens and fountain pens." },
  { word:"Reynolds",      color:"#2c3e9e", logo:"", ta:"பால் பேனா, ஜெல் பேனா — நம்பகமான எழுதுகோல்.", en:"Ball pens and gel pens — trusted writing." },
  { word:"Classmate",     color:"#0f9d58", logo:"", ta:"நோட்டுப் புத்தகங்கள், பேனா & பென்சில்.", en:"Notebooks, pens and pencils." },
];

/* ---------------- Category browser (full list) ---------------- */
const CATEGORIES = [
  { key:"writing", icon:"bi-pen-fill", filter:"writing",
    ta:{n:"எழுதும் பொருட்கள்", items:["பால் பேனா","ஜெல் பேனா","ஃபவுண்டன் பேனா","ஃபைன்லைனர்","பென்சில்","மெக்கானிக்கல் பென்சில்","ஹைலைட்டர்","மார்க்கர்"]},
    en:{n:"Writing Instruments", items:["Ball Pens","Gel Pens","Fountain Pens","Fine-liner","Pencils","Mechanical Pencils","Highlighters","Markers"]} },
  { key:"paper", icon:"bi-journal-text", filter:"paper",
    ta:{n:"பேப்பர் & நோட்டுப் புத்தகங்கள்", items:["ஸ்பைரல் நோட்டு","கம்போசிஷன்","நோட்பேட்","லீகல் பேட்","ஸ்டிக்கி நோட்ஸ்","கவர்","பிரிண்டர் பேப்பர்","ஸ்கெட்ச்புக்"]},
    en:{n:"Paper & Notebooks", items:["Spiral Notebooks","Composition","Notepads","Legal Pads","Sticky Notes","Envelopes","Printer Paper","Sketchbooks"]} },
  { key:"filing", icon:"bi-folder-fill", filter:"filing",
    ta:{n:"டெஸ்க் & ஃபைலிங்", items:["ரிங் பைண்டர்","ஃபைல் ஃபோல்டர்","கிளிப்போர்டு","டெஸ்க் ஆர்கனைசர்","மேகசின் ஃபைல்","டாக்குமெண்ட் ட்ரே"]},
    en:{n:"Desktop & Filing", items:["Ring Binders","File Folders","Clipboard","Desk Organizers","Magazine Files","Document Trays"]} },
  { key:"fasteners", icon:"bi-paperclip", filter:"fasteners",
    ta:{n:"ஃபாஸ்டனர் & பசை", items:["பேப்பர் கிளிப்","பைண்டர் கிளிப்","ஸ்டேப்லர்","க்ளூ ஸ்டிக்","லிக்விட் க்ளூ","டேப்","புஷ் பின்","ரப்பர் பேண்ட்"]},
    en:{n:"Fasteners & Adhesives", items:["Paper Clips","Binder Clips","Stapler & Staples","Glue Sticks","Liquid Glue","Tape","Push Pins","Rubber Bands"]} },
  { key:"cutting", icon:"bi-scissors", filter:"cutting",
    ta:{n:"கட்டிங் & அளவீடு", items:["கத்தரிக்கோல்","யூட்டிலிட்டி நைஃப்","ஸ்கேல்","ஹோல் பஞ்ச்","ஷார்ப்பனர்","அழிப்பான்","கரெக்ஷன் டேப்"]},
    en:{n:"Cutting & Measuring", items:["Scissors","Utility Knife","Rulers","Hole Punch","Sharpener","Erasers","Correction Tape"]} },
  { key:"school", icon:"bi-backpack-fill", filter:"writing",
    ta:{n:"பள்ளிப் பொருட்கள்", items:["பேனா","பென்சில்","அழிப்பான்","ஷார்ப்பனர்","ஸ்கேல்","கலர் பென்சில்","கிரேயான்ஸ்","ஜியோமெட்ரி பாக்ஸ்","ஸ்கூல் பேக்","எக்ஸாம் பேட்"]},
    en:{n:"School Items", items:["Pen","Pencil","Eraser","Sharpener","Scale","Colour Pencil","Crayons","Geometry Box","School Bags","Exam Pads"]} },
  { key:"paperproducts", icon:"bi-file-earmark-text-fill", filter:"paper",
    ta:{n:"பேப்பர் வகைகள்", items:["எக்ஸாம் பேப்பர் (ரூல்டு)","எக்ஸாம் பேப்பர் (அன்ரூல்டு)","A3 பேப்பர்","A4 பேப்பர்","எக்ஸிகியூட்டிவ்","லீகல்","கிரீன் ஷீட்","A4 கலர் பேப்பர்","ஸ்டிக்கர் பேப்பர்"]},
    en:{n:"Paper Products", items:["Exam Paper (Ruled)","Exam Paper (Unruled)","A3 Paper","A4 Paper","Executive","Legal","Green Sheet","A4 Colour Paper","Sticker Paper"]} },
  { key:"fancy", icon:"bi-stars", filter:"fancy",
    ta:{n:"ஃபேன்சி பொருட்கள்", items:["ரிப்பன்","லேஸ் கிளிப்","காதணி","ஹேர் அக்சஸரி","கிஃப்ட் ஐட்டம்","பர்த்டே டெக்கரேஷன்","ஃபேன்சி டெக்கர்","பார்ட்டி பொருட்கள்"]},
    en:{n:"Fancy Items", items:["Ribbons","Lace Clips","Earrings","Hair Accessories","Gift Items","Birthday Decorations","Fancy Decorations","Party Items"]} },
  { key:"other", icon:"bi-box-seam", filter:"other",
    ta:{n:"பிற பொருட்கள்", items:["பவுச்","வாட்டர் பாட்டில்","ஸ்னாக்ஸ் பாக்ஸ்"]},
    en:{n:"Other Products", items:["Pouches","Water Bottles","Snacks Boxes"]} },
  { key:"project", icon:"bi-cpu-fill", filter:"project",
    ta:{n:"புராஜெக்ட் பொருட்கள்", items:["மோட்டார்","LED","பேட்டரி","கலர் வயர்","டிரோன் மோட்டார்","பம்ப் மோட்டார்","ஃபேன்","ஸ்விட்ச்","க்ளூ கன்","சார்ட்"]},
    en:{n:"Project Items", items:["Motors","LED Lights","Battery","Colour Wires","Drone Motor","Pump Motor","Fan","Switch","Glue Gun","Charts"]} },
];

/* filter labels for the product grid */
const FILTERS = [
  { key:"writing",   ta:"எழுதும் பொருட்கள்",   en:"Writing Instruments" },
  { key:"art",       ta:"கலை & கலர்",           en:"Art & Colours" },
  { key:"paper",     ta:"பேப்பர் & நோட்டு",     en:"Paper & Notebooks" },
  { key:"filing",    ta:"ஃபைல் & ஃபோல்டர்",     en:"Files & Filing" },
  { key:"fasteners", ta:"ஃபாஸ்டனர் & பசை",      en:"Fasteners & Adhesives" },
  { key:"cutting",   ta:"கட்டிங் & அளவீடு",      en:"Cutting & Measuring" },
  { key:"kits",      ta:"கிட் & பேக்",           en:"Kits & Bags" },
  { key:"fancy",     ta:"ஃபேன்சி & பார்ட்டி",   en:"Fancy & Party" },
  { key:"toys",      ta:"பொம்மைகள்",             en:"Toys & Games" },
  { key:"project",   ta:"புராஜெக்ட்",            en:"Project Items" },
  { key:"other",     ta:"பிற பொருட்கள்",         en:"Other" },
];
const FILTER_LABEL = Object.fromEntries(FILTERS.map(f=>[f.key,f]));

/* ---------------- Services ---------------- */
const SERVICES = [
  { icon:"bi-printer-fill",  ta:{n:"பிரிண்ட் அவுட் / ஜெராக்ஸ்"}, en:{n:"Printout / Xerox"}, ta_tags:["A3","A4","B&W","கலர்"], en_tags:["A3","A4","B&W","Colour"] },
  { icon:"bi-palette-fill",  ta:{n:"கலர் பிரிண்டிங்"},  en:{n:"Colour Printing"},  ta_tags:["A3","A4","ஃபோட்டோ","சர்டிபிகேட்"], en_tags:["A3","A4","Photo","Certificate"] },
  { icon:"bi-card-image",    ta:{n:"லேமினேஷன்"},       en:{n:"Lamination"},       ta_tags:["A3","A4","கவர்ன்மென்ட் ID"],   en_tags:["A3","A4","Government ID"] },
  { icon:"bi-journal-bookmark-fill", ta:{n:"ஸ்பைரல் பைண்டிங்"}, en:{n:"Spiral Binding"}, ta_tags:["A3","A4","லீகல்"], en_tags:["A3","A4","Legal"] },
  { icon:"bi-sticky-fill",   ta:{n:"ஸ்டிக்கர் பிரிண்டிங்"}, en:{n:"Sticker Printing"}, ta_tags:["A3","A4","லேபிள்"],     en_tags:["A3","A4","Label"] },
  { icon:"bi-patch-check-fill", ta:{n:"சான்றிதழ்கள்"}, en:{n:"Certificates"}, ta_tags:["மெடிக்கல்","ஃபிட்னஸ்","ரிட்டர்ன் டு டியூட்டி","இதர"], en_tags:["Medical","Fitness","Return to Duty","Others"] },
];

/* ---------------- Products (real photos only) ---------------- */
const P = (id,cat,brand,img,ta,en,feat)=>({id,cat,brand,img:`images/products/${img}.jpg`,ta,en,featured:!!feat});
/* Z = real-photo product from the uploaded ZIP */
const Z = (id,cat,brand,img,tn,en,feat)=>({id,cat,brand,img:`images/products/${img}.jpg`,ta:{n:tn,d:tn},en:{n:en,d:en},featured:!!feat});
/* A = catalogue product (APSARA/Nataraj) shown as a branded tile until a real photo is added.
   To attach a real photo later: save images/products/<file>.jpg and change A(...) to P(...). */
const A = (id,cat,brand,color,name,mrp)=>({id,cat,brand,img:"",ph:true,color,mrp,ta:{n:name,d:brand+" — "+name},en:{n:name,d:brand+" — "+name},featured:false});
/* remap old category keys of existing products to the new hierarchy */
const CATMAP={stationery:"writing",school:"art",party:"fancy",gifts:"fancy",fancy:"fancy",toys:"toys",project:"project"};
const CATID_OVERRIDE={70:"kits",30:"project",31:"fasteners",32:"project"};
const PRODUCTS = [
  P(1,"stationery","Assorted","stationery-mix",{n:"பேனா, பென்சில் & ஸ்கெட்ச்",d:"பேனா, பென்சில், ஸ்கெட்ச் பேனா, ஸ்கேல் — அன்றாட ஸ்டேஷனரித் தொகுப்பு."},{n:"Pens, Pencils & Sketch",d:"Pens, pencils, sketch pens and scales — everyday stationery."},true),
  P(2,"stationery","Assorted","notebooks",{n:"நோட்டுப் புத்தகங்கள் & பேட்",d:"ரூல்டு நோட்டுப் புத்தகங்கள், ஸ்பைரல் பேட் — பள்ளி & அலுவலகப் பயன்பாட்டுக்கு."},{n:"Notebooks & Pads",d:"Ruled notebooks and spiral pads for school and office."},true),
  P(3,"stationery","Assorted","office-tools",{n:"ஸ்டேப்லர், பஞ்ச் & டேப்",d:"ஸ்டேப்லர், பஞ்ச், டேப், மார்க்கர், ஹைலைட்டர், ஸ்டிக்கி நோட்ஸ்."},{n:"Stapler, Punch & Tape",d:"Stapler, punch, tape, markers, highlighters and sticky notes."}),
  P(4,"stationery","Assorted","stationery-cluster",{n:"கவர், கிளிப் & கிளிப்போர்டு",d:"போஸ்ட் கவர், ஆபீஸ் கவர், கிளிப் போர்டு உள்ளிட்ட ஸ்டேஷனரிப் பொருட்கள்."},{n:"Covers, Clips & Clipboard",d:"Post covers, office covers, clip boards and assorted stationery."}),
  P(10,"school","DOMS","colour-pencils",{n:"கலர் பென்சில்",d:"DOMS கலர் பென்சில் செட். வாட்டர் கலர், போஸ்டர் கலர், ஸ்கெட்ச் பேனாவும் கடையில் கிடைக்கும்."},{n:"Colour Pencils",d:"DOMS colour pencil sets. Water colours, poster colours and sketch pens also in store."},true),
  P(11,"school","DOMS","crayons",{n:"கிரேயான்ஸ்",d:"மென்மையாக வரையும் DOMS கிரேயான்ஸ் — மாணவ ஓவியர்களுக்கு ஏற்றது."},{n:"Crayons",d:"Smooth-glide DOMS crayons, perfect for young artists."}),
  P(70,"school","Assorted","exam-kit",{n:"எக்ஸாம் கிட் & பவுச்",d:"எக்ஸாம் பேட், வேரைட்டி பவுச், எக்ஸிகியூட்டிவ் கிட் — மாணவர்களுக்குத் தேவையான அனைத்தும்."},{n:"Exam Kit & Pouch",d:"Exam pads, variety pouches and executive kits for students."},true),
  P(40,"party","Assorted","balloons",{n:"பலூன்கள்",d:"பல்வேறு வண்ணங்களில் பலூன்கள். கேண்டில், ரிப்பன் ஸ்ப்ரே, பர்த்டே காம்போவும் கடையில் கிடைக்கும்."},{n:"Balloons",d:"Assorted colour balloons. Candles, ribbon spray and birthday combos also in store."},true),
  P(41,"party","Assorted","party-hats",{n:"பார்ட்டி தொப்பி & பிளோயர்",d:"பிறந்தநாள் பார்ட்டி தொப்பிகள் மற்றும் பிளோயர்கள்."},{n:"Party Hats & Blowers",d:"Birthday party cone hats and blowers."}),
  P(42,"party","Assorted","party-spray",{n:"பார்ட்டி ஸ்னோ ஸ்ப்ரே",d:"கொண்டாட்டங்களுக்கான ஸ்னோ ஸ்ப்ரே கேன்."},{n:"Party Snow Spray",d:"Snow spray cans for celebrations."}),
  P(43,"party","Assorted","party-poppers",{n:"பார்ட்டி பாப்பர்",d:"வண்ணக் காகிதம் வெளியேற்றும் பார்ட்டி பாப்பர்."},{n:"Party Poppers",d:"Confetti-launching party poppers."},true),
  P(44,"party","Assorted","garlands",{n:"மாலைகள் & டெக்கரேஷன்",d:"டின்செல் மாலைகள் மற்றும் தொங்கும் அலங்காரப் பொருட்கள்."},{n:"Garlands & Decorations",d:"Tinsel garlands and hanging decorations."}),
  P(45,"party","Assorted","paper-fans",{n:"பேப்பர் ஃபேன் டெக்கர்",d:"வண்ணப் பேப்பர் ஃபேன் மாலை — பின்னணி அலங்காரத்துக்கு."},{n:"Paper Fan Decor",d:"Colourful paper-fan garlands for backdrops."}),
  P(46,"party","Assorted","wreath",{n:"டெக்கரேட்டிவ் ரீத்",d:"பளபளப்பான டெக்கரேட்டிவ் ரீத் — கதவு & சுவர் அலங்காரம்."},{n:"Decorative Wreath",d:"Sparkly decorative wreath for doors and walls."}),
  P(52,"party","Assorted","confetti",{n:"கான்ஃபெட்டி பாப்பர்",d:"வண்ண கான்ஃபெட்டி — கொண்டாட்டங்களுக்கு."},{n:"Confetti Poppers",d:"Colourful confetti for celebrations."}),
  P(50,"gifts","Assorted","gift-boxes",{n:"கிஃப்ட் பாக்ஸ்",d:"அழகாக அலங்கரிக்கப்பட்ட கிஃப்ட் பாக்ஸ்கள் — அனைத்து சந்தர்ப்பங்களுக்கும்."},{n:"Gift Boxes",d:"Beautifully wrapped gift boxes for every occasion."},true),
  P(51,"gifts","Assorted","gift-bows",{n:"கிஃப்ட் போ & ரிப்பன்",d:"கிஃப்ட் போ, ரிப்பன் மற்றும் பரிசுப் பொருட்கள்."},{n:"Gift Bows & Ribbon",d:"Gift pull-bows, ribbons and present items."}),
  P(53,"gifts","Assorted","tassels",{n:"தொங்கும் டாஸல்ஸ்",d:"வண்ணத் தொங்கும் டாஸல்ஸ் அலங்காரப் பொருட்கள்."},{n:"Hanging Tassels",d:"Colourful hanging tassel decorations."}),
  P(60,"fancy","Assorted","ribbons",{n:"ரிப்பன்கள்",d:"பல்வேறு வண்ணம் & அகலத்தில் சாடின் & கிளிட்டர் ரிப்பன்கள்."},{n:"Ribbons",d:"Satin and glitter ribbons in many colours and widths."},true),
  P(61,"fancy","Assorted","foil-rolls",{n:"ஃபாயில் & ராப்பிங் ரோல்",d:"பளபளப்பான ஃபாயில் ராப்பிங் பேப்பர் ரோல்கள்."},{n:"Foil & Wrapping Rolls",d:"Shiny foil wrapping paper rolls."}),
  P(62,"fancy","Assorted","pinwheel",{n:"பின்வீல் & ஃபேன்சி டெக்கர்",d:"பின்வீல் மற்றும் ஃபேன்சி அலங்காரப் பொருட்கள்."},{n:"Pinwheel & Fancy Decor",d:"Pinwheels and fancy decorative items."}),
  P(80,"toys","Assorted","cube",{n:"மேஜிக் க்யூப் (16 பீஸ்)",d:"2-இன்-1 மேஜிக் இன்டலிஜென்ஸ் க்யூப் 16 பீஸ் பேட் — குழந்தைகளின் புதிர் க்யூப்."},{n:"Magic Cube (16 pc)",d:"2-in-1 magic intelligence cubes, 16 pc pad — brain-teaser puzzle cubes."},true),
  P(81,"toys","Assorted","skewb",{n:"ஸ்க்யூப் க்யூப்",d:"ஸ்டிக்கர்லெஸ் ஸ்க்யூப் ஸ்பீட் க்யூப் — சவாலான புதிர்."},{n:"Skewb Cube",d:"Stickerless skewb speed cube — a challenging puzzle."}),
  P(82,"toys","Assorted","spinner",{n:"ஃபிட்ஜெட் ஸ்பின்னர்",d:"பல்வேறு வண்ணங்களில் சிறிய ஃபிட்ஜெட் ஸ்பின்னர்கள் — ரிட்டர்ன் கிஃப்ட்டுக்கு ஏற்றது."},{n:"Fidget Spinner",d:"Small fidget spinners in assorted colours — great return gifts."},true),
  P(83,"toys","Assorted","aeroplane",{n:"டை-காஸ்ட் ஏரோபிளேன்",d:"மெட்டல் பாடி புல்-பேக் டை-காஸ்ட் ஏரோபிளேன் செட் (4 பீஸ்)."},{n:"Die-cast Aeroplane",d:"Metal-body pull-back die-cast aeroplane set (4 pc)."}),
  P(84,"toys","Assorted","cars",{n:"டை-காஸ்ட் கார்கள்",d:"மெட்டல் பாடி புல்-பேக் டை-காஸ்ட் கார் மாடல்கள் — மிக்ஸ் பேக்."},{n:"Die-cast Cars",d:"Metal-body pull-back die-cast car models — mixed pack."}),
  P(71,"project","Pexon","magnet",{n:"மேக்னெட் (U & பார்) 20 பீஸ்",d:"ஸ்ட்ராங் ஸ்டீல் மேக்னெட் சார்ட் (20 பீஸ்) — அறிவியல் பாடம் & புராஜெக்ட்டுக்கு."},{n:"Magnets (U & Bar) 20 pc",d:"Strong steel magnet chart (20 pc) for science lessons and projects."}),
  P(30,"project","Assorted","project-electronics",{n:"மோட்டார், வயர் & LED",d:"மோட்டார், டிரோன்/பம்ப் மோட்டார், கலர் வயர், பேட்டரி, LED விளக்குகள்."},{n:"Motors, Wires & LED",d:"Motor, drone/pump motor, colour wires, battery and LED lights."},true),
  P(31,"project","Assorted","project-craft",{n:"ஃபெவிகால், க்ளூ & க்ளூ கன்",d:"ஃபெவிகால், க்ளூ, க்ளூ கன் — புராஜெக்ட் & கைவினை வேலைகளுக்கு."},{n:"Fevicol, Glue & Glue Gun",d:"Fevicol, glue and glue gun for projects and craft work."}),
  P(32,"project","Assorted","project-items",{n:"புராஜெக்ட் கிட்",d:"மோட்டார், ஃபேன், ஸ்விட்ச், வயர், க்ளூ, சார்ட் — புராஜெக்ட்டுக்குத் தேவையான அனைத்தும்."},{n:"Project Kit",d:"Motor, fan, switch, wires, glue and charts — a full project kit."}),

  // ---- Products from uploaded ZIP (real photos) ----
  Z(200,"writing","Assorted","zip01","அசோர்ட்டட் ஸ்டேஷனரி","Assorted Stationery Pack"),
  Z(201,"writing","Assorted","zip02","அசோர்ட்டட் ஸ்டேஷனரி","Assorted Stationery Pack 2"),
  Z(202,"writing","Assorted","zip03","ஃபவுண்டன் பேனா","Fountain Pen",true),
  Z(203,"writing","DOMS","zip04","Hi-Dark பென்சில் லெட் (0.7mm)","Hi-Dark Pencil Leads (0.7mm)"),
  Z(204,"writing","Assorted","zip05","ஸ்டூடண்ட் பேனா செட்","Student Pen Collection"),
  Z(205,"writing","Assorted","zip06","ஜெல் பேனா","Gel Pen Assortment"),
  Z(206,"writing","German","zip07","இங்க் கார்ட்ரிட்ஜ் (100 பேக்)","Ink Cartridges (German, 100 pack)"),
  Z(207,"filing","DOMS","zip08","பட்டன் ஃபோல்டர்","Button Folder",true),
  Z(208,"filing","DOMS","zip09","பட்டன் ஃபைல்","Button File"),
  Z(209,"filing","DOMS","zip10","டாக்குமெண்ட் ஃபைல்","Document File"),
  Z(210,"filing","DOMS","zip11","டாக்குமெண்ட் ஃபோல்டர்","Document Folder"),
  Z(211,"art","Assorted","zip12","மாடலிங் க்ளே செட் (12 கலர்)","Modelling Clay Set (12 Colours)",true),
  Z(212,"art","Assorted","zip13","மாடலிங் க்ளே","Modelling Clay Dough"),
  Z(213,"art","Assorted","zip14","ஸ்குஷி டோ செட் (11 கலர்)","Squishy Dough Set (11 Colours)"),
  Z(214,"project","Assorted","zip15","புராஜெக்ட் வாட்டர் பம்ப் கிட்","Project Water Pump Kit",true),
  Z(215,"project","Assorted","zip16","கிளிட்டர் கிட் (12 கலர்)","Glitter Kit (12 Colours)"),
  Z(216,"fancy","Assorted","zip17","பலூன் பம்ப்","Balloon Pump",true),
  Z(217,"project","Assorted","zip18","9V பேட்டரி கிளிப் கிட்","9V Battery Clip Kit"),
  Z(218,"fancy","Assorted","zip19","பீட்ஸ் வளையல்","Beaded Bracelet (Fancy)"),
  Z(219,"fancy","Assorted","zip20","பீட்ஸ் வளையல் செட்","Beaded Bracelet Set"),
  Z(220,"fancy","Assorted","zip21","ஃபேன்சி வளையல்","Fancy Bracelet"),
  Z(221,"fancy","Assorted","zip22","பீட்ஸ் நகை செட்","Beaded Jewellery Set"),
  // ---- APSARA / Nataraj catalogue products (branded tiles; add photos later) ----
  A(300,"writing","Apsara","#1f3fb0","Genz Ball Pen","1000"),
  A(301,"art","Apsara","#1f3fb0","Wax Crayons","25"),
  A(302,"art","Apsara","#1f3fb0","14 Jumbo Wax Crayons","60"),
  A(303,"art","Apsara","#1f3fb0","Wax Crayons - Extra Long","70"),
  A(304,"art","Apsara","#1f3fb0","Oil Pastels","40"),
  A(305,"art","Apsara","#1f3fb0","12 Washable Crayons","60"),
  A(306,"art","Apsara","#1f3fb0","12 Soyfun Crayons","60"),
  A(307,"writing","Apsara","#1f3fb0","Sketch Pens","30"),
  A(308,"art","Apsara","#1f3fb0","Modelling Clay","100"),
  A(309,"other","Apsara","#1f3fb0","Tempera Colours","10"),
  A(310,"art","Apsara","#1f3fb0","Water Colour Tubes","125"),
  A(311,"art","Apsara","#1f3fb0","Poster Colours","190"),
  A(312,"art","Apsara","#1f3fb0","Acrylic Colours","220"),
  A(313,"writing","Apsara","#1f3fb0","Colour Pencils","120"),
  A(314,"writing","Apsara","#1f3fb0","Bi Colour Pencils","120"),
  A(315,"kits","Apsara","#1f3fb0","My Apsara Bag","500"),
  A(316,"art","Apsara","#1f3fb0","Art Explorer Kit","500"),
  A(317,"kits","Apsara","#1f3fb0","My Apsara Kit","500"),
  A(318,"kits","Apsara","#1f3fb0","Writing Kit","250"),
  A(319,"kits","Apsara","#1f3fb0","Designer’S Kit","199"),
  A(320,"kits","Apsara","#1f3fb0","Colouring Kit","150"),
  A(321,"art","Apsara","#1f3fb0","Art Kit","150"),
  A(322,"kits","Apsara","#1f3fb0","Ace Kit","160"),
  A(323,"kits","Apsara","#1f3fb0","Premium Scholar’S Kit","149"),
  A(324,"kits","Apsara","#1f3fb0","Funanza Kit","100"),
  A(325,"kits","Apsara","#1f3fb0","Scholar’S Kit","99"),
  A(326,"kits","Apsara","#1f3fb0","Joy Kit","50"),
  A(327,"kits","Apsara","#1f3fb0","Avengers Kit","30"),
  A(328,"kits","Apsara","#1f3fb0","Writer'S Kit","30"),
  A(329,"kits","Apsara","#1f3fb0","Platinum Kit","25"),
  A(330,"writing","Apsara","#1f3fb0","Zesta Scented Pencils","60"),
  A(331,"writing","Apsara","#1f3fb0","Avengers Pencils","1000"),
  A(332,"other","Apsara","#1f3fb0","Mickey Mouse &","1000"),
  A(333,"writing","Apsara","#1f3fb0","Friends Pencils","1000"),
  A(334,"writing","Apsara","#1f3fb0","Princess Pencils","1000"),
  A(335,"writing","Apsara","#1f3fb0","Frozen II Pencils","1000"),
  A(336,"writing","Apsara","#1f3fb0","Ez Grip Pencils","1000"),
  A(337,"writing","Apsara","#1f3fb0","Absolute Pencils","800"),
  A(338,"writing","Apsara","#1f3fb0","Matt Magic Pencils","700"),
  A(339,"writing","Apsara","#1f3fb0","Platinum Pencils","600"),
  A(340,"writing","Apsara","#1f3fb0","Triga Pencils","600"),
  A(341,"writing","Apsara","#1f3fb0","Gold Pencils","500"),
  A(342,"writing","Apsara","#1f3fb0","Regal Gold Pencils","500"),
  A(343,"writing","Apsara","#1f3fb0","Beauty Pencils","500"),
  A(344,"writing","Apsara","#1f3fb0","Drawing Pencils","1000"),
  A(345,"writing","Apsara","#1f3fb0","Charcoal Pencils","50"),
  A(346,"writing","Apsara","#1f3fb0","Glass Marking Pencils","700"),
  A(347,"writing","Apsara","#1f3fb0","Colour Copying Pencils","600"),
  A(348,"writing","Apsara","#1f3fb0","Steno Pencils","600"),
  A(349,"writing","Apsara","#1f3fb0","Absolute Mechanical Pencil","3000"),
  A(350,"writing","Apsara","#1f3fb0","Joi Mechanical Pencil","2500"),
  A(351,"cutting","Apsara","#1f3fb0","Mechano Erasers","30"),
  A(352,"cutting","Apsara","#1f3fb0","Funzo Erasers","20"),
  A(353,"cutting","Apsara","#1f3fb0","Top-It Pencil Topper Erasers","400"),
  A(354,"cutting","Apsara","#1f3fb0","Stripes Erasers","1000"),
  A(355,"cutting","Apsara","#1f3fb0","Assorted Erasers","500"),
  A(356,"cutting","Apsara","#1f3fb0","Pop Erasers","500"),
  A(357,"cutting","Apsara","#1f3fb0","Duals Erasers","150"),
  A(358,"cutting","Apsara","#1f3fb0","Non-Dust Erasers","500"),
  A(359,"cutting","Apsara","#1f3fb0","Rub-A-Long Erasers","200"),
  A(360,"cutting","Apsara","#1f3fb0","Spaceball Sharpeners","1500"),
  A(361,"cutting","Apsara","#1f3fb0","Tidy-Up Sharpener-","1500"),
  A(362,"cutting","Apsara","#1f3fb0","Eraser Combo","1500"),
  A(363,"cutting","Apsara","#1f3fb0","Long Point Sharpeners","500"),
  A(364,"cutting","Apsara","#1f3fb0","Tidy-Top Sharpeners","500"),
  A(365,"cutting","Apsara","#1f3fb0","Mathematical","25"),
  A(366,"cutting","Apsara","#1f3fb0","Instrument Set","25"),
  A(367,"cutting","Apsara","#1f3fb0","Deluxe Scale","2200"),
  A(368,"cutting","Apsara","#1f3fb0","Shatter Proof Scale","2000"),
  A(369,"other","Apsara","#1f3fb0","Dustless Chalks","25"),
];

/* normalise existing products to the new category hierarchy */
PRODUCTS.forEach(p=>{ if(CATID_OVERRIDE[p.id]) p.cat=CATID_OVERRIDE[p.id]; else if(CATMAP[p.cat]) p.cat=CATMAP[p.cat]; });


/* ==================================================================== */
let LANG = "ta", activeFilter = "all", searchTerm = "", CART = loadCart();
const PAGE = 24; let shown = PAGE;
const $ = (s,el=document)=>el.querySelector(s);
const $$ = (s,el=document)=>[...el.querySelectorAll(s)];
const t = (k)=> (I18N[LANG]&&I18N[LANG][k]) || k;
const getProduct = (id)=> PRODUCTS.find(p=>p.id===Number(id));
const pName = (p)=> p[LANG].n, pDesc = (p)=> p[LANG].d;
const filterName = (key)=> (FILTER_LABEL[key]? FILTER_LABEL[key][LANG] : key);

/* ---------- cart ---------- */
function loadCart(){ try{ const r=JSON.parse(localStorage.getItem("ssbs_cart_v3")||"[]"); return Array.isArray(r)?r.filter(x=>x&&x.id&&x.qty>0):[]; }catch(e){ return []; } }
function saveCart(){ try{ localStorage.setItem("ssbs_cart_v3", JSON.stringify(CART)); }catch(e){} }
const qtyOf = (id)=>{ const r=CART.find(x=>x.id===Number(id)); return r?r.qty:0; };
const totalQty = ()=> CART.reduce((s,r)=>s+r.qty,0);
function setQty(id,q){ id=Number(id); q=Math.max(0,q); const r=CART.find(x=>x.id===id); if(q===0)CART=CART.filter(x=>x.id!==id); else if(r)r.qty=q; else CART.push({id,qty:q}); saveCart(); }
function incQty(id){ const was=qtyOf(id); setQty(id,was+1); if(was===0)showToast(t("toast_added")); afterCart(id); }
function decQty(id){ setQty(id,qtyOf(id)-1); afterCart(id); }
function removeRow(id){ setQty(id,0); afterCart(id); }
function clearCart(){ CART=[]; saveCart(); afterCart(); }

/* ---------- WhatsApp ---------- */
const waBase = (txt)=> "https://wa.me/"+STORE.phone+"?text="+encodeURIComponent(txt);
function waGeneral(){ return waBase(LANG==="ta"
  ? "வணக்கம் ஸ்ரீ சிவா புத்தக நிலையம்,\n\nஉங்கள் பொருட்கள் / சேவைகள் பற்றி அறிய விரும்புகிறேன்."
  : "Hello Sri Siva Book Store,\n\nI would like to know more about your products and services."); }
function waProduct(p){ const q=Math.max(1,qtyOf(p.id)); const line=`• ${pName(p)} × ${q}`;
  return waBase(LANG==="ta"
   ? `வணக்கம் ஸ்ரீ சிவா புத்தக நிலையம்,\n\nஇந்தப் பொருளில் ஆர்வமாக உள்ளேன்:\n\n${line}\n\nதயவுசெய்து விலை மற்றும் இருப்பைத் தெரிவியுங்கள்.`
   : `Hello Sri Siva Book Store,\n\nI am interested in:\n\n${line}\n\nPlease share the price and availability.`); }
function waService(s){ const n=s[LANG].n;
  return waBase(LANG==="ta"
   ? `வணக்கம் ஸ்ரீ சிவா புத்தக நிலையம்,\n\n"${n}" சேவை பற்றி அறிய விரும்புகிறேன். விலை & விவரங்களைத் தெரிவியுங்கள்.`
   : `Hello Sri Siva Book Store,\n\nI'd like to know about your "${n}" service. Please share rates and details.`); }
function waCart(){ if(!CART.length) return waGeneral();
  const lines=CART.map((r,i)=>{ const p=getProduct(r.id); return `${i+1}. ${pName(p)} × ${r.qty}`; }).join("\n");
  return waBase(LANG==="ta"
   ? `வணக்கம் ஸ்ரீ சிவா புத்தக நிலையம்,\n\nகீழ்க்கண்ட பொருட்களில் ஆர்வமாக உள்ளேன்:\n\n${lines}\n\nதயவுசெய்து விலை மற்றும் இருப்பைத் தெரிவியுங்கள்.`
   : `Hello Sri Siva Book Store,\n\nI am interested in the following products:\n\n${lines}\n\nPlease share the prices and availability.`); }

/* ---------- qty control ---------- */
function controlHTML(id){
  const q=qtyOf(id);
  if(q===0) return `<button class="add-btn" data-inc="${id}"><i class="bi bi-cart-plus"></i>${t("add_cart")}</button>`;
  return `<div class="qty" role="group"><button data-dec="${id}" aria-label="-"><i class="bi bi-dash-lg"></i></button><span class="n">${q}</span><button data-inc="${id}" aria-label="+"><i class="bi bi-plus-lg"></i></button></div>`;
}
function afterCart(id){
  if(id!=null){ $$(`.p-ctrl[data-pid="${id}"]`).forEach(el=>el.innerHTML=controlHTML(id));
    const pm=$("#pmCtrl"); if(pm&&Number(pm.dataset.pid)===Number(id)) pm.innerHTML=controlHTML(id); }
  syncCart();
}

/* ---------- renders ---------- */
function renderCategories(){
  $("#categoryGrid").innerHTML = MASTER.map(m=>{
    const kids=(m.nodes||[]).map(n=>LANG==="ta"?n.ta:n.en).slice(0,4);
    return `<div class="cat-tile reveal cat-tree" data-mcat="${m.key}" role="button" tabindex="0" style="--bc:${m.color}">
      <div class="ic" style="background:${m.color}14;color:${m.color}"><i class="bi ${m.icon}"></i></div>
      <h3>${LANG==="ta"?m.ta:m.en}</h3>
      <div class="sub">${kids.map(x=>`<span>${x}</span>`).join("")}</div>
      <span class="cat-open"><i class="bi bi-arrow-right-circle-fill"></i> ${t("cat_browse")}</span>
    </div>`; }).join("");
}
function renderBrands(){
  const cards = BRANDS.map(b=>{
    const mark = b.logo
      ? `<img src="${b.logo}" alt="${b.word}">`
      : `<span class="brand-word" style="color:${b.color};background:${b.color}12">${b.word}</span>`;
    return `<div class="brand-chip reveal" title="${b.word}">${mark}</div>`;
  }).join("");
  const more = `<div class="brand-chip brand-more reveal"><span class="bm">+</span><span class="mt">${t("brand_more")}</span></div>`;
  $("#brandGrid").innerHTML = cards + more;
}
function renderServices(){
  $("#servicesGrid").innerHTML = SERVICES.map(s=>`
    <div class="svc-card reveal">
      <div class="svc-top"><span class="svc-ic"><i class="bi ${s.icon}"></i></span><h3>${s[LANG].n}</h3></div>
      <div class="svc-tags">${(LANG==="ta"?s.ta_tags:s.en_tags).map(x=>`<span>${x}</span>`).join("")}</div>
      <a class="svc-wa" href="${waService(s)}" target="_blank" rel="noopener"><i class="bi bi-whatsapp"></i>${t("wa")}</a>
    </div>`).join("");
}
function cardHTML(p){
  const price = p.mrp ? ` · <span class="p-price">MRP ₹${p.mrp}</span>` : "";
  const thumb = p.ph
    ? `<div class="p-thumb ph" data-open="${p.id}" role="button" tabindex="0" aria-label="${pName(p)}" style="--bc:${p.color||'#1f3fb0'}">
         <span class="p-brand">${p.brand}</span>
         <div class="ph-in"><span class="ph-word">${p.brand}</span><span class="ph-nm">${pName(p)}</span></div>
       </div>`
    : `<div class="p-thumb" data-open="${p.id}" role="button" tabindex="0" aria-label="${pName(p)}">
         <span class="p-brand">${p.brand}</span>${p.featured?`<span class="p-fav"><i class="bi bi-star-fill"></i></span>`:""}
         <img src="${p.img}" alt="${pName(p)}" loading="lazy" draggable="false" oncontextmenu="return false">
         <span class="p-shield" aria-hidden="true"></span>
       </div>`;
  return `<div class="col-6 col-md-4 col-lg-3">
    <article class="p-card reveal">
      ${thumb}
      <div class="p-body">
        <h3 class="p-name" data-open="${p.id}">${pName(p)}</h3>
        <p class="p-cat">${filterName(p.cat)}${price}</p>
        <div class="p-ctrl" data-pid="${p.id}">${controlHTML(p.id)}</div>
      </div>
    </article></div>`;
}
function renderPills(){ const _pillsEl=$("#filterPills"); if(_pillsEl) _pillsEl.style.display="none"; return;
  const pills=[
    `<button class="pill ${activeFilter==='all'?'active':''}" data-f="all">${t("filter_all")}</button>`,
    `<button class="pill ${activeFilter==='popular'?'active':''}" data-f="popular"><i class="bi bi-star-fill me-1"></i>${t("filter_popular")}</button>`
  ].concat(FILTERS.map(f=>`<button class="pill ${activeFilter===f.key?'active':''}" data-f="${f.key}">${f[LANG]}</button>`));
  $("#filterPills").innerHTML = pills.join("");
}
function renderProducts(){
  const grid=$("#categoryGrid"), sub=document.querySelector(".prod-subhead"), pg=$("#productsGrid");
  if(!searchTerm){
    if(grid) grid.style.display="";
    if(sub) sub.style.display="";
    pg.className = pg.className.replace(/\bsearching\b/,"").trim();
    pg.innerHTML = "";
    $("#resultCount").textContent=""; const more=$("#loadMore"); if(more) more.style.display="none";
    const sw=document.querySelector(".search-wrap"); if(sw) sw.classList.remove("has-text");
    return;
  }
  // --- searching: hide the category browser, search ALL products (incl. nested) ---
  if(grid) grid.style.display="none";
  if(sub) sub.style.display="none";
  const q=searchTerm.toLowerCase();
  const list=PRODUCTS.filter(p=>{
    const hay=(p.ta.n+" "+p.en.n+" "+(p.ta.d||"")+" "+(p.en.d||"")+" "+p.brand+" "+filterName(p.cat)).toLowerCase();
    return hay.includes(q);
  });
  const page=list.slice(0,shown);
  if(!pg.className.includes("searching")) pg.className=(pg.className+" searching").trim();
  pg.innerHTML = list.length ? page.map(cardHTML).join("")
    : `<div class="col-12 text-center py-5"><i class="bi bi-search" style="font-size:2.4rem;color:var(--line)"></i><p class="mt-3 mb-0" style="color:var(--muted);font-weight:600">${t("no_results")}</p></div>`;
  $("#resultCount").textContent = list.length ? `${list.length} ${t("items")}` : "";
  const more=$("#loadMore");
  if(more){ if(list.length>shown){ more.style.display="inline-flex"; more.textContent=`${t("load_more")} (${list.length-shown})`; } else more.style.display="none"; }
  observeReveal();
}

/* ---------- modal ---------- */
let modalInstance;
function openProduct(id){
  const p=getProduct(id); if(!p) return;
  const photo=$(".pm-photo");
  if(p.ph){ photo.classList.add("ph"); photo.style.setProperty("--bc",p.color||"#1f3fb0"); photo.setAttribute("data-word",p.brand); $("#pmImg").style.display="none"; }
  else { photo.classList.remove("ph"); $("#pmImg").style.display=""; $("#pmImg").src=p.img; $("#pmImg").alt=pName(p); }
  $("#pmBrand").textContent=p.brand;
  $("#pmName").textContent=pName(p);
  $("#pmPrice").innerHTML = p.mrp ? `<i class="bi bi-tag-fill"></i>MRP \u20b9${p.mrp}` : `<i class="bi bi-tag-fill"></i>${t("ask_price")}`;
  $("#pmDesc").textContent=pDesc(p);
  $("#pmWa").href=waProduct(p);
  const pm=$("#pmCtrl"); pm.dataset.pid=p.id; pm.innerHTML=controlHTML(p.id);
  modalInstance=modalInstance||new bootstrap.Modal($("#productModal")); modalInstance.show();
}

/* ---------- cart UI ---------- */
function syncCart(){
  const n=totalQty();
  $("#navCartCount").textContent=n; $("#navCart").classList.toggle("has",n>0);
  const box=$("#cartItems");
  if(!CART.length){ box.innerHTML=`<div class="cart-empty"><i class="bi bi-cart"></i><p>${t("cart_empty")}</p></div>`; $("#cartFoot").style.display="none"; }
  else{
    $("#cartFoot").style.display="block";
    box.innerHTML=CART.map(r=>{ const p=getProduct(r.id); return `
      <div class="cart-row">
        <img src="${p.img}" alt="${pName(p)}">
        <div class="info"><div class="nm">${pName(p)}</div><div class="ct">${p.brand} · ${filterName(p.cat)}</div>
          <div class="qty"><button data-dec="${p.id}"><i class="bi bi-dash-lg"></i></button><span class="n">${r.qty}</span><button data-inc="${p.id}"><i class="bi bi-plus-lg"></i></button></div></div>
        <button class="rm" data-rm="${p.id}" aria-label="Remove"><i class="bi bi-x-circle-fill"></i></button>
      </div>`; }).join("");
    $("#cartTotalNum").textContent=totalQty();
    $("#cartEnquire").href=waCart();
  }
  const pm=$("#pmCtrl"); if(pm&&pm.dataset.pid){ const p=getProduct(pm.dataset.pid); if(p)$("#pmWa").href=waProduct(p); }
}
function toggleCart(open){ $("#cartPanel").classList.toggle("open",open); $("#cartOverlay").classList.toggle("open",open); document.body.style.overflow=open?"hidden":""; }

/* ---------- toast ---------- */
let toastTimer;
function showToast(msg){ const el=$("#toast"); el.querySelector("span").textContent=msg; el.classList.add("show"); clearTimeout(toastTimer); toastTimer=setTimeout(()=>el.classList.remove("show"),1700); }

/* ---------- i18n apply ---------- */
function applyI18n(){
  document.documentElement.lang=LANG;
  $$("[data-i18n]").forEach(el=>el.textContent=t(el.dataset.i18n));
  $$("[data-i18n-html]").forEach(el=>el.innerHTML=t(el.dataset.i18nHtml));
  $$("[data-i18n-ph]").forEach(el=>el.placeholder=t(el.dataset.i18nPh));
  $$("[data-wa]").forEach(el=>el.href=waGeneral());
  $("#langLabel").textContent=LANG==="ta"?"தமிழ்":"English";
  $$(".lang-menu button").forEach(b=>b.classList.toggle("sel",b.dataset.lang===LANG));
}
function setLanguage(l){ LANG=l; try{localStorage.setItem("ssbs_lang",l);}catch(e){} $("#langMenu").classList.remove("open");
  applyI18n(); renderCategories(); renderBrands(); renderServices(); renderPills(); renderProducts(); syncCart(); if(mRoot && $("#catPage").classList.contains("open")) renderMaster(); }

/* ---------- reveal ---------- */
let revObs;
function observeReveal(){
  if(!("IntersectionObserver" in window)){ $$(".reveal").forEach(el=>el.classList.add("in")); return; }
  revObs=revObs||new IntersectionObserver((es)=>{ es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); revObs.unobserve(e.target); } }); },{threshold:.12});
  $$(".reveal:not(.in)").forEach(el=>revObs.observe(el));
}
function initSpy(){
  const links=$$("#nav .nav-link[data-spy]"); const map=links.map(a=>({a,sec:$(a.getAttribute("href"))})).filter(x=>x.sec);
  const obs=new IntersectionObserver((es)=>{ es.forEach(e=>{ if(e.isIntersecting){ links.forEach(l=>l.classList.remove("active")); const m=map.find(x=>x.sec===e.target); if(m)m.a.classList.add("active"); } }); },{rootMargin:"-45% 0px -50% 0px"});
  map.forEach(x=>obs.observe(x.sec));
}

/* ---------- init ---------- */
document.addEventListener("DOMContentLoaded",()=>{
  try{ const s=localStorage.getItem("ssbs_lang"); if(s)LANG=s; }catch(e){}
  $("#year").textContent=new Date().getFullYear();
  $("#mapFrame").src=MAP.embed; $("#mapOpen").href=MAP.open; $("#mapDir").href=MAP.directions; $("#heroDir").href=MAP.directions;

  applyI18n(); renderCategories(); renderBrands(); renderServices(); renderPills(); renderProducts();
  syncCart(); initSpy(); observeReveal();

  document.body.addEventListener("click",(e)=>{
    const inc=e.target.closest("[data-inc]"); if(inc){ e.stopPropagation(); incQty(inc.dataset.inc); return; }
    const dec=e.target.closest("[data-dec]"); if(dec){ e.stopPropagation(); decQty(dec.dataset.dec); return; }
    const rm=e.target.closest("[data-rm]"); if(rm){ e.stopPropagation(); removeRow(rm.dataset.rm); return; }
    const mnode=e.target.closest("[data-mnode]"); if(mnode){ mPath.push(Number(mnode.dataset.mnode)); renderMaster(); $("#catPage").scrollTop=0; return; }
    const mcb=e.target.closest(".cb[data-mdepth]"); if(mcb){ mGoto(Number(mcb.dataset.mdepth)); return; }
    const mcat=e.target.closest("[data-mcat]"); if(mcat){ openCat(mcat.dataset.mcat); return; }
    const open=e.target.closest("[data-open]"); if(open){ openProduct(open.dataset.open); return; }
    const cnode=e.target.closest("[data-cnode]"); if(cnode){ treePath.push(Number(cnode.dataset.cnode)); renderCatPage(); $("#catPage").scrollTop=0; return; }
    const cb=e.target.closest(".cb"); if(cb){ treeGoto(Number(cb.dataset.depth)); return; }
    const tr=e.target.closest("[data-tree]"); if(tr){ openTree(tr.dataset.tree); return; }
    const tile=e.target.closest("[data-filter]"); if(tile){ activeFilter=tile.dataset.filter; shown=PAGE; renderPills(); renderProducts(); $("#products").scrollIntoView({behavior:"smooth"}); return; }
    const pill=e.target.closest(".pill"); if(pill){ activeFilter=pill.dataset.f; shown=PAGE; renderPills(); renderProducts(); return; }
  });
  document.body.addEventListener("keydown",(e)=>{ if((e.key==="Enter"||e.key===" ")&&e.target.matches(".p-thumb,.p-name,.cat-tile")){ e.preventDefault(); e.target.click(); } });

  let ti; const _si=$("#searchInput"); const _sw=document.querySelector(".search-wrap");
  _si.addEventListener("input",(e)=>{
    const v=e.target.value.trim();
    if(_sw) _sw.classList.toggle("has-text", !!e.target.value);
    clearTimeout(ti);
    ti=setTimeout(()=>{
      const wasEmpty=!searchTerm;
      searchTerm=v; shown=PAGE; renderProducts();
      if(searchTerm){ // bring results into view (smooth on mobile + desktop)
        const target=document.querySelector(".prod-subhead")?document.querySelector("#products"):document.querySelector("#products");
        document.querySelector("#products").scrollIntoView({behavior:"smooth",block:"start"});
      }
    },130);
  });
  { const sc=$("#searchClear"); if(sc) sc.addEventListener("click",()=>{ _si.value=""; searchTerm=""; if(_sw)_sw.classList.remove("has-text"); renderProducts(); _si.focus(); }); }

  $("#langBtn").addEventListener("click",(e)=>{ e.stopPropagation(); $("#langMenu").classList.toggle("open"); });
  $$(".lang-menu button").forEach(b=>b.addEventListener("click",()=>setLanguage(b.dataset.lang)));
  document.addEventListener("click",(e)=>{ if(!e.target.closest(".lang-wrap")) $("#langMenu").classList.remove("open"); });

  $("#navCart").addEventListener("click",()=>toggleCart(true));
  $("#cartClose").addEventListener("click",()=>toggleCart(false));
  { const cc=$("#catClose"); if(cc) cc.addEventListener("click",closeTree); const co=$("#catPageOverlay"); if(co) co.addEventListener("click",closeTree); }
  $("#cartOverlay").addEventListener("click",()=>toggleCart(false));
  $("#cartClear").addEventListener("click",clearCart);
  { const lm=$("#loadMore"); if(lm) lm.addEventListener("click",()=>{ shown+=PAGE; renderProducts(); }); }

  const nav=$("#mainNav"), toTop=$("#toTop");
  const onScroll=()=>{ const y=scrollY; nav.classList.toggle("scrolled",y>20); toTop.classList.toggle("show",y>520); };
  window.addEventListener("scroll",onScroll,{passive:true}); onScroll();
  toTop.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));

  $$("#nav .nav-link").forEach(l=>l.addEventListener("click",()=>{ const c=$("#nav"); if(c.classList.contains("show")) new bootstrap.Collapse(c).hide(); }));
});

/* ============================================================================
   Nested category drill-down (Pens, Pencils, Sketch, Erasers, Sharpeners)
   ========================================================================== */
const CATTREE = {
  pens:{ icon:"bi-pen-fill", ta:"பேனாக்கள்", en:"Pens", cat:"writing", nodes:[
    { ta:"பால் பாயிண்ட் பேனா", en:"Ball Point Pen", brand:"Assorted", color:"#1f3fb0", nodes:[
      {ta:"நீலம்", en:"Ball Point Pen — Blue",  brand:"Assorted", color:"#1f5fd0"},
      {ta:"கருப்பு", en:"Ball Point Pen — Black", brand:"Assorted", color:"#23252e"},
      {ta:"சிவப்பு", en:"Ball Point Pen — Red",  brand:"Assorted", color:"#e23b3b"},
      {ta:"இளஞ்சிவப்பு", en:"Ball Point Pen — Pink", brand:"Assorted", color:"#e84393"},
      {ta:"பச்சை", en:"Ball Point Pen — Green", brand:"Assorted", color:"#1da851"},
    ]},
    { ta:"இங்க் பேனா", en:"Ink Pen", brand:"Assorted", color:"#17318c", nodes:[
      {ta:"கார்ட்ரிட்ஜ்", en:"Ink Pen — Cartridges", brand:"Assorted", color:"#2c3e50"},
      {ta:"ஹீரோ", en:"Ink Pen — Hero", brand:"Hero", color:"#c0392b"},
      {ta:"கேம்லின்", en:"Ink Pen — Camlin", brand:"Camlin", color:"#e67e22"},
      {ta:"ஃபிகோ", en:"Ink Pen — Figo", brand:"Figo", color:"#16a085"},
      {ta:"ஃபிளேர்", en:"Ink Pen — Flair", brand:"Flair", color:"#e4002b"},
    ]},
    {ta:"ஸ்டிக் பேனா (அனைத்து வண்ணங்கள்)", en:"Stick Pen (All Colours)", brand:"Assorted", color:"#2b52d8"},
    {ta:"இங்க் பாட்டில்", en:"Ink Bottles", brand:"Assorted", color:"#2c3e50"},
    {ta:"ஃபேன்சி பேனா", en:"Fancy Pens", brand:"Assorted", color:"#8e44ad"},
    {ta:"ஸ்டிக் பேனாக்கள்", en:"Stick Pens", brand:"Assorted", color:"#1f6fd0"},
    {ta:"CD மார்க்கர்", en:"CD Marker", brand:"Assorted", color:"#111827"},
    {ta:"பெர்மனன்ட் மார்க்கர்", en:"Permanent Marker", brand:"Assorted", color:"#7f1d1d"},
    {ta:"வொயிட்போர்டு மார்க்கர்", en:"Whiteboard Marker", brand:"Assorted", color:"#1d4ed8"},
  ]},
  pencils:{ icon:"bi-pencil-fill", ta:"பென்சில்கள்", en:"Pencils", cat:"writing", nodes:[
    {ta:"HB / அப்சரா", en:"HB / Apsara", brand:"Apsara", color:"#1f3fb0"},
    {ta:"டாம்ஸ்", en:"Doms", brand:"DOMS", color:"#e8462b"},
    {ta:"நடராஜ்", en:"Nataraj", brand:"Nataraj", color:"#0e8a5f"},
    {ta:"ஃபேன்சி பென்சில்", en:"Fancy Pencils", brand:"Assorted", color:"#8e44ad"},
    {ta:"2.0 மிமீ பென்சில்", en:"2.0 mm Pencils", brand:"Assorted", color:"#34495e"},
    { ta:"டிப் பென்சில்", en:"Tip Pencils", brand:"Assorted", color:"#16a085", nodes:[
      {ta:"0.5 மிமீ", en:"Pencil Tip — 0.5 mm", brand:"Assorted", color:"#2c3e9e"},
      {ta:"0.7 மிமீ", en:"Pencil Tip — 0.7 mm", brand:"Assorted", color:"#c0392b"},
      {ta:"2.0 மிமீ", en:"Pencil Tip — 2.0 mm", brand:"Assorted", color:"#34495e"},
    ]},
  ]},
  sketch:{ icon:"bi-brush-fill", ta:"ஸ்கெட்ச்", en:"Sketch", cat:"art", nodes:[
    {ta:"அப்சரா ஸ்கெட்ச்", en:"Apsara Sketch Pens", brand:"Apsara", color:"#1f3fb0"},
    {ta:"டாம்ஸ் ஸ்கெட்ச்", en:"Doms Sketch Pens", brand:"DOMS", color:"#e8462b"},
    {ta:"12 கலர் ஸ்கெட்ச்", en:"Sketch Pens — 12 Colours", brand:"Assorted", color:"#f6b301"},
    {ta:"24 கலர் ஸ்கெட்ச்", en:"Sketch Pens — 24 Colours", brand:"Assorted", color:"#8e44ad"},
  ]},
  erasers:{ icon:"bi-eraser-fill", ta:"அழிப்பான்கள்", en:"Erasers", cat:"cutting", nodes:[
    {ta:"டஸ்ட் ஃப்ரீ", en:"Dust Free", brand:"Assorted", color:"#34495e"},
    {ta:"அப்சரா", en:"Apsara", brand:"Apsara", color:"#1f3fb0"},
    {ta:"டாம்ஸ்", en:"Doms", brand:"DOMS", color:"#e8462b"},
  ]},
  sharpeners:{ icon:"bi-triangle-fill", ta:"ஷார்ப்பனர்கள்", en:"Sharpeners", cat:"cutting", nodes:[
    {ta:"அப்சரா", en:"Apsara", brand:"Apsara", color:"#1f3fb0"},
    {ta:"டாம்ஸ்", en:"Doms", brand:"DOMS", color:"#e8462b"},
  ]},
};

/* Turn every leaf into a real (hidden) product so cart + modal work. */
(function buildTree(){
  let id=500;
  const walk=(node,parentCat)=>{
    (node.nodes||[]).forEach(ch=>{
      ch._cat = node.cat || parentCat;
      if(ch.nodes){ walk(ch, ch._cat); }
      else {
        ch._id = id++;
        PRODUCTS.push({ id:ch._id, cat:ch._cat, brand:ch.brand||"Assorted",
          img:(ch.img?`images/products/${ch.img}.jpg`:""), ph:!ch.img, color:ch.color||"#1f3fb0",
          ta:{n:ch.ta,d:(ch.brand||"")+" "+ch.en}, en:{n:ch.en,d:(ch.brand||"")+" "+ch.en},
          featured:false, hidden:true });
      }
    });
  };
  Object.keys(CATTREE).forEach(k=>walk(CATTREE[k], CATTREE[k].cat));
})();

/* Add the 5 drill-down tiles to the top of the Categories section. */
["sharpeners","erasers","sketch","pencils","pens"].forEach(k=>{
  const r=CATTREE[k];
  CATEGORIES.unshift({ key:k, icon:r.icon, tree:k,
    ta:{n:r[ "ta"], items:r.nodes.map(n=>n.ta)},
    en:{n:r.en, items:r.nodes.map(n=>n.en)} });
});

/* ---- drill-down page state + rendering ---- */
let treeRoot=null, treePath=[];
function currentTreeNode(){
  let node=CATTREE[treeRoot];
  for(const idx of treePath) node=node.nodes[idx];
  return node;
}
function treeTitle(node){ return node[LANG]!==undefined ? node[LANG] : (LANG==="ta"?node.ta:node.en); }
function openTree(key){ treeRoot=key; treePath=[]; renderCatPage(); document.body.style.overflow="hidden";
  $("#catPage").classList.add("open"); $("#catPageOverlay").classList.add("open"); }
function closeTree(){ $("#catPage").classList.remove("open"); $("#catPageOverlay").classList.remove("open"); document.body.style.overflow=""; }
function treeGoto(depth){ treePath=treePath.slice(0,depth); renderCatPage(); }
function renderCatPage(){
  const root=CATTREE[treeRoot];
  const node=currentTreeNode();
  // breadcrumb
  let crumbs=[`<button class="cb" data-depth="0">${LANG==="ta"?root.ta:root.en}</button>`];
  let acc=CATTREE[treeRoot];
  treePath.forEach((idx,i)=>{ acc=acc.nodes[idx]; crumbs.push(`<i class="bi bi-chevron-right"></i><button class="cb" data-depth="${i+1}">${LANG==="ta"?acc.ta:acc.en}</button>`); });
  $("#catCrumb").innerHTML = crumbs.join("");
  $("#catTitle").textContent = LANG==="ta"?node.ta||root.ta:node.en||root.en;
  // body: children
  const kids=node.nodes||[];
  const html = kids.map((ch,idx)=>{
    if(ch.nodes){ // subcategory tile -> drill deeper
      const items=ch.nodes.map(n=>LANG==="ta"?n.ta:n.en).slice(0,4);
      return `<div class="col-6 col-md-4 col-lg-3">
        <div class="ct-node reveal" data-cnode="${idx}" role="button" tabindex="0" style="--bc:${ch.color||'#1f3fb0'}">
          <div class="ct-ic"><i class="bi bi-grid-3x3-gap-fill"></i></div>
          <h4>${LANG==="ta"?ch.ta:ch.en}</h4>
          <div class="ct-sub">${items.map(x=>`<span>${x}</span>`).join("")}</div>
          <span class="ct-go"><i class="bi bi-arrow-right"></i></span>
        </div></div>`;
    }
    // leaf = product card with its OWN image + inline Add-to-Cart (no popup)
    const p=getProduct(ch._id);
    const thumb = p.ph
      ? `<div class="p-thumb ph" style="--bc:${p.color||'#1f3fb0'}"><div class="ph-in"><span class="ph-nm">${pName(p)}</span></div></div>`
      : `<div class="p-thumb"><img src="${p.img}" alt="${pName(p)}" loading="lazy" draggable="false" oncontextmenu="return false"><span class="p-shield"></span></div>`;
    return `<div class="col-6 col-md-4 col-lg-3">
      <article class="p-card reveal">
        ${thumb}
        <div class="p-body">
          <h3 class="p-name">${pName(p)}</h3>
          <p class="p-cat">${p.brand}</p>
          <div class="p-ctrl" data-pid="${p.id}">${controlHTML(p.id)}</div>
        </div>
      </article></div>`;
  }).join("");
  $("#catPageBody").innerHTML = `<div class="row g-3 g-md-4">${html}</div>`;
  observeReveal();
}

/* ============================================================================
   MASTER CATEGORY TREE — one scalable system for the WHOLE catalogue.
   Every main category opens a nested page (Category → Sub → Child → Products).
   Products already in PRODUCTS are auto-attached as leaves by their `cat`.
   To add depth in future, just nest more { ta,en,icon,color, nodes:[...] }.
   ========================================================================== */
const MASTER = [
  { key:"stationery", icon:"bi-pencil-fill", color:"#1f3fb0", ta:"ஸ்டேஷனரி", en:"Stationery", nodes:[
      { ta:"பேனா, பென்சில் & ஸ்கெட்ச்", en:"Pen, Pencil & Sketch", icon:"bi-pen-fill", color:"#1f3fb0",
        refs:["pens","pencils","sketch","erasers","sharpeners"] },   // reuse the detailed CATTREE
      { ta:"பேப்பர் & நோட்டு", en:"Paper & Notebooks", icon:"bi-journal-text", color:"#2c3e9e", auto:"paper" },
      { ta:"ஃபைல் & ஃபோல்டர்", en:"Files & Filing", icon:"bi-folder-fill", color:"#17318c", auto:"filing" },
      { ta:"ஃபாஸ்டனர் & பசை", en:"Fasteners & Adhesives", icon:"bi-paperclip", color:"#34495e", auto:"fasteners" },
      { ta:"கட்டிங் & அளவீடு", en:"Cutting & Measuring", icon:"bi-scissors", color:"#16a085", auto:"cutting" },
  ]},
  { key:"art", icon:"bi-palette-fill", color:"#e8462b", ta:"கலை & கலர்", en:"Art & Colours", auto:"art" },
  { key:"fancy", icon:"bi-stars", color:"#e84393", ta:"ஃபேன்சி & பார்ட்டி", en:"Fancy & Party", auto:"fancy" },
  { key:"toys", icon:"bi-controller", color:"#f39c12", ta:"பொம்மைகள்", en:"Toys & Games", auto:"toys" },
  { key:"project", icon:"bi-cpu-fill", color:"#2c3e50", ta:"புராஜெக்ட்", en:"Project Items", auto:"project" },
  { key:"other", icon:"bi-box-seam", color:"#607d8b", ta:"பிற பொருட்கள்", en:"Other", auto:"other" },
];

/* attach a product-list node: pulls all visible PRODUCTS of a category as leaves */
function autoNode(catKey){
  return PRODUCTS.filter(p=>!p.hidden && p.cat===catKey)
    .map(p=>({ _id:p.id, ta:p.ta.n, en:p.en.n, brand:p.brand, color:p.color }));
}
/* expand refs (to CATTREE roots) + auto (to product categories) into real nodes */
(function buildMaster(){
  const expand=(node)=>{
    if(node.refs){ node.nodes=(node.nodes||[]).concat(node.refs.map(k=>{
        const r=CATTREE[k]; return { ta:r.ta, en:r.en, icon:r.icon, color:r.color||"#1f3fb0", _root:k, nodes:r.nodes }; })); delete node.refs; }
    if(node.auto){ node.nodes=(node.nodes||[]).concat(autoNode(node.auto)); delete node.auto; }
    (node.nodes||[]).forEach(expand);
  };
  MASTER.forEach(expand);
})();
const MASTER_BY_KEY = Object.fromEntries(MASTER.map(m=>[m.key,m]));

/* ---- unified nested navigation over MASTER ---- */
let mRoot=null, mPath=[];
function mNode(){ let n=MASTER_BY_KEY[mRoot]; for(const i of mPath) n=n.nodes[i]; return n; }
function openCat(key){ mRoot=key; mPath=[]; renderMaster(); document.body.style.overflow="hidden";
  $("#catPage").classList.add("open"); $("#catPageOverlay").classList.add("open"); $("#catPage").scrollTop=0; }
function mGoto(d){ mPath=mPath.slice(0,d); renderMaster(); $("#catPage").scrollTop=0; }
function renderMaster(){
  const root=MASTER_BY_KEY[mRoot]; const node=mNode();
  let acc=root, crumbs=[`<button class="cb" data-mdepth="0">${LANG==="ta"?root.ta:root.en}</button>`];
  mPath.forEach((idx,i)=>{ acc=acc.nodes[idx]; crumbs.push(`<i class="bi bi-chevron-right"></i><button class="cb" data-mdepth="${i+1}">${LANG==="ta"?acc.ta:acc.en}</button>`); });
  $("#catCrumb").innerHTML=crumbs.join("");
  $("#catTitle").textContent = LANG==="ta"?node.ta:node.en;
  const kids=node.nodes||[];
  const html=kids.map((ch,idx)=>{
    if(ch.nodes && ch.nodes.length){        // category/sub-category tile -> go deeper
      const sample=ch.nodes.map(n=>LANG==="ta"?n.ta:n.en).slice(0,4);
      return `<div class="col-6 col-md-4 col-lg-3">
        <div class="ct-node reveal" data-mnode="${idx}" role="button" tabindex="0" style="--bc:${ch.color||'#1f3fb0'}">
          <div class="ct-ic"><i class="bi ${ch.icon||'bi-grid-3x3-gap-fill'}"></i></div>
          <h4>${LANG==="ta"?ch.ta:ch.en}</h4>
          <div class="ct-sub">${sample.map(x=>`<span>${x}</span>`).join("")}</div>
          <span class="ct-go"><i class="bi bi-arrow-right"></i></span>
        </div></div>`;
    }
    const p=getProduct(ch._id);            // leaf product -> own card + inline Add to Cart
    const thumb = (!p||p.ph)
      ? `<div class="p-thumb ph" style="--bc:${(p&&p.color)||ch.color||'#1f3fb0'}"><div class="ph-in"><span class="ph-nm">${p?pName(p):(LANG==='ta'?ch.ta:ch.en)}</span></div></div>`
      : `<div class="p-thumb"><img src="${p.img}" alt="${pName(p)}" loading="lazy" draggable="false" oncontextmenu="return false"><span class="p-shield"></span></div>`;
    return `<div class="col-6 col-md-4 col-lg-3"><article class="p-card reveal">${thumb}
      <div class="p-body"><h3 class="p-name">${p?pName(p):''}</h3><p class="p-cat">${p?p.brand:''}</p>
        <div class="p-ctrl" data-pid="${p?p.id:''}">${p?controlHTML(p.id):''}</div></div></article></div>`;
  }).join("");
  $("#catPageBody").innerHTML=`<div class="row g-3 g-md-4">${html}</div>`;
  observeReveal();
}
