var elOpenbtn = document.querySelector(".site-header__btn")
var elSitenav = document.querySelector(".site-header")

elOpenbtn.addEventListener("click", function() {
    elSitenav.classList.toggle("site-open")
})