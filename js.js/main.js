let burgerMenu = document.querySelector(".burger");
let bars = document.querySelector(".bars");
// let burger = document.querySelector(".burger");

bars.addEventListener("click", () => {
  burgerMenu.classList.toggle("hideBurger");
});