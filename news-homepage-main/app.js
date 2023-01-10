const hamburgerOpen = document.querySelector('.hamburger-menu');
const hamburgerClose = document.querySelector('.hamburger-close');
const mobileNav = document.getElementById('mobile-nav');


hamburgerOpen.addEventListener('click',()=>{
  mobileNav.classList.toggle('hidden')
})

hamburgerClose.addEventListener('click',()=>{
  mobileNav.classList.toggle('hidden')
})