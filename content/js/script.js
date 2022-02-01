const menuIcon = document.querySelector(".open-menu");
const closeIcon = document.querySelector(".close-menu");
const mainNavList = document.querySelector(".main-nav-list");

const showMenu = function () {
  if (!mainNavList.classList.contains("open")) {
    mainNavList.classList.add("open");
    menuIcon.style.display = "none";
    closeIcon.style.display = "flex";
  }
};

const closeMenu = function () {
  if (mainNavList.classList.contains("open")) {
    mainNavList.classList.remove("open");
    closeIcon.style.display = "none";
    menuIcon.style.display = "flex";
  }
};

menuIcon.addEventListener("click", showMenu);
closeIcon.addEventListener("click", closeMenu);
