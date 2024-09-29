// bloque: lo que va dentro de las { }
//El "block scope" (ámbito de bloque) se refiere al 
//alcance de una variable definida dentro de un 
//bloque de código. En JavaScript, un bloque de código
// está delimitado por llaves {}. 
//Las variables declaradas con let y const tienen 
//un ámbito de bloque, lo que significa que su alcance 
//está 
//limitado al bloque en el que fueron declaradas.

if (true){
    let nombre = 'Marcos'
    console.log(nombre)
}

const nombre = 'Roberto';
console.log(nombre);

console.log(nombre)

//-----------------------------------------------
function ejemploScope() {
    if (true) {
        let x = 10; // x tiene ámbito de bloque dentro de este if
        console.log(x); // imprime 10
    }

    // La siguiente línea generaría un error porque x no está definida aquí
    // console.log(x); // Error: x is not defined
}

ejemploScope();

//------------------------------------------------
function dameElDoble (array){
    const arrayResultado = [];
    for (let numero of array){
        //bloque
        var parcial = numero * 2
        arrayResultado.push(parcial);
    }
    console.log(parcial)

    return arrayResultado
}

console.log (dameElDoble([1,2,3,4]));