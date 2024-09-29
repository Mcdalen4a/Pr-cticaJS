let j = 0

while(j <= 5){
    console.log(j);
    j++
}


const numeroSecreto = Math.floor(Math.random()*10);
console.log(numeroSecreto)

let maquina = Math.floor(Math.random()*10);

let intentos = 1;
while(numeroSecreto != maquina){
    console.log(`${numeroSecreto} contra ${maquina} `);
    maquina = Math.floor(Math.random()*10);
    intentos++;
}

console.log(`${numeroSecreto} contra ${maquina} `)
console.log('lo encontramos en el intento ' + intentos);