export default function createDiv(html) {
  let $div = document.createElement("div");

  $div.innerHTML = html;

  return $div;
}