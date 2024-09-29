let miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15];
let suma = 0;

 for (i = 0; i < miArray.length; i++){
        suma += miArray[i];
 }

let promedio = suma / miArray.length;

function calcularPromedio(miArray){
    if (promedio === suma/miArray.length){
        return promedio;
    }
}

console.log(promedio)