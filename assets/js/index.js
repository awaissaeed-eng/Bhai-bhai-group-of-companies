/* ============================================================
   INDEX.JS  —  JavaScript logic only for the HOMEPAGE (index.html).
   ============================================================
   This file handles:
     1. Setting hero text from data.js
     2. Rendering stats bar
     3. Rendering category cards
     4. Rendering featured business cards
     5. Rendering gallery images
     6. Rendering contact info section
     7. Social media links
     8. Handling contact form submission via EmailJS
   ============================================================ */


/* ─────────────────────────────────────────────────────────────
   1. SET HERO TEXT
   ─────────────────────────────────────────────────────────────
   Fills in the hero section heading, tagline, and description
   from the SITE object defined in data.js.
   ───────────────────────────────────────────────────────────── */
function renderHero() {
  document.getElementById("heroTitle").textContent       = SITE.name;
  document.getElementById("heroTagline").textContent     = SITE.tagline;
  document.getElementById("heroDescription").textContent = SITE.description;
}


/* ─────────────────────────────────────────────────────────────
   2. RENDER STATS BAR
   ─────────────────────────────────────────────────────────────
   Shows key numbers like "10+ Industries", "50+ Businesses" etc.
   ───────────────────────────────────────────────────────────── */
function renderStats() {
  /* These stats can be changed in the array below */
  const stats = [
    { value: CATEGORIES.length + "+", label: "Industries"     },
    { value: "20+",                   label: "Years of Legacy" },
    { value: ALL_BUSINESSES.length + "+", label: "Businesses" },
    { value: "10,000+",               label: "Happy Clients"   },
  ];

  const container = document.getElementById("statsBar");
  if (!container) return;

  container.innerHTML = stats.map(function (stat) {
    return `
      <div class="reveal">
        <p class="text-4xl font-bold text-brand-purple">${stat.value}</p>
        <p class="mt-1 text-sm text-slate-400 uppercase tracking-widest">${stat.label}</p>
      </div>
    `;
  }).join("");
}


/* ─────────────────────────────────────────────────────────────
   3. RENDER ABOUT SECTION
   ─────────────────────────────────────────────────────────────
   Fills in the about section description and stats grid.
   ───────────────────────────────────────────────────────────── */
function renderAbout() {
  /* Description text */
  const desc = document.getElementById("aboutDescription");
  if (desc) {
    desc.textContent = SITE.description;
  }

  /* About stats grid — 4 numbers in 2×2 grid */
  const aboutStats = [
    { label: "Businesses",        value: ALL_BUSINESSES.length + "+", color: "#7c3aed" },
    { label: "Industries",        value: CATEGORIES.length + "+",     color: "#d4a017" },
    { label: "Projects Completed",value: "200+",                      color: "#00d4ff" },
    { label: "Satisfied Clients", value: "10,000+",                   color: "#10b981" },
  ];

  const container = document.getElementById("aboutStats");
  if (!container) return;

  container.innerHTML = aboutStats.map(function (item) {
    return `
      <div class="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
        <p class="text-3xl font-bold" style="color: ${item.color};">${item.value}</p>
        <p class="mt-1 text-sm text-slate-400">${item.label}</p>
      </div>
    `;
  }).join("");
}


/* ─────────────────────────────────────────────────────────────
   4. RENDER CATEGORY CARDS
   ─────────────────────────────────────────────────────────────
   Creates one card for each category.
   Clicking a card opens category.html?id=CATEGORY_ID
   ───────────────────────────────────────────────────────────── */
