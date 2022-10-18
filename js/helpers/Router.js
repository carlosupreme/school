import Home from "../components/Home.js";
import SchoolHome from "../components/school/SchoolHome.js";
import show_table from "../components/school/show_table.js";

export default function Router() {
  const $MAIN = document.querySelector("main");
  let { hash } = location;

  $MAIN.innerHTML = "";

  if (!hash || hash === "#" || hash === "#/")
    $MAIN.insertAdjacentElement("afterbegin", Home());
  else if (hash.includes("school")) School($MAIN);
  else if (hash.includes("blog")) $MAIN.innerHTML = "<h1>Blog page</h1>";
}

function School($MAIN) {
  if (location.hash === "#/school" || location.has === "#/school/")
    $MAIN.insertAdjacentElement("afterbegin", SchoolHome());

  if (
    location.hash === "#/school/show_table" ||
    location.hash === "#/school/show_table/"
  ) {
    $MAIN.innerHTML = "";
    $MAIN.insertAdjacentElement("afterbegin", show_table());
  }
}
