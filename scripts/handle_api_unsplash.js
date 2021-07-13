function loadContentProducts() {
  let search = 'model'
  const API_KEY = 'xslX2V4vo5NL1r_S9ARnFAcGvaxRc6aVZa6uVQ3wkhE'
  const url = `https://api.unsplash.com/search/photos?query=${search}&per_page=12&client_id=${API_KEY}`

  fetch(url)

  .then(response => {
    if(response.ok)
      return response.json();
    else 
      console.log(`Erro ${response.status}`)
  })

  .then(data => {
    for(let i = 0; i < data.results.length; i++){
      const gridItems = document.getElementById('js-items-grid').innerHTML += `
      <div>
      <div class="container-img">
        <img src="${data.results[i].urls.regular}" alt=""    class="product-img">
        <div class="overlay">
            <span class=""><img class="js-shopping-bag" src="./img/svgs/shopping-bag.svg" alt=""></span>
        </div>
      </div>
      <div class="infos">
          <div class="left-info">
              <a href=""><h1 class="name-product">Nome da Peca</h1></a>
              <p class="price">R$ 99,99</p>
          </div>
      </div>
      </div>
      `;
    }
  })
}

 loadContentProducts();