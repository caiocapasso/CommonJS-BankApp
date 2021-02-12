import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

let UserDashboard = {
  isPrivate: true,
  render: async (isUserLogged) => {
    let navBar = await Navbar.render(isUserLogged);
    let footer = await Footer.render();
    let sidebar = await Sidebar.render();
    let view = `
    ${navBar} 
    ${body}
    ${footer}
    `;
    return view;
  },
  after_render: async () => {},
};

const body = `
<main id="container" class="min-vh-100">
<div class="container-fluid">
  <div class="row row-pad">
    <div class"col-sm-12 col-md-2">
      ${sidebar}
    </div>
  </div>
  <div class="col-sm-12 col-md-10">
    <div class="container mt-5 mb-4">
      <h3 class="title-dashboard">Olá <strong>Usuário</strong>, seja bem vindo!</h3>
    </div>
    <div class="row row-pad">
      <div class="col-sm-12 col-md-6 mt-2">
        <div class="card card-pad-top">
          <div class="card-header">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-cash" viewBox="0 0 16 16">
              <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
              <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"/>
            </svg>
            Conta
          </div>
          <div class="card-body">
            <h5 class="card-title">Saldo disponível</h5>
            <p class="card-text" style="font-size: 30px;"><strong>R$ 10.000,00</strong></p>
            <p class="card-text">Transações <strong>R$ 2.120,21</strong></p>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 mt-2">
        <div class="card card-pad-top">
          <div class="card-header">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
              <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
            </svg>
            Conta Crédito
          </div>
          <div class="card-body">
            <h5 class="card-title">Fatura atual</h5>
            <p class="card-text" style="font-size: 30px;"><strong>R$ 120,88</strong></p>
            <p class="card-text">Limite disponível <strong>R$ 9.120,88</strong></p>
          </div>
        </div>
      </div>
    </div>
    <div class="row row-pad">
      <div class="col">
        <div class="card">
          <div class="card-header">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-cash-stack" viewBox="0 0 16 16">
              <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
              <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z"/>
            </svg>
            Últimos lançamentos
          </div>
          <div class="card-body">
            <h6>Compra no débito</h6>
            <p>ThunderCoders</p>
            <p><strong>R$ 298,95</strong></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</main>
`;

export default UserDashboard;
