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
        navMenu.classList.remove("show-menu");
    });
}
/*=============== REMOVE MENU MOBILE ===============*/

/*=============== scroll navbar===============*/

  const navbar = document.querySelector('nav');


  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
  
    if (scrollY > 0 && scrollY < 50) {
      // کاهش فاصله از بالا در اسکرول کم
      navbar.classList.add('top-[calc(4rem-2vw)]'); // فاصله از بالا کاهش پیدا می‌کنه
      navbar.classList.remove('top-14'); // فاصله اولیه از بالا
    } else if (scrollY >= 50) {
      // وقتی اسکرول بیشتر از 50 شد، navbar به بالای صفحه می‌چسبه
      navbar.classList.add('top-0');
      navbar.classList.remove('top-[calc(4rem-2vw)]');
      navbar.classList.remove('top-14'); // فاصله از بالا به صفر می‌رسه
    } else {
      // برگشت به حالت اولیه
      navbar.classList.add('top-14');
      navbar.classList.remove('top-[calc(4rem-2vw)]');
      navbar.classList.remove('top-0');
    }
  });
  
  /*=============== progress bar ===============*/

