/* ============================================================
   MAIN.JS  —  Shared utility functions used on ALL pages.
   ============================================================
   This file runs on every page (index, category, business).
   It handles:
     1. Mobile hamburger menu toggle
     2. Scroll reveal animation (elements fade in on scroll)
     3. Lazy image loading (images load only when visible)
     4. Active navigation link highlighting
     5. WhatsApp floating button injection
   ============================================================ */


/* ─────────────────────────────────────────────────────────────
   1. MOBILE MENU TOGGLE
   ─────────────────────────────────────────────────────────────
   When the user taps the hamburger (☰) button on small screens,
   this shows/hides the mobile navigation dropdown.
   ───────────────────────────────────────────────────────────── */
function setupMobileMenu() {
  const hamburgerButton = document.getElementById("mobileMenuButton");
  const mobileMenu      = document.getElementById("mobileMenu");

  // If these elements don't exist on the page, stop here
  if (!hamburgerButton || !mobileMenu) return;

  hamburgerButton.addEventListener("click", function () {
    // Toggle the "hidden" class — shows menu if hidden, hides if visible
    mobileMenu.classList.toggle("hidden");
  });

  // Close menu when user clicks any link inside it
  mobileMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");
    });
  });
}


/* ─────────────────────────────────────────────────────────────
   2. SCROLL REVEAL ANIMATION
   ─────────────────────────────────────────────────────────────
   Elements with the class "reveal" start invisible.
   As the user scrolls and an element enters the screen,
   this adds the class "visible" which triggers the CSS animation.
   ───────────────────────────────────────────────────────────── */
function setupScrollReveal() {
  // IntersectionObserver watches elements and fires when they enter the viewport
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Element is now visible → add the "visible" class
          entry.target.classList.add("visible");
          // Stop watching this element (it only needs to animate once)
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }   // Fire when 10% of the element is visible
  );

  // Watch every element that has the "reveal" class
  document.querySelectorAll(".reveal").forEach(function (el) {
    observer.observe(el);
  });
}


/* ─────────────────────────────────────────────────────────────
   3. LAZY IMAGE LOADING
   ─────────────────────────────────────────────────────────────
   Images with class "card-image" start with opacity: 0.
   When the image finishes loading, we add "loaded" class
   which triggers a smooth fade-in (defined in style.css).
   ───────────────────────────────────────────────────────────── */
function setupLazyImages() {
  document.querySelectorAll(".card-image").forEach(function (img) {
    if (img.complete) {
      // Image was already in cache — show it immediately
      img.classList.add("loaded");
    } else {
      // Image is still downloading — show it when done
      img.addEventListener("load", function () {
        img.classList.add("loaded");
      });
      img.addEventListener("error", function () {
        // If image fails to load, still show the element (with broken icon)
        img.classList.add("loaded");
      });
    }
  });
}


/* ─────────────────────────────────────────────────────────────
   4. ACTIVE NAVIGATION LINK
   ─────────────────────────────────────────────────────────────
   Highlights the current page link in the navigation bar.
   Compares the link's href with the current page URL.
   ───────────────────────────────────────────────────────────── */
function setupActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("nav a, #mobileMenu a").forEach(function (link) {
    const linkPage = link.getAttribute("href").split("?")[0]; // strip query params
    if (linkPage === currentPage) {
      // Mark this link as active
      link.classList.add("text-white", "font-semibold");
      link.classList.remove("text-slate-400");
    }
  });
}


/* ─────────────────────────────────────────────────────────────
   5. WHATSAPP FLOATING BUTTON
   ─────────────────────────────────────────────────────────────
   Injects a floating green WhatsApp button in the bottom-right
   corner of every page. Links to the main group WhatsApp.
   The SITE.whatsapp value comes from data.js.
   ───────────────────────────────────────────────────────────── */
function injectWhatsAppButton() {
  // Don't add if no WhatsApp link configured
  if (!SITE.whatsapp) return;

  // Create the button element
  const btn = document.createElement("a");
  btn.href        = SITE.whatsapp;
  btn.target      = "_blank";
  btn.rel         = "noopener noreferrer";
  btn.className   = "whatsapp-float";
  btn.title       = "Chat on WhatsApp";
  btn.setAttribute("aria-label", "Chat on WhatsApp");

  // WhatsApp SVG icon
  btn.innerHTML = `
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15
               -.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075
               -.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059
               -.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52
               .149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52
               -.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51
               -.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372
               -.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074
               .149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625
               .712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413
               .248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M5.84 4.2A11.87 11.87 0 0 0 .116 12.063C.116 14.09.63 16.03 1.6 17.72
               L0 24l6.335-1.652A11.82 11.82 0 0 0 11.95 23.88c6.554 0 11.887-5.333 11.887-11.887
               C23.837 5.333 18.504 0 11.95 0 9.5 0 7.2.753 5.295 2.1z
               M11.95 21.785a9.858 9.858 0 0 1-5.045-1.387l-.36-.215-3.741.977.997-3.648
               -.234-.374A9.858 9.858 0 0 1 2.11 12.087c0-5.422 4.41-9.833 9.84-9.833
               2.628 0 5.098 1.025 6.955 2.882a9.788 9.788 0 0 1 2.882 6.951
               c0 5.422-4.41 9.898-9.837 9.898z"/>
    </svg>
  `;

  document.body.appendChild(btn);
}


/* ─────────────────────────────────────────────────────────────
   INITIALISE ALL SHARED FUNCTIONS
   ─────────────────────────────────────────────────────────────
   This runs when the full HTML page has loaded.
   ───────────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", function () {
  setupMobileMenu();      // 1. Mobile nav
  setupScrollReveal();    // 2. Scroll animations
  setupLazyImages();      // 3. Image fade-in
  setupActiveNavLink();   // 4. Active nav link
  injectWhatsAppButton(); // 5. WhatsApp floating button
});
