// Arrays

var frutas = ["Manzana", "Sandía", "Plátano", "Cereza"];
console.log(frutas);

console.log(frutas.length);

// Métodos para mutar el array

var masFrutas = frutas.push("Uvas");

var ultimo = frutas.pop("Uvas");                      // Elimina el ultimo elemento
var ultimo = frutas.pop("Manzana");                   // Elimina el ultimo elemento
var ultimo = frutas.pop("");                          // Elimina el ultimo elemento

var nuevaLongitud = frutas.unshift("Uvas");           // Coloca a la primera posición

var borrarFruta = frutas.shift("Uvas");               // Borra la primera posición
var borrarFruta = frutas.shift("");                   // Borra la primera posición

var posicion = frutas.indexOf("Cereza");              // Devuelve la posición de un objeto o elemento en el array
