import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { initListener } from "../../js/controllers/user-login";

let UserLogin = {
  isPrivate: false,
  render: async (isLogado) => {
    let navBar = await Navbar.render(isLogado);
    let footer = await Footer.render();
    let view = `
    ${navBar}  
   ${body}
    ${footer}
    `;
    return view;
  },
  after_render: async () => {
    initListener();
  },
};

const body = `
<main id="container" class="min-vh-100">
<div class="text-center mt-5">
<h1 class="text-white logo-custom">
Thunder<i class="fas fa-poo-storm"></i>Bank
</h1>
</div>
<div class="container container-margin p-4">
    <div class="row justify-content-md-center">
<div class="col-md-6 p-3">
         <form id="login-form" class="card m-3 form-control-sm text-dark">
            <h2 class="mt-3 text-center">
               Acesse sua conta
            </h2>
            <div class="m-5">
               <div class="mb-2 input-group-sm">
                  <label for="emailInput" class="form-label">e-mail</label>
                  <input
                     type="text"
                     class="form-control"
                     id="emailInput"
                     />
               </div>
               <div class="mb-2 input-group-sm">
                  <label for="passInput" class="form-label">senha</label>
                  <input
                     type="password"
                     class="form-control"
                     id="passInput"
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
   </div>
</div>
</main>
`;

export default UserLogin;
