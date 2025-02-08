const menuEl = document.querySelectorAll('.menu__item-js');
const menuLanguage = document.querySelectorAll('.menu__language-js');

menuEl.forEach((menuEl) => {
    menuEl.addEventListener('mouseenter', (event) => {
      event.target.children[1].classList.remove('border-translate')
      event.target.children[0].classList.add('ON')
    })
    
    menuEl.addEventListener('mouseleave', (event) => {
      event.target.children[1].classList.add('border-translate')
      event.target.children[0].classList.remove('ON')
    })
  })

  menuLanguage.forEach((menu) => {
    menu.addEventListener('click', (event) => {
      const element = event.target;
      if (!element.classList.contains('selected-language')) { 
        inspectA(); 
        element.classList.add('selected-language'); 
      } else { 
        element.classList.remove('selected-language'); 
      } 
    })
  })

  function inspectA(){
    const element = document.querySelector('.selected-language')
    if(element){
      element.classList.remove('selected-language')
    }
  }

let button = document.querySelector('.header-burger')
let bodyWrapper = document.querySelector('.body__wrapper')

button.addEventListener('click', ()=>{
  if(!bodyWrapper.classList.contains('open')){
    bodyWrapper.classList.add('open')
  } else if(bodyWrapper.classList.contains('open')){
    bodyWrapper.classList.remove('open')
  }
})