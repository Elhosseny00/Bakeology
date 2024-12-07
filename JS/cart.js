document.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.querySelector(".cart-box");
  const cartitle = document.querySelector(".header-text");
  const countItem = document.querySelector(".count-item");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function renderCart() {
    cartContainer.innerHTML = "";
    const totalcount = cart.reduce((count, item) => count + item.quantity, 0);
    countItem.innerHTML = totalcount;

    if (cart.length === 0) {
      cartitle.innerHTML = "<p>Your Cart Is Empty &#128561;</p>";
    } else {
      cartitle.innerHTML = "<p>Take Your Order &#128522;</p>";
    }

    cart.forEach((item, index) => {
      const itemBox = document.createElement("div");
      itemBox.className = "product-box";
      itemBox.innerHTML = `
<div class="main-info">
        <div class="image-cover">
          <img src="${item.productImage}" alt="${item.productName}">
        </div>
        <div class="text">
        <p>${item.productName}</p>
        <span>$${item.productPrice}</span>
        </div>
</div>
<div class="btns">
<button class="increase">+</button>
<span>${item.quantity}</span>
<button class="decrease">-</button>
</div>
<span class="total">$${item.quantity * item.productPrice}</span>
<button class="delete">X</button>
      `;

      const increaseBtn = itemBox.querySelector(".increase");
      const decreaseBtn = itemBox.querySelector(".decrease");
      const deleteBtn = itemBox.querySelector(".delete");

      // Increase quantity
      increaseBtn.addEventListener("click", () => {
        item.quantity += 1;
        saveCart();
        renderCart();
      });

      // Decrease quantity
      decreaseBtn.addEventListener("click", () => {
        if (item.quantity > 1) {
          item.quantity -= 1;
          saveCart();
          renderCart();
        } else {
          let popup = document.createElement("div");
          popup.className = "pop-up";
          popup.innerHTML = `${product.productName} Added To Cart`;
          body.appendChild(popup);
          console.log(popup);
          setTimeout(() => {
            popup.innerHTML = "";
          }, 3000);
        }
      });

      // Delete item
      deleteBtn.addEventListener("click", () => {
        cart.splice(index, 1); // Use index here
        saveCart();
        renderCart();
      });

      cartContainer.appendChild(itemBox);
    });

    const count = document.querySelector(".count-item-2");
    const totalBefore = document.querySelector(".price-before");
    count.innerHTML = totalcount;

    let tax = 2 / 100; // Tax percentage
    let dis = 4 / 100; // Discount percentage

    const total = cart.reduce(
      (sum, item) => sum + item.productPrice * item.quantity,
      0
    );
    totalBefore.innerHTML = `$${total}`;

    let totalAfterTax = total + total * tax;
    let totalAfterDis = totalAfterTax - totalAfterTax * dis;
    const totalBox = document.querySelector(".price-after");
    totalBox.innerHTML = `$${totalAfterDis.toFixed(1)}`;
  }

  renderCart();
});
