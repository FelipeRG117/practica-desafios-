console.log("ESTE ES UN MENSJE DESDE EL MAIN LOKOOOOOOOO");

/* Generamos la instancia de socket.io, ahora desde el lado del cliente */
const socket = io();

/* Con esta referencia al metodo io que esta de echo en la app,
creamos la referencia para que el cleinte y servidor esten conectados */

/* cuando yo quiero comenzar con la conexion y voy a enviar un mensaje al server
puedo hacer lo siguiente */

socket.emit("mensaje", "Hola mundo te escribo desde el cliente!");
/* Envio mensaje al servidor */


socket.on("saludito", (data)=>{
    console.log("El servidor dice: ", data)
});
/*con esto escucho el evento*/

/* recibimos el array de usuarios */
socket.on("Usuarios", (data)=>{
    console.log("Estos son los usuarios: ", data);
    const listaUsuarios = document.getElementById("lista-usuarios");

    listaUsuarios.innerHTML = "";
    data.forEach(usuario =>{
        listaUsuarios.innerHTML += `<li>${usuario.nombre} - ${usuario.apellido}</li>`
    })

});

//1ER PASO

//Entonces emit se debe encargar de emitir el mensaje  escrito 
//debo crear una funcion que tome los valores que se escribieron en el 
//input Y PASARSELOS AL EMIT (Router unicamente se encargara de renderizar el archivo
// chat y main se encargara de la logica)


/* Hay de dos
O creo un objeto el cual tendra los valores del input y pasarselos directamente al 
app y hacer la configuracion en app para crear el chat

O recibir el mensaje y modficiarlos aqui mismo pero esta medio limitado(O simplemenete 
no es la manera de efectuar con mayor limpieza la tarea)*/


/* Por lo que e visto en los ejemplos, es mejor enviar la informacion vanilla sin 
nodificaciones y ya una vez recibida hacer las configuraciones para poner el mensaje 
transmitido ¿Porque? necesito recibirloy volvver a setear el input y poner el mensaje 
debajo del input, asi que tendre que enviar la de mofdificacion y la data sola de nuevo
en cada escucha/envio */



document.getElementById("envioChat").addEventListener("click", ()=>{

    const mensaje = {
        mensaje: document.getElementById("mensaje").value
    }

    console.log(mensaje)
})

socket.emit("Mensaje" )




















/*   Intento numero: quien sabe ya fueron unas cuantas muchas, pero como se obtienen 
los valores del documento si no me lo identifica 


const valores = {};
document.getElementById("envio").addEventListener("click", ()=>{
   
    const valores = {
        name: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        contraseña: document.getElementById("contraseña").value,

    }

})


router.get("/user", (req,res)=>{
    res.render("register")
})
socket.emit("formulario", valores)
 */



/* Sino reconoce el io como funcion probablemente el cdn o algo esta mal */
/* 


const usuario = {} 

document.getElementById("envio").addEventListener("click", ()=>{
    const usuario = {
        //asignamos claves valor del formulario realizado 
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        contraseña: document.getElementById("contraseña").value
    }

socket.emit("formulario", usuario)
})


 */

