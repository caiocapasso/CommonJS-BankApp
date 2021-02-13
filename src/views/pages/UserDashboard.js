import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

let UserDashboard = {
  isPrivate: true,
  render: async (isUserLogged) => {
    let navBar = await Navbar.render(isUserLogged);
    let footer = await Footer.render();
    let sidebar = await Sidebar.render();
    let body = renderBody(sidebar);
    let view = `
    ${navBar} 
    ${body}
    ${footer}
    `;
    return view;
  },
  after_render: async () => {},
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
                Olá <strong>Usuário</strong>, seja bem vindo!
            </h3>
        </div>
        <div class="row row-pad">
            <div class="col-sm-12 col-md-6 mt-2">
                <div class="card card-pad-top">
                    <div class="card-header">
                        <img src="./img/icon-money.svg" alt=""> Conta
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Saldo disponível</h5>
                        <p class="card-text" style="font-size: 30px">
                            <strong>R$ 10.000,00</strong>
                        </p>
                        <p class="card-text">
                            Transações <strong>R$ 2.120,21</strong>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 mt-2">
                <div class="card card-pad-top">
                    <div class="card-header">
                        <img src="./img/icon-card.svg" alt=""> Conta Crédito
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Fatura atual</h5>
                        <p class="card-text" style="font-size: 30px">
                            <strong>R$ 120,88</strong>
                        </p>
                        <p class="card-text">
                            Limite disponível <strong>R$ 9.120,88</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row row-pad">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        <img src="/img/icon-money-2.svg" alt=""> Últimos lançamentos
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
};

export default UserDashboard;
