let form = document.querySelector('.input__containers'),
  formInputs = document.querySelectorAll('.js-input'),
  inputName = document.querySelector('.input-name'),
  inputEmail = document.querySelector('.input-email'),
  inputPhone = document.querySelector('.input-phone'),
  inputCheckbox = document.querySelector('.js-input-checkbox'),
  textboxText = document.querySelector('.checkbox-text'),
  errorTexts = document.querySelectorAll('.error-text')

function validateName(name){
  let re = /^[A-Za-zА-Яа-яЁё'-]+$/;
  return re.test(String(name).trim())
}
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
      nameVal = inputName.value,
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

  let nameErrorText = inputName.nextElementSibling;
  if(!validateName(nameVal)){
    console.log('name not valid')
    inputName.classList.add('error')
    nameErrorText.innerHTML = 'Неккоректное имя'
    return false
  } else{
    inputName.classList.remove('error')
    nameErrorText.innerHTML = 'ㅤ'
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


















/*const buttonSend = document.querySelector('.button__send');

const input = {
  Name: document.querySelector('.input-name'),
  Email: document.querySelector('.input-email'),
  Phone: document.querySelector('.input-phone')
};

function checkInput() {
  const allFilled = Object.values(input).every(inputField => inputField.value.trim() !== '');
  const isNameValid = /^[^\s]+$/.test(input.Name.value.trim());

  if (allFilled) {
    buttonSend.disabled = false;
    buttonSend.classList.add('enabled');
  } else {
    buttonSend.disabled = true;
    buttonSend.classList.remove('enabled');
  }

  if(isNameValid){
    input.Name.style.borderBottom = '2px solid rgb(84, 52, 228)'
    buttonSend.disabled = false;
  } else{
    input.Name.style.borderBottom = '2px solid red'
    buttonSend.classList.remove('enabled');
    buttonSend.disabled = true;
  }
}


Object.values(input).forEach(inputField => {
  inputField.addEventListener('input', checkInput);
});

checkInput();




buttonSend.addEventListener('click', () => {
  console.log(input.Name.value);
  console.log(input.Email.value);
  console.log(input.Phone.value);
  checkInput();
});
console.log(Object.values(input))

})*/