function contieneTodas(cadenaDeTexto) {

const alfabeto = 'abcdefjhijklmnopqrstuvwxyz'
const letrasEncontradas = new Set(cadenaDeTexto.toLowerCase().split(''));

const faltaLetra = [...alfabeto].filter(letra => !letrasEncontradas.has(letra))

if (cadenaDeTexto !== alfabeto){
    console.log(`falso, falta la letra ${faltaLetra}`)
    return false
         }else{
             return true;
        }
}


const cadenaDeTexto = 'abcdefghijklmnopqrstuwz'
console.log(contieneTodas(cadenaDeTexto));


//------------------------------------------------------------------------------------------

function check(cadena){
    const letras = 'abcdefghijklmnopqrstuvwxyz';
    for (let caracter of letras){
        console.log(caracter);
        if(cadena.indexOf(caracter) === -1){
            return false;
        }
    }
    return true
}

console.log(check('abcdefghijklmnopqrstuvwxz'))





 
