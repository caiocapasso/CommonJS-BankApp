import { usuarioService } from "../services/usuario-service.js";

export const initListener = () => {
  document
    .querySelector("#login-form")
    ?.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("logar usuario");
      const email = document.querySelector("#emailInput").value;
      const senha = document.querySelector("#passInput").value;

      usuarioService
        .logar(email, senha)
        .then((resposta) => {
          if (resposta) {
            console.log("resposta = ", resposta);
            localStorage.setItem("token", resposta.token);
            //window.location.replace("/user-dashboard.html");
            window.location.replace("#/user-dashboard");
          }
        })
        .catch((error) => {
          alert("Usuário e/ou senha inválido(s)");
          console.log(error);
        });
    });
};
