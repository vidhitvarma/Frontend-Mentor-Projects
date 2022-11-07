const share = document.querySelector('.share');
const sharedContainer = document.getElementById('share-container');
const bottomContainer = document.getElementById('bottom-container');


share.addEventListener('click', ()=>{
  share.classList.toggle('invert');
  bottomContainer.classList.toggle('invertBg');
  sharedContainer.classList.toggle('hide');
})