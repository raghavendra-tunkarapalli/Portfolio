// script.js

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  // Toggle menu on hamburger click
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); // stop click from bubbling up
    navMenu.classList.toggle("active");
  });

  // Close menu when a nav link is clicked
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      navMenu.classList.contains("active") &&
      !navMenu.contains(e.target) &&
      e.target !== hamburger
    ) {
      navMenu.classList.remove("active");
    }
  });
});
