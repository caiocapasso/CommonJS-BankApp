// Imports
import Utils from "./services/utils";
import Home from "./views/pages/Home";
import Error404 from "./views/pages/Error404";
import UserDashboard from "./views/pages/UserDashboard";
import UserLogin from "./views/pages/UserLogin";
import UserProfile from "./views/pages/UserProfile";
import UserRecover from "./views/pages/UserRecover";
import UserRegister from "./views/pages/UserRegister";


// Routes
let routes = {
  "/": Home,
  "/user-dashboard": UserDashboard,
  "/user-login": UserLogin,
  "/user-profile": UserProfile,
  "/user-recover": UserRecover,
  "/user-register": UserRegister,
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


  let page = routes[parseURL] ? routes[parseURL] : Error404;

  root.innerHTML = await page.render();
  await page.after_render();
};

//Listens to hash changes
window.addEventListener("hashchange", router);

//Listens to page load
window.addEventListener("load", router);