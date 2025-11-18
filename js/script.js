let theme;
let random_clr;
setInterval(() => {
    random_clr = Math.floor(Math.random() * 4) + 1;
    console.log(random_clr);
    if (random_clr == 1) {
        theme = "red";
    }
    else if (random_clr == 2) {
        theme = "blue";
    }
    else if (random_clr == 3) {
        theme = "green";
    }
    else if (random_clr == 4) {
        theme = "yellow";
    }

    if (theme == "red") {

        document.body.getElementsByTagName("style")[0].innerHTML = `:root {
                 --primary_color: #0f0f0f;
                 --secondery_color:  #005eff;
                 --text_color: white;
                 --hover_color: brightness(0) saturate(100%) invert(22%) sepia(98%) saturate(2158%) hue-rotate(195deg) brightness(99%) contrast(101%);
                 --invertion : invert(1);
                 }`;
        theme = "blue";
        document.getElementsByClassName("terminal")[0].setAttribute("src", `images/terminals/terminal_${theme}.gif`);
    }

    else if (theme == "blue") {

        document.body.getElementsByTagName("style")[0].innerHTML = `:root {
             --primary_color: #0f0f0f;
             --secondery_color: #00ff00;
             --text_color: white;
             --hover_color: invert(53%) sepia(85%) saturate(300%) hue-rotate(67deg) brightness(110%) contrast(101%);
             --invertion : invert(1);
         }`;
        theme = "green";
        document.getElementsByClassName("terminal")[0].setAttribute("src", `images/terminals/terminal_${theme}.gif`);

    }
    else if (theme == "green") {

        document.body.getElementsByTagName("style")[0].innerHTML = `:root {
             --primary_color: #0f0f0f;
             --secondery_color: #eeff00ff;
             --text_color: white;
             --hover_color: brightness(0) saturate(100%) invert(74%) sepia(99%) saturate(1860%) hue-rotate(4deg) brightness(119%) contrast(109%);
             --invertion : invert(1);
         }`;
        theme = "yellow";
        document.getElementsByClassName("terminal")[0].setAttribute("src", `images/terminals/terminal_${theme}.gif`);

    }
    else if (theme == "yellow") {

        document.body.getElementsByTagName("style")[0].innerHTML = `:root {
             --primary_color: #0f0f0f;
             --secondery_color: red;
             --text_color: white;
             --hover_color:  brightness(0) saturate(100%) invert(16%) sepia(95%) saturate(6054%) hue-rotate(359deg) brightness(97%) contrast(118%);
             --invertion : invert(1);
         }`;
        theme = "red";
        document.getElementsByClassName("terminal")[0].setAttribute("src", `images/terminals/terminal_${theme}.gif`);

    }
}, 20000);


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

