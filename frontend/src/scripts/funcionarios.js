"use strict";

(async function () {
  const list_funcionarios = async (event) => {
    event.preventDefault();
    const tbody = document.querySelector(".tbody-funcionarios");

    const product_request = await fetch("http://localhost:3333/funcionarios");
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

  const cash_info = async (event) => {
    event.preventDefault();
    const tbody = document.querySelector(".tbody-cash");

    const product_request = await fetch(
      "http://localhost:3333/funcionarios/cash",
    );
    const data = await product_request.json();
    console.log(data);

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

  const list_funcionarios_btn = document.querySelector(
    "#btn-list-funcionarios",
  );
  const list_cash_btn = document.querySelector("#btn-cash-funcionarios");
  list_funcionarios_btn.addEventListener("click", list_funcionarios);
  list_cash_btn.addEventListener("click", cash_info);
})();
