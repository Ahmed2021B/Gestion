
import react from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


function Lista(props) {

return  (
    <div className="List" > 
       <table>
          <thead>
              <tr>
                  <th> Fournisseur </th>
                  <th> Montant </th>
                  <th> Bank    </th>
                  <th> N° cheque </th>
              </tr>
          </thead>
          <tbody>
          
              <tr>
                  <td> Ahmed </td>
                  <td> 500 </td>
                  <td> Zitouna </td>
                  <td> 09649652 </td>
              </tr>
          
          
          </tbody>

       </table>
      </div>
   )
 }
 export default Lista