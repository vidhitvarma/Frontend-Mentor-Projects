const form = document.getElementById('form');
const firstName = document.getElementById('first Name');
const lastName = document.getElementById('last Name');
const email = document.getElementById('email');
const password = document.getElementById('password');

//Functions
function checkRequired(inputArr){
  inputArr.forEach(function(input){
    if(input.value.trim() === ''){
      showError(input,`${getFieldName(input)} cannot be empty`);
    }
    //Email error
    else if(input === email){
      if(!isValidEmail(email.value)){
        showError(input, 'Looks like this is not an email' );
      }else{
        showSucces(email);
      }
    }
    else{
      showSucces(input)
    }
  })
}

function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function showError(input,message){
  if(input === email){
    email.placeholder = 'email@example/com';
  }
  const formCtrl = input.parentElement;
  formCtrl.classList.add('error');
  formCtrl.classList.remove('success');
  const small = formCtrl.querySelector('small');
  small.innerText = message;
}

function showSucces(input){
  const label = input.parentElement;
  label.classList.remove('error');
  label.classList.add('success');
}

function isValidEmail(email){
  const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;;
  return emailRegex.test(String(email).toLowerCase());
}


//event listeners

form.addEventListener('submit', function(e){
  e.preventDefault();

  checkRequired([firstName,lastName,email,password]);
});


