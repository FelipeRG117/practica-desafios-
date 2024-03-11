//vamos a hacer uso de controllers de carrito 
//primero importamos el express router y luego el controllers de carrito 

const express = require("express")
const router = express.Router()
//importamos el controllers 
const CartsManager = require("../controllers/cart-manager-db.js")
const cartManager = new CartsManager()


router.get("/", async (req,res)=>{
    try{
     const carritos = await cartManager.getCarts()
     console.log(carritos)
     res.json(carritos)

    }catch(err){
console.log("Se produjo un error a la hora de traer los pcarritos en router ", err)
    }
//quedan descomentar e router 

})





//vamos a probar con getById 
router.get("/:pid", async (req,res)=>{
    const lid = req.params.pid

    try{
        //como es algo por Id tenemos que tomar el id de req.params.Id en su ruta dinamica 
        //pero ddato a tomar en cuenta y es de que hace arriba del atry catch 

        //vamos a traer carrito por id 
        const carrito = await cartManager.getCarritoById(lid)
       // console.log(carrito)
        res.json(carrito)

    }catch(err){
        console.log("Hubo un error", err)
    }

})





 
//y al fincla lo exportmaos 

module.exports = router 





