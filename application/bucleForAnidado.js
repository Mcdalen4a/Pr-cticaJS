const miArray = [
    [1,2,3],
    [4,5,6, 'casa', true],
    [7,8,9]
];

miArray[0]


for (let index = 0; index < miArray.length; index++) {
    let fila = miArray[index];
    console.log(miArray[index]);
    for(x = 0; x < fila.length; x++){
        console.log(fila[x]);
    }
}