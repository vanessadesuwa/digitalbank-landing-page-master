const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");

// Open menu and show overlay
function openMenu() {
  hamburgerIcon.style.display = "none";
  closeIcon.style.display = "block";
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
  document.body.classList.add("no-scroll");
}
// Close menu and hide overlay
function closeMenu(e) {
  if (e) e.stopPropagation();
  mobileMenu.style.display = "none";
  overlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
  hamburgerIcon.style.display = "block";
  closeIcon.style.display = "none";
}
// menuIcon.addEventListener("click", openMenu);
hamburgerIcon.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
