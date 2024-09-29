function DatoAlAzar(array) {
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio];
}

const miArray = [1, 2, 3, 'hola', 5, 6, true, 2, 3];
const aleatorio = DatoAlAzar(miArray);

console.log(aleatorio);



