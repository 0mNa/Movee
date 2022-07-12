let servicesTop = document.querySelector(".order__services-top");
let servicesCheckbox = document.querySelector(".order__services-checkbox");
let orderArrow = document.querySelector(".order__services-arrow");

function hideCheckbox() {
  servicesCheckbox.classList.toggle("hide");
  orderArrow.classList.toggle("hide");
}
servicesTop.addEventListener("click", hideCheckbox);

let burger = document.querySelector(".burger");
let headerMenu = document.querySelector(".header__menu");

const openBurger = () => {
  burger.classList.toggle("open");
  headerMenu.classList.toggle("open");
};
burger.addEventListener("click", openBurger);



