const iconMenuHTML = document.querySelector(".iconMenu");
const menuHTML = document.querySelector(".menu");

iconMenuHTML.addEventListener("click", function () {
  menuHTML.classList.toggle("menu_show");
});
