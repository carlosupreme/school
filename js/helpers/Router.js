import Login from "../components/Login.js";

export default function Router() {
  const $MAIN = document.querySelector("main");
  let { hash } = location;

  $MAIN.innerHTML = "";

  let itsme =
    localStorage.getItem("username") === "carlosupreme" &&
    localStorage.getItem("password") === "carlos1030";

  if (itsme) {
    if (!hash || hash === "#" || hash === "#/") {
      $MAIN.innerHTML = "Home";
    } else if (hash.includes("school")) {
      $MAIN.innerHTML = "<h1>School page</h1>";
    } else if (hash.includes("blog")) {
      $MAIN.innerHTML = "<h1>Blog page</h1>";
    }
  } else {
    $MAIN.insertAdjacentElement("afterbegin", Login());
  }

  console.log(`router a cambiado a ${hash}`);
}
