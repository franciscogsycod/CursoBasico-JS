// Recorriendo Arrays con .find(), .forEach() y .some()

var articulos = [
    { nombre : "bici", costo: 3000 },
    { nombre : "tele", costo: 6000},
    { nombre : "libro", costo: 320},
    { nombre : "celular", costo: 10000},
    { nombre : "laptop", costo: 12000},
    { nombre : "teclado", costo: 500},
    { nombre : "audifonos", costo: 1700},
];

// Metodo Find

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "celular";
});

// Metodo foEach

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
})

// Metodo Some

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});