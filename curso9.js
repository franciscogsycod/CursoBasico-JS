// Loops: For y ForOf

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`);
}

for(var i=0; i<estudiantes.length; i++){
    saludarEstudiantes(estudantes[i]);
}

// o utilizar
/*
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}
*/