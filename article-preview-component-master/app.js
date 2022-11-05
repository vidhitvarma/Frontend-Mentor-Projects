const shares = document.querySelectorAll('.share');
const profileContainer = document.getElementById('profile-container');
const shareContainer = document.getElementById('share-container');


shares.forEach(function(share){
  share.addEventListener('click',function(e){
    profileContainer.classList.toggle('hidden');
    shareContainer.classList.toggle('hidden');
  })
})