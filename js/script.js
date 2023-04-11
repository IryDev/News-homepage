const burger = document.querySelector(".menu-hamburger")
const navlinks = document.querySelector(".nav-links")
var burgerImage = document.querySelector(".burger-image");

function displayNavlinks() {
    navlinks.classList.toggle("mobile-menu");
    burgerImage.classList.toggle("open");
}

burger.addEventListener("click", displayNavlinks);