function renderCategories() {
  const container = document.getElementById("categoryCards");
  if (!container) return;

  container.innerHTML = CATEGORIES.map(function (category) {
    return `
      <!-- Category card — links to category.html with the category id in URL -->
      <a
        href="category.html?id=${encodeURIComponent(category.id)}"
        class="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70
               transition hover:-translate-y-1 hover:border-brand-purple/40 hover:shadow-xl
               hover:shadow-brand-purple/10 card-glow reveal"
      >
        <!-- Category cover image -->
        <!-- ↓ Image URL is set in data.js for each category ↓ -->
        <div class="relative h-56 overflow-hidden bg-slate-800">
          <img
            src="${category.image}"
            alt="${category.name}"
            class="card-image h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <!-- Dark gradient overlay for text readability -->
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20"></div>

          <!-- Category icon in top-right corner -->
          <div class="absolute top-4 right-4 rounded-full bg-black/40 px-3 py-1 text-xl backdrop-blur">
            ${category.icon}
          </div>
        </div>

        <!-- Card text content -->
        <div class="p-5">
          <h3 class="text-lg font-semibold text-white">${category.name}</h3>
          <p class="mt-1 text-sm text-slate-400 line-clamp-2">${category.description}</p>
          <div class="mt-3 flex items-center justify-between">
            <span class="badge">${category.businesses.length} businesses</span>
            <span class="text-brand-purple text-sm">View →</span>
          </div>
        </div>
      </a>
    `;
  }).join("");
}


/* ─────────────────────────────────────────────────────────────
   5. RENDER FEATURED BUSINESSES
   ─────────────────────────────────────────────────────────────
   Shows only businesses where featured: true in data.js.
   The homepage displays up to 6 businesses, with each one coming
   from a different category.
   Clicking a card opens business.html?id=BUSINESS_ID
   ───────────────────────────────────────────────────────────── */
function getHomepageFeaturedBusinesses() {
  const selected = [];
  const seenCategories = new Set();

  FEATURED_BUSINESSES.forEach(function (biz) {
    if (selected.length >= 6) return;
    if (seenCategories.has(biz.categoryId)) return;

    selected.push(biz);
    seenCategories.add(biz.categoryId);
  });

  return selected;
}

function renderFeatured() {
  const container = document.getElementById("featuredCards");
  if (!container) return;

  const featuredBusinesses = getHomepageFeaturedBusinesses();

  /* If no featured businesses, hide the whole section */
  if (featuredBusinesses.length === 0) {
    document.getElementById("featured").style.display = "none";
    return;
  }

  container.innerHTML = featuredBusinesses.map(function (biz) {
    return `
      <!-- Featured business card -->
      <a
        href="business.html?id=${encodeURIComponent(biz.id)}"
        class="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70
               transition hover:-translate-y-1 hover:border-brand-gold/40 reveal card-glow"
      >
        <!-- Business thumbnail image -->
        <!-- ↓ Image URL is set in data.js for each business ↓ -->
        <div class="relative h-64 overflow-hidden bg-slate-800">
          <img
            src="${biz.thumbnail}"
            alt="${biz.name}"
            class="card-image h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10"></div>

          <!-- Category badge on image -->
          <div class="absolute top-4 left-4">
            <span class="badge">${biz.categoryName}</span>
          </div>
        </div>

        <!-- Card text content -->
        <div class="p-6">
          <p class="text-xs uppercase tracking-widest text-slate-500">${biz.established ? "Est. " + biz.established : ""}</p>
          <h3 class="mt-1 text-xl font-semibold text-white">${biz.name}</h3>
          <p class="mt-2 text-sm text-slate-400 line-clamp-2">${biz.tagline}</p>
        </div>
      </a>
    `;
  }).join("");
}


/* ─────────────────────────────────────────────────────────────
   6. RENDER GALLERY
   ─────────────────────────────────────────────────────────────
   Collects all gallery images from ALL businesses and displays
   the first 9 in a responsive grid. (Too many would slow the page)
   ───────────────────────────────────────────────────────────── */
function renderGallery() {
  const container = document.getElementById("galleryGrid");
  if (!container) return;

  /* Collect gallery images from all businesses (max 9 for homepage) */
  const images = [];
  ALL_BUSINESSES.forEach(function (biz) {
    if (biz.gallery && biz.gallery.length > 0) {
      images.push({ src: biz.gallery[0], alt: biz.name });
    }
  });

  /* Take only the first 9 images */
  const displayImages = images.slice(0, 9);

  container.innerHTML = displayImages.map(function (img) {
    return `
      <!-- Gallery image card -->
      <div class="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 reveal"
           style="height: 240px;">
        <img
          src="${img.src}"
          alt="${img.alt}"
          class="card-image h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <!-- Business name label on hover -->
        <div class="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-slate-950/90 p-4
                    transition duration-300 group-hover:translate-y-0">
          <p class="text-sm font-medium text-white">${img.alt}</p>
        </div>
      </div>
    `;
  }).join("");
}


