import createDiv from "../helpers/createDiv.js";

export default function Home() {
  let username = localStorage.getItem("username")
  let $div = createDiv(`
    <div>
      <h2>Bienvenido a la pagina principal</h2>
      <p>En esta pagina encontraras los apuntes de la carrera <strong>Sistemas Computacionales</strong> y muchas mas cosas...</p>
    </div>
    <div class="bg"></div>
    `);
  $div.classList = "home";
  return $div;
}