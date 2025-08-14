const navToggle = document.querySelector("#nav-toggle");
const navMenu = document.querySelector("#nav-menu");
const toggleIcon = document.querySelector("#toggle-icon");

navToggle.addEventListener("click", toggleNav);

function toggleNav() {
  // toggle between the two classes
  if (navMenu.classList.contains("flex")) {
    navMenu.classList.remove("flex");
    navMenu.classList.add("hidden");
     toggleIcon.classList.remove("fa-xmark");
     toggleIcon.classList.add("fa-bars");
  } else {
    navMenu.classList.add("flex");
    toggleIcon.classList.add("fa-xmark");
    toggleIcon.classList.remove("fa-bars");
    navMenu.classList.remove("hidden");
  }
}
