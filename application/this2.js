/* let cadena = new String ('Marcos')*/

const nombres = {
    titulo : 'Mis Nombres',
    nombres : ['Marcos', 'Pedro'],
    monstrameNombre (){
        this.nombres.forEach(function (nombre){
            console.log(this.titulo, nombre);
        }, this); // Pasamos 'this' como segundo argumento para que haga referencia al objeto 'nombres'
    }
}

nombres.monstrameNombre(); // Aquí llamamos al método 'monstrameNombre()' del objeto 'nombres'


/* function otra (){
    console.log(this)
}

otra()

function Texto(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido
    console.log (this)
}
*/

const nueva = new Texto ('Marcos', 'Castelli')

/* const miObjeto = {
    apellido: 'castelli',
    dameNombre (){
        return 'Marcos';
    },
    imprimir (){
        document.addEventListener('click', evento => {
            console.log(this.apellido);
        })
    }
}

miObjeto.imprimir() */