

const express = require("express")
const app = express()
const PUERTO = 8080
//Traemos modulo handlebars
const exphbs = require("express-handlebars")//importacion de hanldebars
const viewsRouter= require("./routes/views.router.js")//impotamos views


//Vamo a priobar a importar mongoose por que sale buffering y no lo tengo importado 
const mongoose = require("mongoose")

//Importacion de socket.io paso 2
const socket = require("socket.io")

//2) Se tiene que hacer una referencia del servidor express socket.io paso 3

//Midelware para poder recibir datos JSON 
app.use(express.json())
app.use(express.urlencoded({extended:true}));
//Importamos las routes 
//importo el router de carrito 
const carritoRouter = require("./routes/carritos.router.js")
app.use("/carrito", carritoRouter)

//Hcaemos el requrimiento de products y despues utilizaremos el use para una ruta especifica 



/* Conexion con mongoose y el use de mongoose con algunas rutas */

//MongoDB  rutas
const productsRouter = require("./routes/products.router.js")

app.use("/products", productsRouter)




mongoose.connect("mongodb+srv://FelipeReyes50045:coderhouse@vidar771.pck1zis.mongodb.net/tienda?retryWrites=true&w=majority")
.then(() => console.log('Conexión exitosa a MongoDB'))
.catch((error) => console.error('Error al conectar a MongoDB:', error));
//conexion con moongoose y atlas(Info en la nube )



/* Cierre de el bloque donde estara o utilizado con mongoose */





 //CAPETIÑA PUBLIC 
 app.use(express.static("./src/public"))

//configuramos handlears 
app.engine("handlebars", exphbs.engine())
//Aca estamos configurando el motor de plantillas. le digo a express que cuando encuentre 
//un archivo .handlebars, lo renderice con el motor de plantillas 
app.set("view engine", "handlebars")
//Aca tambien le decimos que elmotor de plantillas a usar es handlebars 
app.set("views" , "./src/views");
//Aca le decimos donde se encuentran los archivos .handlebars 

 
//rutas handlebars views 

app.use("/", viewsRouter)


//Pasos para trabajar con socket.io 
//Descargamos el npm paso 1 



//sE TIENE QUE GUARDAR UNA REFERENCIA DEL SERVIDOR DE EXPRESS 
//El nombre io se le pone por convencion cuando se trabaja con websocket

//AHORA IO VAA HACER REFERENCIA DEL SERVIDOR HACIA EL CLIENTE 

//4) 4TO paso de socket.io mandamos el primer mensaje 


//referencia de servidro para webSocket 
const httpServer = app.listen(PUERTO, ()=>{
    console.log(`Escuchando desde ele puerto ${PUERTO}`);
})




const io = socket(httpServer)

//Dejar la constante io abajo de la referencia de la escucha del server 

//Creamos un array de usaurios para enviarlo al usuario, instanciamos debjao d
//del io y arriba del io.on connection 

const usuarios = [
    {id: 1,
    nombre: "ANCARA ",
    apellido: "Messi"
},
{id: 2,
    nombre: "Gon",
    apellido: "El me hice kk a la pitou"
},
{id: 3,
    nombre: "Killua ",
    apellido: "El Op pero todo un baddass"
},
{id: 4,
    nombre: "El abogao ",
    apellido: "El me tomo unas birrias mientras los morros los secuestraron una banda terrorista "
},
{id: 5,
    nombre: "El sacerdote ",
    apellido: "El me visto de monaguillo pero al final ando bien raro pero vestido cabron y bien fucoboy"
}
]



io.on("connection", (socket)=>{
    console.log("Un cleinte se conecto conmigo")
    //No olvidarnos el nombre del "Evento a escuchar", que tiene que ser el mismo
    //desde el cliente al servidor, si no coincide el nombre del evnt no llega
    socket.on("mensaje", (data)=>{
        console.log(data);
    })
    //ahora recibo la inormacion del cliente

    socket.emit("saludito", "Hola cliente como estas? QUIERES COCAINA?");


    //Enviamos el arrayUsuarios
    socket.emit("Usuarios", usuarios);

   socket.on("formulario", (data)=>{
    console.log(data)
   })
  
                      
   
});
//con on, le metemos connection para emepezar la conexion entre el usuaio y server
//con el msaneje hace aviso de que el cliente se conecto








