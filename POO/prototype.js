const cadena = ''
const cadena2 = new String()
console.log(cadena2)

String.prototype.saluda = () => console.log('Hola amigos')

const numero = 0
const numero2 = new Number ()
console.log(numero2)

const bool = false
const bool2 = new Boolean()
console.log(bool2)

const array = []
const array2 = new Array(1,2,3)
console.log(array2)
array2.pop()
console.log(array2)
Array.prototype.pop = () => console.log('No elimino nada')
array2.pop()
console.log(array2)

const objeto = {}
const objeto2 = new Object()
console.log(objeto2)

let cadena5 = 'felipe'
cadena5.saluda()


const newArray = [4,5,6]
newArray.pop()
console.log(newArray)