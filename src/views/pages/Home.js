import Api from "../../services/api";
import HeadersDefault from "../../services/headersDefault";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ImgHappyPerson from '../../img/happy_person.png';
import ImgCreditCard from '../../img/credit_card.png';
import ImgApp from '../../img/app.png';

let Home = {
  render: async () => {
    let navBar = await Navbar.render();
    let footer = await Footer.render();
    let view = `
    ${navBar}  
    <main id="container" class="min-vh-100">
    <!-- SECTION 1 -->
    <div class="mt-5 text-center">
      <h1 class="text-white logo-custom">Thunder<i class="fas fa-poo-storm text-warning"></i>Bank</h2>
      <h5 class="text-white logo-custom">Seja bem-vindo ao banco do futuro</p>
    </div>
    <div class="row align-items-center m-5">
      <div class="col-sm-12 col-md-6 bg-custom text-center">            
          <img src="${ImgHappyPerson}" alt="imagem" class="img-fluid img-custom-height" />
      </div>
      <div class="col-sm-12 col-md-6">
        <form id="login-form" enctype="multipart/form-data" method="post" class="card m-3 form-control-sm text-dark">
          <h2 class="mt-3 text-center">
            Acesse sua conta
          </h2>
          <div class="m-5">
            <div class="mb-2 input-group-sm">
              <label for="emailInput" class="form-label">e-mail</label>
              <input
                type="email"
                class="form-control"
                id="emailInput"
                name="login"
              />
            </div>
            <div class="mb-2 input-group-sm">
              <label for="passInput" class="form-label">senha</label>
              <input
                type="password"
                class="form-control"
                id="passInput"
                name="pass"
              />
            </div>
            <button type="submit" class="btn btn-warning btn-custom-width text-white">Entrar</button>
            <div class="mt-4">
              <a href="#/user-recover">Recupere sua senha</a>
              <br/>
              <a href="#/user-register">Crie sua conta agora mesmo!</a> 
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- SECTION 2 -->
    <div class="row align-items-center text-center m-5">
      <div class="col-sm-12 col-md-6 text-center p-3">
        <h2>Cartão de crédito sem limite</h2>
        <p>Tenha um cartão de crédito sem limite para gastar com tudo o que desejar! Adoramos quando nossos cliente se endividam e depois tem que negociar conosco. Temos uma equipe especializada para te ajudar quando a fatura milionária chegar.</p>
        <a class="btn btn-lg btn-outline-light" href="#/user-register" role="button">Seja nosso cliente!</a> 
      </div>
      <div class="col-sm-12 col-md-6 p-3">
        <img src="${ImgCreditCard}" alt="imagem" class="img-fluid img-custom-height rounded" />
      </div>
    </div> 
  </main>
  <!-- SECTION 3 -->
  <div class="row align-items-center text-center m-5">
    <div class="col-sm-12 col-md-6 p-3">
      <img src="${ImgApp}" alt="imagem" class="img-fluid img-custom-height rounded" />
    </div>
    <div class="col-sm-12 col-md-6 text-center p-3">
      <h2 >Aplicativo para celular exclusivo</h2>
      <p>Além de nosso incrível portal online, todos os nossos clientes também acesso ao nosso incrível aplicativo para smartphones (Android e iOS) para poder realizar visualizações de fatura, pagamentos, transferências, apostas no jogo do bicho e perder dinheiro investindo na bolsa de ações.</p>
      <a class="btn btn-lg btn-outline-light" href="#/user-register" role="button">Seja nosso cliente!</a> 
    </div>
  </div> 
</main>
    ${footer}
    `;
    return view;
  },
  after_render: async () => {
    const searchForm = document.querySelector("#search-form")
    searchForm.addEventListener('submit', function (e){
      e.preventDefault();

      const login = document.querySelector("#emailInput").value;
      const senha = document.querySelector("#passInput").value

      console.log('login =', login);
      console.log('senha = ', senha);

        let postData = {
            login: login,
            senha: senha
        }
        Api.post('', postData, HeadersDefault).then(res => {
          res.data;
          alert('login realizado');
        }).catch(e => console.log(e))
    })
  },
};

export default Home;
