const edades = [1,15,17,13,8];
const sonMenoresEdad = (edad) => edad <= 18;

let resultado = (edades.every(sonMenoresEdad));

console.log (resultado);

let a =[20,33,21,31].every (valor => valor >= 18);
let b =[20,15,21,31].every (valor => valor >= 18);

console.log(b)
//-----------------------------------------------
// Ejemplo de uso de la función every

// Supongamos que tenemos un array de números y queremos verificar si todos son mayores que 5
const numeros = [8, 6, 10, 7, 9];

// Usamos la función every para verificar la condición
const todosMayoresQueCinco = numeros.every(function(numero) {
  return numero > 5;
});

// Imprimimos el resultado
console.log(todosMayoresQueCinco);
