//Las clases son moldes para la creacion de 
//objetos, me permite crear un monton de 
//objetos similares apoyandome en su molde
//crear una clase

class Persona { 
    constructor(name = 'sin nombre', lastname = 'sin apellido', localidad = 'sin localidad') {
        this._nombre = name;
        this._apellido = lastname;
        this._localidad = localidad;
    }

    // GETTERS
    get nombre() {
        return this._nombre;
    }

    get apellido() {
        return this._apellido;
    }

    get localidad() {
        return this._localidad;
    }

    get damePropiedades() {
        return `Nombre y apellido: ${this._nombre} ${this._apellido} y vivo en ${this._localidad}.`;
    }
}

class Empleado extends Persona { 
    constructor(name, lastname, localidad) {
        super(name, lastname, localidad);
    }
}

class Ejecutivo extends Empleado {
    constructor (name, lastname, localidad, departamento, sueldoBasico, beneficio, obraSocial){
        super(name, lastname, localidad, departamento, sueldoBasico);
        this._beneficio = beneficio;
        this._obraSocial = obraSocial;
    }

    // GETTERS Y SETTERS
    get beneficio() {
        return this._beneficio;
    }

    get obraSocial() {
        return this._obraSocial;
    }

    set beneficio(beneficio) {
        this._beneficio = beneficio;
    }

    set obraSocial(obraSocial) {
        this._obraSocial = obraSocial;
    }
}

class Ejecutivo4 extends Ejecutivo {
    constructor(nombre, apellido, localidad, departamento, sueldoBasico, beneficio, obraSocial, direccion, ciudad){
        super(nombre, apellido, localidad, departamento, sueldoBasico, beneficio, obraSocial);
        this._direccion = direccion;
        this._ciudad = ciudad;
    }

    // GETTERS Y SETTERS
    get direccion(){
        return this._direccion;
    }

    get ciudad(){
        return this._ciudad;
    }

    set direccion(direccion){
        this._direccion = direccion;
    }

    set ciudad(ciudad){
        this._ciudad = ciudad;
    }
}

let ejecutivo01 = new Ejecutivo('Romina', 'Manguel', 'Capital Federal', 'RRHH', '196000', 'Toyota 2022', 'Galeno oro');
let ejecutivo02 = new Ejecutivo('Juan', 'Perez', 'Buenos Aires', 'Marketing', '150000', 'BMW 2023', 'Swiss Medical');
let persona01 = new Persona('Alan', 'Diaz', 'villa gesell');
let empleado01 = new Empleado('Juan', 'Perez', 'Buenos Aires');
let ejecutivo4 = new Ejecutivo4('Ana', 'Luna', 'Buenos Aires', 'RRHH', '200000', 'Beneficio', 'Obra Social', 'Casa 123', 'Chubut');

console.log(persona01);
console.log(empleado01);
empleado01.setLocalidad ='chubut';
console.table(ejecutivo02);
console.log(ejecutivo01);

ejecutivo01.departamento = 'Ventas';
console.table(ejecutivo01);
console.table(ejecutivo4);
