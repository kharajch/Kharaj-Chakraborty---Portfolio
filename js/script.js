const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const nav_ul = document.querySelector('.nav_ul');
let ham_on = false;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');

    if (ham_on == false) {
        ham_on = true;
        nav_ul.style.display = "block";
        navbar.style.height = "30vh";
    }
    else if (ham_on == true) {
        ham_on = false;
        nav_ul.style.display = "none";
        navbar.style.height = "70px";
    }
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
}));

