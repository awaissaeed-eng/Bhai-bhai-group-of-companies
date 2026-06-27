/* ============================================================
   BUSINESS.JS  —  JavaScript only for business.html
   ============================================================
   This file:
     1. Reads the ?id=BUSINESS_ID from the URL
     2. Finds that business in data.js
     3. Fills in ALL business details on the page
     4. Renders the photo gallery
     5. Sets up the Google Map
     6. Renders social media links
     7. Renders related businesses (same category)
     8. Handles the contact form submission via EmailJS
   ============================================================ */


/* ─────────────────────────────────────────────────────────────
   GLOBAL VARIABLE — stores the current business being displayed.
   Used by handleBizContactSubmit() to send email to the right place.
   ───────────────────────────────────────────────────────────── */
let currentBusiness = null;


/* ─────────────────────────────────────────────────────────────
   1. READ BUSINESS ID FROM URL
   ─────────────────────────────────────────────────────────────
   URL format: business.html?id=bb-realty
   This reads the "id" value.
   ───────────────────────────────────────────────────────────── */
function getBusinessIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}


/* ─────────────────────────────────────────────────────────────
   2. FILL HERO SECTION
   ─────────────────────────────────────────────────────────────
   Sets the background image, business name, tagline, and badges.
   ───────────────────────────────────────────────────────────── */
function renderHero(biz) {
  /* Page title in the browser tab */
  document.title = biz.name + " | Bhai Bhai Group";

  /* Hero background image — uses the business thumbnail */
  /* ↓ The image URL comes from biz.thumbnail in data.js ↓ */
  const heroBg = document.getElementById("businessHeroBg");
  if (heroBg && biz.thumbnail) {
    heroBg.style.backgroundImage = "url('" + biz.thumbnail + "')";
  }

  /* Business name and tagline */
  document.getElementById("businessName").textContent    = biz.name;
  document.getElementById("businessTagline").textContent = biz.tagline;

  /* Category badge */
  document.getElementById("heroCategoryBadge").textContent    = biz.categoryName || "";

  /* Established badge */
  document.getElementById("heroEstablishedBadge").textContent =
    biz.established ? "Est. " + biz.established : "";

  /* Delivered franchise badge */
  const heroDeliveredEl = document.getElementById("heroDeliveredBadge");
  if (heroDeliveredEl) {
    if (biz.delivered) {
      heroDeliveredEl.textContent = "Delivered Franchise";
      heroDeliveredEl.classList.remove("hidden");
    } else {
      heroDeliveredEl.textContent = "";
      heroDeliveredEl.classList.add("hidden");
    }
  }
}


/* ─────────────────────────────────────────────────────────────
   3. FILL BREADCRUMB NAV
   ─────────────────────────────────────────────────────────────
   Sets the "Home › Category Name › Business Name" breadcrumb
   and also updates the back-link in the nav bar.
   ───────────────────────────────────────────────────────────── */
function renderBreadcrumb(biz) {
  /* Category link URL */
  const categoryUrl = "category.html?id=" + encodeURIComponent(biz.categoryId);

  /* Breadcrumb in hero */
  const bcCat = document.getElementById("breadcrumbCategory");
  if (bcCat) {
    bcCat.textContent = biz.categoryName;
    bcCat.href        = categoryUrl;
  }
  document.getElementById("breadcrumbBusiness").textContent = biz.name;

  /* Nav bar category link */
  const navCat = document.getElementById("navCategoryLink");
  if (navCat) {
    navCat.textContent = biz.categoryName;
    navCat.href        = categoryUrl;
  }
  const mobileNavCat = document.getElementById("mobileNavCategory");
  if (mobileNavCat) {
    mobileNavCat.textContent = biz.categoryName;
    mobileNavCat.href        = categoryUrl;
  }

  /* Back to category button */
  const backBtn   = document.getElementById("backToCategoryBtn");
  const backLabel = document.getElementById("backToCategoryLabel");
  if (backBtn)   backBtn.href          = categoryUrl;
  if (backLabel) backLabel.textContent = "Back to " + biz.categoryName;

  /* Footer category link */
  const footerCat = document.getElementById("footerCategoryLink");
  if (footerCat) {
    footerCat.textContent = biz.categoryName;
    footerCat.href        = categoryUrl;
  }
}


/* ─────────────────────────────────────────────────────────────
   4. FILL BUSINESS DETAILS
   ─────────────────────────────────────────────────────────────
   Sets description, services list, highlights, contact info.
   ───────────────────────────────────────────────────────────── */
