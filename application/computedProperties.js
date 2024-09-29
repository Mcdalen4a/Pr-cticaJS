const profesion = 'electricista';
const nombre = 'Ivan';

const profesion2 = 'Tecnico mecanico';
const nombre2 = 'Jose';

const profesion3 = 'tecnico ';

const objeto = {
    profesion: nombre
};
console.log(objeto);

const objeto2 = {};
objeto2[profesion] = nombre;
console.log(objeto2);

const agregarDatos = (objeto, key, valor) => {
    return {...objeto, [key] : valor}
}

const objeto3 = {
    [profesion]: nombre,
    [profesion2]: nombre2,
    [profesion3 + 'en computo'] : nombre,
    [profesion3 + 3] : nombre2
};

console.log(objeto3);

const resultado = agregarDatos(objeto3, 'medico', 'Raul')
console.log(resultado);


