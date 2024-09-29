function contarVocales(cadena) {
    const resultado = { a: 0, e: 0, i: 0, o: 0, u: 0 };

    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i].toLowerCase();

        // Verificar si el caracter es una vocal y actualizar el contador correspondiente
        if (resultado.hasOwnProperty(caracter)) {
            resultado[caracter]++;
        }
    }

    return resultado;
}

// Ejemplo de uso:
const resultadoConteo = contarVocales("Hola, cómo estás?");
console.log(resultadoConteo);


//--------------------------------------------------------------------------------



//------------------------------------------------------------------------------

let base = 20;
let altura = 40;
let lado = 10

function calcularArea(triangulo){
    return base * altura
}

function calcularPerimetro(triangulo){
    return lado + lado + lado;
}


let Area = calcularArea()
let Perimetro = calcularPerimetro()

console.log(Area)
console.log(Perimetro)

//-----------------------------------------------

let texto = ('Magdalena')

console.log('hola ' + texto + ' buen día')

//-----------------------------------------------

let numero1 = 10
let numero2 = 10
let numero3 = 20

let media = numero1 + numero2 + numero3 / 3;

console.log(media)

//--------------------------------------------------

function filtrarNumerosPares (miArray){
    return miArray.filter(function(miArray){
        return miArray % 2 == 0;
    });
}

let miArray = [1 , 2 , 3 , 4 , 5 , 6]
let filtrar = filtrarNumerosPares(miArray);

console.log(filtrar);


//--------------------------------------------------

function duplicarNumeros(array){
    return array.map(array => array * 2)
}


let array = [1, 2, 3, 4, 5, 6, 7, 8];
let duplicar = duplicarNumeros(array);

console.log(duplicar)

//---------------------------------------------------
let cadena1 = '20'
let cadena2 = '20,555'

let resultado1 = parseInt(cadena1.replace(' '));
let resultado2 = parseFloat(cadena2);

function sumarNumeros(cadena1, cadena2){
    let resultado1 = parseInt(cadena1.replace(' '));
    let resultado2 = parseFloat(cadena2)

       return cadena1 + cadena2;

}

let suma = sumarNumeros(cadena1, cadena2)

console.log(resultado1)

console.log(resultado2)

console.log(suma)

//------------------------------------------------------------------

function encontrarPosicion(numeros, numero){
    return array.indexOf(numero)
}

let numeros = [1,2,3,4,5]
let numero = 4;

let Posicion = encontrarPosicion(numero, numeros)

console.log(numero)

//------------------------------------------------------------------

function contarVocales(cadena){
    let cuenta = 0
    for(let i = 0; i < cadena.length; i++){
        const caracter = cadena[i].toLowerCase()
        if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
            cuenta++
        }
    }
    return cuenta;
}

let cadena = 'hola como estas'
console.log(cadena.toLowerCase())

let cuentaVocales = contarVocales(cadena)
console.log(cuentaVocales)

//-------------------------------------------------------------------

function calcularPromedio(numeross, decimales){

    let suma = 0
    for (let i = 0; i < numeross.length; i++){
        suma += numeross[i]
    }

    let promedio = suma / numeross.length

    let promedioRedondeado = parseFloat(promedio.toFixed(decimales))

    return promedioRedondeado
}

let numeroEjemplo = [2, 3, 4, 6, 8]
let promedio = calcularPromedio(numeroEjemplo, 2)

console.log(Math.floor(promedio));


//-----------------------------------------------


function buscarElemento(array1, elemento1){
    return array1.indexOf(elemento1)
}

let array1 = [10, 20 ,30]
let elemento1 = 30;

let posicion = buscarElemento(array1, elemento1)
console.log(posicion)

//-----------------------------------------------

function generarNumeroAleatorio(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
}

let numeroAleatorio = (generarNumeroAleatorio(1,10));

console.log(numeroAleatorio)

//-----------------------------------------------

function redondearNumero(decimal, decimales = 0) {
    const factor = 10 ** decimales;
    return Math.round(decimal * factor) / factor;
}

// Ejemplo: redondear un número a 2 decimales
let numeroRedondeado = redondearNumero(3.14159, 2);
console.log(numeroRedondeado);

//-----------------------------------------------

function calcularPotencia(base1, exponente){
    return Math.pow(base1, exponente)
}

let base1 = 2
let exponente1 = 4

let Potencia1 = calcularPotencia(base1, exponente1);

console.log(Potencia1)

//-----------------------------------------------

for (let i = 0; i <= 10; i++){
    if (i %2 == 0){
        console.log(i)
    }else{
        console.log(i)
    }
}

//-----------------------------------------------
let suma2= 0;

for (let k = 1; k <= 10; k++){
    if(k % 2 === 0){
        suma2 += k;
    }
}

console.log(suma2)

//-----------------------------------------------
for (let m = 1; m <= 50; m++){
    if (m % 3 === 0){
        console.log('Fizz')
    } else if (m % 5 === 0){
            console.log('Buzz')
        }else if (m % 5 ===0 && m % 3 === 0){
            console.log('FizzBuzz')
        }
            else{
                console.log(m)
            }
        }
    
//-----------------------------------------------

let objeto = {
        titulo: 'spiderman',
        anio: '2010',
        director: 'Marc Webb'
}

for (let propiedad in objeto){
    console.log(propiedad + ':' + objeto[propiedad])
}










