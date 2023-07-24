const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".navMenu2")
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    menu.classList.toggle("active")
})