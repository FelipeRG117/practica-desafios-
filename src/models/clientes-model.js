const mongoose = require("mongoose")

//aunque este todo conectado con este model, al final no es loq ue necesito de la cosnigna entonces ya termine de hacer en teoria las pruebas con datos irrelevantes, ahora voy a ocupar los otros dos archivos de la misma carpeta para que hacer los models de carrito y productos 

//los que ya esten usando este modelo simplemente cambio la ruta ya que al final e nombre de la variable poco importa ya que instancia el valor que se esta exportando desde la ruta requerida 

const usuariosCollection = "usuarios"

const usuariosSchema = new mongoose.Schema({
    nombre: String, 
    apellido: String, 
    edad: Number
})

const usuariosModel = mongoose.model(usuariosCollection, usuariosSchema)


module.exports = usuariosModel