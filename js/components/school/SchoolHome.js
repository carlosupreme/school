import createDiv from "../../helpers/createDiv.js";

export default function SchoolHome() {
  let schoolName = localStorage.getItem("school");
  const $div = createDiv(
    `<h1>School: ${
      schoolName ||
      `<input type="text" placeholder="INgresa el nombre de tu escuela"> <button>Done</button>`
    }</h1>

    <p>lorem</p>
  `);

  document.addEventListener("click", (e) => {
    if (e.target !== $div.querySelector("button")) return false;

    localStorage.setItem("school", e.target.previousElementSibling.value);
    $div.querySelector("input").remove();
    $div.querySelector("button").remove();

    $div.querySelector("h1").textContent =
      "School: " + localStorage.getItem("school");
  });
  return $div;
}

function preguntarEscuela() {}
