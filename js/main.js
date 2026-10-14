
const isInPagesFolder = window.location.pathname.includes("/pages/");
const homeHref = isInPagesFolder ? "../index.html" : "index.html";
const contactHref = isInPagesFolder ? "./contact.html" : "pages/contact.html";
const coffeeHref = isInPagesFolder ? "./coffee.html" : "pages/coffee.html";
const aboutHref = isInPagesFolder ? "./about.html" : "pages/about.html";
const shopHref = isInPagesFolder ? "./shop.html" : "pages/shop.html";

const componentTemplates = {
  navbar: `
    <header class="site-header">
      <nav class="navbar container" aria-label="Main navigation">
        <a href="${homeHref}" class="brand" aria-label="Nganzi Coffee homepage">
          <img src="${isInPagesFolder ? "../assets/images/logo.svg" : "assets/images/logo.svg"}" alt="Nganzi Coffee" />
        </a>

        <button
          class="menu-toggle"
          aria-label="Open navigation"
          aria-expanded="false"
          aria-controls="nav-links"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div class="nav-links" id="nav-links">
          <a href="${aboutHref}">About Us</a>
          <a href="${coffeeHref}">Coffee</a>
          <a href="${contactHref}">Contact</a>
          <a href="${shopHref}" class="button button-small">
            Shop
            <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  `,
  footer: `
    <footer class="site-footer" id="contact">
      <div class="container footer-grid">
        <div class="footer-brand">
          <a href="${homeHref}" class="footer-logo">
            <img src="${isInPagesFolder ? "../assets/images/logo.svg" : "assets/images/logo.svg"}" alt="Nganzi Coffee" />
          </a>

          <div class="footer-divider" aria-hidden="true"></div>

          <p class="footer-story">
            Our journey begins in the high-altitude terrain of Western Uganda. Here, coffee is a story of culture, warmth and connection — shared one cup at a time.
          </p>

          <a href="${shopHref}" class="button button-light">
            Shop Coffee
            <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </a>

          <nav class="social-links" aria-label="Social media">
            <a href="https://x.com/nganzicoffee" target="_blank" rel="noopener noreferrer" aria-label="Nganzi Coffee on X">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-7.4L5.5 22H2.4l7.3-8.4L1.9 2h6.5l4.4 6.9L18.9 2Zm-1.1 18h1.7L7.4 3.9H5.6L17.8 20Z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/nganzicoffee/" target="_blank" rel="noopener noreferrer" aria-label="Nganzi Coffee on Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle class="social-icon-fill" cx="17.5" cy="6.8" r="1" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@nganzicoffee" target="_blank" rel="noopener noreferrer" aria-label="Nganzi Coffee on TikTok">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 3v11.2a4.2 4.2 0 1 1-3.6-4.1v3.2a1.2 1.2 0 1 0 .6 1V3h3c.2 2.2 1.5 3.7 4 4v3.1A8 8 0 0 1 14 8.5" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@nganzicoffee" target="_blank" rel="noopener noreferrer" aria-label="Nganzi Coffee on YouTube">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.5a2.5 2.5 0 0 0-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.5a2.5 2.5 0 0 0 1.8-1.8C22 15.2 22 12 22 12Z" />
                <path class="social-icon-cutout" d="m10 15 5-3-5-3v6Z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/nganzicoffee/" target="_blank" rel="noopener noreferrer" aria-label="Nganzi Coffee on LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5.2 8.5H2V22h3.2V8.5ZM3.6 2A1.9 1.9 0 1 0 3.6 5.8 1.9 1.9 0 0 0 3.6 2ZM22 13.8c0-4.1-2.2-6-5.2-6a4.5 4.5 0 0 0-4 2.2V8.5H9.6V22h3.2v-6.7c0-1.8.3-3.6 2.6-3.6s2.4 2.1 2.4 3.7V22H22v-8.2Z" />
              </svg>
            </a>
          </nav>
        </div>

        <nav class="footer-nav" aria-label="Footer navigation">
          <a href="${aboutHref}">About Us</a>
          <a href="${coffeeHref}">Coffee</a>
          <a href="${shopHref}">Shop</a>
          <a href="tel:+256773211079">+256 773 211079</a>
          <a href="mailto:nganzicoffeeug@gmail.com">nganzicoffeeug@gmail.com</a>
          <a href="${contactHref}">
            Contact Us
            <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </a>
        </nav>
      </div>

      <div class="container footer-bottom">
        <p>© 2026 Nganzi Coffee. All rights reserved.</p>
        <a href="/policies/privacy-policy">Privacy Policy</a>
      </div>
    </footer>
  `
};

const componentTargets = document.querySelectorAll("[data-component]");
componentTargets.forEach((target) => {
  const type = target.dataset.component;
  const template = componentTemplates[type];
  if (template) {
    target.innerHTML = template;
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  function closeMenu() {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 640) {
      closeMenu();
    }
  });
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const revealElements = document.querySelectorAll(
  "main > section:not(.hero) .section-heading, " +
    "main > section:not(.hero) article, " +
    "main > section:not(.hero) .about-grid > *, " +
    "main > section:not(.hero) .shop-order-grid > *, " +
    ".contact-intro, .contact-visual-panel, .contact-social-panel, " +
    ".coffee-guide-intro > *, .about-story-hero-content > *"
);

if ("IntersectionObserver" in window && !reduceMotion.matches) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealElements.forEach((element, index) => {
    element.dataset.reveal = "";
    element.style.setProperty(
      "--reveal-delay",
      `${Math.min((index % 4) * 70, 210)}ms`
    );
    revealObserver.observe(element);
  });

  document.body.classList.add("has-scroll-reveals");
}
