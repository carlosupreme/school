export default function Login() {
  const $div = document.createElement("div");
  $div.id = "log-in"
  $div.innerHTML = `
  <form class="container-log-in" id="form-home">
  <h1>Log in</h1>
  <label for="name">
    Nombre de usuario
    <input
      autocomplete="off"
      type="text"
      id="nombre"
      required
      name="nombre"
    />
  </label>
  <label for="pass">
  Contraseña
  <input
    autocomplete="off"
    type="password"
    id="pass"
    required
    name="pass"
  />
</label>
  <input type="submit" value="Start" />
</form>
  `;

  document.addEventListener("submit", e=>{
    if(e.target !== $div.querySelector("form")) return false;
    e.preventDefault();
    localStorage.setItem("username", e.target.nombre.value)
    localStorage.setItem("password", e.target.pass.value)

    location.hash = "#/";
    location.reload();
  })
  return $div;
}
