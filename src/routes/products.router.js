//importamos el controllers para manejar los datos del model de la colecicon products 

const express = require("express")
const router = express.Router()
//con el router ya instanciado ya podriamos generar los bloques como primero de get products patra ver si funciona correctamente 
//pero como no tiene nada lo idea seria primero instancia algunos documentos que coincidan con la consigna 

//Al final creamo una clase la cual tiene metodos para traer productos relacionados al modelo que creamos para products entonces instanciamos la class con todos sus metodos y podremos en teoria hacer uso de sus metodos con modelo.metodo(Que el metodo podria ser getProducts)
const ProductManager = require("../controllers/product-manager-db.js")
//una vez ya instancia la referencia podemos empezar a hacer pruebas con routes, etnonces cremoas lo necesario para routes 





//prueba con get 


//DESPUES de  estar utilizando este archivo en la nada, lo que debo de hacerr es importar el controllers ya que ni si quiera lo importe y segundo es de que el mensaje en la terminal es irrelevante ya que aqui controlo o deberia de contrllar las pedidas con el conttrollers 

//A probar un new para ver si puede ser por ahi el error                        NOTA: SI FUNCIONO HACER UN NEW AL CLASS 
const productManager = new ProductManager()



router.get("/", async (req,res)=>{3
    try {
        //ya que tenemos instancia la class de controllers, osea el productmanager vamos aver si jala primero con el get y devolver en json ya que no puedo iterar sobre handlebars 
        const {page=1, limit = 2}= req.query;
        const products = await productManager.getProducts({
            page: parseInt(page),
            limit: parseInt(limit)
        })

       const newArray = products.docs.map(product=>{
        const {_id, ...rest}= product.toObject();
        return rest
       })

       res.render("products", {
        products: newArray,
        hasPrevPage: products.hasPrevPage,
        hasNextPage: products.hasNextPage,
        prevPage:products.prevPage,
        nextPage: products.nextPage,
        currentPage: products.page,
        totalPages: productstotalPages,
        user: req.session.user
       }); 
       
    } catch (error) {
        console.log("Hubo un error en router get por  " + error)
    }


    //DESPUES DE HABER ECHO UNA CONFIGURACION MAS DETALLADA Y COMPLETA DEL MODELS DE PRODUCTOS, VOY A CREAR UN POSTPARA VERIFICAR DE FUNCIONE EL addProducts 



})

//NO SE OCURRA METER UNA DENTRO DE LA OTRA DE NUEVO Y MANTEN LA SEPARACION DE CADA ROUTER 


    //HASTA EL MOEMNTO LA TOMA DE PARAMS Y LAS RULTAS RELATIVAS SIGUEN SIENDO LAS MISMAS Y POR EL MOEMTNO NO A CAMBIADO EL ECHO DE QUE ESTE ECHA CON MOGNOOSE Y TENGAMOS QUE EXTRAER ALGUN PARAMS O REQ.BODY 

    //Vamos a hacer un update aqui 



router.post("/", async (req,res)=>{
    const producto = req.body; //Los pedidos del reqq y para tomar datos se hacen fuera del try para que funcione y se haga el pedido de req 
    console.log(producto)
    try{
        //Prtimero que nada debo recuperar el req.body de postman para poder utilizar en el add product y aparte debo buscar el producto con su id, pero como este es para crear un nuevo prodcuto con el req.body deberia ser necesario, seria necesario con id para poder actualiizar ya que estaria creado y se tomaria del params pero de agregar producto nocreo, igualmente tocara pensar en el camino 
        
        console.log(producto)

        const pol = await productManager.addProduct(producto)
        res.status(200).json({message: "SIRVIOOOOOOOOO Y SE ENVIOOOOO"})
        return;


    }catch(err){
        console.log("Hubo un error en router post", err)
        res.status(500).json({message: "NOOOOOOO no no envio el post u ocurrio un eeror jajajaja  :c "})
    }

})


//va,mos a hacer el delete aqui 

router.delete("/:pid", async (req,res)=>{
    const pid = req.params.pid
    try{
    const pal = await productManager.deleteProduct(pid)
    res.status(200).json({message: "La bida es loka y pura "})
    return console.log(pal);
    }catch(err){
        console.log("Hubo un error lokoooo", err)
        res.status(500).json({message: "Hubo un error loko en el delete"})
    }


})

//ACa yipiyayei vamos a hacer el updateProduct
//update product
router.put("/:lid", async (req,res)=>{
    const lid = req.params.lid
    //tambien debo tomar los datos a actualizar del body del servidor osea hacer un request requerimiento 
    const nuv = req.body;
    //Una vez yatomado el body es de pasarlo al updatePorudcts de controllers el cual maneja el el moedel ytiene las funciones de mognoose 
    try{
        await productManager.updateProduct(lid, nuv)
        res.status(200).json({message: "La bida es loka y pura "})
        return;
    }catch(err){
        console.log("Hubo un error lokoooo en actualizar", err)
        res.status(500).json({message: "Hubo un error loko en el delete"})
    }
})

//ACA VAmos a ahcer el ggetProductById
//Ahora vamos a hacer una pedida a un producto en especifico por id 

router.get("/:lid", async (req,res)=>{
    //tomaos el id y luego vamos a ahcer el metodo getById del controllers 
    const lid = req.params.lid
    try{
        const producto = await productManager.getProductById(lid)
       
        res.status(200).json(producto)
        console.log(producto)
        return ;
    }catch(err){
        console.log("Hubo un error lokoooo en traer uno por id r", err)
        res.status(500).json({message: "Hubo un error loko en el delete"})

    }
})














module.exports= router

