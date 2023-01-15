let buttons = document.querySelectorAll('.button');
let tanya = document.getElementById('tanya-image');
let john = document.getElementById('john-image');
let tanyaDesc = document.getElementById('tanya-description');
let johnDesc = document.getElementById('john-description');

buttons.forEach(function(button){
  button.addEventListener('click', function(){
    tanyaDesc.classList.toggle('hide');
    tanya.classList.toggle('hide');
    john.classList.toggle('hide');
    johnDesc.classList.toggle('hide');
  })
})