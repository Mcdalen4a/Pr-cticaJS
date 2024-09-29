// Función de suma
function suma(x, y) {
    return x + y;
  }
  
  // Función de resta
  function resta(x, y) {
    return x - y;
  }
  
  // Función de multiplicación
  function multiplicacion(x, y) {
    return x * y;
  }
  
  // Función de división
  function division(x, y) {
    return y !== 0 ? x / y : undefined;
  }
  
  // Ejemplo de uso
  let x = 5;
  let y = 2;
  
const misOperaciones = [suma, resta, multiplicacion, division];
for (let cadaFuncion of misOperaciones){
    console.log(cadaFuncion(5, 2))
}

const objetoFunciones ={
    sum: suma,
    res: resta,
    mul: multiplicacion,
    div: division,
}

objetoFunciones.div(5,5)
console.log (division (5,5))