function renderDetails(biz) {
  /* Main description paragraph */
  const descriptionEl = document.getElementById("businessDescription");
  if (descriptionEl) {
    const existingInfo = document.getElementById("bizDeliveredInfo");
    if (existingInfo) {
      existingInfo.remove();
    }

    if (biz.delivered) {
      descriptionEl.insertAdjacentHTML("beforebegin", `
        <div id="bizDeliveredInfo" class="mb-6 rounded-[2rem] border border-brand-gold/20 bg-brand-gold/10 p-5 text-sm text-white">
          <p class="font-semibold text-brand-gold">Delivered Franchise</p>
          <p class="mt-2 text-slate-300">This business is part of our delivered franchise program, offering premium setup, ongoing support, and consistent quality.</p>
        </div>
      `);
    }

    descriptionEl.textContent = biz.description;
  }

  /* Services list — each service as a bullet point */
  const servicesList = document.getElementById("servicesList");
  if (servicesList) {
    if (biz.services && biz.services.length > 0) {
      servicesList.innerHTML = biz.services.map(function (service) {
        return `<li class="flex items-start gap-2"><span class="mt-1 text-brand-purple text-xs">●</span>${service}</li>`;
      }).join("");
    } else {
      servicesList.innerHTML = "<li class='text-slate-500 italic'>Services not listed.</li>";
    }
  }

  /* Highlights / Achievements list (uses services if no achievements defined) */
  const highlightsList = document.getElementById("highlightsList");
  if (highlightsList) {
    /* Create auto-highlights from business data */
    const highlights = [
      biz.established ? "Established in " + biz.established          : null,
      biz.phone       ? "Reachable at " + biz.phone                  : null,
      biz.website     ? "Official website available"                  : null,
      biz.whatsapp    ? "WhatsApp inquiries accepted"                 : null,
      biz.mapSrc      ? "Located at " + (biz.address || "see map")   : null,
    ].filter(Boolean);  /* remove null values */

    highlightsList.innerHTML = highlights.map(function (h) {
      return `<li class="flex items-start gap-2"><span class="mt-1 text-brand-gold text-xs">★</span>${h}</li>`;
    }).join("");
  }
}


/* ─────────────────────────────────────────────────────────────
   5. FILL CONTACT INFORMATION (sidebar)
   ─────────────────────────────────────────────────────────────
   Sets phone, email, address, established year in sidebar.
   ───────────────────────────────────────────────────────────── */
function renderContactSidebar(biz) {
  /* Phone */
  const phoneEl = document.getElementById("bizPhone");
  if (phoneEl) {
    phoneEl.textContent = biz.phone || "Not available";
    phoneEl.href        = biz.phone ? "tel:" + biz.phone.replace(/\s/g, "") : "#";
  }

  /* Email */
  const emailEl = document.getElementById("bizEmail");
  if (emailEl) {
    emailEl.textContent = biz.email || "Not available";
    emailEl.href        = biz.email ? "mailto:" + biz.email : "#";
  }

  /* Address */
  document.getElementById("bizAddress").textContent     = biz.address     || "Not available";
  document.getElementById("bizEstablished").textContent = biz.established ? "Est. " + biz.established : "—";

  const establishedEl = document.getElementById("bizEstablished");
  const existingStatus = document.getElementById("bizDeliveredStatus");
  if (existingStatus) {
    existingStatus.remove();
  }

  if (biz.delivered && establishedEl && establishedEl.parentElement) {
    establishedEl.parentElement.insertAdjacentHTML("afterend", `
      <div id="bizDeliveredStatus">
        <p class="text-xs uppercase tracking-widest text-slate-500">Status</p>
        <p class="mt-1 font-semibold text-brand-gold">✓ Delivered Franchise</p>
      </div>
    `);
  }
}


/* ─────────────────────────────────────────────────────────────
   6. RENDER QUICK LINKS (WhatsApp, Website)
   ─────────────────────────────────────────────────────────────
   Sets WhatsApp and website links in the Quick Links card.
   Hides website button if no URL provided.
   ───────────────────────────────────────────────────────────── */
function renderQuickLinks(biz) {
  /* WhatsApp */
  const waBtn = document.getElementById("bizWhatsapp");
  if (waBtn) {
    waBtn.href = biz.whatsapp || SITE.whatsapp || "#";
  }

  /* Website — only shown if biz.website is set and not empty */
  const webBtn = document.getElementById("bizWebsite");
  if (webBtn) {
    if (biz.website) {
      webBtn.href = biz.website;
      webBtn.classList.remove("hidden");
      webBtn.classList.add("flex");
    } else {
      webBtn.classList.add("hidden");
    }
  }
}


/* ─────────────────────────────────────────────────────────────
   7. RENDER SOCIAL MEDIA LINKS
   ─────────────────────────────────────────────────────────────
   Shows icons for social platforms that have URLs.
   ───────────────────────────────────────────────────────────── */
