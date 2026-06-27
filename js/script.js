/* ==========================================================================
   ஸ்ரீ சிவா புத்தக நிலையம் — Sri Siva Book Store
   script.js  •  single-page catalog logic
   - Tamil is the default language; English is optional (toggle in navbar)
   - Real product photographs only (images/products/)
   - Quantity-based enquiry list -> one WhatsApp message with all items & qty
   - No invented prices: the shop quotes price & stock over WhatsApp, so each
     card shows "விலை கேளுங்கள் / Ask price" instead of a made-up number.
   ========================================================================== */

/* ---------- Store ---------- */
const STORE = {
  phone:  "919150620572",          // WhatsApp + primary call (no + / spaces)
  phone1Display: "+91 9150620572",
  phone2: "919003703237",
  phone2Display: "+91 9003703237",
};

/* ---------- Google Maps ----------
   >> Replace the three links below with your exact Google Maps share link
      for the shop (Maps -> Share -> Copy link). Until then these point to a
      search for the shop name in Uthangarai.                                 */
const MAP = {
  embed:      "https://maps.google.com/maps?q=Sri%20Siva%20Book%20Store%2C%20Uthangarai%2C%20Tamil%20Nadu&z=15&output=embed",
  open:       "https://www.google.com/maps/search/?api=1&query=Sri+Siva+Book+Store+Uthangarai+Tamil+Nadu",
  directions: "https://www.google.com/maps/dir/?api=1&destination=Sri+Siva+Book+Store+Uthangarai+Tamil+Nadu",
};

