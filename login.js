usuarios = [
    {
        nombre: "sebastian",
        password: "casino176",
    },
    {
        nombre: "brian",
        password: "Brian15",
    },
    {
        nombre: "romina",
        password: "osovioleta60",
    }
];

function login (nombre, password) {
    const usuario  = usuarios.find(usuario => usuario.nombre === nombre && usuario.password === password);

    if (usuario) {
        localStorage.setItem(usuario.nombre, "1");
        alert("Sesión Iniciada, bienvenido/a");
    }else{
        alert("Datos erróneos");
    }
};

$('#btn-login').click(event => {
    //guardo en variables los datos del form
    let nombre = document.getElementById('nombre').value;
    let password = document.getElementById('password').value;
    console.log("nombre", nombre);
    console.log("password", password);
    //logueo
    if (localStorage.getItem(nombre)){ 
        alert("Ya estás logueado/a");        
    }else{
        login(nombre, password);
    }
});

