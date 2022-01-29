"use strict";

const list_products = async (event) => {
  event.preventDefault();
  const tbody = document.querySelector(".tbody-product");

  const product_request = await fetch("http://localhost:3333/produtos");
  const data = await product_request.json();

  let tr = document.createElement("tr");
  let td = document.createElement("td");
  
  for (let i = 0; i < data.length; i++) {
    tr = document.createElement("tr");
    for (let prop in data[i]) {
      td = document.createElement("td");
      td.innerText = data[i][prop];
      console.log(td, td.innerText);
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
};

const post_product = async (event) => {
  event.preventDefaut();
  let forms = document.querySelectorAll(".form-control");
  console.log(forms);
};

(async function () {
  const list_products_btn = document.querySelector("#btn-list-product");
  const post_products_btn = document.querySelector("#post-product-collapse");
  list_products_btn.addEventListener("click", list_products);
  post_products_btn.addEventListener("submit", post_product);
})();
