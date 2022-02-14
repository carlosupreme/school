export default function Footer() {
  const $footer = document.createElement("footer");
  $footer.classList = "footer";
  $footer.innerHTML = `<p>Developed by <a target="_blank" href="https://github.com/carlosupreme">@carlosupreme</a></p>`;
  return $footer;
}
