import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { initListener } from "../../js/controllers/user-profile";

let UserProfile = {
  isPrivate: true,
  render: async (isLogado) => {
    let footer = await Footer.render();
    let sidebar = await Sidebar.render();
    let body = renderBody(sidebar);
    let view = `
        ${body}
        ${footer}
        `;
    return view;
  },
  after_render: async () => {
    initListener();

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

const renderBody = (sidebar) => {
  return `
  <main id="container" class="min-vh-100">
  <div class="container-fluid">
  <div class="row row-pad">
      ${sidebar}
      <div class="col-sm-12 col-md-10">
      <div class="container mt-5 mb-4">
          <h3 class="title-dashboard">
              Perfil
          </h3>
      </div>
        <div class="col">
          <div class="card">
            <div class="card-header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="bi bi-cash-stack"
                viewBox="0 0 16 16"
              >
                <path
                  d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                />
                <path
                  d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z"
                />
              </svg>
              Editar Perfil
            </div>
            <div class="card-body">
              <div class="container bg-form p-4">
                <form id="profile-form" class="form-control-sm">
                  <div class="row">
                    <div class="col-md-6 mb-2 input-group-sm">
                      <label for="nomeInput" class="form-label"
                        >nome</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="nomeInput"
                        required
                        disabled
                      />
                    </div>
                    <div class="col-md-6 mb-2 input-group-sm">
                      <label for="cpfInput" class="form-label">cpf</label>
                      <input
                        type="text"
                        class="form-control"
                        id="cpfInput"
                        required
                        disabled
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 mb-2 input-group-sm">
                      <label for="telInput" class="form-label"
                        >telefone</label
                      >
                      <input
                        type="tel"
                        class="form-control"
                        id="telInput"
                        pattern="[0-9]{11}"
                        required
                      />
                    </div>
                    <div class="col-md-6 mb-2 input-group-sm">
                      <label for="emailInput" class="form-label"
                        >e-mail</label
                      >
                      <input
                        type="email"
                        class="form-control"
                        id="emailInput"
                        required
                      />
                    </div>
                  </div>
                  <div class="row">
                  <div class="col-md-6 mb-2 input-group-sm">
                    <label for="telInput" class="form-label"
                      >nova senha</label
                    >
                    <input
                      type="password"
                      class="form-control"
                      id="passInput"
                    />
                  </div>
                  <div class="col-md-6 mb-2 input-group-sm">
                    <label for="emailInput" class="form-label"
                      >confirmar nova senha</label
                    >
                    <input
                      type="password"
                      class="form-control"
                      id="passConfirmInput"
                    />
                  </div>
                </div>
                  <div
                    class="row justify-content-around text-center mt-3"
                  >
                    <div class="col m-2 text-start">
                      <button type="submit" class="btn btn-success">
                        Salvar Alterações
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</main>
`};

export default UserProfile;
