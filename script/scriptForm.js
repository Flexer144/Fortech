let form = document.querySelector('.input__containers'),
  formInputs = document.querySelectorAll('.js-input'),
  inputName = document.querySelector('.input-name'),
  inputEmail = document.querySelector('.input-email'),
  inputPhone = document.querySelector('.input-phone'),
  inputCheckbox = document.querySelector('.js-input-checkbox'),
  textboxText = document.querySelector('.checkbox-text'),
  errorTexts = document.querySelectorAll('.error-text')

function validateEmail(email){
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase())
}
function validateCountry(country){
  let re = new RegExp('.co$');
  return re.test(String(country).toLowerCase())
}
function validatePhone(phone){
  let re = /^(?:\+7|7|\+8|8)?[\s\-]?(\(?\d{3}\)?[\s\-]?)?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/;
  return re.test(String(phone))
}


form.onsubmit = function(){
  let emailVal = inputEmail.value,
      phoneVal = inputPhone.value,
      emptyInputs = Array.from(formInputs).filter(input => input.value === '')

  formInputs.forEach((input, index)=>{
    if(input.value.trim() === ''){
      input.classList.add('error')
      errorTexts[index].innerHTML = 'Неккоректно заполнено поле'
    } else {
      input.classList.remove('error')
      errorTexts[index].innerHTML = 'ㅤ'
    }
  })

  if(emptyInputs.length !== 0){
    console.log('input not filled')
    return false;
  }

  let emailErrorText = inputEmail.nextElementSibling;
  if(!validateEmail(emailVal)){
    console.log('email not valid')
    inputEmail.classList.add('error')
    emailErrorText.innerHTML = 'Неккоректный email'
    return false
  } else{
    inputEmail.classList.remove('error')
    emailErrorText.innerHTML = 'ㅤ'
  }

  if(validateCountry(emailVal)){
    console.log('email from Columbia')
    inputEmail.classList.add('error')
    emailErrorText.innerHTML = 'Неккоректный email'
    return false
  } else{
    inputEmail.classList.remove('error')
    emailErrorText.innerHTML = 'ㅤ'
  }

  let phoneErrorText = inputPhone.nextElementSibling
  if(!validatePhone(phoneVal)){
    console.log('number in not correct')
    inputPhone.classList.add('error')
    phoneErrorText.innerHTML = 'Неккоректный номер телефона'
    return false
  } else{
    inputPhone.classList.remove('error')
    phoneErrorText.innerHTML = 'ㅤ'
  }

  if(!inputCheckbox.checked){
    console.log('checkbox not check')
    textboxText.classList.add('checkbox-error');
    return false;
  }
  else{
    textboxText.classList.remove('checkbox-error')
  }
}



document.querySelector('.upload__icon').addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('#fileInput').click();
});