/* ─────────────────────────────────────────────────────────────
   7. RENDER CONTACT INFO SECTION
   ─────────────────────────────────────────────────────────────
   Shows phone, email, address, and business hours cards.
   ───────────────────────────────────────────────────────────── */
function renderContactInfo() {
  /* ── Contact info cards ──────────────────────────────────── */
  const infoItems = [
    { icon: "📞", label: "Phone",    value: SITE.phone,   sub: "Mon–Sat, 9AM–7PM" },
    { icon: "✉️",  label: "Email",   value: SITE.email,   sub: "Response within 24 hrs" },
    { icon: "📍", label: "Address",  value: SITE.address, sub: "Headquarters"           },
    { icon: "🕐", label: "Hours",    value: "Mon – Sat",  sub: "9:00 AM – 7:00 PM"     },
  ];

  const infoContainer = document.getElementById("contactInfoCards");
  if (infoContainer) {
    infoContainer.innerHTML = infoItems.map(function (item) {
      return `
        <div class="glass-card flex items-start gap-4 rounded-2xl p-5">
          <span class="text-2xl">${item.icon}</span>
          <div>
            <p class="text-xs uppercase tracking-widest text-slate-500">${item.label}</p>
            <p class="mt-1 font-semibold text-white">${item.value}</p>
            <p class="text-xs text-slate-400">${item.sub}</p>
          </div>
        </div>
      `;
    }).join("");
  }

  /* ── WhatsApp link ─────────────────────────────────────── */
  const waLink = document.getElementById("whatsappContactLink");
  if (waLink) {
    waLink.href = SITE.whatsapp;
  }

  /* ── Google Map ────────────────────────────────────────── */
  const mapFrame = document.getElementById("mainMap");
  if (mapFrame && SITE.defaultMapSrc) {
    mapFrame.src = SITE.defaultMapSrc;
  }
}


/* ─────────────────────────────────────────────────────────────
   8. RENDER SOCIAL MEDIA LINKS
   ─────────────────────────────────────────────────────────────
   Shows social icons for platforms that have a URL in SITE.social.
   Icons that have empty "" string are automatically hidden.
   ───────────────────────────────────────────────────────────── */
function renderSocialLinks() {
  const container = document.getElementById("socialLinks");
  if (!container) return;

  /* Define all possible social platforms with their display names */
  const platforms = [
    { key: "facebook",  label: "Facebook",  emoji: "👥" },
    { key: "instagram", label: "Instagram", emoji: "📸" },
    { key: "linkedin",  label: "LinkedIn",  emoji: "💼" },
    { key: "youtube",   label: "YouTube",   emoji: "▶️"  },
  ];

  /* Only show platforms that have a URL set in SITE.social */
  const links = platforms
    .filter(function (p) { return SITE.social[p.key]; })
    .map(function (p) {
      return `
        <a
          href="${SITE.social[p.key]}"
          target="_blank"
          rel="noopener noreferrer"
          title="${p.label}"
          class="social-btn"
          aria-label="${p.label}"
        >
          ${p.emoji}
        </a>
      `;
    })
    .join("");

  container.innerHTML = links || "<p class='text-sm text-slate-500'>No social links added yet.</p>";
}


/* ─────────────────────────────────────────────────────────────
   9. CONTACT FORM SUBMISSION (EmailJS)
   ─────────────────────────────────────────────────────────────
   When the user clicks "Send Message":
     1. We validate the inputs are not empty.
     2. We use EmailJS to send the email.
     3. We show a success or error message.

   SETUP REQUIRED:
     - Go to https://www.emailjs.com/ and create a free account.
     - Create a service (e.g. Gmail) and get your Service ID.
     - Create a template and get your Template ID.
     - Copy your Public Key from Account settings.
     - Paste all three into the SITE.emailjs object in data.js.

   In your EmailJS template, you can use these variables:
     {{from_name}}    → sender's name
     {{from_email}}   → sender's email
     {{subject}}      → email subject
     {{message}}      → message body
     {{to_email}}     → set this to your business email in the template
   ───────────────────────────────────────────────────────────── */
