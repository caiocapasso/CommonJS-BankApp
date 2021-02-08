import Api from "../../services/api";
import HeadersDefault from "../../services/headersDefault"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

let Home = {
  render: async () => {
    let navBar = await Navbar.render();
    let footer = await Footer.render();
    let view = `
    ${navBar}  
    <div class="container-fluid mt-5">
    <div class="row align-items-center ">
    <div class="col-sm">
      <div class="text-center">
        <h2 class="text-center">Formulário de entrada</h2>
        <p>Seje bem vido ao Butistrépi</p>
        <img src="https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ" alt="imagem" height="300" />
      </div>
    </div>
    <div class="col-sm">
      <form id="search-form" class="card">
        <h2 class="mt-4 text-center">
          Entrar
        </h2>
        <div class="m-5">
          <div class="mb-3">
            <label for="emailInput" class="form-label">É-meio</label>
            <input
              type="email"
              class="form-control"
              id="emailInput"
              placeholder="nómi@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="passInput" class="form-label">Péssiwôdi</label>
            <input
              type="password"
              class="form-control"
              id="passInput"
              placeholder="insira sua senha"
            />
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Fica logado
            </label>
          </div>
          <button id="button-form-login"type="submit" class="btn btn-primary">Entra!</button>
        </div>
      </form>
    </div>
  </div>
    </div>
    
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
