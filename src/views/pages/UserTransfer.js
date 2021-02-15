import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

let UserTransfer = {
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
                    Transferência
                </h3>
            </div>
            <div class="row row-pad">
                <div class="col text">
                    <div class="card">
                        <div class="card-header">
                            <img src="/img/icon-money-2.svg" alt=""> Realize sua transferência
                        </div>
                        <div class="container text-center--wb">
                            <div class="card-body p-4 p-auto">
                                <div class="col-sm-12 col-md-8 m-3">
                                    <input type="text" name="numeroContaDestino" class="form-control input-dp" placeholder="Númedo da conta destino" id="numeroContaDestino">
                                </div>
                                <div class="col-sm-12 col-md-8 m-3">
                                    <input type="number" name="name" class="form-control input-dp" placeholder="Valor" id="moneyvalue">
                                </div>
                                <div class="col-sm-12 col-md-8 m-3">
                                    <input type="text" name="name" class="form-control input-dp" placeholder="Descrição" id="description">
                                </div>
                                <div class="col-sm-12 col-md-8 m-3">
                                    <select name="plano" id="plano" class="form-control input-dp">
                                        <!-- DEVERÁ SER PRRENCHIDO COM O CADASTRO DE PLANO DE CONTAS DO USUÁRIO LOGADO (SOMENTE TIPO DESPESA!) -->
                                        <option value="">DESCRIÇÃO DO PLANO DE CONTA</option>
                                    </select>
                                </div>
                                <div class="col-sm-12 col-md-8 m-3">
                                    <input type="date" name="data" class="form-control input-dp" placeholder="dd/mm/aaaa" id="data">
                                </div>
                                <div class="col-sm-12 col-md-8 m-3 text">
                                    <button type="button" id="sendtransfer" class="btn-send btn-action mt-4 m-2 p-2">
                                        <div class="text-center">
                                        </div>
                                        Transferir
                                        <span class="p-2"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
                                    </button>
                                </div>
                            </div>
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

export default UserTransfer;
