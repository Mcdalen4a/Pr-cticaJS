// reduce ejecuta una funcion por cada elemento 
//del array para que resulte en un unico valor
//[2,3,4,6,2].reduce((acumulador, valorActual) =>
//(acumulador + valorActual));
//total = total + x

console.log ([2,3,4,6,2].reduce((acumulador, valorActual) =>
(acumulador + valorActual)));

const numeros = [13,18,12,11,10,22,33];
const numMayor = numeros.reduce((mayor, valorActual) => {
    if (valorActual > mayor) return valorActual;
    return Math.max(mayor, valorActual);
}, 13);

console.log (numMayor)
//Mayor - ACUMULADOR 

const numMenor = numeros.reduce ((mayor, valorActual) =>{
    return Math.min(mayor,valorActual)
})

console.log(numMenor)