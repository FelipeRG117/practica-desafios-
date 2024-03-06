const express = require("express")

const router = express.Router()

//traemos el esquema de los datos 
const usuariosModel = require("../models/clientes-model.js")

router.get("/", async (req,res)=>{
try {
    const usuarios = await usuariosModel.find()
 
res.json(usuarios)

} catch (error) {
    console.log("hubo un error al traer documentos de mongo, " + error)
}
})


module.exports = router


