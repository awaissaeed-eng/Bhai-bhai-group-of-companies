/* ============================================================
   DATA.JS  —  All business data lives here.
   ============================================================
   HOW TO EDIT:
   - To add a new business   → copy one business {} block and paste it inside the right category.
   - To add a new category   → copy one category {} block and paste it at the end of CATEGORIES.
   - To change a picture     → replace the URL in the "image:" or "thumbnail:" field.
   - To update contact info  → find the business by name and edit phone / email / address.
   - WhatsApp link format    → "https://wa.me/923001234567"  (country code, no + or spaces)
   - Google Map embed        → Go to Google Maps → Share → Embed a map → copy the src="..." URL
   ============================================================ */


/* ─────────────────────────────────────────────────────────────
   SITE-WIDE SETTINGS
   ───────────────────────────────────────────────────────────── */
const SITE = {
  name:        "Bhai Bhai Group of Companies",     // ← Change your group name here
  tagline:     "A Legacy of Excellence",           // ← Change tagline
  description: "Trusted across industries since 2005, BB Group brings together premier businesses in real estate, technology, education, and more.",
  phone:       "+92 519 292 587",                 // ← Main group contact number
  email:       "dcwrwp@gmail.com",                 // ← Main group email
  whatsapp:    "https://wa.me/92 519 292 587",       // ← Main WhatsApp link
  address:     "Gold Crest, GIGA Mall, G.T Road, Islamabad",   // ← Headquarters address
  // ── Social media for the GROUP (not individual businesses) ──
  social: {
    facebook:  "https://facebook.com/bbgroup",     // ← or "" to hide
    instagram: "https://instagram.com/bbgroup",
    linkedin:  "https://linkedin.com/company/bbgroup",
    youtube:   "",                                  // ← leave "" to hide
  },
  // ── EmailJS config (used in the contact form) ──────────────
  // Sign up free at https://www.emailjs.com/ then fill in below:
  emailjs: {
    serviceId:  "YOUR_SERVICE_ID",   // ← From EmailJS dashboard
    templateId: "YOUR_TEMPLATE_ID",  // ← From EmailJS dashboard
    publicKey:  "YOUR_PUBLIC_KEY",   // ← From EmailJS dashboard
  },
  // ── Default map shown on homepage (paste Google Maps embed src) ──
  defaultMapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.123456789!2d73.0479!3d33.7292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQzJzQ1LjEiTiA3M8KwMDInNTIuNCJF!5e0!3m2!1sen!2spk!4v1234567890",
};


/* ─────────────────────────────────────────────────────────────
   CATEGORIES  —  10 categories, each with its businesses
   ─────────────────────────────────────────────────────────────
   FIELD GUIDE FOR EACH CATEGORY:
     id          → unique short text, no spaces (used in URL)
     name        → displayed category name
     icon        → emoji shown on category card
     description → one sentence about this category
     image       → URL of category cover image  ← PASTE IMAGE URL HERE
     color       → accent color for this category (hex code)

   FIELD GUIDE FOR EACH BUSINESS inside a category:
     id          → unique short text, no spaces (used in URL)
     name        → business name
     tagline     → one short punchy line
     description → 2–3 sentences about the business
     thumbnail   → card image URL  ← PASTE IMAGE URL HERE
     gallery     → array of image URLs for the photo gallery  ← PASTE IMAGE URLS HERE
     established → year business started
     services    → array of services offered
     phone       → contact phone
     email       → contact email
     address     → full address (also used for map label)
     whatsapp    → WhatsApp link ("https://wa.me/92XXXXXXXXXX")
     website     → business website URL or "" to hide
     mapSrc      → Google Maps embed src URL  ← PASTE EMBED URL HERE
     social:
       facebook  → URL or ""
       instagram → URL or ""
       linkedin  → URL or ""
       youtube   → URL or ""
     featured    → true = shown in "Featured" section on homepage
   ───────────────────────────────────────────────────────────── */

