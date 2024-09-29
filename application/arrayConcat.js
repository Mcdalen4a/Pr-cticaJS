//unir arrays

let numeros = [1,2,3,4];
let frutas = ['anana', 'pera', 'mando'];
let verduras = ['Lechuga', 'acelga', 'zapallo'];
let bebidas = ['Coca', 'pepsi', 'SevenUp']

let sumoArrays = (numeros  + frutas);
console.log (typeof sumoArrays);

console.log (numeros.concat(frutas));
console.log (numeros.concat(numeros));
console.log(frutas);
console.log(numeros);

const misArrays = frutas.concat(numeros, verduras, bebidas);
console.log(misArrays);
