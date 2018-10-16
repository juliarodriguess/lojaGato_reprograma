window.onload = function() {
    //alert("carregou");
    showProducts();
  };
  
  function getProducts(){
    return data["items"];
  }
  
  function showProducts(){
    let productDiv = document.getElementById("products");
    productDiv.innerHTML = `
      ${getProducts().map((produto) => `
        <div class="product">
          <img src="${produto["product"]["images"][0]}" class="product-img" />
          <div class="text-name">
            <h3 class="product-name">${produto["product"]["name"]}</h3>
          </div>
          <div class="text-price">
            <p class="product-price">${Number(produto["product"]["price"]["value"]).toLocaleString('pt-br', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</p>
          </div>
        </div>
        `).join("")}
    `
  }   


    




  
    /*for (produto of getProducts()){
      let productDiv = document.getElementById("products");
      productDiv.innerHTML += "<div class='product'>" 
      + "<img src=" + produto["product"]["images"][0] + " class='product-img' />"
      + "<div class='text-name'>" 
      + "<h3 class='product-name'>$" + produto["product"]["name"] + "</h3>"
      + "</div>" + "<div class='text-price'>"
      + "<p class='product-price'>" 
      + Number(produto["product"]["price"]["value"]).toLocaleString('pt-br', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })
      + "</p>" + "</div>" + "</div>"
    }*/
  
let button = document.getElementById("btnSubmit")
button.addEventListener('click', function(event) {
    event.preventDefault();
    let nomeProduto = document.getElementById("nomeProduto").value;
    let valorProduto = document.getElementById("preçoProduto").value;
    let imagemProduto = document.getElementById("imagemProduto").value;
    let newProduct = {
        "product": {
            "name": "",
            "images": [],
            "price": {
                "value": 0
            }
        }
    }
    newProduct.product.name = nomeProduto;
    newProduct.product.images.push(imagemProduto);
    newProduct.product.price.value = valorProduto;
    data.items.push(newProduct);
    showProducts();
});