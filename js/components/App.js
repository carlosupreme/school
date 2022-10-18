import Header from "./Header.js";

const $ROOT = document.getElementById("root");
const $MAIN = document.createElement("main");

export default function App() {
  $ROOT.appendChild(Header());
  $ROOT.appendChild($MAIN);
}
