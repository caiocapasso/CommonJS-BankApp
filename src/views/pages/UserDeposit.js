import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

let UserDeposit = {
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
                Depósito
            </h3>
        </div>
        <div class="row row-pad">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        <img src="/img/icon-money-2.svg" alt=""> Realize seu Depósito
                    </div>
                    <div class="card-body p-4 text-center p-auto">
                        <div class="col-sm-12 col-md-6 m-3">
                            <input type="number" name="name" class="form-control" placeholder="Valor" id="moneyvalue">
                        </div>
                        <div class="col-sm-12 col-md-6 m-3">
                            <input type="date" name="name" class="form-control" placeholder="Data" id="date">
                        </div>
                        <div class="col-sm-12 col-md-6 m-3">
                            <input type="text" name="name" class="form-control" placeholder="Descrição" id="description"
                            >
                        </div>
                        <div class="col-sm-12 col-md-6 m-3 ">
                            <button type="button" id="sendtransfer" class="btn btn-labeled btn-success m-2 p-2">
                                Depositar
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
</main>
`;
};

export default UserDeposit;
