const express = require("express")
const router = express.Router()


const pets = [];


//Ahora el de pets (Mascotas)

router.get("/", (req, res)=>{
    res.json(pets)
})

router.post("/", (req, res)=>{
    const nuevaMascota = req.body;
    pets.push(nuevaMascota)
    res.send({status: "success", message: "se envio el perro"})
})



module.exports = router 