function renderSocialLinks(biz) {
  const container = document.getElementById("bizSocialLinks");
  if (!container) return;

  /* All possible social platforms */
  const platforms = [
    { key: "facebook",  label: "Facebook",  emoji: "👥" },
    { key: "instagram", label: "Instagram", emoji: "📸" },
    { key: "linkedin",  label: "LinkedIn",  emoji: "💼" },
    { key: "youtube",   label: "YouTube",   emoji: "▶️"  },
  ];

  /* Only show platforms with a URL set in data.js biz.social */
  if (!biz.social) {
    container.innerHTML = "<p class='text-xs text-slate-500'>No social links.</p>";
    return;
  }

  const links = platforms
    .filter(function (p) { return biz.social[p.key]; })
    .map(function (p) {
      return `
        <a href="${biz.social[p.key]}" target="_blank" rel="noopener noreferrer"
           title="${p.label}" class="social-btn" aria-label="${p.label}">
          ${p.emoji}
        </a>
      `;
    })
    .join("");

  container.innerHTML = links || "<p class='text-xs text-slate-500'>No social links added.</p>";
}


/* ─────────────────────────────────────────────────────────────
   8. RENDER PHOTO GALLERY
   ─────────────────────────────────────────────────────────────
   Shows all images from biz.gallery array.
   Image URLs are set in data.js for each business.
   ───────────────────────────────────────────────────────────── */
function renderGallery(biz) {
  const container = document.getElementById("businessGallery");
  if (!container) return;

  if (!biz.gallery || biz.gallery.length === 0) {
    container.innerHTML = "<p class='text-slate-500 italic col-span-3'>No gallery photos added yet.</p>";
    return;
  }

  /* ↓ Gallery image URLs come from biz.gallery in data.js ↓ */
  container.innerHTML = biz.gallery.map(function (imgUrl, index) {
    return `
      <!-- Gallery image ${index + 1} -->
      <div class="group relative overflow-hidden rounded-2xl bg-slate-800" style="height: 200px;">
        <img
          src="${imgUrl}"
          alt="${biz.name} - Photo ${index + 1}"
          class="card-image h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
    `;
  }).join("");
}


/* ─────────────────────────────────────────────────────────────
   9. SET GOOGLE MAP
   ─────────────────────────────────────────────────────────────
   Sets the map iframe src from biz.mapSrc in data.js.
   ↓ The map embed URL is in data.js mapSrc field ↓
   ───────────────────────────────────────────────────────────── */
function renderMap(biz) {
  const mapFrame = document.getElementById("businessMap");
  const mapAddr  = document.getElementById("mapAddress");

  if (mapAddr)  mapAddr.textContent = biz.address || "";

  if (mapFrame) {
    if (biz.mapSrc) {
      mapFrame.src = biz.mapSrc;
    } else {
      /* If no map URL, hide the map frame */
      mapFrame.style.display = "none";
      if (mapAddr) mapAddr.textContent = biz.address || "Location not configured";
    }
  }
}


/* ─────────────────────────────────────────────────────────────
   10. RENDER RELATED BUSINESSES (same category)
   ─────────────────────────────────────────────────────────────
   Shows other businesses in the same category in the sidebar.
   ───────────────────────────────────────────────────────────── */
function renderRelatedBusinesses(biz) {
  const container = document.getElementById("relatedBusinesses");
  if (!container) return;

  /* Find the parent category */
  const category = getCategoryById(biz.categoryId);
  if (!category) return;

  /* Exclude the current business, show up to 4 others */
  const related = category.businesses
    .filter(function (b) { return b.id !== biz.id; })
    .slice(0, 4);

  if (related.length === 0) {
    container.innerHTML = "<p class='text-xs text-slate-500'>No other businesses in this category.</p>";
    return;
  }

  container.innerHTML = related.map(function (b) {
    return `
      <a
        href="business.html?id=${encodeURIComponent(b.id)}"
        class="flex items-center gap-3 rounded-xl p-3 transition hover:bg-white/5"
      >
        <!-- Small thumbnail -->
        <img src="${b.thumbnail}" alt="${b.name}"
             class="h-12 w-12 rounded-lg object-cover shrink-0 card-image" />
        <div class="min-w-0">
          <p class="text-sm font-medium text-white truncate">${b.name}</p>
          <p class="text-xs text-slate-400 truncate">${b.tagline}</p>
        </div>
      </a>
    `;
  }).join("");
}


/* ─────────────────────────────────────────────────────────────
   11. CONTACT FORM (send email to this specific business)
   ─────────────────────────────────────────────────────────────
   Uses EmailJS. Sends email to the business email address.
   The business email is taken from currentBusiness.email (data.js).
   ───────────────────────────────────────────────────────────── */
