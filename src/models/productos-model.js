//de aqui vamos a estar utilizando los modelos de products 
const mongoose = require("mongoose")

const productsCollection = "products"

const productsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required:true
    },
    price:{
        type: Number, 
        required: true
    },
    img:{
        type: String
    },
    code:{
        type: String,
        required: true,
        unique: true
    }, 
    stock:{
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    thumbnails:{
        type: [String]
    }
})
//Aqui ni el img ni thimnails estan especificados para ser obligatorios 
const ProductModel= mongoose.model(productsCollection, productsSchema)
//aqui ya creamos el modelo de products "listo" para empezar a hacer pruebas con model y del model al routes(Voy a cambiar la ruta de clientes model a productos model en controllers de product)
module.exports = ProductModel
//ACABO DE TERMINAR DE CONFIGURAR BIEN LOS DATOS A RECIBIR PARA MI DBS AHORA DEBO VERIFICAR QUE CONCUERDE EN AGREGAR PRODUCTOS DE MI PRODUCT DE CONTROLLERS 
//SE CONFIGURARON DE UNA MANERA MAS DETALLADA 


/* title: String, 
    description: String,
    price: Number,
    img: String,
    code: String,
    stock: Number,
    category: String, 
    thumbnails: String
     */