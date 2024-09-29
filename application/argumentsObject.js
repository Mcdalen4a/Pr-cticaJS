function sumar() {
    console.log(arguments);
    const valores = [...arguments]
     return valores.reduce ((acumulador, valorActual) => {
        return acumulador + valorActual
    })
}

function clientes (nombre, apellido){
    console.log(arguments)
}

clientes('Juan', 'Perez', '225555555', 'Av 4 al 1500')
console.log (sumar(10, 20, 30, 40, 80));

console.log(Math.max(10, 20, 33, 45, 80, 51));
