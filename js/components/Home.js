import createDiv from "../helpers/createDiv.js";

export default function Home() {
  let username = localStorage.getItem("username")
  let $div = createDiv(`
    <h1>Home page</h1>
    <h2>Bienvenido ${username}</h2>
    <p>En esta pagina encontraras los apuntes de la carrera Sistemas Computacionales y muchas mas cosas</p>
  `);
  return $div;
}