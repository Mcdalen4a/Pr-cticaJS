let cadena1 = "28";
let cadena2 = "28.33";
let cadena3 = "28 dias tiene febrero";
let cadena4 = "28*3";
let cadena5 = "Marcos tiene 50";
let cadena6 = "$50";

//parseInt se usa para convertir en ENTERO
let resultado = parseInt (cadena1.slice(1));
console.log (resultado);
console.log (typeof resultado);

// parseFloat se usa para convertir en Numero de punto flotante o con decimales
let resultado2 = parseFloat (cadena3.slice(1));
console.log (resultado2);
console.log (typeof resultado2);