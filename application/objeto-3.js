const alumno0054 = {
    nombre: 'Marcos',
    apellido: 'Markinson',
    cursa: 'Programacion',
    notas:{
        primerCuat : 8,
        segundoCuat: 8.75,
        tercerCuat: 7
    },
    sobrenombre: 'Oso',
    intereses: [
        'matematicas', 
        'tecnologia', 
        'computacion', 
        'cine'
    ],
    horario: 'turno mañana'
}

let nota1 = alumno0054.notas.primerCuat
let nota2 = alumno0054.notas.segundoCuat
let nota3 = alumno0054.notas.tercerCuat

console.log (alumno0054.notas.segundoCuat)

let promedio = (nota1 + nota2 + nota3) / 3;
console.log(promedio);

console.log(promedio.toFixed(0))

console.log(alumno0054.intereses[2])

const compras = [
    {
        producto: 'avena',
        precio: 130,
        cantidad: 1
    },
    {
        producto: 'sal',
        precio: 52,
        cantidad: 2
    },
    {
        producto: 'pure de tomate',
        precio: 80,
        cantidad: 1
    }
];

console.log(compras[1].precio);


