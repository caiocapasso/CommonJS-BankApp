import LogoAccenture from "../../img/logo_accenture.png";

let Navbar = {
  render: async () => {
    let view = `
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/user-login">Entrar</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/user-dashboard">Minha Conta</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/user-profile">Meu Perfil</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/user-register">Criar Conta</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/user-recover">Recuperar Conta</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/user-logout">Sair</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/error">Erro</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    `;
    return view;
  },
  after_render: async () => {
    //
  },
};

export default Navbar;
