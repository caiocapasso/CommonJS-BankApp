import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

let UserAccountPlanForm = {
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
                        Novo plano de contas
                    </h3>
                </div>
                <form action="" method="POST">
                    <div class="row row-pad">
                        <div class="col-sm-12 col-md-3">
                            <label for="tipo" class="label-white">Tipo</label>
                            <select name="tipo" id="tipo" class="form-control">
                                <option value="DESPESA">Despesa</option>
                                <option value="RECEITA">Receita</option>
                            </select>
                        </div>
                        <div class="col-sm-12 col-md-9">
                            <label for="descricao" class="label-white">Descrição</label>
                            <input id="descricao" name="descricao" type="text" class="form-control">                        
                        </div>
                    </div>
                    <div class="row-pad">
                        <button type="submit" class="btn btn-warning btn-action actions-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                            </svg>
                            Salvar
                        </button>
                        <a href="#/user-accountplan" class="btn btn-warning btn-action actions-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                            Cancelar
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</main>
`;
};

export default UserAccountPlanForm;