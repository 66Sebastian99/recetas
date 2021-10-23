//Declaramos la url que vamos a usar para el GET
const URLPOST   = "https://jsonplaceholder.typicode.com/posts"

//Boton enviar en el html buscado mediante el ID
$("#contact-submit").click(() => {
    //Declaramos la información a enviar
    const infoPost =  { 
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        celu: document.getElementById("celu").value,
        mensaje: document.getElementById("msj").value,
    }
    $.post(URLPOST, infoPost ,(respuesta, estado) => {
        console.log(estado);
        console.log(respuesta);
        if(estado === "success"){
            $("body").append(
            `<div class="container mensajeEnviado md-col-6">
                <h3 class="tituloConfirma" >Mensaje enviado</h2>
                <ul class="enviadoResumen">
                    <li>Nombre: ${respuesta.nombre}</li>
                    <li>Mail: ${respuesta.email}</li>
                    <li>Celu: ${respuesta.celu}</li>
                    <li class="mensajeResumen">Mensaje: ${respuesta.mensaje}</li>
                </ul>
            </div>`);
        }  
    });
});