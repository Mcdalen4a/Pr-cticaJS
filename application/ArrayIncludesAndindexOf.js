const nombres = [
    'marcos',
    'Jorge',
    'luis',
    'rodrigo',
    'gaston',
    'felipe',
    'marcos',
    'gaston',
    'marcos',
    'felipe'
];


console.log (nombres.includes('marcos'.toLocaleLowerCase()));
console.log (nombres.indexOf('marcos',5));

if(nombres.includes('gaston')){
    if (0!= -1) {
    console.log('Si existe');
} else {
    console.log('no existe');
    }
}