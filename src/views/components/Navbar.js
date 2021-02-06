import LogoAccenture from "../../img/logo_accenture.png";

let Navbar = {
  render: async () => {
    let view = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
      <img src=${LogoAccenture} width="30" height="30" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/user-login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/user-register">Cadastrar</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#/user-dashboard">Conta</a>
        </li>
          <li class="nav-item">
          <a class="nav-link" href="#/user-profile">Perfil</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#/user-logout">Sair</a>
        </ul>
      </div>
    </div>
  </nav>
    `;
    return view;
  },
  after_render: async () => {
    //
  },
};

export default Navbar;
