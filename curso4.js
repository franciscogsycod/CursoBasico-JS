// Hoisting

// Primero inicializo y declaro la variable
var miNombre;
miNombre = "Francisco";


//Se manda a llamar a la función, cuyos valores de entrada son undefined
kasakh();


//Se declara la función y se asignan las acividades de esa función
function kasakh(){
    console.log("Hola " + miNombre);
}