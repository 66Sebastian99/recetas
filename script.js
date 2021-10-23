//Constructor del objeto Receta
class Receta{

    constructor(nombre, vegetal_01, animal_01, especia01){

        this.nombre = nombre;
        this.vegetal_01 = vegetal_01;
        this.animal_01 = animal_01;
        this.especia01 = especia01;
    }
}

/// Recetario incial "hardcodeado"

let recetario = [
    {   
        id: 1,
        nombre: "Carne al horno",
        vegetal_01:"Papa", 
        animal_01:"Vaca", 
        img: "/media/carne_con_papas.jpg",
        pasos:
            "1: Se limpia bien la cola de cuadril tratando de no dejar ningún resto de grasa. 2: Mecharla con la provenzal hecha del ajo y el perejil bien picado y colocala en una placa para horno moderado a fuerte con un poco de aceite, sal y pimienta. 3: Cuando la carne comienza a tomar color se la da vuelta y se colocan las papas trozadas medianas en la placa y se lleva nuevamente al horno. 4. Las verduras varias se pueden agregarse a la provenzal finamente picados. 5. Se sirve cuando las papas estén blandas y la carne bien cocida."
    },
    {
        id: 2,
        nombre: "Ensalada Caesar",
        vegetal_01:"Lechuga",
        animal_01:"Pollo",
        img: "/media/ensalda_cesar",
        pasos: 
            "1: Cortamos en cubos la pechuga, salpimentamos y la cocinamos a la plancha, reservamos. 2: Lavamos la lechuga, podés utilizar la variedad que te guste, pero si querés hacer la más típica usa lechuga romana. 3: La secamos y picamos finamente. 4: Ponemos en la fuente o plato la lechuga, encima la pechuga, unos trocitos de pan y otros trocitos de queso parmesano. 5: Incorporamos un poco de salsa caesar (comprada o hecha en casa), mezclamos y rallamos por encima más queso."
    },
    {   
        id: 3,
        nombre: "Merluza con papas",
        vegetal_01:"Papa",
        animal_01:"Pescado",
        img: "/media/merluza_papas",
        pasos:"1: Precalentar el horno a 200º C y engrasar una fuente con un poco de aceite. 2: Lavar y pelar las patatas. Cortar en rodajas finitas, de menos de medio centímetro de grosor. Lo mismo con la cebolla. 3: Cortar la merluza en al tamaño que te guste. 4: Cubrir el fondo de la fuente con una capa de patatas. 5: Salpimentar y distribuir encima 3/4 de la cebolla. Colocar la merluza, salpimentar y cubrir con el resto de la cebolla. 6: Terminar con una capa de patatas. 7: Cubrir con la crema colocar en la parte baja del horno. 8: Hornear durante unos 55-60 minutos, bajando la temperatura a 180º C pasados 10 minutos. 9: Servir con un golpe más de pimienta negra recién molida y perejil fresco picado." 
    },
    {
        id: 4,
        nombre: "Zucchini con queso y jamón",
        vegetal_01:"Zucchini",
        animal_01:"Cerdo",
        img: "/media/zucchinjyq",
        pasos:"1: Lavamos bien el zucchini y lo cortarmos en rodajas de medio centímetro de espesor. 2: Lo cocinamos a la plancha hasta que esté dorado por ambas caras. 3: Procuramos que el zucchini cubra todo el fondo de la plancha y luego cubrimos con queso rallado al gusto. 4: Dejamos que el queso comience a fundirse con el calor. 5: Agregamos el jamón muy picado y luego el tomillo fresco, opcional. 6: Servir bien caliente."
    }
]

localStorage.setItem('recetario', JSON.stringify(recetario));

console.log(localStorage.getItem("recetario"));
console.log(JSON.parse(localStorage.getItem("recetario", recetario)));


//Funcion para pedirle los datos de la receta al usuario: crea el objeto y lo pone en el array recetario.

function creaReceta(){

    let nombre = prompt("Ingresá el nombre de la receta");
    let vegetal_01 = prompt("Ingresá el primer ingrediente vegetal");
    let animal_01 = prompt("Ingresá la proteína a animal");
    let pasos = prompt("Ingresá los pasos");

    let nueva_receta = (new Receta (nombre, vegetal_01, animal_01, pasos));

    let recetario = JSON.parse(localStorage.getItem("recetario"));
    recetario.push(nueva_receta);                                  /*push de la nueva carga del usuario al array existente*/

    let recetario_string = JSON.stringify(recetario);
    localStorage.setItem("recetario",recetario_string);             /*Subo al local storage la nueva receta*/
}


// funcion para mostra u ocultar botones de busqueda

function eligecajon (){
    document.getElementById("cajones").style.display = "block";
}

function eligevegetal(){
    document.getElementById("vege_caja").style.display = "block";
}

//Funcion busqueda de recetas


function buscaReceta(event){
    let busqueda = event.target.id;
    let encontradas = recetario.filter(receta => receta.vegetal_01.toLowerCase().includes(busqueda.toLowerCase()));
    encontradas.sort(function compare( a, b ) {
   if ( a.nombre < b.nombre ){
    return -1;
   }
   if ( a.nombre > b.nombre ){
    return 1;
   }
   return 0;
  });
    for (let receta of encontradas){
        alert(receta.nombre);
        document.getElementById("recetadinamica");
        let div = document.createElement('div');
        div.innerHTML = receta.nombre;
        document.body.appendChild(div);
        let 
        
    }
  }

// Funcion para crear, buscar o salir
function main(){
    let opcionValida = false;
    let seleccion;
    do{
        seleccion = prompt("Ingresa 1, 2 o 3 según lo que quieras hacer.\n1. Crear receta.\n2. Buscar Receta. \n3. Salir.");
        if(seleccion >= 1 && seleccion <=3){
            opcionValida =!opcionValida;
        } else{
            alert("La opcion ingresada no es válida.");
        }
    } while (!opcionValida);

    if(seleccion == 1){
        creaReceta();
        alert("Receta cargada con éxito.");
    } else if (seleccion == 2){
        buscaReceta();
    } else{
        alert("Gracias por utilizar (nombre del programa)");
    }
}