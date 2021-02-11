const urlBase = "https://bankline-accenture.herokuapp.com/usuario";
const headers = new Headers({ "Content-Type": "application/json" });

const isUserLogged = () => {
  console.log("isUserLogged", localStorage.getItem("token") !== null)
  return localStorage.getItem("token") !== null;
};

const userLogout = () => {
  console.log('logout');
  localStorage.removeItem("token");
  window.location.replace("/#")
}

const requestUserLogin = (email, senha) => {
  return fetch(urlBase + "/logar", {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      login: email,
      senha: senha,
    }),
  })
    .then((resposta) => {
      console.log('resposta = ', resposta)
      return resposta.json();
    })
    .then((resposta) => {
      console.log("resposta = ", resposta);
      localStorage.setItem("token", resposta.token);
      window.location.replace("#/user-dashboard");
    })
    .catch((error) => {
      console.log(error);
      window.alert(error + "senha e/ou usuário inválido(s)");
      window.location.replace("#/");
    });
};

const requestUserRegister = (cpf, nome, tel, email, senha) => {
  fetch(urlBase, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      contaTipo: "CORRENTE",
      cpf: cpf,
      login: email,
      nome: nome,
      saldo: 1000,
      senha: senha,
      //tel: tel,
    }),
  })
    .then((resposta) => {
      return resposta.json();
    })
    .then((resposta) => {
      window.alert(resposta + "usuário criado com sucesso. Realize login.");
      window.location.replace("#/user-login");
    })
    .catch((error) => {
      console.log(error);
      window.alert(
        error +
          "houve algum problema no registro do usuário. Tente novamente mais tarde."
      );
    });
};

export { requestUserLogin, requestUserRegister, isUserLogged, userLogout };
