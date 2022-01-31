"use strict";

(async function () {
  async function fetch_backend(url, options) {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  }

  const list_products = async (event) => {
    event.preventDefault();
    const tbody = document.querySelector(".tbody-product");

    const product_request = await fetch("http://localhost:3333/produtos");
    const data = await product_request.json();

    let tr = document.createElement("tr");
    let td = document.createElement("td");

    data.forEach((element) => {
      tr = document.createElement("tr");
      for (let prop in element) {
        td = document.createElement("td");
        td.innerText = element[prop];
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    });
  };

  const post_product = (event) => {
    event.preventDefault();

    let data_object = {};

    let forms = document.querySelectorAll(".form-control");
    forms.forEach((item) => {
      data_object[item.name] = item.value;
      item.value = "";
    });

    fetch_backend("http://localhost:3333/produtos", {
      method: "post",
      body: JSON.stringify(data_object),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const remove_product = (event) => {
    event.preventDefault();
    const input_remove = document.querySelector("#remove-id-product");
    fetch_backend("http://localhost:3333/produtos", {
      method: "DELETE",
      body: JSON.stringify({ id: input_remove.value }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    input_remove.value = "";
  };

  const update_product = (event) => {
    event.preventDefault();
    const id_input = document.querySelector("#update-id-product");
    const qtd_input = document.querySelector("#update-qtd-product");
    const preco_input = document.querySelector("#update-preco-product");

    fetch_backend("http://localhost:3333/produtos", {
      method: "PUT",
      body: JSON.stringify({
        id: id_input.value,
        preco: preco_input.value,
        qtd: qtd_input.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    id_input.value = "";
    qtd_input.value = "";
    preco_input.value = "";
  };

  const list_products_btn = document.querySelector("#btn-list-product");
  const post_products_btn = document.querySelector("#post-product-collapse");
  const remove_products_form = document.querySelector(
    "#remove-product-collapse"
  );
  const update_products_form = document.querySelector(
    "#update-product-collapse"
  );

  list_products_btn.addEventListener("click", list_products);
  post_products_btn.addEventListener("submit", post_product);
  remove_products_form.addEventListener("submit", remove_product);
  update_products_form.addEventListener("submit", update_product);
})();
