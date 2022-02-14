import App from "./components/App.js";
import Router from "./helpers/Router.js";

document.addEventListener("DOMContentLoaded", function () {
  App();
  Router();
});

window.addEventListener("hashchange", Router);
