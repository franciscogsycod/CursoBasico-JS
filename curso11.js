// Objetos

var objeto = {};

var fordFiesta = {
    marca: "Ford",
    modelo: "Fiesta",
    anno: 2011,
    detalleDelFord: function(){                             // Metodo del objeto
        console.log(`Auto ${this.modelo} ${this.anno}`);
    }
};

// Acceder a los objetos

fordFiesta.marca
fordFiesta.anno
fordFiesta.modelo

// Tras la función

fordFiesta.detalleDelFord();

