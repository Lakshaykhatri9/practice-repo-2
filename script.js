let hamburgerBar = document.querySelector(".hamburger-bar");
let line1 = document.querySelector(".line-1");
let line2 = document.querySelector(".line-2");
let line3 = document.querySelector(".line-3");
let navbar = document.querySelector(".navbar");

hamburgerBar.addEventListener("click", () => {  
    line1.classList.toggle("line1");
    line2.classList.toggle("line2");
    line3.classList.toggle("line3");
});

hamburgerBar.addEventListener("click", () => {
    navbar.classList.toggle("navbar-show");
});