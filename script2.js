//array de ingredientes
const ingredientes = [
  "Carne",
  "Pescado",
  "Pollo",
  "Queso",
  "Muzzarella",
  "Harina",
  "Levadura",
  "Huevos",
  "Zapallito",
  "Berenjena",
  "Tomillo",
  "Perejil",
  "Genjibre",
  "Morrón",
  "Zanahoria",
  "Lechuga",
  "Tomate",
  "Zapallo",
  "Acelga",
  "Cebolla",
  "Ajo",
  "Papa",
  "Orégano",
];

//array de objetos receta
const recetas = [
  {
    nombre: "Carne al horno",
    ingredientes: ["Carne", "Papa", "Orégano"],
    pasos: ["Se limpia bien la cola de cuadril tratando de no dejar ningún resto de grasa.", "Mecharla con la provenzal hecha del ajo y el perejil bien picado y colocala en una placa para horno moderado a fuerte con un poco de aceite, sal y pimienta.", "Cuando la carne comienza a tomar color se la da vuelta y se colocan las papas trozadas medianas en la placa y se lleva nuevamente al horno.", "Las verduras varias se pueden agregarse a la provenzal finamente picados.", "Se sirve cuando las papas estén blandas y la carne bien cocida."]
  },
  {
    nombre: "Ensalda Caesar",
    ingredientes: ["Pollo", "Lechuga", "Queso", "Pan"],
    pasos: ["Cortamos en cubos la pechuga, salpimentamos y la cocinamos a la plancha, reservamos.", "Lavamos la lechuga, podés utilizar la variedad que te guste, pero si querés hacer la más típica usa lechuga romana.", "La secamos y picamos finamente.", "Ponemos en la fuente o plato la lechuga, encima la pechuga, unos trocitos de pan y otros trocitos de queso parmesano.", "Incorporamos un poco de salsa caesar (comprada o hecha en casa), mezclamos y rallamos por encima más queso."]
  },
  {
    nombre: "Merluza con papas",
    ingredientes: ["Papas", "Pescado", "Cebolla", "Orégano" ,"Crema"],
    pasos: ["Precalentar el horno a 200ºC y engrasar una fuente con un poco de aceite.", "Lavar y pelar las patatas. Cortar en rodajas finitas, de menos de medio centímetro de grosor. Lo mismo con la cebolla.", "Cortar la merluza en al tamaño que te guste.", "Cubrir el fondo de la fuente con una capa de patatas.", "Salpimentar y distribuir encima 3/4 de la cebolla. Colocar la merluza, salpimentar y cubrir con el resto de la cebolla.", "Terminar con una capa de patatas.", "Cubrir con la crema colocar y en la parte baja del horno.", "Hornear durante unos 55-60 minutos, bajando la temperatura a 180º C pasados 10 minutos.", "Servir con un golpe más de pimienta negra recién molida y perejil fresco picado."]
  },
];


function buscarRecetaNombre(valor) {
  return recetas.filter(
    (f) => f.nombre.toLowerCase().search(valor.toLowerCase()) !== -1
  );
}


//Funcion que busca si alguna o algunas de las recetas cumple con el ingrediente indicado
function buscarRecetaIngrediente(valor) {
  return recetas.filter((receta) => {
    return receta.ingredientes.some(
      (ingrediente) => ingrediente.search(valor) != -1
    );
  });
}

//Funcion para armar el listado de ingredientes disponibles
function comenzarBusqueda() {
  console.log("comenzar busqueda");
  document.getElementById("busqueda").style.display = "flex";
  const divIngredientes = document.getElementById("ingredientes");

  const htmlIngredientes = ingredientes.map((ingrediente) => {
    return `<div class="ingrediente_boton">
      <img height="45" src="media/ingredientes/${ingrediente}.png" />
      <button class="btn-ingrediente">${ingrediente}</button>
    </div>`;
  });

  divIngredientes.innerHTML = htmlIngredientes.join("");
}

//Funcion para mostrar en pantalla las recetas que se encuentren
function renderRecetas(recetas) {
  const html = recetas.map((receta) => {
    const ingredientes = receta.ingredientes
      .map((ingrediente) => `<li>${ingrediente}</li>`)
      .join("");

    const pasos = receta.pasos
      .map((paso) => `<li>${paso}</li>`)
      .join("");
    //traigo del storage si las recetas ya estan en favs
    const fav = localStorage.getItem(receta.nombre);
    //pregunto si estan en el storage
    const iconoFav = fav ? '💖' : '🖤' ;

    return `<div class="receta">
        <div class="encabezado_receta">
        <h1 "class=receta_titulo">${receta.nombre}</h1>
        <button class="btn-fav" data-receta=${receta.nombre}>${iconoFav}</button></div>
        <h3 class="receta_subtitulo">Ingredientes:</h3>
        <h5 class="receta_subtitulo2">Para 2 personas</h5>
        <ul class="ingredientes">
          ${ingredientes}
        </ul>
        <h3 class="receta_subtitulo">Preparación:</h3>
        <ol class="pasos">
          ${pasos}
        </ol>
    </div>`;
  });

  console.log('html', html);

  $("#resultados").html(html);
}

// Funcion que realiza la busqueda de las recetas
function botonBusqueda(event) {
  const ingrediente = event.target.innerText;

  console.log("botonBusqueda", ingrediente);

  const recetas = buscarRecetaIngrediente(ingrediente);

  console.log("recetas encontradas", recetas);

  renderRecetas(recetas);
}


//funcion que le da la funcionalidad a los botones creados
function binds() {
  $("#comenzar2").click(comenzarBusqueda);

  $("#busqueda").on("click", ".btn-ingrediente", (event) => {
    botonBusqueda(event);
  });
  // Cambio dinamico del icono de favorito y no favorito
  $("#busqueda").on("click", ".btn-fav", (event) => {
    const receta = $(event.target).data('receta');
    console.log('receta',receta);
    const fav = localStorage.getItem(receta);

    if (fav) {
      localStorage.removeItem(receta);
      $(event.target).text('🖤')

    } else{
      localStorage.setItem(receta, '1');
      $(event.target).text('💖')

    }
 
  });
}

function main() {
  binds();
}

main();
