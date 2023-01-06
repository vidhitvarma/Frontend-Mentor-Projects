const form = document.getElementById('form');
const email = document.getElementById('email');

function removeState(input){
  let label = input.parentElement;
  label.classList.remove('error');
}

function showError(input,message){
  let label = input.parentElement;
  label.classList.add('error');
  let small = label.querySelector('small')
  small.innerText = message;
}

function isValidEmail(email){
  const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;;
  return emailRegex.test(String(email).toLowerCase());
}


form.addEventListener('submit',(e)=>{
  e.preventDefault();
  if(email.value === ''){
    removeState(email);
    showError(email,'Error, please check your email');
  }else if(!isValidEmail(email.value)){
    removeState(email);
    showError(email,'Error, please check your email');
  }else{
    removeState(email);
  }
})