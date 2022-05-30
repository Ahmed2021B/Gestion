import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
      
    
      <div class="method1">
      <nav class="pa3 pa4-ns ">
        <Link
          class="link dim white b f1 f-headline-ns tc db mb3 mb4-ns"  to="/a" title="">
          Gestion des cheques
        </Link>

        <Link class="link dim light-yellow f10 f3-ns dib mr5"  to="/accn" title="">
          Acceuil
        </Link>


        <Link class="link dim light-yellow f10 f3-ns dib mr5"  to="/four" title="">
          Fournisseurs
        </Link>

        <Link class="link dim light-yellow f10 f3-ns dib mr5"  to="/bank" title="">
          Banques
        </Link>

        <Link class="link dim light-yellow f10 f3-ns dib mr5"   to="/cheqpayee" title=" ">
          Cheques Payés
        </Link>

        <Link class="link dim light-yellow f10 f3-ns dib mr5"   to="/form" title=" ">
          Ajouter Cheques
        </Link>


      </nav>
    </div>
      
    );
  };
  
  export default Navbar;