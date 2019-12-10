$(document).ready(function() {
  var removeCartItemBtn = document.querySelectorAll(".remove-btn");
  for (var i = 0; i < removeCartItemBtn; i++) {
    var button = removeCartItemBtn[i];
    button.addEventListener("click", removeCartItems);
  }

  var addToCart = document.getElementsByClassName("add-to-cart-btn");
  for (var i = 0; i < addToCart.length; i++) {
    var button = addToCart[i];
    button.addEventListener("click", addToCartClicked);
  }

  function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName("title")[0].innerText;
    var price = shopItem.getElementsByClassName("price")[0].innerText;
    var image = shopItem.getElementsByClassName("img-item")[0].src;
    addItemToCart(title, price, image);
  }

  function addItemToCart(title, price, image) {
    var cartRow = document.createElement("div");
    cartRow.classList.add("cart-row");
    var cartItems = document.getElementsByClassName("cart-items")[0];
    var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
    for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == title) {
        alert("This item is already in the cart");
        return;
      }
      continue;
    }

    var cartContent = `<div class="item cart-item">
      <span class="item-header cart-item-title mobile-none">${title}</span>
                        <div class="item-img">
                        <img class="img-item cart-img"src=${image}>
                        </div>
                        <div class="item-footer flex-row cart-footer">
                        <span class="item-header cart-title d-none mobile-block"><h5 class="text-center title">${title}</h5></span>
                        <span class="price cart-price">${price}</span>
                        <input type= "text" class="cart-quantity-input" id="quantity">
                        <span class="remove-btn btn"><i class="fas fa-trash-alt"></i></span>
                        </div>
                    </div>`;
    cartRow.innerHTML = cartContent;
    cartItems.append(cartRow);

    cartRow
      .getElementsByClassName("remove-btn")[0]
      .addEventListener("click", removeCartItems);
  }

  var checkout = document.getElementsByClassName("btn-purchase")[0];
  checkout.addEventListener("click", updateCartTotal);
  function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName("cart-items")[0];
    var cartRows = cartItemContainer.getElementsByClassName("cart-row");
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i];
      var cartPrice = cartRow.getElementsByClassName("cart-price")[0];
      var cartQty = cartRow.getElementsByClassName("cart-quantity-input")[0];
      var price = parseFloat(cartPrice.innerText.replace("$", ""));
      var quantity = cartQty.value;
      total = total + price * quantity * 1.05;
    }
    total = Math.round(total * 100) / 100;
    alert("Thank You For Shopping at Supravi! \nYour Total is $" + total);
  }

  function removeCartItems() {
    $(".remove-btn").click(function() {
      $(this)
        .parent()
        .parent()
        .parent()
        .fadeOut("normal", function() {
          $(this).remove();
          return;
        });
    });
  }

  var toggle = document.querySelector(".toggler");
  var nav = document.querySelector(".navbar");
  toggle.addEventListener("click", function() {
    nav.classList.toggle("active");
  });

  var dropDownbtn = document.querySelectorAll(".drop-down");
  var dropdown = document.querySelectorAll(".nav-dropdown");
  dropDownbtn.forEach(function(button) {
    dropdown.forEach(function(dropdown) {
      button.addEventListener("click", function(event) {
        event.target = dropdown.classList.toggle("active");
      });
    });
  });
});
