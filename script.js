/**
 * Fakhri Nauval - Portfolio Logic
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
 * Handle mobile menu activation and animations
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

  // Automatically close the menu when a nav link is clicked
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
 * Handle sticky header styling adjustment on scroll
 */
function initHeaderAccent() {
  const header = document.getElementById("main-header");

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("py-1", "border-neutral-200");
      } else {
        header.classList.remove("py-1", "border-neutral-200");
      }
    });
  }
}

/**
 * Setup Intersection Observer for smooth content reveal on scroll
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");

  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Trigger animation once
      }
    });
  }, observerOptions);

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
}

/**
 * Mock interaction handler for the contact form
 */
function initContactForm() {
  const contactForm = document.getElementById("contact-form");
  const formFeedback = document.getElementById("form-feedback");

  if (contactForm && formFeedback) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      formFeedback.textContent = "Processing details...";
      formFeedback.classList.remove("hidden");

      setTimeout(() => {
        formFeedback.textContent =
          "Thank you. Your message has been simulated as successfully sent.";
        contactForm.reset();
      }, 1000);
    });
  }
}
