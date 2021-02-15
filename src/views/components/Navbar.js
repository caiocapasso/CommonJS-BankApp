let Navbar = {
  render: async (isLogado) => {
    let view = renderBody(isLogado);
    return view;
  },
  after_render: async () => {
    //
  },
};

const renderBody = (isLogado) => {
  return `
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
          ${ShowLoginButton(isLogado)}
          ${ShowDashboardButton(isLogado)}
          ${ShowUserProfileButton(isLogado)}
          ${ShowUserRegisterButton(isLogado)}
          ${ShowUserRecoverButton(isLogado)}
          ${ShowUserLogoutButton(isLogado)}
        </ul>
      </div>
    </div>
  </nav>
</header>
`;
};

const ShowLoginButton = (isLogado) => {
  if (!isLogado) {
    return `<li class="nav-item">
  <a class="nav-link" href="#/user-login">Entrar</a>
  </li>`;
  }
  return "";
};

const ShowDashboardButton = (isLogado) => {
  if (isLogado) {
    return `<li class="nav-item">
    <a class="nav-link" href="#/user-dashboard">Minha Conta</a>
    </li>`;
  }

  return "";
};

const ShowUserProfileButton = (isLogado) => {
  if (isLogado) {
    return `
    <li class="nav-item">
    <a class="nav-link" href="#/user-profile">Meu Perfil</a>
  </li>
    `;
  }

  return "";
};
const ShowUserRegisterButton = (isLogado) => {
  if (!isLogado) {
    return `
    <li class="nav-item">
    <a class="nav-link" href="#/user-register">Criar Conta</a>
  </li>
    `;
  }

  return "";
};
const ShowUserRecoverButton = (isLogado) => {
  if (!isLogado) {
    return `
    <li class="nav-item">
    <a class="nav-link" href="#/user-recover">Recuperar Conta</a>
  </li>
    `;
  }

  return "";
};
const ShowUserLogoutButton = (isLogado) => {
  if (isLogado) {
    return `
    <li class="nav-item">
    <a class="nav-link" onclick="sair()" href="#">Sair</a>
  </li>
    `;
  }

  return "";
};

export default Navbar;
