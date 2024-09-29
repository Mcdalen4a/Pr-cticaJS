/* 
push
pop 
Unshift
Shift
*/

let frutas = ['Pera', 'Banana'];

console.log(frutas);
let largo = frutas.push('Manzana','Melon','Frutilla','Mango');
console.log(frutas);
console.log (largo);
let respuestaPop = frutas.pop(); 
console.log(frutas);
console.log(respuestaPop);
console.log (frutas.length);
frutas.pop();
frutas.pop();
frutas.pop();
//------------------------------------------------------------------------------
let frutas1 = console.log(frutas);
let dato = frutas.unshift('Manzana','Frutilla');
console.log(dato);
console.log(frutas);
let dato1 = frutas.shift();
console.log(dato1);
console.log(frutas);

