//SPREAD
//En un array- Crea un nuevo array usando existentes

const nombres = ['jose', 'Cristian', 'Luis', 'Pedro'];
const apellidos = ['Perez', 'Solis', 'Castell', 'Zarate'];
const apodos = ['chui', 'oso', 'tito', 'tano'];

const copiaApodos = [...apodos];
console.log(copiaApodos);

console.log(copiaApodos === apodos);

const array = nombres.concat(apellidos);
console.log(array);

const nuevoArray = ['mark', ...nombres, ...apellidos, ...apodos];
console.log(nuevoArray);

let cadena = 'Marcos';
const caracter = cadena.split('');
console.log(caracter);

const caracter2 = ['nombre y apellido', ...cadena, ...'castelli', 'nombre y apellido'];
console.log(caracter2);

