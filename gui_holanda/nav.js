const nav = document.querySelector("#nav");
const toggler = document.querySelector("#btn");

toggler.addEventListener('click', () => {
    const visibility = nav.getAttribute("data-visible")
    if (visibility === "false") {
        nav.setAttribute("data-visible", "true");
        toggler.setAttribute("aria-expanded", "true")
    } else {
        nav.setAttribute("data-visible", "false");
        toggler.setAttribute("aria-expanded", "false")
    }
})