// Start of SideBar 
let headerBtn = document.querySelector(".site-header-part__btn")

let siteHeader = document.querySelector("#site-header")

headerBtn.addEventListener("click", ()=> {
siteHeader.classList.toggle("sitenav-on")
})
// End of SideBar 

// Start Modal Window

let formBtn = document.querySelector(".accardion-part__btn")
let modal = document.querySelector(".modal")
let closeModalBtn = document.querySelector(".modal-part__desktop-link")

formBtn.addEventListener("click", ()=>{
    modal.classList.add("modal-on")
})

closeModalBtn.addEventListener("click", ()=> {
    modal.classList.remove("modal-on")
    alert(`Thank you for buying, Your purchase has been accepted, we will deliver it immediately
    `)
})
// End of Modal Window