import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

let UserRecover = {
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
            <h2 class="m-4 text-center">
              Não lembra sua senha? Informe seu e-mail para recuperar
            </h2>
            <div class="m-5">
              <div class="mb-2 input-group-sm">
                <label for="emailInput" class="form-label">e-mail</label>
                <input
                  type="email"
                  class="form-control"
                  id="emailInput"
                  required
                />
              </div>
              <button
                type="submit"
                class="btn btn-warning btn-custom-width text-white"
              >
                Recuperar
              </button>
              <div class="mt-4">
                <a href="index.html">Já tem uma conta? Entre por aqui</a>
                <br />
                <a href="user-register.html">Ainda não é cliente? Crie sua conta agora mesmo</a>
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

export default UserRecover;
