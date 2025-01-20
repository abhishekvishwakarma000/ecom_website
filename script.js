// ---------------internet-------------------
window.addEventListener('offline', function() {
  document.getElementById('offline-message').style.display = 'block'; 
});

window.addEventListener('online', function() {
  document.getElementById('offline-message').style.display = 'none'; 
});

// Check initial connection status
if (!navigator.onLine) {
  document.getElementById('offline-message').style.display = 'block'; 
}
// --------------------------internet-----------------
let category = document.querySelector('.category');
let cart = document.querySelector('.cart');
let profile = document.querySelector('.profile-container');
let men = document.querySelector('.mens');


document.querySelector('.taskbar-category').onclick = () =>{
  category.classList.toggle('active');
 }
 document.querySelector('.close-btn2').onclick = () =>{
  category.classList.remove('active');
 }
 
document.querySelector('.taskbar-cart').onclick = () =>{
  cart.classList.toggle('active');
 }
 document.querySelector('.close-btn1').onclick = () =>{
  cart.classList.remove('active');
 }
document.querySelector('.taskbar-profile').onclick = () =>{
 profile.classList.toggle('active');
}
document.querySelector('.close-btn').onclick = () =>{
  profile.classList.remove('active');
 }

 document.querySelector('#mens').onclick = () =>{
  men.classList.toggle('active');
 }
 document.querySelector('.close-btn-men .bx-left-arrow-alt').onclick = () =>{
   men.classList.remove('active');
  }

  



// --------slider---------------------
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
    loop: true, // Enables continuous loop mode
    autoplay: {
      delay: 2000, // Auto-slide every 3 seconds
      disableOnInteraction: false, // Continue autoplay after user interaction
    },
    pagination: {
      el: '.swiper-pagination',
     // clickable: true, 
      dynamicBullets:true
    },
    
  });
});

// -------------------slider -------------------















 


 

 
 