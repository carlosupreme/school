import createDiv from "../../helpers/createDiv.js";

export default function show_table() {
  let $div = createDiv(`
    <h1>This is like your database</h1>
    <h2>Chekc this out!</h2>
    <br>
    <table>
    <thead>
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
        <th>Column 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>value 1</td>
        <td>value 2</td>
        <td>value 3</td>
      </tr>
      <tr>
        <td>value 4</td>
        <td>value 5</td>
        <td>value 6</td>
      </tr>
    </tbody>
    </table>
    <br>

    <a href="#/school">Go back</a>
  `);
  return $div;
}
