//this es un objeto epescial de js que hace
//referencia al contexto que se esta ejecutando
//la funcion
//this referencia al objeto global
//(window en navegadores y global en node)


const objeto = {
    nombre : 'marcos',
    apellido : 'casteli',
    nombreCompleto(){
        const{nombre, apellido} = this;
        return (nombre + " " + apellido)
    },
    imprimir() {
        console.log('Imprimir')
        console.log (this.devicePixelRatio);
    },
    funcionFlecha : () => {
        console.log(this)
    },
    start () {
        console.log (this)
        setInterval (function(){
            console.log(this)
        },2000)
    }
}

objeto.funcionFlecha()
objeto.start()

objeto.nombreCompleto()


objeto.nombre = 'Cristian'
objeto.apodo = "chiquito"

objeto.miNuevaFuncion = function(){
    console.log('nueva funcion')
    console.log(this)
}

//objeto.miNuevaFuncion()
objeto.start()


objeto.miNuevaFuncion = function(){
    console.log ('nueva funcion')
    console.log (this.nombre)
}

//otraConstante --> miNuevaFuncion
const otraConstante = objeto.imprimir;


//alert ('Hola mundo')
var nombre = 'Marcos'
console.log(this)

function dameNombre(){
    console.log('Raul')
    console.log(this)
}

dameNombre()

const dameApellido = function(){
    console.log('Perez')
    console.log(this)
}
dameApellido()



