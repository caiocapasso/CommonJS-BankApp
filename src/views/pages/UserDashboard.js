import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

import IconMoney from "../../img/icon-money.svg";
import IconMoney2 from "../../img/icon-money-2.svg";
import IconCard from "../../img/icon-card.svg";

import { initListener } from "../../js/controllers/user-dashboard";

let UserDashboard = {
  isPrivate: true,
  render: async (isLogado) => {
    let navBar = await Navbar.render(isLogado);
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
  after_render: async () => {
    setTimeout(initListener, 2000);
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
        Olá <span id="nome-usuario"><strong>Usuário</strong></span>, seja bem vindo!
      </h3>
        </div>
        <div class="row row-pad">
            <div class="col-sm-12 col-md-6 mt-2">
                <div class="card card-pad-top">
                <div class="card-header">
                <img src="${IconMoney}" alt="" /> Conta - nº<span id="numero-conta"></span>
              </div>
                    <div class="card-body">
                        <h5 class="card-title">Saldo disponível</h5>
                        <p
                        class="card-text"
                        style="font-size: 30px"
                        >
                        <strong data-saldo-disponivel></strong>
                      </p>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 mt-2">
                <div class="card card-pad-top">
                    <div class="card-header">
                        <img src="${IconCard}" alt=""> Conta Crédito
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Fatura atual</h5>
                        <p class="card-text" style="font-size: 30px">
                        <strong data-fatura-atual></strong>
                      </p>
                      <p class="card-text">
                      Limite disponível <strong data-limite-disponivel></strong>
                    </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row row-pad">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        <img src="${IconMoney2}" alt=""> Últimos lançamentos
                    </div>
                    <div class="card-body">
                    <ul id="ultimos-lancamentos" class="list-group">
                    </ul>
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
