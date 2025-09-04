// Select elements
const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");

// Open menu
function openMenu(e) {
  if (e) e.stopPropagation(); // prevents bubbling when clicking hamburger icon
  hamburgerIcon.classList.add("active");
  closeIcon.classList.add("active");
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
  document.body.classList.add("no-scroll");
}

// Close menu
function closeMenu(e) {
  if (e) e.stopPropagation(); // prevents bubbling when clicking close icon
  hamburgerIcon.classList.remove("active");
  closeIcon.classList.remove("active");
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
}

// Event listeners
hamburgerIcon.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
