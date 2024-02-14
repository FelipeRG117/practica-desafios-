const express = require("express")
const router = express.Router()



const users= [];


router.get("/", (req, res)=>{
    res.json(users)
})

router.post("/", (req, res)=>{
    const nuevoProducto = req.body; //accedemos al body del servidor
    users.push(nuevoProducto)
    res.send({status: "success", message: "se envio la persona"})
})



module.exports = router 




