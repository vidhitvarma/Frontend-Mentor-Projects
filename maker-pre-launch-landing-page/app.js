const form = document.getElementById('form');
const email = document.getElementById('email');

function isValidEmail(email){
  const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;;
  return emailRegex.test(String(email).toLowerCase());
}

function removeState(input){
  let label = input.parentElement;
  label.classList.remove('error');
}

function showError(input,message){
  let label = input.parentElement;
  label.classList.add('error');
  let small = label.querySelector('.error-msg');
  small.innerText = message;
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  if(email.value === ''){
    removeState(email);
    showError(email, 'Oops! That doesn’t look like an email address')
  }else if(!isValidEmail(email.value)){
    removeState(email);
    showError(email, 'Oops! That doesn’t look like an email address')
  }else{
    removeState(email);
  }
})