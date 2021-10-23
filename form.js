//Declaramos la url que vamos a usar para el GET
const URLPOST   = "https://jsonplaceholder.typicode.com/posts"


//Declaramos la información a enviar
const infoPost =  { 
    nombre: document.getElementById("nombre").value,
    email: document.getElementById("email").value,
    celu: document.getElementById("celu").value,
    mensaje: document.getElementById("mensaje").value,
  }

  console.log(infoPost)

//Boton enviar en el html buscado mediante el ID
$("#contact-submit").click(() => { 
    $.post(URLPOST, infoPost ,(respuesta, estado) => {
        if(estado === "success"){
            $("body").append(`<div>
Guardado:${respuesta.nombre}
</div>`);
        }  
    });
});