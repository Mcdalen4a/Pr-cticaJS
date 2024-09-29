//some con que un solo valor cumpla la condicion 
//regresa true

const palabras = ['tomate', 'año', 'remo', 'tentaculo', 'perro', 'liebre'];

const primerCaso = palabras.some (function (palabra){
    return palabra.length > 6;
})
console.log(primerCaso)


const segundoCaso = palabras.some (function (palabra){
    return palabra[0] === 'b';
})
console.log(segundoCaso)


const tercerCaso = palabras.some ((palabra) => {
    return palabra.includes('mate')
})

console.log(tercerCaso)


const peliculas = [
    {
        tituo : 'Rambo - Acorralado',
        anio : 1982,
    },
    {
        titulo : 'Rambo II - Acorralado parte 2',
        anio : 1985,
        puntos: 7.2,
    },
    {
        titulo : 'Rambo III',
        anio: 1988,
    },
    {
        titulo: 'Rambo IV',
        anio: 2008,
    }, 
    {
        titulo: 'Rambo V - La ultima mision',
        anio : 2019
     },
];

const mejor = peliculas.some((pelicula) => {
    return pelicula.puntos >= 7.2
})

console.log(mejor)