/* ---------- i18n dictionary ---------- */
const I18N = {
  ta:{
    brand_name:"ஸ்ரீ சிவா புத்தக நிலையம்",
    brand_sub:"ஊத்தங்கரை, தமிழ்நாடு",
    hero_title:'ஸ்ரீ சிவா <span class="hl">புத்தக நிலையம்</span>',
    nav_home:"முகப்பு", nav_categories:"வகைகள்", nav_services:"சேவைகள்",
    nav_products:"பொருட்கள்", nav_about:"எங்களைப் பற்றி", nav_contact:"தொடர்பு",
    cart_label:"விசாரணைப் பட்டியல்",

    hero_loc:"ஊத்தங்கரை • தமிழ்நாடு",
    hero_tagline:"ஸ்டேஷனரி | ஜெராக்ஸ் | பிரிண்ட் அவுட் | லேமினேசன் | ஸ்பைரல் பைண்டிங் | பர்த்டே & கிஃப்ட் பொருட்கள்",
    btn_view_products:"பொருட்களைப் பார்க்கவும்",
    btn_wa_contact:"வாட்ஸ்அப்பில் தொடர்பு கொள்ளுங்கள்",
    hero_mini:"வாட்ஸ்அப்பில் ஆர்டர் கேளுங்கள்",

    trust1:"உண்மையான பொருட்கள்", trust2:"நியாயமான விலை",
    trust3:"வாட்ஸ்அப் விசாரணை", trust4:"உள்ளூர் கடை",

    cat_eyebrow:"நாங்கள் வைத்திருப்பவை", cat_title:"பொருள் வகைகள்",
    cat_lead:"ஒரு வகையைத் தட்டினால் அந்தப் பொருட்களுக்குச் செல்லலாம்.",

    svc_eyebrow:"எங்கள் சேவைகள்", svc_title:"பிரிண்ட் & பைண்டிங் சேவைகள்",
    svc_lead:"பிரிண்ட் அவுட், ஜெராக்ஸ், லேமினேசன், ஸ்பைரல் பைண்டிங் — அனைத்தும் ஒரே இடத்தில்.",
    svc_enquire:"இந்தச் சேவையைக் கேளுங்கள்",

    prod_eyebrow:"பார்த்து • கேளுங்கள்", prod_title:"எங்கள் பொருட்கள்",
    prod_lead:"எந்தப் பொருளையும் தட்டி விவரங்களைப் பார்க்கவும். தேவையானவற்றைப் பட்டியலில் சேர்த்து வாட்ஸ்அப்பில் கேளுங்கள்.",
    search_ph:"பொருட்களைத் தேடுங்கள்…",
    filter_all:"அனைத்தும்",
    items:"பொருட்கள்",
    no_results:"பொருட்கள் எதுவும் கிடைக்கவில்லை. வேறு வார்த்தையில் தேடிப் பாருங்கள்.",
    ask_price:"விலை கேளுங்கள்",
    add_cart:"பட்டியலில் சேர்",

    about_eyebrow:"எங்களைப் பற்றி", about_title:"ஸ்ரீ சிவா புத்தக நிலையம்",
    about_p1:"ஊத்தங்கரை மற்றும் சுற்றுவட்டாரத்தில் உள்ள மாணவர்கள், பெற்றோர்கள், அலுவலகங்களுக்குத் தேவையான ஸ்டேஷனரி, புராஜெக்ட் பொருட்கள், பிரிண்டிங் சேவைகள், பார்ட்டி மற்றும் கிஃப்ட் பொருட்கள் அனைத்தையும் ஒரே கூரையின் கீழ் வழங்கும் நம்பகமான கடை.",
    about_p2:"பொருட்களை இங்கே பார்த்துவிட்டு, விலை மற்றும் இருப்பு அறிய ஒரு சிறிய வாட்ஸ்அப் செய்தி அனுப்புங்கள் — கணக்கு தேவையில்லை, ஆன்லைன் பணம் இல்லை, எளிய விசாரணை மட்டுமே.",
    about_btn:"பொருட்களைப் பார்க்கவும்",
    af1_h:"ஒரே இடத்தில் அனைத்தும்", af1_p:"ஸ்டேஷனரி, புராஜெக்ட், பார்ட்டி & கிஃப்ட் பொருட்கள்",
    af2_h:"பிரிண்ட் & பைண்டிங்", af2_p:"ஜெராக்ஸ், லேமினேசன், ஸ்பைரல் பைண்டிங்",
    af3_h:"மாணவர்களுக்கு ஏற்றது", af3_p:"பள்ளி & கல்லூரி தேவைகள் அனைத்தும்",
    af4_h:"எளிய விசாரணை", af4_p:"வாட்ஸ்அப்பில் விலை & இருப்பு உடனே",

    contact_eyebrow:"தொடர்பு கொள்ள", contact_title:"எங்களைத் தொடர்பு கொள்ளுங்கள்",
    contact_lead:"விலை மற்றும் இருப்பு குறித்து அறிய அழைக்கவும் அல்லது வாட்ஸ்அப் செய்யவும்.",
    c_store:"கடை பெயர்", c_phone:"தொலைபேசி", c_wa:"வாட்ஸ்அப்", c_loc:"இடம்",
    c_loc_val:"ஊத்தங்கரை, தமிழ்நாடு",
    map_dir:"வழிகாட்டு", map_open:"கூகுள் மேப்ஸில் திறக்கவும்",
    cta_title:"உடனடி விசாரணை",
    cta_p:"உங்களுக்குத் தேவையான பொருளை அனுப்புங்கள் — விலை & இருப்பு விவரங்களை உடனே தெரிவிக்கிறோம்.",
    call_store:"கடைக்கு அழைக்கவும்",

    foot_about:"ஊத்தங்கரையில் ஸ்டேஷனரி, புராஜெக்ட் பொருட்கள், பிரிண்டிங், பார்ட்டி & கிஃப்ட் பொருட்கள் வழங்கும் நம்பகமான உள்ளூர் கடை.",
    foot_explore:"பகுதிகள்", foot_contact:"தொடர்பு",
    foot_wa:"வாட்ஸ்அப்பில் தொடர்பு கொள்ளுங்கள்",
    rights:"ஸ்ரீ சிவா புத்தக நிலையம், ஊத்தங்கரை. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",

    cart_title:"விசாரணைப் பட்டியல்",
    cart_empty:"உங்கள் பட்டியல் காலியாக உள்ளது. பொருட்களைச் சேர்த்து வாட்ஸ்அப்பில் கேளுங்கள்.",
    cart_total:"மொத்தப் பொருட்கள்",
    cart_enquire:"வாட்ஸ்அப்பில் கேளுங்கள்",
    cart_clear:"பட்டியலை அழிக்கவும்",
    toast_added:"பட்டியலில் சேர்க்கப்பட்டது",
    enquire_wa:"வாட்ஸ்அப்பில் கேளுங்கள்",
    wa:"வாட்ஸ்அப்",
  },
  en:{
    brand_name:"Sri Siva Book Store",
    brand_sub:"Uthangarai, Tamil Nadu",
    hero_title:'Sri Siva <span class="hl">Book Store</span>',
    nav_home:"Home", nav_categories:"Categories", nav_services:"Services",
    nav_products:"Products", nav_about:"About", nav_contact:"Contact",
    cart_label:"Enquiry list",

    hero_loc:"Uthangarai • Tamil Nadu",
    hero_tagline:"Stationery | Xerox | Print Out | Lamination | Spiral Binding | Birthday & Gift Items",
    btn_view_products:"View Products",
    btn_wa_contact:"Contact on WhatsApp",
    hero_mini:"Ask & order on WhatsApp",

    trust1:"Real Products", trust2:"Fair Prices",
    trust3:"WhatsApp Enquiry", trust4:"Local Store",

    cat_eyebrow:"What we stock", cat_title:"Product Categories",
    cat_lead:"Tap a category to jump to those products.",

    svc_eyebrow:"Our services", svc_title:"Print & Binding Services",
    svc_lead:"Print out, Xerox, lamination and spiral binding — all in one place.",
    svc_enquire:"Ask about this service",

    prod_eyebrow:"Browse • enquire", prod_title:"Our Products",
    prod_lead:"Tap any product for details. Add what you need to your list and ask on WhatsApp.",
    search_ph:"Search products…",
    filter_all:"All",
    items:"items",
    no_results:"No products found. Try another word.",
    ask_price:"Ask price",
    add_cart:"Add to list",

    about_eyebrow:"About us", about_title:"Sri Siva Book Store",
    about_p1:"A trusted store serving students, parents and offices in and around Uthangarai with stationery, project items, printing services, party and gift items — all under one roof.",
    about_p2:"Browse here, then send a quick WhatsApp message to check price and availability — no accounts, no online payment, just a simple friendly enquiry.",
    about_btn:"View products",
    af1_h:"Everything in one place", af1_p:"Stationery, project, party & gift items",
    af2_h:"Print & Binding", af2_p:"Xerox, lamination, spiral binding",
    af3_h:"Made for students", af3_p:"School & college needs covered",
    af4_h:"Easy enquiry", af4_p:"Price & stock on WhatsApp, instantly",

    contact_eyebrow:"Get in touch", contact_title:"Contact Us",
    contact_lead:"Call or WhatsApp us for price and availability.",
    c_store:"Store Name", c_phone:"Phone", c_wa:"WhatsApp", c_loc:"Location",
    c_loc_val:"Uthangarai, Tamil Nadu",
    map_dir:"Get Directions", map_open:"Open in Google Maps",
    cta_title:"Quick enquiry",
    cta_p:"Message the item you need — we'll reply with price and stock right away.",
    call_store:"Call the store",

    foot_about:"Your trusted local store in Uthangarai for stationery, project items, printing, party and gift items.",
    foot_explore:"Sections", foot_contact:"Get in touch",
    foot_wa:"Contact us on WhatsApp",
    rights:"Sri Siva Book Store, Uthangarai. All rights reserved.",

    cart_title:"Enquiry list",
    cart_empty:"Your list is empty. Add products and ask on WhatsApp.",
    cart_total:"Total items",
    cart_enquire:"Enquire on WhatsApp",
    cart_clear:"Clear list",
    toast_added:"Added to list",
    enquire_wa:"Enquire on WhatsApp",
    wa:"WhatsApp",
  }
};

