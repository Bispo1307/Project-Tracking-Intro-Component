const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const menuMobile = document.getElementById("menu-mobile");

openMenu.addEventListener("click", () => {
  menuMobile.classList.add("active");
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  menuMobile.classList.remove("active");
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
});
