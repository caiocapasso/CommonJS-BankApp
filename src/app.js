//import { isLogado, userLogout } from './js/services/user'
import { isLogado, sair } from './js/util.js';
import Utils from "./js/utils";
import Home from "./views/pages/Home";
import Error404 from "./views/pages/Error404";
import UserDashboard from "./views/pages/UserDashboard";
import UserLogin from "./views/pages/UserLogin";
import UserProfile from "./views/pages/UserProfile";
import UserRecover from "./views/pages/UserRecover";
import UserRegister from "./views/pages/UserRegister";
import UserAccountPlan from './views/pages/UserAccountPlan';
import UserAccountPlanForm from './views/pages/UserAccountPlanForm';
import UserDeposit from './views/pages/UserDeposit';
import UserTransfer from './views/pages/UserTransfer';
import UserPayment from './views/pages/UserPayment';


// Routes
let routes = {
  "/": Home,
  "/user-dashboard": UserDashboard,
  "/user-login": UserLogin,
  "/user-profile": UserProfile,
  "/user-recover": UserRecover,
  "/user-register": UserRegister,
  "/user-accountplan": UserAccountPlan,
  "/user-accountplanform": UserAccountPlanForm,
  "/user-deposit": UserDeposit,
  "/user-transfer": UserTransfer,
  "/user-payment": UserPayment
};

const router = async () => {
  const root = null || document.getElementById("root");

  //Browser url
  let request = Utils.parseRequestURL();
  //TODO: fixme
    let parseURL =
      (request.resource ? `/${request.resource}` : "/") +
      (request.id ? `/id:${request.id}` : "") +
      (request.verb ? `/${request.verb}` : "");

  if (parseURL === '/user-logout'){
    sair();
  }


  let page = routes[parseURL] ? routes[parseURL] : Error404;

  if (page.isPrivate && !isLogado()){
    window.alert('private access required');
    window.location.replace('/#');
    return;
  }

  root.innerHTML = await page.render(isLogado());
  await page.after_render();
};

//Listens to hash changes
window.addEventListener("hashchange", router);

//Listens to page load
window.addEventListener("load", router);
