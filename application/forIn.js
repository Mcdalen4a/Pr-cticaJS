const ticket02 = {
    sal : 33,
    fosforos: 12,
    yerba: 45,
    azucar : 55,
    pan : 15
}

for (let llave in ticket02){
    console.log(ticket02[llave])
}


const miArray = ['YERBA', 'AZUCAR', 'SAL'];
    for (let indice in miArray){
        console.log(miArray[indice]) //NO RECOMENDADO PARA LOS ARRAYS, MEJOR USAR FOR OF
    }