const cliente01 = {
    nombre: 'Marcos',
    edad: 33, 
    notas: [] //232323232323
};

if (cliente01.notas.length === 0) {
    console.log('SI');
} else {
    console.log('NO');
}

const cliente02 = cliente01;

if (cliente01 === cliente02) {
    console.log('SI');
}

cliente02.edad = 50;

console.log(cliente02.edad);

const myArray = [1, 2, 3]; // 22222
const mySegundoArray = [1, 2, 3]; // 33333
