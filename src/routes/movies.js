
const {Movie} = require('../models/movie');


async function createMovie(IdFilmu,nazwa,opis,Url){
    const movie= new Movie({
        movieId: IdFilmu,
        name: nazwa,  
        desctiption: opis,
        url: Url 
    });
    try{const result =await movie.save();
        console.log(result);}
     
     catch (ex) {
         console.log(ex.message);
     }
}  
module.exports.createMovie=createMovie;