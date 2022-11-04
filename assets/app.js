/* NAVBAR */
const bt_menu = document.querySelector("#btn_menu");
const nav = document.querySelector("#nav");
const bg_menu = document.querySelector("#back_menu");

bt_menu.addEventListener("click", mostrar_menu);
bg_menu.addEventListener("click", ocultar_menu);

function mostrar_menu(){
    nav.style.right = "0px";
    bg_menu.style.display = "block"
}

function ocultar_menu(){
    nav.style.right = "-500px";
    bg_menu.style.display = "none"
}