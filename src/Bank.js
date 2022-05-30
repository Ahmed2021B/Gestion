import react, {useState} from "react";
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import "tachyons";
import { BrowserRouter, Route } from "react-router-dom";
import axios from 'axios'
import "tachyons";
const Bank = () => {

return ( 
    <form class="measure center">
        <div>
            <input type="text" name="desc" id="desc" class="input-reset ba b--black-20 pa2 mb4 db w-100" placeholder="Nom du Banque..."/>
            <input type="date" name="date" id="date" class="input-reset ba b--black-20 pa2 mb4 db w-100" placeholder="date..."/> 

        </div>
     </form>
    )
} ;

export default Bank 