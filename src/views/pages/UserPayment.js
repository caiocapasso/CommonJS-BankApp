import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { initListener } from "../../js/controllers/user-payment";

let UserPayment = {
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
      initListener()
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
                        Realizar Pagamento
                    </h3>
                </div>
                <div class="row row-pad">
                    <div class="col">
                        <div class="card col-sm-12 col-md-6">
                            <div class="card-header">
                                <img src="/img/icon-money-2.svg" alt=""> Realize um Pagamento
                            </div>
                                <div class="card-body p-4 p-auto">
                                <form id="pagamento-form">
                                    <div class="col m-3">
                                        <input type="number" name="name" class="form-control input-dp" placeholder="Valor" id="inputValor">
                                    </div>
                                    <div class="col m-3">
                                        <input type="text" name="name" class="form-control input-dp" placeholder="Descrição" id="inputDescricao">
                                    </div>
                                    <div class="col m-3">
                                    <select
                                    name="plano"
                                    id="inputPlanoDeConta"
                                    class="form-control input-dp"
                                    placeholder="Plano de Contas"
                                  >
                                    <option disabled selected value>
                                      Selecione Plano de Contas
                                    </option>
                                  </select>
                                    </div>
                                    <div class="col m-3 text-center">
                                    <button type="submit" class="btn btn-labeled btn-success m-2 p-2">
                                        Pagar
                                        <span class="p-2"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
                                    </button>
                                </div>
                                </form>
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

export default UserPayment;
