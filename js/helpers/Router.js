import Home from "../components/Home.js";
import Login from "../components/Login.js";
import SchoolHome from "../components/school/SchoolHome.js";
import show_table from "../components/school/show_table.js";


export default function Router() {
  const $MAIN = document.querySelector("main");
  let { hash } = location;

  $MAIN.innerHTML = "";

  let itsme =
    localStorage.getItem("username") === "carlosupreme" &&
    localStorage.getItem("password") === "carlos1030";

  if (itsme) {
    if (!hash || hash === "#" || hash === "#/") {
      $MAIN.insertAdjacentElement("afterbegin", Home());
    } else if (hash.includes("school")) {
      School($MAIN);
    } else if (hash.includes("blog")) {
      $MAIN.innerHTML = "<h1>Blog page</h1>";
    }
  } else {
    $MAIN.insertAdjacentElement("afterbegin", Login());
  }

  console.log(`router a cambiado a ${hash}`);
}

function School($MAIN) {
  $MAIN.insertAdjacentElement("afterbegin", SchoolHome());
  if (location.hash === "#/school/show_table") {
    $MAIN.innerHTML = "";
    $MAIN.insertAdjacentElement("afterbegin", show_table());
  }
}
