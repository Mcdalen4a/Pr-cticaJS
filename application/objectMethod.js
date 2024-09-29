const cliente01 = {
    //Propiedades del objeto
    nombre : 'Carlos',
    apellido : 'Zarate',

    //Metodos del objeto
    sumar : (x,y) => {
        return x + y
    },
    restar : function restar (x,y){
        return x - y
    },
    multiplicar
}

//Funcion
function multiplicar (x,y){
    return x * y
}

//utilizando una propiedad o un metodo()
console.log(cliente01.sumar(5,5))
console.log(cliente01.nombre)