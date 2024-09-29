let longitudRequerida = 8;
let user = '02345678'
let pass = '12345678'

function isValidPassword(pass,user) {
            if (pass.length === longitudRequerida && pass.indexOf(' ') === -1 && pass.indexOf(user) === -1){
                return true
            }else{
                return false
            }
    }


    console.log(isValidPassword(pass,user));


    //La función indexOf en JavaScript se utiliza para buscar la primera aparición de un valor específico dentro de una cadena y 
    //devuelve la posición del primer carácter de esa ocurrencia. 
    //Si el valor no se encuentra en la cadena, la función devuelve -1.