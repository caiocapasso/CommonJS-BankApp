import { usuarioService } from "../services/usuario-service.js";

export const initListener = () => {
  document
  .querySelector("#profile-form")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("editar usuario");

    const usuario = {
      cpf: document.querySelector("#cpfInput")?.value || null,
      nome: document.querySelector("#nomeInput")?.value || null,
      tel: document.querySelector("#telInput")?.value || null,
      email: document.querySelector("#emailInput")?.value || null,
      senha: document.querySelector("#passInput")?.value || null,
    };

    usuarioService
      .editar(usuario)
      .then((resposta) => {
        if (resposta) {
          console.log(resposta);
          alert("usuario criado com sucesso! Realize o login");
          window.location.replace("#/user-login");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("aconteceu um erro. Tente novamente mais tarde");
      });
  });


  usuarioService.obterDados().then((response) => {
    if (response) {
      console.log("response");
      document.querySelector("#nomeInput").value = response.nome;
      document.querySelector("#cpfInput").value = response.cpf;
      document.querySelector("#telInput").value = response.tel;
      document.querySelector("#emailInput").value = response.username;
    }
  });
};
