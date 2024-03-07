//importamos el controllers para manejar los datos del model de la colecicon products 
//Al final creamo una clase la cual tiene metodos para traer productos relacionados al modelo que creamos para products entonces instanciamos la class con todos sus metodos y podremos en teoria hacer uso de sus metodos con modelo.metodo(Que el metodo podria ser getProducts)
const ProductManager = require("../controllers/product-manager-db.js")
//una vez ya instancia la referencia podemos empezar a hacer pruebas con routes, etnonces cremoas lo necesario para routes 

const express = require("express")
const router = express.Router()
//con el router ya instanciado ya podriamos generar los bloques como primero de get products patra ver si funciona correctamente 
//pero como no tiene nada lo idea seria primero instancia algunos documentos que coincidan con la consigna 

//prueba con get 


//DESPUES de  estar utilizando este archivo en la nada, lo que debo de hacerr es importar el controllers ya que ni si quiera lo importe y segundo es de que el mensaje en la terminal es irrelevante ya que aqui controlo o deberia de contrllar las pedidas con el conttrollers 

//A probar un new para ver si puede ser por ahi el error                        NOTA: SI FUNCIONO HACER UN NEW AL CLASS 
const productManager = new ProductManager()



router.get("/", async (req,res)=>{
    try {
        //ya que tenemos instancia la class de controllers, osea el productmanager vamos aver si jala primero con el get y devolver en json ya que no puedo iterar sobre handlebars 
        

        const productos = await productManager.getProducts()
        console.log(productos)
        res.json(productos)
        //A la hora de hacer un GET en postman no me devolvia nada y me mandaba un HTML como un tipo "error" pero cabe recordar que postman se le ocupa hacer un return para que devuelva la respuesta, entonces solo hice un return y ahora si me devolvio la respuesta correctamente 
        return;

    } catch (error) {
        console.log("Hubo un error en router get por  " + error)
    }


    //DESPUES DE HABER ECHO UNA CONFIGURACION MAS DETALLADA Y COMPLETA DEL MODELS DE PRODUCTOS, VOY A CREAR UN POSTPARA VERIFICAR DE FUNCIONE EL addProducts 

    router.post("/", async (req,res)=>{
        const producto = req.body; //Los pedidos del reqq y para tomar datos se hacen fuera del try para que funcione y se haga el pedido de req 
        console.log(producto)
        try{
            //Prtimero que nada debo recuperar el req.body de postman para poder utilizar en el add product y aparte debo buscar el producto con su id, pero como este es para crear un nuevo prodcuto con el req.body deberia ser necesario, seria necesario con id para poder actualiizar ya que estaria creado y se tomaria del params pero de agregar producto nocreo, igualmente tocara pensar en el camino 
            
            console.log(producto)

            const pol = await productManager.addProduct(producto)
            
            return;


        }catch(err){
            console.log("Hubo un error en router post", err)
        }

    })




})

module.exports= router