function handleContactSubmit() {
  /* Get form values */
  const name    = document.getElementById("contactName").value.trim();
  const email   = document.getElementById("contactEmail").value.trim();
  const subject = document.getElementById("contactSubject").value.trim();
  const message = document.getElementById("contactMessage").value.trim();
  const btn     = document.getElementById("submitBtn");
  const status  = document.getElementById("formStatus");

  /* Show error if any field is empty */
  if (!name || !email || !message) {
    status.className = "rounded-xl p-4 text-sm font-medium bg-red-500/20 text-red-300 border border-red-500/30";
    status.textContent = "⚠️ Please fill in your name, email, and message.";
    status.classList.remove("hidden");
    return;
  }

  /* Basic email format check */
  if (!email.includes("@") || !email.includes(".")) {
    status.className = "rounded-xl p-4 text-sm font-medium bg-red-500/20 text-red-300 border border-red-500/30";
    status.textContent = "⚠️ Please enter a valid email address.";
    status.classList.remove("hidden");
    return;
  }

  /* Disable button and show loading state */
  btn.disabled     = true;
  btn.textContent  = "Sending...";

  /* Check if EmailJS is configured */
  if (SITE.emailjs.publicKey === "YOUR_PUBLIC_KEY") {
    /* EmailJS not set up yet — show a placeholder success message */
    setTimeout(function () {
      status.className = "rounded-xl p-4 text-sm font-medium bg-green-500/20 text-green-300 border border-green-500/30";
      status.textContent = "✅ Message received! (EmailJS setup needed to actually send email — see data.js)";
      status.classList.remove("hidden");
      btn.disabled    = false;
      btn.textContent = "Send Message";
    }, 1000);
    return;
  }

  /* Initialise EmailJS with our public key */
  emailjs.init(SITE.emailjs.publicKey);

  /* Send email using the template and service from data.js */
  emailjs.send(SITE.emailjs.serviceId, SITE.emailjs.templateId, {
    from_name:  name,
    from_email: email,
    subject:    subject || "Contact Form Message",
    message:    message,
    to_email:   SITE.email,
  })
  .then(function () {
    /* Success */
    status.className = "rounded-xl p-4 text-sm font-medium bg-green-500/20 text-green-300 border border-green-500/30";
    status.textContent = "✅ Message sent successfully! We will reply within 24 hours.";
    status.classList.remove("hidden");

    /* Clear the form */
    document.getElementById("contactName").value    = "";
    document.getElementById("contactEmail").value   = "";
    document.getElementById("contactSubject").value = "";
    document.getElementById("contactMessage").value = "";
  })
  .catch(function (error) {
    /* Error */
    console.error("EmailJS error:", error);
    status.className = "rounded-xl p-4 text-sm font-medium bg-red-500/20 text-red-300 border border-red-500/30";
    status.textContent = "❌ Failed to send. Please try WhatsApp or email us directly.";
    status.classList.remove("hidden");
  })
  .finally(function () {
    /* Re-enable the button regardless of success/failure */
    btn.disabled    = false;
    btn.textContent = "Send Message";
  });
}

/* Make handleContactSubmit available globally (called from HTML onclick) */
window.handleContactSubmit = handleContactSubmit;


/* ─────────────────────────────────────────────────────────────
   SET FOOTER YEAR AUTOMATICALLY
   ─────────────────────────────────────────────────────────────
   Fills the © year in the footer so you never have to update it.
   ───────────────────────────────────────────────────────────── */
function setFooterYear() {
  const el = document.getElementById("footerYear");
  if (el) el.textContent = new Date().getFullYear();
}


/* ─────────────────────────────────────────────────────────────
   RUN ALL HOMEPAGE FUNCTIONS
   ─────────────────────────────────────────────────────────────
   This runs after the full HTML has loaded.
   ───────────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", function () {
  renderHero();         // 1. Hero text
  renderStats();        // 2. Stats bar
  renderAbout();        // 3. About section
  renderCategories();   // 4. Category cards
  renderFeatured();     // 5. Featured businesses
  renderGallery();      // 6. Gallery
  renderContactInfo();  // 7. Contact info
  renderSocialLinks();  // 8. Social links
  setFooterYear();      // 9. Footer year

  /* After all content is rendered, set up scroll reveal and lazy images again
     because new elements were added to the DOM by the render functions above */
  setupScrollReveal();
  setupLazyImages();
});
