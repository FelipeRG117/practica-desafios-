//de aqui vamos a estar utilizando los modelos de products 
const mongoose = require("mongoose")

const productsCollection = "products"

const productsSchema = new mongoose.Schema({
    title: String, 
    description: String,
    price: Number,
    img: String,
    code: String,
    stock: Number,
    category: String, 
    thumbnails: String
})

const ProductModel= mongoose.model(productsCollection, productsSchema)
//aqui ya creamos el modelo de products "listo" para empezar a hacer pruebas con model y del model al routes(Voy a cambiar la ruta de clientes model a productos model en controllers de product)
module.exports = ProductModel