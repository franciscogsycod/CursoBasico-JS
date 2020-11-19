// Loops: while

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`);
}

while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.pop();        // Metodo de mutacion que va sacando
    saludarEstudiantes(estudiante);
}