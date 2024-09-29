//Filter permite generar en un nuevo array en 
//base a la funcion y su condicion, evalua true
//or false, cuando el resultado a la condicion sea
//true ese dato pasara a formar el nuevo array
//filtrado

const numeros = [10,13,31,17,107,40];

const numerosPares = numeros.filter ((elemento) => {
    return elemento % 2 === 0;
});

console.log (numerosPares);

const numerosImpares = numeros.filter ((elemento) => {
    return elemento %2 === 1;
});

console.log (numerosImpares);

const mayorTreinta = numeros.filter ((elemento) => {
    return elemento > 30;
})

console.log(mayorTreinta)
console.log(numeros)

const peliculas = [
    {
        titulo : 'Rambo - Acorralado',
        anio : 1982,
        puntos : 6.6,
        genero: ['accion']
    },
    {
        titulo : 'Rambo II - Acorralado parte 2',
        anio : 1985,
        puntos : 5.5,
        genero: ['accion', 'aventuras']
    },
    {
        titulo : 'Rambo III',
        anio: 1988,
        puntos : 4.8,
        genero: ['accion', 'belico']
    },
    {
        titulo: 'Rambo IV',
        anio: 2008,
        puntos : 5.4,
        genero: ['accion']
    }, 
    {
        titulo: 'Rambo V - La ultima mision',
        anio : 2019,
        puntos : 5.5,
        genero: ['accion', 'thriller']
     },
];

const masVotadas = peliculas.filter((objeto) => {
    return objeto.puntos > 5.5
})

console.log (masVotadas);

const accion = peliculas.filter ((obj) => {
    return obj.genero.includes('accion') || obj.genero.includes('thriller');
})

console.log (accion);

const search = 'RAMBO';
const resultado = peliculas.filter ((objetos) => {
    const titulo = objetos.titulo.toLowerCase();
    return titulo.includes(search.toLowerCase())
})

console.log(resultado)
