const addToCartBtns =
  document.querySelectorAll(".add-to-cart-btn")

addToCartBtns.forEach(function (item) {
  item.addEventListener("click", function (e) {
    handleAddToCart(e);
  })

});

function handleAddToCart(e) {
  //alert(e.target.parentNode.dataset.name);
  const newProductName = document.createElement("p")
  const newProductPrice = document.createElement("p")
  const removeBtn = document.createElement("button")
  const newDiv = document.createElement("div")


  newProductName.textContent = e.target.parentNode.dataset.name
  newProductPrice.innerHTML = "&#x020a6;"+e.target.parentNode.dataset.price
  removeBtn.textContent = "Remove"
  removeBtn.addEventListener("click", function(){
    newDiv.remove();
  })


  newDiv.appendChild(newProductName)
  newDiv.appendChild(newProductPrice)
  newDiv.appendChild(removeBtn)

  const cartItems = document.querySelector(".cart-items")
  cartItems.appendChild(newDiv)

}




