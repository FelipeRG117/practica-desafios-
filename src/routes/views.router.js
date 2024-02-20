const express= require("express")
const router = express.Router();


const arrayProductos = [
    {name: "PO",
    titulo: "guerrero dragon",
    age : 2000,},
    {name: "Tigresa",
    titulo: "esposa del guerrero dragon",
    age : 20,},
    {name: "grulla",
    titulo: "Maestro marcial",
    age : 4000,}
]

//Rutas handlebars //cambiar de app a router 
router.get("/pantilla", (req,res)=>{
    const usuario = {
        name: "Julio",
        apellido: "Ramizo",
        mayorEdad: false
    }

    res.render("index", {titulo: "MI PAGINA", usuario, arrayProductos})
})

//recuerda que si tienes hacer una pedida con CRUD, tienes que levantar un 
/* express router y este mismo hacer la tipo de configuracion para la pedida 
que piensas hacer */


/* Numero de intentos: quien sabe, ya fueron unos cuantos muchos

const valores = {};
                      
document.getElementById("envio").addEventListener("click", ()=>{

    const valores = {
        name: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        contraseña: document.getElementById("contraseña").value,

    }

})

router.get("/user", (req,res)=>{
    res.render("register", valores)
}) */


router.get("/chat", (req,res)=>{
 
    res.render("chat")
})


router.get("/user", (req,res)=>{
    res.render("register")
})
/* 
router.post("/user", (req,res)=>{
    document.getElementById("envio").addEventListener("click", ()=>{
        formulario()
        
        })
        
        const formulario =()=>{
            const usuario = {
                nombre: document.getElementById("nombre").value,
                correo: document.getElementById("correo").value,
                contraseña: document.getElementById("correo").value,
            
            }
        
        }

        res.render("register", {usuario})
})  

Lo que intestate hacer ahi fue echo para realizar en socket, no en handlebars 


recuerda que hanldebars sirve para poner informacion dinamica 
o iterar sobre arrays

no para renderizar funciones como emit 

*/









module.exports = router;


