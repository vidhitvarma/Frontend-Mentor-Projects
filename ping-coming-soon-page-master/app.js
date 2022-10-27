const form = document.getElementById('form');
const email = document.getElementById('email');

//functions

function isValidEmail(email){
  const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;;
  return emailRegex.test(String(email).toLowerCase());
}

function showError(input,message){
  const label = input.parentElement;
  label.classList.remove('success');
  label.classList.add('error');
  const errorMsg = label.querySelector('small');
  errorMsg.innerText = message;
}

function noError(input){
  const label = input.parentElement;
  label.classList.remove('error');
  label.classList.add('success');
}

form.addEventListener('submit',function(e){
  e.preventDefault();
  if(email.value === ''){
    showError(email,"Email cannot be empty");
  }else if(!isValidEmail(email.value)){
    showError(email, "Please provide a valid email address");
  }
  else{
    noError(email)
  }
});