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

/* Sino reconoce el io como funcion probablemente el cdn o algo esta mal */






const usuario = {} 


document.getElementById("envio").addEventListener("click", ()=>{
    const usuario = {
        //asignamos claves valor del formulario realizado 
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        contraseña: document.getElementById("contraseña").value,
    }


})



router.get("/user", (req,res)=>{


    res.render("register")
})


