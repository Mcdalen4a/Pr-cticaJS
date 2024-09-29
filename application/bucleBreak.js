
/* for (let i = 0; i <= 5; i++){
    console.log(i)
    if (i===3) break;
}
*/






const numeroSecreto = Math.floor(Math.random()*10);
console.log(numeroSecreto)

let maquina = Math.floor(Math.random()*10);

let intentos = 1;

while(true){
    if(numeroSecreto === maquina) break;
    console.log(`${numeroSecreto} contra ${maquina} `);
    maquina = Math.floor(Math.random()*10);
    intentos++;
}

console.log(`${numeroSecreto} contra ${maquina} `)
console.log('lo encontramos en el intento ' + intentos);

