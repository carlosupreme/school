import createDiv from "../../helpers/createDiv.js";

export default function SchoolHome() {
  let schoolName = localStorage.getItem("school");
  const $div = createDiv(
    `<h1>School: ${
      schoolName ||
      `<input class="schoolname-input" type="text" placeholder="Nombre de tu escuela"> <button>Done</button>`
    }</h1>

    <nav class="links">
        <a href="#/school/info">View Table</a>
        <a href="#/school/quizes">Make a Quiz</a>
    </nav>
  `
  );

  $div.classList = "school-page";
  document.addEventListener("click", (e) => {
    if (e.target !== $div.querySelector("button")) return false;

    // e.target == buton, BUT previousElement == input
    let inputText = e.target.previousElementSibling.value;
    // If input.value is less than 3 then take one doomie
    let name = inputText.length > 3 ? inputText : "Escuela de prueba";
    localStorage.setItem("school", name);
    $div.querySelector("input").remove();
    $div.querySelector("button").remove();

    $div.querySelector(
      "h1"
    ).innerHTML = `School: <i>${localStorage.getItem("school")}</i>`;
  });
  return $div;
}
