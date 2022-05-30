
import {useState, useEffect} from 'react' ;
import "tachyons";
import Four from "./Four";
import axios from 'axios';


function Information () {

    const [name, setname] = useState("");
    const [date, setdate] = useState("");




    const [data, setdata] = useState([])

    const fetchData = ()=>{
        axios.get('http://localhost:8000/api/fournisseurs')
        .then(res => {
            setdata(res.data)
            console.log(res.data)
        })
        .catch(e => console.log(e))
    }

    useEffect(() => {
        fetchData()
    }, [])



    // el function submit 
    const submit = () => {
        axios.post('http://localhost:8000/api/fournisseurs', {
                  
          date,
            name
        }).then(res => console.log(res))
        .catch(error =>console.log(error.message))
        // fetchData()
        window.location.reload()
    }






    return(
        <div  class="measure center" >
        
        <table>
        <thead>
            <tr>
                <th> Fournisseur </th>
                <th> Date </th>
                <th> Actions </th>
            </tr>
            </thead>
       
       { !data.length? "Il n y a pas de fournisseur !":data.map( info => <Four
            info={info} 
               
        />)}
         
        </table>
        <div >
        <label for="Fournisseur" class=" dim light-yellow  f10 b db mb4 ">
        {/*<span class="normal black-60">(optional)</span>*/}
        </label>
        <label for="Fournisseur" class=" dim light-yellow  f10 b db mb4 ">
     Ajouter Un nouveau Fournisseur {/*<span class="normal black-60">(optional)</span>*/}
     </label>
            <input type="text" name="fournisseur" id="desc" class="input-reset ba b--black-20 pa2 mb4 db w-100" placeholder="Nom du fournisseur..."  value={name}
            onChange={e=>setname(e.target.value)} />
            <input type="date" name="date" id="date" class="input-reset ba b--black-20 pa2 mb4 db w-100" placeholder="date..."   value={date}
            onChange={e=>setdate(e.target.value)}/>  

            <button type="submit" class="b1"  onClick={submit} ><span>Add +</span> </button>
            </div>
        </div>
       
    )
}

export default Information