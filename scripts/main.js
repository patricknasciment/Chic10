function animationButtonSearch(){
  const inputSearch = document.querySelector('.js-search-input');
  const buttonSearch = document.querySelector('.js-search-button');


  buttonSearch.addEventListener('click', () => {
    inputSearch.classList.toggle('active');
    buttonSearch.classList.toggle('active')
  });
}

window.onload = function (){
  animationButtonSearch()
}

