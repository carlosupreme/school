export default function Header() {
  const $header = document.createElement("header");
  $header.classList = "primary-header";
  $header.innerHTML = `
    <div class="max-width s-1">
      <span>LOGO</span>
      <nav>
        <ul>
          <li><a href="#/" class="active">Home</a></li>
          <li><a href="#/school">School</a></li>
          <li><a href="#/blog">Blog</a></li>
        </ul>
      </nav>
      <i class="fa-solid fa-bars menu-btn"></i>
    </div>
  `;

  document.addEventListener("click", (e) => {
    if (e.target.matches(".primary-header li a")) {
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
