const cliente01 = ['Juan', 'Perez', 'Perez', 'Av 3 1500', 'Villa gesell', '(2255)45-0358']
const nombre1 = cliente01[0]
const apellido1 = cliente01[1]

console.log(nombre1 + ' ' + apellido1)

const [nombre, ...otrosDatos] = cliente01;

console.log(nombre1, apellido1, otrosDatos)



