"use strict";

(async function() {
  const list_products = async (event) => {
    event.preventDefault();
    const tbody = document.querySelector(".tbody-product");

    const product_request = await fetch("http://localhost:3333/produtos");
    const data = await product_request.json();

    let tr = document.createElement("tr");
    let td = document.createElement("td");

    data.forEach(element => {
      tr = document.createElement("tr")
      for (let prop in element) {
        td = document.createElement("td");
        td.innerText = element[prop];
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    });
  };

  const post_product = async (event) => {
    event.preventDefault();

    let data_object = {}

    let forms = document.querySelectorAll(".form-control");
    forms.forEach(item => {
      data_object[item.name] = item.value;
    })

    console.log(data_object);

    const post_products = await fetch("http://localhost:3333/produtos", {
      method: "post",
      body: JSON.stringify(data_object),
      headers: {
        "Content-Type": "application/json"
      }
    });

    console.log(data);
  };

  const list_products_btn = document.querySelector("#btn-list-product");
  const post_products_btn = document.querySelector("#post-product-collapse");
  
  list_products_btn.addEventListener("click", list_products);
  post_products_btn.addEventListener("submit", post_product);
})();
