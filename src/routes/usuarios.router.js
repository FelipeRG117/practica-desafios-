/* const express = require("express")

const router = express.Router()

//traemos el esquema de los datos 
const usuariosModel = require("../models/clientes-model.js")
//Primer punto a notar, no estoy ni trayendo el controllers y estoy maniuplando el models cuando no es necesario, tecera y es de que este no pertence al error a la pedidade mi base de datos 
//este no es mas que una prueba de quien sabe que y es irrelevante por ele momento para el proyecto, el que deberia estar menajenado es el products router 
router.get("/", async (req,res)=>{
try {
    const usuarios = await usuariosModel.find()
 
res.json(usuarios)
//esto no fue mas que de prueba, ya no es relevante  para el manejo de mi dbs como lo es products router 
} catch (error) {
    console.log("hubo un error al traer documentos de mongo, " + error)
}
})


module.exports = router */


