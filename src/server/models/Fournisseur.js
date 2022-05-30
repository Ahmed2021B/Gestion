const mongoose =require ("mongoose") ;

// define mongoDB Models 
const Fournisseur = mongoose.model('Fournisseur', 
{   id : Number ,
    name: String, 
    date: String,
});

module.exports = Fournisseur; 