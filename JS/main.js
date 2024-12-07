let nav = document.querySelector("nav");
let mylinks = [
  { linkName: "Home", to: "#home" },
  { linkName: "Menu", to: "#menu" },
  { linkName: "About", to: "#about" },
  { linkName: "Services", to: "#services" },
  { linkName: "Contact", to: "#contact" },
];
let myUnOrderList = document.createElement("ul");
let body = document.querySelector("body");

mylinks.forEach((item, index) => {
  let link = document.createElement("a");
  link.innerHTML = item.linkName;
  link.setAttribute("href", item.to);
  let li = document.createElement("li");
  li.appendChild(link);
  if (index === 0) link.classList.add("active");

  link.addEventListener("click", () => {
    document
      .querySelectorAll("nav a")
      .forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
    nav.classList.remove("active");
    btn.classList.remove("burger");
  });
  myUnOrderList.appendChild(li);
});
nav.appendChild(myUnOrderList);

let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  btn.classList.toggle("burger");
  nav.classList.toggle("active");
});
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !btn.contains(e.target)) {
    btn.classList.remove("burger");
    nav.classList.remove("active");
  }
});
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.style.backgroundColor = "#181b1e";
    header.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.backgroundColor = "";
    header.style.boxShadow = "";
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelector(".boxes");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const myProducts = [
    {
      id: 1,
      productName: "Toast Bread",
      productPrice: 15,
      productImage: "../images/product-6.webp",
    },
    {
      id: 2,
      productName: "Oat Bread",
      productPrice: 16,
      productImage: "./images/product-4.webp",
    },
    {
      id: 3,
      productName: "Wheat Bread",
      productPrice: 10,
      productImage: "./images/product-3.webp",
    },
    {
      id: 4,
      productName: "Honey Cake",
      productPrice: 25,
      productImage: "./images/product-2.webp",
    },
    {
      id: 5,
      productName: "Cinnamon Cake & Strawberry jam",
      productPrice: 30,
      productImage: "./images/product-1.webp",
    },
    {
      id: 6,
      productName: "Cherry Cake",
      productPrice: 24,
      productImage: "./images/product-5.webp",
    },
  ];

  function renderProducts() {
    myProducts.forEach((product) => {
      const myBox = document.createElement("div");
      myBox.classList.add("box");
      myBox.innerHTML = `
        <div class="image-cover">
          <img src="${product.productImage}" alt="${product.productName}">
        </div>
        <div class="info">
          <p>${product.productName}</p>
          <span>$${product.productPrice}</span>
          <button class="add-to-cart" data-id="${product.id}">ADD</button>
        </div>
      `;
      boxes.appendChild(myBox);
    });

    document.querySelectorAll(".add-to-cart").forEach((button) => {
      button.addEventListener("click", (e) => {
        const productId = parseInt(e.target.dataset.id, 10);
        addToCart(productId);
      });
    });
  }

  function addToCart(productId) {
    const product = myProducts.find((product) => product.id === productId);
    if (!product) return;
    const existingProduct = cart.find((item) => item.id === productId);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.productName} added to the cart!`);
  }

  renderProducts();
});