/* ---------- Categories ---------- */
const CATEGORIES = [
  { key:"stationery", icon:"bi-pencil-fill", ta:{n:"ஸ்டேஷனரி",b:"பேனா, பென்சில், நோட்டுப் புத்தகங்கள்"}, en:{n:"Stationery",b:"Pens, pencils, notebooks & more"} },
  { key:"art",        icon:"bi-palette-fill",ta:{n:"கலை & கைவினை",b:"கலர் பென்சில், கிரேயான்ஸ், வாட்டர் & போஸ்டர் கலர், ஸ்கெட்ச்"}, en:{n:"Art & Craft",b:"Colour & poster colours, crayons, sketch pens"} },
  { key:"paper",      icon:"bi-file-earmark-text-fill",ta:{n:"பேப்பர் & பிரிண்டிங்",b:"A4, A3, லீகல், சார்ட் பேப்பர்"}, en:{n:"Papers & Printing",b:"A4, A3, legal & chart papers"} },
  { key:"project",    icon:"bi-cpu-fill",   ta:{n:"புராஜெக்ட் பொருட்கள்",b:"மோட்டார், வயர், க்ளூ, சார்ட்"}, en:{n:"Project Items",b:"Motors, wires, glue, charts"} },
  { key:"party",      icon:"bi-balloon-heart-fill",ta:{n:"பார்ட்டி பொருட்கள்",b:"பலூன், டெக்கரேஷன், பாப்பர்"}, en:{n:"Party Supplies",b:"Balloons, decorations, poppers"} },
  { key:"toys",       icon:"bi-controller", ta:{n:"பொம்மைகள் & கேம்ஸ்",b:"க்யூப், கார், ஏரோபிளேன், ஸ்பின்னர்"}, en:{n:"Toys & Games",b:"Cubes, cars, planes, spinners"} },
  { key:"gifts",      icon:"bi-gift-fill",  ta:{n:"பரிசு & ரிட்டர்ன் கிஃப்ட்",b:"கிஃப்ட் பாக்ஸ், ரிட்டர்ன் கிஃப்ட்"}, en:{n:"Gifts & Return Gifts",b:"Gift boxes & return gifts"} },
  { key:"fancy",      icon:"bi-stars",      ta:{n:"ஃபேன்சி பொருட்கள்",b:"ரிப்பன், ஃபாயில் ரோல், டெக்கர்"}, en:{n:"Fancy Items",b:"Ribbons, foil rolls, decor"} },
  { key:"school",     icon:"bi-backpack-fill",ta:{n:"பள்ளி பொருட்கள்",b:"பவுச், எக்ஸாம் பேட், கிட்"}, en:{n:"School Supplies",b:"Pouches, exam pads, kits"} },
];

