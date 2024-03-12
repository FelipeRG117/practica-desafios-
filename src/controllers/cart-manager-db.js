//Aqui vamos a estar requisiriendo los mdelos creados con mongoDB y creado una class con funcinoes para eliminacion actualizacion etc
//AAAAAAA ya despues de crear el model de carrito amos a crear el controllers de caritoooo 
//primero importamos el model para poder interacruar conn  el modelo 

const cartsModel = require("../models/carrito-model.js")
//primero vamos a ahcer una pedida con find para ver que todo funcione
//pero antes que anda a imporrar express router paa pdoer utilizarlo en app 
/* const express = require("express")
const router = express.Router 
 */
//PERO esto es controllers y se maneja con clases y no con rutas como en routes 

class cartsManager {//aqui no se pone el async 

    //recibe por parametros el id entonces utilizamos el id dentro de params 
    async getCarritoById(lid) {
        //una vez tenido el id, vamos a tener que hacer una funcion directamente de traer por ID
        //hacemos un try catch antes de nada 
        try {
            // creamos la fucnion de traer por id y hacemos el filtrado
            //no se te olvide que para encontrar el id se ocupa meter objeto dentro de parametros y el _id: 
            const carrito = await cartsModel.findById(lid)
            if (!carrito) {
                console.log("No hay carrito econ ese Id")
                return null;
            }
            console.log(carrito)
            return carrito;

        } catch (err) {
            console.log("Se produjo un error a la hora de traer carrito por ID", err)
        }
    }


    //Bueno YA JALO ESTA MADRE A PONERSE A PENSAR COMO HACER LAS OTRAS FUNCIONES DE CONTROLLERS PARA CREAR CARRITO Y  PRODUCTO DENTRO DE CARRITO, Ya jalo traerse todos los carritos y tambien por Id de carrito 





    async addProductInCart(lid, product) {
        //vamos a crear la logica para agregar un producto dentro de carrito, que voy a necesitar? perimero que nada, recibir dos parametros, uno de elos contendra el Id del carrito a buscar para agregar y el otro del objeto a pasar, hay que tener en cuenta como es modelo de los prductos dentro del array de products, y tambien hay que tenre en cuenta que hay que pushear en carrito_encontrado_porId.products.push() y dentro tentra del push tendra  lo recibido de parametros y luego se realizara un save()
        try{
            //lid sera el id que se recuperara de la URL dinamica, por ende debo buscar por Id el carrito y tarerlo para poder interactuar y meter los productos dentro de su array 
            const cart = await cartsModel.findById(lid)
            console.log(lid)
            console.log(cart)
            //una vez que tenago el carrito debo acceder a su propiedad products para ahcer un push a su array del contenido del req.bbody que es products o un product
            //primero voy a meterl y hacer que se meta y luegpo hare las fucniones poara el quantity se sume depedneidno de las cantidaddes del producto
            
            const products = cart.products.push(product)
            //products es Ahora carrito con lo recibido por parametro pusheado dentro del products


            if(!products){
                console.log("Esto es en el error de filtrad de InCart" + products)
                return null;
            }
           await cart.save()//products contiene al carrito del id con lo obtenido del req.body en su interior 
            return cart; 


        }catch(err){
            console.log("Hubo un error al tratar de agregar producto en carrito ", err)
        }
    }
    //primero cvamos a ver como crear carrito a mi manera, primero que nada al final es un doc que contiene una clave y con valor de array, asi que dentro de ese array van los productos pero el carrito no es mas que un objeto con clave y de valor array asi que, Como creamos esto como funcion ?

    async crearCarrito(Cart) {
        //de acuerdo siguiendo la logica, tengo que impottar como minimo aqui el model para guardar el array dentro del model/coleccion con .save()  pero quen voy a guardar aqui y como utilizar el model para crear un nuevo doc con clave y valor array ? 

        //vamos primero ahacer una tarzanada para evr si resulta o se acerca al objetivo que buscamos 
        try {
            //vamos a guardar en un save un objeto con clave product y valor array, asi de  pelada 
            /*  const cart = await cartsModel.save({"producto": []})
             console.log(cart)
             return cart; PERO SE ME OLVIDO EL PEQUEÑO DETALLE QUE LOS POST SE HACEN DESDE POSTMAN TOMANDO EL REQ.BODY Y PASARLO POR LA FUNCION COMO PARAMETRO, Y LO QUE VA A TOMAR DEL RE.BODY VA A AHCER LIT LO QUE TRATE DE HACER AQUI PERO DE AQUEL LADO Y BIEN EN ORDEN */

         /*    const cart = await cartsModel.save(Cart) Se me olbido de que si quiero hacer una agregacion amongoDb primero debo ahcerle un new para poder meter mi contenido en base al modelo*/

         const CartModel = new cartsModel(Cart)
         const cart = await CartModel.save()

            if (!cart) {
                console.log(cart)
                return null;
            }
            console.log(cart)
            return cart;


        } catch (err) {
            console.log("Hubo un error a la hora de crear carrito", err)
        }

    }

    //de esta manera creamos una funcion dentro de una classm 
    async getCarts() {
        //usamos el await en caso de que interactuemos con el model que hace los pedidos externos 
        try {
            const carritos = await cartsModel.find()
            console.log(carritos);

            return carritos;
        } catch (err) {
            console.log("se produjo un error en getCarritos ", err)
        }
    }

}

//exposrtamos de una vez para poder usar el router y conectarlo de una 
module.exports = cartsManager

