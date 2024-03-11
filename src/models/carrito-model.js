//A qui voy a crear el modelo de los carritos

const mongoose = require("mongoose");

//instanciar el nombre de la coleccion para crear el modelo
const carritoCollections = "carrito";

const cartsSchema = new mongoose.Schema({
  products: [
    {
      producto: {
        //que lo ponga de manera de array significa que va a poder contener multiples objetos en su interior
        type: mongoose.Schema.Types.ObjectId,
        ref: "productosCar",
        required: true,
      }, //separamos el contenido principal de quantity por que son dos cmampos diferentes, de un lado el id para poder referenciarlo y utilizar populationy el quantity que sirve para ver la cantidad del prodcto
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
}); //es un documento que contiene un campo con array y dentro del array guarda un objeto que guarda id y quantity

//creamos el modelo con el nombre y esquema de carrito

const cartsModel = mongoose.model("carrito", cartsSchema);

module.exports = cartsModel;
