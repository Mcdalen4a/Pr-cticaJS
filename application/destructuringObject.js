const cliente01 = {
    nombre : 'Juan',
    apellido : 'Perez',
    domicilio : 'Av 3 1500',
    localidad : 'Villa Gesell',
    tel : '(2255) 45-0358'
};

const {nombre : name, apellido : lastName, tel : telefono, ...otrosDatos} = cliente01;

console.log (lastName);