const mongoose =require ("mongoose") ;
 const express = require ("express");
 const app = express();
 const db = require("./db/index") ;
 const Fournisseur = require("./models/Fournisseur") ;
 const cors = require("cors");
 app.use(cors())
 app.use(express.json())
 const PORT = 8000 ;
 
 // create a new Fournisseur :
app.post ("/api/fournisseurs",(req,res) => {
    console.log("the new fournisseur is :",req.body);
    const newFournisseur = new Fournisseur(req.body);
    newFournisseur.save().then((fournisseur) =>{
        res.status(201).send(fournisseur)
    })
    .catch((error)=> {
        res.status(500).send(error);
    })
}) ;



//get the list of Fournisseurs:
app.get ("/api/fournisseurs",(req,res) => {
    Fournisseur.find({})
     .then((fournisseurs) =>{
         res.status(200).json(fournisseurs);
         console.log(fournisseurs)
     })
     .catch((error) => {
         res.status(500).send(error)
     })
 })


 // update painting
app.get('/api/fournisseurs/:id', function (req, res) {
    Fournisseur.findOne({_id : req.params.id}).then((fournisseurs) =>{
        res.status(200).json(fournisseurs);
        console.log(fournisseurs)
    })
    .catch((error) => {
        res.status(500).send(error)
    })
})



app.put('/api/fournisseurs/:id', function (req, res) {
    Fournisseur.findOneAndUpdate({_id : req.params.id}, {
        name: req.body.name,
        date: req.body.date,
        
    
    }).then((fournisseurs) =>{
        res.status(200).json(fournisseurs);
        console.log(fournisseurs)
    })
    .catch((error) => {
        res.status(500).send(error)
    })
})

// Delete painting

app.delete('/api/fournisseurs/:id', async function (req, res) {

try {
    console.log(req.params.id)
    await Fournisseur.deleteOne({_id:req.params.id});
    console.log("deleted")
    res.status(200).send("deleted successfully")
} catch (error) {
    res.status(500).send(error)
}
})






 app.listen(PORT, () => {
    console.log(`Started listening to requests on port ${PORT}`);
})