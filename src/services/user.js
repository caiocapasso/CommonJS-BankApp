const urlBase = "https://bankline-accenture.herokuapp.com/usuario";
const headers = new Headers({ "Content-Type": "application/json" });

const isUserLogged = () => {
  return localStorage.getItem("userToken") !== null;
};

const userLogout = () => {
  console.log('logout');
  localStorage.removeItem("userToken");
  localStorage.removeItem("userId");
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
    .then((response) => {
      console.log('response = ', response)
      return response.json();
    })
    .then((data) => {
      console.log("data = ", data);
      localStorage.setItem("userToken", data.token);
      localStorage.setItem("userId", data.id);
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
      //saldo: 1000,
      senha: senha,
      //tel: tel,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      window.alert(data + "usuário criado com sucesso. Realize login.");
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

const requestUserUpdate = (cpf, nome, tel, email, senha) => {
  fetch(urlBase, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify({
      contaTipo: "CORRENTE",
      cpf: cpf,
      login: email,
      nome: nome,
      //saldo: 1000,
      senha: senha,
      //tel: tel,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      window.alert(data + "usuário alterado com sucesso.");
    })
    .catch((error) => {
      console.log(error);
      window.alert(
        error +
          "houve algum problema na atualização do usuário. Tente novamente mais tarde."
      );
    });
};



const getUserData = () => {
  const mockUser = {
    "contaTipo": "CORRENTE",
    "cpf": "99999999999",
    "login": "teste@teste.com",
    "nome": "teste da silva",
    "saldo": 9999,
    "tel": "11999999999"
  };

  return mockUser;

  // return fetch(`${urlBase}/${localStorage.getItem("userId")}`)
  //   .then((response) => response.json())
  //   .then ((data) => data)
}

export { requestUserLogin, requestUserRegister, requestUserUpdate, isUserLogged, userLogout, getUserData };
