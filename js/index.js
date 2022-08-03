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
let body = document.body


const openBurger = () => {
  burger.classList.toggle("open");
  headerMenu.classList.toggle("open");
  body.classList.toggle("lock");

  //if (body.style.overflow === "hidden") {
  // body.style.overflow = "visible";
  // }
  // else {
  //   body.style.overflow = "hidden";
  // }
};
burger.addEventListener("click", openBurger);


const slides = document.querySelectorAll(".carpark__info-list");
const nextBtn = document.querySelector(".carpark__vector-right");
const prevBtn = document.querySelector(".carpark__vector-left");

let chosenSlide = 0;

for (let i = 0; i < slides.length; i++) {
  slides[i] === slides[chosenSlide]
    ? (slides[i].style.display = "flex")
    : (slides[i].style.display = "none");
}
const scrollNext = () => {
  chosenSlide === slides.length ? (chosenSlide = 0) : chosenSlide++;

  for (let i = 0; i < slides.length; i++) {
    slides[i] === slides[chosenSlide]
      ? (slides[i].style.display = "flex")
      : (slides[i].style.display = "none");
  }
};
  console.log(slides);



nextBtn.addEventListener("click", scrollNext);

const scrollPrev = () => {
  chosenSlide === 0 ? (chosenSlide = slides.length - 1) : chosenSlide--;

  for (let i = 0; i < slides.length; i++) {
    slides[i] === slides[chosenSlide]
      ? (slides[i].style.display = "flex")
      : (slides[i].style.display = "none");
  }
};
prevBtn.addEventListener("click", scrollPrev);