/* ---------- Products (REAL photos, no invented prices) ---------- */
const P = (id,key,img,ta,en,featured)=>({id,category:key,img:`images/products/${img}.jpg`,ta,en,featured:!!featured});
const PRODUCTS = [
  P(1,"stationery","stationery-mix",{n:"பேனா, பென்சில் & ஸ்கெட்ச்",d:"பேனா, பென்சில், ஸ்கெட்ச் பேனா, ஸ்கேல் — அன்றாடப் பயன்பாட்டுக்கான ஸ்டேஷனரித் தொகுப்பு."},{n:"Pens, Pencils & Sketch",d:"Pens, pencils, sketch pens, scales and everyday stationery essentials."},true),
  P(2,"stationery","notebooks",{n:"நோட்டுப் புத்தகங்கள் & பேட்",d:"ரூல்டு நோட்டுப் புத்தகங்கள், ஸ்பைரல் பேட் — பள்ளி மற்றும் அலுவலகப் பயன்பாட்டுக்கு."},{n:"Note Books & Pads",d:"Ruled notebooks and spiral pads for school and office use."},true),
  P(3,"stationery","office-tools",{n:"ஸ்டேப்லர், பஞ்ச் & ஆபீஸ்",d:"ஸ்டேப்லர், பஞ்ச், டேப், மார்க்கர், ஹைலைட்டர், ஸ்டிக்கி நோட்ஸ் போன்ற ஆபீஸ் பொருட்கள்."},{n:"Stapler, Punch & Office",d:"Stapler, punch, tape, markers, highlighters and sticky notes."}),
  P(4,"stationery","stationery-cluster",{n:"கவர்கள் & கிளிப் போர்டு",d:"போஸ்ட் கவர், ஆபீஸ் கவர், கிளிப் போர்டு உள்ளிட்ட ஸ்டேஷனரிப் பொருட்கள்."},{n:"Covers & Clip Boards",d:"Post covers, office covers, clip boards and assorted stationery."}),
  P(10,"art","colour-pencils",{n:"கலர் பென்சில்",d:"பிரகாசமான நிறங்களில் கலர் பென்சில் செட். வாட்டர் கலர், போஸ்டர் கலர், ஸ்கெட்ச் பேனாவும் கடையில் கிடைக்கும்."},{n:"Colour Pencils",d:"Bright colour pencil sets. Water colours, poster colours and sketch pens are also available in store."},true),
  P(11,"art","crayons",{n:"கிரேயான்ஸ் & பவுச்",d:"மென்மையாக வரையும் கிரேயான்ஸ், வேரைட்டி பவுச் தொகுப்பு."},{n:"Crayons & Pouches",d:"Smooth-glide crayons and variety pouch sets."}),
  P(20,"paper","project-craft",{n:"சார்ட் & பிக்சர் சார்ட்",d:"வண்ணச் சார்ட் பேப்பர், பிக்சர் சார்ட் — பள்ளி புராஜெக்ட் வேலைகளுக்கு."},{n:"Chart & Picture Charts",d:"Coloured chart papers and picture charts for school projects."},true),
  P(30,"project","project-electronics",{n:"மோட்டார், வயர் & LED",d:"மோட்டார், டிரோன் மோட்டார், பம்ப் மோட்டார், கலர் வயர், HW பேட்டரி, LED விளக்குகள்."},{n:"Motors, Wires & LED",d:"Motor, drone motor, pump motor, colour wires, HW battery and LED lights."},true),
  P(31,"project","project-craft",{n:"ஃபெவிகால், க்ளூ & க்ளூ கன்",d:"ஃபெவிகால், க்ளூ, க்ளூ கன் — புராஜெக்ட் மற்றும் கைவினை வேலைகளுக்கு."},{n:"Fevicol, Glue & Glue Gun",d:"Fevicol, glue and glue gun for projects and craft work."}),
  P(32,"project","project-items",{n:"புராஜெக்ட் கிட் (முழுமையானது)",d:"மோட்டார், ஃபேன், ஸ்விட்ச், வயர், க்ளூ, சார்ட் — புராஜெக்ட்டுக்குத் தேவையான அனைத்தும்."},{n:"Full Project Kit",d:"Motor, fan, switch, wires, glue and charts — everything a project needs."}),
  P(40,"party","balloons",{n:"பலூன்கள்",d:"பல்வேறு வண்ணங்களில் பலூன்கள் — பிறந்தநாள் மற்றும் கொண்டாட்டங்களுக்கு. கேண்டில், ரிப்பன் ஸ்ப்ரே, பர்த்டே காம்போ செட்டும் கடையில் கிடைக்கும்."},{n:"Balloons",d:"Assorted colour balloons for birthdays and celebrations. Candles, ribbon spray and birthday combo sets are also available in store."},true),
  P(41,"party","party-hats",{n:"பார்ட்டி தொப்பி & பிளோயர்",d:"பிறந்தநாள் பார்ட்டி தொப்பிகள் மற்றும் பிளோயர்கள்."},{n:"Party Hats & Blowers",d:"Birthday party cone hats and blowers."}),
  P(42,"party","party-spray",{n:"பார்ட்டி ஸ்னோ ஸ்ப்ரே",d:"கொண்டாட்டங்களுக்கான ஸ்னோ ஸ்ப்ரே கேன்."},{n:"Party Snow Spray",d:"Snow spray cans to brighten any celebration."}),
  P(43,"party","party-poppers",{n:"பார்ட்டி பாப்பர்",d:"வண்ணக் காகிதம் வெளியேற்றும் பார்ட்டி பாப்பர் டியூப்கள்."},{n:"Party Poppers",d:"Confetti-launching party popper tubes."},true),
  P(44,"party","garlands",{n:"மாலைகள் & டெக்கரேஷன்",d:"டின்செல் மாலைகள் மற்றும் தொங்கும் அலங்காரப் பொருட்கள்."},{n:"Garlands & Decorations",d:"Tinsel garlands and hanging decorations."}),
  P(45,"party","paper-fans",{n:"பேப்பர் ஃபேன் டெக்கர்",d:"வண்ணப் பேப்பர் ஃபேன் மாலை — பின்னணி அலங்காரத்துக்கு."},{n:"Paper Fan Decor",d:"Colourful paper-fan garlands for backdrops."}),
  P(46,"party","wreath",{n:"டெக்கரேட்டிவ் ரீத்",d:"பளபளப்பான டெக்கரேட்டிவ் ரீத் — கதவு மற்றும் சுவர் அலங்காரம்."},{n:"Decorative Wreath",d:"Sparkly decorative wreath for doors and walls."}),
  // Toys & Games (real photos)
  P(80,"toys","cube",{n:"மேஜிக் க்யூப் (16 பீஸ் பேட்)",d:"2-இன்-1 மேஜிக் இன்டலிஜென்ஸ் க்யூப் — 16 பீஸ் பேட். குழந்தைகளின் மூளைக்கு பயிற்சி தரும் புதிர் க்யூப்."},{n:"Magic Cube (16 pc pad)",d:"2-in-1 magic intelligence cubes, 16 pc pad — fun brain-teaser puzzle cubes for kids."},true),
  P(81,"toys","skewb",{n:"ஸ்க்யூப் க்யூப்",d:"ஸ்டிக்கர்லெஸ் ஸ்க்யூப் ஸ்பீட் க்யூப் — பிரகாசமான நிறங்களில் சவாலான புதிர்."},{n:"Skewb Cube",d:"Stickerless skewb speed cube — a colourful, challenging puzzle."}),
  P(82,"toys","spinner",{n:"ஃபிட்ஜெட் ஸ்பின்னர் (ஸ்மால்)",d:"பல்வேறு வண்ணங்களில் சிறிய ஃபிட்ஜெட் ஸ்பின்னர்கள் — ரிட்டர்ன் கிஃப்ட்டுக்கு ஏற்றது."},{n:"Fidget Spinner (Small)",d:"Small fidget spinners in assorted colours — great as return gifts."},true),
  P(83,"toys","aeroplane",{n:"டை-காஸ்ட் ஏரோபிளேன் (4 பீஸ்)",d:"மெட்டல் பாடி புல்-பேக் டை-காஸ்ட் ஏரோபிளேன் செட் (4 பீஸ்) — 3+ வயது குழந்தைகளுக்கு."},{n:"Die-cast Aeroplane (4 pc)",d:"Metal-body pull-back die-cast aeroplane set (4 pc) for ages 3+."},true),
  P(84,"toys","cars",{n:"டை-காஸ்ட் கார்கள் (மெட்டல்)",d:"மெட்டல் பாடி புல்-பேக் டை-காஸ்ட் கார் மாடல்கள் — மிக்ஸ் வெரைட்டி பேக்."},{n:"Die-cast Cars (Metal)",d:"Metal-body pull-back die-cast car models — mixed variety pack."},true),

  P(50,"gifts","gift-boxes",{n:"கிஃப்ட் பாக்ஸ்",d:"அழகாக அலங்கரிக்கப்பட்ட கிஃப்ட் பாக்ஸ்கள் — அனைத்து சந்தர்ப்பங்களுக்கும்."},{n:"Gift Boxes",d:"Beautifully wrapped gift boxes for every occasion."},true),
  P(51,"gifts","gift-bows",{n:"கிஃப்ட் போ & பரிசு",d:"கிஃப்ட் போ, ரிப்பன் மற்றும் பரிசுப் பொருட்கள்."},{n:"Gift Bows & Presents",d:"Gift pull-bows, ribbons and present items."}),
  P(52,"gifts","confetti",{n:"கான்ஃபெட்டி பாப்பர்",d:"வண்ண கான்ஃபெட்டி — கொண்டாட்டங்களுக்கு."},{n:"Confetti Poppers",d:"Colourful confetti for celebrations."}),
  P(53,"gifts","tassels",{n:"தொங்கும் டாஸல்ஸ்",d:"வண்ணத் தொங்கும் டாஸல்ஸ் அலங்காரப் பொருட்கள்."},{n:"Hanging Tassels",d:"Colourful hanging tassel decorations."}),
  P(60,"fancy","ribbons",{n:"ரிப்பன்கள்",d:"பல்வேறு வண்ணம் மற்றும் அகலத்தில் சாடின் & கிளிட்டர் ரிப்பன்கள்."},{n:"Ribbons",d:"Satin and glitter ribbons in many colours and widths."},true),
  P(61,"fancy","foil-rolls",{n:"ஃபாயில் & ராப்பிங் ரோல்",d:"பளபளப்பான ஃபாயில் ராப்பிங் பேப்பர் ரோல்கள்."},{n:"Foil & Wrapping Rolls",d:"Shiny foil wrapping paper rolls."}),
  P(62,"fancy","pinwheel",{n:"பின்வீல் & ஃபேன்சி டெக்கர்",d:"பின்வீல் மற்றும் ஃபேன்சி அலங்காரப் பொருட்கள்."},{n:"Pinwheel & Fancy Decor",d:"Pinwheels and fancy decorative items."}),
  P(70,"school","exam-kit",{n:"எக்ஸாம் கிட் & வேரைட்டி பவுச்",d:"எக்ஸாம் பேட், வேரைட்டி பவுச், எக்ஸிகியூட்டிவ் கிட் — மாணவர்களுக்குத் தேவையான அனைத்தும்."},{n:"Exam Kit & Variety Pouch",d:"Exam pads, variety pouches and executive kits for students."},true),
  P(71,"school","magnet",{n:"மேக்னெட் (U & பார்) — 20 பீஸ்",d:"ஸ்ட்ராங் ஸ்டீல் மேக்னெட் சார்ட் (20 பீஸ்) — U மற்றும் பார் மேக்னெட். அறிவியல் பாடம் மற்றும் புராஜெக்ட் வேலைகளுக்கு ஏற்றது."},{n:"Magnets (U & Bar) — 20 pc",d:"Strong steel magnet chart (20 pc) — U and bar magnets, ideal for science lessons and projects."}),
];

