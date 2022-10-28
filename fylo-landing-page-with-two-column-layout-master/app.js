const form1 = document.getElementById('form-top');
const form2 = document.getElementById('form-bottom')
const emailTop = document.getElementById('email');
const emailBot = document.getElementById('email-bottom');


//functions
function showError(input,message){
  const formControl = input.parentElement;
  formControl.classList.add('error');
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function validateEmail(email){
  const regex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return regex.test(String(email).toLowerCase());
}

function showSucces(input){
  const formControl = input.parentElement;
  formControl.classList.remove('error');

}

//event listener
form1.addEventListener('submit',function(e){
  e.preventDefault();
  if(emailTop.value === ''){
    showError(emailTop, "Email can't be empty")
  }else if(!validateEmail(emailTop)){
    showError(emailTop,"Please check your email")
  }else{
    showSucces(emailTop);
  }
})
form2.addEventListener('submit',function(e){
  e.preventDefault();
  if(emailBot.value === ''){
    showError(emailBot, "Email can't be empty")
  }else if(!validateEmail(emailBot)){
    showError(emailBot,"Please check your email")
  }else{
    showSucces(emailBot);
  }
})

