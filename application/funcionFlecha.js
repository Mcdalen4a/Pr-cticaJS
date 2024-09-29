let nombre = function (parametros){
   //aaaa
}

const DIAS = 7;
let functionFlecha = () => {
    console.log ('Esto es desde una funcion flecha');
    return 'Flecha Dorada';
}

let recuperarDato = functionFlecha();
console.log (recuperarDato);

console.log ('Esto es una ' + recuperarDato);


//-----------------------------------------------------------------------------------------------------------

const functionSimple = () => console.log ("Esto es posible  porque solo contiene una linea de codigo");
functionSimple ();

//-----------------------------------------------------------------------------------------------------------

const functionEsperaParam = (texto) => console.log (texto);
functionEsperaParam ('Pasamos un argumento a la funcion flecha.');

//------------------------------------------------------------------------------------------------------------

const functionSumar= (dato1, dato2) => dato1 + dato2;
console.log (functionSumar (10,5));

//------------------------------------------------------------------------------------------------------------

const functionRetornaValor = () => "Esto es posible porque tiene una linea de codigo y no es necesario el return.";
console.log (functionRetornaValor());

//-------------------------------------------------------------------------------------------------------------

const regresarObjeto = () => ({nombre: "Juan", apellido: "Perez"});
console.log (regresarObjeto());