/* ---------- Services ---------- */
const SERVICES = [
  { img:"xerox",          icon:"bi-printer-fill",   ta:{n:"பிரிண்ட் அவுட் & ஜெராக்ஸ்",d:"வண்ண மற்றும் பிளாக் & வைட் பிரிண்ட் அவுட், ஜெராக்ஸ் காப்பி."},  en:{n:"Print Out & Xerox",d:"Colour and black & white print outs, photocopy / Xerox."}, ta_tags:["கலர்","B&W (A4)","ஜெராக்ஸ்"], en_tags:["Colour","B&W (A4)","Xerox"] },
  { img:"laminator",      icon:"bi-card-image",     ta:{n:"லேமினேசன்",d:"A3, A4, பாஸ்போர்ட் சைஸ், லீகல் சைஸ் மற்றும் சர்டிஃபிகேட் லேமினேசன்."}, en:{n:"Lamination",d:"A3, A4, passport size, legal size and certificate lamination."}, ta_tags:["A3","A4","பாஸ்போர்ட்","சர்டிஃபிகேட்"], en_tags:["A3","A4","Passport","Certificate"] },
  { img:"spiral-binding", icon:"bi-journal-bookmark-fill", ta:{n:"ஸ்பைரல் பைண்டிங்",d:"A3, A4, லீகல் சைஸ் ஸ்பைரல் பைண்டிங் — புராஜெக்ட் & ரெக்கார்டுகளுக்கு."}, en:{n:"Spiral Binding",d:"A3, A4 and legal size spiral binding for projects and records."}, ta_tags:["A3","A4","லீகல்"], en_tags:["A3","A4","Legal"] },
  { img:"office-tools",   icon:"bi-sticky-fill",    ta:{n:"ஸ்டிக்கர் பிரிண்டிங்",d:"ஸ்டிக்கர் பேப்பர் பிரிண்டிங் — லேபிள் மற்றும் புராஜெக்ட் பயன்பாட்டுக்கு."}, en:{n:"Sticker Printing",d:"Sticker paper printing for labels and project use."}, ta_tags:["ஸ்டிக்கர்","லேபிள்"], en_tags:["Sticker","Label"] },
];

