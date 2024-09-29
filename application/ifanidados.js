let password = 'Hola@Mundo';

if (password.length >= 8) {
    console.log('Primer if superado');
    
    if (password.indexOf(' ') === -1) {
        console.log('La cadena no tiene espacios');

        if (password.indexOf('@') === -1) {
            console.log('La cadena no tiene el caracter "@"');
        } else {
            console.log('Password no válido, contiene "@" y no es permitido.');
        }
    } else {
        console.log('Password no válido, contiene espacios y no es permitido.');
    }
} else {
    console.log('El password necesita 8 caracteres');
}
