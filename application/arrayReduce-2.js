const votos = ['yes', 'yes', 'blanco', 'no', 'yes', 'no', 'no', 'yes'];

const resultados = votos.reduce ((total, porCadaVoto) => {
    if (total[porCadaVoto]){
        total[porCadaVoto]++;
    }
    else {
        total[porCadaVoto] = 1;
    }
    return total;
}, {});
console.log(resultados)

//{}
// yes: 2 no : 1

const votos2 = ['candidatoA', 'candidatoB', 'candidatoA', 'candidatoC', 'candidatoB', 'candidatoA'];

const resultados2 = votos.reduce((total, porCadaVoto) => {
    total[porCadaVoto] = (total[porCadaVoto] || 0) + 1;
    return total;
}, {});

console.log(resultados2);


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

const grupoPeliculas = peliculas.reduce((grupos, cadaPeliculas) => {
    const puntos = Math.floor(cadaPeliculas.puntos);
    if (!grupos[puntos]) {
        grupos[puntos] = [];
    }
    grupos[puntos].push(cadaPeliculas); 
    return grupos;
}, {});

console.log(grupoPeliculas);

