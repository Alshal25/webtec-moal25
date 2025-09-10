const toggle = document.getElementById("menu-toggle")
const navLinks = document.getElementById("nav-links")
//console.log("AHA")


if (toggle && navLinks)
{
    toggle.addEventListener("click", ()=>{
        navLinks.classList.toggle("show")
        //console.log("gg")
    })
    window.addEventListener("resize", () => {
        if (window.innerWidth > 750) {
        navLinks.classList.remove("show")
        //console.log("off")
        }
    })
}
   // else
    //{
//console.log("not active ")
//    }
        

