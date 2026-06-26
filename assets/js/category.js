/* ============================================================
   CATEGORY.JS  —  JavaScript only for category.html
   ============================================================
   This file:
     1. Reads the ?id=CATEGORY_ID from the URL
     2. Finds that category in data.js
     3. Fills in all the category information on the page
     4. Renders business cards for that category
     5. Renders all categories in the sidebar
     6. Handles the search/filter feature
   ============================================================ */


/* ─────────────────────────────────────────────────────────────
   GLOBAL VARIABLE — stores the current category's businesses
   Used by filterBusinesses() when the user types in search box.
   ───────────────────────────────────────────────────────────── */
let currentBusinesses = [];


/* ─────────────────────────────────────────────────────────────
   1. READ URL PARAMETER
   ─────────────────────────────────────────────────────────────
   When user clicks a category card, they go to:
     category.html?id=real-estate
   This function reads the "id" value from the URL.
   ───────────────────────────────────────────────────────────── */
function getCategoryIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");  // returns "real-estate" for example
}


/* ─────────────────────────────────────────────────────────────
   2. FILL CATEGORY HEADER SECTION
   ─────────────────────────────────────────────────────────────
   Sets the page title, background image, description, etc.
   based on the category found from the URL.
   ───────────────────────────────────────────────────────────── */
function renderCategoryHeader(category) {
  /* Page title in browser tab */
  document.title = category.name + " | BB Group";

  /* Breadcrumb */
  document.getElementById("breadcrumbCategory").textContent = category.name;

  /* Category icon and title */
  document.getElementById("categoryIcon").textContent        = category.icon;
  document.getElementById("categoryTitle").textContent       = category.name;
  document.getElementById("categoryDescription").textContent = category.description;

  /* Business count badge */
  document.getElementById("businessCountBadge").textContent =
    category.businesses.length + " businesses";

  /* Background image from category.image in data.js */
  /* ↓ This image URL is set in data.js for each category ↓ */
  const bg = document.getElementById("categoryBg");
  if (bg && category.image) {
    bg.style.backgroundImage = "url('" + category.image + "')";
  }
}


/* ─────────────────────────────────────────────────────────────
   3. RENDER BUSINESS CARDS
   ─────────────────────────────────────────────────────────────
   Creates a card for each business in this category.
   Clicking opens business.html?id=BUSINESS_ID
   ───────────────────────────────────────────────────────────── */
function renderBusinessCards(businesses) {
  const grid = document.getElementById("businessGrid");
  if (!grid) return;

  /* Hide "no results" message while rendering */
  document.getElementById("noResults").classList.add("hidden");

  if (businesses.length === 0) {
    grid.innerHTML = "";
    document.getElementById("noResults").classList.remove("hidden");
    return;
  }

  grid.innerHTML = businesses.map(function (biz) {
    return `
      <!-- Business card — clicking opens the full detail page -->
      <a
        href="business.html?id=${encodeURIComponent(biz.id)}"
        class="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70
               transition hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-xl
               hover:shadow-black/30 reveal card-glow"
      >
        <!-- Business thumbnail image -->
        <!-- ↓ Image URL is set in data.js for each business ↓ -->
        <div class="relative h-56 overflow-hidden bg-slate-800">
          <img
            src="${biz.thumbnail}"
            alt="${biz.name}"
            class="card-image h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10"></div>

          <!-- Established year badge on the image -->
          ${biz.established ? `
            <div class="absolute top-4 right-4">
              <span class="badge">Est. ${biz.established}</span>
            </div>
          ` : ""}
        </div>

        <!-- Card text content -->
        <div class="p-5">
          <h3 class="text-lg font-semibold text-white">${biz.name}</h3>
          <p class="mt-1 text-sm text-slate-400 line-clamp-2">${biz.tagline}</p>

          <!-- Quick contact icons -->
          <div class="mt-4 flex items-center gap-3">
            ${biz.phone ? `<span class="text-xs text-slate-500">📞 ${biz.phone}</span>` : ""}
          </div>

          <!-- "View details" link -->
          <div class="mt-4 flex items-center justify-between">
            <span class="text-xs text-slate-500">${biz.services ? biz.services.slice(0,2).join(" · ") : ""}</span>
            <span class="text-xs font-medium text-brand-purple">View details →</span>
          </div>
        </div>
      </a>
    `;
  }).join("");

  /* Re-run scroll reveal and lazy images for newly added cards */
  setupScrollReveal();
  setupLazyImages();
}


