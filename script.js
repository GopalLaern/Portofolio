/**
 * Fakhri Nauval - Architecture System & Layout Logic
 */

document.addEventListener("DOMContentLoaded", () => {
  initDynamicYear();
  initMobileMenu();
  initHeaderAccent();
  initScrollReveal();
  initContactForm();
});

/**
 * Update footer year dynamically
 */
function initDynamicYear() {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

/**
 * Handle mobile navigation and SVG hamburger transitions
 */
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburgerTop = document.getElementById("hamburger-top");
  const hamburgerMid = document.getElementById("hamburger-mid");
  const hamburgerBot = document.getElementById("hamburger-bot");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      const isHidden = mobileMenu.classList.contains("hidden");

      if (isHidden) {
        mobileMenu.classList.remove("hidden");
        hamburgerTop.style.transform = "translateY(6px) rotate(45deg)";
        hamburgerMid.style.opacity = "0";
        hamburgerBot.style.transform = "translateY(-6px) rotate(-45deg)";
      } else {
        closeMenu();
      }
    });
  }

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  function closeMenu() {
    if (mobileMenu) {
      mobileMenu.classList.add("hidden");
      hamburgerTop.style.transform = "none";
      hamburgerMid.style.opacity = "1";
      hamburgerBot.style.transform = "none";
    }
  }
}

/**
 * Dynamic background adjustment on scroll
 */
function initHeaderAccent() {
  const header = document.getElementById("main-header");

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        header.classList.add("py-1", "shadow-sm", "border-gallery-clay");
      } else {
        header.classList.remove("py-1", "shadow-sm", "border-gallery-clay");
      }
    });
  }
}

/**
 * Setup Intersection Observer for clean scrolling transitions
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");

  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px",
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
}

/**
 * Simulated action of the contact submission
 */
function initContactForm() {
  const contactForm = document.getElementById("contact-form");
  const formFeedback = document.getElementById("form-feedback");

  if (contactForm && formFeedback) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      formFeedback.textContent = "TRANSMITTING DATA...";
      formFeedback.classList.remove("hidden");

      setTimeout(() => {
        formFeedback.textContent =
          "TRANSMISSION SUCCESSFUL. LOGGED SIMULATION RESUME.";
        contactForm.reset();
      }, 1200);
    });
  }
}
