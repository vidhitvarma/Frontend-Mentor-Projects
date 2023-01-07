const imgContainer = document.getElementById('carousel__images');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const image = document.querySelectorAll('#carousel__images img')
let index = 2;


function changeImg(){
  if(index > image.length - 1){
    index = 0;
  }else if( index < 0){
    index = image.length - 1;
  }

  imgContainer.style.transform = `translateX(${-index * 270}px)`;
}

leftBtn.addEventListener('click', function(){
  index --;
  changeImg();
})

rightBtn.addEventListener('click', function(){

  index ++;
  changeImg();
})