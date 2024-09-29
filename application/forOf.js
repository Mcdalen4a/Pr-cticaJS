let cadena = 'Hola Mundo';
const miArray = ['gato', ' perro', 'canario', 'loro', 'tarantula'];

for(let elemento of cadena){
    console.log(elemento);
}


const miArray2 = [
    [1,2,3],
    [4,5,6],
    [7,8],
    [5,5,5,5]
];

for (let fila of miArray2){
    let suma = 0;
    for (let numero of fila){
        suma+= numero;
    }
    console.log (suma);
}

