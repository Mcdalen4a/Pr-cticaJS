function sumar (...valores) {
    console.log (arguments);

    return valores.reduce ((acumulador,valorActual) => {
        return acumulador + valorActual
    })
}

console.log(sumar(10, 20, 30, 50));

function clientes (nombre, apellido, ...otrosDatos){
    console.log(otrosDatos);
    console.log(nombre)
    console.log(apellido)
}

clientes('Juan', 'Perez', '4445555222', 'Villa Gesell', 'Av 3 2288');

const sumar2 = (...valores) => {
    return valores.reduce((acumulador, valorActual) => {
        return acumulador + valorActual
    })
}

console.log (sumar2 (10,20,45))


const multiplicar = (...valores) => {
    return valores.reduce ((acumulador, valorActual) => {
        return acumulador * valorActual
    })
}

console.log(multiplicar (10,20,45))