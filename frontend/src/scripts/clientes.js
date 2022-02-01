"use strict";

(async function () {
  const list_products = async (event) => {
    event.preventDefault();
    const tbody = document.querySelector(".tbody-clientes");

    const product_request = await fetch("http://localhost:3333/clientes");
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

  const list_clients_btn = document.querySelector("#btn-list-clients");
  list_clients_btn.addEventListener("click", list_products);
})();
