const numeros = [1,2,3,4,5];

const doble = numeros.map (function(valor){
    return valor * 2;
});

console.log(doble);

const raiz = doble.map(Math.sqrt);
console.log (raiz);



const nuevo =  numeros.map (function (elementos, indices){
    return `${indices} : su valor es: ${elementos}`;
});

console.log(nuevo);