/* ====================================================================== */
let LANG = "ta";
let activeFilter = "all";
let searchTerm = "";
let CART = loadCart();   // [{id, qty}]

const $  = (s,el=document)=>el.querySelector(s);
const $$ = (s,el=document)=>[...el.querySelectorAll(s)];
const t  = (k)=> (I18N[LANG] && I18N[LANG][k]) || k;
const getProduct = (id)=> PRODUCTS.find(p=>p.id===Number(id));
const catName = (key)=>{ const c=CATEGORIES.find(x=>x.key===key); return c? c[LANG].n : key; };
const pName = (p)=> p[LANG].n;
const pDesc = (p)=> p[LANG].d;

/* ---------- Cart model (quantity based) ---------- */
function loadCart(){
  try{
    const raw = JSON.parse(localStorage.getItem("ssbs_cart_v2")||"[]");
    return Array.isArray(raw)? raw.filter(r=>r && r.id && r.qty>0) : [];
  }catch(e){ return []; }
}
function saveCart(){ try{ localStorage.setItem("ssbs_cart_v2", JSON.stringify(CART)); }catch(e){} }
const qtyOf = (id)=>{ const r=CART.find(x=>x.id===Number(id)); return r? r.qty : 0; };
const totalQty = ()=> CART.reduce((s,r)=>s+r.qty,0);
function setQty(id, q){
  id=Number(id); q=Math.max(0,q);
  const r=CART.find(x=>x.id===id);
  if(q===0){ CART=CART.filter(x=>x.id!==id); }
  else if(r){ r.qty=q; }
  else{ CART.push({id,qty:q}); }
  saveCart();
}
function incQty(id){ const was=qtyOf(id); setQty(id, was+1); if(was===0) showToast(t("toast_added")); afterCartChange(id); }
function decQty(id){ setQty(id, qtyOf(id)-1); afterCartChange(id); }
function removeRow(id){ setQty(id,0); afterCartChange(id); }
function clearCart(){ CART=[]; saveCart(); afterCartChange(); }

/* ---------- WhatsApp links ---------- */
function waBase(text){ return "https://wa.me/"+STORE.phone+"?text="+encodeURIComponent(text); }
function waGeneral(){
  const msg = LANG==="ta"
    ? "வணக்கம் ஸ்ரீ சிவா புத்தக நிலையம்,\n\nஉங்கள் பொருட்கள் / சேவைகள் பற்றி அறிய விரும்புகிறேன்."
    : "Hello Sri Siva Book Store,\n\nI would like to know more about your products and services.";
  return waBase(msg);
}
function waProduct(p){
  const q = Math.max(1, qtyOf(p.id));
  const line = `• ${pName(p)} × ${q}`;
  const msg = LANG==="ta"
    ? `வணக்கம் ஸ்ரீ சிவா புத்தக நிலையம்,\n\nஇந்தப் பொருளில் ஆர்வமாக உள்ளேன்:\n\n${line}\n\nதயவுசெய்து விலை மற்றும் இருப்பைத் தெரிவியுங்கள்.`
    : `Hello Sri Siva Book Store,\n\nI am interested in:\n\n${line}\n\nPlease share the price and availability.`;
  return waBase(msg);
}
function waService(s){
  const name = s[LANG].n;
  const msg = LANG==="ta"
    ? `வணக்கம் ஸ்ரீ சிவா புத்தக நிலையம்,\n\n"${name}" சேவை பற்றி அறிய விரும்புகிறேன். விலை மற்றும் விவரங்களைத் தெரிவியுங்கள்.`
    : `Hello Sri Siva Book Store,\n\nI'd like to know about your "${name}" service. Please share rates and details.`;
  return waBase(msg);
}
function waCart(){
  if(!CART.length) return waGeneral();
  const lines = CART.map((r,i)=>{ const p=getProduct(r.id); return `${i+1}. ${pName(p)} × ${r.qty}`; }).join("\n");
  const msg = LANG==="ta"
    ? `வணக்கம் ஸ்ரீ சிவா புத்தக நிலையம்,\n\nகீழ்க்கண்ட பொருட்களில் ஆர்வமாக உள்ளேன்:\n\n${lines}\n\nதயவுசெய்து விலை மற்றும் இருப்பைத் தெரிவியுங்கள்.`
    : `Hello Sri Siva Book Store,\n\nI am interested in the following products:\n\n${lines}\n\nPlease share the prices and availability.`;
  return waBase(msg);
}

/* ---------- Quantity control markup ---------- */
function controlHTML(id){
  const q = qtyOf(id);
  if(q===0){
    return `<button class="add-btn" data-inc="${id}"><i class="bi bi-bag-plus"></i>${t("add_cart")}</button>`;
  }
  return `<div class="qty" role="group" aria-label="quantity">
    <button data-dec="${id}" aria-label="−"><i class="bi bi-dash-lg"></i></button>
    <span class="n">${q}</span>
    <button data-inc="${id}" aria-label="+"><i class="bi bi-plus-lg"></i></button>
  </div>`;
}
function afterCartChange(id){
  if(id!=null){
    $$(`.p-ctrl[data-pid="${id}"]`).forEach(el=> el.innerHTML = controlHTML(id));
    const pm=$("#pmCtrl"); if(pm && Number(pm.dataset.pid)===Number(id)) pm.innerHTML = controlHTML(id);
  }
  syncCartUI();
}

