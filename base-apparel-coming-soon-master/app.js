const form = document.getElementById('form');
const email = document.getElementById('email');



//Functions

function isValidEmail(email){
  const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return emailRegex.test(String(email).toLowerCase());
}

function showError(input,message){
  const formCtrl = input.parentElement;
  formCtrl.classList.remove('success');
  formCtrl.classList.add('error');
  const small = formCtrl.querySelector('small');
  small.innerText = message;
}

function noError(input){
  const formCtrl = input.parentElement;
  formCtrl.classList.remove('error');
  formCtrl.classList.add('success');
}


// Event listeners
form.addEventListener('submit',function(e){
  e.preventDefault();
  if(email.value === ''){
    showError(email,"Email cannot be empty");
  }else if(!isValidEmail(email.value)){
    showError(email, "Please provide a valid email");
  }
  else{
    noError(email)
  }
});