const misAlumnos = ['Juan', 'Romina', 'Cristina', 'Cristian', 'Lucia', 'Ana', 'Alan'];

let cadena = 'Cadena a recorrer';


const misAlumnos2 = [
    {
        nombre: "Juan",
        apellido: "Perez",
        nota : 10,
    },
    {
        nombre: "Pedro",
        apellido: "Montes",
        nota: 8
    },
    {
        nombre: "Cristian",
        apellido: "Alvarez",
        nota: 7
    },
];

let total = 0
for (let i = 0; i < misAlumnos2.length; i++) {
    let estudiante = misAlumnos2[i];
    total += estudiante.nota;
    console.log(`${estudiante.nombre} : ${estudiante.apellido}`);
}

console.log(total/misAlumnos.length);


for (let x = 0; x < cadena.length; x++) {
    console.log(cadena[x]);
}
