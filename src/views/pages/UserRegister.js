import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { requestUserRegister } from "../../services/user";

let UserRegister = {
  isPrivate: false,
  render: async (isUserLogged) => {
    let navBar = await Navbar.render(isUserLogged);
    let footer = await Footer.render();
    let view = `
    ${navBar}  
    ${body}
    ${footer}
    `;
    return view;
  },
  after_render: async () => {
    var loginForm = document.querySelector("#register-form");
    loginForm?.addEventListener("submit", function (e) {
      e.preventDefault();
      const cpf = document.querySelector("#cpfInput").value;
      const nome = document.querySelector("#nameInput").value;
      const tel = document.querySelector("#telInput").value;
      const email = document.querySelector("#emailInput").value;
      const senha = document.querySelector("#passInput").value;
      requestUserRegister(cpf, nome, tel, email, senha);
    });

    //VALIDATE PASSWORDS MATCH
    const password = document.querySelector("#passInput");
    const confirm = document.querySelector("#passConfirmInput");

    password.onchange = checkPassOnChange;
    confirm.onchange = checkPassOnChange;

    function checkPassOnChange() {
      if (confirm.value === password.value) {
        confirm.setCustomValidity("");
      } else {
        confirm.setCustomValidity("Senhas não conferem");
      }
    }
  },
};

const body = `
<main id="container" class="min-vh-100">
<div class="text-center mt-5">
<h1 class="text-white logo-custom">
Thunder<i class="fas fa-poo-storm"></i>Bank
</h1>
</div>
<div class="container container-margin p-4">
    <div class="row justify-content-md-center">
<div class="col-md-6 p-3">
      <form id="register-form" class="card m-3 form-control-sm text-dark">
      <h2 class="m-4 text-center">Preencha os dados e requisite sua conta e cartão de crédito</h2>
        <div class="m-5">
          <div class="mb-2 input-group-sm">
            <label for="cpfInput" class="form-label">cpf</label>
            <input
              name="cpf"
              type="text"
              class="form-control"
              id="cpfInput"
              pattern="[0-9]{11}"
              required
            />
          </div>
          <div class="mb-2 input-group-sm">
            <label for="nameInput" class="form-label">nome</label>
            <input
              name="name"
              type="text"
              class="form-control"
              id="nameInput"
              maxlength="50"
              pattern="[^0-9]*"
              required
            />
          </div>
          <div class="mb-2 input-group-sm">
            <label for="telInput" class="form-label">telefone</label>
            <input
              name="tel"
              type="tel"
              class="form-control"
              id="telInput"
              pattern="[0-9]{11}"
              required
            />
          </div>
            <div class="mb-2 input-group-sm">
            <label for="emailInput" class="form-label">e-mail</label>
            <input
              name="email"
              type="email"
              class="form-control"
              id="emailInput"
              required
            />
          </div>
          <div class="mb-2 input-group-sm">
            <label for="passInput" class="form-label">senha</label>
            <input
              name="senha"
              type="password"
              class="form-control"
              id="passInput"
              minLength="6"
              maxLength="50"
              required
            />
          </div>
          <div class="mb-2 input-group-sm">
            <label for="passConfirmInput" class="form-label">confirmar senha</label>
            <input
              name="senhaConfirm"
              type="password"
              class="form-control"
              id="passConfirmInput"
              minLength="6"
              maxLength="50"
              required
            />
          </div>
          <div class="mt-4 mb-3 text-justify">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="agreeCheck" required>
              <label class="form-check-label" for="agreeCheck">
                Eu li, estou ciente das condições de tratamento dos meus dados pessoais e dou meu consentimento, quando aplicável, conforme descrito nesta <a href="http://www.google.com.br">Política de Privacidade</a> 
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-warning btn-custom-width text-white">Enviar</button>
          <div class="mt-4">
            <a href="index.html">Já tem uma conta? Entre por aqui</a>
            <br/>
            <a href="user-recover.html">Perdeu sua senha? Recupere agora mesmo</a> 
          </div>
        </div>
      </form>
      </div>
    </div>
  </div>
</main>
`;

export default UserRegister;
