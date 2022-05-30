import react, {useState} from "react";
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import "tachyons";
import { BrowserRouter, Route } from "react-router-dom";
import axios from 'axios'

import {nanoid} from 'nanoid' ;
import { Link } from "react-router-dom";

function Four(props) {

    const deleteCard = () =>{

       const confirmBox = window.confirm(
     
         "Do you really want to delete this ?"
     
       )
     
       if (confirmBox === true) { window.location.reload()
       axios.delete(`http://localhost:8000/api/fournisseurs/${props.info._id}`)
       .then(res=>console.log(res.data))
       .catch(err => console.log(err.message))
     
     }
     
     }

return ( 

   
       
        
        <tbody class="measure center">
        
            <tr>

            <td> {props.info.name}  </td>
            <td>  {props.info.date}</td>
            <td><button class="buttondelete" onClick={deleteCard}><span>Delete </span></button></td>
            </tr>
           
            
            
           
        
        
        </tbody>

    
     
       
     
    )
} 

export default Four