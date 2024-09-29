//find retorna el valor del primer elemento del array que satisface el 
//pedido de la funcion, osea funciona regresando el primer valor que sea
//true se detiene


const animales = ['gato', 'perro', 'el zorro', 'puma', 'tapir', ' zorro'];

const resultado = animales.find((animal) => {
    return animal.indexOf('el') === 0;
});

console.log(resultado);

const nuevoArray = animales.map((animal) => {
    return animal.toUpperCase();
});

console.log(animales);
console.log(nuevoArray);

const peliculas = [
    {
        tituo : 'Rambo - Acorralado',
        anio : 1982,
    },
    {
        titulo : 'Rambo II - Acorralado parte 2',
        anio : 1985
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

const ultimasPeliculas = peliculas.find((objeto) => {
    return objeto.anio >= 2010
});

console.log (ultimasPeliculas);

//find solo me devuelve la primera coincidencia, buscamos un dato unico
