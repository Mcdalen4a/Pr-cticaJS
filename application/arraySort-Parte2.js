const numeros = [100, 2, 8, 10, 11, 1200, 200]
numeros.sort()
console.log(numeros)

const ordenAscendente = numeros.sort ((a,b) => a - b);
console.log(ordenAscendente)

const ordenDescendente = numeros.sort ((a,b) => b - a);
console.log (ordenDescendente)

const peliculas = [
    {
        titulo: 'Rambo - Acorralado',
        anio: 1982,
        puntos: 6.6,
        genero: ['Acción']
    },
    {
        titulo: 'Rambo II - Acorralado parte 2',
        anio: 1985,
        puntos: 7.2,
        genero: ['Acción', 'Aventuras']
    },
    {
        titulo: 'Rambo III',
        anio: 1988,
        puntos: 4.8,
        genero: ['Acción', 'Bélico']
    },
    {
        titulo: 'Rambo IV',
        anio: 2008,
        puntos: 5.4,
        genero: ['Acción']
    }, 
    {
        titulo: 'Rambo V - La última misión',
        anio: 2019,
        puntos: 5.5,
        genero: ['Acción', 'Thriller']
    },
];
const orden = peliculas.sort ((a, b) => b.puntos - a.punto)
console.log(orden);