const CATEGORIES = [

  /* ══════════════════════════════════════════════════════════
     CATEGORY 1: Real Estate & Builders
     ══════════════════════════════════════════════════════════ */
  {
    id:          "real-estate",
    name:        "Real Estate & Builders",
    icon:        "🏗️",
    description: "Premium residential and commercial construction projects.",
    image:       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",  // ← REPLACE WITH YOUR IMAGE
    color:       "#7c3aed",

    businesses: [
      {
        id:          "gold_suck",
        name:        "Gold Suck (Giga Mall)",
        tagline:     "Building Dreams, Delivering Quality",
        description: "BB Realty has delivered over 50 premium residential and commercial projects across Islamabad and Rawalpindi. Trusted by thousands of families for transparent dealings and quality construction.",
        thumbnail:   "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600",   // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800",            // ← REPLACE gallery images
          "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800",
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
        ],
        established: "2005",
        services:    ["Residential Construction", "Commercial Projects", "Interior Design", "Property Consultancy"],
        phone:       "+92 300 111 2222",
        email:       "info@bbrealty.com",
        address:     "BB Tower, Blue Area, Islamabad",
        whatsapp:    "https://wa.me/923001112222",
        website:     "https://bbrealty.com",           // ← or "" to hide
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.047!3d33.729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v1",  // ← REPLACE with real embed
        social: {
          facebook:  "https://facebook.com/bbrealty",
          instagram: "https://instagram.com/bbrealty",
          linkedin:  "",
          youtube:   "",
        },
        featured: true,
      },
      {
        id:          "on_the_move",
        name:        "On The Move (UK)",
        tagline:     "Reaching New Heights in Construction",
        description: "Sky Builders specialises in high-rise apartments and commercial plazas in twin cities. Known for on-time delivery and transparent pricing.",
        thumbnail:   "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600",   // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1417144527634-653e3dec77b2?w=800",
          "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=800",
        ],
        established: "2010",
        services:    ["High-Rise Construction", "Apartment Complexes", "Commercial Plazas"],
        phone:       "+92 311 222 3333",
        email:       "info@skybuilders.pk",
        address:     "DHA Phase 2, Islamabad",
        whatsapp:    "https://wa.me/923112223333",
        website:     "",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.1!3d33.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v2",  // ← REPLACE
        social: {
          facebook:  "",
          instagram: "https://instagram.com/skybuilders",
          linkedin:  "",
          youtube:   "",
        },
        featured: false,
      },
      {
        id:          "rsr_enterprises",
        name:        "RSR Enterprises",
        tagline:     "Reaching New Heights in Construction",
        description: "Sky Builders specialises in high-rise apartments and commercial plazas in twin cities. Known for on-time delivery and transparent pricing.",
        thumbnail:   "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600",   // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1417144527634-653e3dec77b2?w=800",
          "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=800",
        ],
        established: "2010",
        services:    ["High-Rise Construction", "Apartment Complexes", "Commercial Plazas"],
        phone:       "+92 311 222 3333",
        email:       "info@skybuilders.pk",
        address:     "DHA Phase 2, Islamabad",
        whatsapp:    "https://wa.me/923112223333",
        website:     "",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.1!3d33.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v2",  // ← REPLACE
        social: {
          facebook:  "",
          instagram: "https://instagram.com/skybuilders",
          linkedin:  "",
          youtube:   "",
        },
        featured: false,
      },
      {
        id:          "the_consultant",
        name:        "The Consultant",
        tagline:     "Reaching New Heights in Construction",
        description: "Sky Builders specialises in high-rise apartments and commercial plazas in twin cities. Known for on-time delivery and transparent pricing.",
        thumbnail:   "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600",   // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1417144527634-653e3dec77b2?w=800",
          "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=800",
        ],
        established: "2010",
        services:    ["High-Rise Construction", "Apartment Complexes", "Commercial Plazas"],
        phone:       "+92 311 222 3333",
        email:       "info@skybuilders.pk",
        address:     "DHA Phase 2, Islamabad",
        whatsapp:    "https://wa.me/923112223333",
        website:     "",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.1!3d33.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v2",  // ← REPLACE
        social: {
          facebook:  "",
          instagram: "https://instagram.com/skybuilders",
          linkedin:  "",
          youtube:   "",
        },
        featured: false,
      },
      {
        id:          "central_biz_hub",
        name:        "Central Biz Hub",
        tagline:     "Reaching New Heights in Construction",
        description: "Sky Builders specialises in high-rise apartments and commercial plazas in twin cities. Known for on-time delivery and transparent pricing.",
        thumbnail:   "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600",   // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1417144527634-653e3dec77b2?w=800",
          "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=800",
        ],
        established: "2010",
        services:    ["High-Rise Construction", "Apartment Complexes", "Commercial Plazas"],
        phone:       "+92 311 222 3333",
        email:       "info@skybuilders.pk",
        address:     "DHA Phase 2, Islamabad",
        whatsapp:    "https://wa.me/923112223333",
        website:     "",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.1!3d33.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v2",  // ← REPLACE
        social: {
          facebook:  "",
          instagram: "https://instagram.com/skybuilders",
          linkedin:  "",
          youtube:   "",
        },
        featured: false,
      },
      {
        id:          "prime_associates",
        name:        "Prime Associates",
        tagline:     "Reaching New Heights in Construction",
        description: "Sky Builders specialises in high-rise apartments and commercial plazas in twin cities. Known for on-time delivery and transparent pricing.",
        thumbnail:   "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600",   // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1417144527634-653e3dec77b2?w=800",
          "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=800",
        ],
        established: "2010",
        services:    ["High-Rise Construction", "Apartment Complexes", "Commercial Plazas"],
        phone:       "+92 311 222 3333",
        email:       "info@skybuilders.pk",
        address:     "DHA Phase 2, Islamabad",
        whatsapp:    "https://wa.me/923112223333",
        website:     "",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.1!3d33.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v2",  // ← REPLACE
        social: {
          facebook:  "",
          instagram: "https://instagram.com/skybuilders",
          linkedin:  "",
          youtube:   "",
        },
        featured: false,
      },
      {
        id:          "innovations",
        name:        "Innovations",
        tagline:     "Reaching New Heights in Construction",
        description: "Sky Builders specialises in high-rise apartments and commercial plazas in twin cities. Known for on-time delivery and transparent pricing.",
        thumbnail:   "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600",   // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1417144527634-653e3dec77b2?w=800",
          "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=800",
        ],
        established: "2010",
        services:    ["High-Rise Construction", "Apartment Complexes", "Commercial Plazas"],
        phone:       "+92 311 222 3333",
        email:       "info@skybuilders.pk",
        address:     "DHA Phase 2, Islamabad",
        whatsapp:    "https://wa.me/923112223333",
        website:     "",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.1!3d33.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v2",  // ← REPLACE
        social: {
          facebook:  "",
          instagram: "https://instagram.com/skybuilders",
          linkedin:  "",
          youtube:   "",
        },
        featured: false,
      },
      {
        id:          "imaginations",
        name:        "Imaginations",
        tagline:     "Reaching New Heights in Construction",
        description: "Sky Builders specialises in high-rise apartments and commercial plazas in twin cities. Known for on-time delivery and transparent pricing.",
        thumbnail:   "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600",   // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1417144527634-653e3dec77b2?w=800",
          "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=800",
        ],
        established: "2010",
        services:    ["High-Rise Construction", "Apartment Complexes", "Commercial Plazas"],
        phone:       "+92 311 222 3333",
        email:       "info@skybuilders.pk",
        address:     "DHA Phase 2, Islamabad",
        whatsapp:    "https://wa.me/923112223333",
        website:     "",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.1!3d33.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v2",  // ← REPLACE
        social: {
          facebook:  "",
          instagram: "https://instagram.com/skybuilders",
          linkedin:  "",
          youtube:   "",
        },
        featured: false,
      },
      // ── ADD MORE BUSINESSES HERE (copy the block above) ──────
    ],
  },


  /* ══════════════════════════════════════════════════════════
     CATEGORY 2: Software & Technology
     ══════════════════════════════════════════════════════════ */
  {
    id:          "software-tech",
    name:        "Software & Technology",
    icon:        "💻",
    description: "Innovative tech solutions, software development and IT services.",
    image:       "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",   // ← REPLACE
    color:       "#00d4ff",

    businesses: [
      {
        id:          "nine_solution",
        name:        "Nine Solution LLC ltd",
        tagline:     "Powering Businesses with Smart Software",
        description: "BB Technologies delivers custom web applications, mobile apps, and ERP systems for businesses of all sizes. 15+ years of software excellence with 200+ delivered projects.",
        thumbnail:   "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800",
        ],
        established: "2008",
        services:    ["Web Development", "Mobile Apps", "ERP Systems", "UI/UX Design", "Cloud Solutions"],
        phone:       "+92 321 333 4444",
        email:       "info@bbtech.pk",
        address:     "I-8 Markaz, Islamabad",
        whatsapp:    "https://wa.me/923213334444",
        website:     "https://bbtech.pk",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.05!3d33.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v3",  // ← REPLACE
        social: {
          facebook:  "https://facebook.com/bbtech",
          instagram: "https://instagram.com/bbtech",
          linkedin:  "https://linkedin.com/company/bbtech",
          youtube:   "",
        },
        featured: true,
      },
      {
        id:          "rainbow_tech",
        name:        "Rainbow Tech",
        tagline:     "Powering Businesses with Smart Software",
        description: "BB Technologies delivers custom web applications, mobile apps, and ERP systems for businesses of all sizes. 15+ years of software excellence with 200+ delivered projects.",
        thumbnail:   "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800",
        ],
        established: "2008",
        services:    ["Web Development", "Mobile Apps", "ERP Systems", "UI/UX Design", "Cloud Solutions"],
        phone:       "+92 321 333 4444",
        email:       "info@bbtech.pk",
        address:     "I-8 Markaz, Islamabad",
        whatsapp:    "https://wa.me/923213334444",
        website:     "https://bbtech.pk",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.05!3d33.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v3",  // ← REPLACE
        social: {
          facebook:  "https://facebook.com/bbtech",
          instagram: "https://instagram.com/bbtech",
          linkedin:  "https://linkedin.com/company/bbtech",
          youtube:   "",
        },
        featured: true,
      },
      {
        id:          "pb_tech",
        name:        "PB Tech",
        tagline:     "Powering Businesses with Smart Software",
        description: "BB Technologies delivers custom web applications, mobile apps, and ERP systems for businesses of all sizes. 15+ years of software excellence with 200+ delivered projects.",
        thumbnail:   "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800",
        ],
        established: "2008",
        services:    ["Web Development", "Mobile Apps", "ERP Systems", "UI/UX Design", "Cloud Solutions"],
        phone:       "+92 321 333 4444",
        email:       "info@bbtech.pk",
        address:     "I-8 Markaz, Islamabad",
        whatsapp:    "https://wa.me/923213334444",
        website:     "https://bbtech.pk",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.05!3d33.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v3",  // ← REPLACE
        social: {
          facebook:  "https://facebook.com/bbtech",
          instagram: "https://instagram.com/bbtech",
          linkedin:  "https://linkedin.com/company/bbtech",
          youtube:   "",
        },
        featured: true,
      },
      {
        id:          "bbgoc_tech",
        name:        "BBGOC Tech",
        tagline:     "Powering Businesses with Smart Software",
        description: "BB Technologies delivers custom web applications, mobile apps, and ERP systems for businesses of all sizes. 15+ years of software excellence with 200+ delivered projects.",
        thumbnail:   "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800",
        ],
        established: "2008",
        services:    ["Web Development", "Mobile Apps", "ERP Systems", "UI/UX Design", "Cloud Solutions"],
        phone:       "+92 321 333 4444",
        email:       "info@bbtech.pk",
        address:     "I-8 Markaz, Islamabad",
        whatsapp:    "https://wa.me/923213334444",
        website:     "https://bbtech.pk",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.05!3d33.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v3",  // ← REPLACE
        social: {
          facebook:  "https://facebook.com/bbtech",
          instagram: "https://instagram.com/bbtech",
          linkedin:  "https://linkedin.com/company/bbtech",
          youtube:   "",
        },
        featured: true,
      },
      {
        id:          "digi_adclick",
        name:        "DIGI ADCLICK",
        tagline:     "Powering Businesses with Smart Software",
        description: "BB Technologies delivers custom web applications, mobile apps, and ERP systems for businesses of all sizes. 15+ years of software excellence with 200+ delivered projects.",
        thumbnail:   "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800",
        ],
        established: "2008",
        services:    ["Web Development", "Mobile Apps", "ERP Systems", "UI/UX Design", "Cloud Solutions"],
        phone:       "+92 321 333 4444",
        email:       "info@bbtech.pk",
        address:     "I-8 Markaz, Islamabad",
        whatsapp:    "https://wa.me/923213334444",
        website:     "https://bbtech.pk",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.05!3d33.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v3",  // ← REPLACE
        social: {
          facebook:  "https://facebook.com/bbtech",
          instagram: "https://instagram.com/bbtech",
          linkedin:  "https://linkedin.com/company/bbtech",
          youtube:   "",
        },
        featured: true,
      },
      // ── ADD MORE BUSINESSES HERE ──────────────────────────────
    ],
  },


  /* ══════════════════════════════════════════════════════════
     CATEGORY 3: Education
     ══════════════════════════════════════════════════════════ */
  {
    id:          "Education",
    name:        "Education",
    icon:        "🎓",
    description: "Schools, academies and coaching centres shaping future generations.",
    image:       "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800",   // ← REPLACE
    color:       "#10b981",

    businesses: [
      {
        id:          "civil_mediation_academy_uk",
        name:        "Civil Mediation Academy UK",
        tagline:     "Excellence in Education",
        description: "BB Academy is a Cambridge-affiliated school offering O-Level and A-Level programmes. Consistent top results with a focus on character and academic excellence.",
        thumbnail:   "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
          "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800",
        ],
        established: "2003",
        services:    ["O-Level Programme", "A-Level Programme", "STEM Labs", "Sports & Activities"],
        phone:       "+92 345 444 5555",
        email:       "admissions@bbacademy.edu.pk",
        address:     "F-7/3, Islamabad",
        whatsapp:    "https://wa.me/923454445555",
        website:     "https://bbacademy.edu.pk",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.04!3d33.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v4",  // ← REPLACE
        social: {
          facebook:  "https://facebook.com/bbacademy",
          instagram: "",
          linkedin:  "",
          youtube:   "https://youtube.com/@bbacademy",
        },
        featured: true,
      },
      {
        id:          "dr_aq_khan_school_system",
        name:        "Dr AQ Khan School System",
        tagline:     "Excellence in Education",
        description: "BB Academy is a Cambridge-affiliated school offering O-Level and A-Level programmes. Consistent top results with a focus on character and academic excellence.",
        thumbnail:   "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
          "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800",
        ],
        established: "2003",
        services:    ["O-Level Programme", "A-Level Programme", "STEM Labs", "Sports & Activities"],
        phone:       "+92 345 444 5555",
        email:       "admissions@bbacademy.edu.pk",
        address:     "F-7/3, Islamabad",
        whatsapp:    "https://wa.me/923454445555",
        website:     "https://bbacademy.edu.pk",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.04!3d33.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v4",  // ← REPLACE
        social: {
          facebook:  "https://facebook.com/bbacademy",
          instagram: "",
          linkedin:  "",
          youtube:   "https://youtube.com/@bbacademy",
        },
        featured: true,
      },
      {
        id:          "karaam",
        name:        "KARAAM",
        tagline:     "Excellence in Education",
        description: "BB Academy is a Cambridge-affiliated school offering O-Level and A-Level programmes. Consistent top results with a focus on character and academic excellence.",
        thumbnail:   "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
          "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800",
        ],
        established: "2003",
        services:    ["O-Level Programme", "A-Level Programme", "STEM Labs", "Sports & Activities"],
        phone:       "+92 345 444 5555",
        email:       "admissions@bbacademy.edu.pk",
        address:     "F-7/3, Islamabad",
        whatsapp:    "https://wa.me/923454445555",
        website:     "https://bbacademy.edu.pk",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.04!3d33.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v4",  // ← REPLACE
        social: {
          facebook:  "https://facebook.com/bbacademy",
          instagram: "",
          linkedin:  "",
          youtube:   "https://youtube.com/@bbacademy",
        },
        featured: true,
      },
      // ── ADD MORE BUSINESSES HERE ──────────────────────────────
    ],
  },


  /* ══════════════════════════════════════════════════════════
     CATEGORY 4: Food & Restaurants
     ══════════════════════════════════════════════════════════ */
  {
    id:          "food-restaurants",
    name:        "Food & Restaurants",
    icon:        "🍽️",
    description: "Premium dining experiences, cafes and food brands.",
    image:       "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",   // ← REPLACE
    color:       "#f59e0b",

    businesses: [
      {
        id:          "lahori_cuisine",
        name:        "Lahori Cuisine",
        tagline:     "Where Every Meal Is a Memory",
        description: "BB Fine Dining brings international cuisine to Islamabad. An elegant setting, expert chefs, and an unforgettable dining experience for every occasion.",
        thumbnail:   "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
        ],
        established: "2015",
        services:    ["Fine Dining", "Private Events", "Corporate Lunches", "Catering"],
        phone:       "+92 300 555 6666",
        email:       "reservations@bbdining.com",
        address:     "Centaurus Mall, Islamabad",
        whatsapp:    "https://wa.me/923005556666",
        website:     "",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.06!3d33.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v5",  // ← REPLACE
        social: {
          facebook:  "https://facebook.com/bbdining",
          instagram: "https://instagram.com/bbdining",
          linkedin:  "",
          youtube:   "",
        },
        featured: false,
      },
      {
        id:          "healthy_and_tasty_foods",
        name:        "Healthy & Tasty Foods",
        tagline:     "Where Every Meal Is a Memory",
        description: "BB Fine Dining brings international cuisine to Islamabad. An elegant setting, expert chefs, and an unforgettable dining experience for every occasion.",
        thumbnail:   "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
        ],
        established: "2015",
        services:    ["Fine Dining", "Private Events", "Corporate Lunches", "Catering"],
        phone:       "+92 300 555 6666",
        email:       "reservations@bbdining.com",
        address:     "Centaurus Mall, Islamabad",
        whatsapp:    "https://wa.me/923005556666",
        website:     "",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.06!3d33.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v5",  // ← REPLACE
        social: {
          facebook:  "https://facebook.com/bbdining",
          instagram: "https://instagram.com/bbdining",
          linkedin:  "",
          youtube:   "",
        },
        featured: false,
      },
      {
        id:          "isons_foods",
        name:        "Isons Foods",
        tagline:     "Where Every Meal Is a Memory",
        description: "BB Fine Dining brings international cuisine to Islamabad. An elegant setting, expert chefs, and an unforgettable dining experience for every occasion.",
        thumbnail:   "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
        ],
        established: "2015",
        services:    ["Fine Dining", "Private Events", "Corporate Lunches", "Catering"],
        phone:       "+92 300 555 6666",
        email:       "reservations@bbdining.com",
        address:     "Centaurus Mall, Islamabad",
        whatsapp:    "https://wa.me/923005556666",
        website:     "",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.06!3d33.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v5",  // ← REPLACE
        social: {
          facebook:  "https://facebook.com/bbdining",
          instagram: "https://instagram.com/bbdining",
          linkedin:  "",
          youtube:   "",
        },
        featured: false,
      },
      {
        id:          "ricoh_pizza",
        name:        "Ricoh Pizza (UK)",
        tagline:     "Where Every Meal Is a Memory",
        description: "BB Fine Dining brings international cuisine to Islamabad. An elegant setting, expert chefs, and an unforgettable dining experience for every occasion.",
        thumbnail:   "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
        ],
        established: "2015",
        services:    ["Fine Dining", "Private Events", "Corporate Lunches", "Catering"],
        phone:       "+92 300 555 6666",
        email:       "reservations@bbdining.com",
        address:     "Centaurus Mall, Islamabad",
        whatsapp:    "https://wa.me/923005556666",
        website:     "",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.06!3d33.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v5",  // ← REPLACE
        social: {
          facebook:  "https://facebook.com/bbdining",
          instagram: "https://instagram.com/bbdining",
          linkedin:  "",
          youtube:   "",
        },
        featured: false,
      },
      
      // ── ADD MORE BUSINESSES HERE ──────────────────────────────
    ],
  },


  /* ══════════════════════════════════════════════════════════
     CATEGORY 5: Health & Fitness
     ══════════════════════════════════════════════════════════ */
  {
    id:          "health_and_fitness",
    name:        "Health & Fitness",
    icon:        "🏥",
    description: "Hospitals, clinics and wellness centres for a healthier community.",
    image:       "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800",   // ← REPLACE
    color:       "#ef4444",

    businesses: [
      {
        id:          "bbgc_club",
        name:        "BBGOC Club",
        tagline:     "Your Health, Our Priority",
        description: "BB Medical Clinic provides general and specialist consultations with a team of 20+ doctors. Modern diagnostic equipment and compassionate care for every patient.",
        thumbnail:   "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800",
          "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800",
        ],
        established: "2012",
        services:    ["General Medicine", "Specialist Consultations", "Diagnostics", "Emergency Care"],
        phone:       "+92 321 666 7777",
        email:       "info@bbclinic.pk",
        address:     "G-9 Markaz, Islamabad",
        whatsapp:    "https://wa.me/923216667777",
        website:     "",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.05!3d33.70!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v6",  // ← REPLACE
        social: {
          facebook:  "https://facebook.com/bbclinic",
          instagram: "",
          linkedin:  "",
          youtube:   "",
        },
        featured: false,
      },
      {
        id:          "diagnostic_and_consultant",
        name:        "Diagnostic & Consultant",
        tagline:     "Your Health, Our Priority",
        description: "BB Medical Clinic provides general and specialist consultations with a team of 20+ doctors. Modern diagnostic equipment and compassionate care for every patient.",
        thumbnail:   "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800",
          "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800",
        ],
        established: "2012",
        services:    ["General Medicine", "Specialist Consultations", "Diagnostics", "Emergency Care"],
        phone:       "+92 321 666 7777",
        email:       "info@bbclinic.pk",
        address:     "G-9 Markaz, Islamabad",
        whatsapp:    "https://wa.me/923216667777",
        website:     "",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.05!3d33.70!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v6",  // ← REPLACE
        social: {
          facebook:  "https://facebook.com/bbclinic",
          instagram: "",
          linkedin:  "",
          youtube:   "",
        },
        featured: false,
      },
      {
        id:          "alpha_laboratory",
        name:        "Alpha Laboratory",
        tagline:     "Your Health, Our Priority",
        description: "BB Medical Clinic provides general and specialist consultations with a team of 20+ doctors. Modern diagnostic equipment and compassionate care for every patient.",
        thumbnail:   "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800",
          "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800",
        ],
        established: "2012",
        services:    ["General Medicine", "Specialist Consultations", "Diagnostics", "Emergency Care"],
        phone:       "+92 321 666 7777",
        email:       "info@bbclinic.pk",
        address:     "G-9 Markaz, Islamabad",
        whatsapp:    "https://wa.me/923216667777",
        website:     "",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.05!3d33.70!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v6",  // ← REPLACE
        social: {
          facebook:  "https://facebook.com/bbclinic",
          instagram: "",
          linkedin:  "",
          youtube:   "",
        },
        featured: false,
      },
      {
        id:          "bin-riaz_diagnostics",
        name:        "Bin Riaz Diagnostics",
        tagline:     "Your Health, Our Priority",
        description: "BB Medical Clinic provides general and specialist consultations with a team of 20+ doctors. Modern diagnostic equipment and compassionate care for every patient.",
        thumbnail:   "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800",
          "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800",
        ],
        established: "2012",
        services:    ["General Medicine", "Specialist Consultations", "Diagnostics", "Emergency Care"],
        phone:       "+92 321 666 7777",
        email:       "info@bbclinic.pk",
        address:     "G-9 Markaz, Islamabad",
        whatsapp:    "https://wa.me/923216667777",
        website:     "",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.05!3d33.70!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v6",  // ← REPLACE
        social: {
          facebook:  "https://facebook.com/bbclinic",
          instagram: "",
          linkedin:  "",
          youtube:   "",
        },
        featured: false,
      },
      // ── ADD MORE BUSINESSES HERE ──────────────────────────────
    ],
  },


  /* ══════════════════════════════════════════════════════════
     CATEGORY 6: Gems & Jewellery
     ══════════════════════════════════════════════════════════ */
  {
    id:          "gems-jewellery",
    name:        "Gems & Jewellery",
    icon:        "💎",
    description: "Exquisite gemstones, gold and fine jewellery collections.",
    image:       "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",   // ← REPLACE
    color:       "#d4a017",

    businesses: [
      {
        id:          "qadeer_jewellers_ltd_uk",
        name:        "Qadeer Jewellers LTD UK",
        tagline:     "Certified Quality, Timeless Beauty",
        description: "BB Gems & Jewels is Islamabad's most trusted jewellery brand since 2001. Offering certified diamonds, emeralds, rubies, and custom gold jewellery crafted by master artisans.",
        thumbnail:   "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
          "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800",
        ],
        established: "2001",
        services:    ["Diamond Jewellery", "Custom Gold Designs", "Gem Certification", "Repairs & Polishing"],
        phone:       "+92 300 777 8888",
        email:       "info@bbgems.pk",
        address:     "Jinnah Super Market, F-7, Islamabad",
        whatsapp:    "https://wa.me/923007778888",
        website:     "https://bbgems.pk",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.03!3d33.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v7",  // ← REPLACE
        social: {
          facebook:  "https://facebook.com/bbgems",
          instagram: "https://instagram.com/bbgems",
          linkedin:  "",
          youtube:   "",
        },
        featured: true,
      },
      {
        id:          "qadeer_jewellers",
        name:        "Qadeer Jewellers",
        tagline:     "Certified Quality, Timeless Beauty",
        description: "BB Gems & Jewels is Islamabad's most trusted jewellery brand since 2001. Offering certified diamonds, emeralds, rubies, and custom gold jewellery crafted by master artisans.",
        thumbnail:   "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
          "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800",
        ],
        established: "2001",
        services:    ["Diamond Jewellery", "Custom Gold Designs", "Gem Certification", "Repairs & Polishing"],
        phone:       "+92 300 777 8888",
        email:       "info@bbgems.pk",
        address:     "Jinnah Super Market, F-7, Islamabad",
        whatsapp:    "https://wa.me/923007778888",
        website:     "https://bbgems.pk",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.03!3d33.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v7",  // ← REPLACE
        social: {
          facebook:  "https://facebook.com/bbgems",
          instagram: "https://instagram.com/bbgems",
          linkedin:  "",
          youtube:   "",
        },
        featured: true,
      },
      {
        id:          "maddrass_collections",
        name:        "Maddrass Collections",
        tagline:     "Certified Quality, Timeless Beauty",
        description: "BB Gems & Jewels is Islamabad's most trusted jewellery brand since 2001. Offering certified diamonds, emeralds, rubies, and custom gold jewellery crafted by master artisans.",
        thumbnail:   "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
          "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800",
        ],
        established: "2001",
        services:    ["Diamond Jewellery", "Custom Gold Designs", "Gem Certification", "Repairs & Polishing"],
        phone:       "+92 300 777 8888",
        email:       "info@bbgems.pk",
        address:     "Jinnah Super Market, F-7, Islamabad",
        whatsapp:    "https://wa.me/923007778888",
        website:     "https://bbgems.pk",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.03!3d33.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v7",  // ← REPLACE
        social: {
          facebook:  "https://facebook.com/bbgems",
          instagram: "https://instagram.com/bbgems",
          linkedin:  "",
          youtube:   "",
        },
        featured: true,
      },
      {
        id:          "royal_gold_smiths",
        name:        "Royal Gold Smiths",
        tagline:     "Certified Quality, Timeless Beauty",
        description: "BB Gems & Jewels is Islamabad's most trusted jewellery brand since 2001. Offering certified diamonds, emeralds, rubies, and custom gold jewellery crafted by master artisans.",
        thumbnail:   "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
          "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800",
        ],
        established: "2001",
        services:    ["Diamond Jewellery", "Custom Gold Designs", "Gem Certification", "Repairs & Polishing"],
        phone:       "+92 300 777 8888",
        email:       "info@bbgems.pk",
        address:     "Jinnah Super Market, F-7, Islamabad",
        whatsapp:    "https://wa.me/923007778888",
        website:     "https://bbgems.pk",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.03!3d33.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v7",  // ← REPLACE
        social: {
          facebook:  "https://facebook.com/bbgems",
          instagram: "https://instagram.com/bbgems",
          linkedin:  "",
          youtube:   "",
        },
        featured: true,
      },
      {
        id:          "designer_collection",
        name:        "Designer Collection",
        tagline:     "Certified Quality, Timeless Beauty",
        description: "BB Gems & Jewels is Islamabad's most trusted jewellery brand since 2001. Offering certified diamonds, emeralds, rubies, and custom gold jewellery crafted by master artisans.",
        thumbnail:   "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
          "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800",
        ],
        established: "2001",
        services:    ["Diamond Jewellery", "Custom Gold Designs", "Gem Certification", "Repairs & Polishing"],
        phone:       "+92 300 777 8888",
        email:       "info@bbgems.pk",
        address:     "Jinnah Super Market, F-7, Islamabad",
        whatsapp:    "https://wa.me/923007778888",
        website:     "https://bbgems.pk",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.03!3d33.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v7",  // ← REPLACE
        social: {
          facebook:  "https://facebook.com/bbgems",
          instagram: "https://instagram.com/bbgems",
          linkedin:  "",
          youtube:   "",
        },
        featured: true,
      },
      {
        id:          "jewel_art_gallery",
        name:        "Jewel Art Gallery",
        tagline:     "Certified Quality, Timeless Beauty",
        description: "BB Gems & Jewels is Islamabad's most trusted jewellery brand since 2001. Offering certified diamonds, emeralds, rubies, and custom gold jewellery crafted by master artisans.",
        thumbnail:   "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
          "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800",
        ],
        established: "2001",
        services:    ["Diamond Jewellery", "Custom Gold Designs", "Gem Certification", "Repairs & Polishing"],
        phone:       "+92 300 777 8888",
        email:       "info@bbgems.pk",
        address:     "Jinnah Super Market, F-7, Islamabad",
        whatsapp:    "https://wa.me/923007778888",
        website:     "https://bbgems.pk",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.03!3d33.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v7",  // ← REPLACE
        social: {
          facebook:  "https://facebook.com/bbgems",
          instagram: "https://instagram.com/bbgems",
          linkedin:  "",
          youtube:   "",
        },
        featured: true,
      },
      {
        id:          "sona_chandi_uk",
        name:        "Sona Chandi UK",
        tagline:     "Certified Quality, Timeless Beauty",
        description: "BB Gems & Jewels is Islamabad's most trusted jewellery brand since 2001. Offering certified diamonds, emeralds, rubies, and custom gold jewellery crafted by master artisans.",
        thumbnail:   "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
          "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800",
        ],
        established: "2001",
        services:    ["Diamond Jewellery", "Custom Gold Designs", "Gem Certification", "Repairs & Polishing"],
        phone:       "+92 300 777 8888",
        email:       "info@bbgems.pk",
        address:     "Jinnah Super Market, F-7, Islamabad",
        whatsapp:    "https://wa.me/923007778888",
        website:     "https://bbgems.pk",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.03!3d33.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v7",  // ← REPLACE
        social: {
          facebook:  "https://facebook.com/bbgems",
          instagram: "https://instagram.com/bbgems",
          linkedin:  "",
          youtube:   "",
        },
        featured: true,
      },
      {
        id:          "dubai_jewel_palace",
        name:        "Dubai Jewel Palace",
        tagline:     "Certified Quality, Timeless Beauty",
        description: "BB Gems & Jewels is Islamabad's most trusted jewellery brand since 2001. Offering certified diamonds, emeralds, rubies, and custom gold jewellery crafted by master artisans.",
        thumbnail:   "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
          "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800",
        ],
        established: "2001",
        services:    ["Diamond Jewellery", "Custom Gold Designs", "Gem Certification", "Repairs & Polishing"],
        phone:       "+92 300 777 8888",
        email:       "info@bbgems.pk",
        address:     "Jinnah Super Market, F-7, Islamabad",
        whatsapp:    "https://wa.me/923007778888",
        website:     "https://bbgems.pk",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.03!3d33.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v7",  // ← REPLACE
        social: {
          facebook:  "https://facebook.com/bbgems",
          instagram: "https://instagram.com/bbgems",
          linkedin:  "",
          youtube:   "",
        },
        featured: true,
      },
      {
        id:          "self_reliance_gold_mining",
        name:        "Self Reliance Gold Mining",
        tagline:     "Certified Quality, Timeless Beauty",
        description: "BB Gems & Jewels is Islamabad's most trusted jewellery brand since 2001. Offering certified diamonds, emeralds, rubies, and custom gold jewellery crafted by master artisans.",
        thumbnail:   "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
          "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800",
        ],
        established: "2001",
        services:    ["Diamond Jewellery", "Custom Gold Designs", "Gem Certification", "Repairs & Polishing"],
        phone:       "+92 300 777 8888",
        email:       "info@bbgems.pk",
        address:     "Jinnah Super Market, F-7, Islamabad",
        whatsapp:    "https://wa.me/923007778888",
        website:     "https://bbgems.pk",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.03!3d33.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v7",  // ← REPLACE
        social: {
          facebook:  "https://facebook.com/bbgems",
          instagram: "https://instagram.com/bbgems",
          linkedin:  "",
          youtube:   "",
        },
        featured: true,
      },
      // ── ADD MORE BUSINESSES HERE ──────────────────────────────
    ],
  },


  /* ══════════════════════════════════════════════════════════
     CATEGORY 7: Security Services
     ══════════════════════════════════════════════════════════ */
  {
    id:          "security",
    name:        "Security Services",
    icon:        "🛡️",
    description: "Professional security guards, CCTV and surveillance solutions.",
    image:       "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",      // ← REPLACE
    color:       "#6b7280",

    businesses: [
      {
        id:          "tight_security_services",
        name:        "Tight Security Services",
        tagline:     "Protecting What Matters Most",
        description: "BB Security Solutions provides trained security personnel, CCTV installation, and access control systems for residential and commercial clients across Pakistan.",
        thumbnail:   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1549924231-f129b911e442?w=800",
          "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800",
        ],
        established: "2009",
        services:    ["Security Guards", "CCTV Installation", "Access Control", "24/7 Monitoring"],
        phone:       "+92 311 888 9999",
        email:       "info@bbsecurity.pk",
        address:     "Bahria Town, Rawalpindi",
        whatsapp:    "https://wa.me/923118889999",
        website:     "",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.18!3d33.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v8",  // ← REPLACE
        social: {
          facebook:  "",
          instagram: "",
          linkedin:  "https://linkedin.com/company/bbsecurity",
          youtube:   "",
        },
        featured: false,
      },
      // ── ADD MORE BUSINESSES HERE ──────────────────────────────
    ],
  },


  /* ══════════════════════════════════════════════════════════
     CATEGORY 8: Electronics
     ══════════════════════════════════════════════════════════ */
  {
    id:          "electronics",
    name:        "Electronics",
    icon:        "🛍️",
    description: "Fashion, electronics, and lifestyle retail stores.",
    image:       "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",   // ← REPLACE
    color:       "#ec4899",

    businesses: [
      {
        id:          "munir_sons_electronic",
        name:        "Munir Sons Electronic",
        tagline:     "Style That Speaks",
        description: "BB Fashion House offers the latest trends in men's and women's clothing, from casual wear to formal collections. Premium fabrics, expert tailoring, and style advice.",
        thumbnail:   "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800",
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800",
        ],
        established: "2016",
        services:    ["Men's Clothing", "Women's Clothing", "Custom Tailoring", "Online Shopping"],
        phone:       "+92 345 999 0000",
        email:       "shop@bbfashion.pk",
        address:     "Gulberg Galleria, Islamabad",
        whatsapp:    "https://wa.me/923459990000",
        website:     "https://bbfashion.pk",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.08!3d33.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v9",  // ← REPLACE
        social: {
          facebook:  "https://facebook.com/bbfashionhouse",
          instagram: "https://instagram.com/bbfashionhouse",
          linkedin:  "",
          youtube:   "",
        },
        featured: false,
      },
      // ── ADD MORE BUSINESSES HERE ──────────────────────────────
    ],
  },


  /* ══════════════════════════════════════════════════════════
     CATEGORY 9: Legal & Professional Services
     ══════════════════════════════════════════════════════════ */
  {
    id:          "legal-services",
    name:        "Legal & Professional Services",
    icon:        "⚖️",
    description: "Law firms, accountants, and business consultants.",
    image:       "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",   // ← REPLACE
    color:       "#8b5cf6",

    businesses: [
      {
        id:          "bin_riaz_attorneys_and_mediator",
        name:        "Bin Riaz Attorneys & Mediator",
        tagline:     "Justice. Integrity. Excellence.",
        description: "BB Law Associates is a full-service law firm handling corporate law, property disputes, family law, and civil litigation. Over 500 cases resolved with a 92% success rate.",
        thumbnail:   "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
          "https://images.unsplash.com/photo-1555448248-2571daf6344b?w=800",
        ],
        established: "2007",
        services:    ["Corporate Law", "Property Disputes", "Family Law", "Civil Litigation"],
        phone:       "+92 300 001 1111",
        email:       "contact@bblaw.pk",
        address:     "Super Market, F-6, Islamabad",
        whatsapp:    "https://wa.me/923000011111",
        website:     "",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.04!3d33.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v10",  // ← REPLACE
        social: {
          facebook:  "",
          instagram: "",
          linkedin:  "https://linkedin.com/company/bblaw",
          youtube:   "",
        },
        featured: false,
      },
      {
        id:          "bbgoc_assayers_in_refine",
        name:        "BBGOC Assayers in Refine",
        tagline:     "Justice. Integrity. Excellence.",
        description: "BB Law Associates is a full-service law firm handling corporate law, property disputes, family law, and civil litigation. Over 500 cases resolved with a 92% success rate.",
        thumbnail:   "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
          "https://images.unsplash.com/photo-1555448248-2571daf6344b?w=800",
        ],
        established: "2007",
        services:    ["Corporate Law", "Property Disputes", "Family Law", "Civil Litigation"],
        phone:       "+92 300 001 1111",
        email:       "contact@bblaw.pk",
        address:     "Super Market, F-6, Islamabad",
        whatsapp:    "https://wa.me/923000011111",
        website:     "",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.04!3d33.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v10",  // ← REPLACE
        social: {
          facebook:  "",
          instagram: "",
          linkedin:  "https://linkedin.com/company/bblaw",
          youtube:   "",
        },
        featured: false,
      },
      {
        id:          "cks_law_pvt_ltd",
        name:        "CKS Law Pvt Ltd",
        tagline:     "Justice. Integrity. Excellence.",
        description: "BB Law Associates is a full-service law firm handling corporate law, property disputes, family law, and civil litigation. Over 500 cases resolved with a 92% success rate.",
        thumbnail:   "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
          "https://images.unsplash.com/photo-1555448248-2571daf6344b?w=800",
        ],
        established: "2007",
        services:    ["Corporate Law", "Property Disputes", "Family Law", "Civil Litigation"],
        phone:       "+92 300 001 1111",
        email:       "contact@bblaw.pk",
        address:     "Super Market, F-6, Islamabad",
        whatsapp:    "https://wa.me/923000011111",
        website:     "",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.04!3d33.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v10",  // ← REPLACE
        social: {
          facebook:  "",
          instagram: "",
          linkedin:  "https://linkedin.com/company/bblaw",
          youtube:   "",
        },
        featured: false,
      },
      // ── ADD MORE BUSINESSES HERE ──────────────────────────────
    ],
  },


  /* ══════════════════════════════════════════════════════════
     CATEGORY 10: Sports & Fitness
     ══════════════════════════════════════════════════════════ */
  {
    id:          "sports-fitness",
    name:        "Sports & Fitness",
    icon:        "🏋️",
    description: "Gyms, sports clubs and wellness centres for an active lifestyle.",
    image:       "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",   // ← REPLACE
    color:       "#f97316",

    businesses: [
      {
        id:          "bb-wellness",
        name:        "BB Wellness Gym",
        tagline:     "Train Hard. Live Better.",
        description: "BB Wellness is a premium gym equipped with state-of-the-art machines, certified personal trainers, swimming pool, and nutrition coaching. Over 2,000 active members.",
        thumbnail:   "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600",  // ← REPLACE
        gallery: [
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
          "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800",
        ],
        established: "2018",
        services:    ["Weight Training", "Cardio Zone", "Swimming Pool", "Personal Training", "Nutrition Plans"],
        phone:       "+92 321 112 2233",
        email:       "info@bbwellness.pk",
        address:     "E-11, Islamabad",
        whatsapp:    "https://wa.me/923211122233",
        website:     "https://bbwellness.pk",
        mapSrc:      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d73.01!3d33.74!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzM!5e0!3m2!1sen!2spk!4v11",  // ← REPLACE
        social: {
          facebook:  "https://facebook.com/bbwellness",
          instagram: "https://instagram.com/bbwellness",
          linkedin:  "",
          youtube:   "https://youtube.com/@bbwellness",
        },
        featured: true,
      },
      // ── ADD MORE BUSINESSES HERE ──────────────────────────────
    ],
  },

];  // ← end of CATEGORIES array


/* ─────────────────────────────────────────────────────────────
   HELPER DATA  —  Computed from CATEGORIES. Do NOT edit below.
   ───────────────────────────────────────────────────────────── */

// Flat list of all businesses (used for search and featured sections)
const ALL_BUSINESSES = CATEGORIES.flatMap((cat) =>
  cat.businesses.map((biz) => ({ ...biz, categoryId: cat.id, categoryName: cat.name, categoryColor: cat.color }))
);

// Only featured businesses
const FEATURED_BUSINESSES = ALL_BUSINESSES.filter((biz) => biz.featured);

// Helper: find a category by id
const getCategoryById = (id) => CATEGORIES.find((c) => c.id === id) || null;

// Helper: find a business by id (searches all categories)
const getBusinessById = (id) => ALL_BUSINESSES.find((b) => b.id === id) || null;
