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


/*=============== API ===============*/

async function fetchVTGPrice() {
    try {
      const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=victory-gem&vs_currencies=usd');
      const data = await res.json();
      const price = data['victory-gem'].usd;
  
      document.getElementById('vtg-price').innerText = price.toFixed(6); // نمایش با 6 رقم اعشار
    } catch (error) {
      document.getElementById('vtg-price').innerText = "خطا در دریافت قیمت";
      console.error(error);
    }
  }
  
  // اولین بار اجرا
  fetchVTGPrice();
  
  // هر 60 ثانیه یک‌بار آپدیت
  setInterval(fetchVTGPrice, 60000);
  