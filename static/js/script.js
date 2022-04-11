var switches = document.getElementsByClassName("switch");
var theme_icon = document.getElementById("theme_icon");
for (var i of switches){
    i.addEventListener('click', function(){
        let theme = this.dataset.theme;
        if (theme == "light"){
            this.dataset.theme = "dark";
            theme_icon.src = "./static/img/sun.png";
            switch2dark();
        }
        else{
            this.dataset.theme = "light";
            theme_icon.src = "./static/img/moon.png";
            switch2light();
        }
    })
}
let body = document.getElementsByTagName("body")[0];
function switch2dark(){
    body.classList.add("dark");
    body.classList.remove("light");
}

function switch2light(){
    body.classList.add("light");
    body.classList.remove("dark");
}

const menu_toggler = ()=>{
    let menu = document.getElementById('menu');
    menu.classList.toggle('active');

}