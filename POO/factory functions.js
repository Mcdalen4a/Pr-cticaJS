function calculadora(a, b) {
    const objeto = {};

    objeto.a = a;
    objeto.b = b;

    objeto.sumar = function() {
        const { a, b } = this;
        return a + b;
    }
    objeto.restar = () => a - b;
    objeto.multi = () => a * b;
    objeto.divide = () => a / b;

    return objeto;
}

function Calculador(a, b) {
    this.a = a;
    this.b = b;
}

Calculador.prototype.sumar = function() {
    const { a, b } = this;
    return a + b;
}

Calculador.prototype.restar = function() {
    const { a, b } = this;
    return a - b;
}

const operacion01 = new Calculador(10, 5);
console.log(operacion01);

const operacion02 = new Calculador(35, 7);
console.log(operacion02);

console.log(operacion01.sumar() === operacion02.sumar()); // Devolverá true si las sumas son iguales
console.log('abc'.slice === 'dxv.slice'); // Devolverá false

const cadena = new String('abc');
console.log(cadena);


console.log(operacion01.sumar === operacion02.sumar)