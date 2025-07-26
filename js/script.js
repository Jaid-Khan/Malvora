// NavBar Hamburger Toggle Button To Open Or Close Mobile Menu
let hamburger = document.querySelector("#hamburger")
function toggleNavbar() {
      document.getElementById("navbar").classList.toggle("expanded");
    }
hamburger.addEventListener("click", toggleNavbar)