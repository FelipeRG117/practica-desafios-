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


//vamos a ahcer un post para crear carrito 
router.post("/", async (req,res)=>{
    //tomamos el req.body fuera deltry catch 
    const Cart = req.body
    try{
        //vamos a invocar el controllers y enseñar por json el carrito y verificar en la dbs que este en orden 
        const cart = await cartManager.crearCarrito(Cart)
        console.log(cart)
        res.json(cart)

    }catch(err){
        console.log("Hubo un error a la hora de crea un carrito", err)
    }

})

//crear producto dentro de algun carrito 
router.post("/:lid", async (req,res)=>{
//de la ruta dinamica tomamos el id y del req.body el producto 
const cid = req.params.lid
const product = req.body
    try{
        //Una ez que ya tengamos estio vamos a hacer las fucnniones del controllers para poder ejecutar y meter el producto dentro del cart 
        const productInCart = await cartManager.addProductInCart(cid, product)
        if(productInCart){
            console.log(productInCart)
            res.json(productInCart)
        }
        console.log(productInCart)
        return null;
    }catch(err){
        console.log("Ha habido un error al crear ell post de product in Cart", err)
    }
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





