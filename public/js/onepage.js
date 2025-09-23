const toggle = document.getElementById("menu-toggle")
const navLinks = document.getElementById("main-nav")

if (toggle && navLinks)
{
    toggle.addEventListener("click", () => {
        navLinks.classList.toggle("show")
        toggle.classList.toggle("active") 
    })
    window.addEventListener("resize", () => {
        if (window.innerWidth > 750) {
        navLinks.classList.remove("show")
        toggle.classList.remove("active") 
        }
    })
}
