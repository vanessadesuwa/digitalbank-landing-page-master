const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");

// Open menu and show overlay
menuIcon.addEventListener("click", function () {
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
  document.body.classList.add("no-scroll");
});

// Close menu and hide overlay when overlay is clicked
overlay.addEventListener("click", function () {
  mobileMenu.style.display = "none";
  overlay.classList.remove("active");
});
