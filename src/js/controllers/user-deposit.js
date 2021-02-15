import { lancamentoService } from "../services/lancamento-service.js";
import { planoContaService } from "../services/plano-conta-service.js";

export const initListener = () => {
  document
    .querySelector("#deposito-form")
    ?.addEventListener("submit", (event) => {
      console.log("depositar form");
      event.preventDefault();

      const valor = document.querySelector("#inputValor").value;
      const descricao = document.querySelector("#inputDescricao").value;
      const planoDeConta = document.querySelector("#inputPlanoDeConta").value;

      lancamentoService
        .salvar({
          valor: valor,
          descricao: descricao,
          planoDeConta: planoDeConta,
        })
        .then((response) => {
          if (response) {
            alert("deposito realizado");
            window.location.replace("#/user-dashboard");
          } else {
            alert("houve um problema no deposito. Tente novamente mais tarde");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });

  planoContaService.getPlanosReceita().then((response) => {
    const select = document.querySelector("#inputPlanoDeConta");

    if (response) {
      response.forEach((p) => {
        let option = document.createElement("option");
        option.text = p.descricao;
        option.value = p.tipo;
        select.appendChild(option);
      });
    }
  });
};
