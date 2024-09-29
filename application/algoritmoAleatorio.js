function mezclar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array);
}

mezclar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const palabras = ['auto', 'moto', 'perro', 'gato', 'tractor'];
[palabras[1], palabras[3]] = [palabras[3], palabras[1]];
console.log(palabras);

