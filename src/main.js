const navToggle = document.querySelector("#nav-toggle");
const navMenu = document.querySelector("#nav-menu");

navToggle.addEventListener("click", toggleNav);

function toggleNav() {
  // toggle between the two classes
  if (navMenu.classList.contains("flex")) {
    navMenu.classList.remove("flex");
    navMenu.classList.add("hidden");
  } else {
    navMenu.classList.add("flex");
    navMenu.classList.remove("hidden");
  }
}
