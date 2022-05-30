import react, {useState} from "react";
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import "tachyons";
import { BrowserRouter, Route } from "react-router-dom";
import axios from 'axios'
const Form = () => {
return (

<div>
    <form class="pa4 black-80">
                    <div class="measure center">
                    

                    <label for="Fournisseur" class=" dim light-yellow  f10 b db mb2">
                    Fournisseur {/*<span class="normal black-60">(optional)</span>*/}
                    </label>
                    <input
                    id="Fournisseur"
                    class="input-reset ba b--black-20 pa2 mb4 db w-100"
                    type="text" />
                    
                    <label for="Banque" class=" dim light-yellow  f10 b db mb2">
                    Banque {/*<span class="normal black-60">(optional)</span>*/}
                    </label>
                    <input
                    id="banque"
                    class="input-reset ba b--black-20 pa2 mb4 db w-100"
                    type="text" />

                    <label for="numfact" class="dim light-yellow  f10 b db mb2">
                    Numero de Facture {/*<span class="normal black-60">(optional)</span>*/}
                    </label>
                    <input
                    id="numfact"
                    class="input-reset ba b--black-20 pa2 mb4 db w-100"
                    type="text" />

                    <label for="Date de reception" class="dim light-yellow  f10 b db mb3">Date de reception</label>
                    <input type="date" name="date" id="Montantfact" class="input-reset ba b--black-20 pa2 mb4 db w-100" placeholder="date..."/> 

                   {/*} // <label for="Date de reception" class="dim light-yellow  f10 b db mb2"></label>
// <CalendarComponent id="calendar" class="measure center" />*/}


                    <label for="Montantfact" class="dim light-yellow  f10 b db mb3">
                    Montant de facture $ {/*<span class="normal black-60">(optional)</span>*/}
                    </label>
                    <input
                    id="Montantfact"
                    class="input-reset ba b--black-20 pa2 mb4 db w-100"
                    type="text" />


                    <label for="Numero de cheque" class=" dim light-yellow f10 b db mb2">
                    Numero de cheque {/*<span class="normal black-60">(optional)</span>*/}
                    </label>
                    <input
                    id="Numero de cheque"
                    class="input-reset ba b--black-20 pa2 mb4 db w-100"
                    type="text" />


                    <label for="Montant" class="dim light-yellow  f10 b db mb2">
                    Montant $ {/*<span class="normal black-60">(optional)</span>*/}
                    </label>
                    <input
                    id="Montant"
                    class="input-reset ba b--black-20 pa2 mb4 db w-100"
                    type="text" />

                    <label for="Date de versement" class="dim light-yellow  f10 b db mb3">Date de versement</label>
                    <input type="date" name="date" id="Montantfact" class="input-reset ba b--black-20 pa2 mb4 db w-100" placeholder="date..."/> 

                     



                    </div>
    </form>     

</div>
    )
    } ;

    export default Form