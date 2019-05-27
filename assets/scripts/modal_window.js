let modal = null

const openModal = function (e) {
    e.preventDefault()
    const target = document.getElementById( e.target.getAttribute("href") )
    target.style.display = null
    modal = target
    modal.setAttribute("aria-hidden" ,false)
    modal.setAttribute("aria-modal" ,true)
    modal.addEventListener("click", closeModal)
    modal.querySelector(".js-modal-close").addEventListener("click", closeModal)
    modal.querySelector(".js-modal-stop").addEventListener("click", stopPropagation)
    document.querySelector("body").style.overflow = "hidden"
}

const closeModal = function (e) {
    e.preventDefault()
    if (modal === null) return
    modal.setAttribute("aria-hidden" ,true)
    modal.setAttribute("aria-modal" ,false)
    modal.querySelector(".js-modal-close").removeEventListener("click", closeModal)
    modal.querySelector(".js-modal-stop").removeEventListener("click", stopPropagation)
    document.querySelector("body").style.overflow = "auto"
    window.setTimeout(function () {
        modal.style.display = "none"
        modal = null
    },500)
}

const stopPropagation = function (e) {
    e.stopPropagation()
}

document.querySelectorAll(".js-modal-open").forEach(link => {
    link.addEventListener("click", openModal)
})

window.addEventListener("keydown", function (e) {
    if (e.key === "Escape" || e.key === "Esc") {
        closeModal(e)
    }
})

document.querySelectorAll(".modale").forEach(modal => {
    let ariaHidden = modal.getAttribute("aria-hidden")
    let ariaModal = modal.getAttribute("aria-modal")
    let ariaLabelledBy = modal.getAttribute("aria-labelledby")
    let role = modal.getAttribute("role")

    if  (ariaHidden !== "true")               modal.setAttribute("aria-hidden" , true)
    if  (ariaModal !== "true")                modal.setAttribute("aria-modal" , true)
    if  (typeof ariaLabelledBy !== "string" ) modal.setAttribute("arialabelledby" , modal.querySelector("h1").id)
    if  (role !== "dialog")                   modal.setAttribute("role" , "dialog")

})