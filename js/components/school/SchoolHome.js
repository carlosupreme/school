import createDiv from "../../helpers/createDiv.js";

export default function SchoolHome() {
  let schoolName = localStorage.getItem("school");
  const $div = createDiv(
    `<h1>School: ${
      schoolName ||
      `<input class="schoolname-input" type="text" placeholder="Nombre de tu escuela"> <button>Done</button>`
    }</h1>

    <div class="cards">
      <div class="card">
        <h2 class="title">Table for school information</h2> <br>
        <div class="description">
          <p>
          In this page you can create a small table with the data you want about your school, such as  <br><br>
            <li>the link to each class,</li>
            <li>the link to the virtual platform,</li>
            <li>the link to your grades.</li>
            <li>Everything you want!</li> <br>
          This table will be stored in the localstorage of your browser... so be careful what you delete 
          </p> 
        </div> <br>
        <a class="cta" href="#/school/show_table">Start a table</a>
      </div>
      <div class="card">
        <h2 class="title">Quizes for an exam or study</h2><br>
        <div class="description">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis vel nam magni, totam non, quos ea corrupti laudantium amet a nemo, explicabo fugiat. Quidem et ad sapiente id, corrupti maxime?</p>
        </div><br>
        <div>
          <a class="cta" href="#/school/create_quiz">Make a quiz</a>
          <a class="cta" href="#/school/show_quizes">Start a quiz</a>
        </div>
      </div>
    </div>
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
