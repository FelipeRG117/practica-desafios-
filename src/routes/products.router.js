//importamos el controllers para manejar los datos del model de la colecicon products 
//Al final creamo una clase la cual tiene metodos para traer productos relacionados al modelo que creamos para products entonces instanciamos la class con todos sus metodos y podremos en teoria hacer uso de sus metodos con modelo.metodo(Que el metodo podria ser getProducts)
const ProductManager = require("../controllers/product-manager-db.js")
//una vez ya instancia la referencia podemos empezar a hacer pruebas con routes, etnonces cremoas lo necesario para routes 

const express = require("express")
const router = express.Router()
//con el router ya instanciado ya podriamos generar los bloques como primero de get products patra ver si funciona correctamente 
//pero como no tiene nada lo idea seria primero instancia algunos documentos que coincidan con la consigna 

//prueba con get 
router.get("/", async (req,res)=>{
    try {
        //ya que tenemos instancia la class de controllers, osea el productmanager vamos aver si jala primero con el get y devolver en json ya que no puedo iterar sobre handlebars 
        const productos = await ProductManager.getProducts()
        res.json(productos)

    } catch (error) {
        console.log("Hubo un error en router get por  " + error)
    }


})

module.exports= router

