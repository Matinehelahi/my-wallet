/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navClose = document.getElementById('nav-close'),
    navToggle = document.getElementById('nav-toggle');

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', function(){
        navMenu.classList.add("show-menu");
    });    
}
/* Menu hidden */
if (navClose){
    navClose.addEventListener('click',function(){
        navMenu.classList.remove("nav-show");
    });
}
/*=============== REMOVE MENU MOBILE ===============*/
