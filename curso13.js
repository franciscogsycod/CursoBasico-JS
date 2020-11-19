// Metodos de recorridos de arrays

var articulos = [
    { nombre : "bici", costo: 3000 },
    { nombre : "tele", costo: 6000},
    { nombre : "libro", costo: 320},
    { nombre : "celular", costo: 10000},
    { nombre : "laptop", costo: 12000},
    { nombre : "teclado", costo: 500},
    { nombre : "audifonos", costo: 1700},
];

// Filtro que genera el nuevo array

var articulosFiltrados = articulos.filter(function(articulo) {
    return articulo.costo <= 500;
});

// Metodo de map, para mapear ciertos articulos

var articulosNombre = articulos.map(function(articulo){
    return articulo.nombre
})

var articulosCosto = articulos.map(function(articulo){
    return articulo.costo
})