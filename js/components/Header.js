export default function Header() {
  const $header = document.createElement("header");
  $header.setAttribute("id", "mainHeader")
  $header.classList = "flex bg-red-500 justify-content-between";
  $header.innerHTML = `
    <span>CSUPREME</span>
    <nav>
      <ul>
        <li><a href="#/" class="active">Home</a></li>
        <li><a href="#/school">School</a></li>
        <li><a href="#/blog">Blog</a></li>
      </ul>
    </nav>
    <i class="fa-solid fa-bars menu-btn"></i>
  `;

  document.addEventListener("click", (e) => {
    if (e.target.matches("#mainHeader li a")) {
      // Removing the last active
      $header.querySelectorAll("a").forEach((link) => (link.classList = ""));
      // adding the target as active
      e.target.classList = "active";
      //if is in mobile
      $header.querySelector("nav").classList.remove("active");
    }

    if (e.target === $header.querySelector(".menu-btn")) {
      $header.querySelector("nav").classList.toggle("active");
    }
  });

  return $header;
}
