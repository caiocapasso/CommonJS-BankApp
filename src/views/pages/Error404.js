import ImgAlert from "../../img/alert-icon.svg";
import Navbar from "../components/Navbar";

let Error404 = {
  isPrivate: false,
  render: async (isLogado) => {
    let navBar = await Navbar.render(isLogado);
    let view = `
    ${navBar}
    ${body}
    `;
    return view;
  },
  after_render: async () => {},
};

const body = `
<main id="container" class="min-vh-100">
<div class="text-center m-5">
  <h1 class="text-white logo-custom">
    Thunder<i class="fas fa-poo-storm"></i>Bank
  </h1>
</div>
  <div class="container container-margin p-4">
    <div class="row justify-content-md-center">
      <div class="card col-md-6 p-3 card-width">
        <img
          src="${ImgAlert}"
          class="img-fluid img-message--height"
          alt="Oops, algo deu errado"
        />
        <div class="card-body">
          <h5 class=" text-center text-warning">
            Oops, algo deu errado! Confirme seus dados e tente novamente!
          </h5>
          <div class="btn-padrao mt-4">
            <div class="btn-text">
              <div class="container">
                <a href="#/">
                  <div class="row align-items-center">
                    <div class="col text-center fs-1">Voltar</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>      
</main>
`;

export default Error404;
