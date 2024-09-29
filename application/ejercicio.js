const miArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
    [10, 22, 33, 44]
];

let sumaTotal = 0;

for (let i = 0; i < miArray.length; i++) {
    for (let j = 0; j < miArray[i].length; j++) {
        sumaTotal += miArray[i][j];
    }
}

console.log(sumaTotal);  // Imprimirá la suma total de todos los elementos del array


const miArray2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
    [10, 22, 33, 44]
];

for (let i = 0; i < miArray.length; i++) {
    const sumaSubarray = miArray[i].reduce((acumulador, elemento) => acumulador + elemento, 0);
    console.log(`La suma del array ${i + 1} es: ${sumaSubarray}`);
}

//--------------------------------------------------------------------------------------------------------------------------------
const miArray3 = [
    [1,2,3],
    [4,5,6],
    [7,8],
    [10,22,33,44]
];

for (let i = 0; i < miArray.length; i++) { 
    let sumaSubarray = 0;
    for(let j = 0; j < miArray[i].length; j++){
        sumaSubarray += miArray[i][j];
    }

    console.log(`La suma del array ${i + 1} es: ${sumaSubarray}`)

}

