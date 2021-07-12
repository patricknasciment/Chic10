function slide(){
  const buttonProximo = document.querySelector('.proximo');
  const buttonAnterior = document.querySelector('.anterior');
  const content = document.querySelectorAll('.js-content > section');

  let currentSelect = 'first-product';


  buttonProximo.addEventListener('click', () => {
    if( currentSelect === 'first-product' ){
      content[0].classList.toggle('js-disable');
      content[1].classList.toggle('js-disable');
      currentSelect = 'second-product'
    }else if (currentSelect === 'second-product'){
      content[1].classList.toggle('js-disable');
      content[2].classList.toggle('js-disable');
      currentSelect = 'third-product';
    }else if(currentSelect === 'third-product'){
      content[2].classList.toggle('js-disable');
      content[0].classList.toggle('js-disable')
      currentSelect = 'first-product'
    }
  });

  buttonAnterior.addEventListener('click', () => {
    if (currentSelect === 'first-product'){
    content[0].classList.toggle('js-disable');
    content[2].classList.toggle('js-disable');
    currentSelect = 'third-product';
    }else if (currentSelect === 'third-product'){
      content[2].classList.toggle('js-disable');
      content[1].classList.toggle('js-disable');
      currentSelect = 'second-product';
    } else if ( currentSelect = 'second-product') {
      content[0].classList.toggle('js-disable');
      content[1].classList.toggle('js-disable');
      currentSelect = 'first-product';
    }
 });
}


slide();