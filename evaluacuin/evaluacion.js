let estudiantes = [
    {
        nombre: "Lucas",
        edad: 23,
        carrera: "Economía",
        semestre: 7,
        promedio: 3.7
    },
    {
        nombre: "Sofia",
        edad: 18,
        carrera: "Psicología",
        semestre: 1,
        promedio: 4.1
    },
    {
        nombre: "Carlos",
        edad: 25,
        carrera: "Administración",
        semestre: 8,
        promedio: 3.9
    },
    {
        nombre: "Laura",
        edad: 20,
        carrera: "Diseño Gráfico",
        semestre: 4,
        promedio: 4.3
    }
];

function agregarEstudiante(estudiante) {
    estudiantes.push(estudiante);
}

function buscarEstudiante(nombre) {
    return estudiantes.find(estudiante => estudiante.nombre === nombre);
}

function eliminarEstudiante(nombre) {
    let index = estudiantes.findIndex(estudiante => estudiante.nombre === nombre);
    if (index !== -1) {
        estudiantes.splice(index, 1);
    }
}

function actualizarEstudiante(nombre, estudianteActualizado) {
    let index = estudiantes.findIndex(estudiante => estudiante.nombre === nombre);
    if (index !== -1) {
        estudiantes[index] = estudianteActualizado;
    }
}

console.log(estudiantes);

agregarEstudiante({
    nombre: "Miguel",
    edad: 21,
    carrera: "Ingeniería",
    semestre: 5,
    promedio: 3.8
});

console.log(buscarEstudiante("Sofia"));

eliminarEstudiante("Carlos");

actualizarEstudiante("Laura", {
    nombre: "Laura",
    edad: 20,
    carrera: "Diseño Gráfico",
    semestre: 4,
    promedio: 4.5
});

console.log(estudiantes);