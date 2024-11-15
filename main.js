import "./style.css";
let closeMenu = document.getElementById("close-menu");
let openMenu = document.getElementById("open-menu");
let Menu = document.getElementById("menu");
let mobileMenu = document.getElementById("mobile-menu");

openMenu.addEventListener("click", () => {
  Menu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
  openMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("hidden");
});
closeMenu.addEventListener("click", () => {
  Menu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
  openMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("hidden");
});
