//Aqui vamos a estar requisiriendo los mdelos creados con mongoDB y creado una class con funcinoes para eliminacion actualizacion etc
//AAAAAAA ya despues de crear el model de carrito amos a crear el controllers de caritoooo 
 //primero importamos el model para poder interacruar conn  el modelo 

 const cartsModel = require("../models/carrito-model.js")
//primero vamos a ahcer una pedida con find para ver que todo funcione
//pero antes que anda a imporrar express router paa pdoer utilizarlo en app 
/* const express = require("express")
const router = express.Router 
 */
//PERO esto es controllers y se maneja con clases y no con rutas como en routes 

class cartsManager {//aqui no se pone el async 

    //recibe por parametros el id entonces utilizamos el id dentro de params 
    async getCarritoById(lid){
//una vez tenido el id, vamos a tener que hacer una funcion directamente de traer por ID
//hacemos un try catch antes de nada 
try{
   // creamos la fucnion de traer por id y hacemos el filtrado
   //no se te olvide que para encontrar el id se ocupa meter objeto dentro de parametros y el _id: 
    const carrito = await cartsModel.findById(lid)
    if(!carrito){
        console.log("No hay carrito econ ese Id")
        return null;
    }
    console.log(carrito)
    return carrito; 

}catch(err){
console.log("Se produjo un error a la hora de traer carrito por ID", err)
}
    }







/* 
    async addProductInCart(){


    }

    async crearCarrito(){


    } */

    //de esta manera creamos una funcion dentro de una classm 
    async getCarts(){
        //usamos el await en caso de que interactuemos con el model que hace los pedidos externos 
        try{
            const carritos = await cartsModel.find()
            console.log(carritos);
            
            return carritos;
        }catch(err){
            console.log("se produjo un error en getCarritos ", err )
        }
    }

}

//exposrtamos de una vez para poder usar el router y conectarlo de una 
module.exports = cartsManager

