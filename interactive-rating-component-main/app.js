const button = document.getElementById('button');
const ratings = document.querySelectorAll('#rating-container .rating-btn');
const mainContainer = document.getElementById('main-tab');
const thanksContainer = document.getElementById('hidden-tab');
const rated = document.getElementById('rated');

ratings.forEach(function(rating){
  rating.addEventListener('click',function(){
    rated.innerText = rating.innerText;
  });
})


button.addEventListener('click', function(){
  mainContainer.style.display = 'none';
  thanksContainer.classList.remove('hide');

  
})

