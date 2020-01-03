const {Reservation} = require('../models/reservation');


async function createReservation(userId,showId,sits){
    const reservation= new Reservation({
        userId: userId,  
        showId: showId,
        sits: sits 
    });
    try{const result =await reservation.save();
        console.log(result);}
     
     catch (ex) {
         console.log(ex.message);
     }
}  
module.exports.createReservation=createReservation;