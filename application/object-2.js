const cliente01 = {
    Nombre: 'Marcos',
    Apellido: 'Marknson',
    edad: '50',
    dni: '22333444',
    domicilio: 'Rio negro 427',
    'hola mundo': "saludo" // Usé comillas para representar la clave como cadena
 };
 



 const opinion = {};
 opinion.marcos = "no me gusto";
 opinion.pedro = 'es excelente';
 opinion.juan = 'me aburri';


 
 // OBJECT
 // KEY & VALOR
 const cliente02 = {
     nombre: 'Juan',
     apellido: 'Perez',
     edad: 50,
     dni: '33444555',
     domicilio: 'calle falsa 123',
 };

 cliente02.sobreNombre = 'gato'
 
 cliente01['Le gusta'] = 'comer';
 console.log(cliente01['Le gusta']);
 console.log(cliente02.sobreNombre);
 