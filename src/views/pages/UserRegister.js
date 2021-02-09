import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

let UserRegister = {
  render: async () => {
    let navBar = await Navbar.render();
    let footer = await Footer.render();
    let view = `
    ${navBar}  
    <main id="container" class="min-vh-100">
    <div class="text-center mt-5">
    <h1 class="text-white logo-custom">
    Thunder<i class="fas fa-poo-storm"></i>Bank
  </h1>
    </div>
    <div class="container container-margin p-4">
        <div class="row justify-content-md-center">
<div class="col-md-6 p-3">

          <form class="card m-3 form-control-sm text-dark">
          <h2 class="m-4 text-center">Preencha os dados e requisite sua conta e cartão de crédito</h2>
            <div class="m-5">
              <div class="mb-2 input-group-sm">
                <label for="cpfInput" class="form-label">cpf</label>
                <input
                  type="number"
                  class="form-control"
                  id="cpfInput"
                  required
                />
              </div>
              <div class="mb-2 input-group-sm">
                <label for="nameInput" class="form-label">nome</label>
                <input
                  type="text"
                  class="form-control"
                  id="nameInput"
                  required
                />
              </div>
              <div class="mb-2 input-group-sm">
                <label for="telInput" class="form-label">telefone</label>
                <input
                  type="tel"
                  class="form-control"
                  id="telInput"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>
                <div class="mb-2 input-group-sm">
                <label for="emailInput" class="form-label">e-mail</label>
                <input
                  type="email"
                  class="form-control"
                  id="emailInput"
                  required
                />
              </div>
              <div class="mb-2 input-group-sm">
                <label for="passInput" class="form-label">senha</label>
                <input
                  type="password"
                  class="form-control"
                  id="passInput"
                  required
                />
              </div>
              <div class="mb-2 input-group-sm">
                <label for="passConfirmInput" class="form-label">confirmar senha</label>
                <input
                  type="password"
                  class="form-control"
                  id="passConfirmInput"
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
    ${footer}
    `;
    return view;
  },
  after_render: async () => {
  },
};

export default UserRegister;
