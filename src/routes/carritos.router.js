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
router.post("/:cid/producto/:pid", async (req,res)=> {
    const cartId = req.params.cid;
    const productId = req.params.pid;
    const quantity = req.body.quantity || 1;

    try {
        const actualizarCarrito = await cartManager.addProductInCart(cartId, productId, quantity);
        res.json(actualizarCarrito.products);
    } catch (error) {
        console.error("Error al agregar producto al carrito", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});


//vamos a probar con getById 
router.get("/:pid", async (req,res)=>{
    const lid = req.params.pid

    try{
        //como es algo por Id tenemos que tomar el id de req.params.Id en su ruta dinamica 
        //pero ddato a tomar en cuenta y es de que hace arriba del atry catch 

        //vamos a traer carrito por id 
        const carrito = await cartManager.getCarritoById(lid)
        console.log(carrito)
        res.json(carrito)

    }catch(err){
        console.log("Hubo un error", err)
    }

})

//Eliminacion de carrito
router.delete("/:cid", async (req,res)=>{
    const cartId = req.params.cid   
    try{
const cartDel = await cartManager.deleteCart(cartId)
res.status(200).json({message: "Eliminacion exitosa"})


    }catch(err){
        console.log("Huboun error a la ghora de elimianr carrito", err)
    }
})



 
//y al fincla lo exportmaos 

module.exports = router 





