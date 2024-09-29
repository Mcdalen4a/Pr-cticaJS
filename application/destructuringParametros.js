const cliente01 = {
    nombre: 'Juan',
    apellido: 'Perez',
    domicilio: 'Av 3 1500',
    localidad: 'Villa Gesell',
    telefono: '(2255)45-0358',
    estadoCivil:'soltera',
    edad: 50,
    deportes:['Natazion', 'basketball', 'yudo'],
    cajaAhorro:'1255-4545454-333',
    cajaDolares:'4559-4545454-123',
    banco:'ICBC',
};

function print (objeto){
    const {nombre, apellido, telefono} = objeto
    console.log(`${nombre} ${apellido} : ${telefono}`);
}

print (cliente01)

const cliente02 = ['Juan', 'Perez', 'Av 3 1234', '2555-455-4552']

function print2 ([nombre, apellido, tel]){
console.log(`${nombre} ${apellido} : ${tel}`);
}

print2(cliente02);