const form = document.getElementById('contact-form');
const userName = document.getElementById('name');
const email = document.getElementById('email');


function checkRequired(inputArray){
  inputArray.forEach(function(input){
    if(input.value.trim() === ''){
      removeState(input);
      showError(input, 'Sorry, invalid format here');
    }else if( input === email){
      if(!isValidEmail(email.value)){
        removeState(input);
        showError(input, 'Sorry, invalid format here');
      }else{
        removeState(input);
        showSuccess(input);
      }
    }else{
      removeState(input);
      showSuccess(input);
    }
  })
}

function removeState(input){
  let label = input.parentElement;
  label.classList.remove('error');
  label.classList.remove('success');
}

function showError(input, message){
  let label = input.parentElement;
  label.classList.add('error');
  let small = label.querySelector('.error-msg');
  small.innerText = message;
}

function showSuccess(input){
  let label = input.parentElement;
  label.classList.add('success');
}

function isValidEmail(email){
  const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;;
  return emailRegex.test(String(email).toLowerCase());
}



form.addEventListener('submit',function(e){
  e.preventDefault();
  checkRequired([userName,email]);
})

