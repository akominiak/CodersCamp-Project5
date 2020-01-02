
const {Show} = require('../models/cinemaShow');


async function createShow(movieId,date,hour){
    const show= new Show({
        movieId: movieId,  
        date: date,
        hour: hour 
    });
    try{const result =await show.save();
        console.log(result);}
     
     catch (ex) {
         console.log(ex.message);
     }
}  
module.exports.createShow=createShow;