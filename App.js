let barEl = document.getElementById('bar');
let NavbarEl = document.getElementById('Navbar');

barEl.addEventListener("click", function() {
    NavbarEl.classList.toggle('navbar-visible');
});
