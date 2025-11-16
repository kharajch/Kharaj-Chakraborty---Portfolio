        document.getElementsByClassName("logo")[0].addEventListener("click", ()=>{

            document.body.innerHTML += `<style>:root {
            --primary_color: black;
            --secondery_color: #00ff00;
            --text_color: white;
        }</style>`;
    })
        
        
        const animation_end = () => {
            document.getElementsByClassName("hello")[0].setAttribute("style", "border: 0px;")
            document.getElementsByClassName("intro")[0].setAttribute("style", "border: 0px;")
            document.getElementsByClassName("name")[0].setAttribute("style", "border: 0px;")
            document.getElementsByClassName("slogan")[0].setAttribute("style", "border: 0px;")
        }
        setTimeout(() => {
            animation_end();
        }, 4000);