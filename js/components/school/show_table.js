import createDiv from "../../helpers/createDiv.js";

export default function show_table() {
  let $div = createDiv(`
    <h1>This is like your database</h1>
    <h2>For ${localStorage.getItem("username")}</h2>
    <br> <br>
    <table class="table s-0" >
    <thead >
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Link</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td>Email</td>
        <td>My google ONLY PC</td>
        <td class="text-center">
          <a target="_blank" href="https://mail.google.com/mail/u/3/?ogbl#inbox">
            Correo institucional
          </a>
        </td>
      </tr>
      <tr>
        <td>Mindbox</td>
        <td>For syllabus</td>
        <td class="text-center">
          <a target="_blank" href="https://itoaxaca.mindbox.app/alumnos">
            <img src="./img/mindbox_icon.png" width="50">
          </a>
        </td>
      </tr>
      <tr>
        <td>Moodle</td>
        <td>Digital platform</td>
        <td class="text-center">
          <a target="_blank" href="https://moodle.oaxaca.tecnm.mx/">
            <img src="./img/moodle_icon.png" width="50">
          </a>
        </td>
      </tr>
      <tr>
      <td>MOOC</td>
      <td>For Courses on MOOC complementary</td>
      <td class="text-center">
        <a target="_blank" href="https://mooc.tecnm.mx/dashboard">
          MOOC
        </a>
      </td>
    </tr>
      <tr>
        <td>Tecnm</td>
        <td>Oficial Page for the school</td>
        <td class="text-center">
          <a target="_blank" href="http://www.itoaxaca.edu.mx/">Itoaxaca</a>
        </td>
      </tr>
      <tr>
        <td>Tecnm oaxaca</td>
        <td>Oficial Page for the school in Facebook</td>
        <td class="text-center">
          <a target="_blank" href="https://www.facebook.com/Tecnm-Campus-Oaxaca-1639620802931392">Tecnm Oaxaca</a>
        </td>
      </tr>
      <tr>
        <td>Coordinacion Sistemas FB</td>
        <td>Oficial Page for the career cordination in Facebook</td>
        <td class="text-center">
          <a target="_blank" href="https://www.facebook.com/nuevacoord.sistcomp">Coordinacion Sistemas</a>
        </td>
      </tr>
      <tr>
        <td>Horarios group FB</td>
        <td>Facebook group for the classes groups links</td>
        <td class="text-center">
          <a target="_blank" href="https://www.facebook.com/groups/1076089266227455">Horarios y clases virtuales</a>
        </td>
      </tr>
      <tr>
        <td>ITO group FB</td>
        <td>Facebook group for the school</td>
        <td class="text-center">
          <a target="_blank" href="https://www.facebook.com/groups/itoaxaca">Grupo ITO</a>
        </td>
      </tr>
      <tr>
        <td>Ayuda ITO</td>
        <td>Tecnm Oaxaca support page</td>
        <td class="text-center">
          <a target="_blank" href="https://soporte.oaxaca.tecnm.mx/index.php">Soporte ITO</a>
        </td>
      </tr>
      <tr>
        <td>Complementarias ITO</td>
        <td>Actividades complementarias facebook</td>
       <td class="text-center">
          <a target="_blank" href="https://www.facebook.com/ActComplentariasITO">Complementarias ITO</a>
        </td>
      </tr> 
    </tbody>
    </table>
    <br>

    <a href="#/school">Go back</a>
  `);
  return $div;
}
