const hamburgerMenu = document.getElementById('hamburger-menu');
const openButton = document.getElementById('hamburger-open');
const closeButton = document.getElementById('hamburger-close')
const mobileNav = document.getElementById('mobile-nav')


hamburgerMenu.addEventListener('click',function(){
  openButton.classList.toggle('hide');
  closeButton.classList.toggle('hide');
  mobileNav.classList.toggle('hide')
})