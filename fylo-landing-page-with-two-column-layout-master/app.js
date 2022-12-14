const forms = document.querySelectorAll('.form');
const emails = document.querySelectorAll('.email')

function removeState(){
  emails.forEach(function(email){
    let label = email.parentElement;
    label.classList.remove('success');
    label.classList.remove('error');
  })
}


function showError(input, message){
  let label = input.parentElement;
  label.classList.add('error');
  let small = label.querySelector('small');
  small.innerText = message;
}

function isValidEmail(email){
  const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return emailRegex.test(String(email).toLowerCase());
}

function showSuccess(input){
  let label = input.parentElement;
  label.classList.add('success');
}


forms.forEach(form =>{
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let currEmail = form.querySelector('.email');
    if(currEmail.value === ''){
      removeState();
      showError(currEmail, 'Email cannot be empty');
    }else if( !isValidEmail(currEmail.value)){
      removeState();
      showError(currEmail, 'Please check your email');
    }else{
      removeState();
      showSuccess(currEmail)
    }
  })
});