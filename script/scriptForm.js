const buttonSend = document.querySelector('.button__send');

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




document.querySelector('.upload__icon').addEventListener('click', () => {
  document.querySelector('#fileInput').click();
})