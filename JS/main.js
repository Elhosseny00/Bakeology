let nav = document.querySelector("nav");
let mylinks = [
  { linkName: "Home", to: "#home" },
  { linkName: "About", to: "#about" },
  { linkName: "Menu", to: "#menu" },
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
    header.style.position = "fixed"
    header.style.top = "0"
    header.style.left = "0"
    header.style.backgroundColor = "#181b1e";
    header.style.boxShadow =
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px";
  } else {
    header.style.position = ""
    header.style.top = ""
    header.style.left = ""
    header.style.backgroundColor = "";
    header.style.boxShadow = "";
  }
});