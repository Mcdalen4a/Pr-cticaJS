const miArray = [4,8,32,31,13,17,24]

const dameResultados = (array) => {
    const max = Math.max(...array)
    const min = Math.min(...array)
    const suma = array.reduce((acumulador,valorActual) => acumulador + valorActual)
    const promedio = suma / array.length;
    return {
        max : max,
        min : min,
        suma : suma,
        promedio : promedio
    }
}

const resultados = dameResultados (miArray)
console.log(resultados)