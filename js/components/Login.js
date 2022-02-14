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
  <label for="name">
  Contraseña
  <input
    autocomplete="off"
    type="text"
    id="nombre"
    required
    name="nombre"
  />
</label>
  <input type="submit" value="Start" />
</form>
  `;
  return $div;
}
