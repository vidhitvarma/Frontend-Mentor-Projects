const form = document.getElementById('form');
const email = document.getElementById('email');


function isValidEmail(email){
  const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;;
  return emailRegex.test(String(email).toLowerCase());
}

function showError(input,message){
  const label = input.parentElement;
  label.classList.add('error');
  const small = label.querySelector('small')
  small.innerText = message;
}

function noError(input){
  const label = input.parentElement;
  label.classList.remove('error');
}


form.addEventListener('submit', function(e){
  e.preventDefault();
  if(email.value === ''){
    showError(email,"Oops! Please check your email");
  }else if(!isValidEmail(email.value)){
    showError(email, "Oops! Please check your email");
  }
  else{
    noError(email)
  }
})