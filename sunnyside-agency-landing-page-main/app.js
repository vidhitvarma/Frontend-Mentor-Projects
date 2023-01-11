const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileNav = document.getElementById('mobile-nav');

hamburgerMenu.addEventListener('click',()=>{
  mobileNav.classList.toggle('hidden')
})