/*function nombre (parametros, parametros){

   console.log(algo)
   return algo;
}
*/ 

//------------------------------------------------------------------------------------------------------------------------------

function llamarJaime(compra){
    console.log('La compra fue exitosa');
    return compra;
}

let reciboAlgo = llamarJaime("leche");
console.log (reciboAlgo);

//------------------------------------------------------------------------------------------------------------------------------


let hijo = traerDelSuper("pan", 'leche');
console.log(hijo);

function traerDelSuper(producto1, producto2){
        console.log ('La compra fue exitosa');
        return `te compre ${producto1} y tambien ${producto2}`
}

let tio = traerDelSuper ("sal", "vino");

tio = traerDelSuper ("queso", "pan");
console.log (tio);

//----------------------------------------------------------------------------------

let miFuncion = function (producto1, producto2){
    console.log ('La compra fue exitosa');
    return `te compre ${producto1} y tambien ${producto2}`
}

let regresaDato = miFuncion ("pan", "leche");
console.log(regresaDato);