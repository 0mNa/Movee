let servicesTop = document.querySelector(".order__services-top");

let servicesCheckbox = document.querySelector(".order__services-checkbox");

let services = document.querySelector("order__services");


function hideCheckbox() {
  servicesCheckbox.classCheckbox.toggle("hide");
  servicesTop.classCheckbox.toggle("hide");
}

servicesTop.addEventListener("click", hideCheckbox);