/* ─────────────────────────────────────────────────────────────
   4. RENDER ALL CATEGORIES SIDEBAR
   ─────────────────────────────────────────────────────────────
   Shows a list of all categories in the sidebar so the user
   can quickly jump to a different category.
   ───────────────────────────────────────────────────────────── */
function renderSidebarCategories(activeCategoryId) {
  const container = document.getElementById("allCategoriesList");
  if (!container) return;

  container.innerHTML = CATEGORIES.map(function (cat) {
    /* Highlight the currently active category */
    const isActive = cat.id === activeCategoryId;
    return `
      <a
        href="category.html?id=${encodeURIComponent(cat.id)}"
        class="flex items-center justify-between rounded-xl px-3 py-2 text-sm transition
               ${isActive
                 ? "bg-brand-purple/20 text-white font-semibold border border-brand-purple/40"
                 : "text-slate-400 hover:text-white hover:bg-white/5"
               }"
      >
        <span>${cat.icon} ${cat.name}</span>
        <span class="text-xs text-slate-500">${cat.businesses.length}</span>
      </a>
    `;
  }).join("");
}


/* ─────────────────────────────────────────────────────────────
   5. SEARCH / FILTER BUSINESSES
   ─────────────────────────────────────────────────────────────
   Called every time the user types in the search box.
   Filters the businesses list by name or description.
   ───────────────────────────────────────────────────────────── */
function filterBusinesses() {
  const query = document.getElementById("businessSearch").value.toLowerCase().trim();

  if (!query) {
    /* No search text — show all businesses */
    renderBusinessCards(currentBusinesses);
    return;
  }

  /* Filter businesses whose name, tagline, or description contains the search text */
  const filtered = currentBusinesses.filter(function (biz) {
    return (
      biz.name.toLowerCase().includes(query)         ||
      biz.tagline.toLowerCase().includes(query)      ||
      biz.description.toLowerCase().includes(query)  ||
      (biz.services && biz.services.some(function (s) { return s.toLowerCase().includes(query); }))
    );
  });

  renderBusinessCards(filtered);
}

/* Make filterBusinesses globally available (called from HTML oninput) */
window.filterBusinesses = filterBusinesses;


/* ─────────────────────────────────────────────────────────────
   SET SIDEBAR WHATSAPP LINK
   ───────────────────────────────────────────────────────────── */
function setupSidebarLinks() {
  const waLink = document.getElementById("sidebarWhatsApp");
  if (waLink && SITE.whatsapp) {
    waLink.href = SITE.whatsapp;
  }
}


/* ─────────────────────────────────────────────────────────────
   SET FOOTER YEAR
   ───────────────────────────────────────────────────────────── */
function setFooterYear() {
  const el = document.getElementById("footerYear");
  if (el) el.textContent = new Date().getFullYear();
}


/* ─────────────────────────────────────────────────────────────
   SHOW ERROR PAGE (when category id is wrong or missing)
   ───────────────────────────────────────────────────────────── */
function showNotFound() {
  document.getElementById("categoryTitle").textContent = "Category Not Found";
  document.getElementById("categoryDescription").textContent =
    "The category you are looking for does not exist.";
  document.getElementById("businessGrid").innerHTML = `
    <div class="col-span-2 py-16 text-center">
      <p class="text-5xl mb-4">😕</p>
      <p class="text-xl text-white">Category not found</p>
      <a href="index.html" class="mt-4 inline-block text-brand-purple hover:underline">
        ← Go back to homepage
      </a>
    </div>
  `;
}


/* ─────────────────────────────────────────────────────────────
   MAIN INIT — runs when page has loaded
   ───────────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", function () {

  /* Step 1: Read the category id from the URL */
  const categoryId = getCategoryIdFromUrl();

  if (!categoryId) {
    /* No id in URL → redirect to homepage */
    window.location.href = "index.html";
    return;
  }

  /* Step 2: Find the category in data.js */
  const category = getCategoryById(categoryId);

  if (!category) {
    /* Category not found in data → show error */
    showNotFound();
    return;
  }

  /* Step 3: Store businesses for use in search filter */
  currentBusinesses = category.businesses;

  /* Step 4: Fill in all content */
  renderCategoryHeader(category);         // Category name, image, description
  renderBusinessCards(currentBusinesses); // Business cards grid
  renderSidebarCategories(categoryId);    // Sidebar categories list
  setupSidebarLinks();                    // WhatsApp in sidebar
  setFooterYear();                        // Footer copyright year
});
