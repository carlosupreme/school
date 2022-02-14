import Header from "./Header.js";
import Footer from "./Footer.js";

const $ROOT = document.querySelector("#root");
const $MAIN = document.createElement("main");

export default function App() {
  $ROOT.appendChild(Header());
  $ROOT.appendChild($MAIN);
  $ROOT.appendChild(Footer());
}