function handleBizContactSubmit() {
  const name    = document.getElementById("bizContactName").value.trim();
  const email   = document.getElementById("bizContactEmail").value.trim();
  const message = document.getElementById("bizContactMessage").value.trim();
  const btn     = document.getElementById("bizSubmitBtn");
  const status  = document.getElementById("bizFormStatus");

  /* Validate required fields */
  if (!name || !email || !message) {
    status.className   = "rounded-xl p-4 text-sm font-medium bg-red-500/20 text-red-300 border border-red-500/30";
    status.textContent = "⚠️ Please fill in all fields.";
    status.classList.remove("hidden");
    return;
  }

  /* Disable button */
  btn.disabled    = true;
  btn.textContent = "Sending...";

  /* If EmailJS is not configured yet, show placeholder */
  if (SITE.emailjs.publicKey === "YOUR_PUBLIC_KEY") {
    setTimeout(function () {
      status.className   = "rounded-xl p-4 text-sm font-medium bg-green-500/20 text-green-300 border border-green-500/30";
      status.textContent = "✅ Message received! (Configure EmailJS in data.js to enable real email sending)";
      status.classList.remove("hidden");
      btn.disabled    = false;
      btn.textContent = "Send Message";
    }, 800);
    return;
  }

  /* Init EmailJS */
  emailjs.init(SITE.emailjs.publicKey);

  /* Send to the business email */
  emailjs.send(SITE.emailjs.serviceId, SITE.emailjs.templateId, {
    from_name:     name,
    from_email:    email,
    subject:       "Inquiry for " + (currentBusiness ? currentBusiness.name : "Business"),
    message:       message,
    to_email:      currentBusiness ? currentBusiness.email : SITE.email,
    business_name: currentBusiness ? currentBusiness.name  : "Bhai Bhai Group",
  })
  .then(function () {
    status.className   = "rounded-xl p-4 text-sm font-medium bg-green-500/20 text-green-300 border border-green-500/30";
    status.textContent = "✅ Message sent! The business will reply to " + email;
    status.classList.remove("hidden");

    document.getElementById("bizContactName").value    = "";
    document.getElementById("bizContactEmail").value   = "";
    document.getElementById("bizContactMessage").value = "";
  })
  .catch(function (err) {
    console.error("EmailJS error:", err);
    status.className   = "rounded-xl p-4 text-sm font-medium bg-red-500/20 text-red-300 border border-red-500/30";
    status.textContent = "❌ Failed to send. Please try WhatsApp or email directly.";
    status.classList.remove("hidden");
  })
  .finally(function () {
    btn.disabled    = false;
    btn.textContent = "Send Message";
  });
}

/* Make globally available (called from HTML onclick) */
window.handleBizContactSubmit = handleBizContactSubmit;


/* ─────────────────────────────────────────────────────────────
   SET FOOTER YEAR
   ───────────────────────────────────────────────────────────── */
function setFooterYear() {
  const el = document.getElementById("footerYear");
  if (el) el.textContent = new Date().getFullYear();
}


/* ─────────────────────────────────────────────────────────────
   SHOW ERROR when business not found
   ───────────────────────────────────────────────────────────── */
function showNotFound() {
  document.getElementById("businessName").textContent    = "Business Not Found";
  document.getElementById("businessTagline").textContent = "The business you are looking for does not exist.";
}


/* ─────────────────────────────────────────────────────────────
   MAIN INIT — runs when page has loaded
   ───────────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", function () {

  /* Step 1: Get business id from URL */
  const businessId = getBusinessIdFromUrl();

  if (!businessId) {
    window.location.href = "index.html";
    return;
  }

  /* Step 2: Find the business in data.js */
  const biz = getBusinessById(businessId);

  if (!biz) {
    showNotFound();
    return;
  }

  /* Step 3: Save to global variable (used by contact form) */
  currentBusiness = biz;

  /* Step 4: Render everything */
  renderHero(biz);                  // Hero image and name
  renderBreadcrumb(biz);            // Breadcrumb + nav links
  renderDetails(biz);               // Description, services, highlights
  renderContactSidebar(biz);        // Phone, email, address
  renderQuickLinks(biz);            // WhatsApp, website buttons
  renderSocialLinks(biz);           // Social media icons
  renderGallery(biz);               // Photo gallery
  renderMap(biz);                   // Google Map
  renderRelatedBusinesses(biz);     // Other businesses in same category
  setFooterYear();                  // Footer year

  /* Re-run shared functions for newly added elements */
  setupScrollReveal();
  setupLazyImages();
});
