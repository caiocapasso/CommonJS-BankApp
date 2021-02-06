// Imports
import Utils from "./services/utils";
import Home from "./views/pages/Home";
import Error404 from "./views/pages/Error404";

// Routes
let routes = {
  "/": Home,
};

const router = async () => {
  const root = null || document.getElementById("root");

  //Browser url
  let request = Utils.parseRequestURL();
  //TODO: fixme
  //   let parseURL =
  //     (request.resource ? `/${request.resource}` : "/") +
  //     (request.id ? `/id:${request.id}` : "") +
  //     (request.verb ? `${request.verb}` : "");

  let parseURL =
    (request.resource ? "/" + request.resource : "/") +
    (request.id ? "/:id" + request.id : "") +
    (request.verb ? "/" + request.verb : "");

  let page = routes[parseURL] ? routes[parseURL] : Error404;

  root.innerHTML = await page.render();
  await page.after_render();
};

//Listens to hash changes
window.addEventListener("hashchange", router);

//Listens to page load
window.addEventListener("load", router);
