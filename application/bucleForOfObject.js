const cliente1 = {
    nombre : 'Juan',
    apellido : 'perez',
    edad : 45,
    domicilio : 'Paseo del rey 1400',
    localidad : 'Capital federal'
}

const llaves = Object.keys(cliente1)
const valores = Object.values(cliente1)


console.log(llaves)
console.log(valores)

let total = 0;
for(let parciales of valores){
    total = total + parciales
}
console.log(total)

for (let elemento of Object.keys(cliente1)){
    console.log(elemento);
}


for (let elemento of Object.values(cliente1)){
    console.log(elemento);
}

for (let elemento of Object.keys(cliente1)){
    console.log(cliente1[elemento]);
}

for (let elemento of Object.keys(cliente1)){
    console.log(`${elemento} : ${cliente1[elemento]}`);
}


