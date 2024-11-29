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
let cartIcon = document.querySelector(".cart-icon");

let myProducts = [
  {
    id: 1,
    productName: "Toast Bread",
    productPrice: 15,
    productImage: "./Images/product-6.webp",
  },
  {
    id: 2,
    productName: "Oat Bread",
    productPrice: 16,
    productImage: "./Images/product-4.webp",
  },
  {
    id: 3,
    productName: "Wheat Bread",
    productPrice: 10,
    productImage: "./Images/product-3.webp",
  },
  {
    id: 4,
    productName: "Honey Cake",
    productPrice: 25,
    productImage: "./Images/product-2.webp",
  },
  {
    id: 5,
    productName: "Cinnamon Cake & Strawberry jam",
    productPrice: 30,
    productImage: "./Images/product-1.webp",
  },
  {
    id: 6,
    productName: "Cherry Cake",
    productPrice: 24,
    productImage: "./Images/product-5.webp",
  },
];
let boxes = document.querySelector(".boxes");
myProducts.slice(0, 6).forEach((product, index) => {
  let myBox = document.createElement("div");
  myBox.classList.add("box");
  let imageCover = document.createElement("div");
  imageCover.classList.add("image-cover");
  let img = document.createElement("img");
  img.setAttribute("alt", product.productName);
  img.src = product.productImage;
  imageCover.appendChild(img);
  myBox.appendChild(imageCover);
  let info = document.createElement("div");
  info.classList.add("info");
  let productName = document.createElement("p");
  productName.textContent = product.productName;
  let productPrice = document.createElement("span");
  productPrice.textContent = `$${product.productPrice}`;
  let addBtn = document.createElement("button");
  addBtn.textContent = "ADD";
  info.appendChild(productName);
  info.appendChild(productPrice);
  info.appendChild(addBtn);
  myBox.appendChild(info);
  boxes.appendChild(myBox);
});