/* ---------- Render: categories ---------- */
function renderCategories(){
  $("#categoryGrid").innerHTML = CATEGORIES.map(c=>`
    <div class="col-6 col-md-4 col-lg-3">
      <div class="cat-card reveal" data-cat="${c.key}" role="button" tabindex="0">
        <div class="cat-ico"><i class="bi ${c.icon}"></i></div>
        <h3>${c[LANG].n}</h3>
        <p>${c[LANG].b}</p>
      </div>
    </div>`).join("");
}

/* ---------- Render: services ---------- */
function renderServices(){
  $("#servicesGrid").innerHTML = SERVICES.map(s=>`
    <div class="col-sm-6 col-lg-3">
      <div class="svc-card reveal">
        <div class="svc-photo">
          <img src="images/products/${s.img}.jpg" alt="${s[LANG].n}" loading="lazy">
          <div class="svc-ico"><i class="bi ${s.icon}"></i></div>
        </div>
        <div class="svc-body">
          <h3>${s[LANG].n}</h3>
          <p>${s[LANG].d}</p>
          <div class="svc-tags">${(LANG==="ta"?s.ta_tags:s.en_tags).map(x=>`<span>${x}</span>`).join("")}</div>
          <a class="btn btn-wa" href="${waService(s)}" target="_blank" rel="noopener"><i class="bi bi-whatsapp me-1"></i>${t("svc_enquire")}</a>
        </div>
      </div>
    </div>`).join("");
}

/* ---------- Render: filter pills ---------- */
function renderPills(){
  const pills = [`<button class="pill ${activeFilter==='all'?'active':''}" data-f="all">${t("filter_all")}</button>`]
    .concat(CATEGORIES.map(c=>`<button class="pill ${activeFilter===c.key?'active':''}" data-f="${c.key}">${c[LANG].n}</button>`));
  $("#filterPills").innerHTML = pills.join("");
}

/* ---------- Render: products ---------- */
function cardHTML(p){
  return `<div class="col-6 col-md-4 col-lg-3">
    <article class="p-card reveal">
      <div class="p-thumb" data-open="${p.id}" role="button" tabindex="0" aria-label="${pName(p)}">
        <span class="p-badge">${catName(p.category)}</span>
        <span class="p-zoom"><i class="bi bi-arrows-fullscreen"></i></span>
        <img src="${p.img}" alt="${pName(p)}" loading="lazy">
      </div>
      <div class="p-body">
        <h3 class="p-name" data-open="${p.id}">${pName(p)}</h3>
        <span class="p-price"><i class="bi bi-tag-fill"></i>${t("ask_price")}</span>
        <div class="p-ctrl" data-pid="${p.id}">${controlHTML(p.id)}</div>
      </div>
    </article>
  </div>`;
}
function renderProducts(){
  let list = PRODUCTS.filter(p=>{
    const okCat = activeFilter==="all" || p.category===activeFilter;
    const hay = (p.ta.n+" "+p.en.n+" "+p.ta.d+" "+p.en.d+" "+catName(p.category)).toLowerCase();
    const okSearch = !searchTerm || hay.includes(searchTerm.toLowerCase());
    return okCat && okSearch;
  });
  const grid = $("#productsGrid");
  grid.innerHTML = list.length
    ? list.map(cardHTML).join("")
    : `<div class="col-12 text-center py-5"><i class="bi bi-search" style="font-size:2.2rem;color:var(--line)"></i><p class="mt-3 mb-0" style="color:var(--muted)">${t("no_results")}</p></div>`;
  $("#resultCount").textContent = list.length ? `${list.length} ${t("items")}` : "";
  observeReveal();
}

/* ---------- Product modal ---------- */
let modalInstance;
function openProduct(id){
  const p = getProduct(id); if(!p) return;
  $("#pmImg").src = p.img; $("#pmImg").alt = pName(p);
  $("#pmBadge").textContent = catName(p.category);
  $("#pmName").textContent = pName(p);
  $("#pmPrice").innerHTML = `<i class="bi bi-tag-fill"></i>${t("ask_price")}`;
  $("#pmDesc").textContent = pDesc(p);
  $("#pmWa").href = waProduct(p);
  const pm=$("#pmCtrl"); pm.dataset.pid=p.id; pm.innerHTML=controlHTML(p.id);
  modalInstance = modalInstance || new bootstrap.Modal($("#productModal"));
  modalInstance.show();
}

/* ---------- Cart UI ---------- */
function syncCartUI(){
  const n = totalQty();
  $("#navCartCount").textContent = n;
  $("#navCart").classList.toggle("has", n>0);
  renderCartPanel();
  // keep modal WA link fresh if open
  const pm=$("#pmCtrl"); if(pm && pm.dataset.pid){ const p=getProduct(pm.dataset.pid); if(p) $("#pmWa").href=waProduct(p); }
}
function renderCartPanel(){
  const box = $("#cartItems");
  if(!CART.length){
    box.innerHTML = `<div class="cart-empty"><i class="bi bi-bag"></i><p>${t("cart_empty")}</p></div>`;
    $("#cartFoot").style.display = "none";
    return;
  }
  $("#cartFoot").style.display = "block";
  box.innerHTML = CART.map(r=>{ const p=getProduct(r.id); return `
    <div class="cart-row">
      <img src="${p.img}" alt="${pName(p)}">
      <div class="info">
        <div class="nm">${pName(p)}</div>
        <div class="ct">${catName(p.category)}</div>
        <div class="qty">
          <button data-dec="${p.id}" aria-label="−"><i class="bi bi-dash-lg"></i></button>
          <span class="n">${r.qty}</span>
          <button data-inc="${p.id}" aria-label="+"><i class="bi bi-plus-lg"></i></button>
        </div>
      </div>
      <button class="rm" data-rm="${p.id}" aria-label="Remove"><i class="bi bi-x-circle-fill"></i></button>
    </div>`; }).join("");
  $("#cartTotalNum").textContent = totalQty();
  $("#cartEnquire").href = waCart();
}
function toggleCart(open){
  $("#cartPanel").classList.toggle("open", open);
  $("#cartOverlay").classList.toggle("open", open);
  document.body.style.overflow = open ? "hidden" : "";
}

