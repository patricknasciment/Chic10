
function modalLogin (){
  const btnOpenModalLogin = document.querySelectorAll('.js-open-modal');
  const modalLogin = document.querySelector('.js-modal-login')
  const closeModalLogin = document.querySelector('.js-close-modal')

  btnOpenModalLogin.forEach((btn) => {
    btn.addEventListener("click", () => {
      modalLogin.classList.add('show');
    })
  })

  closeModalLogin.addEventListener("click", () => {
    modalLogin.classList.remove('show');
  })
}

function putInTheBag (){
  const shoppingIconItem = document.querySelectorAll(".js-shopping-bag");
  const counterCrate = document.querySelectorAll('.js-counter');
  let shoppingBagCrate = 0;
  
  console.log()

  shoppingIconItem.forEach((icon) => {
    icon.addEventListener("click", () => {
      icon.classList.toggle('check');
      if (icon.classList[1] === 'check') {
        icon.src = './img/svgs/check-square.svg';
        shoppingBagCrate++;
        
      } else{
        icon.src = './img/svgs/shopping-bag.svg'
        shoppingBagCrate--;
      }
      
      counterCrate[0].innerHTML = shoppingBagCrate;
      counterCrate[1].innerHTML = shoppingBagCrate;
    });
  });



}



putInTheBag();
modalLogin();



