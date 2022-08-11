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
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

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

const timer = document.querySelector(".timer"); 
let time = new Date().setHours(new Date().getHours() + 6); 



const timerId = setInterval(() => {
  const now = new Date().getTime(); 

  const distance = time - now; 

  
  let hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  timer.innerHTML = `${hours}:${minutes}:${seconds}`; 
  
  if (distance < 0) {
    clearInterval(timerId);
    timer.innerHTML = "Время истекло";
    timer.style.fontSize = "5rem";
    timer.style.lineHeight = "4rem";
  }
}, 1000);