/* ---------- Toast ---------- */
let toastTimer;
function showToast(msg){
  const el = $("#toast"); el.querySelector("span").textContent = msg;
  el.classList.add("show"); clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>el.classList.remove("show"), 1700);
}

/* ---------- Language ---------- */
function applyI18n(){
  document.documentElement.lang = LANG;
  $$("[data-i18n]").forEach(el=> el.textContent = t(el.dataset.i18n));
  $$("[data-i18n-html]").forEach(el=> el.innerHTML = t(el.dataset.i18nHtml));
  $$("[data-i18n-ph]").forEach(el=> el.placeholder = t(el.dataset.i18nPh));
  $$("[data-wa]").forEach(el=> el.href = waGeneral());
  $("#langLabel").textContent = LANG==="ta" ? "தமிழ்" : "English";
  $$(".lang-menu button").forEach(b=> b.classList.toggle("sel", b.dataset.lang===LANG));
}
function setLanguage(l){
  LANG = l;
  try{ localStorage.setItem("ssbs_lang", l); }catch(e){}
  $("#langMenu").classList.remove("open");
  applyI18n();
  renderCategories(); renderServices(); renderPills(); renderProducts();
  syncCartUI();
}

/* ---------- Reveal on scroll ---------- */
let revealObserver;
function observeReveal(){
  if(!("IntersectionObserver" in window)){ $$(".reveal").forEach(el=>el.classList.add("in")); return; }
  revealObserver = revealObserver || new IntersectionObserver((ents)=>{
    ents.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); revealObserver.unobserve(e.target); } });
  },{threshold:.12});
  $$(".reveal:not(.in)").forEach(el=>revealObserver.observe(el));
}

/* ---------- Scrollspy ---------- */
function initScrollSpy(){
  const links = $$("#nav .nav-link[data-spy]");
  const map = links.map(a=>({a, sec:$(a.getAttribute("href"))})).filter(x=>x.sec);
  const obs = new IntersectionObserver((ents)=>{
    ents.forEach(e=>{ if(e.isIntersecting){
      links.forEach(l=>l.classList.remove("active"));
      const m = map.find(x=>x.sec===e.target); if(m) m.a.classList.add("active");
    }});
  },{rootMargin:"-45% 0px -50% 0px"});
  map.forEach(x=>obs.observe(x.sec));
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", ()=>{
  try{ const saved = localStorage.getItem("ssbs_lang"); if(saved) LANG = saved; }catch(e){}
  $("#year").textContent = new Date().getFullYear();

  // wire Google Maps
  $("#mapFrame").src = MAP.embed;
  $("#mapOpen").href = MAP.open;
  $("#mapDir").href = MAP.directions;

  applyI18n();
  renderCategories(); renderServices(); renderPills(); renderProducts();
  syncCartUI(); initScrollSpy(); observeReveal();

  // delegated clicks
  document.body.addEventListener("click", (e)=>{
    const inc=e.target.closest("[data-inc]"); if(inc){ e.stopPropagation(); incQty(inc.dataset.inc); return; }
    const dec=e.target.closest("[data-dec]"); if(dec){ e.stopPropagation(); decQty(dec.dataset.dec); return; }
    const rm =e.target.closest("[data-rm]");  if(rm){ e.stopPropagation(); removeRow(rm.dataset.rm); return; }
    const open=e.target.closest("[data-open]"); if(open){ openProduct(open.dataset.open); return; }
    const cat=e.target.closest("[data-cat]");
    if(cat){ activeFilter=cat.dataset.cat; renderPills(); renderProducts(); $("#products").scrollIntoView({behavior:"smooth"}); return; }
    const pill=e.target.closest(".pill"); if(pill){ activeFilter=pill.dataset.f; renderPills(); renderProducts(); return; }
  });
  // keyboard activate cards/categories
  document.body.addEventListener("keydown",(e)=>{
    if((e.key==="Enter"||e.key===" ") && e.target.matches(".p-thumb,.p-name,.cat-card")){ e.preventDefault(); e.target.click(); }
  });

  // search
  let ti; $("#searchInput").addEventListener("input",(e)=>{
    clearTimeout(ti); ti=setTimeout(()=>{ searchTerm=e.target.value.trim(); renderProducts(); },140);
  });

  // language dropdown
  $("#langBtn").addEventListener("click",(e)=>{ e.stopPropagation(); $("#langMenu").classList.toggle("open"); });
  $$(".lang-menu button").forEach(b=> b.addEventListener("click",()=>setLanguage(b.dataset.lang)));
  document.addEventListener("click",(e)=>{ if(!e.target.closest(".lang-wrap")) $("#langMenu").classList.remove("open"); });

  // cart open/close
  $("#navCart").addEventListener("click",()=>toggleCart(true));
  $("#cartClose").addEventListener("click",()=>toggleCart(false));
  $("#cartOverlay").addEventListener("click",()=>toggleCart(false));
  $("#cartClear").addEventListener("click",clearCart);

  // navbar shadow + back to top
  const nav=$("#mainNav"), toTop=$("#toTop");
  const onScroll=()=>{ const y=scrollY; nav.classList.toggle("scrolled", y>20); toTop.classList.toggle("show", y>520); };
  window.addEventListener("scroll", onScroll, {passive:true}); onScroll();
  toTop.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));

  // close mobile navbar on link tap
  $$("#nav .nav-link").forEach(l=> l.addEventListener("click",()=>{
    const c=$("#nav"); if(c.classList.contains("show")) new bootstrap.Collapse(c).hide();
  }));
});
