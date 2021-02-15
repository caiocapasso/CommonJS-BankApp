import IconThunder from "../../img/icon-thunder.svg";
import IconFlowerWhite from "../../img/icon-flower-white.svg";


let Sidebar = {
  render: async () => {
    let view = body;
    return view;
  },
  after_render: async () => {},
};


const body = `
<div class="col-sm-12 col-md-2 sidebar">
    <div class="container text-center">
        <img class="logo-shadow" src="${IconThunder}" alt="">
    </div>
    <div class="row row-pad">
        <a href="#/user-dashboard" class="btn btn-warning btn-action form-control actions-button">
            <img src="${IconFlowerWhite}" alt=""> Início
        </a>
    </div>
    <div class="row row-pad">
        <a href="#/user-deposit" class="btn btn-warning btn-action form-control actions-button">
            <img src="${IconFlowerWhite}" alt=""> Depósitos
        </a>
    </div>
    <div class="row row-pad">
        <a href="#/user-accountplan" class="btn btn-warning btn-action form-control actions-button">
            <img src="${IconFlowerWhite}" alt=""> Planos
        </a>
    </div>
    <div class="row row-pad ">
        <a href="#/user-payment" class="btn btn-warning btn-action form-control actions-button">
            <img src="${IconFlowerWhite}" alt=""> Pagamentos
        </a>
    </div>
    <div class="row row-pad ">
        <a href="#/user-transfer" class="btn btn-warning btn-action form-control actions-button">
            <img src="${IconFlowerWhite}" alt=""> Transferência    
        </a>
    </div>
</div>
`

export default Sidebar;
