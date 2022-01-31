"use strict";

(function () {
  async function fetch_backend(url, options) {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  }

  const list_fornecedores = async (event) => {
    event.preventDefault();
    const fornecedores_request = await fetch(
      "http://localhost:3333/fornecedor"
    );
    const data = await fornecedores_request.json();

    const tbody = document.querySelector(".tbody-fornecedor");
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

  const post_fornecedor = (event) => {
    event.preventDefault();

    let data_object = {};

    let forms = document.querySelectorAll(".form-control");
    forms.forEach((item) => {
      data_object[item.name] = item.value;
      item.value = "";
    });

    fetch_backend("http://localhost:3333/fornecedor", {
      method: "post",
      body: JSON.stringify(data_object),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const remove_fornecedor = (event) => {
    event.preventDefault();
    console.log("Estou aqui!");
    const input_remove = document.querySelector("#remove-id-fornecedor");
    fetch_backend("http://localhost:3333/fornecedor", {
      method: "DELETE",
      body: JSON.stringify({ id: input_remove.value }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    input_remove.value = "";
  };

  const list_fornecedores_btn = document.querySelector("#btn-list-fornecedor");
  const post_fornecedores_form = document.querySelector(
    "#post-fornecedor-collapse"
  );
  const remove_fornecedor_form = document.querySelector(
    "#remove-fornecedor-collapse"
  );

  list_fornecedores_btn.addEventListener("click", list_fornecedores);
  post_fornecedores_form.addEventListener("submit", post_fornecedor);
  remove_fornecedor_form.addEventListener("submit", remove_fornecedor);
})();
