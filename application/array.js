// Definición de variables
let cadena = "hola";
let cadena2 = new String('Hola Amigos');

let miArray = [1, 2, true, null, 'hola', 8.56];
let miSegundoArray = new Array(1, 2, true, null, 'hola', 8.56);

// Arrays para los días de la semana
let diaSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

// Acceso y manipulación de los arrays
console.log(diaSemana);
console.log(diaSemana[4]);
console.log(miSegundoArray[1]);

// Añadir elementos a 'diaSemana'
diaSemana[10] = 'Domingo';
diaSemana[1] = 'Sabado';
diaSemana[diaSemana.length] = 'Chaucha';

// Mostrar longitud y contenido de 'diaSemana'
console.log(diaSemana.length);
console.log(diaSemana);
console.log(diaSemana[diaSemana.length - 3]);
console.log(diaSemana);
console.log(diaSemana[0]);
