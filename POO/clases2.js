class Persona {


   static contadorObjetos = 0
   usuario = 'vacio'

    constructor(name = "sin nombre", lastname = "sin apellido", localidad){
        this._nombre = name;
        this._apellido = lastname;
        this._localidad = localidad;
        this._id = ++Persona.contadorObjetos
    }

    dameDatos(){
        return `${this._id}, ${this._nombre}, ${this._apellido}, ${this._localidad}`;
    }

    poli() {
        return this.dameDatos();
    }

    //metodo estatico pertenece a la clase y no al bojeto
    static saludar (objeto){
        return objeto._nombre;
    }

    static get VIDA(){
        return 100
    }

    get getNombre(){
        return this._nombre;
    }

    get getApellido(){
        return this._apellido;
    }

    set setApellido(lastname){
        this._apellido = lastname;
    }

    set setLocalidad(localidad){
        this._localidad = localidad;
    }
}

class Empleado extends Persona {
    constructor(name, lastname, localidad, departamento, sueldoBasico){
        super(name, lastname, localidad);
        this._departamento = departamento;
        this._sueldoBasico = sueldoBasico;
    }

    static contadorObjetos = 0
    usuario = 'vacio';

    dameDatos(){
        return `${super.dameDatos()}, ${this._departamento}, ${this._sueldoBasico}`;
    }

    get getDepartamento(){
        return this._departamento;
    }

    get getSueldoBasico(){
        return this._sueldoBasico;
    }
}


class Ejecutivo extends Empleado {
    constructor(name, lastname, localidad, departamento, sueldoBasico, beneficio, obraSocial) {
        super(name, lastname, localidad, departamento, sueldoBasico);
        this._beneficio = beneficio;
        this._obraSocial = obraSocial;
    }

    get getBeneficio(){
        return this._beneficio;
    }

    get getObraSocial(){
        return this._obraSocial;
    }
    
    set setBeneficio(beneficio){
        this._beneficio = beneficio;
    }

    set setObraSocial(obraSocial){
        this._obraSocial = obrasocial;
    }
}

let persona01 = new Persona ("Mark", 'Diaz', 'Villa gessel');
let empleado01 = new Empleado ("Jorge", "Perez", "Bs As", "ventas", 5000);
let ejecutivo01 = new Ejecutivo(
    "Romina",
    "Manguel",
    "Capital Federal",
    "RRHH",
    50000,
    "Toyota 2022",
    "Galeno Oro"
);

console.log(Persona.VIDA)

console.table(empleado01.usuario)


console.table(persona01.poli());
console.table(empleado01.poli());
console.table(ejecutivo01.poli());

console.log(persona01.dameDatos());
console.log(empleado01.dameDatos());
console.log(ejecutivo01.dameDatos());

console.log(empleado01.dameDatos())